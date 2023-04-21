import React from "react";

import { Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import DynamicAction from "./dynamic";

function ActionsBuilder({ actions, isLoading, formik, mutate, ...params }) {
  if (actions) {
    if (Array.isArray(actions))
      return (
        <Grid2 xs={12}>
          <Stack direction="row" spacing={2}>
            {actions.map((actionParams, index) => {
              return <DynamicAction loading={isLoading} formik={formik} mutate={mutate} key={index} {...actionParams} {...params} />;
            })}
          </Stack>
        </Grid2>
      );

    return (
      <Grid2 xs={12}>
        <Stack direction="row" spacing={2}>
          {Object.keys(actions).map((type, index) => {
            const actionParams = actions?.[type];

            return <DynamicAction type={type} loading={isLoading} formik={formik} mutate={mutate} key={index} {...actionParams} {...params} />;
          })}
        </Stack>
      </Grid2>
    );
  }
  return <></>;
}

export default ActionsBuilder;
