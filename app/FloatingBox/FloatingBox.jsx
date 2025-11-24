import React from 'react';
import './FloatingBox.css';

export default ({imgSrc,title,link,srcLink,srcFavicon,lang,srcAlt})=>{
	
	return (
		<div class='floatingBox'>
          <a href={link}>
            <img src={imgSrc}/>
          </a>
          <div class='worktitle'>
            <a href={link}>
              {title} - <i>{lang}</i>
            </a>
            <a class='srclink' href={srcLink}>
              <img src={srcFavicon} alt={srcAlt}/>
            </a>
          </div>
        </div>
	)
}