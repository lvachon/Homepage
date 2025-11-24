import React, {useEffect} from 'react';
import './home.css';

export function meta({}) {
  return [
    { title: "Luc Vachon (.com)" },
    { name: "description", content: "Luc Vachon's Personal Homepage" },
  ];
}

let backgrounds = [
  "url('/backgrounds/PulpitRock.jpg')",
  "url('/backgrounds/ALMilkyway.jpg')",
  "url('/backgrounds/Swamp.jpg')",
  "url('/backgrounds/Swamp2.jpg')",
  "url('/backgrounds/WachusettSpillway.jpg')",
  "url('/backgrounds/Trees.jpg')",
  "url('/backgrounds/Waves.jpg')",
  "url('/backgrounds/TauntonRiver.jpg')",
  "url('/backgrounds/WinterSunset.jpg')",
  "url('/backgrounds/CharlesSunset.jpg')",
  "url('/backgrounds/WinterComm.jpg')",
  "url('/backgrounds/CharlesSunset2.jpg')",
  "url('/backgrounds/HolyokeMt.jpg')",
  "url('/backgrounds/Sunset.jpg')",
  "url('/backgrounds/Beach.jpg')",
  "url('/backgrounds/Clouds.jpg')",
  "url('/backgrounds/AssonetBay.jpg')",
  "url('/backgrounds/Seals.jpg')",

];

function changeBackground(){
  let bg=null;
  let pbg=null;
  if(!(backgroundIndex%2)){
    bg = backgrounds[backgroundIndex];
    pbg = backgrounds[(backgroundIndex+1)%backgrounds.length];
    console.log({bg,pbg,backgroundIndex});
    pbody.style.backgroundImage = pbg;
    pbody.style.animation = 'fadeIn 1s 1';
    setTimeout(()=>{
      document.body.backgroundImage=bg;
      pbody.style.opacity = '1';
    },900);
  }else{
    pbg = backgrounds[backgroundIndex]
    bg = backgrounds[(backgroundIndex+1)%backgrounds.length]
    console.log({bg,pbg});

    document.body.style.backgroundImage = bg;
    pbody.style.animation = 'fadeOut 1s 1';
    setTimeout(()=>{
      pbody.backgroundImage=pbg;
      pbody.style.opacity = '0';
    },900);
  }
  backgroundIndex=(backgroundIndex+1)%backgrounds.length;
  setTimeout(changeBackground,10000);
}

useEffect(()=>{
    backgrounds.sort((a,b)=>Math.random()>0.5);
    let backgroundIndex=0;
},[]);

   

export default function Home() {
  return (
  <div class={'bgclass'}>
    <div class={`pbody bgclass`}/>

    <div class={'watermark'}>
      <a href={'https://www.LucVachon.com/'}>LucVachon.com</a>
    </div>

    <div class={'title'}>Luc Vachon</div>

    <div class={'categoryContainerV'}>
      <div class={'categoryContainerH'}>
        <button
          class={'category'}
          onClick={() => window.location.hash = "codeanchor"}
        >
          Code
        </button>
        <button class={'category'}>Images</button>
        <button class={'category'}>Machines</button>
      </div>
    </div>

    <div class={'subsection'} id="code">
      <h2>Code</h2>
      <ul>
        <li><a href="https://github.com/lvachon/">Github Projects</a></li>
        <li><a href="https://lucvachon.com/jsexp/">Javascript Experiments</a></li>
      </ul>
      <span id="codeanchor"></span>
    </div>
  </div>
  );
}
