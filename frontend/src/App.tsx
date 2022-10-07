import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Student } from './pages/student/student';
import { Teacher } from './pages/teacher/teacher';
import { Home } from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:student" element={<Student />} />;
        <Route path="/teacher/:teacher" element={<Teacher />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
