import React from 'react';
import { MdDelete } from "react-icons/md";

export default function Order(props) {



  return (
    <div className='item'>
     
        <img src={props.item.img}/>
      <h2>{props.item.title}</h2>
      <b>{props.item.price}$</b>
      <MdDelete className='delete-icon' onClick={() => props.deleteToItem(props.item.id)}/>
    </div>
  )
}
