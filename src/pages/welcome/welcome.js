import React from 'react';
import './welcome.css';

const Welcome = () => {
    return (
        <div className="page">
            <div className="welcome-title">
                <h1>Work with us.</h1>

                <div className="welcome-forms">
                    {/* Sign In Form */}
                    <div className="welcome-form sign-in">
                        <form className="sign-in">
                            <h2>Sign In.</h2>
                            <input type="email" name="email" placeholder="Email" />
                            <input type="password" name="pword" placeholder="********" />
                            <button type="submit" className="btn-green">Sign In</button>
                        </form>
                    </div>

                    <div className="divider"></div>

                    {/* Sign Up Form */}
                    <div className="welcome-form sign-up">
                        <form className="sign-up">
                            <h2>Sign Up.</h2>

                            {/* First Section */}
                            <input type="email" name="email" placeholder="Email" />
                            <input type="password" name="password" placeholder="Password" />
                            <input type="password" name="reenter-password" placeholder="Reenter Password" />

                            <hr/>

                            {/* Second Section */}
                            <input type="text" name="full-name" placeholder="Full Name" />

                            <input type="date" name="DOB" placeholder="DOB" />

                            <div className="row">
                                
                                <select name="gender">
                                    <option value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                <select name="marital-status">
                                    <option value="">Marital Status</option>
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                    <option value="divorced">Divorced</option>
                                </select>
                            </div>
                            <label>
                                <input type="checkbox" name="differently-abled" />
                                Differently Abled
                            </label>
                            <select name="education">
                                <option value="">Highest Level of Education</option>
                                <option value="high-school">High School</option>
                                <option value="bachelor">Bachelor's Degree</option>
                                <option value="master">Master's Degree</option>
                                <option value="phd">PhD</option>
                            </select>
                            <input type="text" name="id-number" placeholder="ID Number" />
                            <input type="text" name="tin-number" placeholder="TIN Number" />
                            <hr />

                            {/* Third Section */}
                            <input type="tel" name="phone" placeholder="Phone Number" />
                            <input type="text" name="address-line-1" placeholder="Address Line 1" />
                            <input type="text" name="address-line-2" placeholder="Address Line 2" />
                            <input type="text" name="address-line-3" placeholder="Address Line 3" />
                            <select name="region">
                                <option value="">Administrative Region</option>
                                <option value="region-1">Region 1</option>
                                <option value="region-2">Region 2</option>
                                <option value="region-3">Region 3</option>
                                <option value="region-4">Region 4</option>
                                <option value="region-5">Region 5</option>
                                <option value="region-6">Region 6</option>
                                <option value="region-7">Region 7</option>
                                <option value="region-8">Region 8</option>
                                <option value="region-9">Region 9</option>
                                <option value="region-10">Region 10</option>
                            </select>
                            <button type="submit" className="btn-green">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
