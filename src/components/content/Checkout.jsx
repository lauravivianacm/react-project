import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import CheckoutForm from './CheckoutForm';
import './checkout.css';
import { cartContext } from '../../context/CartContext';
import { useContext, useEffect, useState } from 'react';
import { addDoc, collection, deleteDoc, doc, getDoc, getFirestore, writeBatch } from 'firebase/firestore'
import Loader from '../layout/Loader';
import Order from './Order';
import NotificationToast from './NotificationToast';

const Checkout = () => {
    const[orderId, setOrderId] = useState(null);
    const[buyer, setBuyer] = useState({});
    const[component, setComponent] = useState('');
    const { cartItems, cartTotalValue, clear } = useContext(cartContext);
    const [showToast, setShowToast] = useState(false);

    const filterInfoItems = () => {
        let infoItems = [];
        cartItems.filter(product => {
            let infoItem = {id: product.id, nombre: product.nombre, precio: product.precio, quantity: product.quantity}
            infoItems = [...infoItems, infoItem];
        });
        return infoItems;
    }

    const placeOrder = (validated) => {
        if (validated) {
            setComponent(<Loader/>);
            const order = { 
                buyer,
                items: filterInfoItems(), 
                total: cartTotalValue
            };
            const db = getFirestore();
            batchWrite(db, order);
        }
    }

    const batchWrite = async (db, order) => {
        const batch = writeBatch(db);
        for (const product of order.items) {
            if (product.id != undefined) {
                const item = doc(db, 'items', product.id);
                const newStock = await getDoc(item).then((res) => {
                    if (res.data() != undefined) {
                        return res.data().stock - product.quantity;
                    }
                });
                batch.update(item, { stock: newStock });
            }
        }

        try {
            await batch.commit()
            .then(() => {
                const ordersCollection = collection(db, 'ordenes');
                addDoc(ordersCollection, order).then(({ id }) => {
                    setOrderId(id);
                });
            });
        } catch (error) {
            //console.log(error);
        }
    }

    useEffect(() => {
        if (orderId != null) {
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
                <CheckoutForm 
                    setBuyer={setBuyer}
                    cartItems={cartItems} 
                    cartTotalValue={cartTotalValue} 
                    placeOrder={placeOrder}
                />
            </Row>
        </Container>
    );
}
 
export default Checkout;