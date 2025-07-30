import React, { useContext } from 'react'
import FormContext from '../../context/FormContext';

export default function BoxData() {
    const contextform= useContext(FormContext);
  return (
        <>
            <div className='container'>
                <h1 className='text-center'>نمایش دیتا ها</h1>
                <div className='row text-center'>
                    <div className='col-12 '>
                        <h2>سریال</h2>
                        <p>{contextform.serial}</p>
                    </div>
                    <div className='col-12 '>
                        <h2>مبلغ</h2>
                        <p>{contextform.amount} تومان</p>
                    </div>
                    <div className='col-12 '>
                        <h2>تاریخ</h2>
                        <p>{contextform.date} تومان</p>
                    </div>
                </div>
            </div>
        </>
    )
}
