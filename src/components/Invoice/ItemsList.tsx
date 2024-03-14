import { useAppSelector } from "../../hooks";
import { ItemType } from "../../utils/types";
import { selectItemsData } from "./itemsSlice";
import Item from "./Items";

const ItemsList = () => {
  const { itemsList } = useAppSelector(selectItemsData);

  return (
    <div className="py-4 border-y border-gray-200 flex flex-col gap-4">
      {itemsList.map((item: ItemType, index: number) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
};

export default ItemsList;
