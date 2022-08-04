import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Loader from '../layout/Loader';
import ItemList from './ItemList';
import dogFoodList from '../data/dogFoodList.json'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    //const[datos, setDatos] = useState([]);
    const[component, setComponent] = useState('');
    const { idCategoria } = useParams();
     
    useEffect(()=>{
        const dataPromise = new Promise((resolve, reject) => {
            setComponent(<Loader/>); 
            const condition = dogFoodList.length > 0;   
            if(condition) {
                setTimeout(function(){
                    if (!idCategoria) {
                        resolve(dogFoodList);
                    }else{
                        resolve(dogFoodList.filter(obj => obj.id_categoria_comida == idCategoria));
                    }
                }, 2000);
            } else {    
                reject('No se encontró ningún artículo.');  
            }
        });

        dataPromise
        .then((data) => {
            //setDatos(data);
            setComponent(<ItemList  datos={data}/>); 
        })
        .catch((error) => { 
            console.log("Error:" + error);
        })

    },[idCategoria])

    return (
        <Container className='mt-5'> {/*Flex by default, fluid to expand*/}
            {component}
            {/*datos.length > 0
                ? <ItemList  datos={datos}/>
                : <Loader/>
            */}
        </Container>
    )
}

export default ItemListContainer