/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDelayUnmount } from '@alpsbte/shared/util';
import './loader.scss';

const possibilities = [
  'bat',
  'bee',
  'bells',
  'blaze',
  'chicken',
  'cod',
  'dolphin',
  'end_crystal',
  'fire',
  'ghast',
  'jeb',
  'lava',
  'magma_cube',
  'panda',
  'parrot',
  'phantom',
  'piston',
  'polar_bear',
  'rabbit',
  'salmon',
  'seagrass',
  'shulkerbox',
  'silverfish',
  'squid',
  'sticky_piston',
  'torch',
  'villager',
  'wheat',
  'wolf',
].sort((a: string, b: string) => a.localeCompare(b));

const animation =
  possibilities[Math.floor(Math.random() * possibilities.length)];

export const Loader: React.FC = () => {
  const [dots, setDots] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => setDots(dots === 3 ? 0 : dots + 1), 300);
  }, [dots]);

  const test = new Array(dots).fill('.');
  console.log(test);

  return (
    <div className="loader">
      <div className="loader__content">
        <h3>
          Loading
          {new Array(dots).fill('.').map((e) => e)}
        </h3>
        <img src={require(`../assets/${animation}.gif`)} alt={animation} />
      </div>
    </div>
  );
};

export default Loader;
