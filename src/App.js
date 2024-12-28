import './App.css';
import Header from './components/header/header.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/welcome/welcome.js';
import Home from './pages/home/home.js';
import AdminHome from './pages/admin-home/admin-home.js';
import AddDocument from './pages/add-document/add-document.js';
import RequestDocumentChange from './pages/request-document-change/request-document-change.js';
import RequestAppointment from './pages/request-appointment/request-appointment.js';
import ReviewAppointment from './pages/review-appointment/review-appointment.js';
import SBRegistration from './pages/sb-registration/sb-registration.js';
import ClientReviewApp from './pages/review-application/client/client-review-app.js';
import AdminReviewApp from './pages/review-application/admin/admin-review-app.js';
import SBRApps from './pages/admin-views/sbr-apps/sbr-apps.js';
import ApptSchedules from './pages/admin-views/appt-schedules/appt-schedules.js';


function App() {
  return (
    <Router>
          <Header />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/home" element={<Home />} />
                <Route path="/add-document" element={<AddDocument />} />
                <Route path="/change-document" element={<RequestDocumentChange />} />
                <Route path="/request-appointment" element={<RequestAppointment />} />
                <Route path="/review-appointment" element={<ReviewAppointment />} />
                <Route path="/sb-registration" element={<SBRegistration />} />
                <Route path="/client-review-app" element={<ClientReviewApp />} />
                <Route path="/admin-review-app" element={<AdminReviewApp />} />
                <Route path="/admin-home" element={<AdminHome />} />
                <Route path="/sbr-apps" element={<SBRApps />} />
                <Route path="/appt-schedules" element={<ApptSchedules />} />
                {/* Add other routes here */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
  );
}

export default App;
