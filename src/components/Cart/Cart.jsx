import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
const{cart, clear, total}= useContext(CartContext)
    return(
        <div>
        {cart.length 
        ? <div>
            {cart.map((item)=> <CartItem key={item.id} item={item}/>)}
            <p>Total a pagar: ${total()}</p>
            <div>
                <Button className='btn btn-danger' onClick={clear}>Vaciar carrito</Button>
                <Link className='btn btn-dark' to='/Checkout'>Terminar comprar</Link>
            </div>
        </div>
        : <div>
        <h3>Tu carrito esta vacio!</h3>
        <Link to='/' className= 'btn btn-dark' >Ir a comprar</Link>
        </div> }
    </div>
    )
}

export default Cart