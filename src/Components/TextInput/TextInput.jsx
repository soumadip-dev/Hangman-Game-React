function TextInput({
  type = "text",
  label,
  placeHolder = "Enter Your input here",
  value,
  onChangeHandler,
}) {
  return (
    <label className="block mb-4">
      <span className="text-sm font-medium text-gray-700 mb-1 block">
        {label}
      </span>
      <input
        type={type}
        className=" px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out"
        placeholder={placeHolder}
        value={value}
        onChange={onChangeHandler}
      />
    </label>
  );
}
export default TextInput;
