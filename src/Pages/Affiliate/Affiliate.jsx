const Affiliate = () => {
  return (
    <div
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      className="  h-full lg:h-[730px] bg-[#05133B] text-white text-center"
    >
      <div className="space-y-3">
        {' '}
        <h1 className="pt-14 p-3">
          <span className="text-4xl lg:text-5xl font-bold">OUR </span>
          <span className="text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#FF2E00] via-[#FFF500] to-white   animate-[gradientText_9s_infinite_alternate_linear] bg-[length:200%_200%] duration-100 bg-clip-text text-transparent">
            {' '}
            AFFILIATE{' '}
          </span>
          <span className="text-4xl lg:text-5xl font-bold">PROGRAM</span>
        </h1>
        <hr className="text-[#999999] w-full lg:w-xl mx-auto" />
        <p className="text-2xl lg:text-3xl font-bold p-3">
          Help us get closer to trading talent
        </p>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:w-7xl mx-auto  justify-between">
        <div className="">
          <h1 className="text-3xl font-bold pt-4 lg:pt-20 bg-gradient-to-r from-[#00F0FF] via-[#EB00FF] to-[#EB00FF] bg-clip-text text-transparent">
            AFFILIATE COMMISSION
          </h1>
          <p className="pt-8">
            <span className="font-bold text-3xl  ">Up to </span>
            <span className="text-4xl font-bold ml-1">25%</span>{' '}
          </p>
        </div>
        <div className="">
          <img
            src="https://i.ibb.co.com/V07pqCNY/19949473-6155814-1.png"
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-3xl font-bold pt-4 lg:pt-20 bg-gradient-to-r from-[#00F0FF] via-[#EB00FF] to-[#EB00FF]   bg-clip-text text-transparent">
            {' '}
            PAYOUT SCHEDULE
          </h1>
          <p className="font-bold text-3xl pt-8 mb-8 lg:mb-0"> Biweekly</p>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
