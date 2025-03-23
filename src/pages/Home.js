import React, { useState, useEffect, useCallback } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import './Home.css';

const Home = () => {
    const [showNav, setShowNav] = useState(false);
    const [init, setInit] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > window.innerHeight * 0.5;
            setShowNav(show);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Initialize the particles engine
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log("Particles loaded in home", container);
    }, []);

    return (
        <div className="home-container">
            <div className="hero-section">
                {init && (
                    <div className="particles-container">
                        <Particles
                            id="tsparticles"
                            particlesLoaded={particlesLoaded}
                            options={{
                                fullScreen: false,
                                background: {
                                    color: {
                                        value: "transparent",
                                    },
                                },
                                fpsLimit: 120,
                                particles: {
                                    color: {
                                        value: "#ffffff",
                                    },
                                    links: {
                                        color: "#ffffff",
                                        distance: 150,
                                        enable: true,
                                        opacity: 0.4,
                                        width: 1.5,
                                        blur: false,
                                    },
                                    move: {
                                        direction: "none",
                                        enable: true,
                                        outModes: {
                                            default: "out",
                                        },
                                        random: true,
                                        speed: 1,
                                        straight: false,
                                    },
                                    number: {
                                        density: {
                                            enable: true,
                                            area: 800,
                                        },
                                        value: 200,
                                    },
                                    opacity: {
                                        value: 0.2,
                                        animation: {
                                            enable: true,
                                            speed: 0.5,
                                            minimumValue: 0.3,
                                            sync: false
                                        }
                                    },
                                    shape: {
                                        type: "circle",
                                    },
                                    size: {
                                        value: { min: 1.5, max: 4 },
                                        random: true,
                                    },
                                },
                                interactivity: {
                                    events: {
                                        onHover: {
                                            enable: false,
                                        },
                                        onClick: {
                                            enable: false,
                                        },
                                        resize: true,
                                    },
                                    modes: {
                                        push: {
                                            quantity: 4,
                                        },
                                    },
                                },
                                detectRetina: true,
                            }}
                        />
                        <div className="blur-layer"></div>
                    </div>
                )}
                <div className="interactive-bg"></div>
                <div className="hero-content">
                    <h1>Hello, I'm <span className="highlight">Pieter</span>.</h1>
                    <h2>Aerospace Engineer and Data Scientist.</h2>
                    <Link to="/projects" className="cta-button">
                        View my work ↓
                    </Link>
                </div>
            </div>

            <nav className={`floating-nav ${showNav ? 'visible' : ''}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>

            <div className="content-section">
                <section className="about-preview">
                    <h2>About Me</h2>
                    <p>Originally an Aerospace Engineer, I've transitioned into a Data Scientist. 
                        I'm passionate about using data to solve complex problems and make data-driven decisions.
                    </p>
                </section>

                <section className="skills-preview">
                    <h2>Technical Skills</h2>
                    <div className="skill-cards">
                        <div className="skill-card">
                            <h3>Data Science</h3>
                            <ul>
                                <li>Python</li>
                                <li>Machine Learning</li>
                                <li>Data Analysis</li>
                                <li>Statistics</li>
                            </ul>
                        </div>
                        <div className="skill-card">
                            <h3>Engineering</h3>
                            <ul>
                                <li>MATLAB</li>
                                <li>System Design</li>
                                <li>Problem Solving</li>
                                <li>Research</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Home;