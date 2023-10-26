import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPages: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "Apa itu React?",
      answer: "React adalah perpustakaan JavaScript untuk membangun antarmuka pengguna.",
    },
    {
      question: "Apa itu TypeScript?",
      answer: "TypeScript adalah bahasa pemrograman yang mendukung tipe statis dan dikembangkan oleh Microsoft.",
    },
    {
      question: "Apa itu Tailwind CSS?",
      answer: "Tailwind CSS adalah kerangka kerja CSS yang memungkinkan Anda untuk merancang antarmuka web dengan cepat.",
    },
  ];

  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (question: string) => {
    if (expandedItem === question) {
      setExpandedItem(null);
    } else {
      setExpandedItem(question);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-4">Pertanyaan Umum</h1>
        <div>
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button className="flex justify-between items-center w-full p-2 rounded-md bg-gray-200 hover:bg-gray-300" onClick={() => toggleItem(item.question)}>
                <span>{item.question}</span>
                <span>{expandedItem === item.question ? "▲" : "▼"}</span>
              </button>
              {expandedItem === item.question && <div className="p-4 bg-gray-100">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPages;
