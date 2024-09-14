import TextInput from "../TextInput/TextInput.jsx";
import Button from "../Button/Button.jsx";
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
    </form>
  );
}
export default TextInputForm;
