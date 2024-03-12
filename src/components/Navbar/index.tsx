import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="md:h-16 h-14 bg-white flex items-center justify-center print:hidden">
      <div className="flex flex-row justify-between items-center max-w-[1280px] w-full p-4">
        <div className="text-lg md:text-2xl">Invoice Generator</div>
        <div className="flex flex-row gap-4">
          <div className="flex items-center cursor-pointer text-sm md:text-lg">
            <Link to="/register">Login</Link>
          </div>
          <button className="cursor-pointer border text-sm md:text-lg border-gray-500 rounded-[4px] py-1 px-2 hover:bg-gray-100 transition-all">
            <Link to="/register">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
