const Fundingprogramme = () => {
  return (
    <div
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      className="bg-[#05133B] text-white flex flex-row lg:flex-col"
    >
      <div className="text-center pt-14 pb-20">
        <span className="text-5xl font-extrabold"> Why Choose </span>
        <span className="text-5xl font-normal">
          {' '}
          Our <br /> Funding Program?
        </span>
      </div>
      <div className="flex flex-col lg:flex-row w-[1450px] mx-auto justify-between ">
        {/* left side starts here */}

        <h1>
          <p>
            {' '}
            <div className="relative z-10 flex items-center space-x-4">
              <div className="px-6 py-3 ml-20 text-center  bg-[#151718] text-white font-bold text-xl rounded-lg shadow-xl w-96 border-1 border-white ">
                <span className="text-[14px] font-normal ">
                  Receive 95% Profit share
                </span>{' '}
                {/* <span className="text-6xl block font-medium">Payout</span> */}
              </div>
              <div className="w-40 h-40 p-5 -ml-20 items-center justify-center rounded-full bg-white border-[12px] border-purple-500 shadow-xl ">
                <span className="text-6xl font-bold text-purple-700 text-center ">
                  24
                  <br />
                </span>
                <span className="text-3xl  font-bold text-purple-700 text-center pb-6">
                  Hours
                </span>
              </div>
            </div>
          </p>
        </h1>

        {/* left side ends here */}

        {/* image start */}
        <h1>
          <img src="https://i.ibb.co.com/XxD2hq3F/Group.png" alt="" />
        </h1>
        {/* image end */}

        {/* right side start here */}

        <h1>
          <p>
            {' '}
            <div className="relative z-10 flex items-center space-x-4">
              <div
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                className="w-40 h-40   absolute  grid grid-cols-1 items-center justify-center rounded-full bg-white border-[12px] border-purple-500 shadow-xl "
              >
                <span className="text-6xl pt-5 font-bold text-purple-700 text-center ">
                  24
                  <br />
                </span>
                <span className="text-3xl  font-bold text-purple-700 text-center pb-6">
                  Hours
                </span>
              </div>
              <div
                style={{ fontFamily: 'Anton, sans-serif' }}
                className="px-6 py-3 ml-20 text-center   bg-gradient-to-b from-[#6f28ff] to-[#b827ff] text-white font-bold text-xl rounded-lg shadow-xl w-96 border-4 border-[#DB00FF] border-b-[#0000001A]"
              >
                <span className="text-4xl font-normal">Guaranteed</span>{' '}
                <span className="text-6xl block font-medium">Payout</span>
              </div>
            </div>
          </p>
        </h1>

        {/* right side ends here */}
      </div>
    </div>
  );
};

export default Fundingprogramme;
