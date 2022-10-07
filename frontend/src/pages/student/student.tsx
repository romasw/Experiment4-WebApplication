import { styled } from "@mui/material"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




function createData(
  name: string,
  id: number,
  teacher: string,
  units: number,
) {
  return { name, id, teacher, units};
}

const rows = [
  createData('Frozen yoghurt', 159, 'おれ', 24),
  createData('Ice cream sandwich', 237, 'おれ', 37),
  createData('Eclair', 262, 'σ(ﾟ∀ﾟ )ｵﾚ', 24),
  createData('Cupcake', 305, 'おれ', 67),
];




export const Student = () => {
    const allunits = 12
    const CustomDiv = styled('h1')({
        color: 'red',
        textAlign:"center"
    });
    const Div2 = styled('div')({
      display: "flex",
      justifyContent: "space-around",
    });
    const Divbutton = styled('div')({
      display: "flex",
      justifyContent: "space-around",
    });
    const Divp = styled('p')({
       fontSize: 36,
       color:"blue",
    })
    return(
        <>
            <title>履修中の科目</title>

         <CustomDiv>
            <h1>履修中科目</h1>
         </CustomDiv>
         <Div2>
            <p>現在の単位数: {allunits} </p>
            <p>卒業に必要な単位:z</p>
          </Div2>
          <Divbutton>
          <button>科目履修登録</button>
          <button>登録削除</button>
          </Divbutton>
            <Divp><p>現在履修中の科目</p></Divp>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>科目名</TableCell>
            <TableCell align="right">科目ID</TableCell>
            <TableCell align="right">担当教員名</TableCell>
            <TableCell align="right">単位数</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.teacher}</TableCell>
              <TableCell align="right">{row.units}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </>
    );
}
