import { Stack } from "@mui/system";

import { useQuery } from "@tanstack/react-query";

import { getMilitaryServiceFormBuilder } from "utils/apis/dashboards/user/userApis";

import StepBuilder from "components/ui-component/builder/step";
import QueryWrapper from "components/ui-component/queryWrapper/queryWrapper";

function JobForm({ setActiveStep }) {
  const { isLoading, data, isError, refetch } = useQuery(["getMilitaryServiceFormBuilder"], getMilitaryServiceFormBuilder);

  return (
    <Stack justifyContent="center">
      <QueryWrapper isLoading={isLoading} isError={isError} refetch={refetch}>
        <StepBuilder data={data?.data} cta={{ onSuccess: () => setActiveStep(0), onReset: () => setActiveStep(0) }} />
      </QueryWrapper>
    </Stack>
  );
}

export default JobForm;
