import Card from 'react-bootstrap/Card';
import '../content/itemCard.css'
import ItemCount from './ItemCount';

const ItemCard = ({imagen, categoria, nombre, precio, stock}) => {
    return (
        <Card className='item-card'>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {categoria}
                    <br />
                    {precio}
                    <br />
                    Unidades disponibles: {stock}
                    <br />
                </Card.Text>
                <ItemCount stock={stock} initial="1"/>
            </Card.Body>
        </Card>
    )
}

export default ItemCard