import React from 'react'

const Home = () => {
  return (
    <div className='flex-1 space-y-4 p-4 md:p-8 pt-6'>
      <div className="flex items-center justify-between">
        <h2 className='text-3xl font-medium'>Início</h2>
      </div>
      <div className="space-4 bg-red-300">
        <div className="flex inline-flex h-10 items-center justify-center rounded-md p-1">
          <button className='flex inline-flex items-center justify-center p-4 text-1xl bg-orange-400'>
            Visão geral
          </button>
          <button className='flex inline-flex items-center justify-center p-4 text-1xl bg-orange-200'>
            Análises
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
