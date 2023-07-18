import PhonePreview from "./components/ui/PhonePreview";
import EditingPane from "./components/form/EditingPane";
import Modal from "react-modal";

// Library styles
import "react-loading-skeleton/dist/skeleton.css";
import "react-tooltip/dist/react-tooltip.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-clock/dist/Clock.css";
import "react-calendar/dist/Calendar.css";

function App() {
  Modal.setAppElement("#root");

  return (
    <div id="root">
      <PhonePreview />
      <EditingPane />
    </div>
  );
}
export default App;
