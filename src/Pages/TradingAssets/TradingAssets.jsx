const TradingAssets = () => {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="text-center">
        <h1 className="font-bold text-3xl lg:text-5xl">
          Trading Assets We are Offering
        </h1>
        <p className="font-normal text-xs lg:text-[14px]">
          with over 300 products listed at our partner broker. We offer traders
          one of the largest selection in the trading space for user to take
          profit on!
        </p>
      </div>
      <div className="w-full lg:w-[1400px] mx-auto">
        <div className="text-center w-[250px] h-[300px] p-10 rounded-3xl shadow-[0px_2px_5.3px_0px_rgba(255,101,35,0.30)]">
          <img
            className="p-6 ml-8 -mt-20 bg-white rounded-full shadow-[0px_2px_5.3px_0px_rgba(255,101,35,0.30)]"
            src="https://i.ibb.co.com/sdWn3v8X/fx-svgrepo-com-1.png"
            alt=""
          />{' '}
          <h2 className="text-xl font-bold pt-10">Forex</h2>
          <p className="text-xs font-normal pt-4">
            Trade over 50 major and minor{' '}
            <span className="font-semibold">forex</span> pairs
          </p>
          <a
            href=""
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            className="font-semibold  rounded-2xl flex lg:block  px-4 lg:px-7 pt-1 lg:pt-2.5  text-white  bg-gradient-to-r from-[#FF521C] via-[#FFB21E] to-[#FBFF2B] hover:bg-blue-950 hover:bg-none border-0 shadow-md   hover:border-2 hover:border-[#0DFFF0]   transition-all  duration-75      hover:shadow-cyan-300 h-8 lg:h-11  lg:w-48 text-center "
          >
            <span>Start Funding</span>
          </a>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default TradingAssets;
