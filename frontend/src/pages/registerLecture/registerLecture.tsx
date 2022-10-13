import { Button, styled } from "@mui/material";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Lecture } from "../../interface/lecture.interface";
import { StudentRow } from "../../interface/row.student.interface";

export const RegisterLecture = (props: any) => {
  const navigate = useNavigate();
  const { student } = useParams<{ student: string }>();
  const [count, setCount] = useState<number>(0);
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [registeredLectures, setRegisteredLectures] = useState<string[]>([]);
  const days = ["日", "月", "火", "水", "木", "金", "土"];

  const rows: StudentRow[] = [];

  lectures.forEach((lecture: Lecture) => {
    rows.push({
      name: lecture.name,
      credit: lecture.credit,
      teacher: lecture.teacher,
      time: days[lecture.day] + "曜日" + lecture.period + "限",
    });
  });

  useEffect(() => {
    (async () => {
      await axios
        .get(`http://localhost:3001/registration/student/${student}`)
        .then((res) => {
          const lectures: string[] = [];
          res.data.forEach((data: any) => {
            lectures.push(data.lecture);
          });
          setRegisteredLectures(lectures);
        });
    })();
  }, [student, count]);

  useEffect(() => {
    (async () => {
      const notRegisteredLectures: Lecture[] = [];
      await axios.get(`http://localhost:3001/lectures`).then((res) => {
        res.data.forEach((data: any) => {
          let isContained = false;
          registeredLectures.forEach((registeredLecture) => {
            if (data.name === registeredLecture) {
              isContained = true;
            }
          });
          if (!isContained) {
            notRegisteredLectures.push(data);
          }
        });
      });
      setLectures(notRegisteredLectures);
    })();
  }, [registeredLectures]);

  const CustomDiv = styled("div")({
    color: "red",
    textAlign: "center",
  });
  const Divp = styled("div")({
    fontSize: 36,
    color: "blue",
  });

  const handleSubmit = async (lecture: string) => {
    await axios.post("http://localhost:3001/registration", {
      student: student,
      lecture: lecture,
    });
    setCount(count + 1);
  };

  return (
    <>
      <title>履修登録</title>

      <CustomDiv>
        <h1>履修登録</h1>
      </CustomDiv>
      <Divp>
        <p>現在未履修の科目</p>
      </Divp>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>科目名</TableCell>
              <TableCell align="right">時間</TableCell>
              <TableCell align="right">担当教員名</TableCell>
              <TableCell align="right">単位数</TableCell>
              <TableCell align="center"></TableCell>
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
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.teacher}</TableCell>
                <TableCell align="right">{row.credit}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => handleSubmit(row.name)}
                  >
                    履修する
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomDiv>
        <Button
          variant="outlined"
          onClick={() => navigate(`/student/${student}/`)}
          sx={{ margin: "4rem" }}
        >
          戻る
        </Button>
      </CustomDiv>
    </>
  );
};
