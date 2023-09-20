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

  const content =
    "Hello World! I am <DanNitu position={'Frontend Developer'} />";

  return (
    <>
      <Breadcrumbs path={path} />
      <div>{content}</div>
    </>
  );
};

export default HomePage;
