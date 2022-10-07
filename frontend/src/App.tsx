import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Student } from './pages/student/student';
import { Teacher } from './pages/teacher/teacher';
import { Home } from './pages/home/home';
import { RegisteredStudents } from './pages/registeredStudents/registeredStudents';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/*" element={<Student />} />;
        <Route path="/teacher/*" element={<Teacher />} />
        <Route path="/registeredStudents/*" element={<RegisteredStudents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
