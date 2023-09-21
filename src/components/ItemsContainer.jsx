import {
    addToItemActionCreator,
    showFullItemActionCreator
  } from "./../redux/item-reducer";
  import Items from "./Items";
  import { connect } from "react-redux";
  
  
  let mapStateToProps = (state)=>{
    return {
        items: state.itemPage.items,
        orders: state.itemPage.orders,
        currentItems: state.itemPage.currentItems,
        showFullItem: state.itemPage.showFullItem,
    
    }
    }
    
    let mapDispatchToProps = (dispatch)=>{
      return {
        addToItem: (item) => { dispatch(addToItemActionCreator(item));},
        onShowFullItem: (item) => { dispatch(showFullItemActionCreator(item));},

      }
    }
  
  const ItemsContainer = connect(mapStateToProps,mapDispatchToProps)(Items);
  export default ItemsContainer;
  