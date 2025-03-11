const Optionsection = () => {
  return (
    <div
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      className="  h-full lg:h-[800px]  text-black "
    >
      <div>
        <div className="absolute  w-96 h-96 bg-[#1A2BC630] opacity-100 rounded-full blur-3xl ml-72"></div>
        <h1 className=" text-5xl font-extrabold text-center py-12 ">
          Compare Your Option{' '}
        </h1>
        <div className="absolute  w-96 h-96 bg-[#1A2BC630] opacity-100 rounded-full blur-3xl right-90 "></div>
      </div>
      <div>
        {' '}
        <div className="overflow-x-auto grid lg:flex w-full lg:w-[1600px] mx-auto my-10">
          <table className="min-w-full border-separate border-spacing-2   border-gray-300  ">
            <thead>
              <tr className="bg-[#36425A] text-white text-center text-lg font-bold ">
                <th className="bg-white"></th>
                <th className="p-4 border-0 rounded-t-2xl bg-[#3B7EF1]">
                  True Funded Trader
                </th>

                <th className="p-8 border-0 rounded-t-2xl">FTMO</th>
                <th className="p-8 border-0 rounded-t-2xl">MyFundedFX</th>
                <th className="p-8 border-0 rounded-t-2xl">Top Tier</th>
                <th className="p-8 border-0 rounded-t-2xl">E8</th>
                <th className="p-8 border-0 rounded-t-2xl">FundedNext</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="text-center text-[16px] font-bold">
                <td className="p-4 border-0 bg-[#F8F8F8]">PROFIT TARGET</td>
                <td className="p-4 border-0 bg-[#1C6DB9]">8%</td>
                <td className="p-4 border-0 bg-[#F8F8F8]">10%</td>
                <td className="p-4 border-0 bg-[#F8F8F8]">10%</td>
                <td className="p-4 border-0 bg-[#F8F8F8]">10%</td>
                <td className="p-4 border-0 bg-[#F8F8F8]">10%</td>
                <td className="p-4 border-0 bg-[#F8F8F8]">10%</td>
              </tr>
              <tr className="text-center text-[16px] font-bold ">
                <td className="p-4 border-0 bg-[#DEDEDE]">MIN TRADING DAYS</td>
                <td className="p-4 border-0 bg-[#3593EA]">0</td>
                <td className="p-4 border-0 bg-[#DEDEDE]">4</td>
                <td className="p-4 border-0 bg-[#DEDEDE]">4</td>
                <td className="p-4 border-0 bg-[#DEDEDE]">4</td>
                <td className="p-4 border-0 bg-[#DEDEDE]">4</td>
                <td className="p-4 border-0 bg-[#DEDEDE]">4</td>
              </tr>
              <tr className="text-center text-[16px] font-bold">
                <td className="p-4 border-0 bg-[#F8F8F8]">DAILY LOSS LIMIT</td>
                <td className="p-4 border-0 bg-[#1C6DB9]">6%</td>
                <td className="p-4 border-0 bg-[#F8F8F8]">5%</td>
                <td className="p-4 border-0 bg-[#F8F8F8]">5%</td>
                <td className="p-4 border-0 bg-[#F8F8F8]">5%</td>
                <td className="p-4 border-0 bg-[#F8F8F8]">5%</td>
                <td className="p-4 border-0 bg-[#F8F8F8]">5%</td>
              </tr>
              <tr className="text-center text-[16px] font-bold bg-gray-50">
                <td className="p-4 border-0  bg-[#DEDEDE]">
                  MAXIMUM LOSS LIMIT
                </td>
                <td className="p-4 border-0 bg-[#3593EA]">15%</td>
                <td className="p-4 border-0 bg-[#DEDEDE]">10%</td>
                <td className="p-4 border-0 bg-[#DEDEDE]">10%</td>
                <td className="p-4 border-0 bg-[#DEDEDE]">10%</td>
                <td className="p-4 border-0 bg-[#DEDEDE]">10%</td>
                <td className="p-4 border-0 bg-[#DEDEDE]">10%</td>
              </tr>
              <tr className="text-center text-[16px] font-bold">
                <td className="p-4 border-0 bg-gray-100">FIRST PAYOUT</td>
                <td className="p-4 border-0 bg-[#1C6DB9]">
                  ON DEMAND( EVEN IN 24H)
                </td>
                <td className="p-4 border-0 bg-[#F8F8F8]">14 Days</td>
                <td className="p-4 border-0 bg-[#F8F8F8]">14 Days</td>
                <td className="p-4 border-0 bg-[#F8F8F8]">14 Days</td>
                <td className="p-4 border-0 bg-[#F8F8F8]">14 Days</td>
                <td className="p-4 border-0 bg-[#F8F8F8]">14 Days</td>
              </tr>
              <tr className="text-center text-[16px] font-bold bg-gray-50">
                <td className="p-4 border-0 bg-[#DEDEDE]">PROFIT SPLIT </td>
                <td className="p-4 border-0 bg-[#3593EA]">95%</td>
                <td className="p-4 border-0 bg-[#DEDEDE]">80%</td>
                <td className="p-4 border-0 bg-[#DEDEDE]">80%</td>
                <td className="p-4 border-0 bg-[#DEDEDE]">80%</td>
                <td className="p-4 border-0 bg-[#DEDEDE]">80%</td>
                <td className="p-4 border-0 bg-[#DEDEDE]">80%</td>
              </tr>
              <tr className="text-center text-[16px] font-bold">
                <td className="p-4 border-0 bg-gray-100">
                  100K CHALLENGE PRICE
                </td>
                <td className="p-4 border-0 bg-[#1C6DB9]">400$</td>
                <td className="p-4 border-0 bg-[#F8F8F8]">540$</td>
                <td className="p-4 border-0 bg-[#F8F8F8]">540$</td>
                <td className="p-4 border-0 bg-[#F8F8F8]">540$</td>
                <td className="p-4 border-0 bg-[#F8F8F8]">540$</td>
                <td className="p-4 border-0 bg-[#F8F8F8]">540$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Optionsection;
