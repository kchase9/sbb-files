import React, { useState } from 'react';
import Containers from '../../components/containers/containers.js';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './sb-registration.css';

const SBRegistration = () =>{
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        eligibility: {
          employs_less_than_25: false,
          revenue_less_than_60m: false,
          assets_less_than_20m: false
        },
        business_name: '',
        trading_name: '',
        registration_type: [],
        registration_type_other: '',
        primary_contact_name: '',
        primary_contact_phone: '',
        primary_contact_email: '',
        secondary_contact_name: '',
        secondary_contact_phone: '',
        secondary_contact_email: '',
        physical_address: '',
        administrative_region: '',
        trading_address: '',
        mailing_address: '',
        business_email: '',
        business_website: '',
        business_phone: '',
        primary_business_sector: '',
        business_outline: '',
        industry_types: [],
        industry_type_other: '',
        business_tin: '',
        tin_registered_date: '',
        business_vat: '',
        vat_registered_date: '',
        business_nis: '',
        nis_registered_date: '',
        business_registration_location: '',
        date_business_commenced: '',
        compliance_history_paye_number: '',
        compliance_history_paye_date: '',
        compliance_history_income_tax_number: '',
        compliance_history_income_tax_date: '',
        compliance_history_vat_number: '',
        compliance_history_vat_date: '',
        compliance_history_nis_number: '',
        compliance_history_nis_date: '',
        license_name: '',
        license_number: '',
        license_expiration: '',
        license_details: '',
        
        // Dealership 1
        dealership_id_1: '',
        dealership_contact_person_1: '',
        dealership_contact_phone_1: '',
        dealership_contact_email_1: '',
        dealership_appointed_date_1: '',
        dealership_type_products_1: '',
        
        // Dealership 2
        dealership_id_2: '',
        dealership_contact_person_2: '',
        dealership_contact_phone_2: '',
        dealership_contact_email_2: '',
        dealership_appointed_date_2: '',
        dealership_type_products_2: '',
        full_time_employees: '',
        full_time_employees_female: '',
        full_time_employees_youth: '',
        full_time_employees_differently_abled: '',
        
        // Section E: Part-Time Employees
        part_time_employees: '',
        part_time_employees_female: '',
        part_time_employees_youth: '',
        part_time_employees_differently_abled: '',
        
        // Section E: Financial Information
        gross_sales_previous: '',
        gross_sales_projection: '',
        net_business_assets: '',

        sbb_client: '',
        sbb_interactions: '',
        services: [],
        grant_amount: '',
        training_type: '',
        loan_amount: '',
        challenges: [],
        other_challenges: '',
        owned_controlled: '',
        subsidiary_affiliate: '',
        charitable_political: '',
        declaration_primary_name: '',
        declaration_primary_signature: '',
        declaration_primary_position: '',
        declaration_primary_date: '',
        declaration_secondary_name: '',
        declaration_secondary_signature: '',
        declaration_secondary_position: '',
        declaration_secondary_date: '',
      });

      const [errors, setErrors] = useState({});

    const [owners, setOwners] = useState([
        {
            id: 1,
            fullName: '',
            maritalStatus: '',
            positionTitle: '',
            gender: '',
            tin: '',
            birthdate: '',
            differentlyAbled: '',
            idNumber: '',
            educationLevel: '',
        },
    ]);

    // Function to add a new owner entry
    const addOwnerEntry = () => {
        setOwners([
            ...owners,
            {
                id: owners.length + 1,
                fullName: '',
                maritalStatus: '',
                positionTitle: '',
                gender: '',
                tin: '',
                birthdate: '',
                differentlyAbled: '',
                idNumber: '',
                educationLevel: '',
            },
        ]);
    };

    // Function to remove the last owner entry
    const removeOwnerEntry = () => {
        if (owners.length > 1) {
            setOwners(owners.slice(0, -1));
        } else {
            alert('At least one owner must be listed.');
        }
    };

    // Function to handle changes for individual owner fields
    const handleOwnerChange = (id, field, value) => {
        setOwners(
            owners.map((owner) =>
                owner.id === id ? { ...owner, [field]: value } : owner
            )
        );
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (type === 'checkbox') {
          if (name === 'registration_type' || name === 'industry_types' || 
              name === 'services' || name === 'challenges') {
            setFormData(prevData => ({
              ...prevData,
              [name]: checked 
                ? [...prevData[name], value]
                : prevData[name].filter(item => item !== value)
            }));
          } else {
            setFormData(prevData => ({
              ...prevData,
              [name]: checked
            }));
          }
        } else {
          setFormData(prevData => ({
            ...prevData,
            [name]: value
          }));
        }
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {

          const userId = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId;
          console.log('Extracted User ID:', userId);
          const tokenPayload = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
          console.log('Token Payload:', tokenPayload);


          const registrationData = {
            user_id: userId,
            // Business Information (Section A)
            business_name: formData.business_name,
            trading_name: formData.trading_name,
            registration_type: formData.registration_type.join(', '),
            registration_type_other: formData.registration_type_other,
            primary_contact_name: formData.primary_contact_name,
            primary_contact_phone: formData.primary_contact_phone,
            primary_contact_email: formData.primary_contact_email,
            secondary_contact_name: formData.secondary_contact_name,
            secondary_contact_phone: formData.secondary_contact_phone,
            secondary_contact_email: formData.secondary_contact_email,
            physical_address: formData.physical_address,
            business_tin: formData.business_tin,
            tin_registered_date: formData.tin_registered_date,
            nis_registered_date: formData.nis_registered_date,

            declaration_primary_name: formData.declaration_primary_name,
            declaration_primary_signature: formData.declaration_primary_signature,
            declaration_primary_date: formData.declaration_primary_date,
            declaration_primary_position: formData.declaration_primary_position,

            declaration_secondary_name: formData.declaration_secondary_name,
            declaration_secondary_signature: formData.declaration_secondary_signature,
            declaration_secondary_position: formData.declaration_secondary_position,
            declaration_secondary_date: formData.declaration_secondary_date,

            business_nis: formData.tin_registered_date,
            administrative_region: formData.business_nis,
            trading_address: formData.trading_address,
            mailing_address: formData.mailing_address,
            business_email: formData.business_email,
            business_website: formData.business_website,
            business_phone: formData.business_phone,
            primary_business_sector: formData.primary_business_sector,
            business_outline: formData.business_outline,
            industry_types: formData.industry_types.join(', '),
            industry_type_other: formData.industry_type_other,
      
            // Section E: Qualification Data
            full_time_employees: formData.full_time_employees,
            full_time_employees_female: formData.full_time_employees_female,
            full_time_employees_youth: formData.full_time_employees_youth,
            full_time_employees_differently_abled: formData.full_time_employees_differently_abled,
            
            part_time_employees: formData.part_time_employees,
            part_time_employees_female: formData.part_time_employees_female,
            part_time_employees_youth: formData.part_time_employees_youth,
            part_time_employees_differently_abled: formData.part_time_employees_differently_abled,
            
            gross_sales_previous: formData.gross_sales_previous,
            gross_sales_projection: formData.gross_sales_projection,
            net_business_assets: formData.net_business_assets,
            
            // Section F: Survey Data
            survey_data: {
              sbb_client: formData.sbb_client,
              sbb_interactions: formData.sbb_interactions,
              services: {
                selected_services: formData.services,
                grant_funding: formData.services.includes('grant-funding') ? {
                  amount: parseFloat(formData.grant_amount)
                } : null,
                training: formData.services.includes('training') ? {
                  type: formData.training_type
                } : null,
                loan_funding: formData.services.includes('loan-funding') ? {
                  amount: parseFloat(formData.loan_amount)
                } : null
              },
              business_challenges: {
                challenges: formData.challenges,
                other_challenges: formData.other_challenges
              }
            },
            // Business Declaration (Previously Wrapped)
            business_vat: formData.business_vat,
            vat_registered_date: formData.vat_registered_date,
            business_registration_location: formData.business_registration_location,
            date_business_commenced: formData.date_business_commenced,
            compliance_history_paye_number: formData.compliance_history_paye_number,
            compliance_history_income_tax_number: formData.compliance_history_income_tax_number,
            compliance_history_vat_number: formData.compliance_history_vat_number,
            compliance_history_nis_number: formData.compliance_history_nis_number,
            owned_controlled: formData.owned_controlled === 'no',
            subsidiary_affiliate: formData.subsidiary_affiliate === 'no',
            charitable_political: formData.charitable_political === 'no',

            // Section G: Business Declaration
            business_declaration: {
              owned_controlled: formData.owned_controlled === 'yes',
              subsidiary_affiliate: formData.subsidiary_affiliate === 'yes',
              charitable_political: formData.charitable_political === 'yes',
              declaration: {
                primary: {
                  name: formData.declaration_primary_name,
                  signature: formData.declaration_primary_signature,
                  position: formData.declaration_primary_position,
                  date: formData.declaration_primary_date
                },
                secondary: formData.declaration_secondary_name ? {
                  name: formData.declaration_secondary_name,
                  signature: formData.declaration_secondary_signature,
                  position: formData.declaration_secondary_position,
                  date: formData.declaration_secondary_date
                } : null
              }
            },
            
            // Format license data
            license: {
              name: formData.license_name,
              number: formData.license_number,
              expiration_date: formData.license_expiration,
              details: formData.license_details
            },
            
            // Format dealership data
            dealerships: [
              {
                dealership_id: formData.dealership_id_1,
                contact_person: formData.dealership_contact_person_1,
                contact_phone: formData.dealership_contact_phone_1,
                contact_email: formData.dealership_contact_email_1,
                appointed_date: formData.dealership_appointed_date_1,
                type_products: formData.dealership_type_products_1
              },
              {
                dealership_id: formData.dealership_id_2,
                contact_person: formData.dealership_contact_person_2,
                contact_phone: formData.dealership_contact_phone_2,
                contact_email: formData.dealership_contact_email_2,
                appointed_date: formData.dealership_appointed_date_2,
                type_products: formData.dealership_type_products_2
              }
            ].filter(dealership => dealership.dealership_id)
          };
      
          const response = await axios.post('/api/registrations', registrationData, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          if (response.status === 201) {
            alert('Registration submitted successfully!');
            navigate('/home')
          }
        } catch (error) {
          console.error('Error submitting registration:', error);
          alert('An error occurred while submitting the registration. Please try again.');
        }
      };

    return (
        <div className='page'>
            <div className="heading">
                <h1>Small Business Registration</h1>
                <p>Please fill out the form below</p>
            </div>
            <form onSubmit={handleSubmit}>
                <Containers title='Verify your status as a Small Business'>
                    <p>
                        To qualify for registration as an Approved Small Business and be eligible for participation in the Small Business Procurement Programme,
                        businesses must satisfy the requirements of a small business as set out in the Small Business Act of 2004 (Section 2.(1).a-f): <br />

                        Section 2.(1).a-f of the Small Business Act of 2004 states: "small business" means any person or persons, including a body corporate or unincorporate, carrying on business in Guyana for gain or profit and satisfying the criteria listed hereunder, but does not include any business having as its principal object the furtherance of a charitable or political purpose -<br />
                        <ul>
                        <li>is incorporated or registered under the Companies Act 1991 or the Business Names (Registration) Act; or</li>
                        <li>is a partnership under the Partnership Act;</li>
                        <li>is owned by a person or persons trading not under the Companies Act nor in partnership;</li>
                        <li>is a registered cooperative society under the Co-operative Societies Act;</li>
                        <li>is owned and controlled by those persons who hold the majority shareholding or controlling interests in the business, and is not a subsidiary or affiliate of another company; and</li>
                        <li>satisfies all three(3) of the following conditions:</li>
                        </ul>
                        <div className='list'>
                        <label>
                            <input 
                            type="checkbox" 
                            id="employs_less_than_25" 
                            name="employs_less_than_25"
                            checked={formData.eligibility.employs_less_than_25}
                            onChange={(e) => {
                                setFormData(prev => ({
                                ...prev,
                                eligibility: {
                                    ...prev.eligibility,
                                    employs_less_than_25: e.target.checked
                                }
                                }));
                            }}
                            />
                            Employs not more than 25 employees
                        </label>
                        <label>
                            <input 
                            type="checkbox" 
                            id="revenue_less_than_60m" 
                            name="revenue_less_than_60m"
                            checked={formData.eligibility.revenue_less_than_60m}
                            onChange={(e) => {
                                setFormData(prev => ({
                                ...prev,
                                eligibility: {
                                    ...prev.eligibility,
                                    revenue_less_than_60m: e.target.checked
                                }
                                }));
                            }}
                            />
                            Has gross annual revenue of not more than 60 million
                        </label>
                        <label>
                            <input 
                            type="checkbox" 
                            id="assets_less_than_20m" 
                            name="assets_less_than_20m"
                            checked={formData.eligibility.assets_less_than_20m}
                            onChange={(e) => {
                                setFormData(prev => ({
                                ...prev,
                                eligibility: {
                                    ...prev.eligibility,
                                    assets_less_than_20m: e.target.checked
                                }
                                }));
                            }}
                            />
                            Has total business assets of not more than twenty million dollars
                        </label>
                        </div>
    <br />
                    <b>TO QUALIFY FOR REGISTRATION, YOUR BUSINESS MUST: BE REGISTERED UNDER THE COMPANIES ACT 1991, BUSINESS NAMES (REGISTRATION) ACT, PARTNERSHIP ACT, OR CO-OPERATIVE SOCIETIES ACT; NOT BE A SUBSIDIARY OR AFFILIATE OF ANOTHER COMPANY; AND MEET AT LEAST TWO OF THE CONDITIONS STATED IN SUB-SECTION F.<br /></b>
                    <b>Please apply for registration only if qualified<br /></b>
                    An e-mail acknowledging receipt of the form and its details, with an application number, will be sent by SBB to the primary contact person identified on the form for verification of accuracy of the supplied data. Once SBB completes internal verification of the supplied data with its sister GCRG agencies, an e-mail of the small business registration certificate with the registration number will be sent to the primary contact person identified on the form, or can be collected from SBB. For more information please e-mail sbbgyinfo@gmail.com or call +592 226-8120, +592 226-8123, or +592 226-8133.
                    </p>
                </Containers>
                <Containers title="Section A: Business Information">
                    <p>
                        A.2 Trading Name - If different from commonly used name, enter the business name as on the Business Registration (Companies/Business Names/Partnership/Co-operative). <br />
                        A.3 Business Type* - Tick more than one box if necessary. Specify Other business type in the box provided next to Other checkbox.<br />
                        A.4 Primary Contact Information* - How SBB contacts the business. SBB must be immediately informed in writing if changed. A.4.c E-mail Address* - Primary contact e-mail address. All correspondence between SBB and business will use this address.<br />
                        A.5 Secondary Contact Information - Alternative contact information if the primary contact is unreachable. SBB must be informed of any changes.<br />
                        A.7 Trading Address - If different from Physical Address, enter the full Business Trading Address as on the Business Registration.<br />
                        A.12 Primary Business Sector* - Name the specific business activities, e.g. Manufacture of musical instruments, or Processing and preserving of fruits and vegetables.<br />
                        A.13 Industry Type(s)* - Select based on the main business activity(ies).<br />
                        A.14 Business Outline (Describe specific business activities)* - Write a brief outline of exactly what the business does. For example, if it is in the sector "Processing and preserving of fruits and vegetables", describe which part(s) of the processing and/or preserving the business completes: "shelling peanuts" or "picking, peeling and cutting, and cooking fruit into jam".
                    </p>
                    <div className='list'>
                        <div className="row">
                        <label htmlFor="business_name">Business Name*</label>
                        <input
                            type="text"
                            id="business_name"
                            name="business_name"
                            value={formData.business_name}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="row">
                        <label htmlFor="trading_name">Trading Name (if different)</label>
                        <input
                            type="text"
                            id="trading_name"
                            name="trading_name"
                            value={formData.trading_name}
                            onChange={handleChange}
                        />
                        </div>

                        <div className="row">
                        <label>Business Registration Type*</label>
                        <div className='list'>
                            <label>
                            <input
                                type="checkbox"
                                name="registration_type"
                                value="business_names"
                                checked={formData.registration_type.includes('business_names')}
                                onChange={handleChange}
                            />
                            Business Names Registration
                            </label>
                            <label>
                            <input
                                type="checkbox"
                                name="registration_type"
                                value="registered_company"
                                checked={formData.registration_type.includes('registered_company')}
                                onChange={handleChange}
                            />
                            Registered Company
                            </label>
                            <label>
                            <input
                                type="checkbox"
                                name="registration_type"
                                value="partnership"
                                checked={formData.registration_type.includes('partnership')}
                                onChange={handleChange}
                            />
                            Partnership
                            </label>
                            <label>
                            <input
                                type="checkbox"
                                name="registration_type"
                                value="cooperative"
                                checked={formData.registration_type.includes('cooperative')}
                                onChange={handleChange}
                            />
                            Cooperative
                            </label>
                            <label>
                            <input
                                type="checkbox"
                                name="registration_type"
                                value="other"
                                checked={formData.registration_type.includes('other')}
                                onChange={handleChange}
                            />
                            Other
                            </label>
                            <input
                            type="text"
                            name="registration_type_other"
                            placeholder="Specify Other"
                            value={formData.registration_type_other}
                            onChange={handleChange}
                            />
                        </div>
                        </div>

                        <div className="row">
                        <label htmlFor="primary_contact_name">Primary Contact Name*</label>
                        <input
                            type="text"
                            id="primary_contact_name"
                            name="primary_contact_name"
                            value={formData.primary_contact_name}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="row">
                        <label htmlFor="primary_contact_phone">Primary Contact Phone*</label>
                        <input
                            type="tel"
                            id="primary_contact_phone"
                            name="primary_contact_phone"
                            value={formData.primary_contact_phone}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="row">
                        <label htmlFor="primary_contact_email">Primary Contact Email*</label>
                        <input
                            type="email"
                            id="primary_contact_email"
                            name="primary_contact_email"
                            value={formData.primary_contact_email}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="row">
                        <label htmlFor="secondary_contact_name">Secondary Contact Name</label>
                        <input
                            type="text"
                            id="secondary_contact_name"
                            name="secondary_contact_name"
                            value={formData.secondary_contact_name}
                            onChange={handleChange}
                        />
                        </div>

                        <div className="row">
                        <label htmlFor="secondary_contact_phone">Secondary Contact Phone</label>
                        <input
                            type="tel"
                            id="secondary_contact_phone"
                            name="secondary_contact_phone"
                            value={formData.secondary_contact_phone}
                            onChange={handleChange}
                        />
                        </div>

                        <div className="row">
                        <label htmlFor="secondary_contact_email">Secondary Contact Email</label>
                        <input
                            type="email"
                            id="secondary_contact_email"
                            name="secondary_contact_email"
                            value={formData.secondary_contact_email}
                            onChange={handleChange}
                        />
                        </div>

                        <div className="row">
                        <label htmlFor="physical_address">Physical Address*</label>
                        <textarea
                            id="physical_address"
                            name="physical_address"
                            rows="3"
                            value={formData.physical_address}
                            onChange={handleChange}
                            required
                        ></textarea>
                        </div>

                        <div className="row">
                        <label htmlFor="administrative_region">Administrative Region*</label>
                        <select
                            id="administrative_region"
                            name="administrative_region"
                            value={formData.administrative_region}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Region</option>
                            <option value="region_1">Region 1</option>
                            <option value="region_2">Region 2</option>
                            <option value="region_3">Region 3</option>
                            <option value="region_4">Region 4</option>
                            <option value="region_5">Region 5</option>
                            <option value="region_6">Region 6</option>
                            <option value="region_7">Region 7</option>
                            <option value="region_8">Region 8</option>
                            <option value="region_9">Region 9</option>
                            <option value="region_10">Region 10</option>
                        </select>
                        </div>

                        <div className="row">
                        <label htmlFor="trading_address">Trading Address (if different)</label>
                        <textarea
                            id="trading_address"
                            name="trading_address"
                            rows="3"
                            value={formData.trading_address}
                            onChange={handleChange}
                        ></textarea>
                        </div>

                        <div className="row">
                        <label htmlFor="mailing_address">Mailing Address (if different)</label>
                        <textarea
                            id="mailing_address"
                            name="mailing_address"
                            rows="3"
                            value={formData.mailing_address}
                            onChange={handleChange}
                        ></textarea>
                        </div>

                        <div className="row">
                        <label htmlFor="business_email">Business Email Address*</label>
                        <input
                            type="email"
                            id="business_email"
                            name="business_email"
                            value={formData.business_email}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="row">
                        <label htmlFor="business_website">Business Website</label>
                        <input
                            type="text"
                            id="business_website"
                            name="business_website"
                            value={formData.business_website}
                            onChange={handleChange}
                        />
                        </div>

                        <div className="row">
                        <label htmlFor="business_phone">Business Phone Number*</label>
                        <input
                            type="tel"
                            id="business_phone"
                            name="business_phone"
                            value={formData.business_phone}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="row">
                        <label htmlFor="primary_business_sector">Primary Business Sector*</label>
                        <input
                            type="text"
                            id="primary_business_sector"
                            name="primary_business_sector"
                            value={formData.primary_business_sector}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="row">
                        <label htmlFor="business_outline">Business Outline*</label>
                        <textarea
                            id="business_outline"
                            name="business_outline"
                            rows="4"
                            value={formData.business_outline}
                            onChange={handleChange}
                            required
                        ></textarea>
                        </div>

                        <div className="row">
                        <label>Industry Types*</label>
                        <div className='list'>
                            <label>
                            <input
                                type="checkbox"
                                name="industry_types"
                                value="works"
                                checked={formData.industry_types.includes('works')}
                                onChange={handleChange}
                            />
                            Works
                            </label>
                            <label>
                            <input
                                type="checkbox"
                                name="industry_types"
                                value="goods"
                                checked={formData.industry_types.includes('goods')}
                                onChange={handleChange}
                            />
                            Goods
                            </label>
                            <label>
                            <input
                                type="checkbox"
                                name="industry_types"
                                value="consulting_services"
                                checked={formData.industry_types.includes('consulting_services')}
                                onChange={handleChange}
                            />
                            Consulting Services
                            </label>
                            <label>
                            <input
                                type="checkbox"
                                name="industry_types"
                                value="other_services"
                                checked={formData.industry_types.includes('other_services')}
                                onChange={handleChange}
                            />
                            Other Services
                            </label>
                            <label>
                            <input
                                type="checkbox"
                                name="industry_types"
                                value="other"
                                checked={formData.industry_types.includes('other')}
                                onChange={handleChange}
                            />
                            Other
                            </label>
                            <input
                            type="text"
                            name="industry_type_other"
                            placeholder="Specify Other"
                            value={formData.industry_type_other}
                            onChange={handleChange}
                            />
                        </div>
                        </div>
                    </div>
                </Containers>

                <Containers title="Section B: Registration and Compliance History">
                    <p>
                        B.4 Business TIN* - Enter business's registered TIN. All businesses must have a Tax Identification Number; local or foreign.<br />
                        B.5 Business VAT No.* - Enter business's VAT registration number. Enter N/A if no Value Added Tax registration.<br />
                        B.6 Business NIS No.* - Enter business's NIS registration number. All local businesses must have a National Insurance Scheme registration number.<br />
                    </p>
                    <div className='list'>
                        <div className="row">
                        <label htmlFor="business_tin">Business TIN*</label>
                        <input
                            type="text"
                            id="business_tin"
                            name="business_tin"
                            value={formData.business_tin}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="row">
                        <label htmlFor="tin_registered_date">TIN Registered Date*</label>
                        <input
                            type="date"
                            id="tin_registered_date"
                            name="tin_registered_date"
                            value={formData.tin_registered_date}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="row">
                        <label htmlFor="business_vat">Business VAT No.*</label>
                        <input
                            type="text"
                            id="business_vat"
                            name="business_vat"
                            value={formData.business_vat}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="row">
                        <label htmlFor="vat_registered_date">VAT Registered Date*</label>
                        <input
                            type="date"
                            id="vat_registered_date"
                            name="vat_registered_date"
                            value={formData.vat_registered_date}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="row">
                        <label htmlFor="business_nis">Business NIS No.*</label>
                        <input
                            type="text"
                            id="business_nis"
                            name="business_nis"
                            value={formData.business_nis}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="row">
                        <label htmlFor="nis_registered_date">NIS Registered Date*</label>
                        <input
                            type="date"
                            id="nis_registered_date"
                            name="nis_registered_date"
                            value={formData.nis_registered_date}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="row">
                        <label htmlFor="business_registration_location">Business Registration Location*</label>
                        <select
                            id="business_registration_location"
                            name="business_registration_location"
                            value={formData.business_registration_location}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Location</option>
                            <option value="guyana">Guyana</option>
                            <option value="other">Other</option>
                        </select>
                        </div>

                        <div className="row">
                        <label htmlFor="date_business_commenced">Date Business Commenced*</label>
                        <input
                            type="date"
                            id="date_business_commenced"
                            name="date_business_commenced"
                            value={formData.date_business_commenced}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className='row'>
                        <div className="list-subsect">
                            <label htmlFor="compliance_history_paye_number">Compliance History - PAYE Number*</label>
                            <input
                            type="text"
                            id="compliance_history_paye_number"
                            name="compliance_history_paye_number"
                            value={formData.compliance_history_paye_number}
                            onChange={handleChange}
                            required
                            />
                        </div>
                        <div className="list-subsect">
                            <label htmlFor="compliance_history_paye_date">PAYE Registered Date*</label>
                            <input
                            type="month"
                            id="compliance_history_paye_date"
                            name="compliance_history_paye_date"
                            value={formData.compliance_history_paye_date}
                            onChange={handleChange}
                            required
                            />
                        </div>
                        </div>

                        <div className='row'>
                        <div className="list-subsect">
                            <label htmlFor="compliance_history_income_tax_number">Compliance History - Income Tax Number*</label>
                            <input
                            type="text"
                            id="compliance_history_income_tax_number"
                            name="compliance_history_income_tax_number"
                            value={formData.compliance_history_income_tax_number}
                            onChange={handleChange}
                            required
                            />
                        </div>
                        <div className="list-subsect">
                            <label htmlFor="compliance_history_income_tax_date">Income Tax Registered Date*</label>
                            <input
                            type="month"
                            id="compliance_history_income_tax_date"
                            name="compliance_history_income_tax_date"
                            value={formData.compliance_history_income_tax_date}
                            onChange={handleChange}
                            required
                            />
                        </div>
                        </div>

                        <div className='row'>
                        <div className="list-subsect">
                            <label htmlFor="compliance_history_vat_number">Compliance History - VAT Number*</label>
                            <input
                            type="text"
                            id="compliance_history_vat_number"
                            name="compliance_history_vat_number"
                            value={formData.compliance_history_vat_number}
                            onChange={handleChange}
                            required
                            />
                        </div>
                        <div className="list-subsect">
                            <label htmlFor="compliance_history_vat_date">VAT Registered Date*</label>
                            <input
                            type="month"
                            id="compliance_history_vat_date"
                            name="compliance_history_vat_date"
                            value={formData.compliance_history_vat_date}
                            onChange={handleChange}
                            required
                            />
                        </div>
                        </div>

                        <div className='row'>
                        <div className="list-subsect">
                            <label htmlFor="compliance_history_nis_number">Compliance History - NIS Number*</label>
                            <input
                            type="text"
                            id="compliance_history_nis_number"
                            name="compliance_history_nis_number"
                            value={formData.compliance_history_nis_number}
                            onChange={handleChange}
                            required
                            />
                        </div>
                        <div className="list-subsect">
                            <label htmlFor="compliance_history_nis_date">NIS Registered Date*</label>
                            <input
                            type="month"
                            id="compliance_history_nis_date"
                            name="compliance_history_nis_date"
                            value={formData.compliance_history_nis_date}
                            onChange={handleChange}
                            required
                            />
                        </div>
                        </div>
                    </div>
                    </Containers>

                <Containers title="Section C: Business Ownership Information">
                <p>Enter primary owner information first. All owners must be listed.<br /></p>
                <div id="owners-section" className="list">
                    {owners.map((owner, index) => (
                    <div key={owner.id} className="owner-entry list">
                        <h4>Owner {index + 1}</h4>
                        <div className="row">
                        <label htmlFor={`owner_full_name_${owner.id}`}>Owner Full Name*</label>
                        <input
                            type="text"
                            id={`owner_full_name_${owner.id}`}
                            name={`owner_full_name_${owner.id}`}
                            value={owner.full_name}
                            onChange={(e) =>
                            handleOwnerChange(owner.id, 'full_name', e.target.value)
                            }
                            required
                        />
                        </div>

                        <div className="row">
                        <label htmlFor={`owner_marital_status_${owner.id}`}>Marital Status*</label>
                        <select
                            id={`owner_marital_status_${owner.id}`}
                            name={`owner_marital_status_${owner.id}`}
                            value={owner.marital_status}
                            onChange={(e) =>
                            handleOwnerChange(owner.id, 'marital_status', e.target.value)
                            }
                            required
                        >
                            <option value="">Select Status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                        </select>
                        </div>

                        <div className="row">
                        <label htmlFor={`owner_position_title_${owner.id}`}>Position Title*</label>
                        <input
                            type="text"
                            id={`owner_position_title_${owner.id}`}
                            name={`owner_position_title_${owner.id}`}
                            value={owner.position_title}
                            onChange={(e) =>
                            handleOwnerChange(owner.id, 'position_title', e.target.value)
                            }
                            required
                        />
                        </div>

                        <div className="row">
                        <label htmlFor={`owner_gender_${owner.id}`}>Gender*</label>
                        <select
                            id={`owner_gender_${owner.id}`}
                            name={`owner_gender_${owner.id}`}
                            value={owner.gender}
                            onChange={(e) =>
                            handleOwnerChange(owner.id, 'gender', e.target.value)
                            }
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="non-binary">Non-Binary</option>
                            <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                        </div>

                        <div className="row">
                        <label htmlFor={`owner_tin_${owner.id}`}>TIN No.*</label>
                        <input
                            type="text"
                            id={`owner_tin_${owner.id}`}
                            name={`owner_tin_${owner.id}`}
                            value={owner.tin}
                            onChange={(e) =>
                            handleOwnerChange(owner.id, 'tin', e.target.value)
                            }
                            required
                        />
                        </div>

                        <div className="row">
                        <label htmlFor={`owner_birthdate_${owner.id}`}>Birthdate*</label>
                        <input
                            type="date"
                            id={`owner_birthdate_${owner.id}`}
                            name={`owner_birthdate_${owner.id}`}
                            value={owner.birthdate}
                            onChange={(e) =>
                            handleOwnerChange(owner.id, 'birthdate', e.target.value)
                            }
                            required
                        />
                        </div>

                        <div className="row">
                        <label htmlFor={`owner_differently_abled_${owner.id}`}>Differently Abled*</label>
                        <select
                            id={`owner_differently_abled_${owner.id}`}
                            name={`owner_differently_abled_${owner.id}`}
                            value={owner.differently_abled}
                            onChange={(e) =>
                            handleOwnerChange(owner.id, 'differently_abled', e.target.value)
                            }
                            required
                        >
                            <option value="">Select Option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        </div>

                        <div className="row">
                        <label htmlFor={`owner_id_number_${owner.id}`}>ID No.*</label>
                        <input
                            type="text"
                            id={`owner_id_number_${owner.id}`}
                            name={`owner_id_number_${owner.id}`}
                            value={owner.id_number}
                            onChange={(e) =>
                            handleOwnerChange(owner.id, 'id_number', e.target.value)
                            }
                            required
                        />
                        </div>

                        <div className="row">
                        <label htmlFor={`owner_education_level_${owner.id}`}>
                            Highest Level of Education Completed*
                        </label>
                        <select
                            id={`owner_education_level_${owner.id}`}
                            name={`owner_education_level_${owner.id}`}
                            value={owner.education_level}
                            onChange={(e) =>
                            handleOwnerChange(owner.id, 'education_level', e.target.value)
                            }
                            required
                        >
                            <option value="">Select Education Level</option>
                            <option value="primary">Primary School</option>
                            <option value="secondary">Secondary School</option>
                            <option value="associate">Associate Degree</option>
                            <option value="bachelor">Bachelor's Degree</option>
                            <option value="master">Master's Degree</option>
                            <option value="doctorate">Doctorate</option>
                        </select>
                        </div>
                    </div>
                    ))}

                    <div className="row">
                    <button
                        className="btn btn-gray"
                        type="button"
                        id="add-owner"
                        onClick={addOwnerEntry}
                    >
                        Add Owner
                    </button>
                    <button
                        className="btn btn-gray"
                        type="button"
                        id="remove-owner"
                        onClick={removeOwnerEntry}
                    >
                        Remove Owner
                    </button>
                    </div>
                </div>
                </Containers>

                <Containers title="Section D: Core Business Activities">
                <p>
                    D.1-2 - Enter standards compliance/operational licensing only if the compliance/license is still valid.<br />
                    D.3-4 - Only applicable if business is a registered dealer.<br />
                </p>
                <div id="core-business-activities" className='list'>
                    {/* Compliance Standards / Operational License */}
                    <div className="row">
                    <h4>Compliance Standard or Operational License</h4>
                    </div>
                    <div className="row">
                    <label htmlFor="license_name">Name</label>
                    <input
                        type="text"
                        id="license_name"
                        name="license_name"
                        value={formData.license_name}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="row">
                    <label htmlFor="license_number">No.</label>
                    <input
                        type="text"
                        id="license_number"
                        name="license_number"
                        value={formData.license_number}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="row">
                    <label htmlFor="license_expiration">Expiration Date (DD/MM/YYYY)</label>
                    <input
                        type="date"
                        id="license_expiration"
                        name="license_expiration"
                        value={formData.license_expiration}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="row">
                    <label htmlFor="license_details">Details</label>
                    <textarea
                        id="license_details"
                        name="license_details"
                        rows="3"
                        value={formData.license_details}
                        onChange={handleChange}
                    ></textarea>
                    </div>

                    {/* Authorized Dealership 1 */}
                    <div className="row">
                    <h4>Authorized Dealership 1</h4>
                    </div>
                    <div className="row">
                    <label htmlFor="dealership_id_1">Authorized Dealership ID No.</label>
                    <input
                        type="text"
                        id="dealership_id_1"
                        name="dealership_id_1"
                        value={formData.dealership_id_1}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="row">
                    <label htmlFor="dealership_contact_person_1">Contact Person (Full Name)</label>
                    <input
                        type="text"
                        id="dealership_contact_person_1"
                        name="dealership_contact_person_1"
                        value={formData.dealership_contact_person_1}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="row">
                    <label htmlFor="dealership_contact_phone_1">Contact Person (Phone)</label>
                    <input
                        type="tel"
                        id="dealership_contact_phone_1"
                        name="dealership_contact_phone_1"
                        value={formData.dealership_contact_phone_1}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="row">
                    <label htmlFor="dealership_contact_email_1">Contact Person (E-Mail)</label>
                    <input
                        type="email"
                        id="dealership_contact_email_1"
                        name="dealership_contact_email_1"
                        value={formData.dealership_contact_email_1}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="row">
                    <label htmlFor="dealership_appointed_date_1">Date Appointed (DD/MM/YYYY)</label>
                    <input
                        type="date"
                        id="dealership_appointed_date_1"
                        name="dealership_appointed_date_1"
                        value={formData.dealership_appointed_date_1}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="row">
                    <label htmlFor="dealership_type_products_1">Dealership Type and Products Covered</label>
                    <textarea
                        id="dealership_type_products_1"
                        name="dealership_type_products_1"
                        rows="3"
                        value={formData.dealership_type_products_1}
                        onChange={handleChange}
                    ></textarea>
                    </div>

                    {/* Authorized Dealership 2 */}
                    <div className="row">
                    <h4>Authorized Dealership 2</h4>
                    </div>
                    <div className="row">
                    <label htmlFor="dealership_id_2">Authorized Dealership ID No.</label>
                    <input
                        type="text"
                        id="dealership_id_2"
                        name="dealership_id_2"
                        value={formData.dealership_id_2}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="row">
                    <label htmlFor="dealership_contact_person_2">Contact Person (Full Name)</label>
                    <input
                        type="text"
                        id="dealership_contact_person_2"
                        name="dealership_contact_person_2"
                        value={formData.dealership_contact_person_2}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="row">
                    <label htmlFor="dealership_contact_phone_2">Contact Person (Phone)</label>
                    <input
                        type="tel"
                        id="dealership_contact_phone_2"
                        name="dealership_contact_phone_2"
                        value={formData.dealership_contact_phone_2}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="row">
                    <label htmlFor="dealership_contact_email_2">Contact Person (E-Mail)</label>
                    <input
                        type="email"
                        id="dealership_contact_email_2"
                        name="dealership_contact_email_2"
                        value={formData.dealership_contact_email_2}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="row">
                    <label htmlFor="dealership_appointed_date_2">Date Appointed (DD/MM/YYYY)</label>
                    <input
                        type="date"
                        id="dealership_appointed_date_2"
                        name="dealership_appointed_date_2"
                        value={formData.dealership_appointed_date_2}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="row">
                    <label htmlFor="dealership_type_products_2">Dealership Type and Products Covered</label>
                    <textarea
                        id="dealership_type_products_2"
                        name="dealership_type_products_2"
                        rows="3"
                        value={formData.dealership_type_products_2}
                        onChange={handleChange}
                    ></textarea>
                    </div>
                </div>
                </Containers>

                <Containers title="Section E: Qualify under Small Business Act (2004)">
                    <p>
                        E.3.a Gross Sales/Turnover for Previous Tax Year* - Enter the gross sales/turnover as the value of goods and services sold during the last tax year. The standard tax year in Guyana ends on December 31. If different, use your tax year for calculation.<br />
                        E.3.b Gross Sales/Turnover Projection for Current Tax Year* - Enter the gross sales/turnover as the value of goods and services the business expects to make within the next tax year. The standard tax year in Guyana begins on January 1. If different, use your tax year for calculation.<br />
                        E.4 Net Business Assets at End of Previous Tax Year* - Enter the total value of business assets as valued at the end of the previous tax year. The standard tax year in Guyana ends on December 31. If different, use your tax year for calculation.<br />
                    </p>
                    <div id="qualify-small-business-act" className='list'>
                        {/* Number of Full-Time Employees */}
                        <div className="row">
                            <h4>Full-Time Employees</h4>
                        </div>
                        <div className="row">
                            <label htmlFor="full_time_employees">Number of Full-Time Employees*</label>
                            <input 
                                type="number" 
                                id="full_time_employees" 
                                name="full_time_employees"
                                value={formData.full_time_employees}
                                onChange={handleChange}
                                className={errors.full_time_employees ? 'error' : ''}
                                required 
                            />
                            {errors.full_time_employees && <span className="error-message">{errors.full_time_employees}</span>}
                        </div>
                        <div className="row">
                            <label htmlFor="full_time_employees_female">Female*</label>
                            <input 
                                type="number" 
                                id="full_time_employees_female" 
                                name="full_time_employees_female"
                                value={formData.full_time_employees_female}
                                onChange={handleChange}
                                className={errors.full_time_employees_female ? 'error' : ''}
                                required 
                            />
                            {errors.full_time_employees_female && <span className="error-message">{errors.full_time_employees_female}</span>}
                        </div>
                        <div className="row">
                            <label htmlFor="full_time_employees_youth">Youth (Under 18)*</label>
                            <input 
                                type="number" 
                                id="full_time_employees_youth" 
                                name="full_time_employees_youth"
                                value={formData.full_time_employees_youth}
                                onChange={handleChange}
                                className={errors.full_time_employees_youth ? 'error' : ''}
                                required 
                            />
                            {errors.full_time_employees_youth && <span className="error-message">{errors.full_time_employees_youth}</span>}
                        </div>
                        <div className="row">
                            <label htmlFor="full_time_employees_differently_abled">Differently Abled*</label>
                            <input 
                                type="number" 
                                id="full_time_employees_differently_abled" 
                                name="full_time_employees_differently_abled"
                                value={formData.full_time_employees_differently_abled}
                                onChange={handleChange}
                                className={errors.full_time_employees_differently_abled ? 'error' : ''}
                                required 
                            />
                            {errors.full_time_employees_differently_abled && <span className="error-message">{errors.full_time_employees_differently_abled}</span>}
                        </div>

                        {/* Number of Part-Time Employees */}
                        <div className="row">
                            <h4>Part-Time Employees</h4>
                        </div>
                        <div className="row">
                            <label htmlFor="part_time_employees">Number of Part-Time Employees*</label>
                            <input 
                                type="number" 
                                id="part_time_employees" 
                                name="part_time_employees"
                                value={formData.part_time_employees}
                                onChange={handleChange}
                                className={errors.part_time_employees ? 'error' : ''}
                                required 
                            />
                            {errors.part_time_employees && <span className="error-message">{errors.part_time_employees}</span>}
                        </div>
                        <div className="row">
                            <label htmlFor="part_time_employees_female">Female*</label>
                            <input 
                                type="number" 
                                id="part_time_employees_female" 
                                name="part_time_employees_female"
                                value={formData.part_time_employees_female}
                                onChange={handleChange}
                                className={errors.part_time_employees_female ? 'error' : ''}
                                required 
                            />
                            {errors.part_time_employees_female && <span className="error-message">{errors.part_time_employees_female}</span>}
                        </div>
                        <div className="row">
                            <label htmlFor="part_time_employees_youth">Youth (Under 18)*</label>
                            <input 
                                type="number" 
                                id="part_time_employees_youth" 
                                name="part_time_employees_youth"
                                value={formData.part_time_employees_youth}
                                onChange={handleChange}
                                className={errors.part_time_employees_youth ? 'error' : ''}
                                required 
                            />
                            {errors.part_time_employees_youth && <span className="error-message">{errors.part_time_employees_youth}</span>}
                        </div>
                        <div className="row">
                            <label htmlFor="part_time_employees_differently_abled">Differently Abled*</label>
                            <input 
                                type="number" 
                                id="part_time_employees_differently_abled" 
                                name="part_time_employees_differently_abled"
                                value={formData.part_time_employees_differently_abled}
                                onChange={handleChange}
                                className={errors.part_time_employees_differently_abled ? 'error' : ''}
                                required 
                            />
                            {errors.part_time_employees_differently_abled && <span className="error-message">{errors.part_time_employees_differently_abled}</span>}
                        </div>

                        {/* Gross Sales/Turnover and Net Business Assets */}
                        <div className="row">
                            <label htmlFor="gross_sales_previous">Gross Sales/Turnover for Previous Tax Year*</label>
                            <input 
                                type="number" 
                                id="gross_sales_previous" 
                                name="gross_sales_previous"
                                value={formData.gross_sales_previous}
                                onChange={handleChange}
                                className={errors.gross_sales_previous ? 'error' : ''}
                                step="0.01" 
                                required 
                            />
                            {errors.gross_sales_previous && <span className="error-message">{errors.gross_sales_previous}</span>}
                        </div>
                        <div className="row">
                            <label htmlFor="gross_sales_projection">Gross Sales/Turnover Projection for Current Tax Year*</label>
                            <input 
                                type="number" 
                                id="gross_sales_projection" 
                                name="gross_sales_projection"
                                value={formData.gross_sales_projection}
                                onChange={handleChange}
                                className={errors.gross_sales_projection ? 'error' : ''}
                                step="0.01" 
                                required 
                            />
                            {errors.gross_sales_projection && <span className="error-message">{errors.gross_sales_projection}</span>}
                        </div>
                        <div className="row">
                            <label htmlFor="net_business_assets">Net Business Assets at End of Previous Tax Year*</label>
                            <input 
                                type="number" 
                                id="net_business_assets" 
                                name="net_business_assets"
                                value={formData.net_business_assets}
                                onChange={handleChange}
                                className={errors.net_business_assets ? 'error' : ''}
                                step="0.01" 
                                required 
                            />
                            {errors.net_business_assets && <span className="error-message">{errors.net_business_assets}</span>}
                        </div>
                    </div>
                </Containers>

                <Containers title="Section F: Survey Data">
                <div id="survey-data" className='list'>
                    {/* Current Small Business Bureau Client */}
                    <div className="row">
                        <label htmlFor="sbb_client">Are you a current Small Business Bureau client?</label>
                        <select 
                            id="sbb_client" 
                            name="sbb_client"
                            value={formData.sbb_client}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select an option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    {/* Past Interactions with SBB */}
                    <div className="row">
                        <label htmlFor="sbb_interactions">Briefly describe your past interactions with the Small Business Bureau</label>
                        <textarea 
                            id="sbb_interactions" 
                            name="sbb_interactions" 
                            rows="4"
                            value={formData.sbb_interactions}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    {/* Services Interested In */}
                    <div className="row">
                        <h4>Are you interested in the following services from the Small Business Bureau?</h4>
                    </div>
                    <div className="row">
                        <label>
                            <input 
                                type="checkbox" 
                                name="services" 
                                value="administrative-support"
                                checked={formData.services.includes('administrative-support')}
                                onChange={handleChange}
                            />
                            Administrative Support
                        </label>
                    </div>
                    <div className="row">
                        <label>
                            <input 
                                type="checkbox" 
                                name="services" 
                                value="grant-funding"
                                checked={formData.services.includes('grant-funding')}
                                onChange={handleChange}
                            />
                            Grant Funding
                        </label>
                        <div className="label-input-pair-sectf">
                            <label htmlFor="grant_amount">Amount</label>
                            <input 
                                type="number" 
                                id="grant_amount" 
                                name="grant_amount"
                                value={formData.grant_amount}
                                onChange={handleChange}
                                step="0.01" 
                            />
                        </div>
                    </div>
                    <div className="row">
                        <label>
                            <input 
                                type="checkbox" 
                                name="services" 
                                value="training"
                                checked={formData.services.includes('training')}
                                onChange={handleChange}
                            />
                            Training
                        </label>
                        <div className="label-input-pair-sectf">
                            <label htmlFor="training_type">Type</label>
                            <input 
                                type="text" 
                                id="training_type" 
                                name="training_type"
                                value={formData.training_type}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <label>
                            <input 
                                type="checkbox" 
                                name="services" 
                                value="loan-funding"
                                checked={formData.services.includes('loan-funding')}
                                onChange={handleChange}
                            />
                            Loan Funding
                        </label>
                        <div className="label-input-pair-sectf">
                            <label htmlFor="loan_amount">Amount</label>
                            <input 
                                type="number" 
                                id="loan_amount" 
                                name="loan_amount"
                                value={formData.loan_amount}
                                onChange={handleChange}
                                step="0.01" 
                            />
                        </div>
                    </div>

                    {/* Business Challenges */}
                    <div className="row">
                        <h4>Indicate the challenges faced by your business</h4>
                    </div>
                    <div className="list">
                        <label>
                            <input 
                                type="checkbox" 
                                name="challenges" 
                                value="cash-flow-management"
                                checked={formData.challenges.includes('cash-flow-management')}
                                onChange={handleChange}
                            />
                            Cash Flow Management
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                name="challenges" 
                                value="access-to-finance"
                                checked={formData.challenges.includes('access-to-finance')}
                                onChange={handleChange}
                            />
                            Access to Finance
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                name="challenges" 
                                value="choosing-what-to-sell"
                                checked={formData.challenges.includes('choosing-what-to-sell')}
                                onChange={handleChange}
                            />
                            Choosing What to Sell
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                name="challenges" 
                                value="attracting-clients"
                                checked={formData.challenges.includes('attracting-clients')}
                                onChange={handleChange}
                            />
                            Attracting Clients/Customers
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                name="challenges" 
                                value="pests-and-disease"
                                checked={formData.challenges.includes('pests-and-disease')}
                                onChange={handleChange}
                            />
                            Pests and Disease
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                name="challenges" 
                                value="tax-compliance"
                                checked={formData.challenges.includes('tax-compliance')}
                                onChange={handleChange}
                            />
                            Tax/Regulation Compliance
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                name="challenges" 
                                value="marketing-strategy"
                                checked={formData.challenges.includes('marketing-strategy')}
                                onChange={handleChange}
                            />
                            Marketing Strategy
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                name="challenges" 
                                value="hiring-skilled-labour"
                                checked={formData.challenges.includes('hiring-skilled-labour')}
                                onChange={handleChange}
                            />
                            Hiring Skilled Labour
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                name="challenges" 
                                value="business-management-knowledge"
                                checked={formData.challenges.includes('business-management-knowledge')}
                                onChange={handleChange}
                            />
                            Business Management Knowledge
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                name="challenges" 
                                value="business-management-skills"
                                checked={formData.challenges.includes('business-management-skills')}
                                onChange={handleChange}
                            />
                            Business Management Skills
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                name="challenges" 
                                value="other"
                                checked={formData.challenges.includes('other')}
                                onChange={handleChange}
                            />
                            Other
                        </label>
                        <textarea 
                            id="other_challenges" 
                            name="other_challenges" 
                            rows="2" 
                            placeholder="Describe other challenges"
                            value={formData.other_challenges}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
            </Containers>

            <Containers title="Section G: Business Declaration">
            <p>
                G.1 Business Organization and Objectives*<br />
                G.2 Legally Binding Self-Declaration* to be signed by up to 2 business owners.<br />
            </p>
            <div id="business-declaration" className='list'>
                {/* Business Organization and Objectives */}
                <div className="row">
                    <label htmlFor="owned_controlled">
                        Is the business owned and controlled by those persons who hold the majority shareholding or controlling interests in the business?*
                    </label>
                    <select 
                        id="owned_controlled" 
                        name="owned_controlled"
                        value={formData.owned_controlled}
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="row">
                    <label htmlFor="subsidiary_affiliate">
                        Is the business a subsidiary or affiliate of another company?*
                    </label>
                    <select 
                        id="subsidiary_affiliate" 
                        name="subsidiary_affiliate"
                        value={formData.subsidiary_affiliate}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="row">
                    <label htmlFor="charitable_political">
                        Does the business have as its principal object the furtherance of a charitable or political purpose?*
                    </label>
                    <select 
                        id="charitable_political" 
                        name="charitable_political"
                        value={formData.charitable_political}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                {/* Legally Binding Self-Declaration */}
                <div className="">
                    <h4>Legally Binding Self-Declaration*</h4>
                    <p>
                        We the undersigned declare that the details provided in this form as supplier owners are correct to the best of our knowledge, and that, in the event of changes, details will be provided immediately to the Small Business Bureau. In the case that any of the above information is found to be false, untrue, misleading, or misrepresenting, we are aware that we may be held liable for it. We hereby authorize sharing of the information furnished on this form with all bodies of the Government of the Cooperative Republic of Guyana. UNSIGNED FORMS WILL NOT BE PROCESSED BY SBB.
                    </p>
                </div>
                <div className="row">
                    <label htmlFor="declaration_primary_name">Applicant (Primary)</label>
                    <input 
                        type="text" 
                        id="declaration_primary_name" 
                        name="declaration_primary_name"
                        value={formData.declaration_primary_name}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="row">
                    <label htmlFor="declaration_primary_signature">Signature</label>
                    <input 
                        type="text" 
                        id="declaration_primary_signature" 
                        name="declaration_primary_signature"
                        value={formData.declaration_primary_signature}
                        onChange={handleChange}
                        placeholder="Primary Applicant's Signature" 
                        required 
                    />
                </div>
                <div className="row">
                    <label htmlFor="declaration_primary_position">Position</label>
                    <input 
                        type="text" 
                        id="declaration_primary_position" 
                        name="declaration_primary_position"
                        value={formData.declaration_primary_position}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="row">
                    <label htmlFor="declaration_primary_date">Date</label>
                    <input 
                        type="date" 
                        id="declaration_primary_date" 
                        name="declaration_primary_date"
                        value={formData.declaration_primary_date}
                        onChange={handleChange}
                        required 
                    />
                </div>

                {/* Secondary Applicant (Optional) */}
                <div className="row">
                    <label htmlFor="declaration_secondary_name">Applicant (Secondary)</label>
                    <input 
                        type="text" 
                        id="declaration_secondary_name" 
                        name="declaration_secondary_name"
                        value={formData.declaration_secondary_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="row">
                    <label htmlFor="declaration_secondary_signature">Signature</label>
                    <input 
                        type="text" 
                        id="declaration_secondary_signature" 
                        name="declaration_secondary_signature"
                        value={formData.declaration_secondary_signature}
                        onChange={handleChange}
                        placeholder="Secondary Applicant's Signature" 
                    />
                </div>
                <div className="row">
                    <label htmlFor="declaration_secondary_position">Position</label>
                    <input 
                        type="text" 
                        id="declaration_secondary_position" 
                        name="declaration_secondary_position"
                        value={formData.declaration_secondary_position}
                        onChange={handleChange}
                    />
                </div>
                <div className="row">
                    <label htmlFor="declaration_secondary_date">Date</label>
                    <input 
                        type="date" 
                        id="declaration_secondary_date" 
                        name="declaration_secondary_date"
                        value={formData.declaration_secondary_date}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </Containers>

                <div className='btn-container'>
                    <a href='/home' className='btn btn-red'>Cancel</a>
                    <button className='btn btn-green' type='submit'>Submit</button>
                </div>

            </form>
                

        </div>
    );
};

export default SBRegistration;