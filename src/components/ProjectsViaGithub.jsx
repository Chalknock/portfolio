import React, { useState, useEffect } from "react";

export default function ProjectsViaGithub() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url =
      "https://api.github.com/users/Chalknock/repos?per_page=100&sort=updated";
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // Optional: filter out forks if you don't want them:
        // const filtered = data.filter((r) => !r.fork);
        const filtered = data.filter(
          (r) => !r.fork && r.name.toLowerCase() !== "chalknock"
        );
        setRepos(filtered);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <section id="projects" className="py-5 bg-light">
        <div className="container text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </section>
    );

  if (error)
    return (
      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <div className="alert alert-danger">
            Failed to load repositories: {error}
          </div>
        </div>
      </section>
    );

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="row g-4">
          {repos.map((repo) => (
            <div className="col-12 col-md-6 col-lg-4" key={repo.id}>
              <div className="card h-100 shadow-sm">
                {repo.homepage ? (
                  <img
                    src={repo.owner ? repo.owner.avatar_url : ""}
                    className="card-img-top img-fluid"
                    alt={repo.name}
                  />
                ) : null}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repo.name}
                    </a>
                  </h5>
                  <p
                    className="card-text text-truncate"
                    style={{ minHeight: "3rem" }}
                  >
                    {repo.description ?? "No description provided."}
                  </p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <small className="text-muted">{repo.language ?? "—"}</small>
                    <div>
                      <small className="me-3">★ {repo.stargazers_count}</small>
                      <small className="text-muted">
                        Updated {new Date(repo.updated_at).toLocaleDateString()}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {repos.length === 0 && (
            <div className="col-12">
              <div className="alert alert-info">No repositories found.</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
