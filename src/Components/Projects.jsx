import '../styles/projects.css';
import acnhScreen from '../assets/images/acnh.png';
import taskmanScreen from '../assets/images/taskmanScreen.png';

const Projects = () => {
  const projects = [
    {
      title: 'Animal Crossing: New Horizons Creature and Collectible Guide',
      image: acnhScreen,
      description:
        "Explore the art, fossils and villagers of the Animal Crossing world, as well as keep a running list of which fish, birds, and bugs you have added to your collection. Missing from your collection? Scope out the details to see when it's available.",
      uses: ['React', 'JSON', 'API', 'Materialize', 'Netlify'],
      git: 'https://github.com/jallend1/acnhreboot',
      live: 'https://frosty-lamport-4bd235.netlify.app/'
    },
    {
      title: 'TaskMan 3.0',
      image: taskmanScreen,
      description:
        'TaskMan is a project management web app that allows for multiple to-do lists to be created outlining the individual steps needed to complete each project. The very next action from each of these projects is also extracted and centralized on the homepage to help facilitate meaningful progress towards completion of all projects.',
      uses: [
        'React',
        'Firebase',
        'Firebase Authenticator',
        'Material-UI',
        'Netlify'
      ],
      git: 'https://github.com/jallend1/taskman',
      live: 'https://epic-bhaskara-890fe0.netlify.app/'
    }
  ];
  return (
    <>
      <div className='projectPage'>
        <div className='pageTitle'>
          <h2>Some Things I've Built</h2>
        </div>
        <div className='projects'>
          {projects.map((project) => (
            <div className='project' key={project.image}>
              <header>
                <div className='projectLinks'>
                  <div className='svg'>
                    <a href={project.git} target='_blank' rel='noreferrer'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                      >
                        <g data-name='Layer 2'>
                          <rect width='24' height='24' opacity='0' />
                          <path d='M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z' />
                        </g>
                      </svg>
                    </a>
                  </div>
                  {project.live ? (
                    <div className='svg'>
                      <a href={project.live} target='_blank' rel='noreferrer'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                        >
                          <g>
                            <path d='m18.5 23h-15c-1.378 0-2.5-1.122-2.5-2.5v-15c0-1.378 1.122-2.5 2.5-2.5h9c.276 0 .5.224.5.5s-.224.5-.5.5h-9c-.827 0-1.5.673-1.5 1.5v15c0 .827.673 1.5 1.5 1.5h15c.827 0 1.5-.673 1.5-1.5v-9c0-.276.224-.5.5-.5s.5.224.5.5v9c0 1.378-1.122 2.5-2.5 2.5z' />
                          </g>
                          <g>
                            <path d='m22.5 9c-.276 0-.5-.224-.5-.5v-6.5h-6.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h7c.276 0 .5.224.5.5v7c0 .276-.224.5-.5.5z' />
                          </g>
                          <g>
                            <path d='m10.5 14c-.128 0-.256-.049-.354-.146-.195-.195-.195-.512 0-.707l12-12c.195-.195.512-.195.707 0s.195.512 0 .707l-12 12c-.097.097-.225.146-.353.146z' />
                          </g>
                        </svg>
                      </a>
                    </div>
                  ) : null}
                </div>
                <h3>{project.title}</h3>
              </header>
              <div className='mainContent'>
                <p className='description'>{project.description}</p>
              </div>
              <footer>
                {project.uses.map((used) => (
                  <div key={used}>{used}</div>
                ))}
              </footer>
              {/* <div>
              <img
                className='projectImage'
                src={project.image}
                alt={`Screenshot of ${project.title}`}
              />
            </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
