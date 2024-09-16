const WhyUs = () => {
  return (
    <section className="container h-100 w-100 bg-[#404040]">
      <div className="text-white justify-between lg:py-24 md:py-16 sm:py-8  py-36 sm:flex-col  flex ">
        <h2 className="w-full font-semibold md:text-2xl sm:text-center sm:pb-4 text-3xl">
          Nimaga biz?
        </h2>
        <div>
          <p className="text-2xl lg:text-xl pb-16 md:text-base  md:pb-8 opacity-70">
            Bizning mahsulotlarimiz boshqalardan yuqori sifat, keng tanlov va
            hamyonbopligi bilan ajralib turadi. Instagram sahifamiz orqali esa
            skuterlarimizning haqida to’liq ma’lumot olishingiz
            mumkin. Servis xizmatimizda esa sizga haqiqiy professionallar xizmat
            ko’rsatishadi. Biz sizga har doim qulaylik ulashishga
            harakat qilamiz!
          </p>
          <div className="flex xs:flex-col  gap-28 lg:gap-16 md:gap-12 xs:gap-4 sm:gap-8">
            <div className="flex xs:pb-2 border-[#68F750] xs:border-b-2">
              <div className="w-[1px] bg-[#68F750] h-full mr-4"> </div>
              <div>
                <span className="font-semibold sm:text-2xl xs:text-xl lg:text-4xl text-5xl ">
                  10
                </span>
                <p className="opacity-70 mt-2 lg:text-sm">
                  mingdan ortiq mijozlarni o’z hizmatlarimiz bilan mamnun qilib
                  kelmoqdamiz.
                </p>
              </div>
            </div>
            <div className="flex xs:pb-2 border-[#68F750] xs:border-b-2">
              <div className="w-[1px] bg-[#68F750] h-full mr-4"> </div>
              <div>
                <span className="font-semibold sm:text-2xl xs:text-xl lg:text-4xl text-5xl ">
                  75 %
                </span>
                <p className="opacity-70 mt-2 lg:text-sm">
                  mijozlarimiz bizdan yana bir bor skuter ijaraga olishadi.
                </p>
              </div>
            </div>
            <div className="flex xs:pb-2 border-[#68F750] xs:border-b-2">
              <div className="w-[1px] bg-[#68F750] h-full mr-4"> </div>
              <div>
                <span className="font-semibold sm:text-2xl xs:text-xl lg:text-4xl text-5xl ">
                  3
                </span>
                <p className="opacity-70 mt-2 lg:text-sm">
                  yillik izlanishlar va yuqori tajribaga ega mutaxasislar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
