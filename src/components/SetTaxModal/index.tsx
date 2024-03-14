import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Modal from "../Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { selectItemsData, setTax } from "../Invoice/itemsSlice";

const SetTaxModal = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useAppDispatch();
  const { tax } = useAppSelector(selectItemsData);
  const [data, setData] = useState<number>(tax);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSetTax = (e: React.FormEvent) => {
    e.preventDefault();
    if (isNaN(data) || data < 0) {
      toast.error("Tax amount must be a positive number.", { theme: "dark" });
      return;
    }
    dispatch(setTax(data));
    setShowModal(false);
    toast.success(`Tax set successfully to ${data}%.`, { theme: "dark" });
  };

  return (
    <Modal>
      <ToastContainer />
      <div className="w-full h-full relative p-4">
        <button
          className="h-fit w-fit absolute right-2 top-1"
          onClick={handleClose}>
          x
        </button>
        <form
          onSubmit={handleSetTax}
          className="flex flex-col w-4/5 mx-auto gap-4">
          <div className="flex flex-row gap-4 items-center justify-between">
            <span className="text-xl">Tax (%)</span>
            <input
              className="w-[60%] mt-1 px-2 border border-black bg-gray-100 h-10"
              placeholder="Enter Tax Percentage"
              type="number"
              value={data || ""}
              onChange={(e) => setData(parseFloat(e.target.value))}
            />
          </div>
          <button className="bg-gray-800 hover:bg-gray-700 transition-all text-white p-2 mt-8 w-[60%] mx-auto">
            Set Tax
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default SetTaxModal;
