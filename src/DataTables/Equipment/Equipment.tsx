import { useState } from 'react';
import HBDataTable from '../HBDataTable.tsx';

import Headquarters from './Headquarters/Headquarters.tsx';
import GroundVehicles from './Vehicles/GroundVehicles/GroundVehicles.tsx';

import TabButton from '../TabButton.tsx';


export function Equipment() {

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