import React from "react";
import FAQ from "@components/FAQ";
import { faqData } from "@components/data/faqData";
import Logo from "@icons/Logo";

const FAQpage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mx-auto max-w-3xl px-4 py-8 bg-white shadow-md rounded-lg border border-gray-200 text-gray-700">
        <div className="grid justify-center">
          <div className="flex justify-center">
            <Logo />
          </div>
          <h1 className="text-3xl font-semibold mb-4">FAQ'S</h1>
        </div>
        <FAQ faqs={faqData} />
      </div>
    </div>
  );
};

export default FAQpage;
