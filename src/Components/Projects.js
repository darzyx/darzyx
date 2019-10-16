import React from "react";
import { ProjectsData } from "../Data";
import LazyLoad from "react-lazyload";

const Projects = () => (
  <section className="projects" id="projects">
    <h2 id="projects-heading" className="heading">
      Projects
      <LazyLoad height={15} once>
        <hr className="divider" />
      </LazyLoad>
    </h2>
    <main className="grid">
      {ProjectsData.map((project, key) => (
        <article key={key}>
          <LazyLoad height={200} once>
            <img src={project.image} alt={project.name + " image"} />{" "}
          </LazyLoad>
          <div className="text">
            <h4 className="name">{project.name}</h4>
            <p className="description">{project.description}</p>
            <br />
            <p className="tools">
              Tools:
              {project.tools.map((tool, key) => (
                <span key={key}>
                  {!!key && ", "}
                  <a
                    className="tool"
                    href={tool.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {" "}
                    {tool.name}
                  </a>
                </span>
              ))}
            </p>
            <div className="buttons">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button name="demo">Demo</button>
                </a>
              )}
              {project.sourceLink && (
                <a
                  href={project.sourceLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button name="source">Source</button>
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </main>
    <div className="triangle"></div>
  </section>
);

export default Projects;
