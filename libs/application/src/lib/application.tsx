import './application.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ApplicationProps {}

export function Application(props: ApplicationProps) {
  return (
    <div>
      <h1>Welcome to Application!</h1>
    </div>
  );
}

export default Application;
