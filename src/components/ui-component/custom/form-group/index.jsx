import { FormGroup } from "@mui/material";

import styled from "@emotion/styled";

const StyleFormGroup = styled(FormGroup)(({ theme, label = false }) => ({
  m: 0,
  position: "relative",
  padding: "8px 12px 8px 12px",
  ...(label && { paddingTop: "25px !important" }),
  height: "3.42rem",
  border: "solid 1px",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  borderRadius: "4px",
  "& .MuiTypography-root::selection": {
    backgroundColor: "transparent !important"
  },
  backgroundColor: theme.palette.background.paper,
  borderColor: theme.palette.mode === "dark" ? theme.palette.background.default : theme.palette.grey[100]
}));

const CustomFormGroup = ({ children, ...params }) => {
  return <StyleFormGroup {...params}>{children}</StyleFormGroup>;
};

export default CustomFormGroup;
