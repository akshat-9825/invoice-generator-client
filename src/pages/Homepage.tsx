import Invoice from "../components/Invoice";
import { useState } from "react";
import AddItemModal from "../components/AddItemModal";
import useUser from "../hooks/useUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SetTaxModal from "../components/SetTaxModal";

const HomePage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showTaxModal, setShowTaxModal] = useState<boolean>(false);
  const { user, refetch } = useUser();

  const DownloadInvoice = async () => {
    await refetch();
    if (user.name) {
      window.print();
    } else {
      toast.error("Please login to download", {
        theme: "dark",
      });
    }
  };

  const AddItem = () => {
    setShowModal(true);
  };

  const SetTax = () => {
    setShowTaxModal(true);
  };

  return (
    <main className="flex flex-row h-full print:w-full print:max-h-fit bg-gray-200">
      <ToastContainer />
      <div className="w-3/4 print:bg-white">
        <div className="print:hidden h-8" />
        <div className="z-20 w-fit mx-auto border border-black print:h-full h-[calc(100vh-8rem)] overflow-y-scroll no-scrollbar text-center">
          <div className="bg-white w-[210mm] h-[296mm]">
            <Invoice />
            {showModal ? <AddItemModal setShowModal={setShowModal} /> : null}
            {showTaxModal ? (
              <SetTaxModal setShowModal={setShowTaxModal} />
            ) : null}
          </div>
        </div>
      </div>
      <div className="w-1/4 print:hidden">
        <div className="border-l border-gray-400 p-2 h-full fixed bg-gray-400 w-1/4 flex flex-col gap-4">
          <button
            className="text-2xl w-full text-white p-4 bg-gray-800 hover:bg-gray-900"
            onClick={DownloadInvoice}>
            Download
          </button>
          <button
            className="text-2xl w-full text-white p-4 bg-gray-800 hover:bg-gray-900"
            onClick={AddItem}>
            Add Item
          </button>
          <button
            className="text-2xl w-full text-white p-4 bg-gray-800 hover:bg-gray-900"
            onClick={SetTax}>
            Set Tax
          </button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
