import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import {getData} from '../mock/data'
import { useEffect, useState } from 'react'

const ItemListContainer = (props) => {

  const [products, setProducts] = useState([])
  const [loader, setLoader]= useState(false)
  const { categoryid } = useParams()
  useEffect(() => {
    setLoader(true)
    getData()
      .then((res) => {
        if (categoryid) {
          setProducts(res.filter((item) => item.category === categoryid)) 
        } else {
          setProducts(res)
        }
      })
      .catch((error) => console.log(error))
      .finally(()=> setLoader(false))
  }, [categoryid])

  return (
    <div>
      <h1>{props.greeting} {categoryid && <span style={{textTransform:'capitalize,', color:'gray'}}>{categoryid}</span> } </h1>
      { loader ? <p>Cargando...</p> : <ItemList products={products} />}
    </div>
  )
}

export default ItemListContainer;