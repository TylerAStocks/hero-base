'use client';

import { Box } from '@mantine/core';
import { DataTable } from 'mantine-datatable';

interface HBDataTable {
    main: string;
    tab: string;
    records: {
      description: string;
      cost: number | string;
      name: string;
    }[]
}


export const HBDataTable: React.FC<HBDataTable> = ({tab, main, records}) => {

  const columns = Object.keys(records[0]).map((column) => {
    return {accessor: column}
  })

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
      onRowClick={({ record: { name, description, cost } }) =>
        console.log('CLICK')
      }
      style={{margin: '20px'}}
    />
    </div>
  );
}

export default HBDataTable;