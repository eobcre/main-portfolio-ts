const Button = (props) => {
  return (
    <div className='py-10'>
      <a
        href={props.link}
        target='_blank'
        rel='noopener noreferrer'
        className='bg-dark-gray text-white text-2xl hover:text-light-blue transition-all duration-300 px-20 py-2'
      >
        <span className='font-bebas'>{props.name}</span>
      </a>
    </div>
  );
};

export default Button;
