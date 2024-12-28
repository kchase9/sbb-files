import React from 'react';
import "./sbr-apps.css";
import ViewListLayout from "../../../templates/view-list-layout/view-list-layout.js";

// entirely dummy functions
import axios from "axios";
import { API_BASE_URL } from "../../../../src/config.js";

    const fetchRegistrations = async () => {
        const response = await axios.get(`/api/registrations`);
        console.log(response.data); // Display fetched data
    };

    fetchRegistrations();

const SBRApps = ()=>{
    return(
        <ViewListLayout title='Small Business Registration Applications'>
            {/* figure out a for each when we have multiple applications */}

            <div className='list-view'>
                <div className="sect-container green-border">
                    <div className="row">
                        {/* four sections: id name approval status button */}
                        <div className='widget-col'>
                            <strong>ApplicantID</strong>
                            <p>123456</p>
                        </div>
                        <div className='widget-col'>
                            <strong>Business Name</strong>
                            <p>ABC Inc</p>
                        </div>
                        <div className='widget-col'>
                            <strong>Approval Status</strong>
                            <p>Rejected</p>
                        </div>
                        <div className='widget-col'>
                            <a href='/admin-review-app' className='btn btn-green'>Review Application</a>
                        </div>
                    </div>
                </div>

                {/* AGAIN, DUMMY INFO. IN NO CIRCUMSTANCE MUST THIS BE LEFT */}
                <div className="sect-container green-border">
                    <div className="row">
                        {/* four sections: id name approval status button */}
                        <div className='widget-col'>
                            <strong>ApplicantID</strong>
                            <p>123456</p>
                        </div>
                        <div className='widget-col'>
                            <strong>Business Name</strong>
                            <p>ABC Inc</p>
                        </div>
                        <div className='widget-col'>
                            <strong>Approval Status</strong>
                            <p>Rejected</p>
                        </div>
                        <div className='widget-col'>
                            <a href='/admin-review-app' className='btn btn-green'>Review Application</a>
                        </div>
                    </div>
                </div>
                <div className="sect-container green-border">
                    <div className="row">
                        {/* four sections: id name approval status button */}
                        <div className='widget-col'>
                            <strong>ApplicantID</strong>
                            <p>123456</p>
                        </div>
                        <div className='widget-col'>
                            <strong>Business Name</strong>
                            <p>ABC Inc</p>
                        </div>
                        <div className='widget-col'>
                            <strong>Approval Status</strong>
                            <p>Rejected</p>
                        </div>
                        <div className='widget-col'>
                            <a href='/admin-review-app' className='btn btn-green'>Review Application</a>
                        </div>
                    </div>
                </div>
            </div>

            
        </ViewListLayout>

    );
}

export default SBRApps;