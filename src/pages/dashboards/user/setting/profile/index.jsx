import { Box, Grid, Stack, Typography } from "@mui/material";

import { FreeMode, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import Layout from "layout";

import { Tab } from "components/pages/dashboards/cards";
import MainCard from "components/ui-component/cards/MainCard";
import LAYOUT from "constant";

const Tabs = [
  {
    srcIcon: "/assets/images/icons/setting/profile/user-profile.svg",
    onClick: () => console.log("clicked 1"),
    title: { text: "User Profile", sx: { color: "#EF6820" } },
    caption: { text: "completed", sx: { color: "#00C853" } }
  },
  {
    srcIcon: "/assets/images/icons/setting/profile/user-profile.svg",
    onClick: () => console.log("clicked 1"),
    title: { text: "User Profile", sx: { color: "#9E9E9E" } },
    caption: { text: "Not completed", sx: { color: "#EF6820" } }
  },
  {
    srcIcon: "/assets/images/icons/setting/profile/user-profile.svg",
    onClick: () => console.log("clicked 1"),
    title: { text: "User Profile", sx: { color: "#9E9E9E" } },
    caption: { text: "Not completed", sx: { color: "#EF6820" } }
  },
  {
    srcIcon: "/assets/images/icons/setting/profile/user-profile.svg",
    onClick: () => console.log("clicked 1"),
    title: { text: "User Profile", sx: { color: "#9E9E9E" } },
    caption: { text: "Not completed", sx: { color: "#EF6820" } }
  },
  {
    srcIcon: "/assets/images/icons/setting/profile/user-profile.svg",
    onClick: () => console.log("clicked 1"),
    title: { text: "User Profile", sx: { color: "#9E9E9E" } },
    caption: { text: "Not completed", sx: { color: "#EF6820" } }
  },
  {
    srcIcon: "/assets/images/icons/setting/profile/user-profile.svg",
    onClick: () => console.log("clicked 1"),
    title: { text: "User Profile", sx: { color: "#9E9E9E" } },
    caption: { text: "Not completed", sx: { color: "#EF6820" } }
  }
];
function Profile() {
  return (
    <MainCard>
      <Grid gap={5} flexDirection="row" container>
        <Grid xs={12}>
          <Box>
            <Typography component="h4" variant="h4">
              Account Setting
            </Typography>
          </Box>
        </Grid>
        <Grid sx={12}>
          <Stack
            sx={{
              maxHeight: "277px",
              overflow: "auto",
              width: "100%",
              display: "grid",
              ".swiper-scrollbar": {
                right: "unset",
                left: "0"
              },
              ".swiper": { width: "100%", height: "100%", padding: "1rem 0" },
              ".swiper-slide": {
                background: "#fff",
                display: "flex"
              }
            }}
            flexDirection="row"
            overflow="auto"
            flexWrap="nowrap"
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
              direction="horizontal"
              creativeEffect
              freeMode
              scrollbar
              mousewheel
              sliderPerView="auto"
              modules={[FreeMode, Scrollbar]}
              className="updateVisaCard"
            >
              {Tabs.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Tab srcIcon={item.srcIcon} onClick={item.onClick} title={item.title} caption={item.caption} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Stack>
        </Grid>
      </Grid>
    </MainCard>
  );
}

Profile.getLayout = function getLayout(page) {
  return <Layout variant={LAYOUT.DASHBOARD}>{page}</Layout>;
};

export default Profile;
