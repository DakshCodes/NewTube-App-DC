import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'

import LeftNavMenuitems from './LeftNavMenuitems'
import {categories} from '../utils/constants'
import {Context} from '../context/contextApi'


const LeftNav = () => {
    const {selectedCategory,setSelectedcategory} = useContext(Context)
  return (
    <div className='md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240] md:translate-x-0 transition-all'>
      <div className='flex px-5 flex-col'>
          {
            categories.map((item) =>{
                return (
                    <>
                    <LeftNavMenuitems 
                     text={item.type === "home" ? "Home" : item.name}
                     icon = {item.icon}
                     action = {()=>{}}
                     className={}
                    />
                    </>
                )
            })
          }
      </div>
    </div>
  )
}

export default LeftNav
