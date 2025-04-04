import React from 'react'

const Analysis = () => {

  const gridItems:{
    title: string;
    subtitle:string;
  }[] =[
    {title:"Vendas Totais", subtitle:'% em relação ao mês passado'},
    
  ]

  return (
    <div>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 '>
        {gridItems.map(item=> 
          <div key={`grid-item-${item.title}`} className='border rounded-lg border-stone-200 text-black te items-center'>
          <div className='flex justify-start p-4 pb-0 '>
            <h3>{item.title}</h3>
          </div>
          <div className='flex justify-start p-4 pt-0 bg-green-200'>
            {item.subtitle}
          </div>
        </div>
        )}        
      </div>
    </div>
  )
}

export default Analysis
