import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import CheckoutRowTable from './CheckoutRowTable';
import { Link } from 'react-router-dom';
import { numberContext } from "../../context/NumberContext";
import { useContext } from 'react';

const CheckoutTable = ({cartItems, cartTotalValue, placeOrder}) => {
    const { formatoMonedaTexto } = useContext(numberContext);

    return (
        <Col sm={12} md={5} lg={5}>
            <div className='billing-table mt-5'>
                <h3>Tu orden</h3>
                <div className='div-order'>
                    <Table responsive="md" className='table-order'>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, i) => (
                                <tr key={i}>
                                    <CheckoutRowTable 
                                        item={item}
                                    />
                                </tr>
                            ))}
                            <tr>
                                <td><h5>Total</h5></td>
                                <td className='total'>
                                    <strong>$ { formatoMonedaTexto(cartTotalValue) }</strong>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className='checkout-container mb-3'>
                        <a className='checkout-button text-decoration-none' onClick={placeOrder}> Realizar pedido </a>
                    </div>
                </div>
            </div>
        </Col>
    );
}
 
export default CheckoutTable;