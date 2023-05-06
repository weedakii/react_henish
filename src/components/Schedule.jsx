import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const times = [
  {
    day: "الأحد",
    time: "09:30am - 08:00pm",
  },
  {
    day: "الأحد",
    time: "09:30am - 08:00pm",
  },
  {
    day: "الأحد",
    time: "09:30am - 08:00pm",
  },
  {
    day: "الأحد",
    time: "09:30am - 08:00pm",
  },
  {
    day: "الأحد",
    time: "09:30am - 08:00pm",
  },
  {
    day: "الأحد",
    time: "09:30am - 08:00pm",
  },
];

const Schedule = () => {
  return (
    <div className="bg-blue-100">
      <div className="py-12 mx-24">
        <h1 className="ttl">اوقاتنا</h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-20">
          <div className="w-full">
            <Calendar selectRange={true} />
          </div>
          <div className="w-full">
            <h3>المواعيد</h3>
            <div className="p-2 flex flex-wrap gap-6">
              {times.map((e, i) => {
                return (
                  <p
                    key={i}
                    className="w-fit py-2 px-4 rounded-md bg-blue-200 font-semibold"
                  >
                    <span className="block mb-2">{e.day}</span>
                    <span className="block text-sm whitespace-nowrap text-slate-600">
                      {e.time}
                    </span>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
