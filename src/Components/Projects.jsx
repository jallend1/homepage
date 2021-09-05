import acnhScreen from '../assets/images/acnh.png';
import taskmanScreen from '../assets/images/taskmanScreen.png';
import gitHub from '../assets/images/github.svg';
import '../styles/projects.css';
const Projects = () => {
  const projects = [
    {
      title: 'Animal Crossing Collectible Guide',
      image: acnhScreen,
      description:
        'A little video game thing that I will create a better description of shortly.',
      uses: ['React', 'JSON', 'API'],
      git: 'https://github.com/jallend1/acnhreboot',
      live: 'https://frosty-lamport-4bd235.netlify.app/'
    },
    {
      title: 'TaskMan',
      image: taskmanScreen,
      description: 'A task manager that will have a better description shortly',
      uses: ['React', 'Firebase'],
      git: 'https://github.com/jallend1/taskman',
      live: 'https://epic-bhaskara-890fe0.netlify.app/'
    }
  ];
  return (
    <>
      <h2>Projects</h2>
      <div className='projects'>
        {projects.map((project) => (
          <div className='project' key={project.image}>
            <h3>{project.title}</h3>
            <div>
              <img
                className='projectImage'
                src={project.image}
                alt={`Screenshot of ${project.title}`}
              />
            </div>
            <div className='projectLinks'>
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
