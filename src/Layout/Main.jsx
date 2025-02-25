import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Home/Footer/Footer';
import Connectpage from '../Pages/Home/Connectpage/Connectpage';
import Testimonial from '../Pages/Home/Testimonial/Testimonial';
import Tradingpartners from '../Pages/Home/Tradingpartners/Tradingpartners';
import Threecard from '../Pages/Home/Threecard/Threecard';
import FundedTrader from '../Pages/FundedTrader/FundedTrader';

const Main = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Threecard></Threecard>
      <FundedTrader></FundedTrader>
      <Tradingpartners></Tradingpartners>
      <Testimonial></Testimonial>
      <Connectpage></Connectpage>
      <Footer></Footer>
    </div>
  );
};

export default Main;
