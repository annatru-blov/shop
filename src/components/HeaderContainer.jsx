import { deleteToItemActionCreator } from "./../redux/item-reducer";
import Header from "./Header";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    orders: state.itemPage.orders,
  };
};

let mapDispatchToProps = (dispatch)=>{
    return {
        deleteToItem: (id) => {dispatch(deleteToItemActionCreator(id));},
    }
  }


const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;
