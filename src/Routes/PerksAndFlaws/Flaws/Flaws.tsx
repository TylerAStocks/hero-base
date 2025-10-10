import HBDataTable from "../../../Components/DataTables/HBDataTable.tsx"
import flaws from './flaws.json'


const Flaws: React.FC = () => {

    return (
    <div>

    <HBDataTable tab="Flaws" main={flaws.main} records={flaws.records} />

    </div>
    )
}

export default Flaws