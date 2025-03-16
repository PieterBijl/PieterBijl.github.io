import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <div className="banner-content">
                    <h1>Engineering & Data Science Portfolio</h1>
                    <p>Transforming Data into Insights, Ideas into Solutions</p>
                </div>
            </div>
            
            <main>
                <section className="intro-section">
                    <h2>Welcome to My Portfolio</h2>
                    <p>I specialize in combining engineering principles with data science to solve complex problems. 
                       My work spans across machine learning, data analysis, and software development.</p>
                </section>

                <section className="skills-section">
                    <div className="skill-category">
                        <h3>Data Science</h3>
                        <ul>
                            <li>Machine Learning</li>
                            <li>Data Analysis</li>
                            <li>Python & R</li>
                            <li>Statistical Modeling</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3>Engineering</h3>
                        <ul>
                            <li>Software Development</li>
                            <li>System Design</li>
                            <li>Problem Solving</li>
                            <li>Technical Architecture</li>
                        </ul>
                    </div>
                </section>

                <div className="cta-buttons">
                    <Link to="/projects" className="cta-button">View Projects</Link>
                    <Link to="/about" className="cta-button">About Me</Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;