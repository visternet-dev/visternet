import Logo from "layout/components/logo";

import Link from "next/link";

import { Box, List, ListItem, Typography } from "@mui/material";

import { useTheme } from "@emotion/react";

function FooterLanding() {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "500px",
          paddingTop: "100px"
        }}
      >
        <Box
          sx={{
            background: "url(/assets/images/landing/footer.svg)",
            backgroundPosition: "bottom",
            backgroundRepeat: "repeat-x",
            position: "absolute",
            height: "500px",
            width: "100%",
            bottom: "0"
          }}
        >
          <Box
            sx={{
              marginTop: "14rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              "& .item-container": { marginBottom: "1rem", minWidth: "10rem" }
            }}
          >
            <Box className="item-container">
              <Logo />
              <Typography sx={{ width: "400px", margin: "17px 0", color: theme.palette.grey[500] }} variant="h4">
                Immigration consulting services are provided by independent licensed immigration consultants or lawyers and are subject to a
                separate Consultation Agreement and/or Retainer Agreement.
              </Typography>
              <Box>
                <Typography
                  sx={{ color: theme.palette.primary.main, textTransform: "capitalize", flex: { xs: 4, sm: 1 } }}
                  variant="h3"
                  noWrap
                >
                  Get Social
                </Typography>
                <Box sx={{ display: "flex", marginTop: "0.5rem" }}>icon</Box>
              </Box>
            </Box>
            <Box className="item-container">
              <List>
                <ListItem sx={{ cursor: "pointer" }}>
                  <Link href="/">
                    <Typography
                      sx={{ color: theme.palette.primary.main, textTransform: "capitalize", flex: { xs: 4, sm: 1 } }}
                      variant="h3"
                      noWrap
                    >
                      About
                    </Typography>
                  </Link>
                </ListItem>
                <ListItem sx={{ cursor: "pointer" }}>
                  <Link href="/">
                    <Typography
                      sx={{ color: theme.palette.primary.main, textTransform: "capitalize", flex: { xs: 4, sm: 1 } }}
                      variant="h3"
                      noWrap
                    >
                      contact us
                    </Typography>
                  </Link>
                </ListItem>
                <ListItem sx={{ cursor: "pointer" }}>
                  <Link href="/">
                    <Typography
                      sx={{ color: theme.palette.primary.main, textTransform: "capitalize", flex: { xs: 4, sm: 1 } }}
                      variant="h3"
                      noWrap
                    >
                      why us
                    </Typography>
                  </Link>
                </ListItem>
              </List>
            </Box>
            <Box className="item-container">
              <Typography
                sx={{ color: theme.palette.primary.main, paddingTop: "8px", textTransform: "capitalize", flex: { xs: 4, sm: 1 } }}
                variant="h3"
                noWrap
              >
                Resources
              </Typography>
              <List>
                <ListItem sx={{ cursor: "pointer", textTransform: "capitalize" }}>
                  <Link href="/">blog</Link>
                </ListItem>
              </List>
            </Box>
            <Box className="item-container">
              <Typography
                sx={{ color: theme.palette.primary.main, paddingTop: "8px", textTransform: "capitalize", flex: { xs: 4, sm: 1 } }}
                variant="h3"
                noWrap
              >
                Resources
              </Typography>
              <List>
                <ListItem sx={{ cursor: "pointer", textTransform: "capitalize" }}>
                  <Link href="/">blog</Link>
                </ListItem>
              </List>
            </Box>
            <Box className="item-container">
              <Typography
                sx={{ color: theme.palette.primary.main, paddingTop: "8px", textTransform: "capitalize", flex: { xs: 4, sm: 1 } }}
                variant="h3"
                noWrap
              >
                Resources
              </Typography>
              <List>
                <ListItem sx={{ cursor: "pointer", textTransform: "capitalize" }}>
                  <Link href="/">blog</Link>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography sx={{ backgroundColor: "#eff6fd", textAlign: "center", color: "#333", padding: "2rem 0" }}>
        © 2015-2022 Visternet Inc.
      </Typography>
    </Box>
  );
}

export default FooterLanding;
