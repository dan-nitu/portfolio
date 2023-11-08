import countriesApp from './../../assets/images/personal-projects/countries-app.PNG';
import weatherApp from './../../assets/images/personal-projects/weather-app.PNG';
import spaceTourismWebsite from './../../assets/images/personal-projects/space-tourism-website.PNG';
import rockPaperScissors from './../../assets/images/personal-projects/rock-paper-scissors.PNG';

const PersonalProjects = (props) => {
  const { isActive } = props;

  const projects = [
    {
      id: 1,
      title: 'Countries APP',
      technology: 'react',
      screenshot: countriesApp,
      demo: 'https://dn-react-countries-app.vercel.app/',
      github: 'https://github.com/dan-nitu/countries-app-react',
    },
    {
      id: 2,
      title: 'Weather APP',
      technology: 'react',
      screenshot: weatherApp,
      demo: 'https://dn-react-weather-app.vercel.app/',
      github: 'https://github.com/dan-nitu/weather-app-react',
    },
    {
      id: 3,
      title: 'Space Tourism Website',
      technology: 'html',
      screenshot: spaceTourismWebsite,
      demo: 'https://dn-space-tourism-website.vercel.app/',
      github: 'https://github.com/dan-nitu/space-tourism-website/tree/main',
    },
    {
      id: 4,
      title: 'Rock Paper Scissors',
      technology: 'javascript',
      screenshot: rockPaperScissors,
      demo: 'https://dn-js-rock-paper-scissors.vercel.app/',
      github: 'https://github.com/dan-nitu/rock-paper-scissors',
    },
  ];

  const handleTabSelection = () => {
    props.handleTabSelection('personalProjects');
  };

  return (
    <div className={`tab projects-showcase ${isActive ? 'active' : ''}`}>
      <h2 onClick={handleTabSelection}>personalProjects</h2>
      <div className='content'>
        {projects.map((project) => (
          <div className='card' key={project.id}>
            <div className='image-wrapper'>
              <img src={project.screenshot} alt='' />
              <span className={`technology ${project.technology}`}></span>
            </div>

            <div className='data'>
              <h3>{project.title}</h3>

              <div className='controls'>
                <a
                  className='demo'
                  href={project.demo}
                  target='_blank'
                  rel='noreferrer'
                >
                  Demo <span className='demo'></span>
                </a>
                <a
                  className='github'
                  href={project.github}
                  target='_blank'
                  rel='noreferrer'
                >
                  GitHub <span className='github'></span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PersonalProjects;
