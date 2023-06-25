import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { ICar, ICarProps } from '../../interfaces';
import DeleteIcon from '@material-ui/icons/Delete';
import { carShopActions } from '../../redux/carShop/slice';
import { useAppDispatch } from '../../redux/hooks';
import PageviewIcon from '@material-ui/icons/Pageview';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { DialogForm } from '../DialogForm/DialogForm';
import { DialogViewData } from '../DialogViewData/DialogViewData';
import { Grid, TextField } from '@material-ui/core';

const DataTable: React.FC<ICarProps> = ({ carList, filterList }): JSX.Element => {
    const dispatch = useAppDispatch();
    const [rows, setRows] = useState<ICar[]>([])
    const [dialogFormOpen, setDialogFormOpen] = useState<boolean>(false);
    const [dialogViewData, setDialogViewData] = useState<boolean>(false);
    const [car, setCar] = useState<ICar>();

    useEffect(() => {
        setRows(carList);
    }, [carList])


    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID' },
        {
            field: 'model',
            headerName: 'Model',
            width: 300,
            flex: 1,
            editable: true,
        },
        {
            field: 'authorisedDealer',
            headerName: 'Authorised Dealer',
            width: 300,
            flex: 1,
            editable: true,
        },
        {
            field: 'numberDoor',
            headerName: 'Number of Doors',
            type: 'number',
            width: 300,
            flex: 1,
            editable: true,
        },
        {
            field: 'price',
            headerName: 'Price €',
            type: 'number',
            width: 300,
            flex: 1,
            editable: true,
        },
        {
            field: 'fuelType',
            headerName: 'Fuel',
            type: 'string',
            width: 300,
            flex: 1,
            editable: true,
        },
        {
            field: "actions",
            headerName: "Watch",
            sortable: false,
            cellClassName: 'actions',
            renderCell: ((data) => {
                const onClick = (): void => {
                    setCar(data.row as ICar);
                    handleDialogData()
                };
                return (
                    <>
                        <Button>
                            <PageviewIcon onClick={onClick} color="primary" fontSize="large" />
                        </Button>
                    </>
                )
            }),
        },
        {
            field: "action",
            headerName: "Delete",
            sortable: false,
            cellClassName: 'action',
            renderCell: ((data) => {
                const onClick = (): void => { dispatch(carShopActions.removeCar(data.row)); };
                return (
                    <>
                        <Button>
                            <DeleteIcon onClick={onClick} color="secondary" fontSize="large" />
                        </Button>
                    </>
                )
            }),
        }
    ];


    const editRow = (data: any): void => {
        const item = carList.find(element => element.id === data.id)
        const itemToEdit: any = {
            ...item,
            [data.field]: data.value,
        };
        dispatch(carShopActions.modifyCar(itemToEdit));
    }


    const handleAddRow = (): void => {
        //  setRows((prevRows) => [createRandomRow(), ...prevRows]);
        setDialogFormOpen(!dialogFormOpen);
    };
    const handleCloseDialogForm = (item: any): void => {
        setDialogFormOpen(false);
        dispatch(carShopActions.addCar(item));
    };
    const handleCloseForm = (): void => {
        setDialogFormOpen(false);
    }
    const handleCloseDialogViewData = (): void => {
        setDialogViewData(false);
    }
    const handleDialogData = (): void => {
        //  setRows((prevRows) => [createRandomRow(), ...prevRows]);
        setDialogViewData(!dialogViewData);
    };

    return (
        <div style={{ height: 400, width: '100%' }} >
            <Grid item container >
                <Grid item container >

                    <Grid item xs={11}>
                        <TextField
                            margin="dense"
                            type="text"
                            onChange={(e) => {
                                filterList(e.target.value)
                            }}
                            placeholder='Insert text to filter'
                            fullWidth
                        /></Grid>
                    <Grid item xs={1}>
                        <Button fullWidth variant="contained" color="primary" onClick={handleAddRow}>
                            <AddIcon />
                        </Button>
                    </Grid>
                </Grid>
                {dialogFormOpen && (
                    <Dialog open={dialogFormOpen} onClose={handleCloseForm}>
                        <DialogForm
                            handleSubmitForm={handleCloseDialogForm}
                        />
                    </Dialog>
                )}
                {(dialogViewData && car) && (
                    <Dialog open={dialogViewData} onClose={handleCloseDialogViewData}>
                        <DialogViewData car={car}
                        />
                    </Dialog>
                )}
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    onCellEditCommit={(data) => {
                        editRow(data);
                    }}
                    hideFooterRowCount={true}
                    // checkboxSelection
                    disableSelectionOnClick
                    autoHeight={true}
                    rowsPerPageOptions={[15]}
                />
            </Grid>
        </div>

    );
}

export default DataTable