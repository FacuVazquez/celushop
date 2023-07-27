'use client'
import { createContext, useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

export const ItemContext = createContext()

export const useItems = () => {
  const context = useContext(ItemContext)
  if (!context) throw new Error('useTasks must be used within a ItemProvider')
  return context
}

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([])

  const createItem = (item) => {
    const newItem = {
      id: uuid(),
      name: item.name,
      description: item.description,
      stock: item.stock,
      price: item.price
    }
    setItems([...items, newItem])
  }

  const deleteItem = (id) => {
    setItems([...items.filter((item) => item.id !== id)])
  }

  const updateItem = (id, newData) => {
    setItems([...items.map((item) => item.id.toString() === id ? { ...item, ...newData } : item)])
  }

  return (
    <ItemContext.Provider
      value={{
        items,
        createItem,
        deleteItem,
        updateItem
      }}
    >
      {children}
    </ItemContext.Provider>
  )
}
