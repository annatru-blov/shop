import React from 'react'

function Categories(props) {
    
  return (
 <div className='categories'>
   {props.categories.map(el => {
return <div key={el.key} onClick={() => props.chooseToItemCategory(el.key)}>{el.name}</div>
    })}
 </div>
  )
}
export default Categories