import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './footer.css'

const Footer = () => {
    return ( 
        <div className="site-info">
            <div className="footer-widget">
                <Container>
                    <Row className='align-items-center'>
                        <Col className='float-left' md={6}>
                            <p>Created by Laura Viviana Cruz Martínez</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
 
export default Footer;