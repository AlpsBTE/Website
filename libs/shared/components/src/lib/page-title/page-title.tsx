import './page-title.scss';

export interface PageTitleProps {
  title: string;
  subtitle?: string;
  showImage?: boolean;
  image?: string;
}

export const PageTitle = ({
  title,
  subtitle,
  showImage = true,
  image = 'https://via.placeholder.com/1000',
}: PageTitleProps) => {
  return (
    <div className="page-title">
      {showImage === true && (
        <img
          className="page-title__image"
          src={image}
          alt="Page Titlepicture"
        />
      )}
      <h1 className="page-title__title">{title}</h1>
      {subtitle ? <p className="page-title__subtitle">{subtitle}</p> : ''}
    </div>
  );
};

export default PageTitle;
