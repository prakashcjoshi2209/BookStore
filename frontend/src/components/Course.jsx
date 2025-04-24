import React from 'react'
import Card from './Card'
import list from "../../public/list.json";
import { Link } from 'react-router-dom';

const Course = () => {
  return (
    <>
     
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white'>
          <div className='mt-16 pt-20 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl '>We're delighted to have you <span className='text-pink-500'> Here! :)</span> </h1>
            <p className='mt-12'>Books are more than just pages—they are portals to other worlds, ideas, and adventures. Whether it's unraveling mysteries with Sherlock Holmes or exploring societal truths in 1984, every book holds a treasure of wisdom. Classic novels like Pride and Prejudice stir emotions, while thrillers like Dracula send chills down your spine. From fantasy to philosophy, our collection of books caters to every curious mind. Let a good book be your best companion—anytime, anywhere.</p>
            <Link to="/">

            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
            
            </Link>
          </div>


      <div className='mt-12 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4'>
        {
          list.map((data)=>(
            <Card key={data.id} data={data}/>

          ))
        }
      </div>

     </div>
 

    </>
  )
}

export default Course