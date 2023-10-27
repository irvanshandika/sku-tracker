import React from "react";

type ModalProps = {
  isOpen: boolean;
  question: string; // Tambahkan prop question
  content: string;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, content, question, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-4 rounded z-10">
        <h2 className="text-2xl font-semibold mb-2 text-center">{question}</h2>
        <div className="text-gray-800">{content}</div>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Tutup
        </button>
      </div>
    </div>
  );
};

export default Modal;
