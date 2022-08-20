import { Item } from '../Item/Item';

export const ItemList = (props) => {
  const { items } = props;   
  return (
    <>
      { 
      items.map((item, index)=> <Item key={index} {...item} />) 
      }
    </>
  )
}