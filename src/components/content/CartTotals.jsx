import Table from 'react-bootstrap/Table';
import { cartContext } from '../../context/CartContext';
import { useContext } from "react";

const CartTotals = () => {
    const { cartTotalValue } = useContext(cartContext);

    const formatoMonedaTexto = (valor) => {
        /*TIENE EN CUENTA LOS VALORES DECIMALES*/
        valor = cambiarComaDecimal(valor.toString());
        var num = valor.replace(/\./g, '');
        num = num.replace(/[^0-9^,^-]/g, "");
        if (valor.lastIndexOf(',') != (valor.length - 1)) {
            num = num.replace(/\,/g, '.');
        }
    
        if (!isNaN(num)) {
            /*CONVIERTE EL DECIMAL EN . */
            num = num.toString().replace('.', ',');
            num = num.toString().split('').reverse().join('').split(',');
    
            if (num.length > 1) {
                if(num[1].split('-').length>1){
                    num[1] = num[1].split('-');
                    num[1][0]=num[1][0].replace(/(?=\d*\.?)(\d{3})/g, '$1.').split('').reverse().join('').replace(/^[\.]/, '').split('').reverse().join('');
                    num[1] = num[1].join('-')
                }else{
                    num[1] = num[1].replace(/(?=\d*\.?)(\d{3})/g, '$1.').split('').reverse().join('').replace(/^[\.]/, '').split('').reverse().join('');
                } 
                num = num.join(',')
    
            } else {
                num = num[0].replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            }
            //num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            num = num.split('').reverse().join('').replace(/^[\.]/, '');
            return  num;
        } else {
            if (valor.lastIndexOf(',') != (valor.length - 1)) {
                return valor.replace(/[^\d\.|^\d\,]*/g, '');
            }
        }
    }

    const cambiarComaDecimal = (valor) => {
        return valor.toString().replace(/\./g, ',');
    }

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
        </div>
    )
}

export default CartTotals