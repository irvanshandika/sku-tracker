import React, { useState } from "react";
import Modal from "@components/Modal";
import Logo from "@icons/Logo";

const FAQPages: React.FC = () => {
  const [faqs] = useState([
    {
      question: "Apa itu SKU! Tracker ?",
      answer: "SKU! Tracker merupakan aplikasi manajemen pendidikan untuk melacak kegiatan pelajar, penilaian, dan presensi.",
    },
    {
      question: "Seberapa aman data saya ?",
      answer: "Data Anda sangat aman. Kami menggunakan teknologi enkripsi untuk melindungi data Anda.",
    },
    {
      question: "Bagaimana cara mengakses aplikasi ini ?",
      answer: "Anda dapat mengakses aplikasi ini melalui browser di perangkat Anda.",
    },
    {
      question: "Apakah saya dapat mengakses aplikasi ini di perangkat mobile ?",
      answer: "Ya, Anda dapat mengakses aplikasi ini di perangkat mobile ataupun desktop.",
    },
  ]);

  const [modalContent, setModalContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalQuestion, setModalQuestion] = useState("");

  const handleQuestionClick = (question: string, answer: string) => {
    setModalContent(answer);
    setModalQuestion(question);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-xl mx-auto">
        <div className="grid justify-center">
          <div className="flex justify-center">
            <Logo />
          </div>
          <h1 className="text-3xl font-semibold mb-4">FAQ'S</h1>
        </div>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 p-4 bg-white shadow-md rounded">
            <button className="w-full text-left font-semibold" onClick={() => handleQuestionClick(faq.question, faq.answer)}>
              {faq.question}
            </button>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} question={modalQuestion} content={modalContent} onClose={closeModal} />
    </div>
  );
};

export default FAQPages;
