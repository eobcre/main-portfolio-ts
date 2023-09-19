const SideFooter: React.FC = () => {
  return (
    <div>
      <div className='fixed bottom-0 text-dark-gray text-2xl [writing-mode:vertical-rl] [text-orientation:sideways-right] px-4 py-8'>
        <p className='hidden min-[600px]:block md:text-dark-gray font-bebas'>
          &copy; 2023 Emmy Manning
        </p>
      </div>
    </div>
  );
};

export default SideFooter;
