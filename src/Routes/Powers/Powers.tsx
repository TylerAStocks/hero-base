
import HBDataTable from '../../Components/DataTables/HBDataTable.tsx';
import PowerAdder from './PowerAdder.tsx';
import powers from './powers.json'

const Powers: React.FC = () => {

    return (
        <div>
            <PowerAdder/>
            <HBDataTable tab="powers" main={powers.main} records={powers.records} />
        </div>
        
    )
}


export default Powers;