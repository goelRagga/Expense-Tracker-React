import React, { useState, useContext, useEffect } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles'
import { v4 as uuidv4 } from 'uuid'

const initialState ={
    amount:'',
    category:'',
    type:'',
    date:new Date(),
}
const Form = () => {
    const classes = useStyles();
    const [formData, setformData] = useState(initialState);
    
    const { addTransaction } = useContext(ExpenseTrackerContext);
    console.log(formData);
    
    const createTransaction =() =>{
        
        const transaction = {...formData, amount: Number(formData.amount), id: uuidv4()};
        addTransaction(transaction);
        setformData(initialState);
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography>
                    .....
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e)=>setformData({...formData,type:e.target.value})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel>Cataegory</InputLabel>
                    <Select value={formData.category} onChange={(e)=>setformData({...formData,category:e.target.value})}>
                        <MenuItem value="business"> Business </MenuItem>
                        <MenuItem value="salary"> Salary </MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullwidth value={formData.amount} onChange={(e)=>setformData({...formData,amount:e.target.value})}/>
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullwidth value={formData.date} onChange={(e)=>setformData({...formData,date:e.target.value})}/>
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
        </Grid>
    )
}

export default Form
