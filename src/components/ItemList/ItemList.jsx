import { Item } from '../'

export const ItemList = (props) => {
  const { items } = props;
  return (
    <>
      { items && items.map((item, index)=> <Item key={index} {...item} />) }
      { items.length < 1 && <p>No hay resultados</p> }
    </>
  )
}