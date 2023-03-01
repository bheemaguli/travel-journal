import { BottomGradient, TopGradient } from './layouts/BackGround/BackGround'
import { NavBar } from './layouts/NavBar/NavBar'

export default function Example() {
  return (
    <header className='bg-blue-100 bg-opacity-60 backdrop-blur-lg'>
      <TopGradient />
      <NavBar />
      <BottomGradient />
    </header>
  )
}
