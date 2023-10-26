// FAQAnswer.tsx
import React from "react";

const FAQAnswer: React.FC<{ answer: string }> = ({ answer }) => {
  return (
    <>
      <div className="p-3 bg-gray-100">{answer}</div>
    </>
  );
};

export default FAQAnswer;
