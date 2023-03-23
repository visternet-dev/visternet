import { useState } from "react";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import CustomInput from "components/ui-component/custom/input";

import SectionsBuilder from "../sections";
import StepBuilder from "../step";

const yourJSON = {
  steps: [
    {
      parent: {
        type: "grid",
        rowSpacing: 2,
        columnSpacing: 2,
        xs: 12
      },
      sections: [
        {
          type: "none",
          fields: [
            {
              id: "test-id",
              type: "text",
              label: "text",
              col: { xs: 6 }
            }
          ]
        }
      ],
      actions: {
        submit: {
          title: "submit",
          size: "large",
          api: {
            method: "post",
            url: "api/test",
            body: {},
            params: {}
          }
        }
      }
    }
  ]
};

const TestBuilder = () => {
  const [data, setData] = useState(yourJSON);
  const [error, setError] = useState(false);

  return (
    <Grid2 container sx={{ px: "20px", height: "100vh", alignContent: "flex-start" }}>
      <Grid2 xs={12}>
        <Typography variant="h2" sx={{ textAlign: "center", py: "25px" }}>
          Test Your JSON Form Builder
        </Typography>
      </Grid2>

      {/* Demo */}
      <Grid2 xs={6} sx={{ pr: 2 }}>
        {!error && <StepBuilder data={data} />}
      </Grid2>

      {/* Input */}
      <Grid2 xs={6}>
        <JSONInput
          locale={locale}
          placeholder={data}
        //   confirmGood={false}
        //   onKeyPressUpdate={true}
          style={{
            fontSize: "30px",
            outerBox: { width: "100%" },
            container: {
              height: "calc(100vh - 100px)",
              width: "100%",
              borderRadius: "8px",
              fontSize: "30px"
            },
            body: { fontSize: "14px", lineHeight: "20px", padding: " 16px 10px" }
          }}
          onChange={(v) => console.log("test", v.plainText)}
          onBlur={(data) => {
            setData(data.jsObject);
            setError(data?.error);
            console.log("test blur", data);
          }}
        />
      </Grid2>
    </Grid2>
  );
};

export default TestBuilder;

{
  /* <CustomInput
mutline
label="Enter Your JSON"
placeholder="{ .."
multiline
sx={{
  "& textarea": {
    height: "calc(100vh - 75px) !important",
    color: "grey.700"
  },
  width: "100%"
}}
//   rows={20}
focused
></CustomInput> */
}
