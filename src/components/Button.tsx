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
        className='bg-dark-gray text-white text-2xl hover:text-light-blue rounded-md transition-all px-12 py-2'
      >
        <span className='font-bebas'>{props.name}</span>
      </a>
    </div>
  );
};

export default Button;
