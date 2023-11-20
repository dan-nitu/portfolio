import { useState } from 'react';

const SelectionMenu = (props) => {
  const [active, setActive] = useState('');

  const handleSelection = (e) => {
    props.handleSelection(e.target.innerText);
    setActive(e.target.innerText);
  };

  return (
    <div className='selection-menu' onClick={handleSelection}>
      <h2 className={active === 'personalProjects' ? 'active' : ''}>
        personalProjects
      </h2>
      <h2 className={active === 'followedTutorials' ? 'active' : ''}>
        followedTutorials
      </h2>
      <h2 className={active === 'tutorialWorks' ? 'active' : ''}>
        tutorialWorks
      </h2>
    </div>
  );
};
export default SelectionMenu;
