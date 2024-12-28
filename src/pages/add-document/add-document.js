import React from 'react';
import './add-document.css';
import EditInfoLayout from '../../templates/edit-info-layout/edit-info-layout.js';

const AddDocument = () => {
    return (
        <EditInfoLayout title="Add Document">
            <div className="add-document-form">
                {/* Heading */}
                <div className="heading">
                    <h2>Select document being submitted:</h2>
                </div>

                {/* Form */}
                <form>
                    {/* Radio Buttons */}
                    <div className="radio-group">
                        {[
                            "Business Registration",
                            "TIN",
                            "NIS",
                            "GRA Compliance Letter",
                            "NIS Compliance Letter",
                            "Operational License(s)",
                            "Compliance Standard(s) Certificates",
                            "Owner TIN Certificate",
                            "ID Card(s)",
                        ].map((option, index) => (
                            <label key={index} className="radio-option">
                                <input type="radio" name="document" value={option} />
                                {option}
                            </label>
                        ))}
                    </div>

                    {/* File Upload */}
                    <div className="file-upload">
                        <label htmlFor="upload">Upload Document:</label>
                        <input type="file" id="upload" name="upload" />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-green">
                        Submit
                    </button>
                </form>
            </div>
        </EditInfoLayout>
    );
};

export default AddDocument;
