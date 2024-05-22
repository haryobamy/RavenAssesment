import './topnav.css';

function TopNav() {
  return (
    <section className="currency-info">
      <div className="currency-selector_container">
        <div className="currency-selector">
          <label htmlFor="currency"></label>
          <select name="" id="currency">
            <option value="" data-icon="assests/Bitcon Icons.svg">
              <div>
                <img src="assests/Bitcon Icons.svg" alt="bitcoin" />
                <img src="assests/dollars Icons.svg" alt="usdt" />
              </div>
              BTC/USDT
            </option>
          </select>
        </div>

        <p className="currency-rate">$ 20,645</p>
      </div>
      <div className="currency-details__container">
        <div className="currency-details">
          <span>
            <i className="fa-regular fa-clock"></i> 24h change
          </span>
          <p className="currency_change">520.80 +1.25%</p>
        </div>
        <div className="currency-details">
          <span>
            <i className="fa-solid fa-arrow-up-long"></i> 24h change
          </span>
          <p>520.80 +1.25%</p>
        </div>
        <div className="currency-details">
          <span>
            <i className="fa-solid fa-arrow-down-long"></i> 24h change
          </span>
          <p>520.80 +1.25%</p>
        </div>
        <div className="currency-details">
          <span>
            <i className="fas fa-bar-chart" aria-hidden="true"></i> 24h change
          </span>
          <p>520.80 +1.25%</p>
        </div>
      </div>
    </section>
  );
}

export default TopNav;
