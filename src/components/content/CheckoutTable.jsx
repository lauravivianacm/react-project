import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import CheckoutRowTable from './CheckoutRowTable';
import { Link } from 'react-router-dom';

const CheckoutTable = ({cartItems, cartTotalValue, placeOrder}) => {

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