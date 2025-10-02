


import HBDataTable from '../../../DataTables/HBDataTable.tsx';
import groundVehicles from '../GroundVehicles/groundVehicles.json'

export function GroundVehicles() {
  return (
    <div>

<p style={{fontSize: '14px'}}>{groundVehicles.main}</p>
    <HBDataTable tab="groundVehicles" records={groundVehicles.records} />

    </div>
  );
}

export default GroundVehicles;