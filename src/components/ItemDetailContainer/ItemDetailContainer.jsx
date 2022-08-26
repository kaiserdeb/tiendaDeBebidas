import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail, Spinner } from '../';
import data from '../../data.json';

export const ItemDetailContainer = (props) => {
  const { id } = useParams();
  const [item,setItem] = useState();

  useEffect(() => {

      const productPromise = new Promise((resolve, reject)=>{
          setTimeout(() => {
            let product = data.find(prod => prod.id == id );
            resolve(product);
          }, 2000);
      });  
      productPromise.then(setItem)
      .catch(console.log)
      .finally();
    }, [id])

  return (
    <>
    <div className="p-4">
      <div className='row text-center'>
        { item ? <ItemDetail {...item} /> : <Spinner/> }
      </div>
    </div>
  </>
  )
}