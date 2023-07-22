import PhonePreview from "./components/ui/PhonePreview";
import EditingPane from "./components/form/EditingPane";
import Modal from "react-modal";
import "./App.css";
import * as dayjs from "dayjs";

// Library styles
import "react-loading-skeleton/dist/skeleton.css";
import "react-tooltip/dist/react-tooltip.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-clock/dist/Clock.css";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  Modal.setAppElement("#root");

  return (
    <div id="root">
      <PhonePreview />
      <EditingPane />
      <ToastContainer />
    </div>
  );
}
a;
export default App;
