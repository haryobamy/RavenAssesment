import Navbar from '../component/Navbar/Navbar';
import TopNav from '../component/topNav/TopNav';
import Chart from '../component/chart/Chart';
import Trading from '../component/Trading/Trading';
import Order from '../component/Order/Order';
import TradeHistory from '../component/TradeHistory/TradeHistory';
import Footer from '../component/Footer/Footer';

function Dashboard() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <TopNav />
        <div className="main-section">
          <Chart />
          <Trading />
          <Order />
        </div>
        <TradeHistory />
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
