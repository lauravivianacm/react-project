import Card from 'react-bootstrap/Card';
import '../content/itemCard.css'

const ItemCard = ({imagen, categoria, nombre, precio}) => {
    return (
        <Card className='item-card'>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {categoria}
                    <br />
                    {precio}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ItemCard