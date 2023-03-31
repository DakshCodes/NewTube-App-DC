import React,{ createContext,useState,useEffect } from "react";
import {fetchDatafromApi} from '../utils/api';

export const Context = createContext();

const AppContext = (props)=>{
  const [Loading,setLoading] = useState(false)
  const [Searchresult,setSearchresult] = useState(false)
  const [selectCategories,setselectCategories] = useState('New')
  const [mobileMenu,setmobileMenu] = useState(false)
  useEffect(() => {
    fetchSelectedCategoriedata(selectCategories);
  }, []); 

  const fetchSelectedCategoriedata = (query)=>{

  }

  return (
    <Context.Provider value={ {
        Loading,
        setLoading,
        Searchresult,
        setSearchresult,
        selectCategories,
        setselectCategories,
        mobileMenu,
        setmobileMenu
    }}>
    {props.children}
    </Context.Provider>
  )

}
