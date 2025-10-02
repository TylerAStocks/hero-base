import { useState } from "react";


interface TabButton {
    name: string;
    setTab: any;
}

const TabButton: React.FC<TabButton> = ({ name, setTab}) => {

    const onTabClick = () => {
        setTab(name)
    }

    return (
        <button onClick={onTabClick} > {name} </button>
    )
}

export default TabButton;