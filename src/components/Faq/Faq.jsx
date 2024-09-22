// src/components/FAQ/FAQ.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FAQ = () => {
  const faqs = [
    {
      question: "What makes your digital marketing services unique?",
      answer:
        "We tailor our strategies to each client’s specific needs and goals, ensuring your brand stands out in a crowded market.",
    },
    {
      question: "How can branding & design services help my business grow?",
      answer:
        "Branding and design services help your business establish a strong identity and connect with your target audience effectively.",
    },
    {
      question: "What types of videos do you specialize in for video editing services?",
      answer:
        "We specialize in promotional, explainer, and social media videos tailored to your brand’s needs.",
    },
    {
      question: "Why is a social media strategy important for my business?",
      answer:
        "A social media strategy helps you reach your target audience, engage with them, and grow your business presence online.",
    },
    {
      question: "How do your lead generation & SEO services work?",
      answer:
        "Our services focus on driving traffic and converting visitors into leads through targeted SEO and lead generation tactics.",
    },
  ];

  const faqRefs = useRef([]);

  useEffect(() => {
    faqRefs.current.forEach((faq) => {
      if (faq) {
        gsap.set(faq, { height: 0, opacity: 0 });
      }
    });
  }, []);

  const handleToggle = (index) => {
    const faq = faqRefs.current[index];
    const isOpen = faq.style.height !== '0px';

    gsap.to(faq, {
      height: isOpen ? 0 : faq.scrollHeight,
      opacity: isOpen ? 0 : 1,
      duration: 1,
      ease: 'power2.inOut',
    });
  };

  return (
    <div className="mx-auto p-4 bg-black">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-black p-3 rounded text-white">
            <summary
              className="cursor-pointer flex justify-between items-center"
              onClick={() => handleToggle(index)}
            >
              <span>{index + 1}. {faq.question}</span>
              <span className="ml-2">+</span>
            </summary>
            <p
              ref={(el) => (faqRefs.current[index] = el)}
              className="mt-3 text-gray-300 text-left overflow-hidden"
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
