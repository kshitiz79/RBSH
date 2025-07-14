"use client";

export default function WhyRBSH() {
  return (
    <section className="relative bg-[#0A0D11] text-white px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch min-h-[600px]">

        {/* Left Content - 60% */}
        <div className="w-full md:w-[70%] flex flex-col justify-center space-y-8 pr-6">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Why Atoll</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Atoll Digital is born from the dynamic fusion of design, technology, and business development, crafting captivating, functional solutions for businesses.
            </h1>
          </div>
          <div className="leading-relaxed md:w-[40%] self-end ">
          <p className="text-gray-300 text-base text-justify-end mt-20">
  With us, you tap into a vibrant mix of functional creativity, innovation, and business-centric goals. We pack a punch with tailored website solutions that resonate with top brands&apos; objectives. With our close-knit team, you receive personalized attention and effortless integration with your team’s goals.
</p>

          <button className="mt-4 px-6 py-3 bg-white text-black text-sm font-semibold rounded-md flex items-center gap-2 hover:bg-gray-200 transition">
            CONTACT US
            <span className="transform rotate-90">▼</span>
          </button>
          </div>
        </div>

        {/* Right Image - 40% */}
        <div className="w-full md:w-[30%] relative min-h-[500px] rounded-xl overflow-hidden mt-10 md:mt-0">
          <img
            src="/whyrbsh.webp"
            alt="Why Atoll"
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
