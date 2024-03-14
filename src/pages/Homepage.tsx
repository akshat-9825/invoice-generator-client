import Invoice from "../components/Invoice";

const HomePage = () => {
  return (
    <main className="flex flex-row h-full print:w-full print:max-h-fit bg-gray-200">
      <div className="w-3/4 print:bg-white">
        <div className="print:hidden h-8" />
        <div className="z-20 w-fit mx-auto border border-black print:h-full h-[calc(100vh-8rem)] overflow-y-scroll no-scrollbar text-center">
          <div className="bg-white w-[210mm] h-[296mm]">
            <Invoice />
          </div>
        </div>
      </div>
      <div className="w-1/4 print:hidden">
        <div className="border-l border-gray-400 pl-2 h-full fixed bg-gray-400 w-full"></div>
      </div>
    </main>
  );
};

export default HomePage;
