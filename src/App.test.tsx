import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import App from './App';

const mockStore = configureStore();
const initialState = {
    carShop: {
        carList: [{
            id: 1,
            model: 'Car 1',
            authorisedDealer: 'Dealer 1',
            numberDoor: 2,
            price: 20000,
            fuelType: 'Gas',
            img: 'https://car1.img',
        },]
    }
};
const store = mockStore(initialState);


describe('App test', () => {
    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(screen.getByTestId('dataTable')).toBeInTheDocument();
    });
});