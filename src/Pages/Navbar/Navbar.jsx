const Navbar = () => {
  const Navbackground = {
    background:
      'linear - gradient{90deg, rgba(255, 255, 255, 0.15) 0 %, rgba(255, 255, 255, 0.07) 49 %, rgba(255, 255, 255, 0.15) 100 %}',
  };
  return (
    <div
      className="absolute top-5 left-1/2 transform -translate-x-1/2 md:[1280px] lg:w-[1920px]  bg-gradient-to-r from-[#FFFFFF12] to-[#FFFFFF26] mt-2 rounded-lg "
      style={Navbackground}
      // style="background: linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.07) 49%, rgba(255, 255, 255, 0.15) 100%);"
    >
      <div className="navbar">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
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
          <div className="block text-center">
            <div>
              <img
                className="w-[84px] h-[50px]"
                src="https://i.ibb.co.com/kVcGBDDC/Vector.png"
                alt=""
              />
            </div>
            <div>
              <p
                style={{ fontFamily: 'Audiowide, sans-serif' }}
                className="text-[7.5px] text-white"
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
        <div className="navbar-end">
          <button className="relative inline-block p-[2px] rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 ">
            <span className="block px-6 py-2 text-white font-bold rounded-lg bg-gradient-to-r from-[#FF521C] via-[#FFB21E] to-[#FBFF2B] hover:from-black hover:via-green-300 hover:to-black transition-all duration-1000 animate-[gradientMove_5s_infinite_alternate_ease-in-out] bg-[length:1000%_1000%] ">
              Gradient Border Button
            </span>
          </button>

          <button
            style={{ fontFamily: 'Inter, sans-serif' }}
            className="flex pr-2 bg-amber-400 rounded-3xl py-2 px-4 "
          >
            {' '}
            <img src="https://i.ibb.co.com/MkrrZ4mN/user.png" alt="" />
            Dashboard
          </button>
          <button
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            className="font-bold rounded-2xl block px-7 py-2 text-white  bg-gradient-to-r from-[#FF521C] via-[#FFB21E] to-[#FBFF2B] hover:bg-green-300"
          >
            <span>Get Started</span> <span>></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
