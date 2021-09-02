import acnhScreen from "../assets/images/acnh.png";
import taskmanScreen from "../assets/images/taskmanScreen.png";
import "../styles/projects.css";
const Projects = () => {
  const projects = [
    {
      title: "Animal Crossing Collectible Guide",
      image: acnhScreen,
      git: "https://github.com/jallend1/acnhreboot",
      live: "https://frosty-lamport-4bd235.netlify.app/",
    },
    {
      title: "TaskMan",
      image: taskmanScreen,
      git: "https://github.com/jallend1/taskman",
      live: "https://epic-bhaskara-890fe0.netlify.app/",
    },
  ];
  return (
    <>
      <h2>Projects</h2>
      <div className="project">
        {projects.map((project) => (
          <div>
            <h3>{project.title}</h3>
            <div>
              <img
                className="projectImage"
                src={project.image}
                alt={`Screenshot of ${project.title}`}
              />
            </div>
            <div>
              <p>
                View Code on <a href={project.git}>Github</a>
              </p>
              {project.live ? (
                <p>
                  View <a href={project.live}>Live Site</a>
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
