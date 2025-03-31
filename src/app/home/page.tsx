import React from 'react'
import TabButton from '../ui/tab-button';

const Home = () => {

  const tabBox:{
    title: string;
  }[] =[
    {title:"Visão geral"},
    {title:"Análises"},
  ]

  return (
    <div className='flex-1 space-y-4 p-4 md:p-8 pt-6'>
      <div className="flex items-center justify-between">
        <h2 className='text-3xl font-medium'>Início</h2>
      </div>
      <div className="flex inline-flex space-4 bg-stone-200 rounded-md">
      {tabBox.map(item=>
        <div key={`tabBox-item-${item.title}`} className="flex inline-flex h-10 items-center justify-center p-1">
          <TabButton>
            <span>{item.title}</span> 
          </TabButton>
          </div>
        )}
      </div>
      {/* View */}
      <div className='grid grid-flow-col grid-rows-4 gap-4 bg-pink-400'>

      </div>
    </div>
  )
}

export default Home
