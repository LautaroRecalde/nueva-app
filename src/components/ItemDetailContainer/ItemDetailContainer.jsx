import React, {useState, useEffect} from 'react'
import { getData } from '../../mock/data'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = (props) => {
    const [product, setProduct]= useState ({})
    const {id}= useParams()
    const [loader, setLoader] = useState(false)

    //useEffect(()=>{
        // "getData()"
        // .then((res)=> "setProduct(res.find(item => item.id === id))")
        // .catch((error)=>console.log(error))
    // },[id])
    // "console.log(product)"

    useEffect(()=>{
        setLoader(true)
        const collectionProd = collection(db, 'productos')
        const referenciaAlDoc= doc(collectionProd, id)
        getDoc(referenciaAlDoc)
        .then((res)=> setProduct({id:res.id, ...res.data()}))
        .catch((error)=>console.log(error))
        .finally(()=>setLoader(false))
        
    },[])

    return (
        <div>
            <ItemDetail product= {product} />
        </div>
    )
}
export default ItemDetailContainer