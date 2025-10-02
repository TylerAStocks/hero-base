
import React from "react";
import NavItem from "./NavItem.tsx";

const Navbar: React.FC = () => {

  // const pathname = usePathname();

  //TODO: figure out navigation
  return (
    <>
      <div className="w-full h-20 bg-[#4f078a] sticky top-0 flex flex-row z-1000">
        
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <a href={"/"}>
            <p className="flex text-white justify-center items-center text-[40px]">Tyler Stocks</p>
            </a>
            
            <ul className="hidden md:flex gap-x-6 text-white">
              <NavItem path="/" name="Home"/>
              <NavItem path="/equipment" name="Equipment"/>
              <NavItem path="/combat" name="Combat"/>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;