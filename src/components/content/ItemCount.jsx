import { useContext, useEffect, useState } from 'react';
import {BsPlusLg, BsDashLg} from "react-icons/bs"
import '../content/itemCount.css'

const ItemCount = ({stock, initial, setQuantity}) => {
    const [numProducts, setNumProducts] = useState(Number(initial));
    const [disabledAdd, setDisabledAdd] = useState('');
    const [disabledReduce, setDisabledReduce] = useState('disabled');
    const minProducts = 1;

    const onAdd = () => {
        if (numProducts < stock) {
            setNumProducts(numProducts + 1);
            setDisabledAdd('');
        }else{
            setDisabledAdd('disabled');
        }

        numProducts >= minProducts ? setDisabledReduce('') : setDisabledReduce('disabled');
    }

    const onReduce = () => {
        if (numProducts > minProducts) {
            setNumProducts(numProducts - 1);
            setDisabledReduce('');
        }else{
            setDisabledReduce('disabled');
        }
        
        numProducts < stock ? setDisabledAdd('') : setDisabledAdd('disabled');
    }

    useEffect(() => {
        setQuantity(numProducts);
    },[numProducts])

    return (
        <div className='bg-grey d-flex justify-content-center quantity-container'>
            <button className='bg-grey font-semibold quantity-button ml-auto' onClick={onReduce} disabled={disabledReduce}>
                <BsDashLg />
            </button>
            <span className='font-semibold flex quantity-text'>{numProducts}</span>
            <button className='bg-grey font-semibold quantity-button mr-auto' onClick={onAdd} disabled={disabledAdd}>
                <BsPlusLg />
            </button>
        </div>
    )
}

export default ItemCount