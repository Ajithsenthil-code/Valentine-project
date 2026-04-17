import { useState } from "react";
import './App.css';

function App(){
  const[message, setMessage] = useState("Will you be my Valentine? ❤️💖");
  const[noBnPosition, setNoBtnPosition] = useState({top: "60%", left: "55%"});

  const moveButton = () => {
    const newTop = Math.random() * 80;
    const newLeft = Math.random() * 80;

    setNoBtnPosition({
      top: `${newTop}%`,
      left: `${newLeft}%`,
    })
  };

  return(
    <div className="container">
      <h1>{message}</h1>

      <button className= "yes-btn" onClick={() => setMessage("Love you 😍😘")}>
      Accept my Love💕
      </button>

      <button
      className= "no-btn"
      style={{top: noBnPosition.top, left: noBnPosition.left}}
      onMouseEnter={moveButton}
    >
      Hate You 😤
    </button>
    </div>
  )
}

export default App