import { ReactComponent as MinimizeIcon } from './../../assets/images/minimize-icon.svg';
import { ReactComponent as FullScreenIcon } from './../../assets/images/full-screen-icon.svg';
import { ReactComponent as CloseIcon } from './../../assets/images/close-icon.svg';

const TopBar = () => {
  return (
    <div className='top-bar'>
      <span>Previewing: Projects.jsx</span>
      <div className='controls'>
        <MinimizeIcon />
        <FullScreenIcon />
        <CloseIcon />
      </div>
    </div>
  );
};
export default TopBar;
