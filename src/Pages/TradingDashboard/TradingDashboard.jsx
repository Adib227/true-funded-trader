const TradingDashboard = () => {
  return (
    <>
      <div
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        className="bg-[#05133B] text-center text-white h-full lg:h-[948px] pt-6 lg:pt-16"
      >
        <div className="absolute left-6 lg:left-64 mt-10 lg:mt-[500px]  w-96 h-96 bg-blue-400 opacity-30 blur-[120px]  rounded-full"></div>
        <h1>
          <span className="text-5xl lg:text-7xl font-medium">Our Modern</span>
          <span className="text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#FF2E00] via-[#FFF500] to-[#FFFFFF]  animate-[gradientText_9s_infinite_alternate_linear] bg-[length:200%_200%] duration-100  bg-clip-text text-transparent ml-3">
            Trading Dashboard
          </span>
        </h1>
        <p className="text-sm lg:text-lg font-normal w-full lg:w-[1100px] mx-auto pt-7">
          We offer our traders advanced trading analytics, which allows our
          traders to assess their trading status and performance in depth to
          highlight key areas that need improve and also areas of consistent
          performance. The Dashboard is designed to offer traders everything
          they need throughout their trading day in one place.
        </p>
        <div className="flex flex-col lg:flex-row justify-evenly w-full lg:w-10/12 ">
          <div>
            <div className="absolute lg:pt-60 lg:pl-96">
              <img
                className="pl-[470px]"
                src="https://i.ibb.co.com/qLkGyxW3/Dot.png"
                alt=""
              />
            </div>
            <div className="absolute lg:pt-56 pl-28">
              <img src="https://i.ibb.co.com/GQS4YWX5/Dot-3.png" alt="" />
            </div>
            <div className="absolute lg:pl-96 lg:pt-96">
              <img
                className="lg:pl-96 lg:pt-40"
                src="https://i.ibb.co.com/kgFFJw8p/Dot-1.png"
                alt=""
              />
            </div>

            {/* Dotted Line - Bottom Right */}
            <div className="absolute  pt-56">
              {' '}
              <img src="https://i.ibb.co.com/dsSZWzc9/Dot-2.png" alt="" />
            </div>
            <div className="absolute pt-44 lg:pt-96">
              {' '}
              <img
                className="pt-28"
                src="https://i.ibb.co.com/dsSZWzc9/Dot-2.png"
                alt=""
              />
            </div>
            <div className="absolute pt-5 lg:pt-56 pl-5 lg:pl-96">
              <img
                className="pl-5 lg:pl-96"
                src="https://i.ibb.co.com/kgFFJw8p/Dot.png"
                alt=""
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="255"
              height="6"
              viewBox="0 0 255 6"
              fill="none"
            >
              {' '}
              <circle cx="5" cy="5" r="1" fill="black" />
            </svg>
            <img
              className="w-full h-full"
              src="https://i.ibb.co.com/CsPYkfjb/Clip-path-group-1.png"
              alt=""
            />
          </div>
          <div className="space-y-7  pt-20">
            <div className="px-6 py-3 flex gap-x-3  bg-[#0F1018] text-white font-bold text-xl rounded-xl shadow-xl w-96 h-16 border-1  border-gray-400 transition-transform duration-1000 hover:translate-x-20 ">
              <span>
                <img
                  className="p-2"
                  src="https://i.ibb.co.com/4RySf6Q0/Icon.png"
                  alt=""
                />
              </span>
              <span className="text-[16px] font-normal flex justify-center items-center ">
                Advanced Account Analysis
              </span>{' '}
            </div>
            <div className="px-6 py-3 flex gap-x-3  bg-[#0F1018] text-white font-bold text-xl rounded-xl shadow-xl w-96 h-16 border-1  border-gray-400 transition-transform duration-1000 hover:translate-x-20 ">
              <span>
                <img
                  className="p-2"
                  src="https://i.ibb.co.com/5hDXyYNx/Icon-1.png"
                  alt=""
                />
              </span>
              <span className="text-[16px] font-normal flex justify-center items-center ">
                Advanced Trading Journal
              </span>{' '}
            </div>
            <div className="px-6 py-3 flex gap-x-3  bg-[#0F1018] text-white font-bold text-xl rounded-xl shadow-xl w-96 h-16 border-1  border-gray-400 transition-transform duration-1000 hover:translate-x-20 ">
              <span>
                <img
                  className="p-2"
                  src="https://i.ibb.co.com/2712KHgR/Icon-2.png"
                  alt=""
                />
              </span>
              <span className="text-[16px] font-normal flex justify-center items-center ">
                Everyday Market Data
              </span>{' '}
            </div>
            <div className="px-6 py-3 flex gap-x-3  bg-[#0F1018] text-white font-bold text-xl rounded-xl shadow-xl w-96 h-16 border-1  border-gray-400 transition-transform duration-1000 hover:translate-x-20 ">
              <span>
                <img
                  className="p-2"
                  src="https://i.ibb.co.com/YBfCNmkT/Group-3.png"
                  alt=""
                />
              </span>
              <span className="text-[16px] font-normal flex justify-center items-center ">
                Free Trials
              </span>{' '}
            </div>
            <div className="px-6 py-3 flex gap-x-3  bg-[#0F1018] text-white font-bold text-xl rounded-xl shadow-xl w-96 h-16 border-1  border-gray-400 transition-transform duration-1000 hover:translate-x-20 ">
              <span>
                <img
                  className="p-2"
                  src="https://i.ibb.co.com/YB0tm03v/dollar-and-bitcoin-exchange-svgrepo-com-1.png"
                  alt=""
                />
              </span>
              <span className="text-[16px] font-normal flex justify-center items-center ">
                Monthly Competition
              </span>{' '}
            </div>
            <div className="px-6 py-3 flex gap-x-3  bg-[#0F1018] text-white font-bold text-xl rounded-xl shadow-xl w-96 h-16 border-1  border-gray-400 transition-transform duration-1000 hover:translate-x-20 ">
              <span>
                <img
                  className="p-2"
                  src="https://i.ibb.co.com/mV0nCh2D/Icon-3.png"
                  alt=""
                />
              </span>
              <span className="text-[16px] font-normal flex justify-center items-center ">
                Leaderboards
              </span>{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TradingDashboard;
