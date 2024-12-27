import React from 'react';
import './welcome.css';

const Welcome = () => {
    return (
        <div className="page">
            <div className='welcome-title'>
                <h1>Work with us.</h1>

                <div className='welcome-forms'>
                    <div className='welcome-form sign-in'>
                        <form className='sign-in'>
                            <h2>Sign In.</h2>

                            <input type='email' name='email' placeholder='Email'></input>
                            <input type='password' name='pword' placeholder='********'></input>

                            <button type='submit'>Sign In</button>
                        </form>
                    </div>
                    {/* Add Some Sort of vertical Line here */}
                    <div className='welcome-form sign-up'></div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
