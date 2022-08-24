import Col from 'react-bootstrap/Col';
import ReturnHomeButton from './ReturnHomeButton';
import CheckoutImg from '../../images/layout/checkout_img.png';

const Order = ({orderId}) => {
    return (
        <>
            <Col xs={12} md={12} lg={12} className='empty-cart-img'>
                <img src={CheckoutImg} className='empty-cart-img'/>
            </Col>
            <Col xs={12} md={12} lg={12} className='empty-cart-text'>
                <div className="pb-2"></div>
                <div className='m-5'>
                    <h3>¡Muchas gracias por tu compra!</h3>
                    <p>El ID de tu orden es <b>{orderId}</b></p>
                </div>
                <ReturnHomeButton label='Regresar al comercio'/>
            </Col>
        </>
    );
}
 
export default Order;