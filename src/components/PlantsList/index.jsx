import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';
import customFetch from '../../utils/customFetch';
import plants from '../../mock/plants';

const PlantsList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    customFetch(plants)
      .then((res) => {
        if (res.length > 0) setData(res);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    return console.log('It works');
  };
  return (
    <>
      <div className='flex flex-wrap items-center justify-center mt-10'>
        {data.length === 0 && <Spinner />}
        {data.length > 0 &&
          data.map((plant) => (
            <div key={plant.id}>
              <Link to={`/plant/${plant.id}`}>
                <div
                  className={`flex-shrink-0 mx-5 mb-6 relative overflow-hidden ${plant.color} ${plant.hoverColor} rounded-lg max-w-xs shadow-lg`}
                >
                  <svg
                    className='absolute bottom-0 left-0 mb-8'
                    viewBox='0 0 375 283'
                    fill='none'
                  >
                    <rect
                      x='159.52'
                      y='175'
                      width='152'
                      height='152'
                      rx='8'
                      transform='rotate(-45 159.52 175)'
                      fill={`${plant.rectColor}`}
                    ></rect>
                    <rect
                      y='107.48'
                      width='152'
                      height='152'
                      rx='8'
                      transform='rotate(-45 0 107.48)'
                      fill={`${plant.rectColor}`}
                    ></rect>
                  </svg>
                  <div className='relative pt-10 px-10 flex items-center justify-center'>
                    <div className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'></div>
                    <picture>
                      <source srcSet={plant.image} type='image/webp' />
                      <source srcSet={plant.image} />
                      <img
                        className='relative w-40'
                        src={plant.image}
                        alt='shopping item'
                      />
                    </picture>
                  </div>
                  <div className='relative text-white px-6 pb-6 mt-6'>
                    <span className='block opacity-75 -mb-1'>Indoor</span>
                    <div className='flex justify-between'>
                      <span className='block font-semibold text-xl'>
                        {plant.name}
                      </span>
                    </div>
                    <span
                      className={`bg-white rounded-full ${plant.textColor} text-xs w-20 mt-3 font-bold px-3 py-2 leading-none flex items-center`}
                    >
                      ${plant.price}
                    </span>
                    <button
                      onClick={handleClick}
                      className={`bg-white rounded-full ${plant.textColor} text-xs w-30 mt-3 font-bold px-3 py-2 leading-none flex items-center`}
                    >
                      Stop propagation
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default PlantsList;
