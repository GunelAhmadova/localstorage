import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'

const Products = (props) => {

  const [products, setProducts] = useState([])
  const apiEndPoint = 'http://localhost:3000/products'

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(apiEndPoint)
      setProducts(response.data)
    }
    getData()
  }, [])

  return ( 
    <div className="container">

    <div className='row'>
      {products && products.map(product => (
        <Card
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          img={product.image}
          p />
      ))}
    </div>
    </div>
  )
}

export default Products
