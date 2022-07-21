import Carousel from 'react-bootstrap/Carousel'
import Imagen1 from '../../images/dogchow.png'
import Imagen2 from '../../images/perro.png'
import '../content/carouselInicio.css'

const CarouselInicio = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Imagen1}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Slide 1</h3>
                    <p>Info slide 1</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Imagen2}
                alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Slide 2</h3>
                    <p>Info slide 2.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselInicio