import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Home/Footer/Footer';
import Connectpage from '../Pages/Home/Connectpage/Connectpage';
import Testimonial from '../Pages/Home/Testimonial/Testimonial';
import Tradingpartners from '../Pages/Home/Tradingpartners/Tradingpartners';
import Threecard from '../Pages/Home/Threecard/Threecard';
import FundedTrader from '../Pages/FundedTrader/FundedTrader';
import Payouts from '../Pages/Payouts/Payouts';
import Fundingprogramme from '../Pages/Fundingprogramme/Fundingprogramme';
import Affiliate from '../Pages/Affiliate/Affiliate';
import TradingDashboard from '../Pages/TradingDashboard/TradingDashboard';
import Featuresection from '../Pages/Featuresection/Featuresection';

const Main = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Featuresection></Featuresection>
      <Threecard></Threecard>
      <FundedTrader></FundedTrader>
      <TradingDashboard></TradingDashboard>
      <Fundingprogramme></Fundingprogramme>
      <Tradingpartners></Tradingpartners>
      <Affiliate></Affiliate>
      <Payouts></Payouts>
      <Testimonial></Testimonial>
      <Connectpage></Connectpage>
      <Footer></Footer>
    </div>
  );
};

export default Main;
