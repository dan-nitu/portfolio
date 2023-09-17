import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <nav className='links'>
      <NavLink
        to={'/'}
        className={({ isActive }) => (isActive ? 'active' : undefined)}
        end
      >
        HomePage.jsx
      </NavLink>
      <NavLink
        to={'/about'}
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        AboutPage.jsx
      </NavLink>
      <NavLink
        to={'/projects'}
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        ProjectsPage.jsx
      </NavLink>
      <NavLink
        to={'/contact'}
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        ContactPage.jsx
      </NavLink>
    </nav>
  );
};

export default NavLinks;
