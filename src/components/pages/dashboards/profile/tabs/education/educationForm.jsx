import { useRouter } from "next/router";

import { Stack } from "@mui/system";

import { useQuery } from "@tanstack/react-query";

import { APIEduication, getEducationFormBuilder } from "utils/apis/dashboards/user/userApis";

import StepBuilder from "components/ui-component/builder/step";
import QueryWrapper from "components/ui-component/queryWrapper/queryWrapper";

function EducationForm({ setActiveStep, editId }) {
  const router = useRouter();
  const update = !!editId;
  const { isLoading, data, isError, refetch } = useQuery(["getEducationFormBuilder", editId], () => APIEduication.formBuilder({ update, id: editId }));

  return (
    <Stack justifyContent="center">
      <QueryWrapper isLoading={isLoading} isError={isError} refetch={refetch}>
        <StepBuilder
          data={data?.data}
          cta={{
            onSuccess: () => {
              if (update) router.back();
              setActiveStep(0);
            },
            onReset: () => {
              if (update) router.back();
              setActiveStep(0);
            }
          }}
        />
      </QueryWrapper>
    </Stack>
  );
}

export default EducationForm;
