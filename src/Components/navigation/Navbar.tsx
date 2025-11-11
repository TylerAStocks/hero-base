
import React from "react";
import NavItem from "./NavItem.tsx";

const Navbar: React.FC = () => {

  return (
    <>
      <div style={{
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#1e1e1e',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}
      >
        
            
            <ul style={{display: 'flex', flexWrap: 'wrap', gap: '32px'}}>
              <NavItem path="/" name="Home"/>
              <NavItem path="/powers" name="Powers"/>
              <NavItem path="/equipment" name="Equipment"/>
              <NavItem path="/perksAndFlaws" name="Perks and Flaws"/>
              <NavItem path="/combat" name="Combat"/>
              <NavItem path="/pointCalculator" name="Point Calculator"/>
            </ul>
      </div>

    </>
  );
};

export default Navbar;