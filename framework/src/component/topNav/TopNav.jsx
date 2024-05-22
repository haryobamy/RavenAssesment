import { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCoin } from '../../constant/redux/Coin/coinSlice';

function TopNav() {
  const dispatch = useDispatch();
  const [getCoins] = useLazyGetCoinsQuery();

  const { coins, baseCurrency, selectedCoin } = useSelector(
    (state) => state?.coins
  );

  useEffect(() => {
    getCoins(baseCurrency);
  }, [baseCurrency, getCoins]);

  useEffect(() => {
    dispatch(setSelectedCoin(coins[0]));
  }, [coins, dispatch]);

  return (
    <section className="currency-info">
      <div className="currency-selector_container">
        <div className="currency-selector">
          <label htmlFor="currency"></label>
          <CustomSelect
            onChange={(option) => {
              const cur = coins?.find((coin) => coin?.symbol === option?.value);

              dispatch(setSelectedCoin(cur));
            }}
            options={
              coins &&
              coins?.map((coin) => {
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
          {formatPrice(selectedCoin?.current_price, {
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
            <span>{selectedCoin?.price_change_24h?.toFixed(2)}</span>{' '}
            <span>
              {' '}
              {selectedCoin?.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </p>
        </div>
        <div className="currency-details">
          <span>
            <FaArrowUpLong />
            24h high
          </span>
          <p className="currency_change">
            <span>{selectedCoin?.high_24h?.toFixed(2)}</span>{' '}
            <span>+1.25% </span>
          </p>
        </div>
        <div className="currency-details">
          <span>
            <FaArrowDownLong />
            24h low
          </span>
          <p className="currency_change">
            <span>{selectedCoin?.low_24h?.toFixed(2)}</span> <span>+1.25%</span>
          </p>
        </div>
        <div className="currency-details">
          <span>
            <FaChartColumn /> 24h volume
          </span>
          <p>
            <span>{selectedCoin?.total_volume?.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default TopNav;
