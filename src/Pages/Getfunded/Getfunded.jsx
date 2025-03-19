import { useState } from 'react';
import 'animate.css';

const Getfunded = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(prev => !prev);
  };
  return (
    <div
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      className="h-full lg:h-[900px]  text-white  bg-[#05133B] "
    >
      <div className="text-center pt-14 space-y-4">
        <h1 className="text-3xl lg:text-[42px] font-semibold lg:font-bold p-2">
          Step To Get Funded
        </h1>
        <p className="text-sm lg:text-[16px] font-medium lg:font-semibold p-2">
          Choose between a 1 or 2 step challenge and pass them to get funded
          today.
        </p>
      </div>
      <div>
        {/* Toggle Switch */}
        <div className="pt-16 flex items-center justify-center gap-6">
          <h1 className="font-bold text-lg ">Step 1</h1>
          <label
            htmlFor="BasicSwitch_NavigateUI"
            className="relative flex h-fit w-12 items-center rounded-full border border-white cursor-pointer"
          >
            <input
              type="checkbox"
              className="peer/toggle hidden"
              id="BasicSwitch_NavigateUI"
              onChange={handleToggle}
            />
            <div className="absolute inset-0 z-10 w-0  rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle"></div>
            <div className="z-20 size-5 rounded-full bg-white duration-200 peer-checked/toggle:translate-x-6"></div>
          </label>
          <h1 className="font-bold text-lg ">Step 2</h1>
        </div>

        {/* Conditionally Render Different Divs */}
        <div className="grid changing-things items-center justify-center pt-20">
          {isToggled ? (
            // Second div (Visible when toggled)
            <div className="grid lg:flex space-x-12 space-y-10 lg:space-y-2">
              {' '}
              <div className="w-80 lg:w-96 h-[400px] p-4  bg-[#0F1018] shadow-lg rounded-2xl border border-[#666666] hover:backdrop-blur-md hover:bg-white/10 animate__animated animate__fadeInLeftBig ">
                <h1 className=" w-16 h-16 mx-auto flex justify-center items-center rounded-full bg-[#001D69]  border-[#3A3A3A] border-2 font-bold text-xl -mt-12">
                  1
                </h1>
                <h2 className="text-lg font-bold  text-center pt-8">
                  Trading Challenge
                </h2>
                <hr className=" my-5 text-[#666666]"></hr>
                <div className="space-y-4 pt-2 pb-8">
                  <div className="flex font-medium text-xs">
                    <img
                      className="px-2"
                      src="https://i.ibb.co.com/nN7r6xNm/revenue-13794438-1.png"
                      alt=""
                    />
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Profit target </p>
                      <p>8%</p>
                    </div>
                  </div>
                  <div className="flex font-medium text-xs">
                    <img
                      className="px-2"
                      src="https://i.ibb.co.com/60jBSbxy/clock-up-arrow-14246607-1.png"
                      alt=""
                    />
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Trading Period </p>
                      <p>Unlimited </p>
                    </div>
                  </div>
                </div>
                <hr className=" my-5 text-[#666666]"></hr>
                <div className="space-y-4 pt-2 pb-8">
                  <div className="flex font-medium text-xs">
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Min. Trading Days </p>
                      <p>0</p>
                    </div>
                  </div>
                  <div className="flex font-medium text-xs">
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">
                        Max. Account Balance Loss{' '}
                      </p>
                      <p>15% </p>
                    </div>
                  </div>
                  <div className="flex font-medium text-xs">
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Maximum Daily Loss </p>
                      <p>6% </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=" w-80 lg:w-96 h-[400px] p-4  bg-[#0F1018] shadow-lg rounded-2xl border border-[#666666]  hover:backdrop-blur-md hover:bg-white/10
animate__animated animate__fadeInUpBig"
              >
                <h1 className=" w-16 h-16 mx-auto flex justify-center items-center rounded-full bg-[#001D69]  border-[#3A3A3A] border-2 font-bold text-xl -mt-12">
                  2
                </h1>
                <h2 className="text-lg font-bold  text-center pt-8">
                  Verification
                </h2>
                <hr className=" my-5 text-[#666666]"></hr>
                <div className="space-y-4 pt-2 pb-8">
                  <div className="flex font-medium text-xs">
                    <img
                      className="px-2"
                      src="https://i.ibb.co.com/nN7r6xNm/revenue-13794438-1.png"
                      alt=""
                    />
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Profit target </p>
                      <p>5%</p>
                    </div>
                  </div>
                  <div className="flex font-medium text-xs">
                    <img
                      className="px-2"
                      src="https://i.ibb.co.com/60jBSbxy/clock-up-arrow-14246607-1.png"
                      alt=""
                    />
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Trading Period </p>
                      <p>Unlimited </p>
                    </div>
                  </div>
                </div>
                <hr className=" my-5 text-[#666666]"></hr>
                <div className="space-y-4 pt-2 pb-8">
                  <div className="flex font-medium text-xs">
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Min. Trading Days </p>
                      <p>0</p>
                    </div>
                  </div>
                  <div className="flex font-medium text-xs">
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">
                        Max. Account Balance Loss{' '}
                      </p>
                      <p>15% </p>
                    </div>
                  </div>
                  <div className="flex font-medium text-xs">
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Maximum Daily Loss </p>
                      <p>6% </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=" w-80 lg:w-96 h-[400px] p-4  bg-[#0F1018] shadow-lg rounded-2xl border border-[#666666]  hover:backdrop-blur-md hover:bg-white/10
 animate__animated animate__fadeInDownBig inline-block "
              >
                <h1 className=" w-16 h-16 mx-auto flex justify-center items-center rounded-full bg-[#001D69]  border-[#3A3A3A] border-2 font-bold text-xl -mt-12">
                  3
                </h1>
                <h2 className="text-lg font-bold  text-center pt-8">Funded</h2>
                <hr className=" my-5 text-[#666666]"></hr>
                <div className="space-y-4 pt-2 pb-8">
                  <div className="flex font-medium text-xs">
                    <img
                      className="px-2"
                      src="https://i.ibb.co.com/nN7r6xNm/revenue-13794438-1.png"
                      alt=""
                    />
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Profit target </p>
                      <p>95%</p>
                    </div>
                  </div>
                  <div className="flex font-medium text-xs">
                    <img
                      className="px-2"
                      src="https://i.ibb.co.com/60jBSbxy/clock-up-arrow-14246607-1.png"
                      alt=""
                    />
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Trading Period </p>
                      <p>Unlimited </p>
                    </div>
                  </div>
                </div>
                <hr className=" my-5 text-[#666666]"></hr>
                <div className="space-y-4 pt-2 pb-8">
                  <div className="flex font-medium text-xs">
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Min. Trading Days </p>
                      <p>5</p>
                    </div>
                  </div>
                  <div className="flex font-medium text-xs">
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">
                        Max. Account Balance Loss{' '}
                      </p>
                      <p>15% </p>
                    </div>
                  </div>
                  <div className="flex font-medium text-xs">
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Maximum Daily Loss </p>
                      <p>6% </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // First div (Initially visible)
            <div className="grid lg:flex space-x-12 space-y-10 lg:space-y-2">
              {' '}
              <div className=" w-80 lg:w-96 h-[400px] p-4  bg-[#0F1018] shadow-lg rounded-2xl border border-[#666666] hover:backdrop-blur-md hover:bg-white/10 ">
                <h1 className=" w-16 h-16 mx-auto flex justify-center items-center rounded-full bg-[#001D69]  border-[#3A3A3A] border-2 font-bold text-xl -mt-12">
                  1
                </h1>
                <h2 className="text-lg font-bold  text-center pt-8">
                  Trading Challenge
                </h2>
                <hr className=" my-5 text-[#666666]"></hr>
                <div className="space-y-4 pt-2 pb-8">
                  <div className="flex font-medium text-xs">
                    <img
                      className="px-2"
                      src="https://i.ibb.co.com/nN7r6xNm/revenue-13794438-1.png"
                      alt=""
                    />
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Profit target </p>
                      <p>8%</p>
                    </div>
                  </div>
                  <div className="flex font-medium text-xs">
                    <img
                      className="px-2"
                      src="https://i.ibb.co.com/60jBSbxy/clock-up-arrow-14246607-1.png"
                      alt=""
                    />
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Trading Period </p>
                      <p>Unlimited </p>
                    </div>
                  </div>
                </div>
                <hr className=" my-5 text-[#666666]"></hr>
                <div className="space-y-4 pt-2 pb-8">
                  <div className="flex font-medium text-xs">
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Min. Trading Days </p>
                      <p>0</p>
                    </div>
                  </div>
                  <div className="flex font-medium text-xs">
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">
                        Max. Account Balance Loss{' '}
                      </p>
                      <p>15% </p>
                    </div>
                  </div>
                  <div className="flex font-medium text-xs">
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Maximum Daily Loss </p>
                      <p>6% </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=" w-80 lg:w-96 h-[400px] p-4  bg-[#0F1018] shadow-lg rounded-xl border border-[#666666]  hover:backdrop-blur-md hover:bg-white/10
"
              >
                <h1 className=" w-16 h-16 mx-auto flex justify-center items-center rounded-full bg-[#001D69]  border-[#3A3A3A] border-2 font-bold text-xl -mt-12">
                  2
                </h1>
                <h2 className="text-lg font-bold  text-center pt-8">Funded</h2>
                <hr className=" my-5 text-[#666666]"></hr>
                <div className="space-y-4 pt-2 pb-8">
                  <div className="flex font-medium text-xs">
                    <img
                      className="px-2"
                      src="https://i.ibb.co.com/nN7r6xNm/revenue-13794438-1.png"
                      alt=""
                    />
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Profit target </p>
                      <p>95%</p>
                    </div>
                  </div>
                  <div className="flex font-medium text-xs">
                    <img
                      className="px-2"
                      src="https://i.ibb.co.com/60jBSbxy/clock-up-arrow-14246607-1.png"
                      alt=""
                    />
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Trading Period </p>
                      <p>Unlimited </p>
                    </div>
                  </div>
                </div>
                <hr className=" my-5 text-[#666666]"></hr>
                <div className="space-y-4 pt-2 pb-8">
                  <div className="flex font-medium text-xs">
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Min. Trading Days </p>
                      <p>5</p>
                    </div>
                  </div>
                  <div className="flex font-medium text-xs">
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">
                        Max. Account Balance Loss{' '}
                      </p>
                      <p>15% </p>
                    </div>
                  </div>
                  <div className="flex font-medium text-xs">
                    <div className="flex justify-between w-full">
                      <p className="text-[#9F9F9F]">Maximum Daily Loss </p>
                      <p>6% </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center py-20 ">
        {' '}
        <a
          href=""
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          className="font-semibold rounded-2xl flex lg:block px-8 lg:px-7 pt-2.5  text-white  bg-gradient-to-r from-[#FF521C] via-[#FFB21E] to-[#FBFF2B] hover:bg-blue-950 hover:bg-none border-0 shadow-md   hover:border-2 hover:border-[#0DFFF0]   transition-all  duration-75   hover:shadow-cyan-300 h-12 lg:h-11  w-52 text-center "
        >
          <span>Get Funded Now</span>
        </a>
      </div>
    </div>
  );
};

export default Getfunded;
