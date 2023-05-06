import Img_1 from "../assets/1.jpg";

const links = [
  { name: "كفائة" },
  { name: "تفاني ف العمل" },
  { name: "الرعاية" },
  { name: "راحة المريض" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <img
        src={Img_1}
        alt=""
        className="absolute md:object-top inset-0 -z-10 h-full w-full object-cover object-right"
      />
      <div className="mx-auto bg-slate-950/60 max-w-7xl py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            الدكتور/محمد إبراهيم حنيش
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            ✒️استشارى الجراحة والمناظير وجراحات السمنة المفرطة. <br />
            ✒️مدرس الجراحة والمناظير وجراحات الجهاز الهضمي والكبد بكلية الطب_
            جامعة الأزهر. <br />
            ✒️دكتوراة فى زراعة الكبد- المركز الطبى العالمى.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-xs sm:text-base font-semibold leading-7 justify-around text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <span key={link.name}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </span>
            ))}
          </div>
          <dl className="mt-16 bg-blue-500/40 rounded-lg p-4 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="flex flex-col-reverse text-center bg-blue-700 border border-blue-500 rounded-md px-6"
              >
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
