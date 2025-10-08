import { useState } from "react"
import TabButton from "../../../Components/DataTables/TabButton.tsx"
import AirVehicles from "./AirVehicles/AirVehicles.tsx"
import GroundVehicles from "./GroundVehicles/GroundVehicles.tsx"
import WaterVehicles from "./WaterVehicles/WaterVehicles.tsx"
import CustomVehicles from "./CustomVehicles/CustomVehicles.tsx"


const Vehicles: React.FC = () => {

    const [tab, setTab] = useState('Air Vehicles');

    return (
        <>
        <div>
        <TabButton name="Air Vehicles" setTab={setTab} tab={tab}/>
        <TabButton name="Ground Vehicles" setTab={setTab} tab={tab}/>
        <TabButton name="Water Vehicles" setTab={setTab} tab={tab}/>
        <TabButton name="Custom Vehicles" setTab={setTab} tab={tab}/>
        </div>
        {tab === 'Air Vehicles' && (
            <AirVehicles />
        )}
        
        {tab === 'Ground Vehicles' && (
            <GroundVehicles />
        )}
        
        {tab === 'Water Vehicles' && (
            <WaterVehicles />
        )}
        {tab === 'Custom Vehicles' && (
            <CustomVehicles />
        )}
        
        </>
    )
}


export default Vehicles