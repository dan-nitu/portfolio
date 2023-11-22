import Breadcrumbs from './../components/Breadcrumbs';

const HomePage = () => {
  const path = [
    {
      name: 'src',
      class: '',
    },
    {
      name: 'pages',
      class: '',
    },
    {
      name: 'Home.jsx',
      class: 'react',
    },
  ];

  const lessThan = String.fromCharCode(60);
  const greaterThan = String.fromCharCode(62);
  const slash = String.fromCharCode(47);
  const leftCurlyBracket = String.fromCharCode(123);
  const rightCurlyBracket = String.fromCharCode(125);

  return (
    <>
      <Breadcrumbs path={path} />

      <div className='home-page '>
        <div className='line'>
          <span className='viola'>import </span>
          <span className='gold'>{leftCurlyBracket}</span>
          <span className='anakiwa'> Link </span>
          <span className='gold'>{rightCurlyBracket}</span>
          <span className='viola'> from </span>
          <span className='my-pink'>'react-router-dom'</span>
          <span className='silver'>;</span>
        </div>

        <div className='line'></div>

        <div className='line'>
          <span className='viola'>import </span>
          <span className='anakiwa'>DanNitu </span>
          <span className='viola'>from </span>
          <span className='my-pink'>
            '.{slash}..{slash}
            components{slash}DanNitu'
          </span>
          <span className='silver'>;</span>
        </div>

        <div className='line'></div>

        <div className='line'>
          <span className='havelock-blue'>const </span>
          <span className='sapling'>HomePage </span>
          <span className='silver'>=</span>
          <span className='gold'> () </span>
          <span className='havelock-blue'>={greaterThan} </span>
          <span className='gold'>{leftCurlyBracket}</span>
        </div>

        <div className='indented'>
          <div className='line'>
            <span className='viola'>return (</span>
          </div>

          <div className='indented'>
            <div className='line'>
              <span className='gray'>
                {lessThan}
                {greaterThan}
              </span>
            </div>

            <div className='indented'>
              <div className='line'>
                <span className='gray'>{lessThan}</span>
                <span className='havelock-blue'>h1</span>
                <span className='gray'>{greaterThan}</span>
                <span className='silver'>Hello World!</span>
                <span className='gray'>
                  {lessThan}
                  {slash}
                </span>
                <span className='havelock-blue'>h1</span>
                <span className='gray'>{greaterThan}</span>
              </div>

              <div className='line'>
                <span className='gray'>{lessThan}</span>
                <span className='havelock-blue'>h2</span>
                <span className='gray'>{greaterThan}</span>
                <span className='silver'>I am </span>
                <span className='gray'>{lessThan}</span>
                <span className='puerto-rico'>DanNitu </span>
                <span className='anakiwa'>position</span>
                <span className='silver'>=</span>
                <span className='havelock-blue'>{leftCurlyBracket}</span>
                <span className='my-pink'>'Frontend Developer'</span>
                <span className='havelock-blue'>{rightCurlyBracket}</span>
                <span className='gray'>
                  {slash}
                  {greaterThan}
                </span>
                <span className='silver'>.</span>
                <span className='gray'>
                  {lessThan}
                  {slash}
                </span>
                <span className='havelock-blue'>h2</span>
                <span className='gray'>{greaterThan}</span>
              </div>

              <div className='line'>
                <span className='gray'>{lessThan}</span>
                <span className='havelock-blue'>p</span>
                <span className='gray'>{greaterThan}</span>
                <span className='silver'>
                  If you want to find more about myself please click on the{' '}
                </span>
                <span className='gray'>{lessThan}</span>
                <span className='puerto-rico'>Link </span>
                <span className='anakiwa'>to</span>=
                <span className='havelock-blue'>{leftCurlyBracket}</span>
                <span className='my-pink'>'{slash}about'</span>
                <span className='havelock-blue'>{rightCurlyBracket}</span>
                <span className='gray'>{greaterThan}</span>
                <span className='silver'>About page</span>
                <span className='gray'>
                  {lessThan}
                  {slash}
                </span>
                <span className='puerto-rico'>Link</span>
                <span className='gray'>{greaterThan}</span>
                <span className='silver'>.</span>
                <span className='gray'>
                  {lessThan}
                  {slash}
                </span>
                <span className='havelock-blue'>p</span>
                <span className='gray'>{greaterThan}</span>
              </div>
            </div>

            <div className='line'>
              <span className='gray'>
                {lessThan}
                {slash}
                {greaterThan}
              </span>
            </div>
          </div>

          <div className='line'>
            <span className='viola'>)</span>
            <span className='silver'>;</span>
          </div>
        </div>

        <div className='line'>
          <span className='gold'>{rightCurlyBracket}</span>
          <span className='silver'>;</span>
        </div>

        <div className='line'></div>

        <div className='line'>
          <span className='viola'>export default</span>
          <span className='sapling'> HomePage</span>
          <span className='silver'>;</span>
        </div>
      </div>
    </>
  );
};

export default HomePage;
