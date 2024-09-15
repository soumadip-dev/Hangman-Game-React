import { useState } from "react";
import TextInputForm from "./TextInputForm.jsx";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
  // React hooks
  const [inputType, setInputType] = useState("password");
  const [value, setValue] = useState("");
  const navigate = useNavigate(); // This hook returns a function to navigate programmatically

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(`Form Submitted ${value}`);
    if (value) {
      // Navigate to the play page with the value passed in the state
      navigate("/play", { state: { wordSelected: value } });

      // Optionally, you could navigate using query parameters (not used for this game)
      // navigate(`/play?text=${value}`);

      // Alternatively, you could navigate using path parameters (requires route change in App.jsx and fetching from useParams() hook in PlayGame)
      // navigate(`/play/${value}`);
    }
  }

  function handleTextInputChange(event) {
    console.log(event.target.value);
    setValue(event.target.value);
  }

  function handleShowHideClick() {
    console.log("Show/Hide Clicked");
    setInputType(inputType === "password" ? "text" : "password");
  }

  return (
    <TextInputForm
      inputType={inputType}
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
    />
  );
}

export default TextInputFormContainer;
