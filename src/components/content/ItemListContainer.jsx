import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Loader from '../layout/Loader';
import ItemList from './ItemList';

const ItemListContainer = ({categoria, exampleData, component}) => {
    const[datos, setDatos] = useState([]);

    exampleData = [
        {
          'nombre' : 'Dog Chow',
          'imagen' : '/src/images/cards/Dog-Chow-Cachorros.jpg',
          'precio' : '120.000',
          'stock' : '5'
        },
        {
          'nombre' : 'Pedigree Adulto',
          'imagen' : '/src/images/cards/PEDIGREE-ADULTO-CARNE.png',
          'precio' : '120.000',
          'stock' : '7'
        },
        {
          'nombre' : 'NutreCan',
          'imagen' : '/src/images/cards/NutreCan.jpg',
          'precio' : '120.000',
          'stock' : '4'
        },
        {
          'nombre' : 'Chunky',
          'imagen' : '/src/images/cards/Chunky.jpg',
          'precio' : '120.000',
          'stock' : '3'
        },
        {
          'nombre' : 'Ringo',
          'imagen' : '/src/images/cards/Ringo.jpg',
          'precio' : '120.000',
          'stock' : '8'
        },
        {
          'nombre' : 'SmartPet',
          'imagen' : '/src/images/cards/Smart-Pet.jpg',
          'precio' : '120.000',
          'stock' : '9'
        },
    ];

    const dataPromise = new Promise((resolve, reject) => { 
        const condition = exampleData.length > 0;   
        if(condition) {
            setTimeout(function(){
                resolve(exampleData);
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

    if(datos.length > 0){
        component = <ItemList  datos={datos} categoria={categoria}/>;
    }else{
        component = <Loader/>
    }

    return (
        <Container className='mt-5'>
            {component}
        </Container>
    )
}

export default ItemListContainer