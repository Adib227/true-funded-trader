import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

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
          style={{ fontFamily: 'Roboto, sans-serif' }}
          className="text-xl pt-5 pb-3 font-bold 
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
        <p style={{ fontFamily: 'Roboto, sans-serif' }} className="pt-2">
          <span className="font-light text-[14px]">Based on</span>{' '}
          <span className="font-bold text-[14px] underline">456 reviews</span>
        </p>
        <p
          style={{ fontFamily: 'Roboto, sans-serif' }}
          className="flex justify-center items-center pt-2"
        >
          <img
            className="w-6 h-6"
            src="https://i.ibb.co.com/h1Bj7GQN/Shape.png"
            alt=""
          />
          <span className="pt-1 pl-1 text-lg font-bold">Trustpilot</span>
        </p>
      </div>
      <div
        style={{ fontFamily: 'Roboto, sans-serif' }}
        className="max-w-[1680px] mx-auto pt-4 lg:pt-14"
      >
        <div>
          <h1 className="text-2xl font-bold items-stretch">
            What customers say about us{' '}
          </h1>
          <p className="font-normal text-[16px] text-[#364667] items-stretch">
            We do our best to provide you the best experience ever
          </p>
        </div>
        <div className="pt-8 w-full lg:w-[1680px] mx-auto">
          {' '}
          <Swiper
            spaceBetween={45}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 6,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper "
          >
            <SwiperSlide className="  shadow-xl m-4">
              <div className="w-64 h-64 p-5 space-y-2">
                <p>
                  <img
                    src="https://i.ibb.co.com/hxzw8Nx5/oi-double-quote-serif-left-1.png"
                    alt=""
                  />
                </p>
                <p className="text-lg font-medium">Best on the market</p>
                <p className="flex">
                  <img
                    src="https://i.ibb.co.com/WNmsn3yv/stars-5-1-1.png"
                    alt=""
                  />{' '}
                  <span className="pl-2 text-xs font-light">2 days ago</span>
                </p>
                <p className="text-[14px] font-light">
                  I love this product because the support is great. Please ...
                </p>
                <p className="text-[14px] font-bold pt-3">Worldtraveler</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="  shadow-xl m-4">
              <div className="w-64 h-64 p-5 space-y-2">
                <p>
                  <img
                    src="https://i.ibb.co.com/hxzw8Nx5/oi-double-quote-serif-left-1.png"
                    alt=""
                  />
                </p>
                <p className="text-lg font-medium">Best on the market</p>
                <p className="flex">
                  <img
                    src="https://i.ibb.co.com/WNmsn3yv/stars-5-1-1.png"
                    alt=""
                  />{' '}
                  <span className="pl-2 text-xs font-light">2 days ago</span>
                </p>
                <p className="text-[14px] font-light">
                  I love this product because the support is great. Please ...
                </p>
                <p className="text-[14px] font-bold pt-3">Worldtraveler</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="  shadow-xl m-4">
              <div className="w-64 h-64 p-5 space-y-2">
                <p>
                  <img
                    src="https://i.ibb.co.com/hxzw8Nx5/oi-double-quote-serif-left-1.png"
                    alt=""
                  />
                </p>
                <p className="text-lg font-medium">Best on the market</p>
                <p className="flex">
                  <img
                    src="https://i.ibb.co.com/WNmsn3yv/stars-5-1-1.png"
                    alt=""
                  />{' '}
                  <span className="pl-2 text-xs font-light">2 days ago</span>
                </p>
                <p className="text-[14px] font-light">
                  I love this product because the support is great. Please ...
                </p>
                <p className="text-[14px] font-bold pt-3">Worldtraveler</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="  shadow-xl m-4">
              <div className="w-64 h-64 p-5 space-y-2">
                <p>
                  <img
                    src="https://i.ibb.co.com/hxzw8Nx5/oi-double-quote-serif-left-1.png"
                    alt=""
                  />
                </p>
                <p className="text-lg font-medium">Best on the market</p>
                <p className="flex">
                  <img
                    src="https://i.ibb.co.com/WNmsn3yv/stars-5-1-1.png"
                    alt=""
                  />{' '}
                  <span className="pl-2 text-xs font-light">2 days ago</span>
                </p>
                <p className="text-[14px] font-light">
                  I love this product because the support is great. Please ...
                </p>
                <p className="text-[14px] font-bold pt-3">Worldtraveler</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="  shadow-xl m-4">
              <div className="w-64 h-64 p-5 space-y-2">
                <p>
                  <img
                    src="https://i.ibb.co.com/hxzw8Nx5/oi-double-quote-serif-left-1.png"
                    alt=""
                  />
                </p>
                <p className="text-lg font-medium">Best on the market</p>
                <p className="flex">
                  <img
                    src="https://i.ibb.co.com/WNmsn3yv/stars-5-1-1.png"
                    alt=""
                  />{' '}
                  <span className="pl-2 text-xs font-light">2 days ago</span>
                </p>
                <p className="text-[14px] font-light">
                  I love this product because the support is great. Please ...
                </p>
                <p className="text-[14px] font-bold pt-3">Worldtraveler</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="  shadow-xl m-4">
              <div className="w-64 h-64 p-5 space-y-2">
                <p>
                  <img
                    src="https://i.ibb.co.com/hxzw8Nx5/oi-double-quote-serif-left-1.png"
                    alt=""
                  />
                </p>
                <p className="text-lg font-medium">Best on the market</p>
                <p className="flex">
                  <img
                    src="https://i.ibb.co.com/WNmsn3yv/stars-5-1-1.png"
                    alt=""
                  />{' '}
                  <span className="pl-2 text-xs font-light">2 days ago</span>
                </p>
                <p className="text-[14px] font-light">
                  I love this product because the support is great. Please ...
                </p>
                <p className="text-[14px] font-bold pt-3">Worldtraveler</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="  shadow-xl m-4">
              <div className="w-64 h-64 p-5 space-y-2">
                <p>
                  <img
                    src="https://i.ibb.co.com/hxzw8Nx5/oi-double-quote-serif-left-1.png"
                    alt=""
                  />
                </p>
                <p className="text-lg font-medium">Best on the market</p>
                <p className="flex">
                  <img
                    src="https://i.ibb.co.com/WNmsn3yv/stars-5-1-1.png"
                    alt=""
                  />{' '}
                  <span className="pl-2 text-xs font-light">2 days ago</span>
                </p>
                <p className="text-[14px] font-light">
                  I love this product because the support is great. Please ...
                </p>
                <p className="text-[14px] font-bold pt-3">Worldtraveler</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="  shadow-xl m-4">
              <div className="w-64 h-64 p-5 space-y-2">
                <p>
                  <img
                    src="https://i.ibb.co.com/hxzw8Nx5/oi-double-quote-serif-left-1.png"
                    alt=""
                  />
                </p>
                <p className="text-lg font-medium">Best on the market</p>
                <p className="flex">
                  <img
                    src="https://i.ibb.co.com/WNmsn3yv/stars-5-1-1.png"
                    alt=""
                  />{' '}
                  <span className="pl-2 text-xs font-light">2 days ago</span>
                </p>
                <p className="text-[14px] font-light">
                  I love this product because the support is great. Please ...
                </p>
                <p className="text-[14px] font-bold pt-3">Worldtraveler</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="  shadow-xl m-4">
              <div className="w-64 h-64 p-5 space-y-2">
                <p>
                  <img
                    src="https://i.ibb.co.com/hxzw8Nx5/oi-double-quote-serif-left-1.png"
                    alt=""
                  />
                </p>
                <p className="text-lg font-medium">Best on the market</p>
                <p className="flex">
                  <img
                    src="https://i.ibb.co.com/WNmsn3yv/stars-5-1-1.png"
                    alt=""
                  />{' '}
                  <span className="pl-2 text-xs font-light">2 days ago</span>
                </p>
                <p className="text-[14px] font-light">
                  I love this product because the support is great. Please ...
                </p>
                <p className="text-[14px] font-bold pt-3">Worldtraveler</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
