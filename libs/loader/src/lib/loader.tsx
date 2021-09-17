/* eslint-disable */
import './loader.scss';
import React from 'react';

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
  return (
    <div className={`loader`}>
      <div className="loader__content">
        <h2>Loading</h2>
        <img src={require(`../assets/${animation}.gif`)} alt={animation} />
      </div>
    </div>
  );
};

export default Loader;
