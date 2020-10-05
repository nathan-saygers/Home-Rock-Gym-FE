import React, { useState } from "react";
import "normalize.css";
import "./App.css";

// Components
import Login from "./components/Login";
import WallGrid from "./components/WallGrid";
import WallGridInput from "./components/WallGridInput";
import HoldLibrary from "./components/HoldLibrary/HoldLibrary";

// Dummy data
import holdDummyData from "./dummyData/holds";

function App() {
  const [wallDimensions, setWallDimensions] = useState([11, 18]);
  const [wallDisplayName, setWallDisplayName] = useState("Wall Name");
  const [holds, setHolds] = useState(holdDummyData);

  return (
    <div>
      <div className="pageContainer">
        <HoldLibrary holds={holds} setHoldData={setHolds} />
        <WallGridInput
          setWallDimensions={setWallDimensions}
          setWallDisplayName={setWallDisplayName}
        />
        <WallGrid
          wallDimensions={wallDimensions}
          wallDisplayName={wallDisplayName}
        />
        <Login />
      </div>
    </div>
  );
}

export default App;
