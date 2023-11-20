import { useState } from 'react';

import TopBar from './TopBar';

import SelectionMenu from './SelectionMenu';

import PersonalProjects from './PersonalProjects';
import FollowedTutorials from './FollowedTutorials';
import TutorialWorks from './TutorialWorks';

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState('');

  const handleSelection = (value) => {
    setSelectedTab(value);
  };

  return (
    <div className='projects'>
      <TopBar />

      <div className='inner'>
        <p className='info '>Please select a tab to view the output.</p>

        <SelectionMenu handleSelection={handleSelection} />

        <div className='selection'>
          <PersonalProjects
            isActive={selectedTab === 'personalProjects' ? true : false}
          />

          <FollowedTutorials
            isActive={selectedTab === 'followedTutorials' ? true : false}
          />

          <TutorialWorks
            isActive={selectedTab === 'tutorialWorks' ? true : false}
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;
