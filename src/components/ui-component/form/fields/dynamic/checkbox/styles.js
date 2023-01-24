const styles = (theme) => ({
  m: 0,
  height: "3.42rem",
  border: "solid 1px",
  borderRadius: "4px",
  "& .MuiTypography-root::selection": {
    backgroundColor: "transparent !important"
  },
  backgroundColor: theme.palette.background.paper,
  borderColor: theme.palette.mode === "dark" ? theme.palette.background.default : theme.palette.grey[100]
});

export default styles;
