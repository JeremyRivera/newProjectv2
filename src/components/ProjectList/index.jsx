import React from 'react';
import ProjectCard from '../ProjectCard';

const ProjectList = () => {
    const projects = [
        {
            name: "Lavish-Banking - UI React Personal Page",
            url: "https://lavishbanking.netlify.app/",
            github: "https://github.com/JeremyRivera?tab=repositories",
            languages: "ReactJS, CSS, Netlify",
            description: "Lavish is a project simply done for fun to get more accustomed to using React with managing components as well as routing testing."
        },
        {
            name: "Music Player - UI React Personal Page",
            url: "https://viviana-v1.netlify.app/",
            github: "https://github.com/JeremyRivera/musicPlayer",
            languages: "ReactJS, SCSS, Netlify",
            description: "The music player was a project done on down time to mess around with using audio files as well as styling a slider for brushing through music."
        },
        {
            name: "Sidecard - Internal Application",
            url: "",
            github: "https://github.com/jonotann/sidecards",
            languages: "ReactJS, CSS, Firebase, Google Cloud Platform, Adobe XD",
            description: "Sidecard was an internal application used for eliminating the need for business cards throughout the pandemic. This allowed for the company to continue prospecting for clients while strongly reducing the risk of contracting the virus by allowing clients to scan the QR Code on supported devices to redirect to a page to our sales reps."
        },
        {
            name: "Urban Studios Marketplace - Client Project",
            url: "",
            github: "https://github.com/JeremyRivera?tab=stars",
            languages: "ReactJS, NodeJS, ExpressJS, MongoDB, Swift, Kotlin, Figma, SCSS, Adobe XD",
            description: "Within this project, I was one of three developers including both internal and external employees assigned to create a Multi-Store E-Commerce Platform. The focus of the project is to allow small business owners, as well as freelancers to be able to list their products, promote their work networking with other creatives and even accept booking appointments via the application. Urban uses React as it’s primary UI, while having a native wrapper that allows it to be used for inclusion of Native Features such as Biometric login."
        },
        {
            name: "Virtual Reality Conference - Client Project",
            url: "",
            github: "https://github.com/JeremyRivera?tab=stars",
            languages: "C#, Unity, JavaScript, PHP, Blender, Figma, Adobe XD",
            description: "This project was done to fill the gap between in person networking and digital. Using Unity for the client-facing application we allow users to interact amongst each other as well as allowing administrators to have a dashboard to manage events and placing booths programmatically on the platform"
        },
        {
            name: "My Spline Design",
            url: "https://my.spline.design/supremeserver-75a0d66540466fd6f6a4d631b3bfde6a/",
            github: "https://github.com/JeremyRivera?tab=stars",
            languages: "Spline",
            description: "Just a fun 3D server design i made using spline."
        }
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