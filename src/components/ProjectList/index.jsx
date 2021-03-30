import React from 'react';
import ProjectCard from '../ProjectCard';

const ProjectList = () => {
    const projects = [
        {
            name: "Music Player - UI React Personal Page",
            url: "https://viviana-v1.netlify.app/",
            github: "https://github.com/JeremyRivera/musicPlayer",
            languages: "ReactJS, SCSS, Netlify",
            description: "The music player was a project done on my free time for fun to mess around with using audio files as well as styling a slider for brushing through music."
        },
        {
            name: "GamerBase - UI React Personal Page",
            url: "https://gamerbase-cc8c3.web.app/",
            github: "https://github.com/JeremyRivera/GameAPI-Redux-thunk-axios",
            languages: "ReactJS, SCSS, FireBase, Redux",
            description: "GamerBase is hitting rawg.io api to get all of the games data."
        },
        {
            name: "Sidecard - Internal Application",
            url: "",
            github: "https://github.com/jonotann/sidecards",
            languages: "ReactJS, CSS, Firebase, Google Cloud Platform, Adobe XD",
            description: "Sidecard was an internal application used for eliminating the need for business cards throughout the pandemic."
        },
        {
            name: "Urban Studios Marketplace - Client Project",
            url: "",
            github: "https://github.com/JeremyRivera?tab=stars",
            languages: "ReactJS, NodeJS, ExpressJS, MongoDB, Swift, Kotlin, Figma, SCSS, Adobe XD",
            description: "Software allows users to list their products, promote, networking and even accept booking appointments via the application."
        },
        {
            name: "Virtual Reality Conference - Client Project",
            url: "",
            github: "https://github.com/JeremyRivera?tab=stars",
            languages: "C#, Unity, JavaScript, PHP, Blender, Figma, Adobe XD",
            description: "This project was done to fill the gap between in person networking and digital.",
        },
        {
            name: "My Spline Design",
            url: "https://my.spline.design/supremeserver-75a0d66540466fd6f6a4d631b3bfde6a/",
            github: "https://github.com/JeremyRivera?tab=stars",
            languages: "Spline",
            description: "3D Tool for Designers, made a 3D object hit the link to check it out!"
        },
        {
            name: "Name it",
            url: "https://jeremyrivera.github.io/Nameit/",
            github: "https://github.com/JeremyRivera/Nameit",
            languages: "ReactJS, CSS github-pages",
            description: "Name it provides the user with a unique domain name based on randomly generated keywords. Then Redirects the user once the name is selected to check if that domain name is available for purchase!"
        }
    ]
    return (
        <div className="py-3 d-flex flex-column justify-content-center align-items-center align-content-center">
            <h2 style={{ color: "white" }}>What I've worked on...</h2>
            <div className="container">
                <div className="row justify-content-center">{
                    projects.map((project, i) => (
                        <ProjectCard key={i} url={project.url} name={project.name} github={project.github} description={project.description} languages={project.languages} />
                    ))
                }</div>
            </div>
        </div>
    );
};

export default ProjectList;