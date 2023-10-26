/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div onClick={() => toggleFAQ(index)} className="cursor-pointer flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <p className="text-lg font-medium">{faq.question}</p>
            <svg className={`w-6 h-6 ${activeIndex === index ? "transform rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {activeIndex === index && (
            <div className="mt-2 bg-white p-4 rounded-lg">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
