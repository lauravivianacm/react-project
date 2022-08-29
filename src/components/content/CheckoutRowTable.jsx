import { useContext, useEffect, useState } from "react";
import { numberContext } from "../../context/NumberContext";

const CheckoutRowTable = ({item}) => {
    const [subTotal, setSubTotal] = useState(0);
    const { formatoMonedaTexto } = useContext(numberContext);

    useEffect(() => {
        let total = (item.precio*item.quantity);
        setSubTotal(total.toFixed(2));
    },[])

    return (
        <>
            <td>
                {item.nombre} <b>x {item.quantity}</b>
            </td>
            <td>
                $ {formatoMonedaTexto(subTotal)}
            </td>
        </>
    );
}
 
export default CheckoutRowTable;