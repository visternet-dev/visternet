import { Stack } from "@mui/system";

import { useQuery } from "@tanstack/react-query";

import { getUserProfile } from "utils/apis/dashboards/user/userApis";

import StepBuilder from "components/ui-component/builder/step";
import QueryWrapper from "components/ui-component/queryWrapper/queryWrapper";

export function UserProfile() {
  const { isLoading, data, isError, refetch } = useQuery(["getUserProfile"], getUserProfile);

  return (
    <Stack sx={{ minHeight: "20vh" }} justifyContent="center">
      <QueryWrapper isLoading={isLoading} isError={isError} refetch={refetch}>
        <StepBuilder data={data?.data} />
      </QueryWrapper>
    </Stack>
  );
}

// return (
//   <Grid container>
//     <Grid xs={12} md={8} item>
//       <Box display="flex">
//         <Avatar sx={{ width: 60, height: 60 }} alt="Remy Sharp" src="/assets/images/profile/img-user.png" />
//         <Box ml={2} display="flex" justifyContent="center" flexDirection="column">
//           <Typography variant="h3">Ali Ebrahimi Kashef</Typography>
//           <Typography variant="caption">Last Update : 20.10.2023</Typography>
//         </Box>
//       </Box>
//     </Grid>
//     <Grid display="flex" flexDirection="column" justifyContent="end" alignItems="end" md={4} xs={12} sx={{ mb: 2 }} item>
//       <ColorButton sx={{ border: "1px solid #EF6820", color: "#EF6820" }} size="small">
//         <img src="" />
//         Upload Profile
//       </ColorButton>
//       <Box mt={1}>
//         <img src="" />
//         <Typography variant="caption">Image size Limit should be 125kb Max.</Typography>
//       </Box>
//     </Grid>

//   <StepBuilder data={mock} />
//   </Grid>
// );
