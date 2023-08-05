type ButtonSubmitProps = {
  name: string;
};

const ButtonSubmit: React.FC<ButtonSubmitProps> = (props) => {
  return (
    <div className='flex justify-center py-8'>
      <button
        className='glass font-bebas text-dark-gray text-2xl shadow-showcase-bg hover:text-pink rounded-md duration-500 px-16 py-2'
        type='submit'
      >
        <span>{props.name}</span>
      </button>
    </div>
  );
};

export default ButtonSubmit;
