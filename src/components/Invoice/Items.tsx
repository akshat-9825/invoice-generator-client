import { ItemType } from "../../utils/types";

const Item = ({ item }: { item: ItemType }) => {
  const properties: (keyof ItemType)[] = [
    "productName",
    "quantity",
    "price",
    "total",
  ];

  return (
    <div className="flex flex-row justify-between items-center">
      {properties.map((property, index) => (
        <div key={index} className="flex-1">
          {item[property]}
        </div>
      ))}
    </div>
  );
};

export default Item;
