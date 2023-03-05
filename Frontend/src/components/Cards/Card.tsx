import { Card } from 'flowbite-react'
import { React } from 'react'
interface JournalProps {
  title: string
  description: string
  start_date: string
  end_date: string
  location: string
  map_url: string
  img_name: string
}

export function CustomCard({
  title,
  description,
  start_date,
  end_date,
  location,
  map_url,
  img_name,
}: JournalProps) {
  return (
    <div>
      <Card className='my-5 bg-slate-700 shadow-none hover:shadow-md hover:shadow-gray-600 border-none hover:scale-[1.005] transition-transform scrollbar-hide'>
        <div className='flex-row flex lg:flex-nowrap md:flex-wrap sm:flex-wrap'>
          <img
            src={'./travel-pics/' + img_name}
            className='lg:basis-1/6 md:basis-1/2 sm:basis-1/2 object-cover h-80 w-10 rounded-lg hover:shadow-md hover:shadow-cyan-100'
          ></img>
          <div className='lg:basis-5/6 md:basis-1/2 sm:basis-1/2 ml-5'>
            <div className='flex flex-col'>
              <p className='text-gray-800'>
                <span className='inline-flex items-baseline mr-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='w-4 h-4 text-red-600'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                    />
                  </svg>
                </span>
                {location}
                <span className='ml-5'>
                  <a href={map_url} className='text-gray-500 underline underline-offset-4'>
                    View on Google Maps
                  </a>
                </span>
              </p>
              <h1 className='text-5xl font-bold text-gray-700 mt-3 mb-7'>{title}</h1>
              <h3 className='text-lg font-bold text-gray-900'>
                {start_date} - {end_date}
              </h3>
              {description}
            </div>
          </div>
        </div>
      </Card>
      <hr></hr>
    </div>
  )
}
