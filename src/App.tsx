import React, { useEffect, useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { carShopActions } from './redux/carShop/slice';
import DataTable from './components/DataTable/DataTable';
import { AppBar, Box, Grid, Toolbar, Typography } from '@material-ui/core';
import { ICar } from './interfaces';
function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const { carList } = useAppSelector((state) => { return state.carShop });
  const [filterTest, setFilterTest] = useState<string>('');
  const [list, setList] = useState<ICar[]>([]);

  useEffect(() => {
    dispatch(carShopActions.getAllCars());
  }, [])

  useEffect(() => {
    console.log(filterTest)
    setList(carList.filter(e => e?.model?.includes(filterTest)))
  }, [carList, filterTest])

  const filterList = (valueToFilter: string): void => {
    setFilterTest(valueToFilter);
  }

  return (
    <div className="App">
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" >
              Car Database
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid item container className='table' data-testid="dataTable">
          <DataTable carList={list} filterList={filterList} />
        </Grid>
      </Box>
    </div >
  );
}

export default App;
