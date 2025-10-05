
interface TabButtonType {
    name: string;
    setTab: any;
    tab: string;
}

const TabButton: React.FC<TabButtonType> = ({ name, setTab, tab}) => {

    const onTabClick = () => {
        setTab(name)
    }

    return (
        <button onClick={onTabClick} style={{background: tab === name ? 'white' : 'gray'}}> {name} </button>
    )
}

export default TabButton;