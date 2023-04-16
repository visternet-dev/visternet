import Link from "Link";

// material-ui
import { Link as MuiLink } from "@mui/material";

import Logo from "layout/components/logo";

// project imports
import { DASHBOARD_PATH } from "config";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
  <Logo />
  // <MuiLink component={Link} href={DASHBOARD_PATH}>/
  // </MuiLink>
);

export default LogoSection;
