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
import { Registration } from "../../interface/registration.interface";

const CREDIT_FOR_GRADUATION = 30;

export const Student = () => {
  const navigate = useNavigate();
  const { student } = useParams<{ student: string }>();
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [creditTotal, setCreditTotal] = useState<number>(0);
  const [registeredLectures, setRegisteredLectures] = useState<Registration[]>(
    []
  );
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
          setRegisteredLectures(res.data);
        });
    })();
  }, [student]);

  useEffect(() => {
    (async () => {
      const newLectures: Lecture[] = [];
      let newCreditTotal: number = 0;
      for (var registeredLecture of registeredLectures) {
        await axios
          .get(
            `http://localhost:3001/lectures/lecture/${registeredLecture.lecture}`
          )
          // eslint-disable-next-line
          .then((res) => {
            newLectures.push(res.data);
            newCreditTotal = newCreditTotal + res.data.credit;
          });
      }
      setLectures(newLectures);
      setCreditTotal(newCreditTotal);
    })();
  }, [registeredLectures]);

  const CustomDiv = styled("div")({
    color: "red",
    textAlign: "center",
  });
  const Div2 = styled("div")({
    display: "flex",
    justifyContent: "center",
  });
  const Divbutton = styled("div")({
    display: "flex",
    justifyContent: "center",
  });
  const Divp = styled("div")({
    fontSize: 36,
    color: "blue",
  });
  const CustomP = styled("p")({
    margin: "0 3rem",
  });

  return (
    <>
      <title>履修中の科目</title>

      <CustomDiv>
        <h1>{student}さんの履修中科目</h1>
      </CustomDiv>
      <Div2>
        <CustomP>卒業必要単位: {CREDIT_FOR_GRADUATION}</CustomP>
        <CustomP>獲得予定単位: {creditTotal} </CustomP>
        <CustomP>卒業まであと: {CREDIT_FOR_GRADUATION - creditTotal}</CustomP>
      </Div2>
      <Divbutton>
        <Button
          variant="contained"
          style={{ margin: "0 3rem" }}
          onClick={() => navigate(`/student/${student}/registration`)}
        >
          履修登録
        </Button>
        <Button
          variant="outlined"
          style={{ margin: "0 2rem" }}
          onClick={() => navigate(`/student/${student}/cancellation`)}
        >
          履修取消
        </Button>
      </Divbutton>
      <Divp>
        <p>現在履修中の科目</p>
      </Divp>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>科目名</TableCell>
              <TableCell align="right">時間</TableCell>
              <TableCell align="right">担当教員名</TableCell>
              <TableCell align="right">単位数</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomDiv>
        <Button
          variant="outlined"
          onClick={() => navigate(`/`)}
          sx={{ margin: "4rem" }}
        >
          戻る
        </Button>
      </CustomDiv>
    </>
  );
};
