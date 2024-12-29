// // import React, { useState, useEffect } from 'react';
// // import Containers from '../../../components/containers/containers.js';
// // import './client-review-app.css';
// // import axios from 'axios';

// // const ClientReviewApp = () => {
// //     const [registrationData, setRegistrationData] = useState({
// //         owners: [],
// //         dealerships: [],
// //         license: {
// //             name: null,
// //             number: null,
// //             expiration_date: null,
// //             details: null
// //         },
// //         survey_data: {
// //             services: { selected_services: [], grant_funding: null, training: null, loan_funding: null },
// //             business_challenges: { challenges: [], other_challenges: null },
// //             sbb_client: null,
// //             sbb_interactions: null
// //         },
// //         business_declaration: {
// //             owned_controlled: null,
// //             subsidiary_affiliate: null,
// //             charitable_political: null,
// //             declaration: {
// //                 primary: {
// //                     name: null,
// //                     signature: null,
// //                     position: null,
// //                     date: null
// //                 },
// //                 secondary: {
// //                     name: null,
// //                     signature: null,
// //                     position: null,
// //                     date: null
// //                 }
// //             }
// //         }
// //     });
    

// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);

// //     // useEffect(() => {
// //     //     const fetchData = async () => {
// //     //         try {
// //     //             const token = localStorage.getItem('token');
// //     //             if (!token) throw new Error('Token not found in localStorage');
    
// //     //             const userId = JSON.parse(atob(token.split('.')[1])).userId;
// //     //             const response = await axios.get(`http://localhost:5000/api/registrations/user/${userId}`, {
// //     //                 headers: { 'Authorization': `Bearer ${token}` }
// //     //             });
    
// //     //             // Extract the first record from the array
// //     //             if (response.data.length > 0) {
// //     //                 setRegistrationData(response.data[0]);
// //     //             } else {
// //     //                 setError('No registration data found.');
// //     //             }
// //     //         } catch (err) {
// //     //             console.error('Error fetching registration data:', err);
// //     //             setError('Failed to fetch registration data.');
// //     //         } finally {
// //     //             setLoading(false);
// //     //         }
// //     //     };
// //     //     fetchData();
// //     // }, []);
    
// //     useEffect(() => {
// //         const fetchData = async () => {
// //             try {
// //                 const token = localStorage.getItem('token');
// //                 if (!token) throw new Error('Token not found in localStorage');
    
// //                 const userId = JSON.parse(atob(token.split('.')[1])).userId;
// //                 const response = await axios.get(`http://localhost:5000/api/registrations/user/${userId}`, {
// //                     headers: { 'Authorization': `Bearer ${token}` }
// //                 });
    
// //                 if (response.data.length > 0) {
// //                     const fetchedData = response.data[0];
    
// //                     setRegistrationData((prevState) => ({
// //                         ...prevState, // Retain default structure for missing fields
// //                         ...fetchedData, // Update fields that exist in the response
// //                         owners: fetchedData.owners || prevState.owners, // Handle owners
// //                         dealerships: fetchedData.dealerships || prevState.dealerships, // Handle dealerships
// //                         license: fetchedData.license || prevState.license, // Handle license
// //                         survey_data: fetchedData.survey_data || prevState.survey_data, // Handle survey_data
// //                         business_declaration: fetchedData.business_declaration || prevState.business_declaration, // Handle declaration
// //                     }));
// //                 } else {
// //                     setError('No registration data found.');
// //                 }
// //             } catch (err) {
// //                 console.error('Error fetching registration data:', err);
// //                 setError('Failed to fetch registration data.');
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };
    
// //         fetchData();
// //     }, []);
    

// //     const renderField = (label, value) => (
// //         <div className="row">
// //             <label>{label}</label>
// //             <p><b>{value || 'N/A'}</b></p>
// //         </div>
// //     );

// //     const handleDelete = async () => {
// //         try {
// //             await axios.delete(`/api/registrations/${registrationData.id}`, {
// //                 headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
// //             });
// //             alert('Registration deleted successfully.');
// //         } catch (err) {
// //             alert('Failed to delete registration.');
// //         }
// //     };

// //     if (loading) return <div className="loading">Loading...</div>;
// //     if (error) return <div className="error">{error}</div>;

// //     return (
// //         <div className="page">
// //             <div className="heading">
// //                 <h1>Small Business Registration Review</h1>
// //                 <p>Review submitted registration details below.</p>
// //             </div>

// //             {/* Section A: Business Information */}
// //             <Containers title="Section A: Business Information">
// //                 {renderField('Business Name', registrationData.business_name)}
// //                 {renderField('Trading Name', registrationData.trading_name)}
// //                 {renderField('Primary Contact Name', registrationData.primary_contact_name)}
// //                 {renderField('Primary Contact Phone', registrationData.primary_contact_phone)}
// //                 {renderField('Primary Contact Email', registrationData.primary_contact_email)}
// //                 {renderField('Physical Address', registrationData.physical_address)}
// //                 {renderField('Administrative Region', registrationData.administrative_region)}
// //                 {renderField('Trading Address', registrationData.trading_address)}
// //                 {renderField('Mailing Address', registrationData.mailing_address)}
// //                 {renderField('Business Email', registrationData.business_email)}
// //                 {renderField('Business Website', registrationData.business_website)}
// //                 {renderField('Primary Business Sector', registrationData.primary_business_sector)}
// //                 {renderField('Business Outline', registrationData.business_outline)}
// //             </Containers>

// //             {/* Section B: Registration and Compliance History */}
// //             <Containers title="Section B: Registration and Compliance History">
// //                 {renderField('Business TIN', registrationData.business_tin)}
// //                 {renderField('TIN Registered Date', registrationData.tin_registered_date)}
// //                 {renderField('VAT Number', registrationData.business_vat)}
// //                 {renderField('VAT Registered Date', registrationData.vat_registered_date)}
// //                 {renderField('NIS Number', registrationData.business_nis)}
// //                 {renderField('NIS Registered Date', registrationData.nis_registered_date)}
// //                 {renderField('Business Registration Location', registrationData.business_registration_location)}
// //                 {renderField('Date Business Commenced', registrationData.date_business_commenced)}
// //             </Containers>

// //             {/* Section C: Ownership Information */}
// //             <Containers title="Section C: Business Ownership">
// //                 {registrationData.owners?.length > 0 ? (
// //                     registrationData.owners.map((owner, index) => (
// //                         <div key={index} className="owner-entry">
// //                             <h4>Owner {index + 1}</h4>
// //                             {renderField('Full Name', owner.fullName)}
// //                             {renderField('Marital Status', owner.maritalStatus)}
// //                             {renderField('Position Title', owner.positionTitle)}
// //                             {renderField('Gender', owner.gender)}
// //                             {renderField('TIN', owner.tin)}
// //                             {renderField('Birthdate', owner.birthdate)}
// //                             {renderField('Differently Abled', owner.differentlyAbled)}
// //                             {renderField('ID Number', owner.idNumber)}
// //                             {renderField('Education Level', owner.educationLevel)}
// //                         </div>
// //                     ))
// //                 ) : (
// //                     <p>No ownership data available.</p>
// //                 )}
// //             </Containers>

// //             {/* Section D: Core Business Activities */}
// //             <Containers title="Section D: Core Business Activities">
// //                 {renderField('Compliance Standard Name', registrationData.license?.name)}
// //                 {renderField('Compliance Standard Number', registrationData.license?.number)}
// //                 {renderField('License Expiration Date', registrationData.license?.expiration_date)}
// //                 {renderField('License Details', registrationData.license?.details)}
// //                 {registrationData.dealerships?.length > 0 ? (
// //                     registrationData.dealerships.map((dealership, index) => (
// //                         <div key={index} className="dealership-entry">
// //                             <h4>Authorized Dealership {index + 1}</h4>
// //                             {renderField('Dealership ID', dealership.dealership_id)}
// //                             {renderField('Contact Person', dealership.contact_person)}
// //                             {renderField('Contact Phone', dealership.contact_phone)}
// //                             {renderField('Contact Email', dealership.contact_email)}
// //                             {renderField('Date Appointed', dealership.appointed_date)}
// //                             {renderField('Products Covered', dealership.type_products)}
// //                         </div>
// //                     ))
// //                 ) : (
// //                     <p>No dealership data available.</p>
// //                 )}
// //             </Containers>

// //             {/* Section E: Qualification Data */}
// //             <Containers title="Section E: Qualification Data">
// //                 {renderField('Full-Time Employees', registrationData.full_time_employees)}
// //                 {renderField('Female Full-Time Employees', registrationData.full_time_employees_female)}
// //                 {renderField('Youth Full-Time Employees', registrationData.full_time_employees_youth)}
// //                 {renderField('Differently Abled Full-Time Employees', registrationData.full_time_employees_differently_abled)}
// //                 {renderField('Part-Time Employees', registrationData.part_time_employees)}
// //                 {renderField('Female Part-Time Employees', registrationData.part_time_employees_female)}
// //                 {renderField('Youth Part-Time Employees', registrationData.part_time_employees_youth)}
// //                 {renderField('Differently Abled Part-Time Employees', registrationData.part_time_employees_differently_abled)}
// //                 {renderField('Gross Sales (Previous Year)', registrationData.gross_sales_previous)}
// //                 {renderField('Gross Sales (Projection)', registrationData.gross_sales_projection)}
// //                 {renderField('Net Business Assets', registrationData.net_business_assets)}
// //             </Containers>

// //             {/* Section F: Survey Data */}
// //             <Containers title="Section F: Survey Data">
// //                 {renderField('Current SBB Client', registrationData.survey_data?.sbb_client)}
// //                 {renderField('SBB Interactions', registrationData.survey_data?.sbb_interactions)}
// //                 {registrationData.survey_data?.services.selected_services?.length > 0 ? (
// //                     registrationData.survey_data.services.selected_services.map((service, index) =>
// //                         renderField(`Service ${index + 1}`, service)
// //                     )
// //                 ) : (
// //                     <p>No services selected.</p>
// //                 )}
// //                 {renderField('Grant Amount', registrationData.survey_data?.services.grant_funding?.amount)}
// //                 {renderField('Training Type', registrationData.survey_data?.services.training?.type)}
// //                 {renderField('Loan Amount', registrationData.survey_data?.services.loan_funding?.amount)}
// //                 {registrationData.survey_data?.business_challenges?.challenges?.length > 0 ? (
// //                     registrationData.survey_data.business_challenges.challenges.map((challenge, index) =>
// //                         renderField(`Challenge ${index + 1}`, challenge)
// //                     )
// //                 ) : (
// //                     <p>No challenges reported.</p>
// //                 )}
// //                 {renderField('Other Challenges', registrationData.survey_data?.business_challenges?.other_challenges)}
// //             </Containers>

// //             {/* Section G: Business Declaration */}
// //             <Containers title="Section G: Business Declaration">
// //                 {renderField('Owned and Controlled by Shareholders', registrationData.business_declaration?.owned_controlled ? 'Yes' : 'No')}
// //                 {renderField('Subsidiary or Affiliate', registrationData.business_declaration?.subsidiary_affiliate ? 'Yes' : 'No')}
// //                 {renderField('Charitable or Political Purpose', registrationData.business_declaration?.charitable_political ? 'Yes' : 'No')}
// //                 {renderField('Primary Applicant Name', registrationData.business_declaration?.declaration?.primary?.name)}
// //                 {renderField('Primary Applicant Signature', registrationData.business_declaration?.declaration?.primary?.signature)}
// //                 {renderField('Primary Applicant Position', registrationData.business_declaration?.declaration?.primary?.position)}
// //                 {renderField('Primary Applicant Date', registrationData.business_declaration?.declaration?.primary?.date)}
// //                 {renderField('Secondary Applicant Name', registrationData.business_declaration?.declaration?.secondary?.name)}
// //                 {renderField('Secondary Applicant Signature', registrationData.business_declaration?.declaration?.secondary?.signature)}
// //                 {renderField('Secondary Applicant Position', registrationData.business_declaration?.declaration?.secondary?.position)}
// //                 {renderField('Secondary Applicant Date', registrationData.business_declaration?.declaration?.secondary?.date)}
// //             </Containers>

// //             <div className="btn-container">
// //                 <button className="btn btn-red" onClick={handleDelete}>Delete</button>
// //                 <a href="/home" className="btn btn-gray">Home</a>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ClientReviewApp;


// import React, { useState, useEffect } from 'react';
// import Containers from '../../../components/containers/containers.js';
// import './client-review-app.css';
// import axios from 'axios';

// const ClientReviewApp = () => {
//     const [registrationData, setRegistrationData] = useState({
//         owners: [], // Array for ownership data
//         dealerships: [], // Array for dealership data
//         license_name: null,
//         license_number: null,
//         license_expiration_date: null,
//         license_details: null,
//         selected_services: [],
//         grant_funding: null,
//         training: null,
//         loan_funding: null,
//         challenges: [],
//         other_challenges: null,
//         sbb_client: null,
//         sbb_interactions: null,
//         owned_controlled: null,
//         subsidiary_affiliate: null,
//         charitable_political: null,
//         declaration_primary_name: null,
//         declaration_primary_signature: null,
//         declaration_primary_position: null,
//         declaration_primary_date: null,
//         declaration_secondary_name: null,
//         declaration_secondary_signature: null,
//         declaration_secondary_position: null,
//         declaration_secondary_date: null,
//         business_name: null,
//         trading_name: null,
//         primary_contact_name: null,
//         primary_contact_phone: null,
//         primary_contact_email: null,
//         physical_address: null,
//         administrative_region: null,
//         trading_address: null,
//         mailing_address: null,
//         business_email: null,
//         business_website: null,
//         primary_business_sector: null,
//         business_outline: null,
//         business_tin: null,
//         tin_registered_date: null,
//         business_vat: null,
//         vat_registered_date: null,
//         business_nis: null,
//         nis_registered_date: null,
//         business_registration_location: null,
//         date_business_commenced: null,
//         full_time_employees: null,
//         full_time_employees_female: null,
//         full_time_employees_youth: null,
//         full_time_employees_differently_abled: null,
//         part_time_employees: null,
//         part_time_employees_female: null,
//         part_time_employees_youth: null,
//         part_time_employees_differently_abled: null,
//         gross_sales_previous: null,
//         gross_sales_projection: null,
//         net_business_assets: null,
//     });

//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const token = localStorage.getItem('token');
//                 if (!token) throw new Error('Token not found in localStorage');

//                 const userId = JSON.parse(atob(token.split('.')[1])).userId;
//                 const response = await axios.get(`http://localhost:5000/api/registrations/user/${userId}`, {
//                     headers: { 'Authorization': `Bearer ${token}` }
//                 });

//                 if (response.data.length > 0) {
//                     const fetchedData = response.data[0];
//                     setRegistrationData((prevState) => ({
//                         ...prevState,
//                         ...fetchedData,
//                         owners: fetchedData.owners || [],
//                         dealerships: fetchedData.dealerships || [],
//                     }));
//                 } else {
//                     setError('No registration data found.');
//                 }
//             } catch (err) {
//                 console.error('Error fetching registration data:', err);
//                 setError('Failed to fetch registration data.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const renderField = (label, value) => (
//         <div className="row">
//             <label>{label}</label>
//             <p><b>{value || 'N/A'}</b></p>
//         </div>
//     );

//     const handleDelete = async () => {
//         try {
//             await axios.delete(`/api/registrations/${registrationData.id}`, {
//                 headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//             });
//             alert('Registration deleted successfully.');
//         } catch (err) {
//             alert('Failed to delete registration.');
//         }
//     };

//     if (loading) return <div className="loading">Loading...</div>;
//     if (error) return <div className="error">{error}</div>;

//     return (
//         <div className="page">
//             <div className="heading">
//                 <h1>Small Business Registration Review</h1>
//                 <p>Review submitted registration details below.</p>
//             </div>

//             {/* Section A: Business Information */}
//             <Containers title="Section A: Business Information">
//                 {renderField('Business Name', registrationData.business_name)}
//                 {renderField('Trading Name', registrationData.trading_name)}
//                 {renderField('Primary Contact Name', registrationData.primary_contact_name)}
//                 {renderField('Primary Contact Phone', registrationData.primary_contact_phone)}
//                 {renderField('Primary Contact Email', registrationData.primary_contact_email)}
//                 {renderField('Physical Address', registrationData.physical_address)}
//                 {renderField('Administrative Region', registrationData.administrative_region)}
//                 {renderField('Trading Address', registrationData.trading_address)}
//                 {renderField('Mailing Address', registrationData.mailing_address)}
//                 {renderField('Business Email', registrationData.business_email)}
//                 {renderField('Business Website', registrationData.business_website)}
//                 {renderField('Primary Business Sector', registrationData.primary_business_sector)}
//                 {renderField('Business Outline', registrationData.business_outline)}
//             </Containers>

//             {/* Section B: Registration and Compliance History */}
//             <Containers title="Section B: Registration and Compliance History">
//                 {renderField('Business TIN', registrationData.business_tin)}
//                 {renderField('TIN Registered Date', registrationData.tin_registered_date)}
//                 {renderField('VAT Number', registrationData.business_vat)}
//                 {renderField('VAT Registered Date', registrationData.vat_registered_date)}
//                 {renderField('NIS Number', registrationData.business_nis)}
//                 {renderField('NIS Registered Date', registrationData.nis_registered_date)}
//                 {renderField('Business Registration Location', registrationData.business_registration_location)}
//                 {renderField('Date Business Commenced', registrationData.date_business_commenced)}
//             </Containers>

//             {/* Section C: Ownership Information */}
//             <Containers title="Section C: Business Ownership">
//                 {registrationData.owners.length > 0 ? (
//                     registrationData.owners.map((owner, index) => (
//                         <div key={index} className="owner-entry">
//                             <h4>Owner {index + 1}</h4>
//                             {renderField('Full Name', owner.full_name)}
//                             {renderField('Marital Status', owner.marital_status)}
//                             {renderField('Position Title', owner.position_title)}
//                             {renderField('Gender', owner.gender)}
//                             {renderField('TIN', owner.tin)}
//                             {renderField('Birthdate', owner.birthdate)}
//                             {renderField('Differently Abled', owner.differently_abled)}
//                             {renderField('ID Number', owner.id_number)}
//                             {renderField('Education Level', owner.education_level)}
//                         </div>
//                     ))
//                 ) : (
//                     <p>No ownership data available.</p>
//                 )}
//             </Containers>

//             {/* Section D, E, F, G */}
//             <Containers title="Section D: Core Business Activities">
//                 {renderField('Compliance Standard Name', registrationData.license_name)}
//                 {renderField('Compliance Standard Number', registrationData.license_number)}
//                 {renderField('License Expiration Date', registrationData.license_expiration_date)}
//                 {renderField('License Details', registrationData.license_details)}
//                 {registrationData.dealerships.length > 0 ? (
//                     registrationData.dealerships.map((dealership, index) => (
//                         <div key={index} className="dealership-entry">
//                             <h4>Authorized Dealership {index + 1}</h4>
//                             {renderField('Dealership ID', dealership.dealership_id)}
//                             {renderField('Contact Person', dealership.contact_person)}
//                             {renderField('Contact Phone', dealership.contact_phone)}
//                             {renderField('Contact Email', dealership.contact_email)}
//                             {renderField('Date Appointed', dealership.appointed_date)}
//                             {renderField('Products Covered', dealership.type_products)}
//                         </div>
//                     ))
//                 ) : (
//                     <p>No dealership data available.</p>
//                 )}
//             </Containers>

//             {/* Section E: Qualification Data */}
//             <Containers title="Section E: Qualification Data">
//                 {renderField('Full-Time Employees', registrationData.full_time_employees)}
//                 {renderField('Female Full-Time Employees', registrationData.full_time_employees_female)}
//                 {renderField('Youth Full-Time Employees', registrationData.full_time_employees_youth)}
//                 {renderField('Differently Abled Full-Time Employees', registrationData.full_time_employees_differently_abled)}
//                 {renderField('Part-Time Employees', registrationData.part_time_employees)}
//                 {renderField('Female Part-Time Employees', registrationData.part_time_employees_female)}
//                 {renderField('Youth Part-Time Employees', registrationData.part_time_employees_youth)}
//                 {renderField('Differently Abled Part-Time Employees', registrationData.part_time_employees_differently_abled)}
//                 {renderField('Gross Sales (Previous Year)', registrationData.gross_sales_previous)}
//                 {renderField('Gross Sales (Projection)', registrationData.gross_sales_projection)}
//                 {renderField('Net Business Assets', registrationData.net_business_assets)}
//             </Containers>

//             {/* Section F: Survey Data */}
//             <Containers title="Section F: Survey Data">
//                 {renderField('Current SBB Client', registrationData.sbb_client)}
//                 {renderField('SBB Interactions', registrationData.sbb_interactions)}
//                 {registrationData.selected_services.length > 0 ? (
//                     registrationData.selected_services.map((service, index) =>
//                         renderField(`Service ${index + 1}`, service)
//                     )
//                 ) : (
//                     <p>No services selected.</p>
//                 )}
//                 {renderField('Grant Amount', registrationData.grant_funding)}
//                 {renderField('Training Type', registrationData.training)}
//                 {renderField('Loan Amount', registrationData.loan_funding)}
//                 {registrationData.challenges.length > 0 ? (
//                     registrationData.challenges.map((challenge, index) =>
//                         renderField(`Challenge ${index + 1}`, challenge)
//                     )
//                 ) : (
//                     <p>No challenges reported.</p>
//                 )}
//                 {renderField('Other Challenges', registrationData.other_challenges)}
//             </Containers>

//             {/* Section G: Business Declaration */}
//             <Containers title="Section G: Business Declaration">
//                 {renderField('Owned and Controlled by Shareholders', registrationData.owned_controlled ? 'Yes' : 'No')}
//                 {renderField('Subsidiary or Affiliate', registrationData.subsidiary_affiliate ? 'Yes' : 'No')}
//                 {renderField('Charitable or Political Purpose', registrationData.charitable_political ? 'Yes' : 'No')}
//                 {renderField('Primary Applicant Name', registrationData.declaration_primary_name)}
//                 {renderField('Primary Applicant Signature', registrationData.declaration_primary_signature)}
//                 {renderField('Primary Applicant Position', registrationData.declaration_primary_position)}
//                 {renderField('Primary Applicant Date', registrationData.declaration_primary_date)}
//                 {renderField('Secondary Applicant Name', registrationData.declaration_secondary_name)}
//                 {renderField('Secondary Applicant Signature', registrationData.declaration_secondary_signature)}
//                 {renderField('Secondary Applicant Position', registrationData.declaration_secondary_position)}
//                 {renderField('Secondary Applicant Date', registrationData.declaration_secondary_date)}
//             </Containers>
//             <div className="btn-container">
//                 <button className="btn btn-red" onClick={handleDelete}>Delete</button>
//                 <a href="/home" className="btn btn-gray">Home</a>
//             </div>
//         </div>
//     );
// };

// export default ClientReviewApp;


import React, { useState, useEffect } from 'react';
import Containers from '../../../components/containers/containers.js';
import './client-review-app.css';
import axios from 'axios';

const ClientReviewApp = () => {
    const [registrationData, setRegistrationData] = useState({
        owners: [],
        dealerships: [],
        license_name: null,
        license_number: null,
        license_expiration_date: null,
        license_details: null,
        selected_services: [],
        grant_funding: null,
        training: null,
        loan_funding: null,
        challenges: [],
        other_challenges: null,
        sbb_client: null,
        sbb_interactions: null,
        owned_controlled: null,
        subsidiary_affiliate: null,
        charitable_political: null,
        declaration_primary_name: null,
        declaration_primary_signature: null,
        declaration_primary_position: null,
        declaration_primary_date: null,
        declaration_secondary_name: null,
        declaration_secondary_signature: null,
        declaration_secondary_position: null,
        declaration_secondary_date: null,
        business_name: null,
        trading_name: null,
        primary_contact_name: null,
        primary_contact_phone: null,
        primary_contact_email: null,
        physical_address: null,
        administrative_region: null,
        trading_address: null,
        mailing_address: null,
        business_email: null,
        business_website: null,
        primary_business_sector: null,
        business_outline: null,
        business_tin: null,
        tin_registered_date: null,
        business_vat: null,
        vat_registered_date: null,
        business_nis: null,
        nis_registered_date: null,
        business_registration_location: null,
        date_business_commenced: null,
        full_time_employees: null,
        full_time_employees_female: null,
        full_time_employees_youth: null,
        full_time_employees_differently_abled: null,
        part_time_employees: null,
        part_time_employees_female: null,
        part_time_employees_youth: null,
        part_time_employees_differently_abled: null,
        gross_sales_previous: null,
        gross_sales_projection: null,
        net_business_assets: null,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) throw new Error('Token not found in localStorage');

                const userId = JSON.parse(atob(token.split('.')[1])).userId;
                const response = await axios.get(`http://localhost:5000/api/registrations/user/${userId}`, {
                    headers: { 'Authorization': `Bearer ${token}` },
                });

                if (response.data.length > 0) {
                    const fetchedData = response.data[0];

                    setRegistrationData((prevState) => ({
                        ...prevState,
                        ...fetchedData,
                        owners: fetchedData.owners || [],
                        dealerships: fetchedData.dealerships || [],
                        selected_services: fetchedData.selected_services || [],
                        challenges: fetchedData.challenges || [],
                    }));
                } else {
                    setError('No registration data found.');
                }
            } catch (err) {
                console.error('Error fetching registration data:', err);
                setError('Failed to fetch registration data.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const renderField = (label, value) => (
        <div className="row">
            <label>{label}</label>
            <p><b>{value || 'N/A'}</b></p>
        </div>
    );

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/registrations/${registrationData.id}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            });
            alert('Registration deleted successfully.');
        } catch (err) {
            alert('Failed to delete registration.');
        }
    };

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="page">
            <div className="heading">
                <h1>Small Business Registration Review</h1>
                <p>Review submitted registration details below.</p>
            </div>

            {/* Section A */}
            <Containers title="Section A: Business Information">
                {renderField('Business Name', registrationData.business_name)}
                {renderField('Trading Name', registrationData.trading_name)}
                {renderField('Primary Contact Name', registrationData.primary_contact_name)}
                {renderField('Primary Contact Phone', registrationData.primary_contact_phone)}
                {renderField('Primary Contact Email', registrationData.primary_contact_email)}
                {renderField('Physical Address', registrationData.physical_address)}
                {renderField('Administrative Region', registrationData.administrative_region)}
                {renderField('Trading Address', registrationData.trading_address)}
                {renderField('Mailing Address', registrationData.mailing_address)}
                {renderField('Business Email', registrationData.business_email)}
                {renderField('Business Website', registrationData.business_website)}
                {renderField('Primary Business Sector', registrationData.primary_business_sector)}
                {renderField('Business Outline', registrationData.business_outline)}
            </Containers>

            {/* Section B */}
            <Containers title="Section B: Registration and Compliance History">
                {renderField('Business TIN', registrationData.business_tin)}
                {renderField('TIN Registered Date', registrationData.tin_registered_date)}
                {renderField('VAT Number', registrationData.business_vat)}
                {renderField('VAT Registered Date', registrationData.vat_registered_date)}
                {renderField('NIS Number', registrationData.business_nis)}
                {renderField('NIS Registered Date', registrationData.nis_registered_date)}
                {renderField('Business Registration Location', registrationData.business_registration_location)}
                {renderField('Date Business Commenced', registrationData.date_business_commenced)}
            </Containers>

            {/* Section C */}
            <Containers title="Section C: Business Ownership">
                {registrationData.owners.length > 0 ? (
                    registrationData.owners.map((owner, index) => (
                        <div key={index}>
                            {renderField('Full Name', owner.full_name)}
                            {renderField('Marital Status', owner.marital_status)}
                            {renderField('Position Title', owner.position_title)}
                            {renderField('Gender', owner.gender)}
                            {renderField('TIN', owner.tin)}
                            {renderField('Birthdate', owner.birthdate)}
                            {renderField('Differently Abled', owner.differently_abled)}
                            {renderField('ID Number', owner.id_number)}
                            {renderField('Education Level', owner.education_level)}
                        </div>
                    ))
                ) : (
                    <p>No ownership data available.</p>
                )}
            </Containers>

            {/* Section D */}
            <Containers title="Section D: Core Business Activities">
                {renderField('Compliance Standard Name', registrationData.license_name)}
                {renderField('Compliance Standard Number', registrationData.license_number)}
                {renderField('License Expiration Date', registrationData.license_expiration_date)}
                {renderField('License Details', registrationData.license_details)}
                {registrationData.dealerships.length > 0 ? (
                    registrationData.dealerships.map((dealership, index) => (
                        <div key={index}>
                            {renderField('Dealership ID', dealership.dealership_id)}
                            {renderField('Contact Person', dealership.contact_person)}
                            {renderField('Contact Phone', dealership.contact_phone)}
                            {renderField('Contact Email', dealership.contact_email)}
                            {renderField('Date Appointed', dealership.appointed_date)}
                            {renderField('Products Covered', dealership.type_products)}
                        </div>
                    ))
                ) : (
                    <p>No dealership data available.</p>
                )}
            </Containers>

            {/* Section E */}
            <Containers title="Section E: Qualification Data">
                {renderField('Full-Time Employees', registrationData.full_time_employees)}
                {renderField('Female Full-Time Employees', registrationData.full_time_employees_female)}
                {renderField('Youth Full-Time Employees', registrationData.full_time_employees_youth)}
                {renderField('Differently Abled Full-Time Employees', registrationData.full_time_employees_differently_abled)}
                {renderField('Part-Time Employees', registrationData.part_time_employees)}
                {renderField('Female Part-Time Employees', registrationData.part_time_employees_female)}
                {renderField('Youth Part-Time Employees', registrationData.part_time_employees_youth)}
                {renderField('Differently Abled Part-Time Employees', registrationData.part_time_employees_differently_abled)}
                {renderField('Gross Sales (Previous Year)', registrationData.gross_sales_previous)}
                {renderField('Gross Sales (Projection)', registrationData.gross_sales_projection)}
                {renderField('Net Business Assets', registrationData.net_business_assets)}
            </Containers>

            {/* Section F */}
            <Containers title="Section F: Survey Data">
                {renderField('Current SBB Client', registrationData.sbb_client)}
                {renderField('SBB Interactions', registrationData.sbb_interactions)}
                {registrationData.selected_services.length > 0 ? (
                    registrationData.selected_services.map((service, index) => (
                        renderField(`Service ${index + 1}`, service)
                    ))
                ) : (
                    <p>No services selected.</p>
                )}
                {renderField('Grant Amount', registrationData.grant_funding)}
                {renderField('Training Type', registrationData.training)}
                {renderField('Loan Amount', registrationData.loan_funding)}
                {registrationData.challenges.length > 0 ? (
                    registrationData.challenges.map((challenge, index) => (
                        renderField(`Challenge ${index + 1}`, challenge)
                    ))
                ) : (
                    <p>No challenges reported.</p>
                )}
                {renderField('Other Challenges', registrationData.other_challenges)}
            </Containers>

            {/* Section G */}
            <Containers title="Section G: Business Declaration">
                {renderField('Owned and Controlled by Shareholders', registrationData.owned_controlled ? 'Yes' : 'No')}
                {renderField('Subsidiary or Affiliate', registrationData.subsidiary_affiliate ? 'Yes' : 'No')}
                {renderField('Charitable or Political Purpose', registrationData.charitable_political ? 'Yes' : 'No')}
                {renderField('Primary Applicant Name', registrationData.declaration_primary_name)}
                {renderField('Primary Applicant Signature', registrationData.declaration_primary_signature)}
                {renderField('Primary Applicant Position', registrationData.declaration_primary_position)}
                {renderField('Primary Applicant Date', registrationData.declaration_primary_date)}
                {renderField('Secondary Applicant Name', registrationData.declaration_secondary_name)}
                {renderField('Secondary Applicant Signature', registrationData.declaration_secondary_signature)}
                {renderField('Secondary Applicant Position', registrationData.declaration_secondary_position)}
                {renderField('Secondary Applicant Date', registrationData.declaration_secondary_date)}
            </Containers>
        </div>
    );
};

export default ClientReviewApp;
