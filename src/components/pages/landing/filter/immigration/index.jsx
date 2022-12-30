import CustomButton from "components/ui-component/Button";
import CustomAutocomplete from "components/ui-component/fields/autocomplete";
import CustomInput from "components/ui-component/fields/input";

import { Stack } from "@mui/material";
import { Box } from "@mui/system";

function LandingImmigrationSearch() {
  return (
    <Box>
      <Stack direction="row" sx={{ width: "100%" }} justifyContent="space-between" spacing={2}>
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

export default LandingImmigrationSearch;
