import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CardProduct = (props) => {
    const { img, id, name, price, } = props;
    return (


        <Card style={{ width: '18rem' }}>
            <Link to={`/productdetail/${id}`}>
                <Card.Img variant="top" src={img} />
            </Link>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {price}
                </Card.Text>
            </Card.Body>
        </Card>


    )
}

export default CardProduct
