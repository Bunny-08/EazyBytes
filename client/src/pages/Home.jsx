import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";
import "./Home.css";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
    const featuredProjects = [
        {
            title: "Project One",
            desc: "Short project description...",
            img: "https://placehold.co/600x400?text=Project+One",
            tech: ["React", "CSS"]
        }
    ];

    const skills = ["React", "JavaScript", "HTML & CSS", "Python",];

    return (
        <>
            <Navbar />

            <div className="wrapper fade-in">

                <section className="home-hero">
                    <h1>Hi, I'm SK BADRUJAMA</h1>
                    <p className="role">Web Developer</p>
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                </section>

                <section className="section">
                    <h2>About Me</h2>
                    <p>
                        I'm a passionate web developer who loves building clean and functional applications.
                        I focus on creating user-friendly experiences using modern technologies
                        like React, HTML,CSS and more.
                    </p>
                </section>

                <section className="section">
                    <h2>Skills</h2>
                    <div className="skills-list">
                        {skills.map((skill, i) => (
                            <span key={i} className="skill-pill">{skill}</span>
                        ))}
                    </div>
                </section>

                <section className="section" id="projects">
                    <h2>Featured Projects</h2>
                    <div className="projects-grid">
                        {featuredProjects.map((p, i) => (
                            <ProjectCard key={i} {...p} />
                        ))}
                    </div>
                    <a href="/projects" className="view-all">See All Projects</a>
                </section>

            </div>

            <Footer />
        </>
    );
}
