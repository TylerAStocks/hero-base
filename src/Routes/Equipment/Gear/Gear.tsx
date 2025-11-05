import { useState } from "react"
import TabButton from "../../../Components/DataTables/TabButton.tsx"
import Armor from "./Armor/Armor.tsx"
import Weapons from "./Weapons/Weapons.tsx";
import Custom from "./Custom/Custom.tsx";


const Gear: React.FC = () => {

    const [tab, setTab] = useState('Armor');

    return (
        <>
        <div>
        <TabButton name="Armor" setTab={setTab} tab={tab}/>
        <TabButton name="Weapons" setTab={setTab} tab={tab}/>
        <TabButton name="Custom Gear" setTab={setTab} tab={tab}/>
        </div>
        {tab === 'Armor' && (
            <Armor />
        )}
        {tab === 'Weapons' && (
            <Weapons />
        )}
        {tab === 'Custom Gear' && (
            <Custom />
        )}
        
        </>
    )
}


export default Gear