import { React, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import PlantsList from '../PlantsList';
import plants from '../../mock/plants';

const Home = () => {
  const { name, surname } = useContext(CartContext);
  console.log(name, surname);
  return (
    <div className='relative'>
      <PlantsList plants={plants} />
    </div>
  );
};

export default Home;
