import React from 'react';
import './Subsection.css';

export default ({title,id,children,anchorid,ref,subtitle})=>{
	return (
	<div class={`subsection`} id={id} rel={ref}>
        <div class='x' onClick={()=>{window.scrollTo(0,0);}} tabindex={0} alt={"Back to top"}>X</div>
		<span id={anchorid}></span>
        <h2>{title}</h2>
        {subtitle && (
        	<div class='subtitle'>{subtitle}</div>
        )}
        <p>
          {children}
        </p>
        
  	</div>
     )
}