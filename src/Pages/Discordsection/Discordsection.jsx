const Discordsection = () => {
  return (
    <div
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      className="h-full lg:h-[600px] bg-[#05133B] text-white grid lg:flex"
    >
      <div className="w-full lg:w-[1500px]  mx-auto h-full lg:h-[450px]   ">
        <div className="  border-2 h-full lg:h-[450px] my-auto grid lg:flex space-x-12 min-h-fit rounded-3xl justify-center items-center mt-0 lg:mt-18 text-center py-20 border-[#FF8311] space-y-16 lg:space-y-0">
          <div className=" ml-28 lg:ml-0">
            <img src="https://i.ibb.co.com/qFr5CPmZ/Discord-1.png" alt="" />
          </div>
          <div className="space-y-8">
            {' '}
            <h1 className="text-6xl lg:text-7xl font-bold lg:font-extrabold">
              {' '}
              Join Our Discord
            </h1>
            <p className="text-[14px] lg:text-[16px] font-normal ">
              View trading tips, insights, and connect with our community <br />{' '}
              within our discord channel.
            </p>
            <a
              className="rounded-3xl py-3 px-10 text-[16px] font-bold bg-gradient-to-r from-[#FF521C] via-[#FFB21E] to-[#FBFF2B] hover:bg-blue-950 hover:bg-none border-0 shadow-md   hover:border-2 hover:border-[#0DFFF0]   transition-all  duration-75   hover:shadow-cyan-300 animate-[gradientMove_8s_infinite_alternate_linear] bg-[length:200%_200%] s"
              href=""
            >
              Join Discord
            </a>
          </div>
          <div className=" ml-28 lg:ml-0">
            <img
              src="https://i.ibb.co.com/Gv4Bq92h/65dc22ebf28bb13639e3db0a-discord-new-normal-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discordsection;
