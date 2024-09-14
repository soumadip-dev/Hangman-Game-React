// Function that returns specific Tailwind CSS classes based on the styleType provided
function getButtonStyle(styleType) {
  switch (styleType) {
    case "primary":
      return "bg-blue-500"; // Blue background for primary button
    case "secondary":
      return "bg-gray-500"; // Gray background for secondary button
    case "danger":
      return "bg-red-500"; // Red background for danger button
    case "success":
      return "bg-green-500"; // Green background for success button
    default:
      return "bg-blue-500"; // Default to blue background if styleType is not provided
  }
}

export default getButtonStyle;
