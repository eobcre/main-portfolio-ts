// components
import Button from '../components/Button';
// libraries
import EmailJS from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Contact: React.FC = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // email js
    EmailJS.sendForm(
      import.meta.env.VITE_APP_SERVICE_ID,
      import.meta.env.VITE_APP_TEMPLATE_ID,
      e.currentTarget,
      import.meta.env.VITE_APP_PUBLIC_KEY
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.currentTarget.reset();

    // alert
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: 'Thank you!',
      text: 'I will get back to you as soon as possible.',
      icon: 'success',
    });
  };

  return (
    <div className='h-auto bg-light-blue py-20 md:py-24'>
      <div className='mx-auto w-4/5'>
        <h1 className='all-component-title mb-10'>Contact</h1>
        <div className='glass shadow-showcase-bg rounded-md px-8'>
          <form onSubmit={sendEmail}>
            <h2 className='text-dark-gray text-2xl text-center font-bebas pt-8 md:text-3xl'>
              Say Hello
            </h2>
            <p className='text-dark-gray text-lg opacity-90 text-center font-arial py-4'>
              Please feel free to use the contact form to reach out to me!
            </p>

            <div className='py-2'>
              <input
                type='text'
                placeholder='Name'
                name='name'
                className='contact-component-form'
                required
              />
            </div>
            <div className='py-2'>
              <input
                type='email'
                placeholder='Email'
                name='email'
                className='contact-component-form'
                required
              />
            </div>
            <div className='pt-2'>
              <textarea
                placeholder='Message'
                name='message'
                rows={10}
                cols={50}
                className='contact-component-form'
                required
              />
            </div>
            <Button name='Hello' type='submit' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
