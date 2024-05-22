import './trading.css';

function Trading() {
  return (
    <section className="buy-section">
      <div className="buy-section__controls-container">
        <div className="order-section__controls">
          <div className="order-section__buy-sell">
            <button className="order-section__button buy-section__button--active">
              Order Book
            </button>

            <button className="order-section__button">Recent Trades</button>
          </div>
        </div>
      </div>

      <div className="buy-section__filters">
        <div className="buy-section__filter-container">
          <img
            src="assests/filter.svg"
            alt="filter"
            className="buy-section__active-filter"
          />
          <img src="assests/filter1.svg" alt="filter1" />
          <img src="assests/filter2.svg" alt="filter2" />
        </div>
        <div className="buy-section__range-selector">
          <select name="" id="">
            <option value="">5</option>
            <option value="">10</option>
            <option value="">15</option>
          </select>
        </div>
      </div>

      <div className="order-book__table">
        <div className="order-book__row order-book__row--header">
          <div className="order-book__cell">Price (USDT)</div>
          <div className="order-book__cell">Amounts (BTC)</div>
          <div className="order-book__cell">Total</div>
        </div>
        <div className="order-book__row order-book__row--sell">
          <div className="order-book__cell">36920.12</div>
          <div className="order-book__cell">0.758965</div>
          <div className="order-book__cell">28,020.98</div>
        </div>
        <div className="order-book__row order-book__row--sell">
          <div className="order-book__cell">36920.12</div>
          <div className="order-book__cell">
            <span className="order-book__badge">
              <i className="fa-solid fa-arrow-up-long"></i>
            </span>
          </div>
          <div className="order-book__cell">28,020.98</div>
        </div>

        <div className="order-book__row order-book__row--buy">
          <div className="order-book__cell order-book__cell--price-green">
            36920.12
          </div>
          <div className="order-book__cell">0.758965</div>
          <div className="order-book__cell">28,020.98</div>
        </div>
      </div>
    </section>
  );
}

export default Trading;
