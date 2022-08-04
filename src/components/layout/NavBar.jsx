import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container'
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from '../../images/layout/bolsa_v2.jpg'
import '../layout/navBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
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
                            <DropdownSubmenu title="Mascota">
                                {/*Clases del NavDropdown.Item*/}
                                <Link to='/categoria/comida_perro' data-rr-ui-dropdown-item className='dropdown-item'>Perro</Link>
                                <Link to='/categoria/comida_gato' data-rr-ui-dropdown-item className='dropdown-item'>Gato</Link>
                                <NavDropdown.Item href="#" className='disabled-link'>Aves</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Peces</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Roedores</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Caballos</NavDropdown.Item>
                            </DropdownSubmenu>
                            <DropdownSubmenu title="Edad">
                                <NavDropdown.Item href="#" className='disabled-link'>Cachorro</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Adulto</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Adulto Mayor</NavDropdown.Item>
                            </DropdownSubmenu>
                            <DropdownSubmenu title="Tipo">
                                <NavDropdown.Item href="#" className='disabled-link'>Seco</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Humedo</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Medicado</NavDropdown.Item>
                            </DropdownSubmenu>
                            <DropdownSubmenu title="Marca">
                                <NavDropdown.Item href="#" className='disabled-link'>Hill's</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Monello</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Dog Chow</NavDropdown.Item>
                            </DropdownSubmenu>
                            <DropdownSubmenu title="Necesidad">
                                <NavDropdown.Item href="#" className='disabled-link'>Renal</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Piel</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Light</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Cardiaco</NavDropdown.Item>
                            </DropdownSubmenu>
                        </NavDropdownMenu>
                        {/*Aseo y Belleza*/}
                        <NavDropdownMenu title="Aseo y Belleza">
                            <DropdownSubmenu title="Mascota">
                                <NavDropdown.Item href="#" className='disabled-link'>Perro</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Gato</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Aves</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Peces</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Roedores</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Caballos</NavDropdown.Item>
                            </DropdownSubmenu>
                            <DropdownSubmenu title="Accesorios de Aseo">
                                <NavDropdown.Item href="#" className='disabled-link'>Cortauñas</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Cepillos</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Higine Bucal</NavDropdown.Item>
                            </DropdownSubmenu>
                            <DropdownSubmenu title="Otros">
                                <NavDropdown.Item href="#" className='disabled-link'>Areneros</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Arena</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Baño</NavDropdown.Item>
                            </DropdownSubmenu>
                        </NavDropdownMenu>
                        {/*Accesorios*/}
                        <NavDropdownMenu title="Accesorios">
                            <DropdownSubmenu title="Mascota">
                                <NavDropdown.Item href="#" className='disabled-link'>Perro</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Gato</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Aves</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Peces</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Roedores</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Caballos</NavDropdown.Item>
                            </DropdownSubmenu>
                        </NavDropdownMenu>
                        {/*Salud*/}
                        <NavDropdownMenu title="Salud">
                            <DropdownSubmenu title="Mascota">
                                <NavDropdown.Item href="#" className='disabled-link'>Perro</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Gato</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Aves</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Peces</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Roedores</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Caballos</NavDropdown.Item>
                            </DropdownSubmenu>
                            <DropdownSubmenu title="Antiparasitarios">
                                <NavDropdown.Item href="#" className='disabled-link'>Internos</NavDropdown.Item>
                                <NavDropdown.Item href="#" className='disabled-link'>Externos</NavDropdown.Item>
                            </DropdownSubmenu>
                        </NavDropdownMenu>
                        <Nav.Link href="#" className='disabled-link'>Peluquería</Nav.Link>
                    </Nav>
                    <CartWidget/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar