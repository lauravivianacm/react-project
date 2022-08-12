import ItemCount from "./ItemCount"
import { useContext, useEffect, useState } from "react";
import { cartContext } from '../../context/CartContext';
import { BsFillTrashFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

const CartRowTable = ({item}) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const [subTotal, setSubTotal] = useState(0);
    const { updateQuantityItem, removeItem } = useContext(cartContext);

    const calcularTotalItem = (precio, quantity) => {
        let total = (precio*quantity);
        setSubTotal(total.toFixed(2));
    }

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

    useEffect(() => {
        calcularTotalItem(item.precio, quantity);
        updateQuantityItem(item.id, quantity);
    },[quantity])

    return (
        <>
            <td className='text-center'>
                <Button variant="outline-dark" onClick={() => removeItem(item.id)}>
                    <BsFillTrashFill/>
                </Button>
            </td>
            <td className='small-row-img'>
                <img src={item.imagen}/>
            </td>
            <td>
                {item.nombre}
            </td>
            <td>
                $ {formatoMonedaTexto(item.precio)}
            </td>
            <td>
                <ItemCount stock={item.stock} initial={item.quantity} setQuantity={setQuantity}/>
            </td>
            <td>
                $ {formatoMonedaTexto(subTotal)}
            </td>
        </>
    )
}

export default CartRowTable