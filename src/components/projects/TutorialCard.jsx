const TutorialCard = (props) => {
  return (
    <div className='tutorial-card'>
      <a
        className='image-wrapper'
        href={props.tutorial.link}
        target='_blank'
        rel='noreferrer'
      >
        <img src={props.tutorial.screenshot} alt='' />
        <span className={`technology ${props.tutorial.technology}`}></span>
      </a>

      <div className='data'>
        <a href={props.tutorial.link} target='_blank' rel='noreferrer'>
          <h3>{props.tutorial.title}</h3>
        </a>
        <h4>Author: {props.tutorial.author}</h4>
        <p>{props.tutorial.description}</p>
      </div>
    </div>
  );
};
export default TutorialCard;
