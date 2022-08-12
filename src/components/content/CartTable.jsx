import Table from 'react-bootstrap/Table';
import CartRowTable from './CartRowTable';
import { useState } from 'react';

const CartTable = ({cartItems}) => {

    return (
        <Table responsive="md" className='cart-table'>
            <thead>
                <tr>
                    <th></th>
                    <th colSpan={2}>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map((item, i) => (
                    <tr key={i}>
                        <CartRowTable 
                            item={item}
                        />
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default CartTable