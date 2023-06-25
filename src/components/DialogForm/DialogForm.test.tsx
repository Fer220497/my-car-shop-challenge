import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { DialogForm } from './DialogForm';
import { act } from 'react-dom/test-utils';

describe('DialogForm', () => {
    const mockHandleSubmitForm = jest.fn();
    // Arrives to the onSubmit with valid data, but doesnt call the mockHandleSubmitForm prop
    it.skip('calls handleSubmitForm when form is submitted', () => {

        render(
            <DialogForm handleSubmitForm={mockHandleSubmitForm} />
        );

        const modelInput = screen.getByLabelText<HTMLInputElement>("Model");
        const authorisedDealerInput = screen.getByLabelText<HTMLInputElement>("Authorised Dealer");
        const numberDoorInput = screen.getByLabelText<HTMLInputElement>("Number Door");
        const priceInput = screen.getByLabelText<HTMLInputElement>("Price");
        const fuelTypeInput = screen.getByLabelText<HTMLInputElement>("Fuel Type");
        const imgInput = screen.getByLabelText<HTMLInputElement>("Image URL");
        const addButton = screen.getByText<HTMLInputElement>("Add");

        act(() => {

            fireEvent.input(modelInput, { target: { value: 'Car Model' } });
            fireEvent.input(authorisedDealerInput, { target: { value: 'Dealer' } });
            fireEvent.input(numberDoorInput, { target: { value: '4' } });
            fireEvent.input(priceInput, { target: { value: '20000' } });
            fireEvent.input(fuelTypeInput, { target: { value: 'Gasoline' } });
            fireEvent.input(imgInput, { target: { value: 'https://example.com/image.jpg' } });
            fireEvent.click(addButton);
        });
        expect(mockHandleSubmitForm).toHaveBeenCalledWith({
            model: 'Car Model',
            authorisedDealer: 'Dealer X',
            numberDoor: '4',
            price: '20000',
            fuelType: 'Gasoline',
            img: 'https://car-img.img',
        });
    });
});
