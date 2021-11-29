import './rt.scss';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { tr } from '@alpsbte/shared/language';

/* eslint-disable-next-line */
export interface RtProps {
  p: any; // get correct time in the future
}

export function Rt(props: RtProps) {
  const markdown = tr(props.p);
  return <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />;
}

export default Rt;
