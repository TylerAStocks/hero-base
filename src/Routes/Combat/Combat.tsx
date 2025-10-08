
import HBDataTable from '../../Components/DataTables/HBDataTable.tsx';
import combat from './combat.json'

const Combat: React.FC = () => {

    return (
        <HBDataTable tab="combat" main={combat.main} records={combat.records} />
    )
}


export default Combat;