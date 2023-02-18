import { Stack } from "@mui/material";

import CardPlan from "../../cards/cardPlan";

function PlansSection({ sx, ...params }) {
  return (
    <Stack sx={{ ...sx }} {...params} spacing={2}>
      <CardPlan />
      <CardPlan />
      <CardPlan />
      <CardPlan />
    </Stack>
  );
}

export default PlansSection;
