import { HBDataTable } from "../../../../Components/DataTables/HBDataTable.tsx";
import custom from './custom.json';




const Custom: React.FC = () => {


    return (
        <>

        <HBDataTable main={custom.main} tab="Custom Gear" records={custom.records} />
        </>
    )
}

export default Custom;