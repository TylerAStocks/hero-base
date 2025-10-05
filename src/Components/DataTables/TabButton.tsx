import { useState } from "react";


interface TabButton {
    name: string;
    setTab: any;
    tab: string;
}

const TabButton: React.FC<TabButton> = ({ name, setTab, tab}) => {

    const onTabClick = () => {
        setTab(name)
    }

    return (
        <button onClick={onTabClick} style={{background: tab === name ? 'white' : 'gray'}}> {name} </button>
    )
}

export default TabButton;