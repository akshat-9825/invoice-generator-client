import { ReactNode } from "react";
import useUser from "../../hooks/useUser";

const Blocker = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();

  return (
    <>
      {!user.name ? (
        <div className="w-full h-full relative">
          <div className="w-full h-full absolute bg-gray-600 bg-opacity-75 backdrop-filter backdrop-blur-sm z-50">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <p className="text-3xl">Please login to use Invoice Generator</p>
            </div>
          </div>
          {children}
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Blocker;
