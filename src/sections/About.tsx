// components
import ScrollFadeIn from '../components/ScrollFadeIn';
import Button from '../components/Button';
// pdf
import PDF from '../assets/resume.pdf';
// utils
import { skillSetData } from '../utils/skillSetData';

const About: React.FC = () => {
  return (
    <div className='h-auto bg-light-blue bg-zoom text-dark-gray pt-24'>
      <div className='md:flex gap-10 w-4/5 mx-auto'>
        <div className='md:w-2/4'>
          <h1 className='title mb-10'>About Me</h1>
          <ScrollFadeIn>
            <p className='text font-arial'>
              Hello! My name is Emmy and I enjoy creating magical things. I am a
              recent graduate (as of March 2023) in AI technology. I have
              experience working in the IT industry and am skilled in coding and
              designing. I have had the privilege of working on map alignments
              and survey app development. I am always passionate about creative
              coding and curious about learning new technologies! See my resume
              for additional details.
            </p>
            <Button name='Resume' type='link' link={PDF} />
          </ScrollFadeIn>
        </div>
        <div className='pt-20 md:pt-0 md:w-2/4'>
          <h1 className='title mb-10'>My Skills</h1>
          <div className='flex flex-wrap gap-4'>
            {skillSetData.map(({ id, skill }) => {
              return (
                <div key={id}>
                  <p className='tech-set'>{skill}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
