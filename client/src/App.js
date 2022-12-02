import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Welcome from './pages/Welcome/Cards/Cards';
import CompanySignup from './pages/CompanySignup/CompanySignup';
import ResearcherSignup from './pages/ResearcherSignup/ResearcherSignup';
import Login from './pages/Login/Login';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
      </Routes>
      <Routes>
        <Route path='/companysignup' element={<CompanySignup />} />
      </Routes>
      <Routes>
        <Route path='/researchersignup' element={<ResearcherSignup />} />
      </Routes>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
