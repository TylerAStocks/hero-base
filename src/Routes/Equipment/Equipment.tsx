import { useState } from 'react';
import TabButton from '../../Components/DataTables/TabButton.tsx'
import Headquarters from './Headquarters/Headquarters.tsx';
import Vehicles from './Vehicles/Vehicles.tsx';
import Gear from './Gear/Gear.tsx';



const Equipment: React.FC = () => {

    const [tab, setTab] = useState('Headquarters');

  return (
    <div>

    <p>Equipment</p>
    <TabButton name="Gear" setTab={setTab} tab={tab}/>
    <TabButton name="Headquarters" setTab={setTab} tab={tab}/>
    <TabButton name="Vehicles" setTab={setTab} tab={tab}/>

    {tab === 'Gear' && (
        <Gear />
    )}
    {tab === 'Headquarters' && (
        <Headquarters />
    )}
    {tab === 'Vehicles' && (
        <Vehicles />
    )}

    </div>
  );
}

export default Equipment;