import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container'
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from '../../images/layout/bolsa_v2.jpg'
import '../layout/navBar.css'

const NavBar = () => {
    return (
        <Navbar expand="lg" className='p-0' sticky="top">
            <Container>
                <Navbar.Brand href="#inicio">
                    <img
                    src={Logo}
                    className="d-inline-block align-top logo-image"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        {/*Alimentos*/}
                        <NavDropdownMenu title="Alimentos">
                            <DropdownSubmenu href="#action/.." title="Mascota">
                                <NavDropdown.Item href="#action/..">Perro</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Gato</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Aves</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Peces</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Roedores</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Caballos</NavDropdown.Item>
                            </DropdownSubmenu>
                            <DropdownSubmenu href="#action/.." title="Edad">
                                <NavDropdown.Item href="#action/..">Cachorro</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Adulto</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Adulto Mayor</NavDropdown.Item>
                            </DropdownSubmenu>
                            <DropdownSubmenu href="#action/.." title="Tipo">
                                <NavDropdown.Item href="#action/..">Seco</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Humedo</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Medicado</NavDropdown.Item>
                            </DropdownSubmenu>
                            <DropdownSubmenu href="#action/.." title="Marca">
                                <NavDropdown.Item href="#action/..">Hill's</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Monello</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Dog Chow</NavDropdown.Item>
                            </DropdownSubmenu>
                            <DropdownSubmenu href="#action/.." title="Necesidad">
                                <NavDropdown.Item href="#action/..">Renal</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Piel</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Light</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Cardiaco</NavDropdown.Item>
                            </DropdownSubmenu>
                        </NavDropdownMenu>
                        {/*Alimentos*/}
                        <NavDropdownMenu title="Aseo y Belleza">
                            <DropdownSubmenu href="#action/.." title="Mascota">
                                <NavDropdown.Item href="#action/..">Perro</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Gato</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Aves</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Peces</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Roedores</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Caballos</NavDropdown.Item>
                            </DropdownSubmenu>
                            <DropdownSubmenu href="#action/.." title="Accesorios de Aseo">
                                <NavDropdown.Item href="#action/..">Cortauñas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Cepillos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Higine Bucal</NavDropdown.Item>
                            </DropdownSubmenu>
                            <DropdownSubmenu href="#action/.." title="Otros">
                                <NavDropdown.Item href="#action/..">Areneros</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Arena</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Baño</NavDropdown.Item>
                            </DropdownSubmenu>
                        </NavDropdownMenu>
                        {/*Accesorios*/}
                        <NavDropdownMenu title="Accesorios">
                            <DropdownSubmenu href="#action/.." title="Mascota">
                                <NavDropdown.Item href="#action/..">Perro</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Gato</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Aves</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Peces</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Roedores</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Caballos</NavDropdown.Item>
                            </DropdownSubmenu>
                        </NavDropdownMenu>
                        {/*Salud*/}
                        <NavDropdownMenu title="Salud">
                            <DropdownSubmenu href="#action/.." title="Mascota">
                                <NavDropdown.Item href="#action/..">Perro</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Gato</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Aves</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Peces</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Roedores</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Caballos</NavDropdown.Item>
                            </DropdownSubmenu>
                            <DropdownSubmenu href="#action/.." title="Antiparasitarios">
                                <NavDropdown.Item href="#action/..">Internos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/..">Externos</NavDropdown.Item>
                            </DropdownSubmenu>
                        </NavDropdownMenu>
                        <Nav.Link href="#inicio">Peluquería</Nav.Link>
                    </Nav>
                    <CartWidget/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar