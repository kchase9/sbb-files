// import React, { useState } from 'react';
// import Containers from '../../../components/containers/containers.js';
// import './client-review-app.css';

// // YOU GET THE GIST

// const dummyData = {
//     statusVerification: {
//         employeeCount: 'Less than 25 employees',
//         revenue: 'Gross annual revenue less than 60 million',
//         assets: 'Business assets less than twenty million',
//     },
//     businessInfo: {
//         businessName: 'ABC Enterprises',
//         tradingName: 'ABC Ltd.',
//         registrationType: ['Registered Company', 'Partnership'],
//         primaryContact: {
//             name: 'John Doe',
//             phone: '+1 234-567-8900',
//             email: 'johndoe@example.com',
//         },
//         secondaryContact: {
//             name: 'Jane Smith',
//             phone: '+1 987-654-3210',
//             email: 'janesmith@example.com',
//         },
//         addresses: {
//             physical: '123 Main Street, Cityville',
//             administrativeregion: 'Region 4',
//             trading: '456 Trading Lane, Cityville, Region 4',
//             mailing: 'PO Box 789, Cityville Post Office',
//         },
//         businessEmail: 'abdmain@abc.com',
//         businessPhone: '+1 234-567-8900',
//         businessWebsite: 'abc.com',
//         sector: 'Retail',
//         businessOutline: 'We provide retail services for household goods.',
//         industryTypes: ['Goods', 'Other Services'],
//     },
//     compliance: {
//         tin: 'TIN123456789',
//         vat: 'VAT987654321',
//         nis: 'NIS123456789',
//         dates: {
//             tinRegistered: '2022-01-01',
//             vatRegistered: '2022-02-01',
//             nisRegistered: '2022-03-01',
//         },
//         registrationLocation: 'Guyana',
//         businessCommenced: '2021-06-01',
//     },
//     ownership: [
//         {
//             id: 1,
//             fullName: 'John Doe',
//             maritalStatus: 'Single',
//             positionTitle: 'CEO',
//             gender: 'Male',
//             tin: 'TIN123456789',
//             birthdate: '1985-05-15',
//             differentlyAbled: 'No',
//             idNumber: 'ID987654321',
//             educationLevel: 'Master’s Degree',
//         },
//     ],
//     coreActivities: {
//         complianceStandards: {
//             name: 'ISO 9001',
//             number: 'ISO12345',
//             expiration: '2025-12-31',
//             details: 'Certified for quality management.',
//         },
//         dealership1: {
//             id: 'D001',
//             contact: {
//                 name: 'Jane Smith',
//                 phone: '+1 987-654-3210',
//                 email: 'janesmith@example.com',
//             },
//             dateAppointed: '2023-01-01',
//             productsCovered: 'Electronics and household appliances.',
//         },
//     },
//     survey: {
//         clientStatus: 'Yes',
//         interactions: 'We have attended multiple training sessions hosted by SBB.',
//         servicesInterested: {
//             grantFunding: 10000,
//             administrativeSupport: true,
//             training: 'Business Management',
//             loanFunding: 50000,
//         },
//         challenges: [
//             'Cash Flow Management',
//             'Access to Finance',
//             'Marketing Strategy',
//         ],
//     },
//     declaration: {
//         ownershipControlled: 'Yes',
//         subsidiary: 'No',
//         charitablePurpose: 'No',
//         primaryApplicant: {
//             name: 'John Doe',
//             signature: 'John Doe Signature',
//             position: 'CEO',
//             date: '2023-12-01',
//         },
//         secondaryApplicant: null,
//     },
// };

// const ClientReviewApp= () =>{
//     const [owners, setOwners] = useState([
//         {
//             id: 1,
//             fullName: '',
//             maritalStatus: '',
//             positionTitle: '',
//             gender: '',
//             tin: '',
//             birthdate: '',
//             differentlyAbled: '',
//             idNumber: '',
//             educationLevel: '',
//         },
//     ]);

//     // Function to add a new owner entry
//     const addOwnerEntry = () => {
//         setOwners([
//             ...owners,
//             {
//                 id: owners.length + 1,
//                 fullName: '',
//                 maritalStatus: '',
//                 positionTitle: '',
//                 gender: '',
//                 tin: '',
//                 birthdate: '',
//                 differentlyAbled: '',
//                 idNumber: '',
//                 educationLevel: '',
//             },
//         ]);
//     };

//     // Function to remove the last owner entry
//     const removeOwnerEntry = () => {
//         if (owners.length > 1) {
//             setOwners(owners.slice(0, -1));
//         } else {
//             alert('At least one owner must be listed.');
//         }
//     };

//     // Function to handle changes for individual owner fields
//     const handleOwnerChange = (id, field, value) => {
//         setOwners(
//             owners.map((owner) =>
//                 owner.id === id ? { ...owner, [field]: value } : owner
//             )
//         );
//     };

//     return (
//         <div className='page'>
//             <div className="heading">
//                 <h1>Small Business Registration</h1>
//                 <p>Please fill out the form below</p>
//             </div>
//             <div>
//                 <Containers title='Verify your status as a Small Business'>
//                     <p>
//                     To qualify for registration as an Approved Small Business and be eligible for participation in the Small Business Procurement Programme,
//                     businesses must satisfy the requirements of a small business as set out in the Small Business Act of 2004 (Section 2.(1).a-f): <br />

//                     Section 2.(1).a-f of the Small Business Act of 2004 states: "small business" means any person or persons, including a body corporate or unincorporate, carrying on business in Guyana for gain or profit and satisfying the criteria listed hereunder, but does not include any business having as its principal object the furtherance of a charitable or political purpose -<br />
//                     <ul>
//                         <li>is incorporated or registered under the Companies Act 1991 or the Business Names (Registration) Act; or</li>
//                         <li>is a partnership under the Partnership Act;</li>
//                         <li>is owned by a person or persons trading not under the Companies Act nor in partnership;</li>
//                         <li>is a registered cooperative society under the Co-operative Societies Act;</li>
//                         <li>is owned and controlled by those persons who hold the majority shareholding or controlling interests in the business, and is not a subsidiary or affiliate of another company; and</li>
//                         <li>satisfies all three(3) of the following conditions:</li>
//                     </ul>
//                     <div className='list'>
//                         <label>
//                             <input type="checkbox" id="number-of-employees" name="number-of-employees" value="Less than 25 employees" checked />Employs not more than 25 employees
//                         </label>
//                         <label>
//                             <input type="checkbox" id="g-a-revenue" name="g-a-revenue" value="Gross annual revenue less than 60 million" checked />has gross annual revenue of not more than 60 million
//                         </label>
//                         <label>
//                             <input type="checkbox" id="total-business-assets" name="total-business-assets" value="Business assets less than twenty million" checked />Has total business assets of not more than twenty million dollars
//                         </label>
//                     </div><br />
//                     <b>TO QUALIFY FOR REGISTRATION, YOUR BUSINESS MUST: BE REGISTERED UNDER THE COMPANIES ACT 1991, BUSINESS NAMES (REGISTRATION) ACT, PARTNERSHIP ACT, OR CO-OPERATIVE SOCIETIES ACT; NOT BE A SUBSIDIARY OR AFFILIATE OF ANOTHER COMPANY; AND MEET AT LEAST TWO OF THE CONDITIONS STATED IN SUB-SECTION F.<br /></b>
//                     <b>Please apply for registration only if qualified<br /></b>
//                     An e-mail acknowledging receipt of the form and its details, with an application number, will be sent by SBB to the primary contact person identified on the form for verification of accuracy of the supplied data. Once SBB completes internal verification of the supplied data with its sister GCRG agencies, an e-mail of the small business registration certificate with the registration number will be sent to the primary contact person identified on the form, or can be collected from SBB. For more information please e-mail sbbgyinfo@gmail.com or call +592 226-8120, +592 226-8123, or +592 226-8133.
//                     </p>
//                 </Containers>
//                 <Containers title="Section A: Business Information">
//                 <p>
//                     A.2 Trading Name - If different from commonly used name, enter the business name as on the Business Registration (Companies/Business Names/Partnership/Co-operative). <br />
//                     A.3 Business Type* - Tick more than one box if necessary. Specify Other business type in the box provided next to Other checkbox.<br />
//                     A.4 Primary Contact Information* - How SBB contacts the business. SBB must be immediately informed in writing if changed. A.4.c E-mail Address* - Primary contact e-mail address. All correspondence between SBB and business will use this address.<br />
//                     A.5 Secondary Contact Information - Alternative contact information if the primary contact is unreachable. SBB must be informed of any changes.<br />
//                     A.7 Trading Address - If different from Physical Address, enter the full Business Trading Address as on the Business Registration.<br />
//                     A.12 Primary Business Sector* - Name the specific business activities, e.g. Manufacture of musical instruments, or Processing and preserving of fruits and vegetables.<br />
//                     A.13 Industry Type(s)* - Select based on the main business activity(ies).<br />
//                     A.14 Business Outline (Describe specific business activities)* - Write a brief outline of exactly what the business does. For example, if it is in the sector "Processing and preserving of fruits and vegetables", describe which part(s) of the processing and/or preserving the business completes: "shelling peanuts" or "picking, peeling and cutting, and cooking fruit into jam".
//                 </p>
//                 <div className='list'>
//                     <div className="row">
//                         <label htmlFor="business-name">Business Name*</label>
//                         <p><b>{dummyData.businessInfo.businessName}</b></p>
//                     </div>
//                     <div className="row">
//                         <label htmlFor="trading-name">Trading Name (if different)</label>
//                         <p><b>{dummyData.businessInfo.tradingName}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>Business Registration Type*</label>
//                         <div className='list'>
//                             <label>
//                                 <input type="checkbox" name="business-type" value="Business Names Registration" /> Business Names Registration
//                             </label>
//                             <label>
//                                 {/* Needs to be an if statement governing check */}
//                                 <input type="checkbox" name="business-type" value="Registered Company" checked /> Registered Company
//                             </label>
//                             <label>
//                                 <input type="checkbox" name="business-type" value="Partnership" checked /> Partnership
//                             </label>
//                             <label>
//                                 <input type="checkbox" name="business-type" value="Cooperative" /> Cooperative
//                             </label>
//                             <label>
//                                 <input type="checkbox" name="business-type" value="other" /> Other
//                             </label>
//                             <input type="text" name="business-type-other" placeholder="Specify Other" />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <label htmlFor="primary-contact-name">Primary Contact Name*</label>
//                         <p><b>{dummyData.businessInfo.primaryContact.name}</b></p>

//                     </div>
//                     <div className="row">
//                         <label htmlFor="primary-contact-phone">Primary Contact Phone*</label>
//                         <p><b>{dummyData.businessInfo.primaryContact.phone}</b></p>

//                     </div>
//                     <div className="row">
//                         <label htmlFor="primary-contact-email">Primary Contact Email*</label>
//                         <p><b>{dummyData.businessInfo.primaryContact.email}</b></p>

//                     </div>
//                     <div className="row">
//                         <label htmlFor="secondary-contact-name">Secondary Contact Name</label>
//                         <p><b>{dummyData.businessInfo.secondaryContact.name}</b></p>

//                     </div>
//                     <div className="row">
//                         <label htmlFor="secondary-contact-phone">Secondary Contact Phone</label>
//                         <p><b>{dummyData.businessInfo.secondaryContact.phone}</b></p>

//                     </div>
//                     <div className="row">
//                         <label htmlFor="secondary-contact-email">Secondary Contact Email</label>
//                         <p><b>{dummyData.businessInfo.secondaryContact.email}</b></p>
//                     </div>
//                     <div className="row">
//                         <label htmlFor="physical-address">Physical Address*</label>
//                         <textarea id="physical-address" name="physical-address" rows="3" value={dummyData.businessInfo.addresses.physical}></textarea>
//                     </div>
//                     <div className="row">
//                         <label htmlFor="administrative-region">Administrative Region*</label>
//                         <select id="administrative-region" name="administrative-region" value={dummyData.businessInfo.addresses.administrativeregion}>
//                             <option value="">Select Region</option>
//                             <option value="region-1">Region 1</option>
//                             <option value="region-2">Region 2</option>
//                             <option value="region-3">Region 3</option>
//                             <option value="region-4">Region 4</option>
//                             <option value="region-5">Region 5</option>
//                             <option value="region-6">Region 6</option>
//                             <option value="region-7">Region 7</option>
//                             <option value="region-8">Region 8</option>
//                             <option value="region-9">Region 9</option>
//                             <option value="region-10">Region 10</option>
//                             {/* Add other regions */}
//                         </select>
//                     </div>
//                     <div className="row">
//                         <label htmlFor="trading-address">Trading Address (if different)</label>
//                         <textarea id="physical-address" name="physical-address" rows="3" value={dummyData.businessInfo.addresses.trading}></textarea>

//                     </div>
//                     <div className="row">
//                         <label htmlFor="mailing-address">Mailing Address (if different)</label>
//                         <textarea id="physical-address" name="physical-address" rows="3" value={dummyData.businessInfo.addresses.mailing}></textarea>

//                     </div>
//                     <div className="row">
//                         <label htmlFor="business-email">Business Email Address*</label>                        
//                         <p><b>{dummyData.businessInfo.businessEmail}</b></p>

//                     </div>
//                     <div className="row">
//                         <label htmlFor="business-website">Business Website</label>
//                         <p><b>{dummyData.businessInfo.businessWebsite}</b></p>

//                     </div>
//                     <div className="row">
//                         <label htmlFor="business-phone">Business Phone Number*</label>
//                         <p><b>{dummyData.businessInfo.businessPhone}</b></p>

//                     </div>
//                     <div className="row">
//                         <label htmlFor="primary-business-sector">Primary Business Sector*</label>
//                         <p><b>{dummyData.businessInfo.sector}</b></p>
//                     </div>
//                     <div className="row">
//                         <label htmlFor="business-outline">Business Outline*</label>
//                         <textarea id="business-outline" name="business-outline" rows="4" value={dummyData.businessInfo.businessOutline}></textarea>
//                     </div>
//                     <div className="row">
//                         <label>Industry Types*</label>
//                         <div className='list'>
//                             {/* Dont forget if statement for checked */}
//                             <label>
//                                 <input type="checkbox" name="industry-type" value="works" /> Works
//                             </label>
//                             <label>
//                                 <input type="checkbox" name="industry-type" value="goods" checked/> Goods
//                             </label>
//                             <label>
//                                 <input type="checkbox" name="industry-type" value="consulting-services" /> Consulting Services
//                             </label>
//                             <label>
//                                 <input type="checkbox" name="industry-type" value="other-services" checked/> Other Services
//                             </label>
//                             <label>
//                                 <input type="checkbox" name="industry-type" value="other" checked/> Other
//                             </label>
//                             <input type="text" name="industry-type-other" placeholder="Specify Other" value={'idk, something'}/>
//                         </div>
//                     </div>
//                 </div>
//                 </Containers>

//                 <Containers title="Section B: Registration and Compliance History">
//                     <p>
//                         B.4 Business TIN* - Enter business’s registered TIN. All businesses must have a Tax Identification Number; local or foreign.<br />
//                         B.5 Business VAT No.* - Enter business’s VAT registration number. Enter N/A if no Value Added Tax registration.<br />
//                         B.6 Business NIS No.* - Enter business’s NIS registration number. All local businesses must have a National Insurance Scheme registration number.<br />
//                     </p>
//                     <div className='list'>
//                         <div className="row">
//                             <label htmlFor="business-tin">Business TIN*</label>
//                             <p><b>{dummyData.compliance.tin}</b></p>

//                         </div>
//                         <div className="row">
//                             <label htmlFor="tin-registered-date">TIN Registered Date*</label>
//                             <p><b>{dummyData.compliance.dates.tinRegistered}</b></p>

//                         </div>
//                         <div className="row">
//                             <label htmlFor="business-vat">Business VAT No.*</label>
//                             <p><b>{dummyData.compliance.vat}</b></p>

//                         </div>
//                         <div className="row">
//                             <label htmlFor="vat-registered-date">VAT Registered Date*</label>
//                             <p><b>{dummyData.compliance.dates.vatRegistered}</b></p>

//                         </div>
//                         <div className="row">
//                             <label htmlFor="business-nis">Business NIS No.*</label>
//                             <p><b>{dummyData.compliance.nis}</b></p>

//                         </div>
//                         <div className="row">
//                             <label htmlFor="nis-registered-date">NIS Registered Date*</label>
//                             <p><b>{dummyData.compliance.dates.nisRegistered}</b></p>

//                         </div>
//                         <div className="row">
//                             <label htmlFor="business-registration-location">Business Registration Location*</label>
//                             <p><b>{dummyData.compliance.registrationLocation}</b></p>

//                         </div>
//                         <div className="row">
//                             <label htmlFor="date-business-commenced">Date Business Commenced*</label>
//                             <p><b>{dummyData.compliance.businessCommenced}</b></p>
                            
//                         </div>
                    
//                         <div className='row'>
//                             <div className="list-subsect">
//                                 <label htmlFor="compliance-history-paye-number">Compliance History - PAYE Number*</label>
//                                 <input type="text" id="compliance-history-paye-number" name="compliance-history-paye-number" required />
//                             </div>
//                             <div className="list-subsect">
//                                 <label htmlFor="compliance-history-paye-date">PAYE Registered Date*</label>
//                                 <input type="month" id="compliance-history-paye-date" name="compliance-history-paye-date" required />
//                             </div>
//                         </div>
//                         <div className='row'>
//                             <div className="list-subsect">
//                                 <label htmlFor="compliance-history-income-tax-number">Compliance History - Income Tax Number*</label>
//                                 <input type="text" id="compliance-history-income-tax-number" name="compliance-history-income-tax-number" required />
//                             </div>
//                             <div className="list-subsect">
//                                 <label htmlFor="compliance-history-income-tax-date">Income Tax Registered Date*</label>
//                                 <input type="month" id="compliance-history-income-tax-date" name="compliance-history-income-tax-date" required />
//                             </div>
//                         </div>

//                         <div className='row'>
//                             <div className="list-subsect">
//                                 <label htmlFor="compliance-history-vat-number">Compliance History - VAT Number*</label>
//                                 <input type="text" id="compliance-history-vat-number" name="compliance-history-vat-number" required />
//                             </div>
//                             <div className="list-subsect">
//                                 <label htmlFor="compliance-history-vat-date">VAT Registered Date*</label>
//                                 <input type="month" id="compliance-history-vat-date" name="compliance-history-vat-date" required />
//                             </div>
//                         </div>
                        
//                         <div className='row'>
//                             <div className="list-subsect">
//                                 <label htmlFor="compliance-history-nis-number">Compliance History - NIS Number*</label>
//                                 <input type="text" id="compliance-history-nis-number" name="compliance-history-nis-number" required />
//                             </div>
//                             <div className="list-subsect">
//                                 <label htmlFor="compliance-history-nis-date">NIS Registered Date*</label>
//                                 <input type="month" id="compliance-history-nis-date" name="compliance-history-nis-date" required />
//                             </div>
//                         </div>

//                     </div>
//                 </Containers>

//                 <Containers title="Section C: Business Ownership Information">
//                     <p>Enter primary owner information first. All owners must be listed.<br /></p>
//                     <div id="owners-section" className="list">
//                         {owners.map((owner, index) => (
//                             <div key={owner.id} className="owner-entry list">
//                                 <h4>Owner {index + 1}</h4>
//                                 <div className="row">
//                                     <label htmlFor={`owner-full-name-${owner.id}`}>Owner Full Name*</label>
//                                     <input
//                                         type="text"
//                                         id={`owner-full-name-${owner.id}`}
//                                         name={`owner-full-name-${owner.id}`}
//                                         value={owner.fullName}
//                                         onChange={(e) =>
//                                             handleOwnerChange(owner.id, 'fullName', e.target.value)
//                                         }
//                                         required
//                                     />
//                                 </div>
//                                 <div className="row">
//                                     <label htmlFor={`owner-marital-status-${owner.id}`}>Marital Status*</label>
//                                     <select
//                                         id={`owner-marital-status-${owner.id}`}
//                                         name={`owner-marital-status-${owner.id}`}
//                                         value={owner.maritalStatus}
//                                         onChange={(e) =>
//                                             handleOwnerChange(owner.id, 'maritalStatus', e.target.value)
//                                         }
//                                         required
//                                     >
//                                         <option value="">Select Status</option>
//                                         <option value="single">Single</option>
//                                         <option value="married">Married</option>
//                                         <option value="divorced">Divorced</option>
//                                         <option value="widowed">Widowed</option>
//                                     </select>
//                                 </div>
//                                 <div className="row">
//                                     <label htmlFor={`owner-position-title-${owner.id}`}>Position Title*</label>
//                                     <input
//                                         type="text"
//                                         id={`owner-position-title-${owner.id}`}
//                                         name={`owner-position-title-${owner.id}`}
//                                         value={owner.positionTitle}
//                                         onChange={(e) =>
//                                             handleOwnerChange(owner.id, 'positionTitle', e.target.value)
//                                         }
//                                         required
//                                     />
//                                 </div>
//                                 <div className="row">
//                                     <label htmlFor={`owner-gender-${owner.id}`}>Gender*</label>
//                                     <select
//                                         id={`owner-gender-${owner.id}`}
//                                         name={`owner-gender-${owner.id}`}
//                                         value={owner.gender}
//                                         onChange={(e) =>
//                                             handleOwnerChange(owner.id, 'gender', e.target.value)
//                                         }
//                                         required
//                                     >
//                                         <option value="">Select Gender</option>
//                                         <option value="male">Male</option>
//                                         <option value="female">Female</option>
//                                         <option value="non-binary">Non-Binary</option>
//                                         <option value="prefer-not-to-say">Prefer not to say</option>
//                                     </select>
//                                 </div>
//                                 <div className="row">
//                                     <label htmlFor={`owner-tin-${owner.id}`}>TIN No.*</label>
//                                     <input
//                                         type="text"
//                                         id={`owner-tin-${owner.id}`}
//                                         name={`owner-tin-${owner.id}`}
//                                         value={owner.tin}
//                                         onChange={(e) =>
//                                             handleOwnerChange(owner.id, 'tin', e.target.value)
//                                         }
//                                         required
//                                     />
//                                 </div>
//                                 <div className="row">
//                                     <label htmlFor={`owner-birthdate-${owner.id}`}>Birthdate*</label>
//                                     <input
//                                         type="date"
//                                         id={`owner-birthdate-${owner.id}`}
//                                         name={`owner-birthdate-${owner.id}`}
//                                         value={owner.birthdate}
//                                         onChange={(e) =>
//                                             handleOwnerChange(owner.id, 'birthdate', e.target.value)
//                                         }
//                                         required
//                                     />
//                                 </div>
//                                 <div className="row">
//                                     <label htmlFor={`owner-differently-abled-${owner.id}`}>Differently Abled*</label>
//                                     <select
//                                         id={`owner-differently-abled-${owner.id}`}
//                                         name={`owner-differently-abled-${owner.id}`}
//                                         value={owner.differentlyAbled}
//                                         onChange={(e) =>
//                                             handleOwnerChange(owner.id, 'differentlyAbled', e.target.value)
//                                         }
//                                         required
//                                     >
//                                         <option value="">Select Option</option>
//                                         <option value="yes">Yes</option>
//                                         <option value="no">No</option>
//                                     </select>
//                                 </div>
//                                 <div className="row">
//                                     <label htmlFor={`owner-id-number-${owner.id}`}>ID No.*</label>
//                                     <input
//                                         type="text"
//                                         id={`owner-id-number-${owner.id}`}
//                                         name={`owner-id-number-${owner.id}`}
//                                         value={owner.idNumber}
//                                         onChange={(e) =>
//                                             handleOwnerChange(owner.id, 'idNumber', e.target.value)
//                                         }
//                                         required
//                                     />
//                                 </div>
//                                 <div className="row">
//                                     <label htmlFor={`owner-education-level-${owner.id}`}>
//                                         Highest Level of Education Completed*
//                                     </label>
//                                     <select
//                                         id={`owner-education-level-${owner.id}`}
//                                         name={`owner-education-level-${owner.id}`}
//                                         value={owner.educationLevel}
//                                         onChange={(e) =>
//                                             handleOwnerChange(owner.id, 'educationLevel', e.target.value)
//                                         }
//                                         required
//                                     >
//                                         <option value="">Select Education Level</option>
//                                         <option value="primary">Primary School</option>
//                                         <option value="secondary">Secondary School</option>
//                                         <option value="associate">Associate Degree</option>
//                                         <option value="bachelor">Bachelor’s Degree</option>
//                                         <option value="master">Master’s Degree</option>
//                                         <option value="doctorate">Doctorate</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         ))}

//                         {/* Buttons to dynamically add or remove owner entries */}
//                         <div className="row">
//                             <button
//                                 className="btn btn-gray"
//                                 type="button"
//                                 id="add-owner"
//                                 onClick={addOwnerEntry}
//                             >
//                                 Add Owner
//                             </button>
//                             <button
//                                 className="btn btn-gray"
//                                 type="button"
//                                 id="remove-owner"
//                                 onClick={removeOwnerEntry}
//                             >
//                                 Remove Owner
//                             </button>
//                         </div>
//                     </div>
//                 </Containers>

//                 <Containers title="Section D: Core Business Activities">
//                     <p>
//                         D.1-2 - Enter standards compliance/operational licensing only if the compliance/license is still valid.<br />
//                         D.3-4 - Only applicable if business is a registered dealer.<br />
//                     </p>
//                     <div id="core-business-activities"  className='list'>
//                         {/* Compliance Standards / Operational License */}
//                         <div className="row">
//                             <h4>Compliance Standard or Operational License</h4>
//                         </div>
//                         <div className="row">
//                             <label htmlFor="license-name">Name</label>
//                             <input type="text" id="license-name" name="license-name" />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="license-number">No.</label>
//                             <input type="text" id="license-number" name="license-number" />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="license-expiration">Expiration Date (DD/MM/YYYY)</label>
//                             <input type="date" id="license-expiration" name="license-expiration" />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="license-details">Details</label>
//                             <textarea id="license-details" name="license-details" rows="3"></textarea>
//                         </div>

//                         {/* Authorized Dealership 1 */}
//                         <div className="row">
//                             <h4>Authorized Dealership 1</h4>
//                         </div>
//                         <div className="row">
//                             <label htmlFor="dealership-id-1">Authorized Dealership ID No.</label>
//                             <input type="text" id="dealership-id-1" name="dealership-id-1" />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="dealership-contact-person-1">Contact Person (Full Name)</label>
//                             <input type="text" id="dealership-contact-person-1" name="dealership-contact-person-1" />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="dealership-contact-phone-1">Contact Person (Phone)</label>
//                             <input type="tel" id="dealership-contact-phone-1" name="dealership-contact-phone-1" />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="dealership-contact-email-1">Contact Person (E-Mail)</label>
//                             <input type="email" id="dealership-contact-email-1" name="dealership-contact-email-1" />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="dealership-appointed-date-1">Date Appointed (DD/MM/YYYY)</label>
//                             <input type="date" id="dealership-appointed-date-1" name="dealership-appointed-date-1" />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="dealership-type-products-1">Dealership Type and Products Covered</label>
//                             <textarea id="dealership-type-products-1" name="dealership-type-products-1" rows="3"></textarea>
//                         </div>

//                         {/* Authorized Dealership 2 */}
//                         <div className="row">
//                             <h4>Authorized Dealership 2</h4>
//                         </div>
//                         <div className="row">
//                             <label htmlFor="dealership-id-2">Authorized Dealership ID No.</label>
//                             <input type="text" id="dealership-id-2" name="dealership-id-2" />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="dealership-contact-person-2">Contact Person (Full Name)</label>
//                             <input type="text" id="dealership-contact-person-2" name="dealership-contact-person-2" />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="dealership-contact-phone-2">Contact Person (Phone)</label>
//                             <input type="tel" id="dealership-contact-phone-2" name="dealership-contact-phone-2" />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="dealership-contact-email-2">Contact Person (E-Mail)</label>
//                             <input type="email" id="dealership-contact-email-2" name="dealership-contact-email-2" />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="dealership-appointed-date-2">Date Appointed (DD/MM/YYYY)</label>
//                             <input type="date" id="dealership-appointed-date-2" name="dealership-appointed-date-2" />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="dealership-type-products-2">Dealership Type and Products Covered</label>
//                             <textarea id="dealership-type-products-2" name="dealership-type-products-2" rows="3"></textarea>
//                         </div>
//                     </div>
//                 </Containers>

//                 <Containers title="Section E: Qualify under Small Business Act (2004)">
//                     <p>
//                         E.3.a Gross Sales/Turnover for Previous Tax Year* - Enter the gross sales/turnover as the value of goods and services sold during the last tax year. The standard tax year in Guyana ends on December 31. If different, use your tax year for calculation.<br />
//                         E.3.b Gross Sales/Turnover Projection for Current Tax Year* - Enter the gross sales/turnover as the value of goods and services the business expects to make within the next tax year. The standard tax year in Guyana begins on January 1. If different, use your tax year for calculation.<br />
//                         E.4 Net Business Assets at End of Previous Tax Year* - Enter the total value of business assets as valued at the end of the previous tax year. The standard tax year in Guyana ends on December 31. If different, use your tax year for calculation.<br />
//                     </p>
//                     <div id="qualify-small-business-act" className='list'>
//                         {/* Number of Full-Time Employees */}
//                         <div className="row">
//                             <h4>Full-Time Employees</h4>
//                         </div>
//                         <div className="row">
//                             <label htmlFor="full-time-employees">Number of Full-Time Employees*</label>
//                             <input type="number" id="full-time-employees" name="full-time-employees" required />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="full-time-employees-female">Female*</label>
//                             <input type="number" id="full-time-employees-female" name="full-time-employees-female" required />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="full-time-employees-youth">Youth (Under 18)*</label>
//                             <input type="number" id="full-time-employees-youth" name="full-time-employees-youth" required />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="full-time-employees-differently-abled">Differently Abled*</label>
//                             <input type="number" id="full-time-employees-differently-abled" name="full-time-employees-differently-abled" required />
//                         </div>

//                         {/* Number of Part-Time Employees */}
//                         <div className="row">
//                             <h4>Part-Time Employees</h4>
//                         </div>
//                         <div className="row">
//                             <label htmlFor="part-time-employees">Number of Part-Time Employees*</label>
//                             <input type="number" id="part-time-employees" name="part-time-employees" required />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="part-time-employees-female">Female*</label>
//                             <input type="number" id="part-time-employees-female" name="part-time-employees-female" required />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="part-time-employees-youth">Youth (Under 18)*</label>
//                             <input type="number" id="part-time-employees-youth" name="part-time-employees-youth" required />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="part-time-employees-differently-abled">Differently Abled*</label>
//                             <input type="number" id="part-time-employees-differently-abled" name="part-time-employees-differently-abled" required />
//                         </div>

//                         {/* Gross Sales/Turnover and Net Business Assets */}
//                         <div className="row">
//                             <label htmlFor="gross-sales-previous">Gross Sales/Turnover for Previous Tax Year*</label>
//                             <input type="number" id="gross-sales-previous" name="gross-sales-previous" step="0.01" required />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="gross-sales-projection">Gross Sales/Turnover Projection for Current Tax Year*</label>
//                             <input type="number" id="gross-sales-projection" name="gross-sales-projection" step="0.01" required />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="net-business-assets">Net Business Assets at End of Previous Tax Year*</label>
//                             <input type="number" id="net-business-assets" name="net-business-assets" step="0.01" required />
//                         </div>
//                     </div>
//                 </Containers>

//                 <Containers title="Section F: Survey Data">
//                     <div id="survey-data" className='list'>
//                         {/* Current Small Business Bureau Client */}
//                         <div className="row">
//                             <label htmlFor="sbb-client">Are you a current Small Business Bureau client?</label>
//                             <select id="sbb-client" name="sbb-client" required>
//                                 <option value="">Select an option</option>
//                                 <option value="yes">Yes</option>
//                                 <option value="no">No</option>
//                             </select>
//                         </div>

//                         {/* Past Interactions with SBB */}
//                         <div className="row">
//                             <label htmlFor="sbb-interactions">Briefly describe your past interactions with the Small Business Bureau</label>
//                             <textarea id="sbb-interactions" name="sbb-interactions" rows="4"></textarea>
//                         </div>

//                         {/* Services Interested In */}
//                         <div className="row">
//                             <h4>Are you interested in the following services from the Small Business Bureau?</h4>
//                         </div>
//                         <div className="row">
//                             <label>
//                                 <input type="checkbox" name="services" value="administrative-support" />
//                                 Administrative Support
//                             </label>
//                         </div>
//                         <div className="row">
//                             <label>
//                                 <input type="checkbox" name="services" value="grant-funding" />
//                                 Grant Funding
//                             </label>
//                             <div className="label-input-pair-sectf">
//                                 <label htmlFor="grant-amount">Amount</label>
//                                 <input type="number" id="grant-amount" name="grant-amount" step="0.01" />
//                             </div>
                                
//                         </div>
//                         <div className="row">
//                             <label>
//                                 <input type="checkbox" name="services" value="training" />
//                                 Training
//                             </label>
//                             <div className="label-input-pair-sectf">
//                                 <label htmlFor="training-type">Type</label>
//                                 <input type="text" id="training-type" name="training-type" />

//                             </div>
                                
//                         </div>
//                         <div className="row">
//                             <label>
//                                 <input type="checkbox" name="services" value="loan-funding" />
//                                 Loan Funding
//                             </label>
//                             <div className="label-input-pair-sectf">
//                                 <label htmlFor="loan-amount">Amount</label>
//                                 <input type="number" id="loan-amount" name="loan-amount" step="0.01" />
//                             </div>
//                         </div>

//                         {/* Business Challenges */}
//                         <div className="row">
//                             <h4>Indicate the challenges faced by your business</h4>
//                         </div>
//                         <div className="list">
//                             <label>
//                                 <input type="checkbox" name="challenges" value="cash-flow-management" />
//                                 Cash Flow Management
//                             </label>
//                             <label>
//                                 <input type="checkbox" name="challenges" value="access-to-finance" />
//                                 Access to Finance
//                             </label>
//                             <label>
//                                 <input type="checkbox" name="challenges" value="choosing-what-to-sell" />
//                                 Choosing What to Sell
//                             </label>
//                             <label>
//                                 <input type="checkbox" name="challenges" value="attracting-clients" />
//                                 Attracting Clients/Customers
//                             </label>
//                             <label>
//                                 <input type="checkbox" name="challenges" value="pests-and-disease" />
//                                 Pests and Disease
//                             </label>
//                             <label>
//                                 <input type="checkbox" name="challenges" value="tax-compliance" />
//                                 Tax/Regulation Compliance
//                             </label>
//                             <label>
//                                 <input type="checkbox" name="challenges" value="marketing-strategy" />
//                                 Marketing Strategy
//                             </label>
//                             <label>
//                                 <input type="checkbox" name="challenges" value="hiring-skilled-labour" />
//                                 Hiring Skilled Labour
//                             </label>
//                             <label>
//                                 <input type="checkbox" name="challenges" value="business-management-knowledge" />
//                                 Business Management Knowledge
//                             </label>
//                             <label>
//                                 <input type="checkbox" name="challenges" value="business-management-skills" />
//                                 Business Management Skills
//                             </label>
//                             <label>
//                                 <input type="checkbox" name="challenges" value="other" />
//                                 Other
//                             </label>
//                             <textarea id="other-challenges" name="other-challenges" rows="2" placeholder="Describe other challenges"></textarea>
//                         </div>
//                     </div>
//                 </Containers>

//                 <Containers title="Section G: Business Declaration">
//                     <p>
//                         G.1 Business Organization and Objectives*<br />
//                         G.2 Legally Binding Self-Declaration* to be signed by up to 2 business owners.<br />
//                     </p>
//                     <div id="business-declaration" className='list'>
//                         {/* Business Organization and Objectives */}
//                         <div className="row">
//                             <label htmlFor="owned-controlled">
//                                 Is the business owned and controlled by those persons who hold the majority shareholding or controlling interests in the business?*
//                             </label>
//                             <select id="owned-controlled" name="owned-controlled" required>
//                                 <option value="">Select an option</option>
//                                 <option value="yes">Yes</option>
//                                 <option value="no">No</option>
//                             </select>
//                         </div>
//                         <div className="row">
//                             <label htmlFor="subsidiary-affiliate">
//                                 Is the business a subsidiary or affiliate of another company?*
//                             </label>
//                             <select id="subsidiary-affiliate" name="subsidiary-affiliate" required>
//                                 <option value="">Select an option</option>
//                                 <option value="yes">Yes</option>
//                                 <option value="no">No</option>
//                             </select>
//                         </div>
//                         <div className="row">
//                             <label htmlFor="charitable-political">
//                                 Does the business have as its principal object the furtherance of a charitable or political purpose?*
//                             </label>
//                             <select id="charitable-political" name="charitable-political" required>
//                                 <option value="">Select an option</option>
//                                 <option value="yes">Yes</option>
//                                 <option value="no">No</option>
//                             </select>
//                         </div>

//                         {/* Legally Binding Self-Declaration */}
//                         <div className="">
//                             <h4>Legally Binding Self-Declaration*</h4>
//                             <p>
//                                 We the undersigned declare that the details provided in this form as supplier owners are correct to the best of our knowledge, and that, in the event of changes, details will be provided immediately to the Small Business Bureau. In the case that any of the above information is found to be false, untrue, misleading, or misrepresenting, we are aware that we may be held liable for it. We hereby authorize sharing of the information furnished on this form with all bodies of the Government of the Cooperative Republic of Guyana. UNSIGNED FORMS WILL NOT BE PROCESSED BY SBB.
//                             </p>
//                         </div>
//                         <div className="row">
//                             <label htmlFor="primary-applicant">Applicant (Primary)</label>
//                             <input type="text" id="primary-applicant" name="primary-applicant" required />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="primary-signature">Signature</label>
//                             <input type="text" id="primary-signature" name="primary-signature" placeholder="Primary Applicant's Signature" required />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="primary-position">Position</label>
//                             <input type="text" id="primary-position" name="primary-position" required />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="primary-date">Date</label>
//                             <input type="date" id="primary-date" name="primary-date" required />
//                         </div>

//                         {/* Secondary Applicant (Optional) */}
//                         <div className="row">
//                             <label htmlFor="secondary-applicant">Applicant (Secondary)</label>
//                             <input type="text" id="secondary-applicant" name="secondary-applicant" />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="secondary-signature">Signature</label>
//                             <input type="text" id="secondary-signature" name="secondary-signature" placeholder="Secondary Applicant's Signature" />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="secondary-position">Position</label>
//                             <input type="text" id="secondary-position" name="secondary-position" />
//                         </div>
//                         <div className="row">
//                             <label htmlFor="secondary-date">Date</label>
//                             <input type="date" id="secondary-date" name="secondary-date" />
//                         </div>
//                     </div>
//                 </Containers>
                
//                 <div className=''>
//                     <div className='sect-container green-border'>
//                         <div className='row'>
//                             <h2>Application Status</h2>
//                             <p>Pending</p>
//                         </div>
//                         <div className='row'>
//                             <h2>Comments</h2>
//                             <p>None</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='btn-container'>
//                     <a className='btn btn-red'>Delete</a>
//                     <a href='/home' className="btn btn-gray">
//                         Home
//                     </a>
//                 </div>

//             </div>
                

//         </div>
//     );
// };

// export default ClientReviewApp;
// -----------------------------------------------------------------------------------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Containers from '../../../components/containers/containers.js';
// import './client-review-app.css';

// const ClientReviewApp = () => {
//     const [registrationData, setRegistrationData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchRegistrationData = async () => {
//             try {
//                 const response = await axios.get('/api/registrations'); // Replace with your API endpoint
//                 setRegistrationData(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError('Failed to fetch registration data. Please try again.');
//                 setLoading(false);
//             }
//         };

//         fetchRegistrationData();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     if (!registrationData) {
//         return <div>No registration data available.</div>;
//     }

//     return (
//         <div className="page">
//             <div className="heading">
//                 <h1>Small Business Registration Review</h1>
//                 <p>Review the details below</p>
//             </div>

//             {/* Section A: Business Information */}
//             <Containers title="Section A: Business Information">
//                 <div className="list">
//                     <div className="row">
//                         <label>Business Name:</label>
//                         <p><b>{registrationData.business_name || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>Trading Name:</label>
//                         <p><b>{registrationData.trading_name || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>Registration Type:</label>
//                         <p><b>{registrationData.registration_type?.join(', ') || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>Primary Contact Name:</label>
//                         <p><b>{registrationData.primary_contact_name || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>Primary Contact Phone:</label>
//                         <p><b>{registrationData.primary_contact_phone || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>Primary Contact Email:</label>
//                         <p><b>{registrationData.primary_contact_email || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>Secondary Contact Name:</label>
//                         <p><b>{registrationData.secondary_contact_name || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>Secondary Contact Phone:</label>
//                         <p><b>{registrationData.secondary_contact_phone || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>Secondary Contact Email:</label>
//                         <p><b>{registrationData.secondary_contact_email || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>Physical Address:</label>
//                         <p><b>{registrationData.physical_address || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>Administrative Region:</label>
//                         <p><b>{registrationData.administrative_region || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>Trading Address:</label>
//                         <p><b>{registrationData.trading_address || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>Mailing Address:</label>
//                         <p><b>{registrationData.mailing_address || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>Business Email:</label>
//                         <p><b>{registrationData.business_email || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>Business Website:</label>
//                         <p><b>{registrationData.business_website || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>Business Phone:</label>
//                         <p><b>{registrationData.business_phone || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>Primary Business Sector:</label>
//                         <p><b>{registrationData.primary_business_sector || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>Business Outline:</label>
//                         <p><b>{registrationData.business_outline || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>Industry Types:</label>
//                         <p><b>{registrationData.industry_types?.join(', ') || 'N/A'}</b></p>
//                     </div>
//                 </div>
//             </Containers>

//             {/* Section B: Compliance Information */}
//             <Containers title="Section B: Registration and Compliance History">
//                 <div className="list">
//                     <div className="row">
//                         <label>Business TIN:</label>
//                         <p><b>{registrationData.business_tin || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>TIN Registered Date:</label>
//                         <p><b>{registrationData.tin_registered_date || 'N/A'}</b></p>
//                     </div>
//                     <div className="row">
//                         <label>NIS Registered Date:</label>
//                         <p><b>{registrationData.nis_registered_date || 'N/A'}</b></p>
//                     </div>
//                 </div>
//             </Containers>

//             {/* Section C: Ownership Information */}
//             <Containers title="Section C: Business Ownership Information">
//                 <div id="owners-section" className="list">
//                     {registrationData.ownership && registrationData.ownership.length > 0 ? (
//                         registrationData.ownership.map((owner, index) => (
//                             <div key={owner.id} className="owner-entry">
//                                 <h4>Owner {index + 1}</h4>
//                                 <div className="row">
//                                     <label>Full Name:</label>
//                                     <p><b>{owner.fullName || 'N/A'}</b></p>
//                                 </div>
//                                 <div className="row">
//                                     <label>Position Title:</label>
//                                     <p><b>{owner.positionTitle || 'N/A'}</b></p>
//                                 </div>
//                                 <div className="row">
//                                     <label>Gender:</label>
//                                     <p><b>{owner.gender || 'N/A'}</b></p>
//                                 </div>
//                                 <div className="row">
//                                     <label>TIN:</label>
//                                     <p><b>{owner.tin || 'N/A'}</b></p>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No ownership data available.</p>
//                     )}
//                 </div>
//             </Containers>

//             {/* Additional Sections */}
//             {/* Add additional sections here dynamically */}

//             <div className="btn-container">
//                 <a className="btn btn-red" href="/delete">Delete</a>
//                 <a className="btn btn-gray" href="/home">Home</a>
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
    const [registrationData, setRegistrationData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found in localStorage');
        }

        const fetchData = async () => {
            try {
                const userId = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId;

                console.log('User ID:', userId);
                const response = await fetch(`http://localhost:5000/api/registrations/user/${userId}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
                    }
                );
                if (!response.ok) throw new Error('Failed to fetch registration data');

                const data = await response.json();
                setRegistrationData(data);
            } catch (err) {
                console.error('Error fetching registration data:', err.message);
                setError('Failed to fetch registration data.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const renderField = (label, value) => (
        <div className="row">
            <label>{label}</label>
            <p><b>{value || 'N/A'}</b></p>
        </div>
    );

    return (
        <div className='page'>
            <div className="heading">
                <h1>Small Business Registration Review</h1>
                <p>Review submitted registration details below.</p>
            </div>

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

            <Containers title="Section C: Business Ownership">
                {registrationData.owners.map((owner, index) => (
                    <div key={index} className="owner-entry">
                        <h4>Owner {index + 1}</h4>
                        {renderField('Full Name', owner.fullName)}
                        {renderField('Marital Status', owner.maritalStatus)}
                        {renderField('Position Title', owner.positionTitle)}
                        {renderField('Gender', owner.gender)}
                        {renderField('TIN', owner.tin)}
                        {renderField('Birthdate', owner.birthdate)}
                        {renderField('Differently Abled', owner.differentlyAbled)}
                        {renderField('ID Number', owner.idNumber)}
                        {renderField('Education Level', owner.educationLevel)}
                    </div>
                ))}
            </Containers>

            <Containers title="Section D: Core Business Activities">
                {renderField('Compliance Standard Name', registrationData.license?.name)}
                {renderField('Compliance Standard Number', registrationData.license?.number)}
                {renderField('License Expiration Date', registrationData.license?.expiration_date)}
                {renderField('License Details', registrationData.license?.details)}
                {registrationData.dealerships.map((dealership, index) => (
                    <div key={index} className="dealership-entry">
                        <h4>Authorized Dealership {index + 1}</h4>
                        {renderField('Dealership ID', dealership.dealership_id)}
                        {renderField('Contact Person', dealership.contact_person)}
                        {renderField('Contact Phone', dealership.contact_phone)}
                        {renderField('Contact Email', dealership.contact_email)}
                        {renderField('Date Appointed', dealership.appointed_date)}
                        {renderField('Products Covered', dealership.type_products)}
                    </div>
                ))}
            </Containers>

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

            <Containers title="Section F: Survey Data">
                {renderField('Current SBB Client', registrationData.survey_data?.sbb_client)}
                {renderField('SBB Interactions', registrationData.survey_data?.sbb_interactions)}
                {registrationData.survey_data?.services.selected_services.map((service, index) => (
                    renderField(`Service ${index + 1}`, service)
                ))}
                {renderField('Grant Amount', registrationData.survey_data?.services.grant_funding?.amount)}
                {renderField('Training Type', registrationData.survey_data?.services.training?.type)}
                {renderField('Loan Amount', registrationData.survey_data?.services.loan_funding?.amount)}
                {registrationData.survey_data?.business_challenges?.challenges.map((challenge, index) => (
                    renderField(`Challenge ${index + 1}`, challenge)
                ))}
                {renderField('Other Challenges', registrationData.survey_data?.business_challenges?.other_challenges)}
            </Containers>

            <Containers title="Section G: Business Declaration">
                {renderField('Owned and Controlled by Shareholders', registrationData.business_declaration?.owned_controlled ? 'Yes' : 'No')}
                {renderField('Subsidiary or Affiliate', registrationData.business_declaration?.subsidiary_affiliate ? 'Yes' : 'No')}
                {renderField('Charitable or Political Purpose', registrationData.business_declaration?.charitable_political ? 'Yes' : 'No')}
                {renderField('Primary Applicant Name', registrationData.business_declaration?.declaration?.primary?.name)}
                {renderField('Primary Applicant Signature', registrationData.business_declaration?.declaration?.primary?.signature)}
                {renderField('Primary Applicant Position', registrationData.business_declaration?.declaration?.primary?.position)}
                {renderField('Primary Applicant Date', registrationData.business_declaration?.declaration?.primary?.date)}
                {renderField('Secondary Applicant Name', registrationData.business_declaration?.declaration?.secondary?.name)}
                {renderField('Secondary Applicant Signature', registrationData.business_declaration?.declaration?.secondary?.signature)}
                {renderField('Secondary Applicant Position', registrationData.business_declaration?.declaration?.secondary?.position)}
                {renderField('Secondary Applicant Date', registrationData.business_declaration?.declaration?.secondary?.date)}
            </Containers>

            <div className='btn-container'>
                <a className='btn btn-red'>Delete</a>
                <a href='/home' className='btn btn-gray'>Home</a>
            </div>
        </div>
    );
};

export default ClientReviewApp;