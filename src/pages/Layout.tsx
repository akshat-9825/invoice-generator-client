import { ReactNode } from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
