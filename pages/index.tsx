import Layout from '../components/layout';
import Image from 'next/image';
import { MdSearch, MdArrowForward } from 'react-icons/md';
import Tag from '../components/tag';

const tags = [
  'Drupal',
  'WordPress',
  'Full Stack',
  'PHP',
  'Javascript',
  'WooCommerce',
  'Vue',
];

const tagElements = tags.map((tag) => <Tag key={tag} text={tag}></Tag>);

const Home = () => (
  <Layout>
    <div className='relative'>
      <Image
        className='absolute'
        src='/header1920.png'
        width={1920}
        height={631}
        layout='responsive'
      ></Image>
      <div className='w-1/2 px-20 py-10 absolute top-0'>
        <h1 className='font-bold text-5xl'>
          Find a qualified and available developer
        </h1>
        <p className='my-5'>
          Work with the best freelance talent from around the world on our
          secure, flexible and cost-effective platform.
        </p>
        <div className='w-1/3	mb-5 border-b-4 border-codelance-blue'></div>
        <div className='flex h-16 w-full'>
          <input
            className='rounded-md w-10/12 pl-3'
            placeholder='What are you looking for?'
          ></input>
          <div className='rounded-md w-2/12 bg-codelance-blue flex items-center justify-center'>
            <MdSearch size='30' className='text-codelance-cream'></MdSearch>
          </div>
        </div>
        <div className='mb-14 grid grid-flow-col auto-cols-max'>
          {tagElements}
        </div>
        <h3 className='flex items-center'>
          <span className='mr-2'>Or</span>
          <span className='mr-2 text-codelance-blue font-bold'>
            Post a Job - It's Free
          </span>
          <MdArrowForward
            size='20'
            className='inline text-codelance-blue'
          ></MdArrowForward>
        </h3>
      </div>
    </div>
  </Layout>
);

export default Home;
