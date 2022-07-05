import React from 'react'
import {Table, TableCell, TableHead, TableRow} from '@material-ui/core'

const useTable = ( records, headCells) => {
  const TblContainer = props =>(
    <Table>
      {props.children}
    </Table>
  )
  const TblHead = props =>{
    return(
      <TableHead>
        <TableRow>
          {
            headCells.map(headCell=>(<TableCell key={headCell.id}>
              {headCell.lable}
            </TableCell>))
          }
        </TableRow>
      </TableHead>
    )
  }
  return {
    TblContainer,
    TblHead
  }
}

export default useTable