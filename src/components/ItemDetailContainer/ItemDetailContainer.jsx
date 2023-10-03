import React, {useState, useEffect} from 'react'
import { getData } from '../mock/data'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = (props) => {
    const [product, setProduct]= useState ({})
    const {id}= useParams()
    useEffect(()=>{
        getData()
        .then((res)=> setProduct(res.find(item => item.id === id)))
        .catch((error)=>console.log(error))
    },[id])
    console.log(product)
    return (
        <div>
            <ItemDetail product= {product} />
        </div>
    )
}
export default ItemDetailContainer