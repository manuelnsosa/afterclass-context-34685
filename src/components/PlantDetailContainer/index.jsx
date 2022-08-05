import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import plants from '../../mock/plants';
import PlantDetail from '../PlantDetail';

const PlantDetailContainer = () => {
  const [plant, setPlant] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const foundPlant = plants.find((element) => element.id.toString() === id);
    if (foundPlant) {
      setPlant(foundPlant);
    }
  }, [id]);

  return (
    <>
      <section className='text-gray-700 body-font overflow-hidden bg-white'>
        <div className='container px-5 py-24 mx-auto'>
          {Object.keys(plant).length > 0 && <PlantDetail plant={plant} />}
        </div>
      </section>
    </>
  );
};

export default PlantDetailContainer;
