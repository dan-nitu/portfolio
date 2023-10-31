import { useState } from 'react';

import TopBar from './TopBar';

import PersonalProjects from './PersonalProjects';
import FollowedTutorials from './FollowedTutorials';
import TutorialWorks from './TutorialWorks';

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState('');

  const handleTabSelection = (data) => {
    setSelectedTab(data);
  };

  return (
    <div className='projects'>
      <TopBar />

      <div className='inner'>
        <p className='info '>Please select a tab to view the output.</p>

        <div className='accordion'>
          <PersonalProjects
            isActive={selectedTab === 'personalProjects' ? true : false}
            handleTabSelection={handleTabSelection}
          />

          <FollowedTutorials
            isActive={selectedTab === 'followedTutorials' ? true : false}
            handleTabSelection={handleTabSelection}
          />

          <TutorialWorks
            isActive={selectedTab === 'tutorialWorks' ? true : false}
            handleTabSelection={handleTabSelection}
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;
