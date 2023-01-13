import { Stack, Typography } from "@mui/material";

// swiper js
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import translate from "utils/locales/translate";

import LandingTitle from "../../title";
import Card from "./card";

function LandingSectionUserExperience({ data = [] }) {
  return (
    <Stack
      sx={{
        ".swiper": { width: "100%", height: "100%", padding: "4rem 1rem" },
        ".swiper-side": {
          textAlign: "center",
          fontSize: "18px",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }
      }}
      alignItems="center"
    >
      <LandingTitle center sx={{ mb: 3 }} leftLine={false} rightLine={false}>
        {translate("what-our-users-experience")}
      </LandingTitle>
      <Typography>{translate("lorem")}</Typography>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
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
        className="experience-swiper"
      >
        {data.map((each, index) => (
          <SwiperSlide key={index}>
            <Card imageSrc={each.imageSrc} user={each.user} type={each.type} text={each.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
}

export default LandingSectionUserExperience;
