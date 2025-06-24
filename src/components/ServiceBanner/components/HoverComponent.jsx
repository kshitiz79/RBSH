const HoverComponent = () => {
  return (
    <div className="h-60 w-[40rem] bg-zinc-950 flex bottom-0 left-0 relative overflow-hidden group">
      {/* Inner Box (Expands on Hover) */}
      <div className=" relative  bg-slate-700 h-1/2 w-2/6 transition-all duration-500 group-hover:h-full group-hover:w-full flex items-center justify-center">
        {/* Text is always visible, but changes color on hover */}
        <span className="absolute bottom-1 right-1 text-white text-7xl font-semibold transition-all duration-500 uppercase group-hover:text-slate-700">
    H
  </span>
      </div>
    </div>
  );
};

export default HoverComponent;
