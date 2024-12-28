import React from 'react';
import "./view-list-layout.css"

// We may need to put someething that's hidden to show what table we're searching from
const ViewListLayout = ({title, children}) =>{
    return (
        <div className='page'>
            <div className="view-list-layout">
                <div className='heading'>
                    <h1>{title}</h1>
                </div>

                {/* Searchbar Section */}
                <div className='searchbar-container'>
                    <form className='row'>
                        <div className='searchbar-fields'>
                            <input 
                                type="text" 
                                placeholder="Search..." 
                                className="search-input orange-border"
                            />
                            <select className="status-dropdown orange-border">
                                <option value="">Approval Status</option>
                                <option value="approved">Approved</option>
                                <option value="pending">Pending</option>
                                <option value="rejected">Rejected</option>
                            </select>
                        </div>
                        <div className='searchbar-button'>
                            <button className="btn btn-green">Search</button>
                        </div>
                    </form>

                    {/* This is a form. Handle later */}
                    
                    
                </div>

                <div className='list list-container'>
                    {children}
                </div>
            </div>

            
        </div>
    );
};

export default ViewListLayout;
