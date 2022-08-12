import { Link } from 'react-router-dom';
import '../content/itemDetail.css'
import { BsCaretLeftFill } from "react-icons/bs"

const ReturnHomeButton = ({label}) => {
    
    return (
        <Link to={`/`} className='return-button text-decoration-none'>
            <BsCaretLeftFill/> {label}
        </Link>
    )
}

export default ReturnHomeButton