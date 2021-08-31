import { useState } from 'react';
import './accordeon.scss';

/* eslint-disable-next-line */
export interface AccordeonProps {
title: string,
content: string,
open?: boolean,
}

export function Accordeon(props: AccordeonProps) {
const [open, setOpen] = useState(props.open ? true : false);

function accordeon__toggle(e : any) {
e.preventDefault();
  
  if (open) {
    setOpen(false)
  } else {
    setOpen(true)
  }
  console.log(open);
}
  
return (
    <div className="accordion">
            <div className="accordion__title" onClick={accordeon__toggle}>
                <span>{props.title}</span>
            </div>
            <div className="accordion__content" aria-expanded={!open}>
                {props.content}
            </div>
        </div>
);
}

export default Accordeon;
