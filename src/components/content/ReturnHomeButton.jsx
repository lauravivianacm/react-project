import { Link } from 'react-router-dom';
import '../content/itemDetail.css'
import { BsCaretLeftFill } from "react-icons/bs"

const ReturnHomeButton = () => {
    
    return (
        <Link to={`/`} className='return-button text-decoration-none'>
            <BsCaretLeftFill/> Seguir comprando
        </Link>
    )
}

export default ReturnHomeButton