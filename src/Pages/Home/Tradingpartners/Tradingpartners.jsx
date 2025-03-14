const Tradingpartners = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/KzsBMt5k/a81132d45c95d2c9de7348d83db14347-Expires-1741564800-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-iq0.png')] border-none bg-cover bg-center h-[830px] w-full">
      {/* <div className="absolute inset-0 bg-black/50">Hi</div> */}
      <div
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        className="grid bg-[#05133B]/75 text-white  items-center justify-center h-full "
      >
        <div className="text-center text-3xl lg:text-5xl font-bold -mb-28">
          Our Trading Partners
        </div>
        <div className="max-w-[570px] mx-auto">
          <img
            className="w-[432px] h-[520px] flex justify-center items-center mt-12"
            src="https://i.ibb.co.com/QvZZ4Qqd/Untitled-design-19-1.png"
            alt=""
          />
        </div>
        <div className="flex justify-evenly max-w-[570px] mx-auto h-24 w-full lg:w-[570px] bg-green-200 rounded-2xl -mt-2 lg:-mt-32 bg-gradient-to-r from-[#0147e4] via-[#FE55EF] to-[#0046E2] ">
          <h1 className="flex justify-center items-center text-xl lg:text-2xl font-bold">
            MetaTrader 4
          </h1>
          <img
            className="w-28 h-28 flex justify center items-center"
            src="https://i.ibb.co.com/7NZxk4p5/metatardere-1.png"
            alt=""
          />
          <h1 className="flex justify-center items-center text-xl lg:text-2xl font-bold">
            MetaTrader 5
          </h1>
        </div>
        <div className="text-center space-x-8 -mt-2 lg:-mt-20">
          <a
            href=""
            className=" rounded-4xl py-3 px-6 border-2 border-[#00C2FF]"
          >
            Download MT4
          </a>
          <a
            href=""
            className=" rounded-4xl py-3 px-6 border-2 border-[#00C2FF]"
          >
            Download MT5
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tradingpartners;
