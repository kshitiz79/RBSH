import BlogHero from "../../components/Blogs/BlogHero";
import InterviewSection from "../../components/Blogs/InterviewSection";

const Blog = () => {
  // Removed unused tabs variable to fix the compile error

  return (
    <>
      <div className="min-h-screen bg-[#e2e5ae]">
        <BlogHero />
        <InterviewSection/>
      
      </div>
    </>
  );
};

export default Blog;
