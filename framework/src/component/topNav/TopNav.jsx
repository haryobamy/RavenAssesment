import { useEffect, useState } from 'react';
import { useLazyGetCoinsQuery } from '../../constant/redux/Coin/coinapi';
import './topnav.css';
import CustomSelect from '../customSelect/CustomSelect';
import baseCoin from '../../assets/Bitcon Icons.svg';
import { formatPrice } from '../../constant/utils/utils';
import {
  FaArrowDownLong,
  FaArrowUpLong,
  FaChartColumn,
  FaRegClock,
} from 'react-icons/fa6';

function TopNav() {
  const [getCoins, { data }] = useLazyGetCoinsQuery();
  const [baseCurrency, setBasecurrency] = useState('ngn');
  const [selectedCurrency, setSelectedCurrency] = useState({});

  useEffect(() => {
    getCoins(baseCurrency);
  }, [baseCurrency, getCoins]);

  console.log({ selectedCurrency });

  return (
    <section className="currency-info">
      <div className="currency-selector_container">
        <div className="currency-selector">
          <label htmlFor="currency"></label>
          <CustomSelect
            onChange={(option) => {
              const cur = data?.find((coin) => coin?.symbol === option?.value);
              setSelectedCurrency(cur);
            }}
            options={
              data &&
              data?.map((coin) => {
                return {
                  label: `${coin.symbol}/${baseCurrency}`,
                  value: coin.symbol,
                  icon: (
                    <span className="currency__icon">
                      <img src={coin.image} alt="coin" />
                      <img
                        src={baseCoin}
                        alt="coin"
                        className="currency__icon-base-currency"
                      />
                    </span>
                  ),
                };
              })
            }
          />
        </div>

        <p className="currency-rate">
          {formatPrice(selectedCurrency?.current_price, {
            currency: baseCurrency,
          })}
        </p>
      </div>
      <div className="currency-details__container">
        <div className="currency-details">
          <span>
            <FaRegClock /> 24h change
          </span>
          <p className="currency_change">
            <span>{selectedCurrency?.price_change_24h?.toFixed(2)}</span>{' '}
            <span>
              {' '}
              {selectedCurrency?.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </p>
        </div>
        <div className="currency-details">
          <span>
            <FaArrowUpLong />
            24h high
          </span>
          <p className="currency_change">
            <span>{selectedCurrency?.high_24h?.toFixed(2)}</span>{' '}
            <span>+1.25% </span>
          </p>
        </div>
        <div className="currency-details">
          <span>
            <FaArrowDownLong />
            24h low
          </span>
          <p className="currency_change">
            <span>{selectedCurrency?.low_24h?.toFixed(2)}</span>{' '}
            <span>+1.25%</span>
          </p>
        </div>
        <div className="currency-details">
          <span>
            <FaChartColumn /> 24h volume
          </span>
          <p>
            <span>{selectedCurrency?.total_volume?.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default TopNav;
