import { useRouter } from "next/router";

import { Stack } from "@mui/material";

// Import Swiper styles
import "swiper/css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import translate from "utils/locales/translate";

import LandingTitle from "../../title";
import Card from "./Card";

function LandingSectionImmigration({ data = [] }) {
  const router = useRouter();
  return (
    <Stack
      sx={{
        ".swiper": { width: "100%", height: "100%", padding: "4rem 1rem" },
        ".swiper-slide": {
          textAlign: "center",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }
      }}
      alignItems="flex-start"
    >
      <LandingTitle subTitle={translate("category")} rightLine={false} sx={{ mb: 3 }}>
        {translate("immigration-opportunities")}
      </LandingTitle>
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
            slidesPerView: 3,
            spaceBetween: 50
          }
        }}
        creativeEffect
        pagination={{
          clickable: true
        }}
        className="immigrationSilder"
      >
        {data.length > 0 &&
          data.map((each, index) => (
            <SwiperSlide key={index}>
              <Card image={each.src} text={each.text} onClick={() => router.push(each.navigate)} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Stack>
  );
}

export default LandingSectionImmigration;
