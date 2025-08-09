const techStack = {
  "Languages & Frameworks": [
    "Python",
    "Django",
    "JavaScript",
    "React.js",
    "Node.js",
    "Flutter",
    "Dart",
    "C/C++",
  ],
  "Platforms & Tools": [
    "Git",
    "MySQL",
    "MongoDB",
    "Firebase",
    "Raspberry Pi",
    "ESP32",
    "Node-RED",
    "Leaflet",
  ],
  "DevOps & Hosting": [
    "Linux",
    "AWS",
    "Nginx",
    "Docker",
    "Tailscale",
    "Cloudflare Tunnel",
    "GCP",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-5">
      <div className="container">
        <h2 className="text-center mb-5">Tech Stack</h2>
        {Object.entries(techStack).map(([category, skills]) => (
          <div key={category} className="mb-5">
            <h5 className="mb-3 text-primary">{category}</h5>
            <div className="row g-3">
              {skills.map((skill, idx) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
                  <div className="border rounded text-center p-3 h-100 bg-light">
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
