import Button from "../Button/Button.tsx";

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
        <Button onClick={onTabClick} style={{background: tab === name ? 'white' : 'gray'}}> {name} </Button>
    )
}

export default TabButton;