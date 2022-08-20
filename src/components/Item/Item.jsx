import React from 'react'

export const Item = (props) => {
  const { id, title, price, stock, pictureUrl } = props;
  return (
    <>
    <div className='col-lg-4 col-md-12 mb-4'>
      <div className="card" >
        <img src={pictureUrl} className="card-img-top" alt={title}/>
        <div className="card-body">
          <div className="d-flex justify-content-between mb-4">
            <h6 className="mb-0">{title}</h6>
            <h6 className="text-dark mb-0">${price}</h6>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <p className="text-muted mb-0">Stock: <span className="fw-bold">{stock}</span></p>
          </div>
          <div className="d-grid col-12 mx-auto">
            <a className='btn btn-warning' href={id}>Ver Detalle</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}