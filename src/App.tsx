import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/LoginForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/registro" element={<Registro />} /> */}
          <Route path="/login" element={<LoginForm />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
