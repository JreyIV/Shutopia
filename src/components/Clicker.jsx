const Clicker = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-[#651fff]  text-white border-[#651fff]"
        } rounded-full w-full}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="Arrow Right Arrow"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Clicker;
