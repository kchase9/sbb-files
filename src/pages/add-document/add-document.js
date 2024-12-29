// // import React from 'react';
// // import './add-document.css';
// // import EditInfoLayout from '../../templates/edit-info-layout/edit-info-layout.js';

// // const AddDocument = () => {
// //     return (
// //         <EditInfoLayout title="Add Document">
// //             <div className="add-document-form">
// //                 {/* Heading */}
// //                 <div className="heading">
// //                     <h2>Select document being submitted:</h2>
// //                 </div>

// //                 {/* Form */}
// //                 <form>
// //                     {/* Radio Buttons */}
// //                     <div className="radio-group">
// //                         {[
// //                             "Business Registration",
// //                             "TIN",
// //                             "NIS",
// //                             "GRA Compliance Letter",
// //                             "NIS Compliance Letter",
// //                             "Operational License(s)",
// //                             "Compliance Standard(s) Certificates",
// //                             "Owner TIN Certificate",
// //                             "ID Card(s)",
// //                         ].map((option, index) => (
// //                             <label key={index} className="radio-option">
// //                                 <input type="radio" name="document" value={option} />
// //                                 {option}
// //                             </label>
// //                         ))}
// //                     </div>

// //                     {/* File Upload */}
// //                     <div className="file-upload">
// //                         <label htmlFor="upload">Upload Document:</label>
// //                         <input type="file" id="upload" name="upload" />
// //                     </div>

// //                     {/* Submit Button */}
// //                     <button type="submit" className="btn btn-green">
// //                         Submit
// //                     </button>
// //                 </form>
// //             </div>
// //         </EditInfoLayout>
// //     );
// // };

// // export default AddDocument;


// import React, { useState, useEffect } from 'react';
// import './add-document.css';
// import EditInfoLayout from '../../templates/edit-info-layout/edit-info-layout.js';

// const AddDocument = () => {
//     const [documentType, setDocumentType] = useState('');
//     const [file, setFile] = useState(null);
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');
//     const [userId, setUserId] = useState(null);

//     // Extract user ID from token when component mounts
//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             try {
//                 // Decode the JWT token (format: header.payload.signature)
//                 const payload = JSON.parse(atob(token.split('.')[1]));
//                 setUserId(payload.userId);
//             } catch (err) {
//                 console.error('Error decoding token:', err);
//                 setError('Authentication error. Please log in again.');
//             }
//         } else {
//             setError('Please log in to upload documents.');
//         }
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!userId) {
//             setError('Please log in to upload documents.');
//             return;
//         }

//         if (!documentType) {
//             setError('Please select a document type.');
//             return;
//         }

//         if (!file) {
//             setError('Please upload a file.');
//             return;
//         }

//         setError('');
//         setSuccess('');

//         const formData = new FormData();
//         formData.append('documentType', documentType);
//         formData.append('file', file);
//         formData.append('userId', userId);

//         try {
//             const response = await fetch('http://localhost:5000/api/document-store/upload', {
//                 method: 'POST',
//                 headers: {
//                     'Authorization': `Bearer ${localStorage.getItem('token')}`,
//                 },
//                 body: formData,
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 throw new Error(errorData.error || 'Failed to upload document.');
//             }

//             const result = await response.json();
//             setSuccess('Document uploaded successfully.');
            
//             // Reset form
//             setDocumentType('');
//             setFile(null);
//             // Reset the file input
//             const fileInput = document.querySelector('input[type="file"]');
//             if (fileInput) {
//                 fileInput.value = '';
//             }
//         } catch (err) {
//             console.error('Error uploading document:', err);
//             setError(err.message || 'Failed to upload document.');
//         }
//     };

//     return (
//         <EditInfoLayout title="Add Document">
//             <div className="add-document-form">
//                 <div className="heading">
//                     <h2>Select document being submitted:</h2>
//                 </div>

//                 <form onSubmit={handleSubmit}>
//                     <div className="radio-group">
//                         {[
//                             'Business Registration',
//                             'TIN',
//                             'NIS',
//                             'GRA Compliance Letter',
//                             'NIS Compliance Letter',
//                             'Operational License(s)',
//                             'Compliance Standard(s) Certificates',
//                             'Owner TIN Certificate',
//                             'ID Card(s)',
//                         ].map((option, index) => (
//                             <label key={index} className="radio-option">
//                                 <input
//                                     type="radio"
//                                     name="documentType"
//                                     value={option}
//                                     checked={documentType === option}
//                                     onChange={(e) => setDocumentType(e.target.value)}
//                                 />
//                                 {option}
//                             </label>
//                         ))}
//                     </div>

//                     <div className="file-upload">
//                         <label htmlFor="upload">Upload Document:</label>
//                         <input
//                             type="file"
//                             id="upload"
//                             name="upload"
//                             onChange={(e) => setFile(e.target.files[0])}
//                             accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
//                         />
//                     </div>

//                     {error && <div className="error-message">{error}</div>}
//                     {success && <div className="success-message">{success}</div>}

//                     <div className='btn-container'>
//                         <a href='/home' className='btn btn-gray'>Home</a>
//                         <button 
//                             type="submit" 
//                             className="btn btn-green"
//                             disabled={!userId}
//                         >
//                             Submit
//                         </button>
//                     </div>

                    
//                 </form>
//             </div>
//         </EditInfoLayout>
//     );
// };

// export default AddDocument;

import React, { useState, useEffect } from 'react';
import './add-document.css';
import EditInfoLayout from '../../templates/edit-info-layout/edit-info-layout.js';

const AddDocument = () => {
    const [documentType, setDocumentType] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(false);

    // Extract user ID from token and initialize documents record
    useEffect(() => {
        const initializeUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    // Decode the JWT token
                    const payload = JSON.parse(atob(token.split('.')[1]));
                    const userId = payload.userId;
                    setUserId(userId);

                    // Initialize documents record if it doesn't exist
                    const initResponse = await fetch(`http://localhost:5000/api/documents/initialize/${userId}`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        }
                    });

                    if (!initResponse.ok) {
                        console.error('Failed to initialize documents record');
                    }
                } catch (err) {
                    console.error('Error in initialization:', err);
                    setError('Authentication error. Please log in again.');
                }
            } else {
                setError('Please log in to upload documents.');
            }
        };

        initializeUser();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userId) {
            setError('Please log in to upload documents.');
            return;
        }

        if (!documentType) {
            setError('Please select a document type.');
            return;
        }

        if (!file) {
            setError('Please upload a file.');
            return;
        }

        setError('');
        setSuccess('');
        setLoading(true);

        const formData = new FormData();
        formData.append('documentType', documentType);
        formData.append('file', file);
        formData.append('userId', userId);

        try {
            const response = await fetch('http://localhost:5000/api/document-store/upload', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to upload document.');
            }

            const result = await response.json();
            setSuccess('Document uploaded successfully.');
            
            // Reset form
            setDocumentType('');
            setFile(null);
            const fileInput = document.querySelector('input[type="file"]');
            if (fileInput) {
                fileInput.value = '';
            }
        } catch (err) {
            console.error('Error uploading document:', err);
            setError(err.message || 'Failed to upload document.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <EditInfoLayout title="Add Document">
            <div className="add-document-form">
                <div className="heading">
                    <h2>Select document being submitted:</h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="radio-group">
                        {[
                            'Business Registration',
                            'TIN',
                            'NIS',
                            'GRA Compliance Letter',
                            'NIS Compliance Letter',
                            'Operational License(s)',
                            'Compliance Standard(s) Certificates',
                            'Owner TIN Certificate',
                            'ID Card(s)',
                        ].map((option, index) => (
                            <label key={index} className="radio-option">
                                <input
                                    type="radio"
                                    name="documentType"
                                    value={option}
                                    checked={documentType === option}
                                    onChange={(e) => setDocumentType(e.target.value)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>

                    <div className="file-upload">
                        <label htmlFor="upload">Upload Document:</label>
                        <input
                            type="file"
                            id="upload"
                            name="upload"
                            onChange={(e) => setFile(e.target.files[0])}
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}
                    {success && <div className="success-message">{success}</div>}

                    <div className='btn-container'>
                        <a href='/home' className='btn btn-gray'>Home</a>
                        <button 
                            type="submit" 
                            className="btn btn-green"
                            disabled={!userId || loading}
                        >
                            {loading ? 'Uploading...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </EditInfoLayout>
    );
};

export default AddDocument;