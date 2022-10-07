import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const Home = () => {
  const [studentName, setStudentName] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ textAlign: "center" }}>HOME</h1>
      <div className="container" style={{ display: "flex", justifyContent: "center" }}>
        <div className="teacher" style={{margin: "3rem"}}>
          <h2>TEACHER</h2>
            <TextField id="teacher-name-input" label="Name" variant="outlined" onChange={(e) => setTeacherName(e.target.value)}/>
            <Button variant="contained" onClick={() => navigate(`/teacher/${teacherName}`)}>ENTER</Button>
        </div>
        <div className="student" style={{margin: "3rem"}}>
          <h2>STUDENT</h2>
          <TextField id="student-name-input" label="Name" variant="outlined" onChange={(e) => setStudentName(e.target.value)}/>
          <Button variant="contained" onClick={() => navigate(`/student/${studentName}`)}>ENTER</Button>
        </div>
      </div>
    </>
  );
};
