// Import the function that returns specific button styles based on the type
import getButtonStyle from "./getButtonStyle.js";

// Button component that takes text, an onClick handler, and a styleType
function Button({
  text,
  onclickHandler,
  styleType = "primary",
  type = "button",
}) {
  return (
    <button
      // In React, {} are used to embed JavaScript expressions within JSX. This is often referred to as "React curly braces".
      onClick={onclickHandler} // The onClick event handler for handling button clicks
      // Example of inline CSS (commented out) that you can use directly if needed
      // style={{ backgroundColor: "blue", color: "white" }}

      // Apply dynamic class names by calling the getButtonStyle function based on styleType
      className={`${getButtonStyle(
        styleType
      )} px-6 py-2 text-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105`}
      // Styling using Tailwind CSS classes
      type={type}
    >
      {/* Display the button text passed as a prop */}
      {text}
    </button>
  );
}

export default Button;
