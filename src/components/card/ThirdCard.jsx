import Img from "../../assets/4.jpg";

const ThirdCard = () => {
  return (
    <div className="my-20 sm:mx-28 mx-10">
      <div className="flex flex-col lg:flex-row">
        <div className="p-6 lg:shadow-lg flex flex-col justify-center lg:rounded w-full bg-white z-10 lg:mb-0 mb-4 lg:scale-x-110 lg:scale-y-90 scale-100 border border-slate-300">
          <h3 className="text-slate-900 font-bold text-4xl mb-8">
            الجراحات الصغرى
          </h3>
          <p className="text-slate-700 leading-7">
            ختان ( طهارة الذكور ) - الخراج - الكيس الدهني - الكيس الشمعي - الكيس
            الزلالي - الظفر الغائر ـ فك التصاق اللسان إستخراج الجسم الغريب -
            تنظيف وعلاج قرح الفراش والقدم السكري - علاج دوالي الساقين بالحقن
            الـغـــــوى استئصال السنطة وعين السمكة
          </p>
        </div>
        <div className="w-full">
          <img
            src={Img}
            alt=""
            className="object-cover w-full object-[-60%_15%] max-h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdCard;
