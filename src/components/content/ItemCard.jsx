import { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../content/itemCard.css'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { numberContext } from "../../context/NumberContext";

const ItemCard = ({item}) => {
    const { formatoMonedaTexto } = useContext(numberContext);

    return (
        <>
            <Card className='item-card'>
                <Link to={`/item/${item.id}`}>
                    <Card.Img variant="top" src={item.imagen} />
                </Link>
                <Card.Body>
                    <Card.Subtitle className='mt-2'>{item.categoria}</Card.Subtitle>
                    <Link to={`/item/${item.id}`}>
                        <Card.Title className='mt-1'>{item.nombre}</Card.Title>
                    </Link>
                    <Card.Text className='mt-1'>
                        $ { formatoMonedaTexto(item.precio) }
                        <br />
                        Unidades disponibles: {item.stock}
                        <br />
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemCard