import { Card } from 'flowbite-react'
interface JournalProps {
  title: string
  description: string
  start_date: string
  end_date: string
  location: string
  map_url: string
}

export function CustomCard({
  title,
  description,
  start_date,
  end_date,
  location,
  map_url,
}: JournalProps) {
  return (
    <Card className='my-5 bg-slate-700 hover:shadow-md hover:shadow-gray-600 border-none hover:scale-[1.005] transition-transform'>
      <h1 className='text-bold'>{title}</h1>
      {description},{start_date},{end_date},{location},{map_url}
    </Card>
  )
}
