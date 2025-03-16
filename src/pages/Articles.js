import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Articles = () => {
    const articles = [
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
        <div className="articles">
            <h1>My Articles</h1>
            <div className="articles-list">
                {articles.map((article, index) => (
                    <ProjectCard
                        key={index}
                        title={article.title}
                        description={article.description}
                        link={article.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Articles;