import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartTable from './CartTable';
import '../content/carts.css';
import { useContext, useState } from 'react';
import { cartContext } from '../../context/CartContext';
import CartEmpty from './CartEmpty';
import { BsFillTrashFill } from "react-icons/bs";
import CartTotals from './CartTotals';

const Cart = () => {
    const { cartItems, clear } = useContext(cartContext);

    return (
        <Container className='mt-5'>
            <Row>
                {cartItems.length > 0
                    ?   <>
                            <Col xs={12} md={8}>
                                <CartTable cartItems={cartItems}/>
                                <div className='clean-cart-button mt-3'>
                                    <Button variant="outline-dark" onClick={() => clear()}>
                                        <BsFillTrashFill/> Limpiar carrito
                                    </Button>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <CartTotals/>
                            </Col>
                        </>
                    :   <CartEmpty/>
                }
            </Row>
        </Container>
    )
}

export default Cart