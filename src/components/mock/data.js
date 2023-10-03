const products = [
    {id:'01' , name: 'Medallon', price:2000, stock:10, description:'lalala', category: 'medallones' , img: '../img/GIRASOL.png' },
    {id:'02' , name: 'Medallon de espinaca', price:2500, stock:15, description:'lalala', category: 'espinaca' , img: '../img/MILKA DULCE.webp' },
    {id:'03' , name: 'Medallon de kurkuma', price:3000, stock:5, description:'lalala', category: 'kurkuma' , img: '../img/pepitooooos.webp' },
]

export const getData = () =>{
    let error= false
    return new Promise ((resolve, reject)=> {
        setTimeout(() => {
            if(error){
                reject('Hubo un error, intente mas tarde')
            }else{
                resolve(products)

            }
        }, 3000);

    })
}
