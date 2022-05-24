 
export const useShopReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_SHOP_DATA":
      return action.payload;
    case "ADD_SHOP_DATA":
      return [...state, action.payload];
      case "DELETE_SHOP_DATA":
      return state.filter(item => item.id !== action.payload);
      case "UPDATE_SHOP_DATA":
      return state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
   default:
      return state;
  }

}

