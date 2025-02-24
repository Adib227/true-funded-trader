import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Home/Footer/Footer';
import Connectpage from '../Pages/Home/Connectpage/Connectpage';
import Testimonial from '../Pages/Home/Testimonial/Testimonial';

const Main = () => {
  return (
    <div className="w-[1920px]">
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <Home></Home> */}
      <Testimonial></Testimonial>
      <Connectpage></Connectpage>
      <Footer></Footer>
    </div>
  );
};

export default Main;
