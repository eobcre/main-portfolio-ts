// react-icons
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div className='w-screen h-screen bg-main-image bg-center bg-cover table-cell align-middle'>
      {/* card */}
      <div className='card-fade-in rounded-md glass shadow-showcase-bg w-360 mx-auto md:ml-20 md:w-480 md:flex flex-col justify-center items-center'>
        <main className=''>
          <div className='text-center py-8'>
            <h1 className='text-7xl text-dark-gray font-bebas py-4'>
              Emmy Manning
            </h1>
            <h2 className='text-xl text-dark-gray font-bebas'>
              Front-end Developer | Beaver, PA
            </h2>
            <div className='icon-container flex justify-center items-center gap-4 py-4'>
              <a
                href='https://www.linkedin.com/in/emmymanning/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin className='text-dark-gray text-5xl hover:text-pink transition-all' />
              </a>
              <a
                href='https://github.com/eobcre'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub className='text-dark-gray text-5xl hover:text-pink transition-all' />
              </a>
              <a
                href='https://www.instagram.com/emanning.dev/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram className='text-dark-gray text-5xl hover:text-pink transition-all' />
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
