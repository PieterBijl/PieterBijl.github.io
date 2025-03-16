import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'Description of Project One',
            link: '#'
        },
        {
            title: 'Project Two',
            description: 'Description of Project Two',
            link: '#'
        },
        {
            title: 'Project Three',
            description: 'Description of Project Three',
            link: '#'
        }
    ];

    return (
        <div className="projects">
            <h1>My Projects</h1>
            <div className="project-list">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        title={project.title} 
                        description={project.description} 
                        link={project.link} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;