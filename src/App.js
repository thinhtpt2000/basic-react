import "./App.css";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <ColorPicker />
          <SizeSetting />
        </div>
        <div className="row mt-2">
          <Reset />
        </div>
        <div className="row mt-5">
          <Result />
        </div>
      </div>
    </div>
  );
}

export default App;
