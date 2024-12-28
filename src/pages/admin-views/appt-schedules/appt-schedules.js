import React from 'react';
import "./appt-schedules.css"
import ViewListLayout from "../../../templates/view-list-layout/view-list-layout.js";

const ApptSchedules = () =>{
    return (
        <ViewListLayout title='Appointment Schedule Request'>
            {/* figure out a for each when we have multiple applications */}
            <div className='list-view'>
                <div className="sect-container green-border">
                    <div className="row">
                        {/* four sections: id name approval status button */}
                        <div className='widget-col'>
                            <strong>Business Name</strong>
                            <p>ABC Inc</p>
                        </div>
                        <div className='widget-col'>
                            <strong>Purpose</strong>
                            <p>Dogsledding...</p>
                        </div>
                        <div className='widget-col'>
                            <strong>Approval Status</strong>
                            <p>Rejected</p>
                        </div>
                        <div className='widget-col'>
                            <a href='/admin-review-appt' className='btn btn-green'>Review Application</a>
                        </div>
                    </div>
                </div>

                <div className="sect-container green-border">
                    <div className="row">
                        {/* four sections: id name approval status button */}
                        <div className='widget-col'>
                            <strong>Business Name</strong>
                            <p>ABC Inc</p>
                        </div>
                        <div className='widget-col'>
                            <strong>Purpose</strong>
                            <p>Dogsledding...</p>
                        </div>
                        <div className='widget-col'>
                            <strong>Approval Status</strong>
                            <p>Rejected</p>
                        </div>
                        <div className='widget-col'>
                            <a href='/admin-review-appt' className='btn btn-green'>Review Application</a>
                        </div>
                    </div>
                </div>
                <div className="sect-container green-border">
                    <div className="row">
                        {/* four sections: id name approval status button */}
                        <div className='widget-col'>
                            <strong>Business Name</strong>
                            <p>ABC Inc</p>
                        </div>
                        <div className='widget-col'>
                            <strong>Purpose</strong>
                            <p>Dogsledding...</p>
                        </div>
                        <div className='widget-col'>
                            <strong>Approval Status</strong>
                            <p>Rejected</p>
                        </div>
                        <div className='widget-col'>
                            <a href='/admin-review-appt' className='btn btn-green'>Review Application</a>
                        </div>
                    </div>
                </div>
                <div className="sect-container green-border">
                    <div className="row">
                        {/* four sections: id name approval status button */}
                        <div className='widget-col'>
                            <strong>Business Name</strong>
                            <p>ABC Inc</p>
                        </div>
                        <div className='widget-col'>
                            <strong>Purpose</strong>
                            <p>Dogsledding...</p>
                        </div>
                        <div className='widget-col'>
                            <strong>Approval Status</strong>
                            <p>Rejected</p>
                        </div>
                        <div className='widget-col'>
                            <a href='/admin-review-appt' className='btn btn-green'>Review Application</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </ViewListLayout>
    );
};

export default ApptSchedules