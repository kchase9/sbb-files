import React from 'react';
import Containers from '../../components/containers/containers.js';
import './sb-registration.css';

const SBRegistration = () => {
    return (
        <div className='page'>
            <div className="heading">
                <h1>Small Business Registration</h1>
                <p>Please fill out the form below</p>
            </div>
            <form>
                {/* Section A */}
                <Containers title='Part 1: Business Registration (Section A)'>
                    <label>
                        Business Name*:
                        <input type="text" name="businessName" />
                    </label>
                    <label>
                        Trading Name (If Different):
                        <input type="text" name="tradingName" />
                    </label>
                    <label>
                        Business Registration Type*:
                        <select name="businessType">
                            <option value="businessNames">Business Names Registration</option>
                            <option value="registeredCompany">Registered Company</option>
                            <option value="partnership">Partnership</option>
                            <option value="cooperative">Cooperative</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                </Containers>

                {/* Section B */}
                <Containers title='Part 2: Registration and Compliance History (Section B)'>
                    <label>
                        Registration No. (Only fill those that apply)*:
                        <input type="text" name="registrationNumber" />
                    </label>
                    <label>
                        TIN*:
                        <input type="text" name="tin" />
                    </label>
                    <label>
                        VAT No.*:
                        <input type="text" name="vat" />
                    </label>
                    <label>
                        NIS No.*:
                        <input type="text" name="nis" />
                    </label>
                </Containers>

                {/* Section C */}
                <Containers title='Part 3: Business Ownership Information (Section C)'>
                    <label>
                        Owner Name*:
                        <input type="text" name="ownerName" />
                    </label>
                    <label>
                        Owner TIN*:
                        <input type="text" name="ownerTIN" />
                    </label>
                    <label>
                        Owner NIS*:
                        <input type="text" name="ownerNIS" />
                    </label>
                </Containers>

                {/* Section D */}
                <Containers title='Part 4: Business Activities and Compliance (Section D)'>
                    <label>
                        Standards Compliance:
                        <input type="text" name="standardsCompliance" />
                    </label>
                    <label>
                        Operational Licensing:
                        <input type="text" name="operationalLicense" />
                    </label>
                </Containers>

                {/* Section E */}
                <Containers title='Part 5: Qualify as a Small Business (Section E)'>
                    <label>
                        Gross Sales/Turnover for Previous Tax Year*:
                        <input type="text" name="grossSalesPreviousYear" />
                    </label>
                    <label>
                        Gross Sales/Turnover Projection for Current Tax Year*:
                        <input type="text" name="grossSalesProjection" />
                    </label>
                    <label>
                        Net Business Assets at End of Previous Tax Year*:
                        <input type="text" name="netAssetsPreviousYear" />
                    </label>
                </Containers>

                {/* Section F */}
                <Containers title='Part 6: Small Business Bureau Survey Data (Section F)'>
                    <label>
                        Survey Details:
                        <textarea name="surveyDetails"></textarea>
                    </label>
                </Containers>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SBRegistration;
