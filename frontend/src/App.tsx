import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Student } from './pages/student/student';
import { Teacher } from './pages/teacher/teacher';
import { Home } from './pages/home/home';
import { RegisteredStudents } from './pages/registeredStudents/registeredStudents';
import { RegisterLecture } from './pages/registerLecture/registerLecture';
import { CancelLecture } from './pages/cancelLecture/cancelLecture';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:student" element={<Student />} />
        <Route path="/student/:student/registration" element={<RegisterLecture />} />
        <Route path="/student/:student/cancellation" element={<CancelLecture />} />
        <Route path="/teacher/:teacher" element={<Teacher />} />
        <Route path="/teacher/:teacher/:lecture" element={<RegisteredStudents />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
