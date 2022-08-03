import React from 'react'

export const ItemListContainer = (props) => {
    const {titulo} = props
  return (
    <>
    <h2 className="h5 mb-0">{titulo}</h2>
    </>
  )
}