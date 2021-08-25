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
      
      <img className="page-title__image" src={props.image} alt="Page Titlepicture" />
   
}
      <h1 className="page-title__title">{props.title}</h1>
      <h2 className="page-title__subtitle">{props.subtitle}</h2>
    </div>
  );
}


PageTitle.defaultProps = {
  showImage: true,
  image: "https://via.placeholder.com/1000",

}

export default PageTitle;
