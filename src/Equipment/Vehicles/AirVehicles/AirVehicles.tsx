


import HBDataTable from '../../../Components/DataTables/HBDataTable.tsx';
import airVehicles from '../AirVehicles/airVehicles.json'

const AirVehicles: React.FC = () => {
  return (
    <div>

<p style={{fontSize: '14px'}}>{airVehicles.main}</p>
    <HBDataTable tab="airVehicles" records={airVehicles.records} />

    </div>
  );
}

export default AirVehicles;