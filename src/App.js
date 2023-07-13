import PhonePreview from "./components/ui/PhonePreview";
import EditingPane from "./components/form/EditingPane";
import Modal from "react-modal";

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
