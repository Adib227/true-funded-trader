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
import Programsection from '../Pages/Programsection/Programsection';
import TradingAssets from '../Pages/TradingAssets/TradingAssets';
import Getfunded from '../Pages/Getfunded/Getfunded';
import Questions from '../Pages/Questions/Questions';
import Fourcards from '../Pages/Fourcards/Fourcards';
import Twocards from '../Pages/Twocards/Twocards';
import Discordsection from '../Pages/Discordsection/Discordsection';
import Optionsection from '../Pages/Optionsection/Optionsection';

const Main = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Featuresection></Featuresection>
      <Threecard></Threecard>
      <Programsection></Programsection>
      <Getfunded></Getfunded>
      <FundedTrader></FundedTrader>
      <TradingDashboard></TradingDashboard>
      <Fundingprogramme></Fundingprogramme>
      <Optionsection></Optionsection>
      <Payouts></Payouts>
      <Fourcards></Fourcards>
      <TradingAssets></TradingAssets>
      <Tradingpartners></Tradingpartners>
      <Affiliate></Affiliate>
      <Twocards></Twocards>
      <Questions></Questions>
      <Testimonial></Testimonial>
      <Discordsection></Discordsection>
      <Connectpage></Connectpage>
      <Footer></Footer>
    </div>
  );
};

export default Main;
