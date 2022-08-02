import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../content/itemCard.css'
import ItemCount from './ItemCount';
import ItemDetailContainer from './ItemDetailContainer';

const ItemCard = ({id, imagen, categoria, nombre, precio, stock}) => {
    return (
        <>
            <Card className='item-card'>
                <a href="">
                    <Card.Img variant="top" src={imagen} />
                </a>
                <Card.Body>
                    <Card.Subtitle className='mt-2'>{categoria}</Card.Subtitle>
                    <Card.Title className='mt-1'>{nombre}</Card.Title>
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