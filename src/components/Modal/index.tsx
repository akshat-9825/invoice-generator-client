import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="fixed z-20 top-0 left-0 w-full h-full flex items-center justify-center bg-gray-600 bg-opacity-75 backdrop-filter backdrop-blur-sm">
      <div className="bg-white w-1/2 md:w-1/3 lg:w-[40%] rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default Modal;
