
import { DataTable } from 'mantine-datatable';
import { useState } from 'react';
import HBModal from '../HBModal.tsx';

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

  const columns = Object.keys(records[0]).filter((column) => column !== 'children').map((column) => {
    return {accessor: column}
  })



  const handleOpen = (data) => {
    setOpen(true)
    setModalData(data)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <p>{tab}</p>
      <p style={{fontSize: '14px'}}>{main}</p>

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
      onRowClick={({ record: { name, description, cost, children } }) => handleOpen(children) }
      style={{margin: '40px', marginBottom: '80px'}}
    />

    <HBModal open={open} onClose={handleClose} data={modalData} />
    </div>
  );
}

export default HBDataTable;