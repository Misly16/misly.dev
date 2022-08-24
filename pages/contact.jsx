import Nav from '@/components/nav';
import MobileNav from '@/components/mobileNav';
import ContactForm from '@/components/contactForm';

export default function Contact() {
  return (
    <div className='mx-auto max-w-4xl py-10 px-5'>
      <div className='sm:h-10 flex align-middle'>        
        <Nav/>
      </div>
      <MobileNav/>
      <div className='mx-auto max-w-4xl py-20 px-4 space-y-12'>
        <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl'>Contact</h1>
        <ContactForm/>
      </div>
    </div>
  )
}
