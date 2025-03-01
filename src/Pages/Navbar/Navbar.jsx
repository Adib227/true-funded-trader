const Navbar = () => {
  const Navbackground = {
    background:
      'linear - gradient{90deg, rgba(255, 255, 255, 0.15) 0 %, rgba(255, 255, 255, 0.07) 49 %, rgba(255, 255, 255, 0.15) 100 %}',
  };
  return (
    <div
      className="absolute top-5 w-full lg:max-w-[1920px] mx-auto  left-1/2 transform -translate-x-1/2 sm:w-full md:[1280px]  bg-gradient-to-r from-[#FFFFFF12] to-[#FFFFFF26] mt-2 rounded-lg "
      style={Navbackground}
      // style="background: linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.07) 49%, rgba(255, 255, 255, 0.15) 100%);"
    >
      <div className="navbar">
        <div className="navbar-start ">
          <div className="dropdown">
            {/* <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div> */}
            <ul
              tabIndex={0}
              className="menu text-[14px] text-white menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="text-[#FF451C]">Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Challenges</a>
              </li>
              <li>
                <a>FAQs</a>
              </li>
              <li>
                <a>Payouts</a>
              </li>
              <li>
                <a>Affiliate</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="block text-center pl-0 lg:pl-24">
            <div>
              <img
                className="w-[88px] h-[55px]"
                src="https://i.ibb.co.com/kVcGBDDC/Vector.png"
                alt=""
              />
            </div>
            <div>
              <p
                style={{ fontFamily: 'Audiowide, sans-serif' }}
                className="text-[8px] text-white"
              >
                True Funded Trader
              </p>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul
            style={{ fontFamily: 'Inter, sans-serif' }}
            className="menu menu-horizontal px-1 text-[14px] text-white"
          >
            <li>
              <a className="text-[#FF451C]">Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Challenges</a>
            </li>
            <li>
              <a>FAQs</a>
            </li>
            <li>
              <a>Payouts</a>
            </li>
            <li>
              <a>Affiliate</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end pr-20">
          {/* <a
            href=""
            className="relative inline-block p-[2px] rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 "
          >
            <span className="block px-6 py-2 text-white font-bold rounded-lg bg-gradient-to-r from-[#FF521C] via-[#FFB21E] to-[#FBFF2B] hover:from-black hover:via-green-300 hover:to-black transition-all duration-1000 animate-[gradientMove_5s_infinite_alternate_ease-in-out] bg-[length:1000%_1000%] ">
              Gradient Border Button
            </span>
          </a> */}

          <a
            href=""
            type="button"
            style={{ fontFamily: 'Inter, sans-serif' }}
            className="flex mr-0 lg:mr-8  rounded-3xl py-2 px-4 text-white gap-x-2 "
          >
            {' '}
            <img
              className=""
              src="https://i.ibb.co.com/MkrrZ4mN/user.png"
              alt=""
            />
            Dashboard
          </a>
          <a
            href=""
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            className="font-semibold rounded-2xl flex lg:block px-4 lg:px-7 pt-1 lg:pt-2.5  text-white  bg-gradient-to-r from-[#FF521C] via-[#FFB21E] to-[#FBFF2B] hover:bg-blue-950 hover:bg-none border-0 shadow-md   hover:border-2 hover:border-[#0DFFF0]   transition-all  duration-75      hover:shadow-cyan-300 h-8 lg:h-11  lg:w-48 text-center "
          >
            <span>Get Started</span> <span>></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
