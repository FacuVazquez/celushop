'use client'
import Table from '@/components/Table'
import { useItems } from '@/context/ItemContext'
import { useRouter } from 'next/navigation'
import './globals.css'

const HomePage = () => {
  const { items } = useItems()
  const router = useRouter()

  return (
    <div>
      <Table data={items} />
      <div className='button-container'>
        <button className='button' onClick={() => router.push('/new')}>
          Agregar
        </button>
      </div>
    </div>
  )
}

export default HomePage
