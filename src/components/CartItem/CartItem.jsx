import React from 'react'

export const CartItem = ({item, onRemove, onAdd}) => {
    const { id, title, price, stock, pictureUrl, qty } = item;
    return (
        <>
            <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                        <img src={pictureUrl} className="img-fluid rounded-3" alt={title} />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{title}</p>
                        <p><span className="text-muted">Precio: </span>${price} <span className="text-muted">Stock: </span>{stock}</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <div className="input-group">

                            <button className="btn btn-warning px-2"
                            onClick={()=> onAdd(item, -1)} disabled={qty === 1}>
                            <i className="bi bi-dash"></i>
                            </button>

                            <span name="quantity" className="form-control text-center"> {qty} </span>

                            <button className="btn btn-warning px-2"
                            onClick={()=> onAdd(item, 1)}  disabled={qty === stock}>
                            <i className="bi bi-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">${price * qty}</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <div onClick={()=>{onRemove(id)}} className="text-danger"><i className="bi bi-trash-fill"></i></div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
};