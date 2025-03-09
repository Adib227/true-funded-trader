const Connectpage = () => {
  return (
    <div className="w-full lg:max-w-[1920px]">
      <div
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        className="text-center pt-16 lg:pt-11"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-black to-gray-400  bg-clip-text text-transparent ">
          Connect With Us
        </h1>
        <p className="text-xl pt-4 pb-7 font-bold bg-gradient-to-r from-black to-gray-400  bg-clip-text text-transparent">
          We are here to answer any question you may have
        </p>
      </div>
      <div
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        className="grid lg:flex justify-between"
      >
        <div className="w-full lg:w-1/2 pl-6 lg:pl-36 pt-14">
          <div>
            <h1>
              <button className="w-8 lg:w-10 h-8 lg:h-10 mr-1 lg:mr-2 border rounded-full justify-center align-middle justify-items-center">
                <img src="https://i.ibb.co.com/ksF0WTDt/mail.png" alt="" />
              </button>
              <span className="text-[18px] font-bold">Our Contacts</span>
            </h1>
            <div className="pl-0 lg:pl-12 text-xs font-normal">
              {' '}
              <p>Email: Support@truefunded.com</p>
              <p>Phone: +15741000000</p>
            </div>
          </div>
          <div className="pt-16">
            <h1>
              <button className="w-8 lg:w-10 h-8 lg:h-10 mr-1 lg:mr-2 border rounded-full justify-center align-middle justify-items-center">
                <img
                  src="https://i.ibb.co.com/1fHRQfNZ/refresh-ccw.png"
                  alt=""
                />
              </button>
              <span className="text-[18px] font-bold"> Complaint Process</span>
            </h1>
            <div className="pl-0 lg:pl-12 text-xs font-normal">
              {' '}
              <p>
                At True Funded Trader, We are committed to maintaining the
                highest standards of ethical <br /> conduct and compliance with
                legal and regulatory requirements. <br /> <br /> We understand
                the importance of a robust process for addressing ant reports of
                illegal activity. <br /> this page outlines our comprehensive
                complaint procedure, ensuring transparency, accountability and
                prompt action. <br /> <br /> If you wish to report an
                incident/concern, please send a detailed email to <br />
                support@truefundedtrader.com <br /> <br />
                We encourage you to include as much information as possible to
                facilitate a thorough <br /> investigation or contact via live
                chat.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <section className="p-6 ">
            <form
              noValidate=""
              action=""
              className=" flex flex-col mx-auto space-y-12"
            >
              <fieldset className="grid  gap-6 p-8  border-1 border-[#CECECE] rounded-3xl shadow-xl ">
                <div className="space-y-2 col-span-full lg:col-span-2">
                  <p className="font-semibold text-2xl">Write To Us</p>
                  <p className="text-[15px] text-[#515151] font-normal">
                    If you have any inquiries or need our assistance, don’t
                    hesitate to submit the form. Our support will be in touch
                    with you as soon as possible. You can also reach us through
                    our live chat.
                  </p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-5">
                  <div className="col-span-full sm:col-span-3">
                    <input
                      id="firstname"
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-2 placeholder:pl-4 rounded-3xl border-[#828080] "
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <input
                      id="number"
                      type="number"
                      placeholder="Phone Number"
                      className="w-full p-2 placeholder:pl-4 rounded-3xl border-[#828080]  "
                    />
                  </div>
                  <div className="col-span-full sm:col-span-7.5">
                    <input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      className="w-full lg:w-[845px] p-2 placeholder:pl-4 rounded-3xl border-[#828080]  "
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <input
                      id="message"
                      type="text"
                      placeholder="Message"
                      className="w-full lg:w-[845px] h-full lg:h-[90px] p-2 placeholder:pl-4 rounded-3xl border-[#828080]  "
                    />
                  </div>
                </div>
                <div className="">
                  <a
                    href=""
                    className="bg-[#D9D9D9] rounded-3xl py-2 px-10 text-black font-semibold text-[18px] "
                  >
                    Send
                  </a>
                </div>
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Connectpage;
