const Footer = () => {
  return (
    <div className="w-full lg:max-w-[1920px] mx-auto ">
      <footer
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        className=" footer sm:footer-horizontal bg-[#05133B]  p-12 justify-between text-white"
      >
        <aside className="pl-2 lg:pl-28">
          <img
            src="
          https://i.ibb.co.com/Dgj2XpyD/Logo-true-1-1.png"
            alt=""
          />{' '}
          <p
            style={{ fontFamily: 'Inter, sans-serif' }}
            className="font-normal lg:font-semibold text-[14px] lg:text-xl pt-3 lg:pt-16"
          >
            <span> Join Our</span>{' '}
            <span className="text-[#0A7CFF]">Community</span>
          </p>
          <p className="">
            <button className="w-8 lg:w-10 h-8 lg:h-10 mr-1 lg:mr-2 border rounded-full justify-center align-middle justify-items-center">
              <img
                src="https://i.ibb.co.com/KjT1fSNy/facebook-176-svgrepo-com-1.png"
                alt=""
              />
            </button>
            <button className="w-8 lg:w-10 h-8 lg:h-10 mr-1 lg:mr-2  border rounded-full justify-center align-middle justify-items-center hover:border-2 hover:border-[#0DFFF0]">
              <img
                src="https://i.ibb.co.com/hxhbBfBb/youtube-svgrepo-com-1.png"
                alt=""
              />
            </button>
            <button className="w-8 lg:w-10 h-8 lg:h-10 mr-1 lg:mr-2  border rounded-full justify-center align-middle justify-items-center">
              <img
                src="https://i.ibb.co.com/Xxwrwdqm/instagram-svgrepo-com-1.png"
                alt=""
              />
            </button>
            <button className="w-8 lg:w-10 h-8 lg:h-10 mr-1 lg:mr-2  border rounded-full justify-center align-middle justify-items-center">
              <img
                src="https://i.ibb.co.com/1GCWqbxx/telegram-alt-svgrepo-com-1.png"
                alt=""
              />
            </button>
            <button className="w-8 lg:w-10 h-8 lg:h-10 mr-1 lg:mr-2  border rounded-full justify-center align-middle justify-items-center">
              <img
                src="https://i.ibb.co.com/3YcjKnc0/8546766-discord-icon-1.png"
                alt=""
              />
            </button>
            <button className="w-8 lg:w-10 h-8 lg:h-10 mr-1 lg:mr-2  border rounded-full justify-center align-middle justify-items-center">
              <img
                src="https://i.ibb.co.com/r2h1L8cq/11053969-x-logo-twitter-new-brand-icon-1.png"
                alt=""
              />
            </button>
          </p>
        </aside>
        <nav className="gap-y-2 lg:gap-y-4">
          <h6
            style={{ fontFamily: 'Inter, sans-serif' }}
            className="text-2xl font-semibold"
          >
            QUICK LINKS
          </h6>
          <a className="text-[#B3B3B3] font-semibold text-[15px]">Contact Us</a>
          <a className="text-[#B3B3B3] font-semibold text-[15px]">
            Affiliate Program
          </a>
          <a className="text-[#B3B3B3] font-semibold text-[15px]">FAQ/Rules</a>
          <a className="text-[#B3B3B3] font-semibold text-[15px]">
            Terms of Services
          </a>
          <a className="text-[#B3B3B3] font-semibold text-[15px]">
            Privacy Policy
          </a>
          <a className="text-[#B3B3B3] font-semibold text-[15px]">
            Risk Disclosure
          </a>
          <a className="text-[#B3B3B3] font-semibold text-[15px]">
            Cookie Policy
          </a>
        </nav>

        <nav>
          <h6 className="text-2xl lg:text-3xl font-semibold ">
            SIGN UP FOR EMAIL UPDATES
          </h6>
          <p className="pt-4 pb-7">
            Sign up with your email address to <br /> receive news and updates
          </p>
          <div className="flex">
            <input className="input rounded-3xl w-xs lg:w-xl  border-2 border-[#1F87FF] bg-[#D9D9D980]" />
            <button
              style={{ fontFamily: 'Inter, sans-serif' }}
              className=" join-item rounded-full text-[18px] p-2.5 -ml-[150px] font-semibold  bg-[#1F87FF]"
            >
              Subscribe Now
            </button>
          </div>
        </nav>
      </footer>
      <footer
        style={{ fontFamily: 'Consolas, sans-serif' }}
        className=" footer text-white sm:w-fit md:w-fit lg:w-[1903px] sm:footer-horizontal footer-center bg-[#05133B]  p-4 border-t"
      >
        <aside>
          <p>Copyright 2024 True Funded Trader. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
