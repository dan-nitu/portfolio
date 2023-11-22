import { useState } from 'react';

const InfoText = () => {
  const [showStory, setShowStory] = useState(false);

  const handleToggleStory = () => {
    setShowStory((prevState) => !prevState);
  };

  return (
    <section className='info-text'>
      <h1>
        Oh, you're curious to learn more about me? No need to mention it — I was
        already aware! After all, you've found yourself on the about page.
      </h1>

      <h2>
        Ooops, where are my manners? Sorry! I'm Dan, a guy pasionate about
        frontend development.
      </h2>

      <span>Here's my story:</span>

      <div className={showStory ? 'story full' : 'story'}>
        <p>
          My introduction to programming dates back to elementary school, where
          we used to tinker and play around with Turbo Pascal. That's how this
          exciting journey began.
        </p>
        <p>
          Part 2 of this saga continued in high school with C++. Part 3 was
          during my university years. It started with C++ again but the plot
          thickened. This time we got additional episodes featuring Java, C#,
          JavaScript, HTML, CSS and jQuery. The season concluded with the
          attainment of a bachelor's degree and a promising bright future.
        </p>

        <p>
          Well, well... the tutorial reached its conclusion, and it was time to
          venture into the 'open world'. The adventure started out as a
          full-stack developer, but then transitioned to frontend development
          due to my meticulous and organized work style. I've contributed to
          diverse projects spanning industries like real estate, insurance,
          plumbing, e-learning, food and beverage, literature, restaurants, and
          job platforms.
        </p>

        <p>
          <b>Spoiler alert!</b> Season 2, Part 2 is currently in development,
          and I'm on the lookout to fill a key role. Below, you'll discover a
          list of technologies I'm comfortable with, and for a sneak peek at my
          personal projects, head over to the About Page.
        </p>

        <p>
          P.S. I'm also open to exploring backend development in the future.
        </p>

        <span className='info'>(Click the arrow to unfold it)</span>
        <span className='control' onClick={handleToggleStory}></span>
      </div>
    </section>
  );
};
export default InfoText;
