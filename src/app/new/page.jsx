'use client'

import { useItems } from '@/context/ItemContext'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import './Form.css'

const Page = ({ params }) => {
  const [item, setItem] = useState({
    name: '',
    description: '',
    stock: 0,
    price: 0
  })
  const { items, createItem, updateItem } = useItems()
  const router = useRouter()
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (params.id) {
      updateItem(params.id, item)
    } else {
      createItem(item)
    }
    router.push('/')
  }

  useEffect(() => {
    if (params.id) {
      const itemFound = items.find((item) => item.id === params.id)
      if (itemFound) {
        setItem(itemFound)
      }
    }
  }, [])

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <p className='item'>Nombre del item</p>
      <input
        name='name'
        placeholder='Nombre'
        onChange={handleChange}
        value={item.name}
      />
      <p className='item'>Descripción del item</p>
      <textarea
        name='description'
        placeholder='Descripción'
        onChange={handleChange}
        value={item.description}
      />
      <p className='item'>Número en stock</p>
      <input
        name='stock'
        placeholder='Stock'
        onChange={handleChange}
        value={item.stock}
        type='number'
      />
      <p className='item'>Precio</p>
      <input
        name='price'
        placeholder='Price'
        onChange={handleChange}
        value={item.price}
        type='number'
      />
      <button className='btn'>{params.id ? 'Guardar' : 'Agregar'}</button>
    </form>
  )
}

export default Page
