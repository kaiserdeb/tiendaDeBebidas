import React from 'react'
import { Link } from 'react-router-dom';

export const Item = (props) => {
  const { id, title, price, stock, pictureUrl } = props;
  return (
    <>
    <div className='col-lg-4 col-md-12 mb-4'>
      <div className="card" >
        <img src={pictureUrl} className="card-img-top" alt={title} style={{height:'160px'}}/>
        <div className="card-body">
          <div className="d-flex justify-content-between mb-4">
            <h6 className="mb-0">{title}</h6>
            <h6 className="text-dark mb-0">${price}</h6>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <p className="text-muted mb-0">Stock: <span className="fw-bold">{stock}</span></p>
          </div>
          <div className="d-grid col-12 mx-auto">
            <Link className='btn btn-warning' to={'/item/'+id}>Ver Detalle</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}