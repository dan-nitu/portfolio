const FollowedTutorials = (props) => {
  let { isActive } = props;

  const handleTabSelection = () => {
    props.handleTabSelection('followedTutorials');
  };

  return (
    <div className={`tab ${isActive ? 'active' : ''}`}>
      <h2 onClick={handleTabSelection}>followedTutorials</h2>
      <div className='content'>bbbbbbbbbbbbbbbbbbb</div>
    </div>
  );
};
export default FollowedTutorials;
