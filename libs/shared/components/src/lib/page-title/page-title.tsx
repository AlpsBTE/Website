import React from 'react';
import './page-title.scss';
import { apiUrl } from '@alpsbte/shared/config';

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
  image = `${apiUrl}/api/assets/header/0.png`,
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
