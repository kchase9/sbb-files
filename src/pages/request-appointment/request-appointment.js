import React, { useState } from 'react';
import EditInfoLayout from '../../templates/edit-info-layout/edit-info-layout.js';
import './request-appointment.css';

const RequestAppointment = () => {
    const [employees, setEmployees] = useState([{ name: '', jobTitle: '' }]);

    const handleEmployeeChange = (index, field, value) => {
        const updatedEmployees = [...employees];
        updatedEmployees[index][field] = value;
        setEmployees(updatedEmployees);
    };

    const addEmployee = () => {
        setEmployees([...employees, { name: '', jobTitle: '' }]);
    };

    const removeEmployee = (index) => {
        setEmployees(employees.filter((_, i) => i !== index));
    };

    return (
        <EditInfoLayout title="Request Appointment">
            <div className="request-appointment-form">
                <form>
                    {/* Purpose of Appointment */}
                    <div className="row">
                        <label htmlFor="purpose">Purpose of Appointment:</label>
                        <input
                            type="text"
                            id="purpose"
                            name="purpose"
                            placeholder="Dog-sledding in Guyana"
                        />
                    </div>

                    {/* Date and Time */}
                    <div className="row">
                        <label htmlFor="date">Date:</label>
                        <input type="date" id="date" name="date" />
                    </div>

                    <div className="row">
                        <label htmlFor="time">Time:</label>
                        <input type="time" id="time" name="time" />
                    </div>

                    {/* Employees in Attendance */}
                    <div className="employees-section">
                        <div className='row'>
                            <h3>Employees in Attendance:</h3>

                            <button
                            
                                type="button"
                                onClick={addEmployee}
                                className="btn btn-gray"
                            >
                                Add Employee
                            </button>
                        </div>

                        {employees.map((employee, index) => (
                            <div key={index} className="employee-entry">
                                <input
                                    type="text"
                                    placeholder="Employee Name"
                                    value={employee.name}
                                    onChange={(e) =>
                                        handleEmployeeChange(index, 'name', e.target.value)
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Job Title"
                                    value={employee.jobTitle}
                                    onChange={(e) =>
                                        handleEmployeeChange(index, 'jobTitle', e.target.value)
                                    }
                                />
                                <button
                                    type="button"
                                    onClick={() => removeEmployee(index)}
                                    className="btn btn-red"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        
                    </div>

                    {/* Submit Button */}
                    <div className="btn-container">
                        <a href='/home' className="btn btn-gray">
                            Home
                        </a>
                        <button type="submit" className="btn btn-green">
                            Submit
                        </button>
                    </div>
                        
                </form>
            </div>
        </EditInfoLayout>
    );
};

export default RequestAppointment;
