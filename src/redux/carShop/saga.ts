import { put, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { carShopActions } from './slice';
import axios from 'axios';

const url: string = "http://localhost:3004/coches";


export function getCars(): any {
  return axios.get(`${url}`);
}

export function* getAllCarsSaga(): any {
  try {
    const response = yield call(getCars);
    yield put(carShopActions.getAllCarsSuccess(response.data));
  } catch (e) {
    yield put(carShopActions.getAllCarsError());

  }
}

export function addCar(data: any): any {
  return axios.post(url, data);
}

export function* addCarSaga(action: PayloadAction<any>): any {
  try {
    // yield put(carShopActions.loadAllCars());
    yield call(addCar, action.payload);
    yield put(carShopActions.addCarSuccess());
    yield put(carShopActions.getAllCars());
  } catch (e) {
    yield put(carShopActions.addCarError());

  }
}

export function removeCar(data: any): any {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  return axios.delete(`${url}/${data.id}`);
}

export function* removeCarSaga(action: PayloadAction<any>): any {
  try {
    // yield put(carShopActions.loadAllCars());
    yield call(removeCar, action.payload);
    yield put(carShopActions.removeCarSuccess());
    yield put(carShopActions.getAllCars());
  } catch (e) {
    yield put(carShopActions.removeCarError());

  }
}


export function modifyCar(data: any): any {
  return axios.put(`${url}/${data.id}`, data);
}

export function* modifyCarSaga(action: PayloadAction<any>): any {
  try {
    // yield put(carShopActions.loadAllCars());
    yield call(modifyCar, action.payload);
    yield put(carShopActions.modifyCarSuccess());
    yield put(carShopActions.getAllCars());
  } catch (e) {
    yield put(carShopActions.modifyCarError());

  }
}


