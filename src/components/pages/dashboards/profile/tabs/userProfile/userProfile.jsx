import { Stack } from "@mui/system";

import { useQuery } from "@tanstack/react-query";

import { getClientFormBuilder } from "utils/apis/dashboards/user/userApis";

import StepBuilder from "components/ui-component/builder/step";
import QueryWrapper from "components/ui-component/queryWrapper/queryWrapper";

function UserProfile() {
  const { isLoading, data, isError, refetch } = useQuery(["getUserProfile"], getClientFormBuilder);

  return (
    <Stack justifyContent="center">
      <QueryWrapper isLoading={isLoading} isError={isError} refetch={refetch}>
        <StepBuilder data={data?.data} />
      </QueryWrapper>
    </Stack>
  );
}

export default UserProfile;
