import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Stack } from "@mui/material";
import { useState } from "react";

export const MuiDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  console.log({
    selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
  });
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
      ></DatePicker>
      <TimePicker
        label="Time Picker"
        value={selectedTime}
        onChange={(newValue) => {
          setSelectedTime(newValue);
        }}
      ></TimePicker>
    </Stack>
  );
};
