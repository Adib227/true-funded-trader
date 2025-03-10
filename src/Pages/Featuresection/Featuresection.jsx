const Featuresection = () => {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="block lg:flex max-w-full lg:max-w-[1500px] mx-auto justify-center lg:justify-evenly space-y-16 lg:space-y-0  py-16 lg:py-0">
        <div className="bg-white p-10 ml-24 lg:ml-0 shadow-2xl rounded-xl -mt-2 lg:-mt-10 text-center w-72 h-40">
          <span className="text-[42px] font-bold">90 +</span> <br />{' '}
          <span className="font-semibold text-xl">Countries Covered</span>
          <div className="absolute  w-96 h-96 bg-violet-300 opacity-30 rounded-full blur-3xl"></div>
          <div className="absolute lg:ml-[500px]  w-96 h-96 bg-[#FCD13B26] opacity-50 rounded-full blur-3xl"></div>
        </div>
        <div className="bg-white p-10 ml-24 lg:ml-0 shadow-2xl rounded-xl -mt-10 text-center  w-72 h-40">
          <span className="text-[42px] font-bold"> $ 5M +</span> <br />{' '}
          <span className="font-semibold text-xl">Payout Processed</span>
        </div>
        <div className="bg-white p-10 ml-24 lg:ml-0 shadow-2xl rounded-xl -mt-10 text-center  w-72 h-40">
          <span className="text-[42px] font-bold">5 hrs</span> <br />{' '}
          <span className="font-semibold text-xl">Avg. Payout time</span>
        </div>
        <div className="bg-white p-10 ml-24 lg:ml-0 shadow-2xl rounded-xl -mt-10 text-center  w-72 h-40">
          <span className="text-[42px] font-bold"> 1 K+</span> <br />{' '}
          <span className="font-semibold text-xl">Payout Processed</span>
          <div className="absolute  w-96 h-96 bg-violet-300 opacity-30 rounded-full blur-3xl"></div>
        </div>
      </div>
      <div className="block lg:flex justify-between w-full px-2 lg:px-30 h-[700px] lg:h-96 items-center">
        <div className="w-full lg:w-1/4 text-2xl font-extrabold text-[#898989] block lg:flex text-center items-center">
          We are featured in
          <hr className="flex lg:block w-72 lg:w-[1px] h-[1px] lg:h-52 vertical-hr my-8 lg:my-0" />
        </div>
        <div className="w-full lg:w-3/4">
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
            <div className="absolute ml-44 mb-16 w-80 h-80 bg-pink-300 opacity-30 rounded-full blur-3xl"></div>
            <div className="absolute lg:ml-[550px] mb-16 w-60 h-60 bg-pink-300 opacity-30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featuresection;
