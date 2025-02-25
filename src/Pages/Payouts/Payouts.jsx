const Payouts = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/KPBbPLH/c6c4d3778ed30d1bdbb7be94fd2b0119.jpg')] border-none bg-cover bg-center h-[650px] w-full">
      <div
        className="max-w-[1640px] mx-auto flex justify-between
      "
      >
        <div className="w-2/3 flex  items-center ">
          <div style={{ fontFamily: 'Montserrat, sans-serif' }} className="">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-[#1400FF] to-[#BD00FF]  bg-clip-text text-transparent">
              Guaranteed payouts!
            </h1>
            <h2 className="text-4xl font-bold pt-7">
              Get Paid in 24 hours or We Pay <br /> you 20% Extra
            </h2>
            <p className="text-[15px] font-normal pt-10">
              At <span className="font-semibold">True Funded Trader</span>, You
              payout is secure & guaranteed. We honor you achievement <br /> and
              as soon as the payout approved by our finance department you will
              get <br />
              the payout within 24 hours.
            </p>
            <p className="text-[15px] font-normal pt-12">
              We respect your trading talent and promise to honor your
              achievement swiftly. <br /> with our 24 hours payout guarantee,
              your reward will be disbursed within 24 hours <br /> of request.
              And if we ever miss the mark, we'll top up your reward with an{' '}
              <br />
              extra 20% as our commitment to you.
            </p>
          </div>
          <div className="absolute   w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-15"></div>
          <div className="absolute top-10 left-10 right-10 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-25"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="w-1/3">
          <div className="relative w-full h-[650px]  flex items-center justify-center ">
            {/* Blurry Background Elements */}
            <div className="absolute top-20 left-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-10 right-10 w-36 h-36 bg-pink-500 rounded-full blur-3xl opacity-25"></div>
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* Content */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payouts;
