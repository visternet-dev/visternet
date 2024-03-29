import CustomButton from "components/ui-component/custom/Button";
import CustomAutocomplete from "components/ui-component/custom/autocomplete";
import CustomInput from "components/ui-component/custom/input";

import { Stack } from "@mui/material";
import { Box } from "@mui/system";

function LandingImmigration() {
  return (
    <Box>
      <Stack flexWrap="wrap" direction="row" sx={{ width: "100%" }} justifyContent="space-between" spacing={2}>
        <CustomAutocomplete
          sx={{ flex: 1 }}
          options={["12", "2121", "$23"]}
          renderInput={(params) => <CustomInput {...params} label="Movie" />}
        />
        <CustomAutocomplete
          sx={{ flex: 1 }}
          options={["12", "2121", "$23"]}
          renderInput={(params) => <CustomInput {...params} label="Movie" />}
        />
        <CustomAutocomplete
          sx={{ flex: 1 }}
          options={["12", "2121", "$23"]}
          renderInput={(params) => <CustomInput {...params} label="Movie" />}
        />

        <CustomAutocomplete
          sx={{ flex: 1 }}
          options={["12", "2121", "$23"]}
          renderInput={(params) => <CustomInput {...params} label="Movie" />}
        />
        <CustomButton sx={{ flex: 1 }} variant="contained">
          Search
        </CustomButton>
      </Stack>
    </Box>
  );
}

export default LandingImmigration;
