const TechnologyCard = (props) => {
  return (
    <div className='technology-card'>
      <span className='lamp'>
        <span className='lamp-body'></span>
        <span className='light-bulb'></span>
      </span>
      <div className='img-wrapper'>
        <img src={props.technology.image} alt={props.technology.name} />
      </div>
      <span>{props.technology.name}</span>
    </div>
  );
};
export default TechnologyCard;
