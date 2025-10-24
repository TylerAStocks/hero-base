import { useState } from "react"
import TabButton from "../../../Components/DataTables/TabButton.tsx"
import Armor from "./Armor/Armor.tsx"


const Gear: React.FC = () => {

    const [tab, setTab] = useState('Armor');

    return (
        <>
        <div>
        <TabButton name="Armor" setTab={setTab} tab={tab}/>
{/*         <TabButton name="Ground Vehicles" setTab={setTab} tab={tab}/>
        <TabButton name="Water Vehicles" setTab={setTab} tab={tab}/>
        <TabButton name="Custom Vehicles" setTab={setTab} tab={tab}/> */}
        </div>
        {tab === 'Armor' && (
            <Armor />
        )}
        
{/*         {tab === 'Ground Vehicles' && (
            <GroundVehicles />
        )}
        
        {tab === 'Water Vehicles' && (
            <WaterVehicles />
        )}
        {tab === 'Custom Vehicles' && (
            <CustomVehicles />
        )} */}
        
        </>
    )
}


export default Gear