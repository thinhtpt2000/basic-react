import { useState } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";

function App() {

  const [color, setColor] = useState('red');
  const [fontSize, setFontSize] = useState(20);

  const onSetColor = (param) => {
    setColor(param);
  }

  const onSetSize = (isInc) => {
    if (isInc) {
      setFontSize(fontSize + 1 > 36 ? fontSize : fontSize + 1);
    } else {
      setFontSize(fontSize - 1 < 12 ? fontSize : fontSize - 1);
    }
  }

  const onResetFormat = () => {
    setColor('red');
    setFontSize(20);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <ColorPicker color={color} onReceiveColor={onSetColor}/>
          <SizeSetting fontSize={fontSize} onReceiveSize={onSetSize}/>
        </div>
        <div className="row mt-2">
          <Reset onClickReset={onResetFormat}/>
        </div>
        <div className="row mt-5">
          <Result color={color} size={fontSize}/>
        </div>
      </div>
    </div>
  );
}

export default App;
