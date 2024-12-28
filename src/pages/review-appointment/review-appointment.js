import React from 'react';
import './review-appointment.css';
import EditInfoLayout from '../../templates/edit-info-layout/edit-info-layout.js';

const ReviewAppointment = () => {
    return (
        <EditInfoLayout title="Review Appointment">
            <div className="info-container">
                <div className="info-section">
                    <h2>Form Filling Consultation</h2>
                    <p><strong>Date:</strong> 03/09/2024</p>
                    <p><strong>Time:</strong> 12:00 - 14:00</p>
                </div>
                <div className="info-section">
                    <h3>Names and Positions of Employees in Attendance</h3>
                    <ul>
                        <li>
                            <strong>John Doe</strong> - Manager
                        </li>
                        <li>
                            <strong>John Doe</strong> - Sales Representative
                        </li>
                    </ul>
                </div>
                <form>
                    {/* Some implicit application ID */}
                    <div className='btn-container'>
                        <button type="submit" className="btn btn-green">Accept</button>
                        <button type="button" className="btn btn-red">Reject</button>
                        <a href='/admin-home' className="btn btn-gray">
                            Home
                        </a>
                    </div>
                </form>
            </div>
        </EditInfoLayout>
    );
};

export default ReviewAppointment;
