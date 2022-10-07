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
import { Lecture } from "../../interface/lecture.interface";
import { TeacherRow } from "../../interface/row.teacher.interface";

export const Teacher = () => {
  const navigate = useNavigate();
  const { teacher } = useParams<{ teacher: string }>();
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const days = ["日", "月", "火", "水", "木", "金", "土"];

  const rows: TeacherRow[] = [];

  lectures.forEach((lecture: Lecture) => {
    rows.push({
      name: lecture.name,
      classroom: lecture.year.toString() + lecture.major,
      time: days[lecture.day] + "曜日" + lecture.period.toString() + "限",
    });
  });

  useEffect(() => {
    (async () => {
      await axios
        .get(`http://localhost:3001/lectures/teacher/${teacher}`)
        .then((res: any) => {
          setLectures(res.data);
        });
    })();
  }, [teacher]);

  return (
    <div>
      <h1 style={{ color: "green" }}>担当科目({teacher}先生)</h1>
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
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.classroom}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => navigate(`/teacher/${teacher}/${row.name}`)}
                  >
                    履修学生一覧
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ textAlign: "center" }}>
        <Button
          variant="outlined"
          onClick={() => navigate(`/`)}
          sx={{ margin: "4rem" }}
        >
          戻る
        </Button>
      </div>
    </div>
  );
};
