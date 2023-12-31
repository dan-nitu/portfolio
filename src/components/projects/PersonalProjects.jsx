import countriesApp from './../../assets/images/personal-projects/countries-app.PNG';
import weatherApp from './../../assets/images/personal-projects/weather-app.PNG';
import spaceTourismWebsite from './../../assets/images/personal-projects/space-tourism-website.PNG';
import rockPaperScissors from './../../assets/images/personal-projects/rock-paper-scissors.PNG';

import ProjectCard from './ProjectCard';

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

  return (
    <div className={`projects-showcase ${isActive ? 'active' : ''}`}>
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};
export default PersonalProjects;
