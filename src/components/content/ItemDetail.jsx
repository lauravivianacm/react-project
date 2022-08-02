import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../content/itemDetail.css'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import ItemCount from '../content/ItemCount'
import {BsFillCartPlusFill} from "react-icons/bs"

const ItemDetail = ({item}) => {
    return (
        <Container>
            <Row>
                <Col xs={3} md={2} className='small-item-img-group'>
                    <div className='small-item-img'>
                        <img src={item.imagen}/>
                    </div>
                    <div className='small-item-img'>
                        <img src={item.imagen}/>
                    </div>
                    <div className='small-item-img'>
                        <img src={item.imagen}/>
                    </div>
                </Col>
                <Col xs={12} md={5}>
                    <div className='item-img'>
                        <img src={item.imagen}/>
                    </div>
                </Col>
                <Col xs={12} md={5}>
                    <div className='pb-5 detail-text-nombre'>
                        <h2>{item.nombre}</h2>
                        <div className='flex items-center mt-4'>
                            <div className='detail-text-precio'>
                                ${item.precio}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6>Unidades disponibles: {item.stock}</h6>
                    </div>
                    <div className="pb-2"></div>
                    <div className='pt-1'>
                        <Stack gap={2} className="col-md-12 mx-auto">
                            <ItemCount stock={item.stock} initial="1"/>
                            <button className='add-to-cart-button bg-green-md'>
                                <BsFillCartPlusFill/> Añadir al carrito
                            </button>
                        </Stack>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail