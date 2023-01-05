import { useState } from "react";

import { Stack } from "@mui/material";

import translate from "utils/locales/translate";

import CustomDivider from "components/ui-component/HOC/Divider";
import CustomTabSection from "components/ui-component/HOC/Tabs";
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

function LandingGetStarted() {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack alignItems="center">
      <LandingTitle subTitle={translate("working-progress")} center sx={{ mb: 3 }}>
        {translate("how-it-work-for-applicants")}
      </LandingTitle>

      <CustomDivider>
        <CustomTabsHeader value={value} onChange={handleChange} data={dataTableHeader} noBorder />
      </CustomDivider>

    </Stack>
  );
}

export default LandingGetStarted;
