import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemList, Spinner } from '../'
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '../../services';
// import data from '../../data.json';

export const ItemListContainer = (props) => {
  const {titulo} = props;
  const { category } = useParams();
  const [items,setItems] = useState();

  const getProduct = async ()=>{
    const data = collection(db, 'productos');
    const resp = await getDocs(data);
    const result = resp.docs.map(doc => doc={id:doc.id,...doc.data()});
    setItems(result);
  }

  const getProductByCategory = async (c)=>{
    const data = query(collection(db, 'productos'), where('category', '==', c) );
    const resp = await getDocs(data);
    const result = resp.docs.map(doc => doc={id:doc.id,...doc.data()});
    setItems(result);
  }

  useEffect(() => {
    // const cervezaPromise = new Promise((resolve, reject)=>{
    //     setTimeout(() => {
    //       if(category)  
    //         resolve(data.filter(prod => prod.category === category))
    //       else
    //         resolve(data)
    //     }, 2000);
    // });  
    // cervezaPromise.then(setItems)
    // .catch(console.log)
    // .finally();

    if(category)
      getProductByCategory(category);
    else  
      getProduct();
      
    return () => {
      setItems();
    };
  }, [category])
  return (
    <>
      <div className='container mt-4 px-lg-5'>
        <div className="row justify-content-md-center">
          <div className="col-lg-10 col-md-12">
            <div className="p-4">
              <h2 className="h5 text-center mb-5">{titulo}</h2>
              { items ? <ItemList items={items}/> : <Spinner/> }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}