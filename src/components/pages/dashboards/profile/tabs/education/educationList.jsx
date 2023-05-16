import { useRouter } from "next/router";

import { Grid, styled } from "@mui/material";
import { orange } from "@mui/material/colors";

import { useQuery } from "@tanstack/react-query";

import { getEducations } from "utils/apis/dashboards/user/userApis";

import CustomButton from "components/ui-component/custom/Button";
import QueryWrapper from "components/ui-component/queryWrapper/queryWrapper";

import Card from "../../card";

const ColorButton = styled(CustomButton)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500])
}));

const EducationList = ({ setActiveStep }) => {
  const router = useRouter();
  const { isLoading, data, isError, refetch } = useQuery(["getEducations"], getEducations);

  return (
    <QueryWrapper isLoading={isLoading} isError={isError} refetch={refetch}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          {/* Go to the create form */}
          <ColorButton onClick={() => setActiveStep(1)} sx={{ border: "1px solid #EF6820", color: "#EF6820" }} size="small">
            Add Education
          </ColorButton>
        </Grid>

        {/* TODO: Get Data from API */}
        {data?.data?.data.map((item, index) => (
          <Grid item xs={12} md={6}>
            <Card
              key={index}
              title="University Name"
              subtitle="Azad University Tehran North Branch"
              items={[{ title: "Country", value: "IRAN" }, { title: "Date", value: "2017 - 2021" }, , { title: "Grade", value: "18.58" }]}
              editOnclick={() => {
                router.push({ query: { id: 4 } });
                setActiveStep(2);
              }}
              deleteOnclick={() => console.log("test delete")}
            />
          </Grid>
        ))}
      </Grid>
    </QueryWrapper>
  );
};

export default EducationList;
