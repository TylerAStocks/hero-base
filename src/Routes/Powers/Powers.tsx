
import HBDataTable from '../../Components/DataTables/HBDataTable.tsx';
import powers from './powers.json'

const Powers: React.FC = () => {

    return (
        <HBDataTable tab="powers" main={powers.main} records={powers.records} />
    )
}


export default Powers;