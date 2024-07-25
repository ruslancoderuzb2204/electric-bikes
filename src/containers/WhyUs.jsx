const WhyUs = () => {
  return (
    <section className="container h-100 w-100 bg-[#404040]">
      <div className="text-white justify-between lg:py-24 md:py-16 sm:py-8  py-36 sm:flex-col  flex ">
        <h2 className="w-full font-semibold md:text-2xl sm:text-center sm:pb-4 text-3xl">WHY US?</h2>
        <div>
          <p className="text-2xl lg:text-xl pb-16 md:text-base  md:pb-8 opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip minim veniam.
          </p>
          <div className="flex gap-28 lg:gap-16 md:gap-12 xs:gap-4 sm:gap-8">
            <div className="flex">
              <div className="w-[1px] bg-[#68F750] h-full mr-4"> </div>
              <div>
                <span className="font-semibold sm:text-2xl xs:text-xl lg:text-4xl text-5xl ">54</span>
                <p className="opacity-70 mt-2 lg:text-sm" >Lorem ipsum dolor sit amet elit doubl</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-[1px] bg-[#68F750] h-full mr-4"> </div>
              <div>
                <span className="font-semibold sm:text-2xl xs:text-xl lg:text-4xl text-5xl ">75 %</span>
                <p className="opacity-70 mt-2 lg:text-sm" >Lorem ipsum dolor sit amet elit doubl</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-[1px] bg-[#68F750] h-full mr-4"> </div>
              <div>
                <span className="font-semibold sm:text-2xl xs:text-xl lg:text-4xl text-5xl ">5 year</span>
                <p className="opacity-70 mt-2 lg:text-sm" >Lorem ipsum dolor sit amet elit doubl</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
