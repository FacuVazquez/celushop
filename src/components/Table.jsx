'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useItems } from '@/context/ItemContext'
import './Table.css'

const Table = ({ data }) => {
  const router = useRouter()
  const { deleteItem } = useItems()

  const handleEdit = (id) => {
    router.push(`/edit/${id}`)
  }

  const handleDelete = (id) => {
    deleteItem(id)
  }

  if (data.length === 0) {
    return (
      <div className='table-container'>
        No hay items en stock...
      </div>
    )
  }

  return (
    <div className='table-container'>
      <table className='centered-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, i) => <td key={i}>{value}</td>)}
              <td>
                <button onClick={() => handleEdit(item.id)}>Editar</button>
                <button onClick={() => handleDelete(item.id)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
