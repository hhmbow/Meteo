import React from "react";
import { StyledToday } from "../../styles";
import { convertC, convertF } from "../../helpers";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";

const Today = ({ data, tempUnit }) => (
  <StyledToday>
    <Swiper
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{
        //  window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 4,
        },
        //  window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 5,
        },
        //  window width is >= 991px
        991: {
          width: 991,
          slidesPerView: 6,
        },
        //  window width is >= 1024px
        1024: {
          width: 1024,
          slidesPerView: 6,
        },
      }}
    >
      {data &&
        data.map((item, i) => (
          <SwiperSlide key={i.toString()}>
            <div className="box_info">
              <div>
                {new Date(item.dt * 1000).toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </div>
              <img
                src={require("../../images/v2/" +
                  item.weather[0].icon +
                  ".png")}
                alt={item.weather[0].description}
              />
              <div className="temp_info">
                <span>
                  {tempUnit
                    ? convertF(item.temp).toFixed(0)
                    : convertC(item.temp).toFixed(0)}
                  ° {tempUnit ? "F" : "C"}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  </StyledToday>
);

export default Today;
