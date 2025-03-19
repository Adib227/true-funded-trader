const Withdrawsection = () => {
  return (
    <div
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      className=" flex h-full lg:h-[800px]  text-white bg-[#05133B] "
    >
      <div className="grid lg:flex justify-evenly w-full  mx-auto">
        <div className="pt-16 space-y-16">
          <h1 className="p-3">
            <span className="text-3xl lg:text-5xl font-bold ">ON DEMAND</span>
            <br />
            <span className="text-5xl lg:text-[68px] font-extrabold bg-gradient-to-r from-[#FF2E00] via-[#FFF500] to-white  animate-[gradientText_9s_infinite_alternate_linear] bg-[length:200%_200%] duration-100 bg-clip-text text-transparent">
              WITHDRAWAL
            </span>
          </h1>
          <p className="text-[15px] font-normal w-full lg:w-[650px] p-3">
            For the first payout, traders have the option to initiate a profit
            withdrawal just 24 hours after executing their first trade on the
            simulated funded account and with a minimum of 20% profit on their
            initial account balance ( mandatory just for the first payout ).
            After that the withdraw will be biweekly.
          </p>
          <p className="text-[15px] font-normal w-full lg:w-[650px] p-3">
            So, what are you waiting for? <br /> traders have the possibility to
            receive 95% of profits split on their simulated funded account and
            can easily withdraw funds.
          </p>
          <div className="space-y-4 p-3 lg:p-0 pl-0 lg:pl-3 ">
            {' '}
            <div className="flex">
              <img
                src="https://i.ibb.co.com/b523mNb0/checkbox-3917042-2.png"
                alt=""
              />
              <h1 className="text-xl font-bold p-2">No Time Limit</h1>
            </div>
            <div className="flex">
              <img
                src="https://i.ibb.co.com/b523mNb0/checkbox-3917042-2.png"
                alt=""
              />
              <h1 className="text-xl font-bold p-2">95% Profit Split</h1>
            </div>
            <div className="flex">
              <img
                src="https://i.ibb.co.com/b523mNb0/checkbox-3917042-2.png"
                alt=""
              />
              <h1 className="text-xl font-bold p-2">No Hidden Rules</h1>
            </div>
          </div>
        </div>
        <div className="pt-4 lg:pt-20">
          <img src="https://i.ibb.co.com/TMkYf73g/Group-7.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Withdrawsection;
