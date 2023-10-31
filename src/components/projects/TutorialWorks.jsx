const TutorialWorks = (props) => {
  let { isActive } = props;

  const handleTabSelection = () => {
    props.handleTabSelection('tutorialWorks');
  };

  return (
    <div className={`tab ${isActive ? 'active' : ''}`}>
      <h2 onClick={handleTabSelection}>tutorialWorks</h2>
      <div className='content'>ccccccccccccccc</div>
    </div>
  );
};
export default TutorialWorks;
