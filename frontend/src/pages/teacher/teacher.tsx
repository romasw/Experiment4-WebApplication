import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";

function createData(
  subject: string,
  classes: string,
  time: string,
) {
  return { subject, classes, time };
}

const rows = [
  createData('科目A', '5I', 'n1曜日n1時間目'),
  createData('科目B', '5I', 'n2曜日n2時間目'),
  createData('科目C', '4I', 'n3曜日n3時間目'),
  createData('科目D', '3I', 'n4曜日n4時間目'),
  createData('科目E', '2I', 'n5曜日n5時間目'),
];

export const Teacher = () => {

    return(
      <div>
        <h1 style={{color: "green"}}>担当科目(T沢先生)</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>科目</TableCell>
                <TableCell align="right">クラス</TableCell>
                <TableCell align="right">時間</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.subject}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.subject}
                  </TableCell>
                  <TableCell align="right">{row.classes}</TableCell>
                  <TableCell align="right">{row.time}</TableCell>
                  <TableCell align="right"><Button variant="contained">履修している学生一覧</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
}
