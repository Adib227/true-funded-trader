const Navbar = () => {
  return (
    <div className="">
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
              style={{ fontFamily: 'Inter, sans-serif' }}
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
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
          <img
            className="w-15 h-13"
            src="https://i.ibb.co.com/HLR945y2/Logo-true-1.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul
            style={{ fontFamily: 'Inter, sans-serif' }}
            className="menu menu-horizontal px-1"
          >
            <li>
              <a>Home</a>
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
          <a className="btn btn-ghost">
            {' '}
            <img src="https://i.ibb.co.com/MkrrZ4mN/user.png" alt="" />
            Dashboard
          </a>
          <a className="btn rounded-2xl">Get Started > </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
