import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const DestinationTable = ({rows, selectedDestination, deleteDestination}) => {
    return(
        <TableContainer component={Paper}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                    rows.length > 0? rows.map(row => (
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th' : {border: 0}}}>
                        <TableCell component='th' scope="row">{row.id}</TableCell>
                        <TableCell component='th' scope="row">{row.title}</TableCell>
                        <TableCell component='th' scope="row">{row.description}</TableCell>
                        <TableCell >
                            <Button
                            sx={{margin: '0px 10px'}}
                            onClick={() => selectedDestination({id : row.id, title : row.title, description : row.description})}
                            >
                            update

                            </Button>

                            <Button
                            sx={{margin: '0px 10px'}}
                            onClick={() => deleteDestination({id : row.id})}
                            >
                            delete

                            </Button>
                        </TableCell>
                        </TableRow>
                        
                    )) : (
                        <TableRow sx={{'&:last-child td, &:last-child th' : {border: 0}}}>
                        <TableCell component='th' scope="row">No Data</TableCell>
                        </TableRow>
                    )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DestinationTable;