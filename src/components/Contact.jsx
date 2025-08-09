export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4">Get in Touch</h2>
        <p className="mb-4">Connect with me through my social profiles.</p>

        {/* Social Links */}
        <div className="d-flex justify-content-center gap-4 fs-3">
          <a
            href="mailto:katumaneng24@gmail.com"
            className="text-dark"
            aria-label="Email"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/keithangelotumaneng"
            target="_blank"
            rel="noreferrer"
            className="text-primary"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/Chalknock"
            target="_blank"
            rel="noreferrer"
            className="text-dark"
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
