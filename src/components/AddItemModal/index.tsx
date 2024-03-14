import { useState } from "react";

import { addItem } from "../Invoice/itemsSlice";
import { useAppDispatch } from "../../hooks";
import { ItemType } from "../../utils/types";
import Modal from "../Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { generateId } from "../../utils";

const inputFields = [
  { label: "Product Name", name: "productName", type: "text" },
  { label: "Quantity", name: "quantity", type: "number" },
  { label: "Price", name: "price", type: "number" },
];

const AddItemModal = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<ItemType>({
    id: "",
    productName: "",
    quantity: 0,
    price: 0,
    total: 0,
  });
  const closeButton = () => {
    setShowModal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const parsedValue =
      name === "price" || name === "quantity" ? parseFloat(value) || 0 : value;
    setFormData({ ...formData, [name]: parsedValue });
  };

  const addItemBtn = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.productName === "" ||
      formData.quantity <= 0 ||
      formData.price <= 0
    ) {
      toast.error(
        "Please fill in all fields and ensure quantity and price are positive.",
        {
          theme: "dark",
        }
      );
    } else {
      const total = formData.quantity * formData.price;
      const id = generateId();
      dispatch(addItem({ ...formData, id, total }));
      setFormData({
        id: "",
        productName: "",
        price: 0,
        quantity: 0,
        total: 0,
      });
      setShowModal(false);
    }
  };

  return (
    <Modal>
      <ToastContainer />
      <div className="w-full h-full relative p-4">
        <button
          className="h-fit w-fit absolute right-2 top-1"
          onClick={closeButton}>
          x
        </button>
        <form
          onSubmit={addItemBtn}
          className="flex flex-col w-4/5 mx-auto gap-4">
          {inputFields.map((field, index) => (
            <div
              key={index}
              className="flex flex-row gap-4 items-center justify-between">
              <span className="text-xl">{field.label}</span>
              <input
                className="w-[60%] mt-1 px-2 border border-black bg-gray-100 h-10"
                placeholder="Enter Value"
                name={field.name}
                type={field.type || "text"}
                onChange={handleChange}
                value={formData[field.name]}
              />
            </div>
          ))}
          <button className="bg-gray-800 hover:bg-gray-700 transition-all text-white p-2 mt-8 w-[60%] mx-auto">
            Add Item
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddItemModal;
