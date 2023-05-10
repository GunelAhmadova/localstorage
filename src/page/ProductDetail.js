import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetail = () => {

    const [product, Setproduct] = useState();
    const { id } = useParams();

    console.log(id);

    const getData = async () => {
        const getid = await axios.get(`http://localhost:3000/products/${id}`)

        Setproduct(getid.data)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <h1>{product && product.name}</h1>
            <h1>{product && product.price}</h1>
            <h1> <img width='200' src= {product&&product.image}/> </h1>

        </div>
    )
}

export default ProductDetail