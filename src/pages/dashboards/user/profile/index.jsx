import { useState } from "react";

import { Box, Grid, Stack, Typography } from "@mui/material";

import { FreeMode, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import Layout from "layout";

import { Tab } from "components/pages/dashboards/cards";
import { EducationInfo } from "components/pages/dashboards/profile/tabs/education/education";
import { FamilyInfo } from "components/pages/dashboards/profile/tabs/familyInfo";
import { FinancialInfo } from "components/pages/dashboards/profile/tabs/financialInfo";
import { JobInfo } from "components/pages/dashboards/profile/tabs/jobInfo";
import { LanguageInfo } from "components/pages/dashboards/profile/tabs/languageInfo";
import { UserProfile } from "components/pages/dashboards/profile/tabs/userProfile";
import MainCard from "components/ui-component/cards/MainCard";
import LAYOUT from "constant";

function Profile() {
  const [activeTab, setActiveTab] = useState({ index: 0 });

  const changeActiveTab = (tab, setState) => {
    setState((prev) => ({ ...prev, index: tab }));
  };

  console.log(activeTab);
  
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
                  slidesPerView: 5,
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
              <SwiperSlide>
                <Tab
                  srcIcon={"/assets/images/icons/setting/profile/user-profile.svg"}
                  onClick={() => changeActiveTab(0, setActiveTab)}
                  title={{ text: "User Profile", sx: { color: "#EF6820" } }}
                  caption={{ text: "completed", sx: { color: "#00C853" } }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Tab
                  srcIcon={"/assets/images/icons/setting/profile/user-profile.svg"}
                  onClick={() => changeActiveTab(1, setActiveTab)}
                  title={{ text: "User Profile", sx: { color: "#9E9E9E" } }}
                  caption={{ text: "Not completed", sx: { color: "#EF6820" } }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Tab
                  srcIcon={"/assets/images/icons/setting/profile/user-profile.svg"}
                  onClick={() => changeActiveTab(2, setActiveTab)}
                  title={{ text: "User Profile", sx: { color: "#9E9E9E" } }}
                  caption={{ text: "Not completed", sx: { color: "#EF6820" } }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Tab
                  srcIcon={"/assets/images/icons/setting/profile/user-profile.svg"}
                  onClick={() => changeActiveTab(3, setActiveTab)}
                  title={{ text: "User Profile", sx: { color: "#9E9E9E" } }}
                  caption={{ text: "Not completed", sx: { color: "#EF6820" } }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Tab
                  srcIcon={"/assets/images/icons/setting/profile/user-profile.svg"}
                  onClick={() => changeActiveTab(4, setActiveTab)}
                  title={{ text: "User Profile", sx: { color: "#9E9E9E" } }}
                  caption={{ text: "Not completed", sx: { color: "#EF6820" } }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Tab
                  srcIcon={"/assets/images/icons/setting/profile/user-profile.svg"}
                  onClick={() => changeActiveTab(5, setActiveTab)}
                  title={{ text: "User Profile", sx: { color: "#9E9E9E" } }}
                  caption={{ text: "Not completed", sx: { color: "#EF6820" } }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Tab
                  srcIcon={"/assets/images/icons/setting/profile/user-profile.svg"}
                  onClick={() => changeActiveTab(6, setActiveTab)}
                  title={{ text: "User Profile", sx: { color: "#9E9E9E" } }}
                  caption={{ text: "Not completed", sx: { color: "#EF6820" } }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Tab
                  srcIcon={"/assets/images/icons/setting/profile/user-profile.svg"}
                  onClick={() => changeActiveTab(7, setActiveTab)}
                  title={{ text: "User Profile", sx: { color: "#9E9E9E" } }}
                  caption={{ text: "Not completed", sx: { color: "#EF6820" } }}
                />
              </SwiperSlide>
            </Swiper>
          </Stack>
        </Grid>
        {activeTab.index === 0 && <UserProfile {...activeTab?.props} />}
        {activeTab.index === 1 && <EducationInfo {...activeTab?.props} />}
        {activeTab.index === 2 && <JobInfo {...activeTab?.props} />}
        {activeTab.index === 3 && <LanguageInfo {...activeTab?.props} />}
        {activeTab.index === 4 && <FinancialInfo {...activeTab?.props} />}
        {activeTab.index === 5 && <FamilyInfo {...activeTab?.props} />}
      </Grid>
    </MainCard>
  );
}

Profile.getLayout = function getLayout(page) {
  return <Layout variant={LAYOUT.DASHBOARD}>{page}</Layout>;
};

export default Profile;
