// react-icons
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Home: React.FC = () => {
  return (
    <div className='w-screen h-screen bg-main-image bg-center bg-cover table-cell align-middle'>
      {/* card */}
      <div className='card-fade-in rounded-md glass shadow-showcase-bg w-360 mx-auto md:ml-20 min-[600px]:w-480 md:flex flex-col justify-center items-center'>
        <main className=''>
          <div className='text-center py-8'>
            <h1 className='text-7xl text-dark-gray font-main py-4'>
              Emmy Manning
            </h1>
            <h2 className='text-lg text-dark-gray font-text'>
              Front-end Developer | Beaver, PA
            </h2>
            <div className='icon-container flex justify-center items-center gap-4 py-5'>
              <a
                href='https://www.linkedin.com/in/emmymanning/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin className='home-component-icon' />
              </a>
              <a
                href='https://github.com/eobcre'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub className='home-component-icon' />
              </a>
              <a href='mailto:eobcre@gmail.com'>
                <HiOutlineMail className='home-component-icon' />
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
