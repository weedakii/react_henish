import Dr_1 from "../assets/dr_1.jpg";
import Dr_2 from "../assets/dr_2.jpg";
import Dr_3 from "../assets/dr_3.jpg";
import Dr_4 from "../assets/dr_4.jpg";
const Services = () => {
  const data = [
    {
      img: Dr_1,
      disc: "looooooooooooooong disc",
    },
    {
      img: Dr_2,
      disc: "looooooooooooooong disc",
    },
    {
      img: Dr_3,
      disc: "looooooooooooooong disc",
    },
    {
      img: Dr_4,
      disc: "looooooooooooooong disc",
    },
  ];
  return (
    <div className="py-12">
      <h1 className="text-slate-800 text-4xl font-semibold text-center my-5">
        خدماتنا
      </h1>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((e, i) => (
          <div
            key={i}
            className="p-2 border border-slate-300 rounded-md flex flex-col"
          >
            <img
              src={e.img}
              alt=""
              className="rounded-lg object-cover flex-auto"
            />
            <p className="p-1 font-medium text-center text-slate-600 mt-2">
              {e.disc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
