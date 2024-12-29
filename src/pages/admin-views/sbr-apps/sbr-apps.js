// import React from 'react';
// import "./sbr-apps.css";
// import ViewListLayout from "../../../templates/view-list-layout/view-list-layout.js";

// // entirely dummy functions
// import axios from "axios";
// import { API_BASE_URL } from "../../../../src/config.js";

//     const fetchRegistrations = async () => {
//         const response = await axios.get(`/api/registrations`);
//         console.log(response.data); // Display fetched data
//     };

//     fetchRegistrations();

// const SBRApps = ()=>{
//     return(
//         <ViewListLayout title='Small Business Registration Applications'>
//             {/* figure out a for each when we have multiple applications */}

//             <div className='list-view'>
//                 <div className="sect-container green-border">
//                     <div className="row">
//                         {/* four sections: id name approval status button */}
//                         <div className='widget-col'>
//                             <strong>ApplicantID</strong>
//                             <p>123456</p>
//                         </div>
//                         <div className='widget-col'>
//                             <strong>Business Name</strong>
//                             <p>ABC Inc</p>
//                         </div>
//                         <div className='widget-col'>
//                             <strong>Approval Status</strong>
//                             <p>Rejected</p>
//                         </div>
//                         <div className='widget-col'>
//                             <a href='/admin-review-app' className='btn btn-green'>Review Application</a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* AGAIN, DUMMY INFO. IN NO CIRCUMSTANCE MUST THIS BE LEFT */}
//                 <div className="sect-container green-border">
//                     <div className="row">
//                         {/* four sections: id name approval status button */}
//                         <div className='widget-col'>
//                             <strong>ApplicantID</strong>
//                             <p>123456</p>
//                         </div>
//                         <div className='widget-col'>
//                             <strong>Business Name</strong>
//                             <p>ABC Inc</p>
//                         </div>
//                         <div className='widget-col'>
//                             <strong>Approval Status</strong>
//                             <p>Rejected</p>
//                         </div>
//                         <div className='widget-col'>
//                             <a href='/admin-review-app' className='btn btn-green'>Review Application</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="sect-container green-border">
//                     <div className="row">
//                         {/* four sections: id name approval status button */}
//                         <div className='widget-col'>
//                             <strong>ApplicantID</strong>
//                             <p>123456</p>
//                         </div>
//                         <div className='widget-col'>
//                             <strong>Business Name</strong>
//                             <p>ABC Inc</p>
//                         </div>
//                         <div className='widget-col'>
//                             <strong>Approval Status</strong>
//                             <p>Rejected</p>
//                         </div>
//                         <div className='widget-col'>
//                             <a href='/admin-review-app' className='btn btn-green'>Review Application</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>

            
//         </ViewListLayout>

//     );
// }

// export default SBRApps;

import React, { useState, useEffect } from 'react';
import "./sbr-apps.css";
import ViewListLayout from "../../../templates/view-list-layout/view-list-layout.js";
import axios from "axios";
import { API_BASE_URL } from "../../../../src/config.js";

const SBRApps = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem('token');
                const response = await axios.get(`${API_BASE_URL}/api/registrations`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                
                setApplications(response.data.registrations || response.data);
                setError(null);
            } catch (err) {
                console.error('Error fetching applications:', err);
                setError('Failed to load applications. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, []);

    if (loading) {
        return (
            <ViewListLayout title='Small Business Registration Applications'>
                <div className="sect-container">
                    <p>Loading applications...</p>
                </div>
            </ViewListLayout>
        );
    }

    if (error) {
        return (
            <ViewListLayout title='Small Business Registration Applications'>
                <div className="sect-container red-border">
                    <p className="text-red-600">{error}</p>
                </div>
            </ViewListLayout>
        );
    }

    return (
        <ViewListLayout title='Small Business Registration Applications'>
            <div className='list-view'>
                {applications.length === 0 ? (
                    <div className="sect-container orange-border">
                        <p>No applications found.</p>
                    </div>
                ) : (
                    applications.map((app) => (
                        <div key={app.id} className="sect-container green-border">
                            <div className="row">
                                <div className='widget-col'>
                                    <strong>ApplicantID</strong>
                                    <p>{app.id || 'N/A'}</p>
                                </div>
                                <div className='widget-col'>
                                    <strong>Business Name</strong>
                                    <p>{app.business_name || 'N/A'}</p>
                                </div>
                                <div className='widget-col'>
                                    <strong>Approval Status</strong>
                                    <p>{app.status || 'Pending'}</p>
                                </div>
                                <div className='widget-col'>
                                    <a 
                                        href={`/admin-review-app/${app.id}`} 
                                        className='btn btn-green'
                                    >
                                        Review Application
                                    </a>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className='widget-col'>
                                    <strong>Contact Name</strong>
                                    <p>{app.primary_contact_name || 'N/A'}</p>
                                </div>
                                <div className='widget-col'>
                                    <strong>Contact Email</strong>
                                    <p>{app.primary_contact_email || 'N/A'}</p>
                                </div>
                                <div className='widget-col'>
                                    <strong>Submission Date</strong>
                                    <p>{new Date(app.created_at).toLocaleDateString() || 'N/A'}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </ViewListLayout>
    );
};

export default SBRApps;