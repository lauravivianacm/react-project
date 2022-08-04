import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import dogFoodList from '../data/dogFoodList.json'
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    const { idItem } = useParams();

    useEffect(()=>{
        const itemDetailPromise = new Promise((resolve, reject) => {
            let item = dogFoodList.filter(obj => obj.id == idItem);
            if(item[0] != undefined) {
                setTimeout(function(){
                    resolve(item[0]);
                }, 2000);
            } else {    
                reject('No se encontró ningún artículo.');  
            }
        });

        itemDetailPromise
        .then((item) => {
            setSelectedItem(item);
            setShow(true);
        })
        .catch((error) => { 
            console.log("Error:" + error);
        })
    },[idItem])

    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-80w"
        >
            <Modal.Header closeButton className="bb-0 mb-2">
            </Modal.Header>
            <Modal.Body>
                <ItemDetail item={selectedItem}/>
            </Modal.Body>
        </Modal>
    )
}

export default ItemDetailContainer