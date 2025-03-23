import 'swiper/css';
import Marquee from 'react-fast-marquee';

const Home = () => {
  const homebackground = {
    background:
      'radial-gradient(45.17% 90.98% at 20.28% 55.79%, #2C35A2 0%, #252C88 15.5%, #1B2167 40%, #15194F 62%, #101540 83%, #05133B 100%)',
  };
  return (
    <>
      <div
        className="w-full lg:max-w-[1920px] mx-auto h-full lg:h-[1050px] text-white"
        style={homebackground}
      >
        <div className="hero grid-cols-1 lg:grid w-full lg:max-w-[1840px] mx-auto min-h-screen">
          <div className="hero-content max-w-[1840px] mx-auto  flex-col lg:flex-row justify-between">
            <div>
              {' '}
              <img
                className="w-[410px] lg:w-[690px] h-80 lg:h-[490px]"
                src="https://i.ibb.co.com/kgptLyhv/image.png"
              />
            </div>
            <div>
              {/* The 5 icons on banner start */}
              <p className="flex items-center gap-4.5 pb-4">
                <a
                  href=""
                  className="w-10 lg:w-12 h-10 lg:h-12 mr-1 lg:mr-2 border rounded-full justify-center align-middle justify-items-center shadow-md shadow-cyan-300  hover:border-2  hover:border-[#0DFFF0]  "
                >
                  <img
                    className="pt-2 lg:pt-2.5  "
                    src="https://i.ibb.co.com/KjT1fSNy/facebook-176-svgrepo-com-1.png"
                    alt=""
                  />
                </a>
                <a
                  href=""
                  className="w-10 lg:w-12 h-10 lg:h-12 mr-1 lg:mr-2 border rounded-full justify-center align-middle justify-items-center shadow-md shadow-cyan-300  hover:border-2 hover:border-[#0DFFF0] "
                >
                  <img
                    className=" pt-1  lg:pt-2  "
                    src="https://i.ibb.co.com/Xxwrwdqm/instagram-svgrepo-com-1.png"
                    alt=""
                  />
                </a>
                <a
                  href=""
                  className="w-10 lg:w-12 h-10 lg:h-12 mr-1 lg:mr-2 border rounded-full justify-center align-middle justify-items-center shadow-md shadow-cyan-300  hover:border-2 hover:border-[#0DFFF0] "
                >
                  <img
                    className="pt-2 lg:pt-2.5 "
                    src="https://i.ibb.co.com/hxhbBfBb/youtube-svgrepo-com-1.png"
                    alt=""
                  />
                </a>
                <a
                  href=""
                  className="w-10 lg:w-12 h-10 lg:h-12 mr-1 lg:mr-2 border rounded-full justify-center align-middle justify-items-center shadow-md shadow-cyan-300  hover:border-2 hover:border-[#0DFFF0] "
                >
                  <img
                    className="pt-1.5 lg:pt-2"
                    src="https://i.ibb.co.com/3YcjKnc0/8546766-discord-icon-1.png"
                    alt=""
                  />
                </a>
                <a
                  href=""
                  className="w-10 lg:w-12 h-10 lg:h-12 mr-1 lg:mr-2 border rounded-full justify-center align-middle justify-items-center shadow-md shadow-cyan-300  hover:border-2 hover:border-[#0DFFF0] "
                >
                  <img
                    className=" w-10 h-10  lg:pt-1  "
                    src="https://i.ibb.co.com/4RhCyBdW/twitter-1.png"
                    alt=""
                  />
                </a>
              </p>
              {/* The 5 icons on banner end */}
              <h1
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                className="text-5xl lg:text-7xl font-bold lg:font-extrabold  "
              >
                <span className=" bg-gradient-to-r from-[#FF2E00] via-[#FFF500] to-[#1BF1FF] animate-[gradientText_9s_infinite_alternate_linear] bg-[length:200%_200%] duration-100 bg-clip-text text-transparent">
                  Modern Prop Trading Firm{' '}
                </span>{' '}
                <br />
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
                <a
                  href=""
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  className="relative py-4 px-8 bg-gradient-to-r from-[#FF5C00] via-[#0DFFF0] to-[#FA0DFF] animate-[gradientMove_8s_infinite_alternate_linear] bg-[length:200%_200%] rounded-4xl font-bold  hover:bg-blue-950 hover:bg-none border-0 shadow-xl   hover:border-2 hover:border-[#0DFFF0]   transition-all  duration-75 text-[15px]"
                >
                  View Challenges
                </a>

                <a
                  href=""
                  className="w-8 lg:w-12 h-8 lg:h-12 mr-1 lg:mr-2 border rounded-full justify-center align-middle justify-items-center shadow-md shadow-cyan-300 hover:border-2 hover:border-[#0DFFF0] "
                >
                  <img
                    className="pt-1 lg:pt-2.5  pl-2 "
                    src="https://i.ibb.co.com/yBdPp8yT/play.png"
                    alt=""
                  />
                </a>
              </div>
              <div
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                className=" text-[16px] pt-8"
              >
                <div className="grid lg:flex items-center">
                  <div className="flex">
                    {' '}
                    <img
                      className="w-6 h-6"
                      src="https://i.ibb.co.com/mrpmmv9r/social-network-3916785-1.png"
                      alt=""
                    />
                    <span className="font-bold pl-2 text-[#53FF37]">99%</span>{' '}
                    <span className="font-medium pl-2 pr-2">Satisfaction</span>{' '}
                    |{' '}
                  </div>
                  <div className="flex py-4">
                    <img
                      className="w-6 h-6 ml-2"
                      src="https://i.ibb.co.com/Q7cN5Cr5/employees-14644998-1.png"
                      alt=""
                    />
                    <span className="font-bold pl-2 text-[#0FF1FF]">9K +</span>{' '}
                    <span className="font-medium pl-2 pr-2">Traders </span> |{' '}
                  </div>
                  <div className="flex">
                    <img
                      className="w-6 h-6 ml-2"
                      src="https://i.ibb.co.com/23KttcnQ/zap.png"
                      alt=""
                    />
                    <span className="font-bold pl-2 text-[#FFA41C]">
                      {' '}
                      Fast{' '}
                    </span>{' '}
                    <span className="font-medium pl-2"> Payouts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <section className="mt-[1250px] lg:mt-[800px] w-[370px] lg:w-full">
              <div className=" border-red-900">
                {/* Home section marquee starts here */}

                <Marquee className="p-8 gap-x-4 " speed={100}>
                  <p className="flex items-center justify-center">
                    <img
                      className="mr-5 ml-8 w-14 h-14"
                      src="https://s3-alpha-sig.figma.com/img/f978/08cb/b01d3cb9bc6e9976fa4adf045d8826e7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jt3~YUsD-cL-77IkHuXNIMYKb6DiBy9ZJWOonvIr50jM9p4Cg9ogttDvAMAYTD787sGyECxbs0KBezJZPhPyOTfdT87GDTAtXqT-p2ocIbVWtgesVzf6EFAnNSIA9a2bkSPzsb5anFLBXC94lg8V33jg295Jrkkgoj8P8FsvYcJ24Nk7bUl8VX6Ig0OFdtKzJolSoSPD3lI23-esbhfHA2yUJGVHbbQAxhGVSsQHW-WSQmffXQ9nNH6yxZZG94rpebYCJFSWOpTghPhfpOE4ExZhgmBLwCD1Y8rOrctl6eIU6AwUe-hQMAZg2zvqCDjXkXXHXOs7g4XSXoSMys5hxw__"
                      alt=""
                    />
                    <span className=" font-semibold text-lg bg-gradient-to-r from-[#FF2E00] via-[#FFF500] to-[#1BF1FF]  bg-clip-text text-transparent">
                      Use Code: June 24 For 20% Off on All Challenge{' '}
                    </span>
                  </p>
                  <p className="flex items-center justify-center">
                    <img
                      className="mr-5 ml-8 w-14 h-14"
                      src="https://s3-alpha-sig.figma.com/img/f978/08cb/b01d3cb9bc6e9976fa4adf045d8826e7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jt3~YUsD-cL-77IkHuXNIMYKb6DiBy9ZJWOonvIr50jM9p4Cg9ogttDvAMAYTD787sGyECxbs0KBezJZPhPyOTfdT87GDTAtXqT-p2ocIbVWtgesVzf6EFAnNSIA9a2bkSPzsb5anFLBXC94lg8V33jg295Jrkkgoj8P8FsvYcJ24Nk7bUl8VX6Ig0OFdtKzJolSoSPD3lI23-esbhfHA2yUJGVHbbQAxhGVSsQHW-WSQmffXQ9nNH6yxZZG94rpebYCJFSWOpTghPhfpOE4ExZhgmBLwCD1Y8rOrctl6eIU6AwUe-hQMAZg2zvqCDjXkXXHXOs7g4XSXoSMys5hxw__"
                      alt=""
                    />
                    <span className="font-semibold text-lg bg-gradient-to-r from-[#FF2E00] via-[#FFF500] to-[#1BF1FF]  bg-clip-text text-transparent">
                      Use Code: June 24 For 20% Off on All Challenge{' '}
                    </span>
                  </p>
                  <p className="flex items-center justify-center">
                    <img
                      className="mr-5 ml-8 w-14 h-14"
                      src="https://s3-alpha-sig.figma.com/img/f978/08cb/b01d3cb9bc6e9976fa4adf045d8826e7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jt3~YUsD-cL-77IkHuXNIMYKb6DiBy9ZJWOonvIr50jM9p4Cg9ogttDvAMAYTD787sGyECxbs0KBezJZPhPyOTfdT87GDTAtXqT-p2ocIbVWtgesVzf6EFAnNSIA9a2bkSPzsb5anFLBXC94lg8V33jg295Jrkkgoj8P8FsvYcJ24Nk7bUl8VX6Ig0OFdtKzJolSoSPD3lI23-esbhfHA2yUJGVHbbQAxhGVSsQHW-WSQmffXQ9nNH6yxZZG94rpebYCJFSWOpTghPhfpOE4ExZhgmBLwCD1Y8rOrctl6eIU6AwUe-hQMAZg2zvqCDjXkXXHXOs7g4XSXoSMys5hxw__"
                      alt=""
                    />
                    <span className=" font-semibold text-lg bg-gradient-to-r from-[#FF2E00] via-[#FFF500] to-[#1BF1FF]  bg-clip-text text-transparent">
                      Use Code: June 24 For 20% Off on All Challenge{' '}
                    </span>
                  </p>
                  <p className="flex items-center justify-center">
                    <img
                      className="mr-5 ml-8 w-14 h-14"
                      src="https://s3-alpha-sig.figma.com/img/f978/08cb/b01d3cb9bc6e9976fa4adf045d8826e7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jt3~YUsD-cL-77IkHuXNIMYKb6DiBy9ZJWOonvIr50jM9p4Cg9ogttDvAMAYTD787sGyECxbs0KBezJZPhPyOTfdT87GDTAtXqT-p2ocIbVWtgesVzf6EFAnNSIA9a2bkSPzsb5anFLBXC94lg8V33jg295Jrkkgoj8P8FsvYcJ24Nk7bUl8VX6Ig0OFdtKzJolSoSPD3lI23-esbhfHA2yUJGVHbbQAxhGVSsQHW-WSQmffXQ9nNH6yxZZG94rpebYCJFSWOpTghPhfpOE4ExZhgmBLwCD1Y8rOrctl6eIU6AwUe-hQMAZg2zvqCDjXkXXHXOs7g4XSXoSMys5hxw__"
                      alt=""
                    />
                    <span className=" font-semibold text-lg bg-gradient-to-r from-[#FF2E00] via-[#FFF500] to-[#1BF1FF]  bg-clip-text text-transparent">
                      Use Code: June 24 For 20% Off on All Challenge{' '}
                    </span>
                  </p>
                </Marquee>

                {/* Home section marquee ends here */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
