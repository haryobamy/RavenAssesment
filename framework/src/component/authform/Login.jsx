import { useCallback, useState } from 'react';
import './login.css';
import md5 from 'md5';

function Login() {
  const [email, setEmail] = useState('');
  const [gravatarUrl, setGravatarUrl] = useState('');
  const [repos, setRepos] = useState([]);

  async function getGithubRepos(email) {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${email}`
      );
      const data = await response.json();
      if (data.items.length > 0) {
        const githubUsername = data.items[0].login;
        const reposResponse = await fetch(
          `https://api.github.com/users/${githubUsername}/repos`
        );
        const repos = await reposResponse.json();
        return repos;
      }
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
    }
    return [];
  }

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const hash = md5(email.trim().toLowerCase());
      const gravatarUrl = `https://www.gravatar.com/avatar/${hash}`;
      setGravatarUrl(gravatarUrl);
      // Fetch GitHub repositories
      const githubRepos = await getGithubRepos(email);
      setRepos(githubRepos);
    },
    [email]
  );

  return (
    <div className="auth_container">
      <h1>Auth Screen</h1>
      <form id="authForm" onSubmit={onSubmit} className="auth_form">
        <div className="input__wrapper">
          <label className="input__label" htmlFor="email">
            Email
          </label>
          <input
            className="input__field"
            type="email"
            id="email"
            name="email"
            placeholder="Please Enter your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="auth__button" type="submit">
          Submit
        </button>
      </form>
      <div id="userInfo" className="user__info">
        <h2>Gravatar</h2>
        <img
          id="gravatar"
          src={gravatarUrl}
          alt="Gravatar"
          className="auth-screen__gravatar"
        />
        <h2>GitHub Repositories</h2>
        <ul id="repos" className="auth-screen__repos">
          {repos?.map((repo, idx) => {
            return <li key={idx}>{repo.full_name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Login;
