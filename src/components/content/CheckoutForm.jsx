import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

const CheckoutForm = ({setBuyer}) => {
    const[name, setName] = useState('');
    const[phone, setPhone] = useState('');
    const[email, setEmail] = useState('');

    useEffect(() => {setBuyer({ name, phone, email })},[name, phone, email])

    return ( 
        <Col sm={12} md={7} lg={7}>
            <div className='billing-form mt-5'>
                <h3>Datos de Facturación</h3>
                <div className='billing-fields'>
                    <Form>
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
                    </Form>
                </div>
            </div>
        </Col>
    );
}
 
export default CheckoutForm;