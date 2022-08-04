import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../content/itemCard.css'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemCard = ({id, imagen, categoria, nombre, precio, stock}) => {
    
    return (
        <>
            <Card className='item-card'>
                <Link to={`/item/${id}`}>
                    <Card.Img variant="top" src={imagen} />
                </Link>
                <Card.Body>
                    <Card.Subtitle className='mt-2'>{categoria}</Card.Subtitle>
                    <Link to={`/item/${id}`}>
                        <Card.Title className='mt-1'>{nombre}</Card.Title>
                    </Link>
                    <Card.Text className='mt-1'>
                        {precio}
                        <br />
                        Unidades disponibles: {stock}
                        <br />
                    </Card.Text>
                    <ItemCount stock={stock} initial="1"/>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemCard