
import { DataTable } from 'mantine-datatable';

interface HBDataTableType {
    main: string;
    tab: string;
    records: {
      description: string;
      cost: number | string;
      name: string;
    }[] | undefined
}


export const HBDataTable: React.FC<HBDataTableType> = ({tab, main, records}) => {

  const columns = Object.keys(records[0]).map((column) => {
    return {accessor: column}
  })

  //const [search, setSearch] = useState('');
  //const [tableRecords, setTableRecords] = useState(records)
/* 
  const onSearch = (e) => {
    setSearch(e.target.innerHTML)
  }

  useEffect(() => {
    if (search.length) {
      const newRecords = records?.find((record) => record.name.includes(search))
      console.log(newRecords)
      setTableRecords(newRecords)
    }
  }, [search]) */

  return (
    <div>
      <p>{tab}</p>
      <p style={{fontSize: '14px'}}>{main}</p>
      
{/*       <Autocomplete
      style={{marginLeft: '20px'}}
        disablePortal
        onChange={onSearch}
        options={records.map((record) => record.name)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Name" style={{background: 'white'}}/>}
      /> */}

<DataTable
      withTableBorder
      borderRadius="sm"
      withColumnBorders
      striped
      highlightOnHover
      // provide data
      records={records}
      // define columns
      columns={columns}
      // execute this callback when a row is clicked
      onRowClick={({ record: { name, description, cost } }) =>
        console.log('CLICK')
      }
      style={{margin: '40px', marginBottom: '80px'}}
    />
    </div>
  );
}

export default HBDataTable;