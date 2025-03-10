import { useState } from 'react';

const Programsection = () => {
  const products = [
    {
      id: 'p001',
      product_name: 'Wireless Bluetooth Headphones',
      price: 49.02,
      short_description:
        'High-quality wireless headphones with noise cancellation.',
    },
    {
      id: 'p002',
      product_name: 'Smartphone Stand',
      price: 12.87,
      short_description:
        'Adjustable aluminum stand for smartphones and tablets.',
    },
    {
      id: 'p003',
      product_name: 'Mechanical Keyboard',
      price: 79.39,
      short_description: 'RGB backlit mechanical keyboard with blue switches.',
    },
    {
      id: 'p004',
      product_name: 'Stainless Steel Water Bottle',
      price: 19.26,
      short_description:
        'Vacuum insulated bottle keeps drinks hot or cold for hours.',
    },
    {
      id: 'p005',
      product_name: 'USB-C Charging Cable',
      price: 9.34,
      short_description:
        'Fast-charging USB-C cable compatible with most devices.',
    },
    {
      id: 'p006',
      product_name: 'Gaming Mouse',
      price: 34.55,
      short_description:
        'Ergonomic gaming mouse with customizable DPI settings.',
    },
    {
      id: 'p007',
      product_name: 'Portable Power Bank',
      price: 29.47,
      short_description: '10,000mAh power bank with fast charging support.',
    },
    {
      id: 'p008',
      product_name: 'LED Desk Lamp',
      price: 24.59,
      short_description:
        'Dimmable LED desk lamp with touch controls and USB charging.',
    },
    {
      id: 'p009',
      product_name: 'Wireless Earbuds',
      price: 39.99,
      short_description:
        'True wireless earbuds with deep bass and long battery life.',
    },
    {
      id: 'p010',
      product_name: 'Smartwatch',
      price: 59.02,
      short_description: 'Fitness tracking smartwatch with heart rate monitor.',
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
      <div className="pt-10 px-10">
        {/* Products Grid */}
        <div className="grid grid-cols-5 gap-4">
          {products.map(product => (
            <div
              key={product.id}
              className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]"
            >
              <div className="grid gap-2">
                <h1 className="text-lg font-semibold">
                  {product.product_name}
                </h1>
                <p className="text-sm text-gray-500 dark:text-white/60">
                  {product.short_description}
                </p>
                <div className="text-lg font-semibold">${product.price}</div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => handleNumber(product.price)}
                  className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show the last clicked price below all products */}
        <div className="mt-10 p-6 bg-black rounded-lg shadow-lg text-center">
          {selectedPrice !== null ? (
            <p className="mt-2 text-lg font-semibold text-green-600">
              Price: ${selectedPrice}
            </p>
          ) : (
            <p className="text-gray-500"></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Programsection;
