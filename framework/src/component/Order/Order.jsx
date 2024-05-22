import { useState } from 'react';
import './order.css';

function Order() {
  const [priceValue, setPriceValue] = useState({
    price: '',
    amount: '',
    total: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPriceValue({
      ...priceValue,
      [name]: value,
    });
  };
  return (
    <section className="order-section">
      <div className="order-section__controls">
        <div className="order-section__buy-sell">
          <button className="order-section__button order-section__button--active">
            Buy
          </button>
          <button className="order-section__button">Sell</button>
        </div>
        <div className="order-section__button-limit__container">
          <button className="order-section__button-limit order-section__button-limit__active">
            Limit
          </button>
          <button className="order-section__button-limit">Market</button>
          <button className="order-section__button-limit">Stop-Limit</button>
        </div>
        <div className="order-section__form">
          <div className="order-section__form-group">
            <label htmlFor="price" className="order-section__label">
              Limit price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="order-section__input"
              placeholder="0.00 USD"
              onKeyPress={(event) => {
                if (!/[0-9.]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={handleChange}
            />
          </div>
          <div className="order-section__form-group">
            <label htmlFor="amount" className="order-section__label">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              className="order-section__input"
              placeholder="0.00 USD"
              onChange={handleChange}
              onKeyPress={(event) => {
                if (!/[0-9.]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </div>
          <div className="order-section__form-group">
            <label htmlFor="Type" className="order-section__label">
              Type
            </label>
            <select id="type" className="order-section__input">
              <option value="">Good till cancelled</option>
            </select>
          </div>
          <div className="order-section__form-group--checkbox">
            <input
              type="checkbox"
              id="post"
              className="order-section__checkbox"
            />
            <label
              htmlFor="post"
              className="order-section__label order-section__label--checkbox"
            >
              Post Only
            </label>
          </div>

          <div className="order-section__form-group--total">
            <span className="order-section__total-label">Total</span>
            <span className="order-section__total-value" id="total">
              {(priceValue?.price * priceValue?.amount).toFixed(2) + ' USD'}
            </span>
          </div>
          <button className="order-section__submit">Buy BTC</button>
        </div>
        <div className="divider"></div>
      </div>
      <div className="order-section__summary">
        <div className="order-section__summary-item">
          <span className="order-section__summary-label">
            Total account value:
          </span>
          <span className="order-section__summary-value">0.00</span>
        </div>
        <div className="order-section__summary-item">
          <label htmlFor="currency"></label>
          <select name="" id="currency">
            <option value="">NGN</option>
          </select>
        </div>
        <div className="order-section__summary-item">
          <span className="order-section__summary-label">Open Orders:</span>
          <span className="order-section__summary-value">0.00</span>
        </div>
        <div className="order-section__summary-item">
          <span className="order-section__summary-label">Available</span>
          <span className="order-section__summary-value">0.00</span>
        </div>
        <button className="order-section__deposit">Deposit</button>
      </div>
    </section>
  );
}

export default Order;
