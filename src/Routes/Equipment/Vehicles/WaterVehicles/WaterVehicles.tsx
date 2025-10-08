



import HBDataTable from '../../../../Components/DataTables/HBDataTable.tsx';
import waterVehicles from '../WaterVehicles/waterVehicles.json'

const WaterVehicles: React.FC = () => {
  return (
    <div>

<p style={{fontSize: '14px'}}>{waterVehicles.main}</p>
    <HBDataTable tab="waterVehicles" records={waterVehicles.records} />

    </div>
  );
}

export default WaterVehicles;