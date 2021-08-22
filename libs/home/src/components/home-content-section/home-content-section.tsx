import './home-content-section.scss';

/* eslint-disable-next-line */
export interface HomeContentSectionProps {
  title: string;
  children: string;
  alignment: 'left' | 'center' | 'right';
  image: never | string;
}

export function HomeContentSection(props: HomeContentSectionProps) {
  const alignFlexItems: 'flex-start' | 'center' | 'flex-end' =
    props.alignment === 'left'
      ? 'flex-start'
      : props.alignment === 'center'
      ? 'center'
      : 'flex-end';

  return (
    <section
      className="home-content-section"
      style={{ flexDirection: props.alignment === 'center' ? 'column' : 'row' }}
    >
      <div className="home-content-section__image-container">
        <img
          src={props.image}
          alt={props.title}
          className="home-content-section__image-container__image"
        />
      </div>
      <div
        className="home-content-section__text-container"
        style={{ textAlign: props.alignment, alignItems: alignFlexItems }}
      >
        <header className="home-content-section__text-container__title">
          {props.title}
        </header>
        <article className="home-content-section__text-container__text">
          {props.children}
        </article>
      </div>
    </section>
  );
}

export default HomeContentSection;
