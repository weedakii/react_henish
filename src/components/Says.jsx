import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Img_1 from "../assets/avatars/user1.png";
import Img_2 from "../assets/avatars/user2.png";
import Img_3 from "../assets/avatars/user3.png";

import "swiper/css";
import "swiper/css/pagination";

const Says = () => {
  return (
    <div>
      <div className="px-5 py-2">
        <div className="max-w-[600px] mx-auto h-full">
          <Swiper
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="mb-10 h-full">
              <div className="p-7 h-full mx-5 cursor-pointer bg-slate-100 hover:bg-main/10 rounded-2xl items-center flex flex-col gap-3">
                <div className="bg-main/30 rounded-full p-2 flex justify-center items-center overflow-hidden h-20 w-20">
                  <img
                    className="rounded-full object-cover"
                    src={Img_1}
                    alt="avatar"
                  />
                </div>
                <h3 className="font-semibold my-2">سماح المطلقة</h3>
                <p className="text-slate-500">كلام كتير ملوش داعي</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-10 h-full">
              <div className="p-7 h-full mx-5 cursor-pointer bg-slate-100 hover:bg-main/10 rounded-2xl items-center flex flex-col gap-3">
                <div className="bg-main/30 rounded-full p-2 flex justify-center items-center overflow-hidden h-20 w-20">
                  <img
                    className="rounded-full object-cover"
                    src={Img_2}
                    alt="avatar"
                  />
                </div>
                <h3 className="font-semibold my-2">سماح المطلقة</h3>
                <p className="text-slate-500">كلام كتير ملوش داعي</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-10 h-full">
              <div className="p-7 h-full mx-5 cursor-pointer bg-slate-100 hover:bg-main/10 rounded-2xl items-center flex flex-col gap-3">
                <div className="bg-main/30 rounded-full p-2 flex justify-center items-center overflow-hidden h-20 w-20">
                  <img
                    className="rounded-full object-cover"
                    src={Img_3}
                    alt="avatar"
                  />
                </div>
                <h3 className="font-semibold my-2">سماح المطلقة</h3>
                <p className="text-slate-500">كلام كتير ملوش داعي</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Says;
