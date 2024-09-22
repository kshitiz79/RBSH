

const Blog = () => {
  return (
    <div className="relative overflow-hidden bg-[#dfeffc] p-4">
      <div className="flex items-center whitespace-nowrap animate-scroll">
        <h2 className="text-[38px] font-medium text-[#01497C] uppercase flex items-center gap-4">
          {Array(10)
            .fill(
              'DESIGNERS COPYWRITERS  MARKETERS  ALL CREATIVES'
            )
            .join(' ')}
        </h2>
      </div>
    </div>


  );
};

export default Blog;
