import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import CheckoutForm from './CheckoutForm';
import CheckoutTable from './CheckoutTable';
import './checkout.css';
import { cartContext } from '../../context/CartContext';
import { useContext, useEffect, useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import Loader from '../layout/Loader';
import Order from './Order';
import NotificationToast from './NotificationToast';

const Checkout = () => {
    const[validated, setValidated] = useState(true);
    const[orderId, setOrderId] = useState(null);
    const[buyer, setBuyer] = useState({});
    const[component, setComponent] = useState('');
    const { cartItems, cartTotalValue, clear } = useContext(cartContext);
    const [showToast, setShowToast] = useState(false);

    const placeOrder = () => {
        console.log(buyer);
        if (validated) { //El form se debe validar
            setComponent(<Loader/>);
            const order = { 
                buyer,
                items: cartItems, 
                total: cartTotalValue
            };
            const db = getFirestore();
            const ordersCollection = collection(db, 'ordenes');
            addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
        }
    }

    useEffect(() => {
        if (orderId != null && validated) {
            setComponent(<Order orderId={orderId}/>);
            setShowToast(true);
            clear();
        }
    },[orderId])

    if (component != '') {
        return ( 
            <Container className='mt-2'>
                <NotificationToast show={showToast} setShow={setShowToast} message='¡Orden generada satisfactoriamente!' classToast='bg-green-toast'/>
                <Row>
                    {component}
                </Row>
            </Container>
        );
    }

    return (
        <Container className='mt-2'>
            <Row>
                {/*component*/}
                <CheckoutForm setBuyer={setBuyer}/>
                <CheckoutTable 
                    cartItems={cartItems} 
                    cartTotalValue={cartTotalValue} 
                    placeOrder={placeOrder}
                />
            </Row>
        </Container>
    );
}
 
export default Checkout;