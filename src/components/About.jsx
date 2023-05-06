"use client";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Img_2 from "../assets/2.jpg";

const features = [
  {
    name: "",
    description:
      "مدرس الجراحة والمناظير وجراحات الجهاز الهضمي والكبد. بكلية الطب_جامعة الأزهر",
    icon: CloudArrowUpIcon,
  },
  {
    name: "",
    description: "دكتوراة فى زراعة الكبد- المركز الطبى العالمى.",
    icon: LockClosedIcon,
  },
  {
    name: "",
    description: "الكشف لغيرالقادرين مجانا بفضل الله.",
    icon: ServerIcon,
  },
];

export default function About() {
  return (
    <div className="overflow-hidden bg-white py-12 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                الدكتور/محمد إبراهيم حنيش
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                استشارى الجراحة والمناظير وجراحات السمنة المفرطة
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div dir="rtl" key={feature.name} className="relative px-9">
                    <dd className="inline">{feature.description}</dd>
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute right-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={Img_2}
            alt="Product screenshot"
            className="w-[48rem] h-[700px] object-top object-cover overflow-hidden max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            // width={2432}
            // height={142}
            style={{ backgroundPosition: "top" }}
          />
        </div>
      </div>
    </div>
  );
}
