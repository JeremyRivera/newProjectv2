import React from 'react';
import ProjectCard from '../ProjectCard';

const ProjectList = () => {
    const projects = [
        {
            name: "Lavish-Banking",
            url: "https://lavishbanking.netlify.app/",
            github: "https://github.com/JeremyRivera?tab=repositories",
            languages: "React.js",
            description: "Made entire banking page to show front-end skills and made it mobile responsive."
        },
        {
            name: "Custom Music Player",
            url: "https://viviana-v1.netlify.app/",
            github: "https://github.com/JeremyRivera/musicPlayer",
            languages: "React.js",
            description: "Made a custom music player with javascript and scss to play some of my favorite lo-fi."
        },
        {
            name: "sideCard",
            url: "",
            github: "https://github.com/jonotann/sidecards",
            languages: "React.js",
            description: "Made an alternative to Buisness cards!"
        },
        {
            name: "UrbanVibez",
            url: "",
            github: "https://github.com/JeremyRivera?tab=stars",
            languages: "React.js",
            description: "Working with 3 other developers to roll out an app for a client that has features such as booksy,linkedin and a full e-commerce store."
        },
        {
            name: "Virtual Realilty Confrence",
            url: "",
            github: "https://github.com/JeremyRivera?tab=stars",
            languages: "C# , Unity , blender",
            description: "Got contracted out to make a virtual realilty confrence with 2 other developers."
        },
    ]
    return (
        <div className="py-3 d-flex flex-column justify-content-center align-items-center align-content-center">
            <h2 style={{ color: "white" }}>What I've worked on...</h2>
            <div className="container">
                <div className="row justify-content-center">{
                    projects.map((project, index) => (
                        <ProjectCard key={index} url={project.url} name={project.name} github={project.github} description={project.description} languages={project.languages} />
                    ))
                }</div>
            </div>
        </div>
    );
};

export default ProjectList;