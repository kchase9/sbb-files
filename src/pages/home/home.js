import React from 'react';
import './home.css'; // Include the corresponding CSS file for styling

const Home = () => {
    return (
        <div className="page">
    <div className="home-page ">
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
                        <small style={{culor: "red"}}>Please be careful when submitting documentation, you can only submit once</small>
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

                    <div className='sect-container green-border'>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?src=0bea85897c14e5c2a58e7bee3509c6a7d3d5a4bc1f3f5c94ef24f28d14d2d9a5%40group.calendar.google.com&ctz=America%2FGuyana"
                        style={{ border: 0, width: "100%", height: "600px" }}
                    ></iframe>

                    <div className='button-pair'>
                        <a href='' className='btn btn-green'>Request Appointment</a>
                    </div>
                    </div>
                </div>

                <div>
                    <div className="heading">
                        <h2>Grants</h2>
                        <p>
                        SBB offers small business development grants to eligible clients. Currently, the maximum
                        value of each grant is GYD$500,000.
                        </p>
                    </div>

                    <div className="side-by-side">
                        {/* <!-- Eligibility Section --> */}
                        <div className="culumn">
                        <div className="heading">
                            <h2>Eligibility</h2>
                        </div>
                        <p>
                            To be eligible for a small business development grant, the following requirements must be met:
                        </p>
                        <ul>
                            <li>Unemployed or employed by a private sector or non-governmental organization.</li>
                            <li>Owner(s) of a business or seeking to start a business.</li>
                            <li>Registered client(s) of the Small Business Bureau.</li>
                            <li>Submit copies of Business Registration, National Identification Card, and certificate of Tax Identification Number.</li>
                            <li>Submit a complete business plan document (template provided by SBB).</li>
                            <li>Submit quotations for items to be purchased with grant funding.</li>
                            <li>Submit valid GRA and NIS compliance documents.</li>
                        </ul>
                        </div>

                        {/* <!-- Grants Process Section --> */}
                        <div className="culumn">
                        <div className="heading">
                            <h2>Grants Process</h2>
                        </div>
                        <ul>
                            <li>Client(s) complete(s) grant application form and submits all required documents.</li>
                            <li>SBB reviews application and documents and interviews client(s).</li>
                            <li>SBB conducts a site visit of the business.</li>
                            <li>SBB submits grant documents to the Grants Committee for review and approval.</li>
                            <li>SBB informs client(s) of grant approval and invites client(s) to visit the office to sign the agreement.</li>
                            <li>Grant payment prepared, approved, and disbursed to client(s).</li>
                            <li>Client(s) submits receipts of items purchased with grant funding.</li>
                            <li>SBB conducts monitoring and evaluation visits of the business.</li>
                        </ul>
                        </div>
                    </div>

                    <div className="button-pair">
                        <a href="" className="btn btn-green">Business Plan/Grant Application Form</a>
                    </div>
                </div>

                <div className='sect-container green-border'>
                    <div className="heading">
                        <h2>Programmes</h2>
                    </div>

                    {/* Put the list of applications */}
                    <div className="list-container">
                        <div className='sect-container orange-border'>
                            <div className='programme-widget row'>
                                <div >
                                    <b>Programme Name:</b>
                                    <p>Kidpreneur</p>
                                </div>
                                <div>
                                    <b>Eligibility Status:</b>
                                    <p>Eligible</p>
                                </div>
                                <div>
                                    <a href='' className='btn btn-green'>Apply</a>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
            
    );
};

export default Home;
