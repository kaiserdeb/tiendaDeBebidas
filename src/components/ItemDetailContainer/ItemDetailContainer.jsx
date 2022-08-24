import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = (props) => {
    const [item,setItem] = useState();

    useEffect(() => {
        let product = {id: 1, title:'Cerveza Rubia', price:110, stock: 1, pictureUrl:'https://cdn.milenio.com/uploads/media/2021/12/21/por-esta-razon-la-cerveza.jpg'};
        const productPromise = new Promise((resolve, reject)=>{
            setTimeout(() => {
              resolve(product)
            }, 2000);
        });  
        productPromise.then(setItem)
        .catch(console.log)
        .finally();
      }, [])

  return (
    <>
    <div className="p-4">
      <div className='row text-center'>
        { item ? <ItemDetail {...item} /> : <p>Obteniendo item...</p> }
      </div>
    </div>
  </>
  )
}