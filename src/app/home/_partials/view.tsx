import formatCurrency from '@/utils/formatCurrency';
import React from 'react'

const View = () => {
  const gridItems:{
    title: string;
    values: number;
    subtitle:string;
    
  }[] =[
    {title:"Vendas Totais", values: 400.1, subtitle:'% em relação ao mês passado'},
    {title:"Pedidos" , values: 400.1,subtitle:'% em relação ao mês passado'},
    {title:"Lanches totais" , values: 400.1, subtitle:'% em relação ao mês passado'},
    {title:"Ticket Médio" , values: 400.1, subtitle:'% em relação ao mês passado'}
  ]


  return (
    <div>
      {/* grid top */}
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {gridItems.map(item=> 
          <div key={`grid-item-${item.title}`} className='border rounded-lg border-stone-200 text-black items-center'>
          <div className='flex justify-start p-4 pb-0 '>
            <h3>{item.title}</h3>
          </div>
          <div className='flex justify-start p-4 pt-0 font-bold pt-2'>
            {formatCurrency(item.values)}
          </div>
          <div className='flex justify-start p-4 pt-0 text-left'>
            {item.subtitle}
          </div>
        </div>
        )}        
      </div>
      {/* grid bottom */}
      <div className='grid gap-2 md:grid-cols-1 lg:grid-cols-2 mt-4'>
        <div className='border rounded-lg border-stone-200 text-black items-center'>
          <div>
            <h3 className="flex justify-start p-4 pt-0 text-[24px] font-bold text-left">
              Vendas semanais
            </h3>
          </div>
        </div>
        <div className='border rounded-lg border-stone-200 text-black items-center'>
          <div>
            <h3 className="flex justify-start p-4 pt-0 text-[24px] font-bold text-left">
              Pedidos Recentes
            </h3>
          </div>
          <div>
            <p>Você recebeu [X] pedidos hoje</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default View
