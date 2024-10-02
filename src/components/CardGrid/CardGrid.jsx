import { Link } from "react-router-dom";

// CardButtonGrid.jsx
const CardButton = ({ text, link }) => (
  
    <Link
      to={link}
      className="flex items-center justify-between bg-black text-white p-4 rounded hover:bg-yellow-500 transition"
    >
      <span>{text}</span>
      <span className="text-lg">&rarr;</span>
    </Link>
  );
  
  const CardButtonGrid = () => {
    return (
      <div className="lg:px-14 mt-16 sm:px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CardButton text="Branding & Design" link="/branding-design" />
          <CardButton text="Video Editing" link="/video-editing" />
          <CardButton text="Social Media Strategy" link="/social-media-strategy" />
          <CardButton text="Lead Generation & SEO" link="/lead-generation-seo" />
          <CardButton text="Web Design & Development" link="/web-design-development" />
          <CardButton text="Content Marketing & Photography" link="/content-marketing-photography" />
        </div>
      </div>
    );
  };
  
  export default CardButtonGrid;
  