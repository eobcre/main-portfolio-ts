// react scroll
import { Link } from 'react-scroll';
// img
import Brackets from '../assets/brackets.png';
import Bracket from '../assets/bracket.png';
import Bracket_2 from '../assets/bracket_2.png';

const Home = () => {
  return (
    <div className='w-screen h-screen bg-webTop bg-center bg-zoom table-cell align-middle'>
      <div className='text-center py-8'>
        <h1 className='mainFadeup text-7xl text-dark-gray font-bebas py-4'>
          Emmy Manning
        </h1>
        <h2 className='mainFadeup mainFadeupDelay_1 text-xl text-dark-gray font-bebas'>
          Love to build creative and magical things
        </h2>
      </div>

      {/* card */}
      <div className='mainFadeup box mainFadeupDelay_2 glass mx-auto w-380 md:w-600'>
        <span className='md:absolute bottom-3/4 -left-12 rotate-12 w-24 h-8 bg-clear-tape md:border-l-2 md:border-r-2 border-dotted'></span>
        <span className='md:absolute bottom-2/4 -right-12 -rotate-12 w-24 h-8 bg-clear-tape md:border-l-2 md:border-r-2 border-dotted'></span>
        <main className='max-w-21 mx-auto'>
          {/* github */}
          <div className='grid grid-cols-10 mt-6'>
            <span className='effect-st col-start-2 col-span-2'>
              <a
                href='https://github.com/eobcre'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
            </span>
            {/* portfolio */}
            <span className='effect-st col-start-7 col-span-3'>
              <Link
                activeClass='active'
                to='About'
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                Portfolio
              </Link>
            </span>
          </div>
          <img src={Brackets} alt='Icon' />
          {/* eobcre@emanning.dev */}
          <div>
            <p className='text-center text-5xl text-dark-gray font-bebas opacity-50'>
              eobcre@emanning.dev
            </p>
          </div>
          <img src={Bracket_2} alt='Icon' />
          {/* instagram */}
          <div className='grid grid-cols-9'>
            <span className='effect-st col-end-8 col-span-2'>
              <a
                href='https://www.instagram.com/emanning.dev/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Instagram
              </a>
            </span>
          </div>
          <img src={Bracket} alt='Icon' />
          {/* email */}
          <div className='sub-email grid justify-center mb-4'>
            <span className='effect-st'>
              <a
                href='mailto:eobcre@emanning.dev'
                target='_blank'
                rel='noopener noreferrer'
              >
                Email
              </a>
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
