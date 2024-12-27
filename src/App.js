import './App.css';
import Header from './components/header/header.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome/welcome.js';


function App() {
  return (
    <Router>
          <Header />
            <Routes>
                <Route path="/" element={<Welcome />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
  );
}

export default App;
