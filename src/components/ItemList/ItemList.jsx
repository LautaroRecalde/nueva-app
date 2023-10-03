import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        <div className='d-flex justify-content-around flex-wrap align-items-center'>
          {products.map((prod)=> <Item Key= {prod.id} prod= {prod} /> )}
        </div>
    )
}

export default ItemList


