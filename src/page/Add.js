import React from 'react'
import { Formik,  Form } from 'formik';
import axios from 'axios' 
import { useRef }  from 'react';
const Add = () => {

    if (localStorage.getItem('products') === null) {
        localStorage.setItem('products', JSON.stringify([]))
    }


    const apiEndPoint='http://localhost:3000/products'
    const formikRef = useRef(null);
    return (
       

            <Formik 

            innerRef={formikRef}
                initialValues={{
                    name: '',
                    price: '',
                    image: ''

                }} 

                onSubmit={(values, {resetForm} ) => {
                   axios.post(apiEndPoint,values)
                  resetForm()
              
                    //  resetForm({
                    //     values: ''
                    //  })
                  
                }}  >


                {({ handleSubmit, handleChange }) => (

                    <Form onSubmit={handleSubmit}>
                        <label htmlFor="name">Product Name</label>
            <input onChange={handleChange} type="text" name="name" value={formikRef.current?.values.name || ''} />
            <label htmlFor="price">Product Price</label>
            <input onChange={handleChange} type="number" name="price" value={formikRef.current?.values.price || ''} />
            <label htmlFor="image">Product Image</label>
            <input onChange={handleChange} type="url" name="image" value={formikRef.current?.values.image || ''} />

                         <button type='submit'> Submit</button>


                    </Form>
                )}
              
            </Formik>
       
    )
}

export default Add