import { useState } from 'react';

const FundedTrader = () => {
  const [text, setText] = useState('Get Funded Now');

  return (
    <div>
      <section
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        className="relative flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between   overflow-hidden h-[664px] w-[1680px] mx-auto"
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src="https://i.ibb.co.com/Dgt3dvgw/Logo-1.png"
            alt="Background"
            className=""
          />
        </div>

        <div className="absolute top-10 left-1/6 w-80 h-80 bg-pink-300 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>

        {/* Left Side Content */}
        <div className="relative z-10  space-y-10 pt-5 lg:pt-48 w-full max-w-none">
          <h2 className="text-xl lg:text-5xl font-bold">About</h2>
          <h1 className="text-3xl lg:text-7xl font-bold mb-4 lg:mb-24">
            True Funded Trader
          </h1>
          <a
            href=""
            onMouseEnter={() => setText('View Challenges')}
            onMouseLeave={() => setText('Get Funded Now')}
            className="relative py-4 px-8  bg-gradient-to-r from-[#FF5C00] via-[#0DFFF0] to-[#FA0DFF] animate-[gradientMove_8s_infinite_alternate_linear] bg-[length:200%_200%] rounded-4xl font-bold  hover:bg-blue-950 hover:bg-none border-0 shadow-xl   hover:border-2 hover:border-[#0DFFF0]   transition-all  duration-75 text-[15px] text-white"
          >
            {text}
            {/* <span className="hover:hidden inline">Get Funded Now</span>
            <span className="hidden hover:inline">View Challenges</span> */}
          </a>
        </div>

        {/* Right Side Content */}
        <div className="relative z-10 max-w-none  pt-24 text-gray-700 mt-8 lg:mt-0 w-full text-[22px] font-normal">
          <p>
            We're a team of elite financial professionals whose unwavering focus
            is empowering traders with the tools and resources to achieve
            unprecedented success. At True Funded Trader we have always aspired
            to be more than a funding company. Our core mission is to empower
            traders with tools and Insights to outsmart the markets. This vision
            drives us towards a significant transformation.
          </p>
          <p className="mt-4">
            <br />
            We help our traders gain accurate Insight to achieve unparalleled
            performance with our ingenious dashboard. Experience unrivaled
            support and unparalleled success in the forex markets with our
            accredited market experts, Offering personalized 1-on-1 risk
            reviews. Become a professional trader by joining us today!
          </p>
        </div>
      </section>
    </div>
  );
};

export default FundedTrader;
