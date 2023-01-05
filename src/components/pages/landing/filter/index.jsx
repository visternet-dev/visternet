import { useState } from "react";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/system";

import { useTheme } from "@emotion/react";

import translate from "utils/locales/translate";

import LandingAdvanceSearch from "./advance";
import GoDown from "./go-down";
import LandingImmigrationSearch from "./immigration";

function LandingFilter() {
  const theme = useTheme();
  const [value, setValue] = useState("search-immigration-programs");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        px: 2,
        py: 1,
        border: "none",
        position: "relative",
        bgcolor: theme.palette.background.paper,
        boxShadow: "0px 0px 56px -22px rgba(0, 0, 0, 0.25)"
      }}
    >
      <TabContext value={value} sx={{}}>
        <Box sx={{ borderBottom: 1, border: "none !important" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label={
                <Typography variant="h3" color="inherit">
                  {translate("search-immigration-programs")}
                </Typography>
              }
              value="search-immigration-programs"
            />
            <Tab
              label={
                <Typography variant="h3" color="inherit">
                  {translate("advance-search")}
                </Typography>
              }
              value="advance-search"
            />
          </TabList>
        </Box>
        <TabPanel value="search-immigration-programs" sx={{ px: "0 !important" }}>
          <LandingImmigrationSearch />
        </TabPanel>
        <TabPanel value="advance-search" sx={{ px: "0 !important" }}>
          <LandingAdvanceSearch />
        </TabPanel>
      </TabContext>
      <GoDown />
    </Box>
  );
}

export default LandingFilter;
