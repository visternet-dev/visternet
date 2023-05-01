import React, { useState } from "react";

import { DatePicker } from '@mui/x-date-pickers';
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function DynamicDatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      hiii
      <DatePicker label="Select date" value={selectedDate} onChange={handleDateChange} renderInput={(params) => <TextField {...params} />} />
    </LocalizationProvider>
  );
}

export default DynamicDatePicker;
