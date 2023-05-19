import { Stack } from "@mui/system";

import { useQuery } from "@tanstack/react-query";

import { APIClient } from "utils/apis/dashboards/user/userApis";

import StepBuilder from "components/ui-component/builder/step";
import QueryWrapper from "components/ui-component/queryWrapper/queryWrapper";

function UserProfile() {
  // TODO => id must be dynamic
  const { isLoading, data, isError, refetch } = useQuery(["APIClient.formBuilder"], () => APIClient.formBuilder({ update: true, id: 1 }));

  return (
    <Stack justifyContent="center">
      <QueryWrapper isLoading={isLoading} isError={isError} refetch={refetch}>
        <StepBuilder data={data?.data} />
      </QueryWrapper>
    </Stack>
  );
}

export default UserProfile;
