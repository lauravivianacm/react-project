import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container'
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from '../../images/layout/bolsa_v2.jpg'
import '../layout/navBar.css'
import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore' 
import { useEffect, useState } from 'react'

const NavBar = () => {
    const[categorias, setCategorias] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'categorias');
        getDocs(itemsCollection).then((res) => {
            if (res.size > 0) {
                let listaCategorias = res.docs;
                setCategorias(listaCategorias.map((categoria) => {
                    return {id: categoria.id, ...categoria.data()}
                }));
            }
        });
    },[])

    return (
        <Navbar expand="lg" className='p-0' sticky="top">
            <Container>
                <Link to='/' className='navbar-brand'>
                    <img
                    src={Logo}
                    className="d-inline-block align-top logo-image"
                    />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Link to='/' className='nav-link'>Inicio</Link>
                        {/*Alimentos*/}
                        <NavDropdownMenu title="Alimentos">
                            {categorias.map((data, i) => (
                                <Link key={i} to={`/categoria/${data.id}`} data-rr-ui-dropdown-item className='dropdown-item'>{data.nombre}</Link>
                            ))}
                        </NavDropdownMenu>
                        {/*Aseo y Belleza*/}
                        <Nav.Link href="#" className='disabled-link'>Aseo y Belleza</Nav.Link>
                        {/*Accesorios*/}
                        <Nav.Link href="#" className='disabled-link'>Accesorios</Nav.Link>
                        {/*Salud*/}
                        <Nav.Link href="#" className='disabled-link'>Salud</Nav.Link>
                        <Nav.Link href="#" className='disabled-link'>Peluquería</Nav.Link>
                    </Nav>
                    <CartWidget/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar