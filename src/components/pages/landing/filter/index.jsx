import { useState } from "react";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/system";

import { useTheme } from "@emotion/react";

import translate from "utils/locales/translate";

import CustomTabsHeader from "components/ui-component/HOC/Tabs/header";

import LandingAdvanceSearch from "./advance";
import GoDown from "./go-down";
import LandingImmigration from "./immigration";

// Data
const dataTabsHeader = [
  {
    label: (
      <Typography variant="h3" color="inherit">
        {translate("search-immigration-programs")}
      </Typography>
    ),
    value: "search-immigration-programs"
  },
  {
    label: (
      <Typography variant="h3" color="inherit">
        {translate("advance-search")}
      </Typography>
    ),
    value: "advance-search"
  }
];

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
      <TabContext value={value}>
        <CustomTabsHeader value={value} onChange={handleChange} data={dataTabsHeader} noBorder />
        <TabPanel value="search-immigration-programs" sx={{ px: "0 !important" }}>
          <LandingImmigration />
        </TabPanel>
        <TabPanel value="advance-search" sx={{ px: "0 !important" }}>
          <LandingAdvanceSearch />
        </TabPanel>
      </TabContext>
 
      {/* arrow go down */}
      <GoDown />
    </Box>
  );
}

export default LandingFilter;
