import "./App.css";
import InputField from "./components/inputField.js";
import Image from "./components/image.js";

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "#ced8e3" }}>
        <div style={{ padding: "156px 0 156px 0" }}>
          <InputField />
        </div>
      </div>
      <div className="image__container">
        <Image />
      </div>
    </div>
  );
}

export default App;
