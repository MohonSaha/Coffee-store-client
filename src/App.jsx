import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import Header from './pages/Header/Header'
import CoffeeCard from './pages/CoffeeCard/CoffeeCard'

function App() {

  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <>
      <Header></Header>
     

      <div className='md:mx-20 mx-10 md:my-12'>
        <h1 className='text-center text-4xl mb-10'>Our Popular Products</h1>
        <div className='grid md:grid-cols-2 gap-4'>
          {

            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>)
          }
        </div>
      </div>
    </>
  )
}

export default App
