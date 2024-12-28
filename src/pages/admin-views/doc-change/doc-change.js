import React from 'react';
import EditInfoLayout from '../../../templates/edit-info-layout/edit-info-layout.js';
import './doc-change.css';

// Please Fix

const DocChange = () => {
    return (
        <EditInfoLayout title="Change of Documentation">
            <div className="request-document-change-form">
                <form>
                    {/* Select Document Being Changed */}
                    <div className="form-group row">
                        <label htmlFor="document-select">Select document being changed:</label>
                        <select id="document-select" name="document">
                            {[
                                "Business Registration",
                                "TIN",
                                "NIS",
                                "GRA Compliance Letter",
                                "NIS Compliance Letter",
                                "Operational License(s)/Compliance Standard(s) Certificates",
                                "Owner TIN Certificate",
                                "ID Card(s)",
                            ].map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Reason for Change */}
                    <div className="form-group row">
                        <label>Reason for change of documentation:</label>
                        <div className="radio-group">
                            {[
                                "Legal Name Change",
                                "Expired Document",
                                "Previous Incorrect Submission",
                                "Other",
                            ].map((reason, index) => (
                                <label key={index} className="radio-option">
                                    <input type="radio" name="reason" value={reason} />
                                    {reason}
                                </label>
                            ))}
                            <input type='text' name='other' placeholder='Other'></input>

                        </div>
                    </div>

                    {/* Upload New Document */}
                    <div className="form-group row">
                        <label htmlFor="upload-document">Upload New Document:</label>
                        <input type="file" id="upload-document" name="upload-document" />
                    </div>

                    {/* Submit Button */}
                    <div className='btn-container'>
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

export default DocChange;
