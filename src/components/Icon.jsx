const Icon = ({ icon, iconName }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center m-auto">
      {icon}
      {iconName}
    </div>
  );
};
export default Icon;
