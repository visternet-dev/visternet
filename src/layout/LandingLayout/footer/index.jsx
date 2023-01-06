import Logo from "layout/components/logo";

import Image from "next/image";
import Link from "next/link";

import { Box, Grid, List, ListItem, Typography } from "@mui/material";

import { useTheme } from "@emotion/react";

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
    ]
  };
  const theme = useTheme();
  return (
    <Grid flexDirection="row" sx={{ background: "url(/assets/images/landing/footer.svg)", height: "12rem" }} container>
      <Grid sx={{ background: "#EFF8FF", marginTop: "10rem", padding: "2rem" }} spacing={2} container>
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
              {data.info.socialMedia.media.map((each) => (
                <img
                  style={{ width: "25px", height: "25px", marginLeft: 10, cursor: "pointer" }}
                  src={each.icon}
                  onClick={() => window.open(each.path, "_black")}
                />
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={3} item>
          <List>
            {data.routes.map((each) => (
              <ListItem sx={{ cursor: "pointer" }}>
                <Link href={each.path}>
                  <Typography
                    sx={{ color: theme.palette.primary.main, textTransform: "capitalize", flex: { xs: 4, sm: 1 } }}
                    variant="h3"
                    noWrap
                  >
                    {each.title}
                  </Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid xs={12} md={3} item>
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
        </Grid>
        <Grid xs={12} md={3} item>
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
        </Grid>
      </Grid>
      <Grid width={"100%"} sm={12} md={12} item>
        <Typography sx={{ backgroundColor: "#eff6fd", textAlign: "center", color: "#333", padding: "1rem 0", width: "100%" }}>
          © 2015-2022 Visternet Inc.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default FooterLanding;
