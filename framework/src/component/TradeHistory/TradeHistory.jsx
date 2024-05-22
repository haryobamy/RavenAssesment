import './tradeHistory.css';

function TradeHistory() {
  return (
    <section className="history-section">
      <div className="history-section__controls-container">
        <div className="history-section__controls">
          <div className="history-section__buy-sell">
            <button className="history-section__button history-section__button--active">
              Open Orders
            </button>
            <button className="history-section__button">Positions</button>
            <button className="history-section__button">Order History</button>
            <button className="history-section__button">Trade History</button>
          </div>
        </div>
      </div>

      <div className="history-section__body">
        <h2 className="history-section__title">No Open Orders</h2>
        <span className="history-section__description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
          tenetur vitae omnis nulla perferendis fugit nam architecto dolore
          recusandae delectus.
        </span>
      </div>
    </section>
  );
}

export default TradeHistory;
