import React from 'react'
import { NavBar } from './layouts/NavBar/NavBar'
import { CustomCard } from './components/Cards/Card'
import { products } from './data'

export default function Example() {
  const cards = products.map((product) => {
    return <CustomCard {...product}></CustomCard>
  })
  return (
    <div className='min-h-screen scrollbar-hide bg-slate-400'>
      <NavBar />
      <div className='container mx-auto px-3 overflow-scroll'>{cards}</div>
    </div>
  )
}
