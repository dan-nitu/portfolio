const Breadcrumbs = (props) => {
  return (
    <ul className='breadcrumbs'>
      {props.path.map((path) => (
        <li className={path.class} key={path.name}>
          {path.name}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
