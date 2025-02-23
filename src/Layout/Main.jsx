import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Home/Footer/Footer';
import Connectpage from '../Pages/Home/Connectpage/Connectpage';

const Main = () => {
  return (
    <div className="w-[1920px]">
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <Home></Home> */}
      <Connectpage></Connectpage>
      <Footer></Footer>
    </div>
  );
};

export default Main;
