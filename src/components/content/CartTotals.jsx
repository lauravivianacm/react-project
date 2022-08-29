import Table from 'react-bootstrap/Table';
import { cartContext } from '../../context/CartContext';
import { numberContext } from "../../context/NumberContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';

const CartTotals = () => {
    const { cartTotalValue } = useContext(cartContext);
    const { formatoMonedaTexto } = useContext(numberContext);

    return (
        <div className='totals-container'>
            <h2>Total Carrito</h2>
            <Table className='table-shops'>
                <tbody>
                    <tr>
                        <th className='subtotal-subtitle'>Subtotal</th>
                        <td className='subtotal'>
                            <strong>$ { formatoMonedaTexto(cartTotalValue) }</strong>
                        </td>
                    </tr>
                    <tr>
                        <th className=''>Costo envío</th>
                        <td className=''>
                            $ 0
                        </td>
                    </tr>
                    <tr>
                        <th className=''>Dirección envío</th>
                        <td className=''>
                            N.A
                        </td>
                    </tr>
                    <tr>
                        <th className='total-subtitle'>Total</th>
                        <td className='total'>
                            <strong>$ { formatoMonedaTexto(cartTotalValue) }</strong>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div className='checkout-container'>
                <Link to={`/checkout`} className='checkout-button text-decoration-none'>
                    Terminar mi compra
                </Link>
            </div>
        </div>
    )
}

export default CartTotals