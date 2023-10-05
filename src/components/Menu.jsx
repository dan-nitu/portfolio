import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu'>
      <div className='title'>Portfolio</div>
      <div className='folder pages'>pages</div>
      <ul>
        <li className='indented pages'>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            end
            to={'/'}
          >
            HomePage.jsx
          </NavLink>
        </li>
        <li className='indented pages'>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to={'/about'}
          >
            {' '}
            AboutPage.jsx
          </NavLink>
        </li>
        <li className='indented pages'>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to={'/projects'}
          >
            ProjectsPage.jsx
          </NavLink>
        </li>
        <li className='indented pages'>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to={'/contact'}
          >
            ContactPage.jsx
          </NavLink>
        </li>

        <li className='readme'>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to={'/readme'}
          >
            README.md
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
