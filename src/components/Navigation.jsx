import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div className='links yolo'>
        <Link to={'/'}>HomePage.jsx</Link>
        <Link to={'/about'}>AboutPage.jsx</Link>
        <Link to={'/projects'}>ProjectsPage.jsx</Link>
        <Link to={'/contact'}>ContactPage.jsx</Link>
      </div>
      <div className='controls'>
        {/* // moon, banana, minimize, maximize, close */}
      </div>
    </>
  );
};

export default Navigation;
