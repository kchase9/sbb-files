import React from 'react';
import './home.css'; // Include the corresponding CSS file for styling

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to Our Website</h1>
                    <p>Your journey begins here. Explore our offerings and discover what makes us unique.</p>
                    <button className="btn-primary">Learn More</button>
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <h2>About Us</h2>
                <p>
                    We are dedicated to providing the best solutions for your needs. With a focus on quality and innovation,
                    we strive to exceed your expectations every step of the way.
                </p>
            </section>

            {/* Services Section */}
            <section className="services">
                <h2>Our Services</h2>
                <div className="service-cards">
                    <div className="service-card">
                        <h3>Service 1</h3>
                        <p>Brief description of the service offered.</p>
                    </div>
                    <div className="service-card">
                        <h3>Service 2</h3>
                        <p>Brief description of the service offered.</p>
                    </div>
                    <div className="service-card">
                        <h3>Service 3</h3>
                        <p>Brief description of the service offered.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
