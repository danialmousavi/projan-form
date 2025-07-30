import { Formik , Form, Field, ErrorMessage } from 'formik'
import React, { useContext } from 'react'
import FormValidationSchema from '../../configs/FormValidationSchema'
import FormContext from '../../context/FormContext'
export default function FormComponent() {
    const contextform=useContext(FormContext);

  return (
    <>
    <div className='container'>
        <h1 className='text-center my-4'>Form Component</h1>
        <Formik 
            initialValues={{ serial: '', amount: '', date: '' }}
            validationSchema={FormValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            contextform.setAllDatas([...contextform.allDatas, values]);
            }}

        >
            <Form>
                <div className='mb-3'>
                    <label htmlFor='serial' className='form-label'>شناسه صیادی</label>
                    <Field name='serial' type='text' className='form-control' />
                    <ErrorMessage name='serial' component='div' className='text-danger' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='amount' className='form-label'>مبلغ</label>
                    <Field name='amount' type="number" className='form-control' />
                    <ErrorMessage name='amount' component='div' className='text-danger' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='date' className='form-label'>تاریخ</label>
                    <Field name='date' type='date' className='form-control' />
                    <ErrorMessage name='date' component='div' className='text-danger' />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>

            </Form>
        </Formik>
    </div>
    </>
  )
}
