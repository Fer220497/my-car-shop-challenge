/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IDialogFormProps } from '../../interfaces';
import { SubmitHandler, useForm } from 'react-hook-form';

export const DialogForm: React.FC<IDialogFormProps> = ({ handleSubmitForm }): JSX.Element => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit: SubmitHandler<any> = (data): void => {

        handleSubmitForm(data);
    }
    return (
        <div>
            <DialogTitle>New Car</DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="model"
                        label="Model"
                        type="text"
                        fullWidth
                        variant="standard"
                        {...register('model', { required: "Model is required" })}
                        error={!!errors?.model}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="authorisedDealer"
                        label="Authorised Dealer"
                        type="text"
                        fullWidth
                        variant="standard"
                        {...register('authorisedDealer', { required: true })}
                        error={!!errors?.authorisedDealer}

                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="numberDoor"
                        label="Number Door"
                        type="number"
                        fullWidth
                        variant="standard"
                        {...register('numberDoor', { required: true })}
                        error={!!errors?.numberDoor}

                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        label="Price"
                        type="number"
                        fullWidth
                        variant="standard"
                        {...register('price', { required: true })}
                        error={!!errors?.price}

                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="fuelType"
                        label="Fuel Type"
                        type="text"
                        fullWidth
                        variant="standard"
                        {...register('fuelType', { required: true })}
                        error={!!errors?.fuelType}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="img"
                        label="Image URL"
                        type="text"
                        fullWidth
                        variant="standard"
                        {...register('img', { required: true })}
                        error={!!errors?.img}

                    />
                </DialogContent>
                <DialogActions>
                    <Button type='submit'>Add</Button>
                </DialogActions>
            </form>

        </div>
    );
}
