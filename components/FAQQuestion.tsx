// FAQQuestion.tsx
import React, { useState } from "react";

const FAQQuestion: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button className="flex justify-between w-full p-3 bg-[#A0E9FF] text-left rounded-lg" onClick={toggleAccordion}>
        <div className="text-lg font-semibold">{question}</div>
        <div className={`transform ${isOpen ? "rotate-0" : "rotate-180"} transition-transform`}>&#9662;</div>
      </button>
      {isOpen && <div className="p-3 bg-gray-100">{answer}</div>}
    </div>
  );
};

export default FAQQuestion;
