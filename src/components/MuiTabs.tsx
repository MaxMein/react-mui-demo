import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import { Favorite } from "@mui/icons-material";

export const MuiTabs = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "300px" }}>
          <TabList
            aria-label="Tabs example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              icon={<Favorite />}
              iconPosition="start"
              label="Tab 1"
              value="1"
            ></Tab>
            <Tab label="Tab 2" value="2" disabled></Tab>
            <Tab label="Tab 3" value="3"></Tab>
            <Tab label="Tab 4" value="4"></Tab>
            <Tab label="Tab 5" value="5"></Tab>
          </TabList>
        </Box>
        <TabPanel value="1">Panel 1</TabPanel>
        <TabPanel value="2">Panel 2</TabPanel>
        <TabPanel value="3">Panel 3</TabPanel>
        <TabPanel value="4">Panel 4</TabPanel>
        <TabPanel value="5">Panel 5</TabPanel>
      </TabContext>
    </Box>
  );
};
