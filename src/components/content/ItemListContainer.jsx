import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Loader from '../layout/Loader';
import ItemList from './ItemList';
import dogFoodList from '../data/dogFoodList.json'

const ItemListContainer = ({categoria}) => {
    const[datos, setDatos] = useState([]);

    const dataPromise = new Promise((resolve, reject) => { 
        const condition = dogFoodList.length > 0;   
        if(condition) {
            setTimeout(function(){
                resolve(dogFoodList);
            }, 2000);
        } else {    
            reject('No se encontró ningún artículo.');  
        }
    });

    const getData = function() {
        dataPromise
        .then((data) => {
            setDatos(data);
        })
        .catch((error) => { 
            console.log("Error:" + error);
        })
    }
     
    useEffect(()=>{
        getData();
    },[])

    return (
        <Container className='mt-5'>
            {datos.length > 0
                ? <ItemList  datos={datos} categoria={categoria}/>
                : <Loader/>
            }
        </Container>
    )
}

export default ItemListContainer