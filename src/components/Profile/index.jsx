/*eslint no-useless-concat: 0*/
import { React } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => (
  <div className='max-w-2xl mx-auto'>
    <div className='px-3 py-2'>
      <div className='flex flex-col gap-1 text-center'>
        <Link
          to='/'
          className='block mx-auto bg-center bg-no-repeat bg-cover w-20 h-20 rounded-full border border-gray-400 shadow-lg'
        >
          <img
            src='/1619813643575.jpeg'
            alt='couldnt load'
            style={{ borderRadius: '50%' }}
          />
        </Link>
        <p className='font-serif font-semibold'>Manuel Sosa</p>
        <span className='text-sm text-gray-400'>Rosario, Argentina</span>
        <span className='text-sm text-gray-400'>
          https://www.instagram.com/coderhouse/
        </span>
      </div>
    </div>
  </div>
);

export default Profile;
