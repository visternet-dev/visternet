import { Stack } from "@mui/material";

import { FreeMode, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import translate from "utils/locales/translate";

import LandingTitle from "../../title";
import UpdateVisasCard from "./card";

const data = [
  { date: "10.10.2020", content: "UK government considers new visa sponsorship route for GPs" },
  { date: "10.10.2020", content: "UK government considers new visa sponsorship route for GPs" },
  { date: "10.10.2020", content: "UK government considers new visa sponsorship route for GPs" },
  { date: "10.10.2020", content: "UK government considers new visa sponsorship route for GPs" },
  { date: "10.10.2020", content: "UK government considers new visa sponsorship route for GPs" },
  { date: "10.10.2020", content: "UK government considers new visa sponsorship route for GPs" }
];

function LandingSectionUpdateVisas() {
  return (
    <Stack alignItems="flex-start">
      <LandingTitle subTitle={translate("news")} rightLine={false} sx={{ mb: 3 }}>
        {translate("new-updates-about-visas")}
      </LandingTitle>

      <Stack
        spacing={2}
        sx={{
          maxHeight: "277px",
          overflow: "auto",
          width: "100%",
          ".swiper-scrollbar": {
            right: "unset",
            left: "0"
          },
          ".swiper": { width: "100%", height: "100%" },
          ".swiper-slide": {
            background: "#fff",
            display: "flex"
          }
        }}
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10
            }
          }}
          direction="vertical"
          creativeEffect
          freeMode
          scrollbar
          mousewheel
          sliderperview="auto"
          modules={[FreeMode, Scrollbar]}
          className="updateVisaCard"
        >
          {data.map(({ date, content }, index) => (
            <SwiperSlide key={index}>
              <UpdateVisasCard subTitle={date} content={content} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </Stack>
  );
}

export default LandingSectionUpdateVisas;
