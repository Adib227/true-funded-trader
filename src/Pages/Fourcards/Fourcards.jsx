const Fourcards = () => {
  return (
    <div
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      className="bg-[#05133B] grid text-white h-full lg:h-[920px] "
    >
      <div className="pt-24 font-semibold lg:font-bold text-3xl lg:text-5xl text-center">
        {' '}
        <h1>Highlights For True Funded Trader</h1>
      </div>
      <div className="grid lg:flex w-full lg:w-[1300px] mx-auto justify-between ">
        <div>
          <div className="w-full h-[272px]  animate-rotate-border rounded-2xl  bg-conic/[from_var(--border-angle)] from-[#FF6523] to-[#993D1503] from-10% to-70% p-1.5 mb-6   ">
            <div className="flex p-8 rounded-2xl bg-gradient-to-r from-[#8C18FF] to-[#27FFCB] w-full lg:w-[575px] h-[260px] mx-auto justify-between ">
              <div className="pt-6">
                {' '}
                <h1 className="font-bold text-[40px]">20% Profit </h1>
                <h1 className="font-bold text-[24px]">Share From </h1>
                <h1 className="font-bold text-[32px] text-black">
                  Challenge Phase
                </h1>
              </div>
              <div>
                <img src="https://i.ibb.co.com/YBRt2bRm/Group-4.png" alt="" />
              </div>
            </div>
          </div>
          <div className="w-full h-[272px] animate-rotate-border rounded-2xl  bg-conic/[from_var(--border-angle)] from-[#FF6523] via-[#993D1503] to-black from-50% via-60% to-100% p-1.5 ">
            <div className="flex p-8 rounded-2xl bg-gradient-to-r to-[#272FFF] from-[#18FF75] w-full lg:w-[575px] h-[260px] mx-auto justify-between ">
              <div className="pt-6">
                {' '}
                <h1 className="font-bold text-[40px]">$10 Million </h1>
                <h1 className="font-bold text-[24px]">Scale Up </h1>
                <h1 className="font-bold text-[32px] text-black">Plan</h1>
              </div>
              <div>
                <img src="https://i.ibb.co.com/BHsjYCvz/Group-5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full h-[272px] animate-rotate-border rounded-2xl  bg-conic/[from_var(--border-angle)] from-[#FF6523] via-[#993D1503] to-black from-50% via-60% to-100% p-1.5 mb-6">
            <div className="flex p-8 rounded-2xl bg-gradient-to-r from-[#3918FF] to-[#ADFF27] w-full lg:w-[575px] h-[260px] mx-auto justify-between">
              <div className="pt-6">
                {' '}
                <h1 className="font-bold text-[40px]">Get 95%</h1>
                <h1 className="font-bold text-[24px]">Profit Share </h1>
                <h1 className="font-bold text-[32px] text-black">
                  Profit Share{' '}
                </h1>
              </div>
              <div>
                <img src="https://i.ibb.co.com/YBRt2bRm/Group-4.png" alt="" />
              </div>
            </div>
          </div>
          <div className="w-full h-[272px] animate-rotate-border  rounded-2xl  bg-conic/[from_var(--border-angle)] from-[#FF6523] via-[#993D1503] to-black from-50% via-60% to-100% p-1.5">
            <div className="flex p-8 rounded-2xl bg-gradient-to-r from-[#18FFD5] to-[#C727FF] w-full lg:w-[575px] h-[260px] mx-auto justify-between">
              <div className="pt-6">
                {' '}
                <h1 className="font-bold text-[40px]">Instant </h1>
                <h1 className="font-bold text-[24px]">Account </h1>
                <h1 className="font-bold text-[32px] text-black">Access</h1>
              </div>
              <div>
                <img src="https://i.ibb.co.com/BHsjYCvz/Group-5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourcards;
