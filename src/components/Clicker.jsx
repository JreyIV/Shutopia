const Clicker = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-[#651fff] rounded-full text-white border-[#651fff]">
      {label}
      <img
        src={iconURL}
        alt="Arrow Right Arrow"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Clicker;
