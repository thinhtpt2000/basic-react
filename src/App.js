import { useState } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";

function App() {

  const [color, setColor] = useState('red');
  const [fontSize, setFontSize] = useState(15);

  const onSetColor = (param) => {
    setColor(param);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <ColorPicker color={color} onReceiveColor={onSetColor}/>
          <SizeSetting />
        </div>
        <div className="row mt-2">
          <Reset />
        </div>
        <div className="row mt-5">
          <Result color={color}/>
        </div>
      </div>
    </div>
  );
}

export default App;
