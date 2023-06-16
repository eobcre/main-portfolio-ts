import { useState } from 'react';
// react scroll
import { Link } from 'react-scroll';
// icons
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import Logo from '../assets/logo.png';
// pdf
import PDF from '../assets/resume.pdf';

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const toggle = () => {
    setNavbar((prevState) => !prevState);
  };

  return (
    <nav className='w-full fixed top-0 z-10'>
      <div className='glass px-4 md:flex justify-between items-center'>
        <div className='flex justify-between items-center'>
          <a href='./'>
            <img src={Logo} alt='Logo' width='40' />
          </a>
          {/* mobile menu button */}
          <div className='md:hidden'>
            <button
              className='text-dark-gray rounded-md outline-none py-2'
              onClick={toggle}
            >
              {navbar ? (
                <HiX className='text-4xl' /> // Close icon
              ) : (
                <HiMenuAlt4 className='text-4xl' /> // Open icon
              )}
            </button>
          </div>
        </div>
        {/* nav list */}
        <div className={`pb-8 md:block md:pb-0 ${navbar ? 'block' : 'hidden'}`}>
          <ul className='font-bebas justify-center items-center md:flex'>
            {/* about */}
            <li className='nav-items-st'>
              <Link
                activeClass='active'
                to='About'
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                onClick={toggle}
              >
                About
              </Link>
            </li>
            {/* my work */}
            <li className='nav-items-st'>
              <Link
                activeClass='active'
                to='MyWork'
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                onClick={toggle}
              >
                My Work
              </Link>
            </li>
            {/* contact */}
            <li className='nav-items-st'>
              <Link
                activeClass='active'
                to='Contact'
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                onClick={toggle}
              >
                Contact
              </Link>
            </li>
            {/* resume */}
            <li className='nav-items-st'>
              <a href={PDF} target='_blank' rel='noopener noreferrer'>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* copyright */}
      <div className='fixed bottom-0 text-dark-gray text-2xl [writing-mode:vertical-rl] [text-orientation:sideways-right] px-4 py-8'>
        <p className='hidden md:block md:text-dark-gray font-bebas'>
          &copy; 2023 Emmy Manning
        </p>
      </div>
    </nav>
  );
};

export default Header;
