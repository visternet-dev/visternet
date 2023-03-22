import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function GridSection({ children, title, ...params }) {
  return (
    <Grid2 container {...params}>
      {children}
    </Grid2>
  );
}

export default GridSection;
