import {BsCart4} from 'react-icons/bs'
import Badge from 'react-bootstrap/Badge'
const CartWidget = () => {
    return(
        <div> 
            <BsCart4 fontSize={'1.5rem'}/>
            <Badge bg="danger">5</Badge>
        </div>
    )
}

export default CartWidget