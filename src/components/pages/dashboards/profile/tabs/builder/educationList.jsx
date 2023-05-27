import { useState } from "react";

import { Grid, Stack, styled, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import CustomButton from "components/ui-component/custom/Button";
import CustomModal from "components/ui-component/custom/modal";
import QueryWrapper from "components/ui-component/queryWrapper/queryWrapper";

import Card from "../../card";

const ColorButton = styled(CustomButton)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500])
}));

const EducationList = ({ setActiveStep, setEditId, controller }) => {
  // CPNTROLLER
  const { type, APIHandler = () => {}, addBtnText = "", cardItems = () => {}, cardTitle = () => {}, CardSubtitle = () => {}, idKey } = controller;

  const { isLoading, data, isError, refetch } = useQuery([`API-${type}-get`], APIHandler.get);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  const queryClient = useQueryClient();

  const { isLoading: isLoadingDelete, mutate } = useMutation(() => APIHandler.delete({ id }), {
    onSuccess: () => {
      setOpen(false);
      queryClient.refetchQueries("APIHandler.get");
    }
  });

  return (
    <QueryWrapper isLoading={isLoading} isError={isError} refetch={refetch}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          {/* Go to the create form */}
          <ColorButton
            onClick={() => {
              setActiveStep(1);
              setEditId(null);
            }}
            sx={{ border: "1px solid #EF6820", color: "#EF6820" }}
            size="small"
          >
            {addBtnText}
          </ColorButton>
        </Grid>

        {/* TODO: Get Data from API */}
        {data?.data?.map((item, index) => (
          <Grid item xs={12} md={6}>
            <Card
              key={index}
              title={cardTitle()}
              subtitle={CardSubtitle({ item })}
              items={cardItems({ item })}
              editOnclick={() => {
                setEditId(item?.[idKey]);
                setActiveStep(1);
              }}
              deleteOnclick={() => {
                setOpen(true);
                setId(item?.[idKey]);
              }}
            />
          </Grid>
        ))}
      </Grid>
      <CustomModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          Are You Sure?
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <CustomButton loading={isLoadingDelete} onClick={() => setOpen(false)}>
            Close
          </CustomButton>
          <CustomButton
            loading={isLoadingDelete}
            variant="contained"
            color="error"
            onClick={() => {
              mutate();
            }}
          >
            Yes, I'm Sure
          </CustomButton>
        </Stack>
      </CustomModal>
    </QueryWrapper>
  );
};

export default EducationList;
