import React from 'react';
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

export const Loader: React.FC = () => {
  const animation =
    possibilities[Math.floor(Math.random() * possibilities.length)];
  console.log(animation);
  return (
    <div className="loader">
      <img src={require(`../assets/${animation}.gif`)} alt={animation} />
    </div>
  );
};

export default Loader;
