document.addEventListener('DOMContentLoaded', () => {
  //candlestick

  // Setting initial active interval button
  document
    .querySelector(
      '.chart-section__interval-buttons button[data-interval="1h"]'
    )
    .classList.add('chart-section__interval-button--active');

  const sampleData = {
    '1h': [
      // Sample data
      {
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33],
      },
      { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
      {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65],
      },
      { x: new Date(1538784000000), y: [6635.65, 6651, 6629.67, 6638.24] },
      { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },
      {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31],
      },
      { x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6626.02] },
      { x: new Date(1538791200000), y: [6627, 6627.62, 6584.22, 6603.02] },
      { x: new Date(1538793000000), y: [6605, 6608.03, 6598.95, 6604.01] },
      { x: new Date(1538794800000), y: [6604.5, 6614.4, 6602.26, 6608.02] },
    ], // Data for 1 hour interval
    '2h': [
      // Sample data
      {
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33],
      },
      { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
      {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65],
      },
      { x: new Date(1538784000000), y: [6635.65, 6651, 6629.67, 6638.24] },
      { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },
      {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31],
      },
      { x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6626.02] },
      { x: new Date(1538791200000), y: [6627, 6627.62, 6584.22, 6603.02] },
      { x: new Date(1538793000000), y: [6605, 6608.03, 6598.95, 6604.01] },
      { x: new Date(1538794800000), y: [6604.5, 6614.4, 6602.26, 6608.02] },
    ], // Data for 2 hours interval
    '4h': [
      // Sample data
      {
        x: new Date(1539778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33],
      },
      { x: new Date(1538880400000), y: [6632.01, 6643.59, 6620, 6630.11] },
      {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65],
      },
      { x: new Date(1538784000000), y: [6635.65, 6651, 6629.67, 6638.24] },
      { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },
      {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31],
      },
      { x: new Date(1538889400000), y: [6624.61, 6632.2, 6617, 6626.02] },
      { x: new Date(1538791200000), y: [6627, 6627.62, 6584.22, 6603.02] },
      { x: new Date(1538793000000), y: [6605, 6608.03, 6598.95, 6604.01] },
      { x: new Date(1538794800000), y: [6604.5, 6614.4, 6602.26, 6608.02] },
    ], // Data for 4 hoours interval
    '1d': [
      {
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33],
      },
      { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
      {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65],
      },
      { x: new Date(1538784000000), y: [6635.65, 6651, 6629.67, 6638.24] },
      { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },
      {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31],
      },
      { x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6626.02] },
      { x: new Date(1538791200000), y: [6627, 6627.62, 6584.22, 6603.02] },
      { x: new Date(1538793000000), y: [6605, 6608.03, 6598.95, 6604.01] },
      { x: new Date(1538794800000), y: [6604.5, 6614.4, 6602.26, 6608.02] },
    ], // Data for 1 day interval
  };

  const seriesDataLinear = [
    {
      x: new Date(1538778600000),
      y: [6629.81, 6650.5, 6623.04, 6633.33],
    },
  ];

  var options = {
    chart: {
      type: 'candlestick',
      height: 350,
      id: 'candles',
      toolbar: {
        autoSelected: 'pan',
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    series: [
      {
        data: sampleData['1h'],
      },
    ],

    xaxis: {
      type: 'datetime',
      labels: {
        formatter: function (val) {
          return dayjs(val).format('MM/DD ');
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },

    plotOptions: {
      candlestick: {
        colors: {
          upward: '#00C076',
          downward: '#FF6838',
        },
      },
    },
  };

  var chart = new ApexCharts(
    document.querySelector('#candlestick-chart'),
    options
  );

  chart.render();

  var optionsBar = {
    series: [
      {
        name: 'volume',
        data: seriesDataLinear,
      },
    ],
    chart: {
      height: 400,
      type: 'bar',
      brush: {
        enabled: true,
        target: 'candles',
      },
      selection: {
        enabled: true,
        xaxis: {
          min: new Date('20 Jan 2017').getTime(),
          max: new Date('10 Dec 2017').getTime(),
        },
        fill: {
          color: '#ccc',
          opacity: 0.4,
        },
        stroke: {
          color: '#0D47A1',
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        columnWidth: '80%',
        colors: {
          ranges: [
            {
              from: -1000,
              to: 0,
              color: '#F15B46',
            },
            {
              from: 1,
              to: 10000,
              color: '#FEB019',
            },
          ],
        },
      },
    },
    stroke: {
      width: 0,
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        offsetX: 13,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  };

  var chartBar = new ApexCharts(
    document.querySelector('#chart-bar'),
    optionsBar
  );
  chartBar.render();

  // Updating chart data based on selected interval button
  document
    .querySelectorAll('.chart-section__interval-buttons button')
    .forEach((button) => {
      button.addEventListener('click', function () {
        console.log('it is clicked');
        const interval = this.getAttribute('data-interval');
        console.log(interval);
        chart.updateSeries([
          {
            data: sampleData[interval],
          },
        ]);

        // Updating active state of the interval button buttons
        document
          .querySelectorAll('.chart-section__interval-buttons button')
          .forEach((btn) =>
            btn.classList.remove('chart-section__interval-button--active')
          );
        this.classList.add('chart-section__interval-button--active');
      });
    });
});

//auth form

document
  .getElementById('authForm')
  .addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const hash = md5(email.trim().toLowerCase());
    const gravatarUrl = `https://www.gravatar.com/avatar/${hash}`;

    // Update Gravatar image
    document.getElementById('gravatar').src = gravatarUrl;

    // Fetch GitHub repositories
    const githubRepos = await getGithubRepos(email);
    const reposList = document.getElementById('repos');
    reposList.innerHTML = '';
    githubRepos.forEach((repo) => {
      const listItem = document.createElement('li');
      listItem.textContent = repo.full_name;
      reposList.appendChild(listItem);
    });
  });

// Function to fetch GitHub repositories
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

document.addEventListener('DOMContentLoaded', () => {
  //updates the buy and sell order form

  const priceInput = document.getElementById('price');
  const amountInput = document.getElementById('amount');
  const totalInput = document.getElementById('total');

  function updateTotal() {
    const price = parseFloat(priceInput.value) || 0;
    const amount = parseFloat(amountInput.value) || 0;
    totalInput.innerHTML = (price * amount).toFixed(2) + ' USD';
    console.log({ totalInput });
  }

  priceInput.addEventListener('input', updateTotal());
  amountInput.addEventListener('input', updateTotal());
});
