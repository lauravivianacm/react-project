import ItemCount from "./ItemCount"
import { useContext, useEffect, useState } from "react";
import { cartContext } from '../../context/CartContext';
import { numberContext } from "../../context/NumberContext";
import { BsFillTrashFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

const CartRowTable = ({item}) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const [subTotal, setSubTotal] = useState(0);
    const { updateQuantityItem, removeItem } = useContext(cartContext);
    const { formatoMonedaTexto } = useContext(numberContext);

    const calcularTotalItem = (precio, quantity) => {
        let total = (precio*quantity);
        setSubTotal(total.toFixed(2));
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