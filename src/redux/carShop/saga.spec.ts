import { runSaga } from 'redux-saga';
import { AnyAction } from '@reduxjs/toolkit';
import {
    addCarSaga,
    getAllCarsSaga,
    modifyCarSaga,
    removeCarSaga
} from './saga';
import { carShopActions } from './slice';
import axios from "axios";

describe('carShop saga', () => {
    jest.mock("axios");

    it('should getCar ', async () => {
        const dispatchedActions: AnyAction[] = [];
        const fakeStore = {
            getState: () => ({ carList: [] }),
            dispatch: (action: AnyAction) => dispatchedActions.push(action),
        };
        const payload = { data: [] };

        axios.get = jest.fn().mockResolvedValue(payload);
        await runSaga(fakeStore, getAllCarsSaga).toPromise();
        expect(dispatchedActions).toContainEqual(carShopActions.getAllCarsSuccess([]));
    });

    it('should modify ', async () => {
        const dispatchedActions: AnyAction[] = [];
        const fakeStore = {
            getState: () => ({ carList: [] }),
            dispatch: (action: AnyAction) => dispatchedActions.push(action),
        };
        const payload = { id: 1, model: "BMW" };

        axios.put = jest.fn().mockResolvedValue(payload);

        await runSaga(fakeStore, modifyCarSaga, {
            payload,
            type: carShopActions.modifyCar.type,
        }).toPromise();
        expect(dispatchedActions).toEqual([carShopActions.modifyCarSuccess(), carShopActions.getAllCars()]);
    });

    it('should delete ', async () => {
        const dispatchedActions: AnyAction[] = [];
        const fakeStore = {
            getState: () => ({ carList: [] }),
            dispatch: (action: AnyAction) => dispatchedActions.push(action),
        };
        const payload = { id: 1, model: "BMW" };

        axios.delete = jest.fn().mockResolvedValue(payload);

        await runSaga(fakeStore, removeCarSaga, {
            payload,
            type: carShopActions.removeCar.type,
        }).toPromise();
        expect(dispatchedActions).toEqual([carShopActions.removeCarSuccess(), carShopActions.getAllCars()]);
    });

    it('should delete ', async () => {
        const dispatchedActions: AnyAction[] = [];
        const fakeStore = {
            getState: () => ({ carList: [] }),
            dispatch: (action: AnyAction) => dispatchedActions.push(action),
        };
        const payload = { id: 99, model: "BMW" };

        axios.post = jest.fn().mockResolvedValue(payload);

        await runSaga(fakeStore, addCarSaga, {
            payload,
            type: carShopActions.removeCar.type,
        }).toPromise();
        expect(dispatchedActions).toEqual([carShopActions.addCarSuccess(), carShopActions.getAllCars()]);
    });
});
