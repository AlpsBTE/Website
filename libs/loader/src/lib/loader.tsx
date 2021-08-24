/* eslint-disable */
import './loader.module.scss';

export interface LoaderProps {}

export const Loader = (props: LoaderProps) => {
  return (
    <div className="loader">
      <h1>Loading...</h1>
    </div>
  );
};

export default Loader;
