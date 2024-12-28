import './App.css';
import Header from './components/header/header.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome/welcome.js';
import Home from './pages/home/home.js';
import AddDocument from './pages/add-document/add-document.js';
import RequestDocumentChange from './pages/request-document-change/request-document-change.js';


function App() {
  return (
    <Router>
          <Header />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/home" element={<Home />} />
                <Route path="/add-document" element={<AddDocument />} />
                <Route path="/change-document" element={<RequestDocumentChange />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
  );
}

export default App;
