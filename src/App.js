import React from "react";
import HeaderContainer from "./components/HeaderContainer";
import Footer from "./components/Footer";
import { useSelector } from 'react-redux';


import ItemsContainer from "./components/ItemsContainer";
import CategoriesContainer from "./components/CategoriesContainer";
import ShowFullItem from "./components/ShowFullItem";
import ShowFullItemContainer from "./components/ShowFullItemContainer";

const App = () => {
  const orders = useSelector((state) => state.itemPage.orders);
  const showFullItem = useSelector((state) => state.itemPage.showFullItem);
  const fullItem = useSelector((state) => state.itemPage.fullItem);
  
  


  return (
    <div className="wrapper">
      <HeaderContainer orders={orders}/>
      <CategoriesContainer />
      <ItemsContainer />
{showFullItem && <ShowFullItemContainer item={fullItem}/>}
      <Footer />
    </div>
  );
};

export default App;
