import "./ProjectCard.css";

export default function ProjectCard({ title, desc, img, tech }) {
  return (
    <div className="project-card">
      {img && <img src={img} alt={title} className="project-img" />}

      <div className="project-info">
        <h3>{title}</h3>
        <p>{desc}</p>

        <div className="project-tags">
          {(tech || []).map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>

        <div className="project-actions">
          <a href="#" className="btn-outline">Demo</a>
          <a href="#" className="btn-solid">Code</a>
        </div>
      </div>
    </div>
  );
}
