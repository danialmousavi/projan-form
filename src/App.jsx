import React, { useState } from 'react'
import Form from './components/Form/Form'
import FormContext from './context/FormContext'
import BoxData from './components/DataBox/BoxData';
export default function App() {
  const [serial,setSerial]=useState("");
  const [amount,setAmount]=useState("");
  const [date,setDate]=useState("");
  const [allDatas,setAllDatas]=useState([]);
  const [rerenderComp,]=useState(0);
  return (
    <>
    <FormContext.Provider value={{
      serial,
      setSerial,
      amount,
      setAmount,
      date,
      setDate,
      allDatas,
      setAllDatas,

    }}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <Form/>
          </div>
          <div className='col-12 col-md-6'>
               <BoxData/>
          </div>
         
        </div>
      </div>
    </FormContext.Provider>
    </>
  )
}
