import React from "react";

import { Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import DynamicAction from "./dynamic";

function ActionsBuilder({ actions, isLoading, formik, ...params }) {
  if (actions)
    return (
      <Grid2 xs={12} {...params}>
        <Stack direction="row" spacing={2}>
          {actions.map(({ title, type, ...actionParams }, index) => {
            return <DynamicAction type={type} title={title} loading={isLoading} formik={formik} key={index} {...actionParams} />;
          })}
        </Stack>
      </Grid2>
    );

  return <></>;
}

export default ActionsBuilder;
