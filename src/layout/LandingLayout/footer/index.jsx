import Link from "next/link";

import { Box, Grid, List, ListItem, Typography } from "@mui/material";

import { useTheme } from "@emotion/react";

import Logo from "layout/components/logo";

import FooterBackground from "./footerBackground";

function FooterLanding() {
  const data = {
    info: {
      text: "Immigration consulting services are provided by independent licensed immigration consultants or lawyers and are subject to a separate Consultation Agreement and/or Retainer Agreement.",
      socialMedia: {
        title: "Get Social",
        media: [
          {
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
            path: "https://google.com"
          },
          {
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
            path: "https://google.com"
          }
        ]
      }
    },
    routes: [
      { title: "Home", path: "/" },
      { title: "Blog", path: "/blog" },
      { title: "Contact Us", path: "/contact-us" }
    ],
    backLinkBoxFirst: {
      title: "Resources",
      actions: [
        { title: "Home", path: "/" },
        { title: "Blog", path: "/blog" },
        { title: "Contact Us", path: "/contact-us" }
      ]
    },
    backLinkBoxSecond: {
      title: "Resources",
      actions: [
        { title: "Home", path: "/" },
        { title: "Blog", path: "/blog" },
        { title: "Contact Us", path: "/contact-us" }
      ]
    },
    copyRight: "© 2015-2022 Visternet Inc."
  };
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  // return <></>
  return (
    <Grid flexDirection="row" sx={{ zIndex: 999, height: "12rem", position: "relative" }} container>
      <FooterBackground
        sx={{ display: { xs: "none", md: "block" }, height: "auto", width: "100%", position: "absolute" }}
        color={isDarkMode ? theme.palette.background.paper : "#EFF8FF"}
      />
      <Grid sx={{ backgroundColor: isDarkMode ? "background.paper" : "#EFF8FF", marginTop: "10rem", padding: "2rem", zIndex: 999 }} spacing={2} container>
        <Grid xs={12} md={3} item>
          <Logo />
          <Typography sx={{ margin: "17px 0", color: theme.palette.grey[500] }} variant="h4">
            {data.info.text}
          </Typography>
          <Box>
            <Typography sx={{ color: theme.palette.primary.main, textTransform: "capitalize", flex: { xs: 4, sm: 1 } }} variant="h3" noWrap>
              {data.info.socialMedia.title}
            </Typography>
            <Box sx={{ display: "flex", marginTop: "0.5rem" }}>
              {data.info.socialMedia.media.map((each, index) => (
                <img
                  style={{ width: "25px", height: "25px", marginLeft: 10, cursor: "pointer" }}
                  src={each.icon}
                  onClick={() => window.open(each.path, "_black")}
                  key={index}
                />
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={3} item>
          <List>
            {data.routes.map((each, index) => (
              <ListItem sx={{ cursor: "pointer" }} key={index}>
                <Link href={each.path}>
                  <Typography sx={{ color: theme.palette.primary.main, textTransform: "capitalize", flex: { xs: 4, sm: 1 } }} variant="h3" noWrap>
                    {each.title}
                  </Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid xs={12} md={3} item>
          <Typography sx={{ color: theme.palette.primary.main, paddingTop: "8px", textTransform: "capitalize", flex: { xs: 4, sm: 1 } }} variant="h3" noWrap>
            {data.backLinkBoxFirst.title}
          </Typography>
          <List>
            {data.backLinkBoxFirst.actions.map((each, index) => (
              <ListItem sx={{ cursor: "pointer", textTransform: "capitalize" }} key={index}>
                <Link href={each.path}>{each.title}</Link>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid xs={12} md={3} item>
          <Typography sx={{ color: theme.palette.primary.main, paddingTop: "8px", textTransform: "capitalize", flex: { xs: 4, sm: 1 } }} variant="h3" noWrap>
            {data.backLinkBoxSecond.title}
          </Typography>
          <List>
            {data.backLinkBoxFirst.actions.map((each, index) => (
              <ListItem sx={{ cursor: "pointer", textTransform: "capitalize" }} key={index}>
                <Link href={each.path}>{each.title}</Link>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
      <Grid width={"100%"} sm={12} md={12} item>
        <Typography sx={{ backgroundColor: isDarkMode ? "background.paper" : "#eff6fd", textAlign: "center", color: "#333", padding: "1rem 0", width: "100%" }}>
          {data.copyRight}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default FooterLanding;
