import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ItemType, ItemsState } from "../../utils/types";

const initialState: ItemsState = {
  itemsList: [],
  tax: 18,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState: localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState") as string).items
    : initialState,
  reducers: {
    addItem: (state, action) => {
      state.itemsList = [...state.itemsList, action.payload];
    },
    setTax: (state, action) => {
      state.tax = action.payload;
    },
  },
});

export const { addItem, setTax } = itemsSlice.actions;

const selectList = (state: RootState) => {
  return state.items.itemsList;
};

const selectTax = (state: RootState) => {
  return state.items.tax;
};

export const selectTotalCost = (state: RootState) => {
  const totalCost = state.items.itemsList
    .map((item: ItemType) => item.total)
    .reduce((a: number, b: number) => a + b, 0);
  return totalCost;
};

export const selectTotalIncludingTax = (state: RootState) => {
  const totalCost = state.items.itemsList
    .map((item: ItemType) => item.total)
    .reduce((a: number, b: number) => a + b, 0);
  return totalCost + totalCost * (state.items.tax / 100);
};

export const selectItemsData = createSelector(
  [selectList, selectTax],
  (itemsList, tax) => ({
    itemsList,
    tax,
  })
);

export default itemsSlice.reducer;
