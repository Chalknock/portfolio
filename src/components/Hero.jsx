export default function Hero() {
  return (
    <section
      id="keith"
      className="d-flex align-items-center bg-light"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      <div className="container text-center text-md-start">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-md-7">
            <h1 className="display-4 fw-bold">
              Hi, I'm <span className="text-primary">Keith</span>
            </h1>
            <p className="lead mb-4">
              Turning ideas into scalable software, smart IoT solutions, and
              cloud-powered applications.
            </p>
            <div>
              <a href="#projects" className="btn btn-primary btn-lg me-3">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline-primary btn-lg">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-5 text-center">
            <img
              src="/images/KEITH_01_3.jpg"
              alt="Profile"
              className="img-fluid rounded-circle shadow"
              style={{
                width: "280px",
                height: "280px",
                objectFit: "cover",
                border: "5px solid white",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
