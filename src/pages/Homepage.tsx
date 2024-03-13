import Invoice from "../components/Invoice";

const HomePage = () => {
  return (
    <div className="flex flex-row h-full print:w-full">
      <div
        className="w-3/4 styled_scrollbar"
        style={{ scrollbarGutter: "stable" }}>
        <div className="print:hidden h-8" />
        <div className="z-20 w-[240mm] h-[297mm] print:w-[240mm] print:h-[297mm] bg-white my-0 mx-auto border border-black">
          <Invoice />
        </div>
        <div className="print:hidden h-24" />
      </div>
      <div className="w-1/4 print:hidden">
        <div className="border-l border-gray-400 pl-2 h-full fixed bg-gray-200 w-full"></div>
      </div>
    </div>
  );
};

export default HomePage;
