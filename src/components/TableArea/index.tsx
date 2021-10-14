import React from 'react'
import { items } from '../../data/items'
import { Item } from '../../types/Item'
import { Table, TableHeadColumn } from './styles'

type Props = {
  list: Item[]
}
const TableArea = ({ list }: Props) => {
 
  return (
    <Table>
      <thead>
        <tr>
          <TableHeadColumn width={100}>Data</TableHeadColumn>
          <TableHeadColumn width={130}>Categoria</TableHeadColumn>
          <TableHeadColumn>Título</TableHeadColumn>
          <TableHeadColumn width={150}>Valor</TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <tr key={index}>
            <td></td>
            <td></td>
            <td>{item.title }</td>
            <td></td>
         </tr>
       ))}
      </tbody>
    </Table>
  )
}

export default TableArea
