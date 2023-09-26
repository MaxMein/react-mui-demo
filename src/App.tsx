import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
//import { MuiButton } from "./components/MuiButton";
//import { MuiTypography } from "./components/MuiTypography";
//import { MuiTextField } from "./components/MuiTextField";
//import { MuiSelect } from "./components/MuiSelect";
//import { MuiRadioButton } from "./components/MuiRadioButton";
//import { MuiCheckBox } from "./components/MuiCheckBox";
//import { MuiSwitch } from "./components/MuiSwitch";
//import { MuiRating } from "./components/MuiRating";
//import { MuiAutoComplete } from "./components/MuiAutoComplete";
//import { MuiLayout } from "./components/MuiLayout";
//import { MuiCard } from "./components/MuiCard";
//import { MuiAccordion } from "./components/MuiAccordion";
//import { MuiImageList } from "./components/MuiImageList";
//import { MuiLink } from "./components/MuiLink";
//import { MuiNavbar } from "./components/MuiNavbar";
//import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs";
//import { MuiDrawer } from "./components/MuiDrawer";
//import { MuiSpeedDial } from "./components/MuiSpeedDial";
//import { MuiBottomNavigation } from "./components/MuiBottomNavigation";
//import { MuiAvatar } from "./components/MuiAvatar";
//import { MuiBadge } from "./components/MuiBadge";
//import { MuiList } from "./components/MuiList";
//import { MuiChip } from "./components/MuiChip";
//import { MuiToolTip } from "./components/MuiToolTip";
//import { MuiTable } from "./components/MuiTable";
//import { MuiAlert } from "./components/MuiAlert";
//import { MuiSnackbar } from "./components/MuiSnackbar";
//import { MuiDialog } from "./components/MuiDialog";
//import { MuiProgress } from "./components/MuiProgress";
// import { MuiSkeleton } from "./components/MuiSkeleton";
// import { MuiLoadingButton } from "./components/MuiLoadingButton";
import { MuiDatePicker } from "./components/MuiDatePicker";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        {/*       <MuiTypography />*/}
        {/*       <MuiButton /> */}
        {/*     <MuiTextField /> */}
        {/*       <MuiSelect />*/}
        {/*       <MuiRadioButton /> */}
        {/* <MuiCheckBox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutoComplete /> */}
        {/* <MuiLayout /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiLink /> */}
        {/* <MuiNavbar /> */}
        {/* <MuiBreadcrumbs /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottomNavigation /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiBadge /> */}
        {/* <MuiList /> */}
        {/* <MuiChip /> */}
        {/* <MuiToolTip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackbar /> */}
        {/* <MuiDialog /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiLoadingButton /> */}
        <MuiDatePicker />
      </div>
    </LocalizationProvider>
  );
}

export default App;
