const Featuresection = () => {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="block lg:flex max-w-full lg:max-w-[1500px] mx-auto justify-center lg:justify-evenly space-y-16 lg:space-y-0">
        <div className="bg-white p-10  shadow-2xl rounded-xl -mt-2 lg:-mt-10 text-center w-72 h-40">
          <span className="text-[42px] font-bold">90 +</span> <br />{' '}
          <span className="font-semibold text-xl">Countries Covered</span>
          <div className="absolute  w-96 h-96 bg-violet-300 opacity-30 rounded-full blur-3xl"></div>
        </div>
        <div className="bg-white p-10 shadow-2xl rounded-xl -mt-10 text-center  w-72 h-40">
          <span className="text-[42px] font-bold"> $ 5M +</span> <br />{' '}
          <span className="font-semibold text-xl">Payout Processed</span>
        </div>
        <div className="bg-white p-10 shadow-2xl rounded-xl -mt-10 text-center  w-72 h-40">
          <span className="text-[42px] font-bold">5 hrs</span> <br />{' '}
          <span className="font-semibold text-xl">Avg. Payout time</span>
        </div>
        <div className="bg-white p-10 shadow-2xl rounded-xl -mt-10 text-center  w-72 h-40">
          <span className="text-[42px] font-bold"> 1 K+</span> <br />{' '}
          <span className="font-semibold text-xl">Payout Processed</span>
        </div>
      </div>
      <div className="block lg:flex justify-between w-full px-2 lg:px-30 h-[800px] lg:h-96 items-center">
        <div className="w-1/4 text-2xl font-extrabold text-[#898989]  flex text-center items-center">
          We are featured in
          <hr className="vertical-hr " />
        </div>
        {/* <hr className="w-full h-[2px] bg-black border-none mx-3 my-0 vertical-hr" /> */}
        <div className="w-3/4">
          <div className="grid lg:grid-cols-3  items-center justify-center h-[300px] lg:h-[146px]">
            <img
              className=""
              src="https://i.ibb.co.com/zHL34VpX/nasdaq-1.png"
              alt=""
            />
            <img
              src="https://i.ibb.co.com/1SNZdqT/kingston-standard-1.png"
              alt=""
            />
            <img
              src="https://i.ibb.co.com/MDv8CBfD/Yahoo-Finance-logo-2021-1.png"
              alt=""
            />
          </div>
          <div className="grid lg:grid-cols-3  items-center justify-center h-[300px] lg:h-[146px]">
            <img
              src="https://i.ibb.co.com/FbWgQgwr/streetinsider-logo-1.png"
              alt=""
            />
            <img src="https://i.ibb.co.com/LXYGfx4z/link-3-1.png" alt="" />
            <img
              src="https://i.ibb.co.com/5xTdccjw/digital-journal-logo-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featuresection;
