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

export const Loader: React.FC = () => {
  const [isMounted, setIsMounted] = useState(true);
  const shouldRenderChild = useDelayUnmount(isMounted, 500);
  const mountedStyle = { opacity: 1, transition: 'opacity 500ms ease-in' };
  const unmountedStyle = { opacity: 0, transition: 'opacity 500ms ease-in' };

  useEffect(() => {
    setIsMounted(true);
    return setIsMounted(false);
  }, [isMounted]);

  const animation =
    possibilities[Math.floor(Math.random() * possibilities.length)];

  return (
    <>
      {shouldRenderChild && (
        <div
          className="loader"
          style={isMounted ? mountedStyle : unmountedStyle}
        >
          <img src={require(`../assets/${animation}.gif`)} alt={animation} />
        </div>
      )}
    </>
  );
};

export default Loader;
