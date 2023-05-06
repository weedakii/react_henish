import Input from "./ui/Input";
const Contact = () => {
  return (
    <>
      <h2 className="ttl">تواصل معنا</h2>
      <div className="flex gap-4 md:flex-row flex-col py-12 px-14">
        <form className="px-3 flex flex-col gap-4 w-full">
          <Input type={"text"} val={"الاسم"} />
          <Input type={"email"} val={"البريد الالكتروني"} />
          <Input type={"text"} val={"رقم الهاتف"} />
          <textarea
            className="inp"
            value="الرسالة"
            cols="10"
            rows="5"
          ></textarea>
          <button className="btn">ارسال</button>
        </form>
        <div className="w-full flex flex-col gap-4">
          <div className="border-mainColor border text-center p-2 rounded-md">
            <span className="block text-slate-600 text-sm font-medium">
              عيادة مدينة نصر <br />
              ميديكال سنتر ٣ امتداد ابو داوود الظاهرى خلف مدرسة الرايه المنطقه
              الثامن الحى الثامن مدينة نصر
            </span>
            <p className="font-bold text-slate-900"> 01026021515</p>
            <span>📌 الحجز مسبقا هاتفي</span>
          </div>
          <div className="border-mainColor border text-center p-2 rounded-md">
            <span className="block text-slate-600 text-sm font-medium">
              عيادة التجمع الخامس <br />
              لحى الرابع- عمارة٢٤٩ب - امام مجمع الخدمات بجوار مسجد التقوى وقسم
              شرطة القاهره الجديده الدور الارضى
            </span>
            <p className="font-bold text-slate-900"> 01026021515</p>
            <span>📌 الحجز مسبقا هاتفي</span>
          </div>
          <div className="border-mainColor border text-center p-2 rounded-md">
            <span className="block text-slate-600 text-sm font-medium">
              عيادة كفرالشيخ <br />
              دوران الضرايب_ بجوار مغاورى للأثاث وحجازى للنجف_ فوق صيدلية دكتور
              وائل فاضل.
            </span>
            <p className="font-bold text-slate-900"> 01007067189</p>
            <span>📌 الحجز مسبقا هاتفي</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
