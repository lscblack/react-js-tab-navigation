import React from 'react'
import { useState } from 'react'
import Tab1 from '../comps/Tab1'
import Tab2 from '../comps/Tab2'
import Tab3 from '../comps/Tab3'

const HomePage = () => {
    const [activeTab,setActiveTab] = useState("Anathole")
  return (
    <>
      <div className="flex gap-4 p-2 bg-orange-50">
        <button onClick={()=>setActiveTab("Afanyu")}>Afanyu</button>
        <button onClick={()=>setActiveTab("Aline")}>Aline</button>
        <button onClick={()=>setActiveTab("Anathole")}>Anathole</button>
      </div>
      <div>
        {activeTab === "Afanyu" && <Tab1/>}
        {activeTab === "Aline" && <Tab2/>}
        {activeTab === "Anathole" && <Tab3/>}
      </div>
      <footer className="bg-gray-800 p-3 flex justify-between">
        <div>
            <h2 className='text-3xl text-white'>Stage Test</h2>
        </div>
        <div>
            <a href="" className="text-white p-2 block">Home</a>
            <a href="" className="text-white p-2 block">About</a>
            <a href="" className="text-white p-2 block">Contact</a>
        </div>
        <div className='text-white'>
            <h2>Contact address</h2>
            <p>123 Main St, City, State, Zip</p>
            <p>Phone: (123) 456-7890</p>
        </div>
      </footer>
    </>
  )
}

export default HomePage
