
import { DataTable } from 'mantine-datatable';
import { useState } from 'react';
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


export const HBDataTable: React.FC<HBDataTableType> = ({tab, main, records}) => {

  const [open, setOpen] = useState(false)
  const [modalData, setModalData] = useState()
  const [tableRecords, setTableRecords] = useState(records);

  const columns = Object.keys(records[0]).filter((column) => column !== 'children').map((column) => {
    return {accessor: column}
  })


  const handleSearch = (values) => {
    console.log(values)
    const newRecords = records?.filter((record) => record.name.toLowerCase().includes(values.name.toLowerCase()))
    setTableRecords(newRecords?.length ? newRecords : records)
  }

  const handleOpen = (data) => {
    if(data) {
    setOpen(true)
    setModalData(data)
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

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
                    console.log('target: ', target)
                    var value =  target as HTMLElement
                    console.log('value: ', value)
                      setValues({...values, name: value.textContent})
                                          if (!value.textContent) {
                      handleSubmit(values)
                    }
                  }

                  console.log('values: ', values)
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
      // execute this callback when a row is clicked
      onRowClick={({ record: { name, description, cost, children } }) => handleOpen(children) }
      style={{margin: '40px', marginBottom: '80px'}}
    />

    <HBModal open={open} onClose={handleClose} data={modalData} />
    </div>
  );
}

export default HBDataTable;