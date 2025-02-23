const Navbar = () => {
  const Navbackground = {
    background:
      'linear - gradient{90deg, rgba(255, 255, 255, 0.15) 0 %, rgba(255, 255, 255, 0.07) 49 %, rgba(255, 255, 255, 0.15) 100 %}',
  };
  return (
    <div
      className="absolute top-5 left-1/2 transform -translate-x-1/2 md:[1280px] lg:w-[1920px]  bg-gradient-to-r from-[#FFFFFF12] to-[#FFFFFF26] mt-2 rounded-lg z-50"
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
              className="menu text-[14px] menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
          <div className="block">
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
                className="text-[7.5px]"
              >
                True Funded Trader
              </p>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul
            style={{ fontFamily: 'Inter, sans-serif' }}
            className="menu menu-horizontal px-1 text-[14px]"
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
          <a
            style={{ fontFamily: 'Inter, sans-serif' }}
            className="btn btn-ghost"
          >
            {' '}
            <img src="https://i.ibb.co.com/MkrrZ4mN/user.png" alt="" />
            Dashboard
          </a>
          <a
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            className="btn rounded-2xl"
          >
            <span>Get Started</span> <span>></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
