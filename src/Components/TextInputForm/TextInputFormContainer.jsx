import { useState } from "react";
import TextInputForm from "./TextInputForm.jsx";
import { useNavigate } from "react-router-dom";
function TextInputFormContainer() {
  //react hooks
  const [inputType, setInputType] = useState("password");
  const [value, setvalue] = useState("");
  const navigate = useNavigate(); // This is a hook that returns a navigate function

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(`Form Submitted ${value}`);
    if (value) {
      // if we have something in value then we want to go to the play page
      navigate("/play");
    }
  }
  function handleTextInputChange(event) {
    console.log(event.target.value);
    setvalue(event.target.value);
  }
  function handleShowHideClick() {
    console.log("Show/Hide Clicked");
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
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
