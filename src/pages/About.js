// src/pages/About.js
import React from "react";


function About() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">About Me</h2>
      <div className="row">
        <div className="col-md-4 text-center mb-4" data-aos="zoom-in">
          <img
            src="/Dev-Illustration-img.png"
            alt="Prabhu Jethi"
            className="img-fluid rounded-circle shadow w-75"
          />
        </div>
        <div className="col-md-8" data-aos="fade-left">
          <p>
            Hi! I’m Prabhu Jethi, a self-taught web developer focused on
            building fast, responsive, and user-friendly web applications.
          </p>
          <p>
            I specialize in the MERN stack:{" "}
            <strong>MongoDB, Express, React, and Node.js</strong>. I enjoy
            solving real-world problems with clean code and modern tools.
          </p>
          <p>
            Besides coding, I love learning new technologies, exploring APIs,
            and continuously improving my craft.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
