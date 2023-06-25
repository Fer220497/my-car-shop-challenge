import { takeEvery, ForkEffect } from 'redux-saga/effects';
import { carShopActions } from './slice';
import {
  getAllCarsSaga,
  addCarSaga,
  removeCarSaga,
  modifyCarSaga
} from './saga'

export function* watchCarShopSagas(): Generator<ForkEffect, void> {

  yield takeEvery(carShopActions.getAllCars, getAllCarsSaga);
  yield takeEvery(carShopActions.addCar, addCarSaga);
  yield takeEvery(carShopActions.removeCar, removeCarSaga);
  yield takeEvery(carShopActions.modifyCar, modifyCarSaga);
}


export default watchCarShopSagas;
