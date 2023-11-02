import { useState, useEffect } from 'react';

const ProjectsInfo = (props) => {
  const [infoParagraph, setInfoParagraph] = useState('');
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(70);

  const initialText = `Here, you'll discover a collection of my creative work. These projects
    reflect my passion and creativity. Feel free to explore and get
    inspired by what I've created. Enjoy your visit! :]`;

  useEffect(() => {
    if (index < initialText.length) {
      const timeout = setTimeout(() => {
        setInfoParagraph((prevText) => prevText + initialText[index]);
        setIndex((prevIndex) => prevIndex + 1);

        setTimer((prevTimer) => {
          return prevTimer - 1 > 10 ? prevTimer - 1 : 10;
        });
      }, timer);

      return () => clearTimeout(timeout);
    }

    props.handleShowProjects(true);
  }, [index, initialText, timer, props]);

  return (
    <div className='projects-info'>
      <h1>Welcome to my personal projects showcase!</h1>
      <p>{infoParagraph}</p>
    </div>
  );
};
export default ProjectsInfo;
