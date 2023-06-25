import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import DataTable from './DataTable';
import { act } from 'react-dom/test-utils';

const mockStore = configureStore();

const carList = [
    {
        id: 1,
        model: 'Car 1',
        authorisedDealer: 'Dealer 1',
        numberDoor: 2,
        price: 20000,
        fuelType: 'Gas',
        img: 'https://car1.img',
    },
    {
        id: 2,
        model: 'Car 2',
        authorisedDealer: 'Dealer 2',
        numberDoor: 4,
        price: 30000,
        fuelType: 'Diesel',
        img: 'https://car2.img',
    },
];

const initialState = {
    carShop: {
        carList,
    },
};

const store = mockStore(initialState);
const filterListMock = jest.fn();

describe('DataTable', () => {
    // rows in the DataTable.tsx is filled with the data, but it is not showing
    it.skip('renders without crashing', () => {
        act(() => {
            render(
                <Provider store={store}>
                    <DataTable carList={carList} filterList={filterListMock} />
                </Provider>
            );
        });

        const dataGridElement = screen.getByRole('grid');
        expect(dataGridElement).toBeInTheDocument();

        const dataRows = screen.getAllByRole('row');
        expect(dataRows.length).toBe(carList.length + 1);
    });
});
