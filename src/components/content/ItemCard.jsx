import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../content/itemCard.css'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemCard = ({item}) => {

    const formatoMonedaTexto = (valor) => {
        /*TIENE EN CUENTA LOS VALORES DECIMALES*/
        valor = cambiarComaDecimal(valor.toString());
        var num = valor.replace(/\./g, '');
        num = num.replace(/[^0-9^,^-]/g, "");
        if (valor.lastIndexOf(',') != (valor.length - 1)) {
            num = num.replace(/\,/g, '.');
        }
    
        if (!isNaN(num)) {
            /*CONVIERTE EL DECIMAL EN . */
            num = num.toString().replace('.', ',');
            num = num.toString().split('').reverse().join('').split(',');
    
            if (num.length > 1) {
                if(num[1].split('-').length>1){
                    num[1] = num[1].split('-');
                    num[1][0]=num[1][0].replace(/(?=\d*\.?)(\d{3})/g, '$1.').split('').reverse().join('').replace(/^[\.]/, '').split('').reverse().join('');
                    num[1] = num[1].join('-')
                }else{
                    num[1] = num[1].replace(/(?=\d*\.?)(\d{3})/g, '$1.').split('').reverse().join('').replace(/^[\.]/, '').split('').reverse().join('');
                } 
                num = num.join(',')
    
            } else {
                num = num[0].replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            }
            //num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            num = num.split('').reverse().join('').replace(/^[\.]/, '');
            return  num;
        } else {
            if (valor.lastIndexOf(',') != (valor.length - 1)) {
                return valor.replace(/[^\d\.|^\d\,]*/g, '');
            }
        }
    }

    const cambiarComaDecimal = (valor) => {
        return valor.toString().replace(/\./g, ',');
    }

    return (
        <>
            <Card className='item-card'>
                <Link to={`/item/${item.id}`}>
                    <Card.Img variant="top" src={item.imagen} />
                </Link>
                <Card.Body>
                    <Card.Subtitle className='mt-2'>{item.categoria}</Card.Subtitle>
                    <Link to={`/item/${item.id}`}>
                        <Card.Title className='mt-1'>{item.nombre}</Card.Title>
                    </Link>
                    <Card.Text className='mt-1'>
                        $ { formatoMonedaTexto(item.precio) }
                        <br />
                        Unidades disponibles: {item.stock}
                        <br />
                    </Card.Text>
                    {/*<ItemCount stock={item.stock} initial="1"/>*/}
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemCard