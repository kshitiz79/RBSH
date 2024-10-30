import React, { useState, useEffect, useRef } from 'react';

// Move testimonials data outside the component


const colors = [
 
  "bg-[#FA547C]",



  "bg-[#FF5C00]",
  "bg-[#4384f2]",
  "bg-[#00c0ef]",
  "bg-[#f90492]",

  "bg-[#ffd766]",
];
const testimonials = [
  {
    title:'Beyond the Billboard: How Interactive Branding is Revolutionizing Advertising',
    text: 'In today’s digital landscape, traditional advertising methods are no longer enough to capture the attention of tech-savvy, highly selective audiences. Enter interactive branding, the latest game-changer in the advertising world. Gone are the days when billboards and TV commercials were the sole drivers of brand awareness. Now, its about creating immersive, engaging experiences that invite consumers to be part of the story  Interactive branding is all about participation. It encourages users to engage with ads rather than passively observe them. Augmented reality (AR) and virtual reality (VR) are two leading technologies reshaping how brands connect with their target markets. Imagine a potential customer "trying on" a pair of shoes through AR before buying, or using VR to take a virtual tour of a car they’re interested in purchasing. These kinds of experiences not only grab attention but also foster a deeper connection between the brand and the consumer Gamification is another interactive branding trend that’s taking off. By integrating games or challenges into advertisements, brands offer users something fun and rewarding. Whether its an in-app game to win a discount or a brand-hosted social media challenge, consumers are more likely to engage with a brand when it offers entertainment or incentives.The data speaks for itself: interactive ads see 47% higher engagement rates than traditional static ads. Why? Because they create memorable moments that stay with consumers long after the interaction is over', },
  {
    title:'The Power of Emotion: How Emotional Storytelling is Winning Hearts in Digital Advertising',
    text: 'In a digital world filled with flashy ads and constant information, one thing consistently cuts through the noise: emotion. Emotional storytelling has become a powerful tool in advertising, turning ordinary campaigns into memorable, heartwarming, or even tear-jerking experiences. It’s not just about selling products—it’s about creating a connection.Why is emotional storytelling so effective? Because humans are wired to respond to emotion. Studies show that emotional ads outperform their non-emotional counterparts by 2x in terms of engagement and recall. Consumers may not always remember the details of a product, but they will remember how an ad made them feel. Whether its the joy of a family reunion, the triumph of overcoming adversity, or the nostalgia of childhood memories, tapping into these emotions makes ads not only memorable but shareable. Successful brands leverage this emotional connection to build long-term loyalty.Think of campaigns like Coca-Colas Share a Coke or Google’s heartwarming reunion ad between two long-lost friends. These ads don’t focus on the product itself, but on the feelings the brand inspires—happiness, love, or unity. And it works. Consumers are more likely to associate positive emotions with brands that tell stories that resonate.For businesses looking to make an impact in the competitive digital advertising space, emotional storytelling is key. We understand the art of crafting emotional narratives that not only engage audiences but also build lasting relationships between consumers and brands. Whether through video, social media, or interactive content, emotion is the key ingredient that can turn a simple ad into a viral sensation.In todays landscape, it’s not just about the message—it’s about the feeling.',
  },
  {
    title:'Lights, Camera, Conversion: Why Video is King in Today’s Digital Marketing',
    text: 'In the fast-paced world of digital marketing, video content reigns supreme. With the average internet user consuming nearly 100 minutes of video per day, it’s no surprise that video has become the go-to format for brands looking to engage audiences and drive conversions. But what makes video so powerful in today’s marketing landscape? First, video is inherently engaging. It combines visuals, sound, and storytelling in a way that grabs attention and keeps it. Whether its a captivating product demo, a behind-the-scenes brand story, or an influencer unboxing video, video content conveys emotion and information more effectively than text or images alone. It’s no wonder that videos on landing pages can boost conversion rates by up to 80%. Moreover, video is versatile. From short, snappy clips on Instagram Reels and TikTok to longer, informative content on YouTube, video adapts to different platforms and audience preferences. Brands can use video to showcase products, share customer testimonials or even provide educational content. This versatility allows businesses to reach a wider audience while building trust and credibility with potential customers. Another key reason for video’s dominance is its shareability. Consumers are more likely to share videos with friends and family, increasing the organic reach of your brand’s message. A viral video has the potential to reach millions, giving businesses a cost-effective way to gain visibility.At RBSH Studio, we specialize in crafting high-quality, engaging video content that not only attracts attention but also drives conversions. Whether it’s for social media, websites, or email marketing, we harness the power of video to ensure your brand stands out in a crowded digital landscape. In today’s marketing world, video truly is king—and it’s time to start using it to your advantage.',
  },
  {
    title:' SEO and PPC: Finding the Right Balance for Your Business',
    text: 'In today’s highly competitive digital landscape, businesses need to make smart decisions about how to allocate their marketing budgets. One of the most important decisions is finding the right balance between SEO (Search Engine Optimization) and PPC (Pay-Per-Click) advertising. Both are essential tools in a digital marketing strategy, but understanding how to use them together can significantly boost your brand\'s visibility and success. SEO is a long-term strategy that focuses on improving a website’s organic ranking in search engines through keyword optimization, content creation, and technical improvements. It builds trust and authority over time, providing a sustainable flow of organic traffic. SEO helps establish your brand as a thought leader in your industry by driving long-term visibility and enhancing your credibility in search results. On the other hand, PPC is an immediate solution for generating traffic and leads. With PPC, businesses pay for ads to appear on search engine results pages (SERPs) or social media platforms, allowing them to target specific audiences and track results more easily. PPC campaigns can be tailored to reach potential customers at key moments, ensuring your message is seen when it matters most. While it delivers fast results, PPC can become expensive if not properly managed. For most businesses, an ideal digital marketing strategy involves a combination of both. SEO builds a strong foundation for long-term success, while PPC provides instant traffic and visibility. At RBSH Studio, we help clients create a balanced approach, ensuring they leverage the strengths of each strategy. By combining organic growth with targeted advertising, brands can increase their reach, improve engagement, and ultimately drive more conversions. Together, SEO and PPC are a powerful duo for achieving sustainable growth and maximizing return on investment.',
  },
  {
    title:'How to Create a Seamless Customer Journey Through Multi-Channel Marketing',
    text: 'In today’s digital age, consumers interact with brands across a variety of channels—social media, websites, email, and even offline touchpoints. To build meaningful connections and drive conversions, businesses must create a seamless customer journey across these platforms. Multi-channel marketing ensures a unified experience, regardless of where or how your audience engages with your brand. A consistent message is the key to a successful multi-channel strategy. Whether a customer is scrolling through Instagram, reading an email, or browsing your website, your brand’s voice, visuals, and value proposition should remain the same. This consistency helps build trust and recognition, making it easier for potential customers to move through the funnel. At RBSH Studio, we specialize in integrating marketing efforts across multiple platforms to ensure a cohesive journey. By leveraging data and insights, we tailor each touchpoint to meet the unique needs of your audience, whether it\'s through engaging content, personalized email campaigns, or targeted social ads.A well-executed multi-channel strategy keeps customers engaged at every stage of their journey, increasing the likelihood of conversions and fostering long-term loyalty. This holistic approach enables brands to connect, engage, and convert in today’s fragmented digital landscape.',
  },
  {
    title:'The Future of Influencer Marketing: Trends and Strategies',
    text: 'Influencer marketing has transformed significantly over the past few years, and understanding its future is essential for brands looking to harness its potential effectively. This blog will delve into the evolving landscape of influencer marketing, examining emerging trends and strategies that can help brands navigate this dynamic field.We will explore the rise of micro and nano influencers, who often have smaller but more engaged audiences compared to traditional celebrities. These influencers typically boast higher engagement rates and foster more authentic connections with their followers, making them invaluable partners for brands seeking to reach niche markets.The blog will also discuss the importance of authenticity in influencer partnerships, emphasizing how audiences can detect inauthentic collaborations. We will provide practical tips for selecting the right influencers, crafting genuine collaborations that resonate with audiences, and measuring the success of influencer campaigns through metrics such as engagement rates, reach, and ROI. Additionally, we will touch on the integration of influencer marketing across various channels, from social media platforms to email marketing, highlighting how a multi-faceted approach can amplify campaign effectiveness.By examining these trends and strategies, this blog will empower brands to adapt to the ever-changing influencer landscape and maximize their marketing efforts in a way that resonates with consumers.',
  },
  {
    title:'Embracing Sustainability in Marketing: Why Eco-Friendly Practices Matter',
    text: 'In today environmentally conscious world, sustainable marketing has become increasingly important for businesses. By incorporating eco-friendly practices into their marketing strategies, companies can not only enhance their brand reputation but also contribute to a healthier planet.One effective way to embrace sustainability is through product innovation. Developing eco-friendly alternatives to traditional products can attract environmentally conscious consumers and differentiate a brand from competitors. Additionally, transparent communication about a companys sustainability efforts is crucial. Sharing information about certifications, partnerships, or carbon footprint reduction goals can build trust with consumers.Furthermore, supporting environmental causes and engaging in social responsibility initiatives can help create a positive brand image. By demonstrating a genuine commitment to sustainability, businesses can foster a lasting connection with their target audience and contribute to a more sustainable future.',
  },
  {
    title:'Mastering Social Media Advertising: Strategies for Maximum Impact',
    text: 'Social media is one of the most powerful platforms for advertising today, and its reach continues to expand. But success on social media requires more than just posting content; it’s about creating a strategy that maximizes impact and resonates with your audience. This blog will break down the key elements of a successful social media advertising campaign, including targeting the right audience, developing creative content, and selecting the best platforms for your brand. We’ll offer insights into paid social strategies—such as Facebook and Instagram ads, LinkedIn promotions advertising—and how each platform caters to different audience types. With a focus on ROI and engagement, RBSH Studio helps brands optimize their social media campaigns by crafting targeted ads that connect with their audience. This blog will demonstrate our expertise in social media strategy and how we can help businesses amplify their presence online.',
  },
  {
    title:'The Role of Data in Crafting Effective Advertising Campaigns',
    text: 'In today’s marketing landscape, data is the backbone of any successful campaign. By leveraging insights from analytics, brands can optimize their advertising efforts to achieve higher engagement, better conversion rates, and ultimately, more ROI. This blog will explore how data informs the advertising strategies that brands use to target the right audience, at the right time, with the right message. From A/B testing to audience segmentation, we’ll discuss how understanding consumer behavior and trends can lead to smarter decision-making. At RBSH Studio, we use data not just to track performance but to craft campaigns that are driven by real-time insights, ensuring that every marketing dollar is spent effectively. The blog will delve into how data-driven advertising can provide a competitive edge and lead to higher revenue for businesses.',
  },
  {
    title:'Why Content is Still King in the Age of Digital Marketing',
    text: 'Even in today’s fast-evolving digital landscape, where technology and marketing tools are continuously advancing, content remains king. High-quality, engaging content is at the core of every successful digital marketing strategy because it helps brands build relationships, drive engagement, and establish authority.Content provides value to your audience by addressing their needs, answering questions, and solving problems. Whether it’s through blog posts, videos, social media updates, or email newsletters, content is what captures your audience’s attention and keeps them coming back for more. Well-optimized content also plays a crucial role in SEO, improving your search engine rankings and driving organic traffic.mIn addition to attracting new customers, content helps build trust and credibility. By consistently delivering relevant and insightful content, brands position themselves as experts in their field. This, in turn, leads to stronger customer loyalty and a higher likelihood of conversions.',
  },
];

const images = [
  './career1.png',
  './career2.png',
  './career3.png',
  // Add more image paths as needed
];


// Function to interleave images after every 4 testimonials



const Blog = () => {
  const [expandedCards, setExpandedCards] = useState({}); // Tracks which cards are expanded
  const [isOverflowing, setIsOverflowing] = useState({});
  

  const contentRefs = useRef([]); 
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);



  // Define the number of columns
  const NUM_COLUMNS = 3;

  // Initialize columns array
  const columns = Array.from({ length: NUM_COLUMNS }, () => []);

  // Distribute testimonials among columns
  testimonials.forEach((testimonial, index) => {
    columns[index % NUM_COLUMNS].push({ ...testimonial, index });
  });

  // UseEffect to check if the testimonial text exceeds 12 lines
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    const checkOverflowing = () => {
      const updatedIsOverflowing = {};
      contentRefs.current.forEach((ref, index) => {
        if (ref) {
          const isOverflow = ref.scrollHeight > ref.clientHeight + 1; // Adding 1 to handle fractional pixels
          updatedIsOverflowing[index] = isOverflow;
        }
      });
      setIsOverflowing(updatedIsOverflowing);
    };

    // Run the check after the component mounts and updates
    checkOverflowing();
    window.addEventListener('resize', checkOverflowing);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', checkOverflowing);
  }, []); // Empty dependency array to run only once

  // Toggle card expansion
  const toggleReadMore = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };






  return (
    <div className=" p-6 sm:p-8  mt-6 lg:mt-0 ">
      <header className="text-center mb-8 lg:mb-24 ">
      <h1 className="relative text-4xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-black font-roboto">
      BLOGS
      {/* White Stripe */}

    </h1>
      </header>

      <main>
        <section className="flex flex-col sm:flex-row gap-6 lg:-mt-32 lg:p-28 ">
          {columns.map((columnTestimonials, columnIndex) => (
            <div key={columnIndex} className="flex-1 space-y-6">
             {columnTestimonials.map((testimonial, idx) => {
    const index = testimonial.index;
    const isCardExpanded = expandedCards[index];
    const shouldShowReadMore = isOverflowing[index];
    const color = colors[index % colors.length];

    return (
      <React.Fragment key={index}>
        <article className="space-y-2">
          <div
            className={`${color} p-4 sm:p-6 rounded-3xl transition-all duration-500 ease-in-out overflow-hidden`}
          >
            <blockquote
              ref={(el) => (contentRefs.current[index] = el)}
              className="transition-all duration-300 ease-in-out text-base text-white"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: isCardExpanded ? 'unset' : 12,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                lineHeight: '1.4rem',
                font: 'mono',
                textAlign: 'justify',
              }}
            >
              {testimonial.title && (
                <div className="text-center mb-4 font-robot text-lg underline ">
                  <strong>{testimonial.title}</strong>
                  <br />
                </div>
              )}
              
              {testimonial.text}
            </blockquote>

            {/* Show "Read More" button only if the content exceeds 12 lines */}
            {shouldShowReadMore && (
              <button
                onClick={() => toggleReadMore(index)}
                className="mt-2 text-blue-700 hover:text-blue-400 focus:outline-none"
                aria-expanded={isCardExpanded}
              >
                {isCardExpanded ? 'Read Less' : 'Read More'}
              </button>
            )}
          </div>
        </article>

        {/* Insert Image after every 4 testimonials */}
        {(index - 1) % 4 === 0 && images[Math.floor(index / 4) % images.length] && (
          <div className="flex items-center justify-center">
            <img
              src={images[Math.floor(index / 4) % images.length]}
              alt={`Image ${Math.floor(index / 4) + 1}`}
              className="w-full md:h-[19vh] rounded-lg object-cover lg:h-[47vh]  "
            />
          </div>
        )}
      </React.Fragment>
    );
  })}

            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Blog;