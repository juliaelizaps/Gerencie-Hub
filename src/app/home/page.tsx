"use client";

import React, { useState } from 'react'
import TabButton from '../components/ui/tab-button';
import View from './_partials/view';
import Analysis from './_partials/analysis';

type TabIds='view'|'analysis'

const Home = () => {

const [activeTab,setActiveTab]=useState<TabIds>('view');

  const tabBox:{
    title: string;
    id: TabIds;
  }[] =[
    {title:"Visão geral", id:'view'},
    {title:"Análises", id:'analysis'},
  ]
 const renderTab:Record<TabIds,React.JSX.Element>={'analysis': <Analysis/>, 'view': <View/>}

  return (
    <div className='flex-1 space-y-4 p-4 md:p-8 pt-6'>
      <div className="flex items-center justify-between">
        <h2 className='text-3xl font-medium'>Início</h2>
      </div>
      <div className="flex inline-flex space-4 bg-stone-200 rounded-md">
      {tabBox.map(item=>
        <div key={`tabBox-item-${item.title}`} className="flex inline-flex h-10 items-center justify-center p-1">
          <TabButton onClick={()=>setActiveTab(item.id)}>
            <span>{item.title}</span> 
          </TabButton>
          
          </div>
        )}
      </div>
      <hr className='text-stone-300'/>
      {renderTab[activeTab]}
    </div>
  )
}

export default Home
