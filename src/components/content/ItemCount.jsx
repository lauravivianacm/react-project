import { useState } from 'react';
import {BsPlusLg, BsDashLg} from "react-icons/bs"
import '../content/itemCount.css'

const ItemCount = ({stock, initial}) => {
    const [numProducts, setNumProducts] = useState(Number(initial));
    const [disabledAdd, setDisabledAdd] = useState('');
    const [disabledReduce, setDisabledReduce] = useState('disabled');


    const onAdd = () => {
        if (numProducts < stock) {
            setNumProducts(numProducts + 1);
            setDisabledAdd('');
        }else{
            setDisabledAdd('disabled');
        }

        numProducts >= initial ? setDisabledReduce('') : setDisabledReduce('disabled');
    }

    const onReduce = () => {
        if (numProducts > initial) {
            setNumProducts(numProducts - 1);
            setDisabledReduce('');
        }else{
            setDisabledReduce('disabled');
        }
        
        numProducts < stock ? setDisabledAdd('') : setDisabledAdd('disabled');
    }

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