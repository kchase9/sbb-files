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


        </div>
    );
};

export default Home;
