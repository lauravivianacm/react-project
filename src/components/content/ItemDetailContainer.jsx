import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import dogFoodList from '../data/dogFoodList.json'
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({idSelectedItem}) => {
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    const itemDetailPromise = new Promise((resolve, reject) => {
        let item = dogFoodList.filter(obj => obj.id == idSelectedItem);
        if(item[0] != undefined) {
            setTimeout(function(){
                resolve(item[0]);
            }, 2000);
        } else {    
            reject('No se encontró ningún artículo.');  
        }
    });

    useEffect(()=>{
        itemDetailPromise
        .then((item) => {
            setSelectedItem(item);
            setShow(true);
        })
        .catch((error) => { 
            console.log("Error:" + error);
        })
    },[])

    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-80w"
        >
            <Modal.Header closeButton className="bb-0 mb-2">
                {/*<Modal.Title>
                    Custom Modal Styling
                </Modal.Title>*/}
            </Modal.Header>
            <Modal.Body>
                <ItemDetail item={selectedItem}/>
            </Modal.Body>
        </Modal>
    )
}

export default ItemDetailContainer