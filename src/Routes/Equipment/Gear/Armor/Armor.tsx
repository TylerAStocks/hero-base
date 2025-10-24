


import HBDataTable from '../../../../Components/DataTables/HBDataTable.tsx';
import armor from './armor.json'

const Armor: React.FC = () => {
  return (
    <div>

<p style={{fontSize: '14px'}}>{armor.main}</p>
    <HBDataTable tab="armor" records={armor.records} />

    </div>
  );
}

export default Armor;