import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ItemCard from './ItemCard';

const ItemList = ({datos}) => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {datos.map((data, i) => (
                <Col key={i}>
                    <ItemCard 
                        id={data.id}
                        imagen={data.imagen} 
                        categoria={data.nombre_categoria_comida} 
                        nombre={data.nombre}
                        precio={data.precio} 
                        stock={data.stock}
                    />
                </Col>
            ))}
        </Row>
    )
}

export default ItemList