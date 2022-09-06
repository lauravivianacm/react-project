import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Loader from '../layout/Loader';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore' 

const ItemListContainer = () => {
    const[datos, setDatos] = useState([]);
    const[component, setComponent] = useState('');
    const { idCategoria } = useParams();

    useEffect(()=>{
        const db = getFirestore();
        let itemsCollection = collection(db, 'items');
        if (idCategoria != undefined) {
            itemsCollection = query(itemsCollection, where('id_categoria_comida','==',idCategoria));
        }

        getDocs(itemsCollection).then((res) => {
            if (res.size > 0) {
                let listaItems = res.docs;
                setDatos(listaItems.map((producto) => {
                    return {id: producto.id, ...producto.data()}
                }));
            }
        });

    },[idCategoria])

    useEffect(()=>{
        const dataPromise = new Promise((resolve, reject) => {
            setComponent(<Loader/>);

            const condition = datos.length > 0;   
            if(condition) {
                resolve(datos);
            } else {    
                reject('No se encontró ningún artículo.');  
            }
        });

        dataPromise
        .then((data) => {
            setComponent(<ItemList  datos={data}/>); 
        })
        .catch((error) => { 
            //console.log("Error:" + error);
        })

    },[datos])

    return (
        <Container className='mt-5'> {/*Flex by default, fluid to expand*/}
            {component}
        </Container>
    )
}

export default ItemListContainer