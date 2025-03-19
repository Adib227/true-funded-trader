import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import * as React from 'react';

const Programsection = () => {
  const products = [
    {
      price: '5,000',
      id: 'p001',
      short_description: 'One Time Fee: $50',
      product_name: 'Beginner',
    },
    {
      price: '7,500',
      id: 'p001',
      short_description: 'One Time Fee: $70',
      product_name: 'Beginner',
    },
    {
      price: '10,000',
      id: 'p001',
      short_description: 'One Time Fee: $100',
      product_name: 'Beginner',
    },
    {
      price: '12,500',
      id: 'p001',
      short_description: 'One Time Fee: $150',
      product_name: 'Beginner',
    },
    {
      price: '15,000',
      id: 'p001',
      short_description: 'One Time Fee: $200',
      product_name: 'Beginner',
    },
    {
      price: '17,500',
      id: 'p001',
      short_description: 'One Time Fee: $250',
      product_name: 'Beginner',
    },
  ];

  const [selectedPrice, setSelectedPrice] = useState(null);

  const handleNumber = price => {
    setSelectedPrice(price); // Update the state with the latest clicked price
  };

  return (
    <div
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      className="h-full lg:h-[1050px] bg-[#05133B] text-white text-center"
    >
      <div>
        <p className="text-lg font-semibold bg-gradient-to-r from-[#33fff1] from-0% to-[#B71DFF] to-100% bg-clip-text text-transparent pt-32">
          Programs
        </p>
        <h1 className="font-bold text-3xl lg:text-[42px] pt-1">
          Become a True Funded trader
        </h1>
        <p className="text-[18px] font-semibold text-[#999999] pt-2">
          Choose the best True Funded Trader Challenge
        </p>

        {/* All 8 buttons start here */}

        <section className="mt-12 space-y-8 lg:space-y-16 ">
          <div className=" w-full lg:w-[1120px] mx-auto grid space-y-4 lg:space-y-0 lg:flex justify-center space-x-0 lg:space-x-12">
            {' '}
            <a
              href=""
              className="   py-4 lg:py-3 px-2 lg:px-7 border rounded-full justify-center shadow-cyan-300 shadow-[0px_0px_10px_rgba(0,0,0,0.3)]  hover:border-2  hover:border-[#26FF3C] hover:shadow-[0px_0px_10px_rgba(0,0,0,0.3)] hover:shadow-[#26FF3C] text-[16px] font-bold "
            >
              1-Step Evaluation
            </a>
            <a
              href=""
              className="   py-4 lg:py-3 px-2 lg:px-7 border rounded-full justify-center  shadow-cyan-300 shadow-[0px_0px_10px_rgba(0,0,0,0.3)]  hover:border-2  hover:border-[#26FF3C] hover:shadow-[0px_0px_10px_rgba(0,0,0,0.3)] hover:shadow-[#26FF3C] text-[16px] font-bold"
            >
              2-Step Evaluation
            </a>
            <a
              href=""
              className=" py-4 lg:py-3 px-2 lg:px-7 border rounded-full justify-center  shadow-cyan-300 shadow-[0px_0px_10px_rgba(0,0,0,0.3)]  hover:border-2  hover:border-[#26FF3C] hover:shadow-[0px_0px_10px_rgba(0,0,0,0.3)] hover:shadow-[#26FF3C] text-[16px] font-bold"
            >
              Instant Funding
            </a>
          </div>
          <div className="w-full lg:w-[1120px] mx-auto  grid space-y-4 lg:space-y-0 lg:flex justify-center space-x-0 lg:space-x-10">
            <a
              href=""
              className="  py-3 px-7 border rounded-full justify-center align-middle justify-items-center  shadow-cyan-300 shadow-[0px_0px_10px_rgba(0,0,0,0.3)]  hover:border-2  hover:border-[#26FF3C] hover:shadow-[0px_0px_10px_rgba(0,0,0,0.3)] hover:shadow-[#26FF3C] text-[16px] font-bold"
            >
              Beginner
            </a>
            <a
              href=""
              className=" py-3 px-7 border rounded-full justify-center align-middle justify-items-center  shadow-cyan-300 shadow-[0px_0px_10px_rgba(0,0,0,0.3)]  hover:border-2  hover:border-[#26FF3C] hover:shadow-[0px_0px_10px_rgba(0,0,0,0.3)] hover:shadow-[#26FF3C] text-[16px] font-bold"
            >
              Intermediate
            </a>
            <a
              href=""
              className=" py-3 px-7 border rounded-full justify-center align-middle justify-items-center  shadow-cyan-300 shadow-[0px_0px_10px_rgba(0,0,0,0.3)]  hover:border-2  hover:border-[#26FF3C] hover:shadow-[0px_0px_10px_rgba(0,0,0,0.3)] hover:shadow-[#26FF3C] text-[16px] font-bold"
            >
              Advanced
            </a>
            <a
              href=""
              className=" py-3 px-7 border rounded-full justify-center align-middle justify-items-center  shadow-cyan-300 shadow-[0px_0px_10px_rgba(0,0,0,0.3)]  hover:border-2  hover:border-[#26FF3C] hover:shadow-[0px_0px_10px_rgba(0,0,0,0.3)] hover:shadow-[#26FF3C] text-[16px] font-bold"
            >
              Professional
            </a>
            <a
              href=""
              className=" py-3 px-7 border rounded-full justify-center align-middle justify-items-center  shadow-cyan-300 shadow-[0px_0px_10px_rgba(0,0,0,0.3)]  hover:border-2  hover:border-[#26FF3C] hover:shadow-[0px_0px_10px_rgba(0,0,0,0.3)] hover:shadow-[#26FF3C] text-[16px] font-bold"
            >
              Master
            </a>
          </div>
        </section>
        {/* All 8 buttons ends here */}
      </div>
      <div className="pt-10 px-10 grid lg:flex w-full">
        {/* Show the last clicked price below all products */}
        <div
          style={{ fontFamily: 'Inter, sans-serif' }}
          className="mt-10 p-2  rounded-lg shadow-lg text-center w-full lg:w-1/3 "
        >
          {selectedPrice !== null ? (
            <p className=" text-lg font-bold text-white text-[36px] ">
              Price: ${selectedPrice}
            </p>
          ) : (
            <p className="text-gray-500"></p>
          )}
          <div className="px-0 lg:px-20    pt-6 space-y-1 ">
            <div className="flex  justify-between font-semibold text-sm">
              <h1>Virtual Profit Share: </h1>
              <h1 className="text-[#42FF23]">95%</h1>
            </div>
            <hr className="text-[#444444]" />
            <div className="flex justify-between font-semibold text-sm">
              <h1>Virtual Profit Target: </h1>
              <h1 className="text-[#42FF23]">8%</h1>
            </div>
            <hr className="text-[#444444]" />
            <div className="flex justify-between font-semibold text-sm">
              <h1>Daily Loss Limit: </h1>
              <h1 className="text-[#42FF23]">6%</h1>
            </div>
            <hr className="text-[#444444]" />
            <div className="flex justify-between font-semibold text-sm">
              <h1>Maximum Loss Limit: </h1>
              <h1 className="text-[#42FF23]">15%</h1>
            </div>
            <hr className="text-[#444444]" />
            <div className="flex justify-between font-semibold text-sm">
              <h1>Virtual Leverage: </h1>
              <h1 className="text-[#42FF23]">1:200</h1>
            </div>
            <hr className="text-[#444444]" />
            <div className="flex justify-between font-semibold text-sm">
              <h1>Time Limits: </h1>
              <h1 className="text-[#42FF23]">Unlimited</h1>
            </div>
            <hr className="text-[#444444]" />
            <div className="flex justify-between font-semibold text-sm">
              <h1>Minimum Trading Days: </h1>
              <h1 className="text-[#42FF23]">0 Days</h1>
            </div>
            <hr className="text-[#444444]" />
            <div className="flex justify-between font-semibold text-sm">
              <h1>Hold Over The Weekend: </h1>
              <h1 className="text-[#42FF23]">Allowed</h1>
            </div>
            <hr className="text-[#444444]" />
            <div className="flex justify-between font-semibold text-sm">
              <h1>EA's & News Trading: </h1>
              <h1 className="text-[#42FF23]">Allowed</h1>
            </div>
            <hr className="text-[#444444]" />
            <div className="flex justify-between font-semibold text-sm">
              <h1>First Payout: </h1>
              <h1 className="text-[#42FF23]"> On Demand</h1>
            </div>
            <hr className="text-[#444444]" />
            <div className="flex justify-between font-semibold text-sm">
              <h1>Payout Schedule: </h1>
              <h1 className="text-[#42FF23]"> Biweekly</h1>
            </div>
            <hr className="text-[#444444]" />
            <div className="flex justify-between font-semibold text-sm">
              <h1>Registration Fee: </h1>
              <h1 className="text-[#42FF23]"> Refundable</h1>
            </div>
            <hr className="text-[#444444]" />
            <div className="flex justify-between font-semibold text-sm pt-5">
              <h1 className="text-[#35FFDB]">
                *** Challenge purchase fees will refund with first payout.
              </h1>
            </div>
          </div>
        </div>
        {/* Products Grid */}
        <div className="grid  lg:flex gap-12 w-full lg:w-2/3 overflow-x-auto pt-4 lg:pt-28">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-gradient-to-bl from-blue-700 via-pink-400 to-white  rounded-3xl border-white border-4 bg-white p-6 shadow-lg w-full lg:w-[350px]  h-[340px] lg:h-[370px] dark:bg-[#18181B]  "
            >
              <div className="grid gap-8">
                <div className="text-3xl font-bold">${product.price}</div>
                <h1 className="text-[36px] font-bold">
                  {product.product_name}
                </h1>
                <p className="text-2xl text-white font-bold ">
                  {product.short_description}
                </p>
              </div>
              <div className="flex justify-center gap-4 pt-8">
                <button
                  onClick={() => handleNumber(product.price)}
                  className="rounded-3xl shadow-green-500 shadow-md bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base flex justify-center bg-gradient-to-r from-[#1F5EFF]  to-[#FB2CFF] "
                >
                  Let's Go
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programsection;
