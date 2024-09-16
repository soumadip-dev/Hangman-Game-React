import TextInput from "../TextInput/TextInput.jsx";
import Button from "../Button/Button.jsx";
import { Link } from "react-router-dom";
function TextInputForm({
  inputType,
  handleFormSubmit,
  handleTextInputChange,
  handleShowHideClick,
}) {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <TextInput
          type={inputType}
          label={"Enter a word or a phrase"}
          placeholder={"Enter the word or phrase here.."}
          onChangeHandler={handleTextInputChange}
        ></TextInput>
      </div>
      <div>
        <Button
          text={inputType === "password" ? "Show" : "Hide"}
          styleType={"secondary"}
          onclickHandler={handleShowHideClick}
        ></Button>
      </div>
      <div>
        <Button styleType={"primary"} text="Submit" type={"Submit"}></Button>
      </div>
      <div className="mt-8 flex flex-col items-center">
        <Link to="/">
          <Button text="Home" styleType="success" className="w-3/4 max-w-xs" />
        </Link>
      </div>
    </form>
  );
}
export default TextInputForm;
