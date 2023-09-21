import Categories from "./Categories";
import { connect } from "react-redux";
import { chooseToItemCategoryActionCreator } from "./../redux/item-reducer";

let mapStateToProps = (state) => {
  return {
    items: state.itemPage.items,
    orders: state.itemPage.orders,
    categories: state.itemPage.categories,
  };
};

let mapDispatchToProps = (dispatch)=>{
    return {
        chooseToItemCategory: (categories) => {dispatch(chooseToItemCategoryActionCreator(categories));},
    }
  }

const CategoriesContainer = connect(mapStateToProps,mapDispatchToProps)(Categories);
export default CategoriesContainer;
