const TradingDashboard = () => {
  return (
    <>
      <div
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        className="bg-[#05133B] text-center text-white h-full lg:h-[948px] pt-6 lg:pt-16"
      >
        <div className="absolute left-6 lg:left-64 mt-10 lg:mt-[500px]  w-96 h-96 bg-blue-400 opacity-30 blur-[120px]  rounded-full"></div>
        <h1>
          <span className="text-7xl font-medium">Our Modern</span>
          <span className="text-7xl font-extrabold bg-gradient-to-r from-[#FF2E00] to-[#FFF500]   bg-clip-text text-transparent ml-3">
            Trading Dashboard
          </span>
        </h1>
        <p className="text-lg font-normal w-full lg:w-[1100px] mx-auto pt-7">
          We offer our traders advanced trading analytics, which allows our
          traders to assess their trading status and performance in depth to
          highlight key areas that need improve and also areas of consistent
          performance. The Dashboard is designed to offer traders everything
          they need throughout their trading day in one place.
        </p>
        <div className="flex flex-col lg:flex-row justify-evenly w-full lg:w-10/12 ">
          <div>
            {/* <div className="absolute top-[-20px] left-[-20px] w-[150px] h-[2px] bg-dotted"></div> */}
            {/* <div className="absolute top-[-20px] left-[-20px] w-[2px] h-[150px] bg-dotted"></div> */}

            {/* Dotted Line - Bottom Right */}
            {/* <div className="absolute bottom-[-20px] right-[-20px] w-[150px] h-[2px] bg-dotted"></div> */}
            {/* <div className="absolute bottom-[-20px] right-[-20px] w-[2px] h-[150px] bg-dotted"></div> */}
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
