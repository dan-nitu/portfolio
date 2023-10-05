import { Outlet } from 'react-router-dom';

import Menu from '../components/Menu';
import Navigation from '../components/Navigation';

const RootLayout = () => {
  return (
    <div className='layout'>
      <Menu />

      <div>
        <Navigation />

        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
