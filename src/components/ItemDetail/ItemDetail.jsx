import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
    const onAdd= (cantidad) =>{
        console.log(`Compraste ${cantidad} del producto ${product.name}`)
    }
    return(
        <div>
            <h2>Detalle de: {product.name} </h2>
            <img src= {product.img} alt={product.name}   />
            <p> {product.description}</p>
            <p>Stock: {product.stock}</p>
            <p>Price:${product.price},00</p>
            <p>Category: {product.Category}</p>
            <ItemCount initial={1} stock= {product.stock} onAdd={onAdd}  />
        </div>
    )
}

export default ItemDetail