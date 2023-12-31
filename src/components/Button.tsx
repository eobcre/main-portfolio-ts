type ButtonProps = {
  name: string;
  link?: string;
  type?: 'link' | 'submit';
};

const Button: React.FC<ButtonProps> = ({ name, link, type }) => {
  if (type === 'link' && link) {
    return (
      <div className='py-10'>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className={`text-dark-gray text-2xl shadow-showcase-bg glass rounded-md hover:text-pink duration-500 px-12 py-2`}
        >
          <span className='font-main'>{name}</span>
        </a>
      </div>
    );
  } else if (type === 'submit') {
    return (
      <div className='flex justify-center py-8'>
        <button
          className={`glass font-main text-dark-gray text-2xl shadow-showcase-bg hover:text-pink rounded-md duration-500 px-16 py-2`}
          type='submit'
        >
          <span>{name}</span>
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default Button;
