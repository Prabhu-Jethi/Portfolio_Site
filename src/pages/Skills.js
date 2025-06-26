// src/pages/Skills.js
function Skills() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Skills</h2>
      <div className="row text-center">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Node.js",
          "MongoDB",
          "Express",
          "JSON",
        ].map((skill) => (
          <div key={skill} className="col-md-3 mb-3">
            <div className="border rounded py-3 bg-dark text-white">
              {skill}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Skills;
