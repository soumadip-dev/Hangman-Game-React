import { Route, Routes } from "react-router-dom";
import "./App.css";
import TextInputForm from "./Components/TextInputForm/TextInputForm.jsx";
import TextInputFormContainer from "./Components/TextInputForm/TextInputFormContainer.jsx";
import StartGame from "./Pages/StartGame.jsx";
import PlayGame from "./Pages/PlayGame.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/start" element={<StartGame />} />
        <Route path="/play" element={<PlayGame />} />
      </Routes>
      {/* <TextInputFormContainer /> */}
    </div>
  );
}

export default App;
