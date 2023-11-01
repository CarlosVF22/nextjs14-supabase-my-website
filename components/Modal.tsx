import React, { ReactNode } from "react";

interface ModalProps {
    onClose: () => void; // Proporciona un tipo para la función onClose
    children: ReactNode; // Proporciona un tipo para los hijos, que pueden ser cualquier elemento React válido
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded">
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
