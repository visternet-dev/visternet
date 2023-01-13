import { Stack } from "@mui/material";

// swiper js
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { each } from "lodash";
import translate from "utils/locales/translate";

import LandingTitle from "../../title";
import Card from "./card";

function LandingSectionSlider({ data }) {
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
      <LandingTitle subTitleBottom={translate("show-read-more")} center sx={{ mb: 3 }} leftLine={false} rightLine={false}>
        {translate("a-platform-to-empower-all-stakeholders-in-immigration-ecosystem")}
      </LandingTitle>
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
            slidesPerView: 4,
            spaceBetween: 50
          }
        }}
        modules={[Pagination]}
        className="immigration-swiper"
      >
        {data.map((each, index) => (
          <SwiperSlide key={index}>
            <Card thumbnail={each.thumbnail} date={each.date} title={each.title} description={each.description} path={each.path} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
}

export default LandingSectionSlider;
