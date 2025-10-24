
import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import HBModal from '../HBModal.tsx';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';

interface HBDataTableType {
    main: string;
    tab: string;
    records: {
      description: string;
      cost: number | string;
      name: string;
      children: any | undefined;
    }[] | undefined
}

const PAGE_SIZE = 20;


export const HBDataTable: React.FC<HBDataTableType> = ({tab, main, records}) => {

  const [open, setOpen] = useState(false)
  const [modalData, setModalData] = useState()
  const [tableRecords, setTableRecords] = useState(records);
  const [page, setPage] = useState(1)

  const columns = Object.keys(records[0]).filter((column) => column !== 'children').map((column) => {
    return {accessor: column}
  })


  const handleSearch = (values) => {
    const newRecords = records?.filter((record) => record.name.toLowerCase().includes(values.name.toLowerCase()))
    setTableRecords(newRecords?.length ? newRecords : records)
  }

  const handleOpen = (name, data) => {
    console.log('data: ', data)
    console.log('name: ', name)

    const getChart = () => {
      switch(name) {
        case 'Growth':
          return {image: 'growth'};
        case 'Leaping':
          return {image: 'leaping'};
        case 'Shrinking':
          return {image: 'shrinking'};
        default:
          return {}
      }
    }

    let modalData = getChart();


    if(data) {
      modalData = {...modalData,  children: data }
    }

    if (Object.keys(modalData).length > 0) {
      setOpen(true)
      setModalData(modalData)
    }
  }

  const handleClose = () => {
    setOpen(false)
  }




  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setTableRecords(records?.slice(from, to));
  }, [page, records]);



  return (
    <div>
      <p>{tab}</p>
      <p style={{fontSize: '14px'}}>{main}</p>

      <Formik 
        initialValues={{
          name: ''
        }} 
        onSubmit={handleSearch}>
          {({
                    values,
                    handleChange,
                    handleSubmit,
                    setValues
                }) => {

                  const changeAutocomplete = (target) => {
                    var value =  target as HTMLElement
                      setValues({...values, name: value.textContent})
                                          if (!value.textContent) {
                      handleSubmit(values)
                    }
                  }

                      return (
                  <form onSubmit={handleSubmit}>
                    <Autocomplete
                      name="name"
                      disablePortal
                      blurOnSelect
                      style={{
                        background: '#d2c7d6',
                        padding: '6px',
                        borderRadius: '8px'
                      }}
                      freeSolo={true}
                      onChange={(e) => changeAutocomplete(e.target)}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter') {
                            // Prevent's default 'Enter' behavior.
                            event.defaultMuiPrevented = true;
                            // your handler code
                          }
                        }}
                      
                      getOptionLabel={(option) => option.name}
                      options={records}
                      sx={{ width: 300 }}
                      renderInput={(params) => <TextField name="name" onChange={handleChange} {...params} label={tab} style={{borderRadius: '8px', background: 'white'}} />}
                    />
                    <button>Search</button>
                  </form>
                  
                )}}
      </Formik>


<DataTable
      withTableBorder
      borderRadius="sm"
      withColumnBorders
      striped
      highlightOnHover
      // provide data
      records={tableRecords}
      // define columns
      columns={columns}
      totalRecords={records?.length}
      recordsPerPage={PAGE_SIZE}
      page={page}
      onPageChange={(p) => setPage(p)}
      // execute this callback when a row is clicked
      onRowClick={({ record: { name, description, cost, children } }) => handleOpen(name, children) }
      style={{margin: '40px', marginBottom: '80px'}}
    />

    <HBModal open={open} onClose={handleClose} data={modalData} />
    </div>
  );
}

export default HBDataTable;