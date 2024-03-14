import { useState } from "react";
import { ItemType } from "../../utils/types";
import { useAppDispatch } from "../../hooks";
import { deleteById } from "./itemsSlice";

const Item = ({ item }: { item: ItemType }) => {
  const properties: (keyof ItemType)[] = [
    "productName",
    "quantity",
    "price",
    "total",
  ];
  const [hovered, setHovered] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const deleteItem = () => {
    dispatch(deleteById(item.id));
  };

  return (
    <div
      className="flex flex-row relative justify-between items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {properties.map((property, index) => (
        <div key={index} className="flex-1">
          {item[property]}
        </div>
      ))}
      {hovered && (
        <button className="absolute right-0 print:hidden" onClick={deleteItem}>
          ❌
        </button>
      )}
    </div>
  );
};

export default Item;
