import {IconContext} from "react-icons"
import {BsCart3, BsSearch} from "react-icons/bs"
import Nav from 'react-bootstrap/Nav'
import '../layout/navBar.css'

const CartWidget = () => {
    return (
        <Nav className="mr-auto">
            <a href="" className="icon-top-menu">
                <BsCart3 />
                <span className="badge-icon badge bg-green">
                    2
                </span>
            </a>
            <a href="" className="icon-top-menu">
                <BsSearch />
                <span></span>
            </a>
        </Nav>
            
    )
}

export default CartWidget