import {cart} from '@/lib/definitions/order';
import { createSlice } from "@reduxjs/toolkit";
import {deleteCart,updateCart} from '@/services/cart';

interface InitialState {
  cart: cart[];
  totalPrice: number;
  totalQuantity: number;
  editCartMode: boolean;
  selectCart: string[];
  selectAll: boolean;
}

const localStorageCart = () => {
  if (typeof window !== "undefined") {
    let getCart = localStorage.getItem("myCart");
    let parsedCart;
    if (getCart) {
      parsedCart = JSON.parse(getCart);
    }
    return !Array.isArray(parsedCart) ? [] : parsedCart;
  } else {
    return [];
  }
};

const initialState: InitialState = {
  cart: localStorageCart(),
  totalPrice: 0,
  totalQuantity: 0,
  editCartMode: false,
  selectCart: [],
  selectAll: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let {  product_id,quantity } = action.payload;
      let existingItem = state.cart.find((item) =>  item.product_id==product_id);

      existingItem
        ? (existingItem.quantity += quantity)
        : state.cart.push(action.payload);
    },
    addAllToCart: (state, action) => {
      let data = action.payload;
      state.cart = data;
    },
    setTotal: (state,action) => {
      state.totalQuantity = Number(state.totalQuantity) + Number(action.payload) || 0;
    },
    removeCart: (state, action) => {
      const updateCart = state.cart.filter(
        (cart) => cart.id !== action.payload
      );
      deleteCart(action.payload);
      state.cart = updateCart;

      // localStorage.setItem("myCart", JSON.stringify(state.cart));
    },

    handleEditCartMode: (state, action) => {
      state.editCartMode = action.payload;
    },

    handleSelectCart: (state, action) => {
      let { id, cartLength } = action.payload;
      let index = state.selectCart.indexOf(id);

      index > -1
        ? state.selectCart.splice(index, 1)
        : state.selectCart.push(id);

      state.selectAll = state.selectCart.length === cartLength;
    },

    handleSelectAll: (state, action) => {
      let match = action.payload;
      const compareFn = (a: string[], b: []) =>
        a.length === b.length && a.every((elm, index) => elm === b[index]);

      state.selectCart = compareFn(state.selectCart, match) ? [] : match;

      state.selectAll = !state.selectAll;
    },

    removeSelectedCart: (state) => {
      const filteredCart = state.cart.filter(
        (cart) => !state.selectCart.includes(cart.id)
      );

      state.cart = filteredCart;
      localStorage.setItem("myCart", JSON.stringify(state.cart));

      state.selectCart = [];
    },
    
    changeItem: (state, action) => {
      let { id, quantity } = action.payload;
      let updatedCart = state.cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: Number(quantity),
          };
        } else {
          return product;
        }
      });
      updateCart(id, quantity);

      state.cart = updatedCart;
      // localStorage.setItem("myCart", JSON.stringify(updatedCart));
    },

    incItem: (state, action) => {
      let updatedCart = state.cart.map((product) => {
        if (product.id === action.payload) {
          let quantity = product.quantity + 1;
          let midPrice = 20000;

          quantity =
            product.price <= midPrice && quantity >= 5
              ? (quantity = 5)
              : product.price > midPrice && quantity >= 3
              ? (quantity = 3)
              : quantity;

          return {
            ...product,
            quantity: quantity,
          };
        } else {
          return product;
        }
      });

      state.cart = updatedCart;
      localStorage.setItem("myCart", JSON.stringify(updatedCart));
    },
    decItem: (state, action) => {
      const updatedCart = state.cart.map((product) => {
        if (product.id === action.payload) {
          let quantity = product.quantity - 1;

          if (quantity <= 1) {
            quantity = 1;
          }

          return {
            ...product,
            quantity: quantity,
          };
        } else {
          return product;
        }
      });

      state.cart = updatedCart;
      localStorage.setItem("myCart", JSON.stringify(updatedCart));
    },
  },
});

export const {
  addToCart,
  setTotal,
  addAllToCart,
  removeCart,
  incItem,
  decItem,
  changeItem,
  handleEditCartMode,
  handleSelectCart,
  handleSelectAll,
  removeSelectedCart,
} = cartSlice.actions;
export default cartSlice.reducer;
