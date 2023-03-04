import React from 'react'
import { NavBar } from './layouts/NavBar/NavBar'
import { CustomCard } from './components/Cards/Card'

const products = [
  {
    title: 'Analytics',
    description: 'Get a better understanding of your traffic',
    map_url: 'https://goo.gl/maps/WVEfH9M162sM1Mrp6',
    start_date: '22-10-2021',
    end_date: '24-10-2021',
    location: 'Maddur',
  },
  {
    title: 'Engagement',
    description: 'Speak directly to your customers',
    map_url: 'https://goo.gl/maps/WVEfH9M162sM1Mrp6',
    start_date: '22-10-2021',
    end_date: '24-10-2021',
    location: 'Maddur',
  },
  {
    title: 'Security',
    description: 'Your customers’ data will be safe and secure',
    map_url: 'https://goo.gl/maps/WVEfH9M162sM1Mrp6',
    start_date: '22-10-2021',
    end_date: '24-10-2021',
    location: 'Maddur',
  },
  {
    title: 'Integrations',
    description: 'Connect with third-party tools',
    map_url: 'https://goo.gl/maps/WVEfH9M162sM1Mrp6',
    start_date: '22-10-2021',
    end_date: '24-10-2021',
    location: 'Maddur',
  },
  {
    title: 'Automations',
    description: 'Build strategic funnels that will convert',
    map_url: 'https://goo.gl/maps/WVEfH9M162sM1Mrp6',
    start_date: '22-10-2021',
    end_date: '24-10-2021',
    location: 'Maddur',
  },
]

export default function Example() {
  const cards = products.map((product) => {
    return <CustomCard {...product}></CustomCard>
  })
  return (
    <React.Fragment>
      <div className='bg-gray-800 w-screen h-screen'>
        <NavBar />
        <div className='container m-auto'>{cards}</div>
      </div>
    </React.Fragment>
  )
}
