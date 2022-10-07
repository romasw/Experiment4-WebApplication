import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const RegisteredStudents = () => {
  const navigate = useNavigate();
  const { teacher } = useParams<{ teacher: string }>();
  const { lecture } = useParams<{ lecture: string }>();
  const [students, setStudents] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      await axios
        .get(`http://localhost:3001/registration/lecture/${lecture}`)
        .then((res: any) => {
          const registeredStudents: string[] = [];
          res.data.forEach((data: any) => {
            registeredStudents.push(data.student);
          });
          setStudents(registeredStudents);
        });
    })();
  }, [lecture]);

  return (
    <div>
      <h1 style={{ color: "green" }}>
        「{lecture}」受講学生(担当：{teacher}先生)
      </h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>学生</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow
                key={student}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {student}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ textAlign: "center" }}>
        <Button
          variant="outlined"
          onClick={() => navigate(`/teacher/${teacher}`)}
          sx={{ margin: "4rem" }}
        >
          戻る
        </Button>
      </div>
    </div>
  );
};
