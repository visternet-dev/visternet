import React from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Stack } from "@mui/system";

import FormBuilder from "components/ui-component/form";

import muckFormVuilder from "mock/form-builder";

/**
 * @name fields [field, ...]
 *    @name field one element of fields
 *    @property {String} id Mandatory*
 *    @property {String} type Mandatory*
 *    @property {String} label Optional - default=""
 *    @property {String} placeholder Optional - default=""
 *    @property {String} defaultValue Optional - default=""
 *    @property {Array.<Object>} options (Based on Type Field) - default=[]
 *       @name options
 *       @property {String} lable
 *       @property {String} value
 *       @property {Object} fields optional - default=[]
 *    @property {Array.<Object>} col optional - default={xs:12, sm:12, md: 12}
 *    @property {String} validationType Optional - default="String" - options= string, number, date
 *    @property {Array.<Object>} validations Optional - default="String" - options= string, number, date
 */

function PageForm() {
  return (
    <Stack justifyContent="center" sx={{ height: "100vh", width: "100%", alignItems: "center", px: 10 }}>
      <Grid2 container spacing={4} sx={{ width: "100%" }}>
        <FormBuilder data={muckFormVuilder} />
      </Grid2>
    </Stack>
  );
}

export default PageForm;
