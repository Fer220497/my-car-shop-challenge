import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICar } from '../../interfaces';

export interface ICarSlice {
  carList: ICar[];
}

const initialState: ICarSlice = {
  carList: [],
};

export const carShopSlice = createSlice({
  name: 'carShop',
  initialState,
  reducers: {
    getAllCars: (state) => {
    },
    getAllCarsSuccess: (state, action: PayloadAction<any>) => {
      state.carList = action.payload;
    },
    getAllCarsError: (state) => { },
    addCar: (state, action: PayloadAction<any>) => { },
    addCarSuccess: (state) => { },
    addCarError: (state) => { },
    removeCar: (state, action: PayloadAction<any>) => { },
    removeCarSuccess: (state) => { },
    removeCarError: (state) => { },
    modifyCar: (state, action: PayloadAction<any>) => { },
    modifyCarSuccess: (state) => { },
    modifyCarError: (state) => { },
  },
});

export const { actions: carShopActions, reducer: carShopReducer } =
  carShopSlice;
