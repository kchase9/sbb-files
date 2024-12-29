// import './App.css';
// import Header from './components/header/header.js';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Welcome from './pages/welcome/welcome.js';
// import Home from './pages/home/home.js';
// import AdminHome from './pages/admin-home/admin-home.js';
// import AddDocument from './pages/add-document/add-document.js';
// import RequestDocumentChange from './pages/request-document-change/request-document-change.js';
// import RequestAppointment from './pages/request-appointment/request-appointment.js';
// import ReviewAppointment from './pages/review-appointment/review-appointment.js';
// import SBRegistration from './pages/sb-registration/sb-registration.js';
// import ClientReviewApp from './pages/review-application/client/client-review-app.js';
// import AdminReviewApp from './pages/review-application/admin/admin-review-app.js';
// import SBRApps from './pages/admin-views/sbr-apps/sbr-apps.js';
// import DocChange from './pages/admin-views/doc-change/doc-change.js';
// import ApptSchedules from './pages/admin-views/appt-schedules/appt-schedules.js';


// function App() {
//   return (
//     <Router>
//           <Header />
//             <Routes>
//                 <Route path="/" element={<Welcome />} />

//                 {/* If you're signed in, admins go to admin-home, users go to home */}
//                 {/* User Routes */}
//                 <Route path="/home" element={<Home />} />
//                 <Route path="/add-document" element={<AddDocument />} />
//                 <Route path="/change-document" element={<RequestDocumentChange />} />
//                 <Route path="/request-appointment" element={<RequestAppointment />} />
//                 <Route path="/sb-registration" element={<SBRegistration />} />
//                 <Route path="/client-review-app" element={<ClientReviewApp />} />

//                 {/* Admin Routes */}
//                 <Route path="/admin-review-appt/:id" element={<ReviewAppointment />} />
//                 <Route path="/admin-review-app/:id" element={<AdminReviewApp />} />
//                 <Route path="/admin-home" element={<AdminHome />} />
//                 <Route path="/doc-change-review" element={<DocChange />} />
//                 <Route path="/sbr-apps" element={<SBRApps />} />
//                 <Route path="/appt-schedules" element={<ApptSchedules />} />

//                 {/* any admin that wants to get a user url goes to /admin-home, and user that goes to admin url goes to /home */}

//                 {/* Add other routes here */}
//                 <Route path="*" element={<Navigate to="/" replace />} />
//             </Routes>
//         </Router>
//   );
// }

// export default App;


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
import DocChange from './pages/admin-views/doc-change/doc-change.js';
import ApptSchedules from './pages/admin-views/appt-schedules/appt-schedules.js';
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component

function App() {
  // Mock authentication status and role
  const isAuthenticated = localStorage.getItem('token') ? true : false;
  const userRole = isAuthenticated ? localStorage.getItem('role') || 'user' : null;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />

        {/* User Routes */}
        <Route
          path="/home"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} allowedRoles={['user', 'admin']} userRole={userRole}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-document"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} allowedRoles={['user']} userRole={userRole}>
              <AddDocument />
            </PrivateRoute>
          }
        />
        <Route
          path="/change-document"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} allowedRoles={['user']} userRole={userRole}>
              <RequestDocumentChange />
            </PrivateRoute>
          }
        />
        <Route
          path="/request-appointment"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} allowedRoles={['user']} userRole={userRole}>
              <RequestAppointment />
            </PrivateRoute>
          }
        />
        <Route
          path="/sb-registration"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} allowedRoles={['user']} userRole={userRole}>
              <SBRegistration />
            </PrivateRoute>
          }
        />
        <Route
          path="/client-review-app"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} allowedRoles={['user']} userRole={userRole}>
              <ClientReviewApp />
            </PrivateRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin-review-appt/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} allowedRoles={['admin']} userRole={userRole}>
              <ReviewAppointment />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-review-app/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} allowedRoles={['admin']} userRole={userRole}>
              <AdminReviewApp />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-home"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} allowedRoles={['admin']} userRole={userRole}>
              <AdminHome />
            </PrivateRoute>
          }
        />
        <Route
          path="/doc-change-review"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} allowedRoles={['admin']} userRole={userRole}>
              <DocChange />
            </PrivateRoute>
          }
        />
        <Route
          path="/sbr-apps"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} allowedRoles={['admin']} userRole={userRole}>
              <SBRApps />
            </PrivateRoute>
          }
        />
        <Route
          path="/appt-schedules"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} allowedRoles={['admin']} userRole={userRole}>
              <ApptSchedules />
            </PrivateRoute>
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
