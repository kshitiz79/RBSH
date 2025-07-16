import React from "react";
import AnimatedIntro from "./AnimatedIntro";
import { NavLink } from "react-router-dom";

import {  ArrowRight } from "lucide-react";
import Section1 from "./Section1";


const BlogHero = () => {

  return (
    <>
         <Section1/>
         <div>
        <section className="bg-[#e5e8ea] py-10 px-4 pt-40">
          <div className=" max-w-4xl font-extrabold ">
            <h1 className="text-[4rem] leading-none ml-4">
              {" "}
              <span className="text-red-600">The 2025 Design Shift: </span> What’s Defining the Future of Graphic Design?
            </h1>
          </div>
        </section>
      </div>
      <AnimatedIntro />
 
      <div>
        <section className="bg-[#e2e5ea] py-10 mx-auto  px-8">
          <div className="max-w-4xl mx-auto text-lg">
            <p>
        The world of graphic design is evolving faster than ever — and in 2025, we’re seeing a powerful collision of minimalism, AI-generated creativity, and emotionally intelligent branding.
        </p>
        <br />
        <p>
Here’s what’s shaping the future of design right now:
</p>
<br />
<p>

1. AI Meets Imagination
AI tools like Midjourney, Adobe Firefly, and DALL·E have redefined what’s possible — not as replacements, but as collaborators. Designers who embrace these tools are able to ideate faster, iterate better, and push creative boundaries. The key? Keeping your human intuition at the center.
</p>
<br />
<p>

2. Bold Type. Brave Color. Big Impact.
Forget safe palettes and subtle fonts — 2025 is about grabbing attention. Think super-saturated neons, oversized fonts, and unapologetic visuals. Brands are going louder and bolder, especially in digital spaces where scroll-stopping matters most.
</p>
<br />

<p>
3. Retro-Tech & Nostalgia
Designers are bringing back pixel art, skeuomorphism, and 90s grunge in a polished way — giving digital experiences a touch of analog warmth. It’s not just aesthetic — it’s storytelling through memory.
</p>

<p>
4. Motion as the New Static
From microinteractions to scroll-based animations, static design is fading. Websites, social posts, and even logos are becoming kinetic. If it doesn’t move, it might not stand out.
</p>
 <br />

<p>
5. Purpose-Driven Aesthetics
Whether it’s eco-conscious packaging or inclusive visual language, brands are finally designing with intention — not just for clicks. Users care why something looks the way it does, and designers are responding with meaning, not just style.
</p>
</div>
        </section>
      </div>
    </>
  );
};

export default BlogHero;
