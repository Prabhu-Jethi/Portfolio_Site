import React, { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => {
        console.log("Fetched projects:", res.data); // Debug
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-center my-4">My Projects</h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : projects.length === 0 ? (
        <p className="text-center text-muted">No projects found.</p>
      ) : (
        <div className="row">
          {projects.map((project) => (
            <div key={project._id} className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p>
                    <strong>Technologies:</strong>{" "}
                    {project.tech && project.tech.join(", ")}
                  </p>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-outline-dark me-2 btn-light"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
