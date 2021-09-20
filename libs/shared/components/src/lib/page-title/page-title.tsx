import React from 'react';
import './page-title.scss';

export interface PageTitleProps {
  title: string;
  subtitle?: string;
  showImage?: boolean;
  image?: string;
  className?: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subtitle,
  showImage = true,
  image = 'https://cdn.discordapp.com/splashes/696795397376442440/40095e7ba07bfa5b4b22f81c4c662ec5.jpg?size=3072',
  className = '',
}: PageTitleProps) => {
  return (
    <div className={`page-title ${className}`}>
      {showImage === true && (
        <img
          className="page-title__image"
          src={image}
          alt="Page Titlepicture"
        />
      )}
      <h1 className="page-title__title">{title}</h1>
      {subtitle && <p className="page-title__subtitle">{subtitle}</p>}
    </div>
  );
};

export default PageTitle;
