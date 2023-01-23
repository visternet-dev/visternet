import { Stack } from "@mui/material";

import "swiper/css";
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
          maxHeight: "400px",
          overflow: "auto",
          width: "100%",
          px: 2,
          ".swiper": { width: "100%", height: "100%" },
          ".swiper-slide": {
            textAlign: "center",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }
        }}
      >
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50
            }
          }}
          direction="vertical"
          creativeEffect
          pagination={{
            clickable: true
          }}
          className="immigrationSilder"
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
