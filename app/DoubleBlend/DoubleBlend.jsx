import React from 'react';
import './doubleBlend.css';

export default ({children,bottomClass,containerClass,topClass,onClick})=>{
	return (
		<div class={`dblBlendContainer ${containerClass && containerClass}`} tabIndex={0} onClick={onClick}>
			<div class={`dblBlendBottom  ${bottomClass}`}>
				{children}
			</div>
			<div class={`dblBlendTop ${topClass}`}>
				{children}
			</div>
		</div>
	)
}