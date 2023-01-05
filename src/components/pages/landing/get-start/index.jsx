import CustomDivider from "components/ui-component/HOC/Divider";
import CustomTabSection from "components/ui-component/HOC/Tabs";
import CustomTabsHeader from "components/ui-component/HOC/Tabs/header";
import translate from "utils/locales/translate";

import { useState } from "react";

import { Stack } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import LandingTitle from "../title";

// Data
const dataTableHeader = [
  {
    label: translate("applicants"),
    value: "applicants"
  },

  {
    label: translate("partners"),
    value: "partners"
  }
];

function LandingGetStarted() {
  const [value, setValue] = useState("applicants");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack alignItems="center">
      <LandingTitle subTitle={translate("working-progress")} center sx={{ mb: 3 }}>
        {translate("get-started-width-visternet")}
      </LandingTitle>

      <CustomDivider>
        {/* <Tabs value={value} onChange={handleChange} sx={{ "& .MuiTabs-flexContainer": { border: "none" } }} centered>
          <Tab value="one" label={translate("applicants")} />
          <Tab value="two" label={translate("partners")} />
        </Tabs> */}

        <CustomTabsHeader value={value} onChange={handleChange} data={dataTableHeader} />
      </CustomDivider>

      <CustomTabSection />
    </Stack>
  );
}

export default LandingGetStarted;
