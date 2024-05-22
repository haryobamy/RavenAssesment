import { useEffect } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

function ErrorBoundaryFallback() {
  const error = useRouteError();
  const navigate = useNavigate();

  const reloadHandler = () => {
    if (window) window.location.reload();
  };

  useEffect(() => {
    // Send error to monitoring tool
    if (error) console.log(error);
  }, [error]);

  return (
    <div className="error__container">
      <div className="error__stack">
        <p className="error__text"> An unexpected error has occured. </p>{' '}
        <div className="error__button--container">
          <button onClick={reloadHandler}> Reload Page </button>
          <button onClick={() => navigate('/', { replace: true })}>
            {' '}
            Go Home{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}

export default ErrorBoundaryFallback;
