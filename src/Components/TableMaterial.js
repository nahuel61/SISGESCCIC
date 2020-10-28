import React from "react";
import {Table,TableBody,TableCell, TableContainer,TableHead,TableRow} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";


const StyledTableCell = withStyles(()=>({
    head:{
        color:'white',
        background:'black',
        textAlign: 'center'
    },
    body:{
        fontsize:14,
    }

}))(TableCell);

function TableMaterial(props){
    return(
        <TableContainer>
            <Table>
            <TableHead>
                <TableRow>
                    <StyledTableCell>video</StyledTableCell>
                    <StyledTableCell>fecha</StyledTableCell>
                    <StyledTableCell>numero</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map(elemento=>(
                    <TableRow key={elemento.id}>
                        <TableCell><img src={elemento.imagen} width="35px" height="25px"/>{"  "}{elemento.video}</TableCell>
                        <TableCell align ="center">{elemento.fecha}</TableCell>
                        <TableCell align ="center" >{elemento.visualizaciones}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableMaterial;