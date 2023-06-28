// interface
interface ButtonProps {
  name: string;
  link: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div className='py-10'>
      <a
        href={props.link}
        target='_blank'
        rel='noopener noreferrer'
        className='text-dark-gray text-2xl shadow-showcase-bg glass rounded-md hover:text-pink transition-all px-12 py-2'
      >
        <span className='font-bebas'>{props.name}</span>
      </a>
    </div>
  );
};

export default Button;
