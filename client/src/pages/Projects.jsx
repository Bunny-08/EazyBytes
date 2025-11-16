import "./Projects.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "React Weather App",
      desc: "Real-time weather dashboard using OpenWeather API.",
      img: "https://via.placeholder.com/600x400",
      tech: ["React", "CSS", "API"],
    },
    {
      id: 2,
      title: "Portfolio Generator CMS",
      desc: "Dynamic portfolio editor with admin dashboard.",
      img: "https://via.placeholder.com/600x400",
      tech: ["Node.js", "MongoDB", "React"],
    },
    {
      id: 3,
      title: "Task Manager App",
      desc: "Full-stack task manager with JWT authentication.",
      img: "https://via.placeholder.com/600x400",
      tech: ["MERN", "JWT"],
    },
  ];

  return (
    <>
      <Navbar />

      <section className="projects-page wrapper">
        <h1>My Projects</h1>

        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
