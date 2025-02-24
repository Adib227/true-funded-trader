const Testimonial = () => {
  return (
    <div className="text-black w-full lg:[1920px]">
      <div
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        className="text-center pt-2 lg:pt-11"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-black to-gray-400  bg-clip-text text-transparent">
          Client Testimonials
        </h1>
        <p
          className="text-xl pt-4 pb-7 font-bold 
   "
        >
          Excellent
        </p>
        <p className=" flex justify-center items-center  gap-x-2">
          <img src="https://i.ibb.co.com/Y7KrcTwK/Group-5.png" alt="" />
          <img src="https://i.ibb.co.com/Y7KrcTwK/Group-5.png" alt="" />
          <img src="https://i.ibb.co.com/Y7KrcTwK/Group-5.png" alt="" />
          <img src="https://i.ibb.co.com/Y7KrcTwK/Group-5.png" alt="" />
          <img src="https://i.ibb.co.com/Y7KrcTwK/Group-5.png" alt="" />
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
