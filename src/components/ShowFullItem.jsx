import React from 'react'

 function ShowFullItem(props) {
 
  let addToItem = () => {
    props.addToItem(props.item);
   }
  return (
   <div className='full_item'>
    <div>
       <img src={props.item.img} alt={props.item.title} onClick={()=>props.onShowFullItem(props.item)}/>
      <h2>{props.item.title}</h2>
      <p>{props.item.desc}</p>
      <b>{props.item.price}$</b>
      <div className="add-to-card" onClick={()=>
        
        addToItem(props.item)}>+</div>
        </div>
   </div>
  )
}
export default ShowFullItem