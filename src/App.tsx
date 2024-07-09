import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import heroImg from "./assets/heroImg.png"
import data from './data'
import Card from './components/Card'

const dataToDisplay = data.map(function (item) {
  return (
    <div key={item.id} className='m-4'>
      <section className='w-full bg-purple-700 text-white flex justify-between items-center p-3 rounded-md '>
        <span className='font-bold text-2xl'>{item.sectionTitle}</span> <span className='cursor-pointer'>See all</span>
      </section>
      <div className='flex flex-wrap items-center justify-center gap-3 m-3'>
        {item.items.map(function (cardItem) {
          return (
            <div key={cardItem.id}>
              <Card cardData={cardItem} />
            </div>
          )
        })}
      </div>
    </div>
  )
})
const App: React.FC = function () {

  return (
    <>
      <div>
        <div className="flex w-full py-3 px-3">
          <label className='flex items-center gap-1 w-full searchIcon focus-within:border-2 focus-within:border-gray-600 rounded-md p-2'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='cursor-pointer' />
            <input type="text" placeholder='Search for products' className='w-full focus:outline-none p-2' />
          </label>
        </div>
        <div className='w-full h-auto'>
          <img src={heroImg} alt="Hero Image" className='w-full h-auto' />
          {dataToDisplay}
        </div>
      </div>
    </>
  )
}

export default App
