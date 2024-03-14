import { useAppSelector } from "../../hooks";
import ItemsList from "./ItemsList";
import {
  selectItemsData,
  selectTotalCost,
  selectTotalIncludingTax,
} from "./itemsSlice";

const Invoice = () => {
  const itemHeadings = ["Product", "Qty", "Rate", "Total"];
  const { tax } = useAppSelector(selectItemsData);
  const totalWithoutTax = useAppSelector(selectTotalCost);
  const totalWithTax = useAppSelector(selectTotalIncludingTax);
  const currentDate = new Date();
  const maxRelevantDate = new Date(currentDate);
  maxRelevantDate.setDate(currentDate.getDate() + 10);

  return (
    <div className="p-8 h-full w-full relative">
      <div className="text-2xl flex flex-row justify-between items-center">
        <span className="font-medium uppercase">Invoice Generator</span>
        <img src="images/levitation_logo.png" width="auto" height="auto" />
      </div>
      <div className="flex flex-col mt-16">
        <div className="flex flex-row justify-between font-medium pb-4">
          {itemHeadings.map((heading, index) => (
            <div className="flex-1" key={index}>
              {heading}
            </div>
          ))}
        </div>
        <ItemsList />
      </div>
      <div className="mt-8 ml-auto w-1/3 flex flex-col text-sm">
        <div className="flex flex-row justify-between">
          <div className="font-medium ">Total</div>
          <div>INR {totalWithoutTax}</div>
        </div>
        <div className="flex flex-row mt-4 justify-between text-xs text-gray-700">
          <div>GST</div>
          <div>{tax} %</div>
        </div>
        <div className="mt-4 py-2 border-y border-gray-300">
          <div className="flex flex-row justify-between">
            <div className="font-medium ">Grand Total</div>
            <div className="text-blue-700 font-medium">INR {totalWithTax}</div>
          </div>
        </div>
      </div>
      <div className="text-xs mt-48 pl-4 text-left font-medium">
        {`Valid until: ${maxRelevantDate.getDate()}/${
          maxRelevantDate.getMonth() + 1
        }/${maxRelevantDate.getFullYear()}`}
      </div>
      <div className="absolute bottom-8 rounded-full text-left px-8 text-xs font-medium w-[90%] bg-black text-gray-200 p-4">
        Terms and Conditions <br />
        We are happy to supply any further information you may need and trust
        that you can call us to fill your order which will recieve our promt and
        careful consideration d
      </div>
    </div>
  );
};

export default Invoice;
