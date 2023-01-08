import { Stack } from "@mui/material";

import translate from "utils/locales/translate";

import LandingTitle from "../../title";
import UpdateVisasCard from "./card";

const data = [
  { date: "10.10.2020", content: "UK government considers new visa sponsorship route for GPs" },
  { date: "10.10.2020", content: "UK government considers new visa sponsorship route for GPs" },
  { date: "10.10.2020", content: "UK government considers new visa sponsorship route for GPs" },
  { date: "10.10.2020", content: "UK government considers new visa sponsorship route for GPs" },
  { date: "10.10.2020", content: "UK government considers new visa sponsorship route for GPs" },
  { date: "10.10.2020", content: "UK government considers new visa sponsorship route for GPs" }
];

function LandingSectionUpdateVisas() {
  return (
    <Stack alignItems="flex-start">
      <LandingTitle subTitle={translate("news")} rightLine={false} sx={{ mb: 3 }}>
        {translate("new-updates-about-visas")}
      </LandingTitle>

      <Stack spacing={2} sx={{ maxHeight: "300px", overflow: "auto", width: "100%", px: 2 }}>
        {data.map(({ date, content }) => (
          <UpdateVisasCard subTitle={date} content={content} />
        ))}
      </Stack>
    </Stack>
  );
}

export default LandingSectionUpdateVisas;
