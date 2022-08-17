import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import dogFoodList from '../data/dogFoodList.json'
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore' 

const ItemDetailContainer = () => {
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    const { idItem } = useParams();

    useEffect(()=>{
        const itemDetailPromise = new Promise((resolve, reject) => {
            const db = getFirestore();
            const item = doc(db, 'items', idItem);
            getDoc(item).then((res) => {
                if (res.data() != undefined) {
                    setSelectedItem({id: res.id, ...res.data()});
                    resolve(true);
                } else {    
                    reject('No se encontró ningún artículo.');  
                }
            });
        });

        itemDetailPromise
        .then((boolShow) => {
            setShow(boolShow);
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