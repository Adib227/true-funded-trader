const Getfunded = () => {
  return (
    <div
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      className="h-full lg:h-[900px]  text-white bg-gradient-to-b from-[#5887F2]  via-[#05133B]   to-[#5887F2] "
    >
      <div className="text-center pt-14 space-y-4">
        <h1 className="text-3xl lg:text-[42px] font-semibold lg:font-bold">
          Step To Get Funded
        </h1>
        <p className="text-sm lg:text-[16px] font-medium lg:font-semibold">
          Choose between a 1 or 2 step challenge and pass them to get funded
          today.
        </p>
      </div>
      <div>
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Tab 1"
          />
          <div className="tab-content bg-black border-base-300 p-6">
            Tab content 1
          </div>
          <div className="tab-content bg-black border-base-300 p-6">
            Tab Content 2
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Tab 2"
            defaultChecked
          />
          <div className="tab-content bg-black border-base-300 p-6">
            Tab content 2
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Tab 3"
          />
          <div className="tab-content bg-black border-base-300 p-6">
            <div>Tab COntent 3</div>
            <div>Tab Content 4</div>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getfunded;
