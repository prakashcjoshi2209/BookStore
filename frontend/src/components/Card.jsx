import React from 'react'

const Card = ({ data }) => {
  return (
    <div className='mt-4 my-3 p-3'>
      <div className="card w-72 shadow-xl hover:scale-105 duration-200 dark:border">
        <figure className="h-48 overflow-hidden flex items-center justify-center bg-white">
          <img
            src={data.image}
            alt={data.title}
            className="object-contain h-full w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-base font-semibold">
            {data.name}
            <div className="badge badge-secondary">{data.category}</div>
          </h2>
          <p className="text-sm text-gray-600">{data.title}</p>
          <div className="card-actions justify-between items-center mt-2">
            <div className="badge badge-outline">${data.price}</div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
