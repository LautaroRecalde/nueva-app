import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState, useContext } from 'react'
import { db } from '../../services/firebase'
import { CartContext } from '../../context/CartContext'

const Checkout = () => {
    const[user, setUser]=useState({})
    const[valiteEmail, setValidateEmail]= useState('')
    const [orderId, setOrderId]= useState('')
    const {cart, total, clear}= useContext(CartContext)

    const datosComprador =(e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value

        })

    }

    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(!user.name && !user.phone){
            alert('complete los campos')
        }else{
            let order = {
                user,
                item:cart,
                total:total(),
                date:serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas, order)
            .then((res)=> {
                setOrderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))

        }
        
    }
    
    return(
        <div>
            {orderId !== ''
            ?<div>
                <h2>Felicitaciones! Tu orden fue generada con exito!</h2>
                <h5>Su id de registro es: {orderId} </h5>
            </div>

            :<div> 
                <h2>Terminar compra</h2>
                <h5>Por favor llenar con sus datos</h5> 
                <form onSubmit={finalizarCompra}>
                    <div className='mb-3'> 
                    <label className='form-label'>Nombre Completo</label> <input className='form-control' onChange={datosComprador} type='text' placeholder='Nombre y Apellido' name='name' required/> 
                    </div> 
                    <div className='mb-3'> <label className='form-label'>Numero de telefono</label> <input className='form-control' onChange={datosComprador} type='number' placeholder='+543364853456' name='phone'/> 
                    </div> <div className='mb-3'> <label className='form-label'>Direccion de email</label> <input className='form-control' onChange={datosComprador} type='email' placeholder='hola@hola.com' name='mail'/> 
                    </div> 
                    <div className='mb-3'> <label className='form-label'>Repita su email</label> <input className='form-control' type='email' placeholder='hola@hola.com' name='mail' onChange={((e)=>setValidateEmail(e.target.value))}/> 
                    </div> <button className='btn btn-dark' type='submit' disabled= {valiteEmail !== user.mail}>Generar Orden</button> </form> </div>}
        </div>
    )
}

export default Checkout