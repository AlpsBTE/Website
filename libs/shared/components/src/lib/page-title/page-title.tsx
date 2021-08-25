import './page-title.scss';

/* eslint-disable-next-line */
export interface PageTitleProps {
  title: string,
  subtitle: string,
  showImage?: boolean,
  image?: string,
}

export function PageTitle(props: PageTitleProps) {
  return (
    <div className="page-title">
      {props.showImage === true &&
        <div className="page-title__image">
      <img src={props.image} alt="Page Titlepicture" />
    </div>
}
      <h1 className="page-title__title">{props.title}</h1>
      <h2 className="page-title__subtitle">{props.subtitle}</h2>
    </div>
  );
}


PageTitle.defaultProps = {
  showImage: true,
  image: "IMAGE LINK"
}

export default PageTitle;
