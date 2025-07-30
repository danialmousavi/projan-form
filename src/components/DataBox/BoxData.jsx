import React, { useContext, useEffect } from 'react'
import FormContext from '../../context/FormContext';

export default function BoxData() {
    const contextform= useContext(FormContext);
    console.log(contextform);

  return (
        <>
            <div className='container'>
                <h1 className='text-center'>نمایش دیتا ها</h1>
                <div className='row text-center'>
                        {contextform.allDatas.map((data,index)=>(
                    <div className='alert alert-danger' key={index}> 
                                <div className='col-12 '>
                                        <h2>سریال</h2>
                                        <p>{data.serial}</p>
                                </div>
                                <div className='col-12 '>
                                        <h2>مبلغ</h2>
                                        <p>{data.amount} تومان</p>
                                </div>
                                <div className='col-12 '>
                                        <h2>تاریخ</h2>
                                        <p>{data.date} تومان</p>
                                </div>
                    </div>
                        ))}    
                </div>
            </div>
        </>
    )
}
