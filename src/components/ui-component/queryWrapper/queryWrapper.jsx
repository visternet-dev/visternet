import React from "react";

import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import CustomButton from "../custom/Button";
import LoadingIcon from "../loading/loading";

const LoadingWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%"
});

const QueryWrapper = ({
  isLoading,
  isError,
  refetch,
  LoadingComponent = (
    <LoadingWrapper>
      <LoadingIcon sx={{ fontSize: "6rem", color: "primary.main" }} />
    </LoadingWrapper>
  ),
  ErrorComponent = (
    <Stack alignItems="center" justifyContent="center" spacing={2} sx={{ py: 4 }}>
      <Typography variant="errorSubTitle">خطایی رخ داده است دوباره تلاش کنید</Typography>
      <CustomButton size="medium" variant="contained" onClick={refetch}>
        تلاش مجدد
      </CustomButton>
    </Stack>
  ),
  children
}) => {
  if (isLoading) {
    return <>{LoadingComponent}</>;
  }

  if (isError) {
    return <>{ErrorComponent}</>;
  }

  return <>{children}</>;
};

export default QueryWrapper;
