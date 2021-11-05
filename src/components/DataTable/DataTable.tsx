import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid'
import { useState } from 'react';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import { CharacterForm } from '../../components/CharacterForm';


const columns: GridColDef[] = [
    { field: 'id', 
    headerName: 'ID',
    width: 100 },
    {
    field: 'name',
    headerName: 'Name',
    width: 150
    },
    {
    field: 'description',
    headerName: 'Description',
    width: 300
    },
    {
    field: 'bio',
    headerName: 'Biography',
    width: 400
    },
    {
    field: 'physical_appearance',
    headerName: 'Physical Appearance',
    width: 210
    },
    {
    field: 'universe',
    headerName: 'Universe',
    width: 150
    },
];

interface gridData{
    data:{
        id?:string;
    }
}
export const DataTable = () =>{
    let { characterData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}});
    const [selectionModel, setSelectionModel] = useState<any>([]);


    let handleOpen = () => {
        setOpen(true)
    }
    let handleClose = () => {
        setOpen(false)
    }
    let deleteData = async () => {
        await server_calls.delete(selectionModel)
        getData()
    }

    return (
        <div style={{ height: 400, width: '100%' }} >
            <h2>Characters in Inventory</h2>
            <DataGrid 
				rows={characterData} 
				columns={columns} 
				pageSize={5} 
				checkboxSelection 
				onSelectionModelChange = {(item) => {setSelectionModel(item)
                }}
				{...characterData}  
			/>
        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update A Character</DialogTitle>
                <DialogContent>
            <DialogContentText>Character id: {selectionModel}</DialogContentText>
                <CharacterForm id={`${selectionModel}`}/>
                </DialogContent>
            <DialogActions>
                <Button onClick = {handleClose} color="primary">Cancel</Button>
                <Button onClick = {handleClose} color="primary">Done</Button> 
            </DialogActions>
        </Dialog>
        </div>
    );
}