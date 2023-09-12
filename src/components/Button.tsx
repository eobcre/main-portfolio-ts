// Button.tsx
type ButtonProps = {
  name: string;
  link?: string; // Make the link prop optional
  type?: 'link' | 'submit'; // Add a type prop to specify the button type
};

const Button: React.FC<ButtonProps> = (props) => {
  const buttonClass =
    'glass font-bebas text-dark-gray text-2xl shadow-showcase-bg hover:text-pink rounded-md duration-500 px-16 py-2';

  if (props.type === 'link' && props.link) {
    return (
      <div className='py-10'>
        <a
          href={props.link}
          target='_blank'
          rel='noopener noreferrer'
          className={`text-dark-gray text-2xl shadow-showcase-bg glass rounded-md hover:text-pink duration-500 px-12 py-2`}
        >
          <span className='font-bebas'>{props.name}</span>
        </a>
      </div>
    );
  } else if (props.type === 'submit') {
    return (
      <div className='flex justify-center py-8'>
        <button className={buttonClass} type='submit'>
          <span>{props.name}</span>
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default Button;
