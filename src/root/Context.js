//This is sceleton of Context

import React ,{ useState,createContext } from "react";
import { Data } from "./mock/mock";


export const DataContext = createContext();

export const Context =(props)=>{
  
    const [data, setData]= useState(Data);
  return(
     <DataContext.Provider value={[data, setData]}>
         {props.children}
     </DataContext.Provider>
   );
};