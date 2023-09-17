import { ReactComponent as DarkModeIcon } from './../assets/images/dark-mode.svg';
import { ReactComponent as BananaIcon } from './../assets/images/banana.svg';
import { ReactComponent as MinimizeIcon } from './../assets/images/minimize.svg';
import { ReactComponent as MaximizeIcon } from './../assets/images/maximize.svg';
import { ReactComponent as CloseIcon } from './../assets/images/close.svg';

const NavExtraControls = () => {
  const toggleDarkModeHandler = () => {};

  const bananaHandler = () => {};

  const handleMinimizeWindow = () => {};

  const handleMaximizeWindow = () => {};

  const handleCloseWindow = () => {};

  return (
    <div className='controls'>
      <DarkModeIcon onClick={toggleDarkModeHandler} />
      <BananaIcon onClick={bananaHandler} />
      <MinimizeIcon onClick={handleMinimizeWindow} />
      <MaximizeIcon onClick={handleMaximizeWindow} />
      <CloseIcon onClick={handleCloseWindow} />
    </div>
  );
};

export default NavExtraControls;
