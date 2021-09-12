/* eslint-disable */
import { ReactNode } from 'react';
import './home-content-section.scss';

export interface HomeContentSectionProps {
  title: string;
  image: string;
  isImageAlignedLeft: boolean;
  children: ReactNode;
}

export const HomeContentSection = ({
  title = 'Title',
  image,
  isImageAlignedLeft = true,
  children,
}: HomeContentSectionProps) => {
  return (
    <section
      className={`home-content-section ${
        !isImageAlignedLeft && 'home-content-section__aligned-right'
      }`}
    >
      <div className="home-content-section__image-container">
        <img
          src={image}
          alt={title}
          className="home-content-section__image-container__image"
        />
      </div>
      <div className="home-content-section__text-container">
        <h2 className="home-content-section__text-container__title">{title}</h2>
        <article className="home-content-section__text-container__text">
          {children}
        </article>
      </div>
    </section>
  );
};

export default HomeContentSection;
