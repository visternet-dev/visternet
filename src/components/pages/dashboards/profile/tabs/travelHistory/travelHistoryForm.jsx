import { Stack } from "@mui/system";

import { useQuery } from "@tanstack/react-query";

import { getTravelHistoryFormBuilder } from "utils/apis/dashboards/user/userApis";

import StepBuilder from "components/ui-component/builder/step";
import QueryWrapper from "components/ui-component/queryWrapper/queryWrapper";

function TravelHistoryForm({ setActiveStep }) {
  const { isLoading, data, isError, refetch } = useQuery(["getTravelHistoryFormBuilder"], getTravelHistoryFormBuilder);

  return (
    <Stack justifyContent="center">
      <QueryWrapper isLoading={isLoading} isError={isError} refetch={refetch}>
        <StepBuilder data={data?.data} cta={{ onSubmit: () => setActiveStep(0), onclose: () => setActiveStep(0) }} />
      </QueryWrapper>
    </Stack>
  );
}

export default TravelHistoryForm;
