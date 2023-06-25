/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IDialogData } from '../../interfaces';
import { Typography } from '@material-ui/core';
import './DialogViewData.css'

export const DialogViewData: React.FC<IDialogData> = ({ car }): JSX.Element => {

    return (
        <div>
            <DialogTitle>Car Information</DialogTitle>
            <DialogContent>
                <div>
                    <Typography display="inline" style={{ fontWeight: "bold" }}>
                        Car ID:
                    </Typography>
                    <Typography display="inline">
                        {car.id}
                    </Typography>
                </div>
                <div>
                    <Typography display="inline" style={{ fontWeight: "bold" }}>
                        Model:
                    </Typography>
                    <Typography display="inline">
                        {car.model}
                    </Typography>
                </div>
                <div>
                    <Typography display="inline" style={{ fontWeight: "bold" }}>
                        Authorised Dealer:
                    </Typography>
                    <Typography display="inline">
                        {car.authorisedDealer}
                    </Typography>
                </div>
                <div>
                    <Typography display="inline" style={{ fontWeight: "bold" }}>
                        Number of Doors:
                    </Typography>
                    <Typography display="inline">
                        {car.numberDoor}
                    </Typography>
                </div>
                <div>
                    <Typography display="inline" style={{ fontWeight: "bold" }}>
                        Price:
                    </Typography>
                    <Typography display="inline">
                        {car.price}
                    </Typography>
                </div>

                <div>
                    <Typography display="inline" style={{ fontWeight: "bold" }} >
                        Photo:
                    </Typography>
                    <div>
                        <img src={car.img} className='image' />
                    </div>
                </div>
            </DialogContent>

        </div>
    );
}
