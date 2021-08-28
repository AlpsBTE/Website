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

function accordeon__handleClick(e : any) {
e.preventDefault();
  
  if (open) {
    setOpen(false)
  } else {
    setOpen(true)
  }
  console.log(open);
}
  
return (
    <div className='accordeon'>
    <button onClick={accordeon__handleClick} className="accordeon__container">
    <div className="accordeon__container">
      <p>{props.title}</p>
    </div>
    </button>
      <div className="accordeon__content" style={{display: open ? 'inline' : 'none'}}>
        <p>{props.content}</p>
    </div>
      
   
    </div>
      
);
}

export default Accordeon;
