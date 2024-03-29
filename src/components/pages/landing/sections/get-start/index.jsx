import { useState } from "react";

import { TabContext, TabPanel } from "@mui/lab";
import { Stack } from "@mui/material";

import translate from "utils/locales/translate";

import ComingSoon from "components/ui-component/coming-soon";
import CustomDivider from "components/ui-component/custom/Divider";
import CustomTabsHeader from "components/ui-component/HOC/Tabs/header";

import LandingTitle from "../../title";
import LandingSectionApplicants from "./applicants";

// Data
const dataTabsHeader = [
  {
    label: translate("applicants"),
    value: "one"
  },

  {
    label: translate("partners"),
    value: "two"
  }
];

function LandingSectionGetStarted() {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack alignItems="center" sx={{ mb: 5 }}>
      <LandingTitle subTitle={translate("working-progress")} center sx={{ mb: 3 }}>
        {translate("get-started-width-visternet")}
      </LandingTitle>

      <TabContext value={value}>
        <CustomDivider>
          <CustomTabsHeader value={value} onChange={handleChange} data={dataTabsHeader} noBorder />
        </CustomDivider>
        <TabPanel value="one" sx={{ px: "0 !important", width: "100%" }}>
          <LandingSectionApplicants />
        </TabPanel>
        <TabPanel value="two" sx={{ px: "0 !important" }}>
          {/* TODO: must be develop this section */}
          <ComingSoon />
        </TabPanel>
      </TabContext>
    </Stack>
  );
}

export default LandingSectionGetStarted;
