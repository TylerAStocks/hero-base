
import HBDataTable from '../../DataTables/HBDataTable.tsx';
import headquarters from './headquarters.json';

const Headquarters: React.FC = () => {
  return (
    <div>

    <HBDataTable tab="headquarters" main={headquarters.main} records={headquarters.records} />

    </div>
  );
}

export default Headquarters;