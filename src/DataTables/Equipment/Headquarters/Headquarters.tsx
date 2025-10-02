
import HBDataTable from '../../HBDataTable.tsx';
import headquarters from './headquarters.json';

export function Headquarters() {
  return (
    <div>

    <HBDataTable tab="headquarters" main={headquarters.main} records={headquarters.records} />

    </div>
  );
}

export default Headquarters;