import Item from "./Item";

const Items = (props) => {

  return (
    <main>
      {props.currentItems.map((el) => {
        return <Item key={el.id} item={el} addToItem={props.addToItem} orders={props.orders} onShowFullItem={props.onShowFullItem}/>;
      })}
    </main>
  );
};

export default Items;

