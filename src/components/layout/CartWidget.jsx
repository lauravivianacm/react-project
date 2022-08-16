import {IconContext} from "react-icons"
import {BsCart3, BsSearch} from "react-icons/bs"
import Nav from 'react-bootstrap/Nav'
import '../layout/navBar.css'
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';
import { useContext } from "react";

const CartWidget = () => {
    const { cartWidgetValue } = useContext(cartContext);
    
    return (
        <Nav className="mr-auto">
            <Link to={`/cart`} className="icon-top-menu">
                <BsCart3 />
                {cartWidgetValue > 0 && <span className="badge-icon badge bg-green"> {cartWidgetValue} </span>}
            </Link>
            <Link to={`/`} className="icon-top-menu">
                <BsSearch />
                <span></span>
            </Link>
        </Nav>
            
    )
}

export default CartWidget