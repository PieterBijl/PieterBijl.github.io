import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <main>
                <h1>Welcome to My Portfolio</h1>
                <p>This is the home page where you can find information about my projects and skills.</p>
                <div className="nav-links">
                    <Link to="/projects" className="nav-button">View My Projects</Link>
                    <Link to="/about" className="nav-button">Learn More About Me</Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;