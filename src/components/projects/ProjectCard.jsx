const ProjectCard = (props) => {
  return (
    <div className='project-card'>
      <div className='image-wrapper'>
        <img src={props.project.screenshot} alt='' />
        <span className={`technology ${props.project.technology}`}></span>
      </div>

      <div className='data'>
        <h3>{props.project.title}</h3>

        <div className='controls'>
          <a
            className='demo'
            href={props.project.demo}
            target='_blank'
            rel='noreferrer'
          >
            Demo <span className='demo'></span>
          </a>
          <a
            className='github'
            href={props.project.github}
            target='_blank'
            rel='noreferrer'
          >
            GitHub <span className='github'></span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
