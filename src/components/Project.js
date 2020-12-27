import React, {useEffect, useState} from "react";

import sanityClient from "../client.js";

export default function Project() {

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch((e)=>console.log(e));
    }, []);



    return (
        <main className="min-h-screen "> 
        <img src="https://bbetanco-portfolio-bucket.s3.amazonaws.com/unsplash.jpg" alt="Rocky Mountains" className="bg-repeat absolute object-cover w-full h-full" />
            <section className="container mx-auto">
                {/* Page Title */}
                <h1 className="text-5xl flex justify-center cursive"> My Projects </h1>
                {/* Subtitle */}
                <h2 className="text-lg text-gray-600 flex justify-center mb-12"> Welcome to my projects page.</h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                    <article className="bg-gray-900 bg-opacity-50 relative rounded-lg shadow-xl p-2">
                        {/* Project Title with clickable link to parameteres from Sanity studio */}
                        <h3 className="text-gray-50 text-3xl font-bold mb-2 hover:text-red-700">
                            <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer"> {project.title}</a>
                        </h3>
                        <div className="text-gray-50 text-xs space-x-4">
                            {/* Project Information */}
                            <span>
                                <strong className="font-bold">Finished on</strong> : {" "} {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                {/* <strong className="font-bold">Company </strong> : {" "} {project.place} */}
                            </span>
                            <span>
                                <strong className="font-bold">Type </strong>: {" "} {project.type}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-50 leading-relaxed">{project.description}</p>
                            <a href={project.link} rel="noopener noreferrer" target="_blank"
                            className="text-gray-50 justify-center font-bold hover:underline hover:text-red-400 text-xl"> View the Project
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}