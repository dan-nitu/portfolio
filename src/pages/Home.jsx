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

  /* <>/{} */

  const lessThan = String.fromCharCode(60);
  const greaterThan = String.fromCharCode(62);
  const slash = String.fromCharCode(47);
  const leftCurlyBracket = String.fromCharCode(123);
  const rightCurlyBracket = String.fromCharCode(125);

  return (
    <>
      <Breadcrumbs path={path} />

      <div className='page-content'>
        <div>
          <span className='viola'>import</span>{' '}
          <span className='golden-dream'>{leftCurlyBracket}</span>{' '}
          <span className='mariner'>Link</span>
          <span className='golden-dream'>{rightCurlyBracket}</span>{' '}
          <span className='viola'>from</span>{' '}
          <span className='tussock'>'react-router-dom'</span>;
        </div>
        <div></div>
        <div>
          <span className='viola'>import</span>{' '}
          <span className='mariner'>DanNitu</span>{' '}
          <span className='viola'>from</span>{' '}
          <span className='tussock'>
            '.{slash}..{slash}
            components{slash}DanNitu'
          </span>
          ;
        </div>
        <div></div>
        <div>
          <span className='picton-blue'>const</span>{' '}
          <span className='sapling'>HomePage</span> ={' '}
          <span className='golden-dream'>()</span>{' '}
          <span className='picton-blue'>={greaterThan}</span>{' '}
          <span className='golden-dream'>{leftCurlyBracket}</span>
        </div>
        <div>
          <span className='viola'>return (</span>
        </div>
        <div>
          {lessThan}
          {greaterThan}
        </div>
        <div>
          <span className='picton-blue'>
            {lessThan}h1{greaterThan}
          </span>
          Hello World!
          <span className='picton-blue'>
            {lessThan}
            {slash}h1{greaterThan}
          </span>
        </div>
        <div>
          <span className='picton-blue'>
            {lessThan}h2{greaterThan}
          </span>
          I am {lessThan} <span className='pelorous'>DanNitu</span>{' '}
          <span className='mariner'>position</span>=
          <span className='picton-blue'>{leftCurlyBracket}</span>
          <span className='tussock'>'Frontend Developer'</span>
          <span className='picton-blue'>{rightCurlyBracket}</span> {slash}
          {greaterThan}.{lessThan}
          {slash}h2{greaterThan}
        </div>
        <div>
          <span className='picton-blue'>
            {lessThan}p{greaterThan}
          </span>
          If you want to find more about myself please click on the {lessThan}
          <span className='pelorous'>Link</span>{' '}
          <span className='mariner'>to</span>=
          <span className='mariner'>{leftCurlyBracket}</span>
          <span className='tussock'>'{slash}about'</span>
          <span className='mariner'>{rightCurlyBracket}</span>
          {greaterThan}About page{lessThan}
          {slash}
          <span className='pelorous'>Link</span>
          {greaterThan}.
          <span className='picton-blue'>
            {lessThan}
            {slash}p{greaterThan}
          </span>
        </div>
        <div>
          {lessThan}
          {slash}
          {greaterThan}
        </div>
        <div>
          <span className='viola'>)</span>;
        </div>
        <div>
          <span className='golden-dream'>{rightCurlyBracket}</span>;
        </div>
        <div></div>
        <div>
          <span className='viola'>export default</span>{' '}
          <span className='sapling'>HomePage</span>;
        </div>
      </div>
    </>
  );
};

export default HomePage;
