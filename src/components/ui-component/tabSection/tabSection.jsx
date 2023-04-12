import { useRouter } from "next/router";

import React, { useState } from "react";

import { Box, Fade, Grid, Stack, Typography } from "@mui/material";

import { FreeMode, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import { Tab } from "components/pages/dashboards/cards";
import MainCard from "components/ui-component/cards/MainCard";

const data = [
  {
    tab: {
      title: "Basic",
      caption: "complted",
      status: "complted", //complted, pending
      srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
    },
    panel: <>Plean 1</>
  },
  {
    tab: {
      title: "Education2",
      caption: "complted",
      status: "complted", //complted, pending
      srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
    },
    panel: <>Plean 2</>
  },
  {
    tab: {
      title: "Education2",
      caption: "complted",
      status: "complted", //complted, pending
      srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
    },
    panel: <>Plean 3</>
  },
  {
    tab: {
      title: "Education2",
      caption: "complted",
      status: "complted", //complted, pending
      srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
    },
    panel: <>Plean 4</>
  },
  {
    tab: {
      title: "Education2",
      caption: "complted",
      status: "complted", //complted, pending
      srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
    },
    panel: <>Plean 1</>
  },
  {
    tab: {
      title: "Education2",
      caption: "complted",
      status: "complted", //complted, pending
      srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
    },
    panel: <>Plean 1</>
  },
  {
    tab: {
      title: "Education2",
      caption: "complted",
      status: "complted", //complted, pending
      srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
    },
    panel: <>Plean 1</>
  },
  {
    tab: {
      title: "Education2",
      caption: "complted",
      status: "complted", //complted, pending
      srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
    },
    panel: <>Plean 1</>
  }
];

function TabSection({ data }) {
  const { query } = useRouter();
  const [activeTab, setActiveTab] = useState(+query?.tab - 1 || 0);

  return (
    <MainCard>
      <Grid gap={5} flexDirection="row" container>
        <Grid xs={12} item>
          <Box>
            <Typography component="h4" variant="h4">
              Account Setting
            </Typography>
          </Box>
        </Grid>
        <Grid sx={12} item>
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
              slidesPerView={1}
              spaceBetween={5}
              pagination={true}
              breakpoints={{
                640: {
                  slidesPerView: 3.5,
                  spaceBetween: 10
                },
                768: {
                  slidesPerView: 3.5,
                  spaceBetween: 10
                },
                1024: {
                  slidesPerView: 4.5,
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
              {data.map(({ tab }, index) => (
                <SwiperSlide key={index}>
                  <Tab
                    active={index === activeTab}
                    srcIcon={tab.srcIcon}
                    onClick={() => setActiveTab(index)}
                    title={{ text: tab.title }}
                    status={tab.status}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Stack>
        </Grid>

        {data.map(({ tab }, index) => (
          <Fade timeout={500} in={activeTab === index} key={index}>
            <Box hidden={activeTab !== index}>{data?.[activeTab]?.panel ?? "Notfound"}</Box>
          </Fade>
        ))}
      </Grid>
    </MainCard>
  );
}

export default TabSection;
