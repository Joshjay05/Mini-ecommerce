import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartState {
  items: { product: Product; quantity: number; totalPrice: number }[];
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.product.id === newItem.id);
      if (!existingItem) {
        state.items.push({ product: newItem, quantity: 1, totalPrice: newItem.price });
        state.totalQuantity++;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.product.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.product.id !== id);
          state.totalQuantity--;
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.product.price;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
