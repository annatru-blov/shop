const ADD_TO_ITEM = "ADD_TO_ITEM";
const DELETE_TO_ITEM = "DELETE_TO_ITEM";
const CHOOSECATEGORY = "CHOOSECATEGORY";
const SHOW_FULL_ITEM = "SHOW_FULL_ITEM";


let initialState = {
  items: [
    {
      id: 1,
      title: "Диван Байма",
      img: "https://cdn0.divan.by/img/v1/-D146vR9IpusrRoe4tpVyuGomSrDoLExcaE7pSxv7iE/t:0::0:0/pd:60:60:60:60/rs:fit:1148:720:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ4NTkyMzMucG5n.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "Sofas",
      price: "712.77",
    },
    {
      id: 2,
      title: "Письменный стол",
      img: "https://cdn0.divan.by/img/v1/vk9Ea22wzHBKW_Fg1zmwWZOAwqPlKup6Kuseqhdu9fI/t:0::0:0/pd:123:160:123:160/rs:fit:948:594:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ2MTgyNjcucG5n.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "Tables",
      price: "118.69",
    },
    {
      id: 3,
      title: "Стул Эймс",
      img: "https://cdn0.divan.by/img/v1/zTLK7VuUxPuQDQWTHcEaGx8yMJyHqkQbXKQvgBjZ1xk/t:0::0:0/pd:60:60:60:60/rs:fit:1148:720:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ1NDkyMzQucG5n.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "Chairs",
      price: "30.36",
    },
    {
      id: 4,
      title: "Табурет Фэмили",
      img: "https://cdn0.divan.by/img/v1/M5-z71qypaotVFrLWLewPUUksVRlUSVRepHdV0OT2bg/t:0::0:0/pd:60:60:60:60/rs:fit:1148:720:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ3MzI1NDYucG5n.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "Chairs",
      price: "26.68",
    },
    {
      id: 5,
      title: "Стул Митчел",
      img: "https://cdn0.divan.by/img/v1/kGFQQs6xbc75mO0hVxm9QZkfAmF2Li17iFA5niTuQac/t:0::0:0/pd:60:60:60:60/rs:fit:1148:720:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ0MjA4MTQucG5n.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "Chairs",
      price: "106.43",
    },
    {
      id: 6,
      title: "Диван Кареро",
      img: "https://cdn0.divan.by/img/v1/lzFd2L25AC91E6zKduOWK4MUo7-o4LpUHDi-KWRAgyU/t:0::0:0/pd:60:60:60:60/rs:fit:1148:720:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ0MzM3MzkucG5n.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "Sofas",
      price: "669.5292",
    },
  ],
  orders: [],
  hasDuplicateId: false,
  categories: [
    {
      key: "All",
      name: "Всё",
    },
    {
      key: "Tables",
      name: "Столы",
    },
    {
      key: "Chairs",
      name: "Стулья",
    },
    {
      key: "Sofas",
      name: "Диваны",
    },
  ],
  currentItems: [
    {
      id: 1,
      title: "Диван Байма",
      img: "https://cdn0.divan.by/img/v1/-D146vR9IpusrRoe4tpVyuGomSrDoLExcaE7pSxv7iE/t:0::0:0/pd:60:60:60:60/rs:fit:1148:720:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ4NTkyMzMucG5n.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "Sofas",
      price: "712.77",
    },
    {
      id: 2,
      title: "Письменный стол",
      img: "https://cdn0.divan.by/img/v1/vk9Ea22wzHBKW_Fg1zmwWZOAwqPlKup6Kuseqhdu9fI/t:0::0:0/pd:123:160:123:160/rs:fit:948:594:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ2MTgyNjcucG5n.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "Tables",
      price: "118.69",
    },
    {
      id: 3,
      title: "Стул Эймс",
      img: "https://cdn0.divan.by/img/v1/zTLK7VuUxPuQDQWTHcEaGx8yMJyHqkQbXKQvgBjZ1xk/t:0::0:0/pd:60:60:60:60/rs:fit:1148:720:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ1NDkyMzQucG5n.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "Chairs",
      price: "30.36",
    },
    {
      id: 4,
      title: "Табурет Фэмили",
      img: "https://cdn0.divan.by/img/v1/M5-z71qypaotVFrLWLewPUUksVRlUSVRepHdV0OT2bg/t:0::0:0/pd:60:60:60:60/rs:fit:1148:720:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ3MzI1NDYucG5n.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "Chairs",
      price: "26.68",
    },
    {
      id: 5,
      title: "Стул Митчел",
      img: "https://cdn0.divan.by/img/v1/kGFQQs6xbc75mO0hVxm9QZkfAmF2Li17iFA5niTuQac/t:0::0:0/pd:60:60:60:60/rs:fit:1148:720:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ0MjA4MTQucG5n.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "Chairs",
      price: "106.43",
    },
    {
      id: 6,
      title: "Диван Кареро",
      img: "https://cdn0.divan.by/img/v1/lzFd2L25AC91E6zKduOWK4MUo7-o4LpUHDi-KWRAgyU/t:0::0:0/pd:60:60:60:60/rs:fit:1148:720:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ0MzM3MzkucG5n.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      category: "Sofas",
      price: "669.5292",
    },
  ],
  showFullItem: false,
  fullItem: {},
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ITEM: {
      const isDuplicate = state.orders.some(
        (item) => item.id === action.payload.id
      );

      if (isDuplicate) {
        return {
          ...state,
          hasDuplicateId: true,
        };
      }

      return {
        ...state,
        orders: [...state.orders, action.payload],
        hasDuplicateId: false,
      };
    }
    case DELETE_TO_ITEM: {
      return {
        ...state,
        orders: state.orders.filter((item) => item.id !== action.itemId),
      };
    }
    case CHOOSECATEGORY: {
      const key = action.category
      if(key === 'All')
      return {
        ...state,
        currentItems: state.items,
      };
    
      return {
      ...state,
      currentItems: state.items.filter((el) => el.category === action.category),
      };
    }
    case SHOW_FULL_ITEM: {
      return {
        ...state,
        showFullItem: !state.showFullItem,
        fullItem: action.item,
      };
    }
    default:
      return state;
  }
};

export const addToItemActionCreator = (item) => ({
  type: ADD_TO_ITEM,
  payload: item,
});
export const deleteToItemActionCreator = (itemId) => ({
  type: DELETE_TO_ITEM,
  itemId,
});
export const chooseToItemCategoryActionCreator = (category) => ({
  type: CHOOSECATEGORY,
  category,
});
export const showFullItemActionCreator = (item) => ({
  type: SHOW_FULL_ITEM,
  item
});


export default itemReducer;
