const ToggleSwitch = ({ isDark, setIsDark }) => {
  return (
    <div className={`flex items-center justify-center w-[26rem] ${isDark ? "bg-gray-800" : "bg-gray-200"}`}>
      <div className="w-96 h-40 mt-4 flex items-center p-2 rounded-2xl cursor-pointer transition-all duration-300 bg-slate-500 justify-center">
        {/* The outer toggle background remains constant */}
        <div
          className="w-80 h-22 flex items-center p-2 rounded-full cursor-pointer transition-all duration-300 bg-blue-900"
          onClick={() => setIsDark(!isDark)}
        >
          {/* Only the inner knob changes its style based on dark mode */}
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all duration-300 ${
              isDark ? "translate-x-56 bg-green-500" : "bg-white"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
