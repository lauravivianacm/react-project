import Col from 'react-bootstrap/Col';
import ReturnHomeButton from './ReturnHomeButton';
import EmptyCartImg from '../../images/layout/carrito_img.png';

const CartEmpty = () => {
    return (
        <>
            <Col xs={12} md={12} lg={8} className='empty-cart-img'>
                <img src={EmptyCartImg} className='empty-cart-img'/>
            </Col>
            <Col xs={12} md={12} lg={4} className='empty-cart-text'>
                <div className="pb-2"></div>
                <div className='m-5'>
                    <h3>¡Tu carrito está completamente vacío!</h3>
                </div>
                <ReturnHomeButton label='Regresar al comercio'/>
            </Col>
        </>
    )
}

export default CartEmpty