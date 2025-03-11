const Threecard = () => {
  return (
    <div
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      className="bg-[#05133B] grid text-white h-full lg:h-[500px] "
    >
      <div className="w-[1620px] mx-auto ">
        <div className="space-y-3 pt-11 pb-16">
          <p className="text-[14px] lg:text-[16px] font-bold">How to Start</p>
          <h1 className="text-2xl lg:text-4xl font-bold">
            Get Started with 3 Simple Steps
          </h1>
          <p className="text-xs lg:text-[14px] font-normal">
            From registration to earning we are committed to transforming the
            way easier, Smarter <br /> and more inclusive for ever trader.
          </p>
        </div>
      </div>
      {/* Card section Starts here */}
      <div className="grid lg:flex w-full lg:w-[1600px] mx-auto justify-between ">
        <div className=" h-[303px] animate-rotate-border rounded-2xl  bg-conic/[from_var(--border-angle)] from-[#FF6523] to-[#993D1503] from-40% to-70% p-1.5 mb-14  shadow-orange-400 shadow-[0px_0px_25px_rgba(0,0,0,0.3)]">
          <div
            className="  w-96 lg:w-[420px] h-[290px] bg-gradient-to-b from-[#FF6523] to-[#FFFFFF] rounded-2xl 
         p-6 space-y-3  shadow-[10px_0px_10px_rgba(0.9,0,0,0.3)] "
          >
            <h1 className="text-[16px] font-bold">STEP 1</h1>
            <img
              src="https://i.ibb.co.com/pjs55Vw7/Rectangle-2-removebg-preview.png"
              alt=""
            />{' '}
            <h2 className="text-lg font-bold text-black">Challenge</h2>
            <p className="text-[12px] font-normal text-black">
              Welcome to your funded journey! We keep our challenge as simple as
              possible so you can focus on your trades easily. In this phase you
              must have to meet our easy and simple trading objectives to
              progress onto phase 2.
            </p>
          </div>
        </div>

        <div className=" h-[303px] animate-rotate-border rounded-2xl  bg-conic/[from_var(--border-angle)] from-[#FF6523] to-[#993D1503] from-40% to-70% p-1.5 mb-14  shadow-orange-400 shadow-[0px_0px_25px_rgba(0,0,0,0.3)]">
          <div className="w-96 lg:w-[420px] h-[290px] bg-gradient-to-b from-[#FF6523] to-[#FFFFFF] rounded-2xl p-6 space-y-3 shadow-[10px_0px_10px_rgba(0.9,0,0,0.3)]">
            <h1 className="text-[16px] font-bold">STEP 2</h1>
            <img
              src="https://i.ibb.co.com/TDcMKnpg/Rectangle-removebg-preview.png"
              alt=""
            />{' '}
            <h2 className="text-lg font-bold text-black">Verification</h2>
            <p className="text-[12px] font-normal text-black">
              You are just one step away from joining our funded traders already
              benefiting from True Funded trader. Once the trading objectives
              are completed. you will automatically be upgraded as funded
              trader!
            </p>
          </div>
        </div>
        <div className=" h-[303px] animate-rotate-border rounded-2xl  bg-conic/[from_var(--border-angle)] from-[#FF6523] to-[#993D1503] from-40% to-70% p-1.5 mb-14  shadow-orange-400 shadow-[0px_0px_25px_rgba(0,0,0,0.3)]">
          {' '}
          <div className="w-96 lg:w-[420px] h-[290px] bg-gradient-to-b from-[#FF6523] to-[#FFFFFF] rounded-2xl p-6 space-y-3 shadow-[10px_0px_10px_rgba(0.9,0,0,0.3)]">
            <h1 className="text-[16px] font-bold">STEP 3</h1>
            <img
              src="https://i.ibb.co.com/ZpXvChrt/Rectangle-1-removebg-preview.png"
              alt=""
            />{' '}
            <h2 className="text-lg font-bold text-black">Funded Trader</h2>
            <p className="text-[12px] font-normal text-black">
              Congratulations! You are now a True Funded Trader. Continue to
              trade consistently and responsibly to quality for up to a 95%
              profit split with virtual account scaling up to $10 Million!
            </p>
          </div>
        </div>
      </div>
      {/* Card section Ends here */}
    </div>
  );
};

export default Threecard;
