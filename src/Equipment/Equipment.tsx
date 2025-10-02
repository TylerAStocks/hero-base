import { useState } from 'react';
import GroundVehicles from './Vehicles/GroundVehicles/GroundVehicles.tsx';
import TabButton from '../DataTables/TabButton.tsx';
import Headquarters from './Headquarters/Headquarters.tsx';



const Equipment: React.FC = () => {

    const [tab, setTab] = useState('Headquarters');

    const onTabClick = (value: string) => {
        setTab(value)
    }
  return (
    <div>

    <p>Equipment</p>
    <TabButton name="Headquarters" setTab={setTab}/>
    <TabButton name="Ground Vehicles" setTab={setTab} />

    {tab === 'Headquarters' && (
        <Headquarters />
    )}
    {tab === 'Ground Vehicles' && (
        <GroundVehicles />
    )}

    </div>
  );
}

export default Equipment;