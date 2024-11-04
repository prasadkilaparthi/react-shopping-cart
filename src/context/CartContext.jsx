const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

//reducer function for cart actions

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let updatedItems;
      if (existingItemIndex >= 0) {
        updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      return {
        ...state,
        items: updatedItems,
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + action.payload.pricqe,
      };
  }
};
