import Img from "../../assets/3.jpg";

const SecondCard = () => {
  return (
    <div className="my-20 sm:mx-28 mx-10">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full">
          <img
            src={Img}
            alt=""
            className="object-cover w-full object-[-60%_15%] max-h-[500px]"
          />
        </div>
        <div className="p-6 lg:shadow-lg flex flex-col justify-center lg:rounded w-full bg-white z-10 lg:mt-0 mt-4 lg:scale-x-110 lg:scale-y-90 scale-100 border border-slate-300">
          <h3 className="text-slate-900 font-bold text-4xl mb-8">
            الجراحات المتوسطة
          </h3>
          <p className="text-slate-700 leading-7">
            إستئصال الزائدة الدودية جراحيا أو بالمنظار - إصلاح الفتق بأنواعه (
            الإربي والسري والجراحي ) - إستئصال القلية المائية بالخصية الفتق
            الإربي والسري للأطفال - إستئصال دوالي الخصية - إستئصال دوالي الساقين
            - جراحات القدم السكري - الشرخ الشرجي والبواسير والناسور الشرجي -
            الناسور العصعصي
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
