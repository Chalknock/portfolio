export default function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* About Content */}
          <div className="col-md-8">
            <h2 className="fw-bold mb-3">About Me</h2>
            <p className="mb-3">
              I'm a passionate software engineer with experience in full-stack
              development, IoT systems, and cloud infrastructure. I thrive on
              building solutions that connect people, devices, and data in
              meaningful ways.
            </p>
            <p className="mb-4">
              Over the years, I’ve developed projects ranging from modern web
              apps to embedded systems. My goal is to deliver technology that
              solves problems, enhances efficiency, and makes an impact.
            </p>

            {/* Tech Stack */}
            <h5 className="fw-bold mb-3">Tech Stack</h5>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge bg-primary">React</span>
              <span className="badge bg-success">Node.js</span>
              <span className="badge bg-warning text-dark">Django</span>
              <span className="badge bg-info text-dark">IoT</span>
              <span className="badge bg-dark">Cloud</span>
              <span className="badge bg-secondary">Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
