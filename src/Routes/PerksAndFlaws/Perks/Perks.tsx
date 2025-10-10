import HBDataTable from "../../../Components/DataTables/HBDataTable.tsx"
import perks from './perks.json'


const Perks: React.FC = () => {

    return (
    <div>

    <HBDataTable tab="perks" main={perks.main} records={perks.records} />

    </div>
    )
}

export default Perks