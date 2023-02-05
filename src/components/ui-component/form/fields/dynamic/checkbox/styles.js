const styles = (theme) => ({
  parent: {
    m: 0,
    position: "relative",
    padding: "25px 12px 8px 12px",
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
  },
  label: {
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.4375em",
    fontFamily: "'exo2',sans-serif",
    padding: 0,
    position: "relative",
    display: "block",
    transformOrigin: " top left",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "calc(133% - 24px)",
    position: "absolute",
    left: 0,
    top: 0,
    transform: "translate(12px, 7px) scale(0.75)",
    transition:
      "color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,max-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    zIndex: 1,
    pointerEvents: "auto",
    userSelect: "none"
  }
});

export default styles;
