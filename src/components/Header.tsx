import { useState } from 'react';
// react scroll
import { Link } from 'react-scroll';
// icons
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import Logo from '../assets/logo.png';
// pdf
import PDF from '../assets/resume.pdf';

const Header: React.FC = () => {
  const [navbar, setNavbar] = useState<boolean>(false);

  const toggle: () => void = () => {
    setNavbar((prevState) => !prevState);
  };

  const navItems = [
    {
      item: 'About',
      link: 'About',
    },
    {
      item: 'Work',
      link: 'Work',
    },
    {
      item: 'Contact',
      link: 'Contact',
    },
    {
      item: 'Resume',
      pdf: 'PDF',
    },
  ];

  return (
    <nav className='w-full fixed top-0 z-10'>
      <div className='glass px-6 py-3 md:flex items-center'>
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
                <HiX className='text-4xl' /> // close icon
              ) : (
                <HiMenuAlt4 className='text-4xl' /> // open icon
              )}
            </button>
          </div>
        </div>

        {/* nav items */}
        <div className={`pb-8 md:block md:pb-0 ${navbar ? 'block' : 'hidden'}`}>
          <ul className='font-bebas justify-center items-center md:flex'>
            {navItems.map(({ item, link, pdf }, index) => (
              <li className='nav-item' key={index}>
                {pdf ? (
                  <a href={PDF} target='_blank' rel='noopener noreferrer'>
                    {item}
                  </a>
                ) : (
                  <Link
                    activeClass='active'
                    to={link || ''}
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}
                    onClick={toggle}
                  >
                    {item}
                  </Link>
                )}
              </li>
            ))}
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
