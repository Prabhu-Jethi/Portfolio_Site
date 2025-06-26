// src/pages/Home.js
import React from "react";


function Home() {
  return (
    <div className="container text-center py-5" data-aos="fade-up">
      <h1 className="display-4 mb-3">Hello, I'm Prabhu Jethi</h1>
      <p className="lead mb-4">
        I’m a full-stack web developer passionate about building modern,
        interactive web apps using the MERN stack.
      </p>
      <a href="/projects" className="btn btn-primary btn-lg">
        View My Projects
      </a>
    </div>
  );
}
export default Home;
