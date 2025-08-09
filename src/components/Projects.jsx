// src/data/featuredProjects.js
export const featuredProjects = [
  {
    name: "Post-Earthquake Building Inspection App",
    description:
      "Flutter-based mobile app for rapid post-disaster structural assessments.",
    link: "https://github.com/Chalknock/resilientscan",
  },
  {
    name: "Renewable Energy Inventory System",
    description:
      "React + GIS app for managing renewable energy infrastructure.",
    link: "https://github.com/Chalknock/tremor-track",
  },
  {
    name: "Expense Tracker",
    description:
      "Full-stack app for logging and visualizing personal expenses.",
    link: "https://github.com/Chalknock/ExpenseTracker",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Featured Projects</h2>
        <div className="row g-4">
          {featuredProjects.map((project, idx) => (
            <div className="col-12 col-md-6 col-lg-4" key={idx}>
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    {/* <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    > */}
                    {project.name}
                    {/* </a> */}
                  </h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
