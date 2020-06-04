import React from 'react';
import Projects from "./projects";

export default function Portfolio() {

    const projectList = Projects.map((projects) => {
      
        return (

            <div class="col mb-4 newCard">
                <div className="card mycard h-100">
                    <img
                        type="button"
                        class="card-img-top"
                        data-toggle="modal"
                        data-target={"#" + projects.projectId}
                        src={projects.image}
                        alt="..."/>
                        
                    <div className="card-body">
                        <h5
                            type="button"
                            className="card-title"
                            data-toggle="modal"
                            data-target={"#" + projects.projectId}>{projects.title}</h5>
                            
                        <p className="card-text">{projects.description.substring(0, 100) + "..."}</p>
                    </div>
                </div>
            </div>

        );
    });
    const projectModal = Projects.map((projects) => {
        return (
            <div
                class="modal fade"
                id={projects.projectId}
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{projects.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {projects.description}
                        </div>
                        <div class="modal-footer">
                            <a href={projects.code} target="_blank">
                                <button type="button" class="btn btn-secondary">Source Code</button>
                            </a>
                            <a href={projects.preview} target="_blank">
                                <button type="button" class="btn btn-primary">Live Preview</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <section id="Portfolio">
            <div className="portContainer container">
                <h1 className="porfolio-info">Portfolio</h1>
                <p className="info">Click on the image to see the project description.</p>
            </div>

            {/* CONTENT */}
            <div class="row row-cols-1 row-cols-lg-3 row-cols-md-2">
                {projectList}
            </div>

            {/* modal */}
            {projectModal}

            <div className="seeAll">
                <button type="button" class="btn btn-dark">See All ...</button>
            </div>

        </section>
    );
}