const Twocards = () => {
  return (
    <div
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      className="grid lg:flex justify-evenly bg-[#05133B] pt-20 lg:pt-32 h-full lg:h-[920px] text-white w-full mx-auto"
    >
      <div className="grid lg:flex w-full lg:w-[1550px] mx-auto space-y-16">
        {' '}
        <div className="pt-12 lg:pt-20 space-y-14">
          <h1 className="text-[26px] font-bold bg-gradient-to-r from-[#00F0FF] via-[#EB00FF] to-[#EB00FF] bg-clip-text text-transparent">
            Become a true funded trader talent hunter today
          </h1>
          <h1 className="text-5xl font-bold  ">
            Join us in scouting talented traders and earn affiliate Commission
          </h1>
          <div className="pt-8">
            <a
              href=""
              className="font-bold rounded-4xl  py-4 px-8   text-white  bg-gradient-to-r from-[#FF521C] via-[#FFB21E] to-[#FBFF2B] hover:bg-blue-950 hover:bg-none border-0 shadow-md   hover:border-2 hover:border-[#0DFFF0] transition-all duration-75 hover:shadow-cyan-300 h-14 lg:h-11 w-52 text-center text-[14px]"
            >
              <span>Sign Up For Affiliate</span>
            </a>
          </div>
        </div>
        <div>
          <h1 className="bg-gradient-to-r from-[#00F0FF] via-[#EB00FF] to-[#EB00FF] bg-clip-text text-transparent text-xl font-bold pb-10">
            True Funded Trader Talent Hunter Benefits
          </h1>
          <div>
            {' '}
            <div className="w-full h-[272px]  animate-rotate-border rounded-2xl  bg-conic/[from_var(--border-angle)] from-[#FF6523] to-[#993D1503] from-50% to-70% p-1.5 mb-14  shadow-orange-400 shadow-[0px_0px_25px_rgba(0,0,0,0.3)] ">
              <div className="flex p-5  rounded-2xl bg-gradient-to-r from-[#8C18FF] to-[#27FFCB] w-full lg:w-[575px] h-[260px] mx-auto justify-between ">
                <div className="pt-12 lg:pt-6">
                  {' '}
                  <h1 className="font-bold text-[32px]">Revenue Sharing </h1>
                  <h1 className="font-normal text-xs lg:text-[14px] w-80">
                    We offer a portion of our revenues to our affiliates who
                    work with us to recruit professional traders, and we reward
                    them from the first purchase of the trader.{' '}
                  </h1>
                </div>
                <div>
                  <img
                    className="pt-12 lg:pt-0"
                    src="https://i.ibb.co.com/TD1nXKDS/Illustration.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            {' '}
            <div className="w-full h-[272px]  animate-rotate-border rounded-2xl  bg-conic/[from_var(--border-angle)] from-[#FF6523] to-[#993D1503] from-50% to-70% p-1.5 mb-14  shadow-orange-400 shadow-[0px_0px_25px_rgba(0,0,0,0.3)] ">
              <div className="flex p-5  rounded-2xl bg-gradient-to-r from-[#18ACFF] to-[#C727FF] w-full lg:w-[575px] h-[260px] mx-auto justify-between ">
                <div className="">
                  {' '}
                  <h1 className="font-bold text-[32px]">
                    Performance-based Income{' '}
                  </h1>
                  <h1 className="font-normal text-xs lg:text-[14px] w-72 lg:w-96">
                    The forex industry is full of over complicated and outdated
                    solutions for education and trading opportunities. We want
                    to provide you with the tools you need as a true talent
                    hunter to create am extra revenue stream and make talent
                    hunting a career option for anyone interested in recruiting
                    talented traders with true funded trader!
                  </h1>
                </div>
                <div className="mt-14 w-full">
                  <img src="https://i.ibb.co.com/MDdxsLDJ/OBJECTS.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twocards;
