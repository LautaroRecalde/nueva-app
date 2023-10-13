import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({product}) => {
    const [quantityAdded, setQuantityAdded]= useState('')
   const {addItem} = useContext(CartContext)
  

    const onAdd= (cantidad) =>{
        setQuantityAdded(cantidad)
        addItem(product, cantidad)
    }
    
    return(
        <div>
            <h2>Detalle de: {product.name} </h2>
            <img src= {product.img} alt={product.name}   />
            <p> {product.description}</p>
            <p>Stock: {product.stock}</p>
            <p>Price:${product.price},00</p>
            <p>Category: {product.Category}</p>
            { quantityAdded=== '' ?  <ItemCount initial={1} stock= {product.stock} onAdd={onAdd} />
            : <Link to='/cart' className='btn btn-dark'>Ir al Carrito</Link> }

        </div>
    )
}

export default ItemDetail