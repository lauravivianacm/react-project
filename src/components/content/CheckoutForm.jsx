import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { numberContext } from "../../context/NumberContext";
import { useContext } from 'react';
import CheckoutRowTable from './CheckoutRowTable';

const CheckoutForm = ({setBuyer, cartItems, cartTotalValue, placeOrder}) => {
    const[name, setName] = useState('');
    const[phone, setPhone] = useState('');
    const[email, setEmail] = useState('');
    const [wasValidated, setWasValidated] = useState(false);
    const [validForm, setValidForm] = useState(false);
    const { formatoMonedaTexto } = useContext(numberContext);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
            setValidForm(true);
        }
        setWasValidated(true);
    };

    useEffect(() => {setBuyer({ name, phone, email })},[name, phone, email])

    useEffect(() => {
        if (validForm) {
            placeOrder(validForm);
        }
    },[validForm])

    return ( 
        <Form noValidate validated={wasValidated} onClick={handleSubmit}>
            <Row>
                <Col sm={12} md={7} lg={7}>
                    <div className='billing-form mt-5'>
                        <h3>Datos de Facturación</h3>
                        <div className='billing-fields'>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label column="sm" lg={12}>Nombre</Form.Label>
                                <Form.Control 
                                    required
                                    type="text" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Registra tu nombre
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="telephone">
                                <Form.Label column="sm" lg={12}>Teléfono</Form.Label>
                                <Form.Control 
                                    required
                                    type="number" 
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Registra tu número de contacto
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label column="sm" lg={12}>Correo electrónico</Form.Label>
                                <Form.Control 
                                    required
                                    type="email" 
                                    value={email} 
                                    placeholder="name@example.com" 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Registra un correo válido
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={5} lg={5}>
                    <div className='billing-table mt-5'>
                        <h3>Tu orden</h3>
                        <div className='div-order'>
                            <Table responsive="md" className='table-order'>
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item, i) => (
                                        <tr key={i}>
                                            <CheckoutRowTable 
                                                item={item}
                                            />
                                        </tr>
                                    ))}
                                    <tr>
                                        <td><h5>Total</h5></td>
                                        <td className='total'>
                                            <strong>$ { formatoMonedaTexto(cartTotalValue) }</strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className='checkout-container mb-3'>
                                <Button type="button" className='checkout-button'>Realizar pedido</Button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Form>
    );
}
 
export default CheckoutForm;