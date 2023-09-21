

function Item(props) {
 
    let addToItem = () => {
      props.addToItem(props.item);
     }
   
  return (
    <div className="item">
      <img src={props.item.img} alt={props.item.title} onClick={()=>props.onShowFullItem(props.item)}/>
      <h2>{props.item.title}</h2>
      <p>{props.item.desc}</p>
      <b>{props.item.price}$</b>
      <div className="add-to-card" onClick={()=>
        
        addToItem(props.item)}>+</div>
    </div>
  );
}

export default Item;
