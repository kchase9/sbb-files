import React from 'react';
import './home.css'; // Include the corresponding CSS file for styling

const Home = () => {
    return (
        <div className="home-page page">
            <div className='heading'>
                <h1>Welcome</h1>
                <p>Manage your relationship with the Guyana Small Business Bureau</p>
            </div>

            <div className='sect-container green-border'>
                <div className='heading'>
                    <h2>Applications</h2>
                </div>

                {/* Make the application previews here */}
            </div>

            <div className='sect-container orange-border'>
                <div className='heading'>
                    <h2>Documentation</h2>
                    <small style={{color: "red"}}>Please be careful when submitting documentation, you can only submit once</small>
                </div>

                {/* Make the documentation previews here 
                Looks something like forevery document, show an icon and the name below it*/}

                <div className='button-pair'>
                    <a href='' className='btn btn-green'>Request Document Change</a>
                    <a href='' className='btn btn-green'>Add New Document</a>
                </div>
            </div>
            
            <div>
                <div className='heading'>
                    <h2>Schedule Appointments</h2>
                </div>
                <div className='row'>
                    <div className='sect'>
                        How it works:
                    </div>
                    <div className='sect'>To schedule an appointment, click “Request Appointment” and fill out the required fields. After submitting a request, our staff will review the appointment schedule and approve/reject your request based on the availability of the relevant internal attendees.<br />Red appointments have been rejected.<br />Green appointments have been approved.<br />Yellow appointments are awaiting approval.</div>
                </div>
            </div>


        </div>
    );
};

export default Home;
