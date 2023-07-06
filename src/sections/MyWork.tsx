// components
import Button from '../components/Button';
import ScrollFadeIn from '../components/ScrollFadeIn';
// data
import { myWorkData } from '../utils/myWorkData';

const MyWork: React.FC = () => {
  return (
    <div className='h-auto bg-light-blue pt-24'>
      <div className='mx-auto w-4/5'>
        <h1 className='title'>My Work</h1>
        {myWorkData.map((data, index) => (
          <div key={data.id} className='mt-10 md:flex gap-10 md:mt-20'>
            <div className='w-auto backdrop-blur md:w-2/4'>
              <span className='hidden md:block absolute md:-top-4 left-inset40 rotate-45 w-24 h-8 bg-clear-tape border-l-2 border-r-2 border-dotted'></span>
              <img
                src={data.src}
                alt={`${index}`}
                className='hidden md:block shadow-showcase-bg rounded-md'
              />
            </div>
            <div className='md:w-2/4'>
              <img
                src={data.logo}
                alt={`${index}`}
                className='md:hidden'
                width='100'
                height='100'
              />
              <h2 className='work-title'>{data.name}</h2>
              <ScrollFadeIn>
                <p className='work-text'>{data.description}</p>
                <div>
                  <span className='work-tech'>{data.tech1}</span>
                  <span className='work-tech'>{data.tech2}</span>
                  <span className='work-tech'>{data.tech3}</span>
                  <span className='work-tech'>{data.tech4}</span>
                  <span className='work-tech'>{data.tech5}</span>
                </div>
                <Button name='View App' link={data.url} />
              </ScrollFadeIn>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
