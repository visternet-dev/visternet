import { useState } from "react";

import { Stack } from "@mui/material";

import translate from "utils/locales/translate";

import ComingSoon from "components/ui-component/coming-soon";
import CustomDivider from "components/ui-component/HOC/Divider";
import CustomTabsHeader from "components/ui-component/HOC/Tabs/header";

import LandingTitle from "../../title";

// Data
const dataTableHeader = [
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

      <CustomDivider>
        <CustomTabsHeader value={value} onChange={handleChange} data={dataTableHeader} noBorder />
      </CustomDivider>

      {/* TODO: must be develop this section */}
      <ComingSoon />
    </Stack>
  );
}

export default LandingSectionGetStarted;
