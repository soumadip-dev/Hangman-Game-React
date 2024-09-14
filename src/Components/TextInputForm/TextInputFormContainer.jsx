import { useState } from "react";
import TextInputForm from "./TextInputForm.jsx";
function TextInputFormContainer() {
  //react hooks
  const [inputType, setInputType] = useState("password");

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted");
  }
  function handleTextInputChange(event) {
    console.log(event.target.value);
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
