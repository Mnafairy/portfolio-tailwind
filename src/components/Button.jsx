import { useTheme } from "@/context/ThemeContext";
const Button = ({ text }) => {
  const { theme } = useTheme();
  const buttonClassName =
    theme == "light"
      ? "bg-gray-200 text-gray-600"
      : "bg-gray-700 text-gray-300 ";
  return (
    <button
      className={`${buttonClassName} h-7 px-5 py-1  text-sm font-medium  rounded-xl`}
    >
      {text}
    </button>
  );
};
export default Button;
