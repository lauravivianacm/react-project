import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ItemCard from './ItemCard';

const ItemList = ({datos}) => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {datos.map((data, i) => (
                <Col key={i}>
                    <ItemCard 
                        item={data}
                    />
                </Col>
            ))}
        </Row>
    )
}

export default ItemList