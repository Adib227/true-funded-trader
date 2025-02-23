const Home = () => {
  const homebackground = {
    background:
      'radial-gradient(45.17% 90.98% at 20.28% 55.79%, #2C35A2 0%, #252C88 15.5%, #1B2167 40%, #15194F 62%, #101540 83%, #05133B 100%)',
  };
  return (
    <>
      <div
        className="w-full lg:w-[1920px] h-full lg:h-[999px]"
        style={homebackground}
      >
        <div className="hero  w-full min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              class="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                // className="text-5xl font-bold"
                className="text-3xl lg:text-5xl font-semibold lg:font-extrabold  "
              >
                <span>Modern Prop Trading Firm </span> <br />
                <span>With </span>
                <span>Faster Payouts </span>
                <span>
                  in the <br /> Industry
                </span>
              </h1>
              <p
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                className="font-normal lg:font-medium pt-5 pb-11"
              >
                We are searching for experienced traders worldwide. Join True{' '}
                <br />
                Funded trader, show your trading skills, get funded up to $10M{' '}
                <br /> and increase your earning potential!
              </p>
              <div className="flex items-center gap-4.5 ">
                <button
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  className="btn btn-primary rounded-3xl font-semibold  text-[15px] py-5 px-8 "
                >
                  View Challanges
                </button>
                <button className="btn w-14 h-14 rounded-full justify-center align-middle">
                  <img src="https://i.ibb.co.com/7dr4SQXd/play.png" alt="" />
                </button>
              </div>
              <div
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                className=" text-[16px] pt-8"
              >
                <p className="flex items-center">
                  <img
                    className="w-6 h-6"
                    src="https://i.ibb.co.com/mrpmmv9r/social-network-3916785-1.png"
                    alt=""
                  />
                  <span className="font-bold pl-2 text-[#53FF37]">99%</span>{' '}
                  <span className="font-medium pl-2 pr-2">Satisfaction</span> |{' '}
                  <img
                    className="w-6 h-6 ml-2"
                    src="https://i.ibb.co.com/Q7cN5Cr5/employees-14644998-1.png"
                    alt=""
                  />
                  <span className="font-bold pl-2 text-[#0FF1FF]">9K +</span>{' '}
                  <span className="font-medium pl-2 pr-2">Traders </span> |{' '}
                  <img
                    className="w-6 h-6 ml-2"
                    src="https://i.ibb.co.com/23KttcnQ/zap.png"
                    alt=""
                  />
                  <span className="font-bold pl-2 text-[#FFA41C]"> Fast </span>{' '}
                  <span className="font-medium pl-2"> Payouts</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
