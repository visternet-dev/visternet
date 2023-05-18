import { Avatar, Box, Chip, Stack, Typography, useTheme } from "@mui/material";

import { FreeMode, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import CustomButton from "components/ui-component/custom/Button";

const initChips = [
  { color: "error", label: "Start-up Visa", avatar: "/static/images/avatar/1.jpg" },
  { color: "info", label: "Cloese" },
  { color: "primary", label: "Start-up Visa" },
  { color: "secondary", label: "text" },
  { color: "success", label: "Cloese" },
  { color: "error", label: "text" },
  { color: "error", label: "Cloese" },
  { color: "error", label: "Start-up Visa" },
  { color: "error", label: "text" }
];

const Plan = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        boxShadow: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06), 0px 0px 0px 4px #F2F4F7",
        borderRadius: "4px",
        border: "1px solid #EAECF0",
        padding: "24px 16px 24px 16px",
        cursor: "pointer",
        bgcolor: theme.palette.background.paper
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: "0.5rem" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontWeight: "700", fontSize: "1.125rem" }} variant="span">
            Planning for Construction
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" gap="0.5rem">
          <Box sx={{ cursor: "pointer" }} onClick={() => console.log("test")}>
            <img src="/assets/images/icons/pin.svg" />
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography component="span" variant="caption">
              3 day ago
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box mb={1} sx={{ display: "flex" }}>
        <Typography component="p" variant="body2">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ marginRight: "0.604rem" }}>
            <img src="/assets/images/icons/calender.svg" />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontWeight: "bold" }} variant="body1">
              Start Date:
            </Typography>
            <Typography>2022.04.22</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ marginRight: "0.604rem" }}>
            <img src="/assets/images/icons/calender.svg" />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontWeight: "bold" }} variant="body1">
              End Date:
            </Typography>
            <Typography>2023.04.22</Typography>
          </Box>
        </Box>
      </Box>

      <Box mt={3} display="flex" gap="1rem" flexWrap="nowrap" overflow="auto" mb="1rem">
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
            ".swiper-wrapper": { width: "auto" },
            ".swiper-slide": {
              width: "fit-content"
            }
          }}
          flexDirection="row"
          overflow="auto"
          flexWrap="nowrap"
        >
          <Swiper
            sliderperview="auto"
            slidesPerView="auto"
            spaceBetween={5}
            direction="horizontal"
            creativeEffect
            freeMode
            scrollbar
            mousewheel
            modules={[FreeMode, Scrollbar]}
            className="show_chips_chat_box"
          >
            {initChips.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Chip label={item?.label} color={item?.color} avatar={item?.avatar && <Avatar src={item.avatar} />} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </Box>
    </Box>
  );
};
export default Plan;
