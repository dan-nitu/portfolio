import HTMLLogo from './../../assets/images/html5-logo.png';
import CSSLogo from './../../assets/images/css-logo.png';
import SASSLogo from './../../assets/images/sass-logo.png';
import JavaScriptLogo from './../../assets/images/javascript-logo.png';
import ReactJSLogo from './../../assets/images/react-logo.png';
import VueJSLogo from './../../assets/images/vue-js-logo.png';
import PHPLogo from './../../assets/images/php-logo.png';
import LaravelLogo from './../../assets/images/laravel-logo.png';

import TechnologyCard from './TechnologyCard';

const Technologies = () => {
  const technologies = [
    {
      id: 1,
      name: 'HTML',
      image: HTMLLogo,
    },
    {
      id: 2,
      name: 'CSS',
      image: CSSLogo,
    },
    {
      id: 3,
      name: 'SASS / SCSS',
      image: SASSLogo,
    },
    {
      id: 4,
      name: 'JavaScript',
      image: JavaScriptLogo,
    },
    {
      id: 5,
      name: 'ReactJS',
      image: ReactJSLogo,
    },
    {
      id: 6,
      name: 'Vue.js',
      image: VueJSLogo,
    },
    {
      id: 7,
      name: 'PHP',
      image: PHPLogo,
    },
    {
      id: 8,
      name: 'Laravel',
      image: LaravelLogo,
    },
  ];

  return (
    <div className='technologies'>
      <span className='bigger has-arrow'>Technologies:</span>

      <div className='spotlight'>
        {technologies.map((technology) => (
          <TechnologyCard technology={technology} key={technology.id} />
        ))}
      </div>
    </div>
  );
};
export default Technologies;
