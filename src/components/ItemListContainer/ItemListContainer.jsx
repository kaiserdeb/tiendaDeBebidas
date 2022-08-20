import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = (props) => {
  const {titulo} = props
  const [items,setItems] = useState([]);
  useEffect(() => {
    let products = [
      {id: 1, title:'Cerveza Rubia', price:110, stock: 1, pictureUrl:'https://cdn.milenio.com/uploads/media/2021/12/21/por-esta-razon-la-cerveza.jpg'},
      {id: 2, title:'Cerveza Scotch', price:120, stock: 2, pictureUrl:'https://cdn.milenio.com/uploads/media/2021/12/21/por-esta-razon-la-cerveza.jpg'},
      {id: 3, title:'Cerveza Stout', price:130, stock: 3, pictureUrl:'https://cdn.milenio.com/uploads/media/2021/12/21/por-esta-razon-la-cerveza.jpg'},
      {id: 4, title:'Cerveza IPA', price:140, stock: 4, pictureUrl:'https://cdn.milenio.com/uploads/media/2021/12/21/por-esta-razon-la-cerveza.jpg'}
    ];
    const cervezaPromise = new Promise((resolve, reject)=>{
        setTimeout(() => {
          resolve(products)
        }, 2000);
    });  
    cervezaPromise.then(setItems)
    .catch(console.log)
    .finally();
  }, [])
  return (
    <>
      <div className="p-4">
        <h2 className="h5 text-center mb-5">{titulo}</h2>
        <div className='row text-center'>
          <ItemList items={items}/>
        </div>
      </div>
    </>
  )
}