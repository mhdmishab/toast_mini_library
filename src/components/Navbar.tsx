import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

enum ComponentName {
  First = "First Component",
  Second = "Second Component",
  Third = "Third Component",
}

const Navbar: React.FC = () => {

  const [selectedComponent, setSelectedComponent] = useState<ComponentName | ''>('');
  const navigate=useNavigate();

  const commonStyle = "h-14 p-2 text-white text-xs flex items-center justify-center cursor-pointer hover:bg-red-500";
  const selectedStyle = "bg-red-500";

  const handleComponentClick = (component: ComponentName) => {
    setSelectedComponent(component);
    if (component===ComponentName.First) {
        navigate('/component1');
    } else if(component===ComponentName.Second) {
        navigate('/component2');
    }else{
        navigate('/component3');
    }
  };

  return (
    <div className="w-full h-14 bg-red-400 flex justify-between items-center p-4">
      <h4>Header</h4>
      <div className="flex">
        <div
          className={`${commonStyle} ${selectedComponent === ComponentName.First ? selectedStyle : ""}`}
          onClick={() => handleComponentClick(ComponentName.First)}
        >
          {ComponentName.First}
        </div>
        <div
          className={`${commonStyle} ${selectedComponent === ComponentName.Second ? selectedStyle : ""}`}
          onClick={() => handleComponentClick(ComponentName.Second)}
        >
          {ComponentName.Second}
        </div>
        <div
          className={`${commonStyle} ${selectedComponent === ComponentName.Third ? selectedStyle : ""}`}
          onClick={() => handleComponentClick(ComponentName.Third)}
        >
          {ComponentName.Third}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
