import { Item } from '../'

export const ItemList = (props) => {
  const { items } = props;
  return (
    <>
      <div className='row text-center animate__animated animate__fadeIn'>
        { items && items.map((item, index)=> <Item key={index} {...item} />) }
        { items.length < 1 && <p>No hay resultados</p> }
      </div>
    </>
  )
}