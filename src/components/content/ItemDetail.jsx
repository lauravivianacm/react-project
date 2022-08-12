import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../content/itemDetail.css'
import Stack from 'react-bootstrap/Stack';
import ItemCount from '../content/ItemCount'
import { BsFillCartPlusFill, BsCart4 } from "react-icons/bs"
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';
import ReturnHomeButton from './ReturnHomeButton';

const ItemDetail = ({item}) => {
    const [addedToCart, setAddedToCart] = useState(false);
    const [quantity, setQuantity] = useState();
    const { addItem } = useContext(cartContext);

    const onAdd = () => {
        setAddedToCart(true);
        addItem(item, quantity);
    }

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
                            {!addedToCart
                                ?   <>
                                        <ItemCount stock={item.stock} initial="1" setQuantity={setQuantity}/>
                                        <button className='item-detail-button bg-green-md' onClick={onAdd}>
                                            <BsFillCartPlusFill/> Añadir al carrito
                                        </button>
                                    </>
                                :   <>
                                        <Link to={`/cart`} className='item-detail-button bg-green-md text-decoration-none'>
                                            <BsCart4/> Ver carrito
                                        </Link>
                                        <ReturnHomeButton label='Seguir comprando'/>
                                    </>
                            }
                        </Stack>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail