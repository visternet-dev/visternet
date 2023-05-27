import { Stack } from "@mui/system";

import { useQuery } from "@tanstack/react-query";

import StepBuilder from "components/ui-component/builder/step";
import QueryWrapper from "components/ui-component/queryWrapper/queryWrapper";
import { useEffect } from "react";

function EducationForm({ setActiveStep, editId, controller }) {
  // CPNTROLLER
  const { type, APIHandler = () => {} } = controller;

  const update = !!editId;
  const { isLoading, data, isError, refetch } = useQuery([`API-${type}-formBuilder`, editId], () => APIHandler.formBuilder({ update, id: editId }));

  useEffect(() => {
    return () => {
      setActiveStep(0);
    };
  }, []);

  return (
    <Stack justifyContent="center">
      <QueryWrapper isLoading={isLoading} isError={isError} refetch={refetch}>
        <StepBuilder
          data={data?.data}
          cta={{
            onSuccess: () => {
              setActiveStep(0);
            },
            onReset: () => {
              setActiveStep(0);
            }
          }}
        />
      </QueryWrapper>
    </Stack>
  );
}

export default EducationForm;
