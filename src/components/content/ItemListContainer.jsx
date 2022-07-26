import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ItemCard from './ItemCard';

const ItemListContainer = ({datos, categoria}) => {
    return (
        <Container className='mt-5'>
            <Row xs={1} md={2} lg={3} className="g-4">
                {datos.map((data, i) => (
                    <Col key={i}>
                        <ItemCard 
                            imagen={data.imagen} 
                            categoria={categoria} 
                            nombre={data.nombre} 
                            precio={data.precio} 
                            stock={data.stock}
                        />
                    </Col>
                ))}
                </Row>
        </Container>
    )
}

export default ItemListContainer