import Link from 'next/link';
import Button from './button';

const Header = () => (
  <div className='border-b'>
    <div className='container py-10 grid grid-cols-12 gap-4'>
      <div className='sm:col-span-12 md:col-span-6 lg:col-span-6'>
        <Link href='/'>
          <h1 className='cursor-pointer font-bold tracking-tighter text-4xl'>
            <span>codelance</span>
            <span className='text-codelance-blue'>.io</span>
          </h1>
        </Link>
      </div>
      <div className='sm:col-span-12 md:col-span-6 lg:col-span-6 flex flex-row justify-end'>
        <Button text='Post a project' primary></Button>
        <Button text='How it works' hasBorder></Button>
        <Button text='Login' flat></Button>
        <Button text='Sign up' flat></Button>
      </div>
    </div>
  </div>
);

export default Header;
