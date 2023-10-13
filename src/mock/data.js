export const list = [
    { name: 'Medallon de espinaca', price:2500, stock:15, description:'lalala', category: 'espinaca' , img: '../img/MILKA DULCE.webp' },
    { name: 'Medallon de kurkuma', price:3000, stock:5, description:'lalala', category: 'kurkuma' , img: '../img/pepitooooos.webp' },
]

export const getData = () =>{
    let error= false
    return new Promise ((resolve, reject)=> {
        setTimeout(() => {
            if(error){
                reject('Hubo un error, intente mas tarde')
            }else{
                resolve(list)

            }
        }, 3000);

    })
}
