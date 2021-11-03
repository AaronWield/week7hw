import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
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
    field: 'phys_app',
    headerName: 'Physical Appearance',
    width: 210
    },
    {
    field: 'universe',
    headerName: 'Universe',
    width: 150
    },
];

const rows = [
    { id: 1, name: 'Darth Vader', description: 'Sith Lord, enforcer of the Galactic Empire',
    bio: 'Born Anakin Skywalker, trained Jedi Knight, seduced by Dark Side. Father of Luke and Leia.', 
    phys_app: 'Full black metal suit, red lightsaber', universe: 'Star Wars' 
    },
    { id: 2, name: 'Goku', description: 'Saiyan warrior, protector of Earth',
    bio: "Eccentric boy, born Kakarot. A Saiyan, sent to Earth, trained to be Earth's greatest warrior.",
    phys_app: 'Muscular, good-natured male', universe: 'Dragon Ball' 
    },
    { id: 3, name: 'Vito Corleone', description: 'Patriarch of the Corleone crime family, powerful mob boss.', 
    bio: 'Forced to the move to New York, USA from Italy as a boy. Went on to build the most powerful crime family in the United States.', 
    phys_app: null, universe: 'The Godfather' 
    },
    { id: 4, name: 'Harry Potter', description: 'The Boy Who Lived', 
    bio: 'Parents killed by Lord Voldemort. Only wizard to survive the Dark Lords killing curse. Destined to fight Voldemort.', 
    phys_app: 'Lightning bolt scar on forehead', universe: 'Harry Potter' 
    },
    { id: 5, name: 'Thanos', description: 'The Mad Titan', 
    bio: 'Extremely powerful warlord from the moon Titan, bent on accomplishing his twisted plans for power.', 
    phys_app: null , universe: 'Marvel' 
    },
    { id: 6, name: 'Yoshi', description: "Mario and Luigi's Sidekick", 
    bio: 'Loyal friend to Mario and Luigi; able to eat enemies.', 
    phys_app: 'Dinosaur', universe: 'Super Mario'
    },
];

export const DataTable = () =>{
    return (
        <div style={{ height: 400, width: '100%' }} >
            <h2>Characters in Inventory</h2>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}