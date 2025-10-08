


import HBDataTable from '../../../../Components/DataTables/HBDataTable.tsx';
import customVehicles from '../CustomVehicles/customVehicles.json'

const CustomVehicles: React.FC = () => {
  return (
    <div>

<p style={{fontSize: '14px'}}>{customVehicles.main}</p>
    <HBDataTable tab="customVehicles" records={customVehicles.records} />

    </div>
  );
}

export default CustomVehicles;