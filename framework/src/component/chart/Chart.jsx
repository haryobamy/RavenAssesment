import './chart.css';
import ReactApexChart from 'react-apexcharts';
import dayjs from 'dayjs';
import { chartInterval, sampleData, seriesDataLinear } from './chartData';
import { useState, useCallback, useEffect } from 'react';
import { FiMaximize2 } from 'react-icons/fi';
import { BiUndo } from 'react-icons/bi';
import { FaChartLine } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { useLazyGetCoinChartQuery } from '../../constant/redux/Coin/coinapi';

function Chart() {
  const { baseCurrency, selectedCoin } = useSelector((state) => state?.coins);
  const [getCoinChart, { data }] = useLazyGetCoinChartQuery();
  const [activeTime, setActiveTime] = useState('1h');

  useEffect(() => {
    getCoinChart({
      id: selectedCoin?.id,
      currency: baseCurrency,
      days: 2,
    });
  }, [getCoinChart, selectedCoin, baseCurrency]);

  console.log({ data });

  const transformPriceData = data?.prices?.map((entry) => {
    const [timestamp, openPrice, highPrice, lowPrice, closePrice] = entry;

    return {
      x: new Date(timestamp),
      y: [openPrice, highPrice, lowPrice, closePrice],
    };
  });

  console.log({ transformPriceData });

  const series = [
    {
      data: transformPriceData,
    },
  ];

  const options = {
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

  const optionsBar = {
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

  const changeInterval = useCallback((interval) => {
    setActiveTime(interval);
  }, []);

  return (
    <section className="chart-section">
      <div className="chart-section__header">
        <p className="chart-section__time-label">Time</p>
        <div className="chart-section__interval-buttons">
          <>
            {chartInterval?.map((intervals, idx) => {
              return (
                <button
                  key={idx}
                  className={`chart-section__interval-button ${
                    activeTime === intervals.value &&
                    'chart-section__interval-button--active'
                  } `}
                  data-interval={intervals.value}
                  onClick={() => changeInterval(intervals.value)}
                >
                  {intervals.value}
                </button>
              );
            })}
          </>
        </div>
        <div className="chart-section__tools">
          <button className="chart-section__tool-button">
            <FaChartLine />
          </button>
          <button className="chart-section__tool-button">Fx Indicators</button>
          <button className="chart-section__tool-button">
            <BiUndo />
          </button>
        </div>
        <div className="chart-section__maximize">
          <button className="chart-section__maximize-button">
            <FiMaximize2 />
          </button>
        </div>
      </div>
      <div className="divider" />
      <div className="chart-section__info">
        <span className="chart-section__info-item">
          {selectedCoin?.symbol?.toUpperCase()}/{baseCurrency.toUpperCase()}
        </span>
        <p className="chart-section__info-item">
          O <span>66,567</span>
        </p>
        <p className="chart-section__info-item">
          H <span>{selectedCoin?.high_24h}</span>
        </p>
        <p className="chart-section__info-item">
          L <span>{selectedCoin?.low_24h}</span>
        </p>
        <p className="chart-section__info-item">
          C <span>56,669</span>
        </p>
        <p className="chart-section__info-item">
          Change{' '}
          <span>{selectedCoin?.price_change_percentage_24h?.toFixed(2)}%</span>
        </p>
        <p className="chart-section__info-item">
          Amplitude <span>65.7%</span>
        </p>
      </div>
      <div className="chart-section__chart">
        <ReactApexChart
          options={options}
          series={series}
          type="candlestick"
          height={300}
          width="100%"
        />
        <div className="divider"></div>
        <ReactApexChart
          options={optionsBar}
          series={seriesDataLinear}
          type="bar"
          height={300}
          width="100%"
        />
      </div>
    </section>
  );
}

export default Chart;
