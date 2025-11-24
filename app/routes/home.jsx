import React, { useEffect, useState, useRef } from 'react';
import DoubleBlend from '../DoubleBlend/DoubleBlend.jsx';
import Subsection from '../Subsection/Subsection.jsx';
import FloatingBox from '../FloatingBox/FloatingBox.jsx';
import './home.css';

export function meta({}) {
  return [
    { title: "Luc Vachon (.com)" },
    { name: "description", content: "Luc Vachon's Personal Homepage" },
  ];
}


export default ()=> {
  const [backgroundIndex,setBackgroundIndex] = useState(0);
  const [backgrounds, setBackgrounds] = useState([]);
  const timeout = useRef(null);
  const [bskyImages, setBskyImages] = useState([]);
  const codeElem = useRef();

  function changeBackground(){
    if(!backgrounds.length){return;}
    let bg=null;
    let pbg=null;
    if(!(backgroundIndex%2)){
      bg = backgrounds[backgroundIndex];
      pbg = backgrounds[(backgroundIndex+1)%backgrounds.length];
      console.log({bg,pbg,backgroundIndex,backgrounds});
      pbody.style.backgroundImage = pbg;
      pbody.style.animation = 'fadeIn 1s 1';
      setTimeout(()=>{
        mbody.backgroundImage=bg;
        pbody.style.opacity = '1';
      },900);
    }else{
      pbg = backgrounds[backgroundIndex]
      bg = backgrounds[(backgroundIndex+1)%backgrounds.length]
      console.log({bg,pbg});
      mbody.style.backgroundImage = bg;
      pbody.style.animation = 'fadeOut 1s 1';
      setTimeout(()=>{
        pbody.backgroundImage=pbg;
        pbody.style.opacity = '0';
      },900);
    }
    setBackgroundIndex((backgroundIndex)=>(backgroundIndex+1)%backgrounds.length);
    
  }
  useEffect(()=>{
    if(timeout.current){clearTimeout(timeout.current);}
    timeout.current = setTimeout(changeBackground,10000);
  },[backgroundIndex]);

  useEffect(()=>{
      let sbgs = [
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
      sbgs.sort((a,b)=>Math.random()-0.5);
      setBackgrounds(sbgs);
      fetch("https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=lvachon.bsky.social&filter=posts_with_media&limit=12").then(response=>response.json()).then(bskyData=>{
        console.log({bskyData});
        const bskyImages = bskyData.feed.reduce((accImages,{post:{embed,indexedAt}})=>{
          accImages=[...accImages,...embed.images.map((img)=>({...img,indexedAt}))];
          return accImages;
        },[]);
        console.log({bskyImages});
        setBskyImages(bskyImages);
      });
  },[]);
  useEffect(changeBackground,[backgrounds])



  return (
  <>
    <div id='mbody' class={'bgClass'} ></div>
    <div id='pbody' class={`pbody bgClass`} ></div>

    <div class={'watermark'}>
      <a href={'https://www.LucVachon.com/'}>LucVachon.com</a>
    </div>
    <div class={'categoryContainerH'}>
      <DoubleBlend bottomClass={'titleBottom'} topClass={'titleTop'} containerClass={'titleContainer'}>Luc Vachon</DoubleBlend>
    </div>
    <div class={'categoryContainerV'}>
      <div class={'categoryContainerH'}>
        
          <div class={`mainButtons`}>
            <DoubleBlend 
              bottomClass={'category'}
              topClass={'categoryText'}
              onClick={() => {window.scrollTo(0,images.offsetTop);}}>
              Images
            </DoubleBlend>
            <DoubleBlend
              bottomClass={'category'}
              topClass={'categoryText'}
              onClick={() => {window.scrollTo(0,code.offsetTop);}}>
              Code
            </DoubleBlend>
            <DoubleBlend 
              bottomClass={'category'}
              topClass={'categoryText'}
              onClick={() => window.location.hash='machines'}>
              Machines
            </DoubleBlend>
          </div>
        
        
          
        
      </div>
    </div>
    <div class={'sections'}>
      <Subsection 
        title={"Code"}
        subtitle={"Some side projects I've done over the years."}
        id={"code"}
        anchorId={"code"}
      >
        <FloatingBox
          title={"MBTA Live Tracker"}
          lang={"JS"}
          imgSrc={"/images/code/TBoard.png"}
          link={"https://lucvachon.com/MBTA_Board.html"}
          srcLink={"https://github.com/lvachon/MBTABoard"}
          srcFavicon={"https://github.com/favicon.ico"}
          srcAlt={"GitHub"}
        />

        <FloatingBox
          title={"Godot Slots"}
          lang={"Godot"}
          imgSrc={"/images/code/GodotSlots.png"}
          link={"https://github.com/lvachon/GodotSlots/tree/main"}
          srcLink={"https://github.com/lvachon/GodotSlots/tree/main"}
          srcFavicon={"https://github.com/favicon.ico"}
          srcAlt={"GitHub"}
        />

        <FloatingBox
          title={"Multiplayer Mystery Chess"}
          lang={"JS"}
          imgSrc={"/images/code/MysteryChess.png"}
          link={"https://lucvachon.com/mystery_chess/"}
          srcLink={"https://github.com/lvachon/mystery_chess/tree/master"}
          srcFavicon={"https://github.com/favicon.ico"}
          srcAlt={"GitHub"}
        />

        <FloatingBox
          title={"Dragon Curve"}
          lang={"JS"}
          imgSrc={"/images/code/DragonFold.png"}
          link={"https://lucvachon.com/JSExp/fold/fold.html"}
          srcLink={"https://en.wikipedia.org/wiki/Dragon_curve"}
          srcFavicon={"https://wikipedia.com/favicon.ico"}
          srcAlt={"Wikipedia"}
        />

        <FloatingBox
          title={"Random Cellular Automata"}
          lang={"JS"}
          imgSrc={"/images/code/RandomCA.png"}
          link={"https://lucvachon.com/JSExp/CA/index.html"}
          srcLink={"https://en.wikipedia.org/wiki/Cellular_automaton"}
          srcFavicon={"https://wikipedia.com/favicon.ico"}
          srcAlt={"Wikipedia"}
        />

        <FloatingBox
          title={"Mandelbrot Fractal"}
          lang={"JS"}
          imgSrc={"/images/code/Mandelbrot.png"}
          link={"https://lucvachon.com/JSExp/Mandelbrot/mandelbrot.html"}
          srcLink={"https://en.wikipedia.org/wiki/Mandelbrot_set"}
          srcFavicon={"https://wikipedia.com/favicon.ico"}
          srcAlt={"Wikipedia"}
        />

        <FloatingBox
          title={"Lorentz Attractor"}
          lang={"JS"}
          imgSrc={"/images/code/Lorentz.png"}
          link={"https://lucvachon.com/JSExp/Lorentz/lorentz.html"}
          srcLink={"https://en.wikipedia.org/wiki/Lorenz_system"}
          srcFavicon={"https://wikipedia.com/favicon.ico"}
          srcAlt={"Wikipedia"}
        />

        <FloatingBox
          title={"Tower Defense"}
          lang={"JS"}
          imgSrc={"/images/code/TowerDefense.png"}
          link={"https://lucvachon.com/JSExp/towerdefense/index.html"}
          srcLink={"https://en.wikipedia.org/wiki/Tower_defense"}
          srcFavicon={"https://wikipedia.com/favicon.ico"}
          srcAlt={"Wikipedia"}
        />

        <FloatingBox
          title={"Pseudo Plasma FX"}
          lang={"JS"}
          imgSrc={"/images/code/PlasmaEffect.png"}
          link={"https://lucvachon.com/JSExp/colorwhat/colorwhat.html"}
          srcLink={"https://en.wikipedia.org/wiki/Plasma_effect"}
          srcFavicon={"https://wikipedia.com/favicon.ico"}
          srcAlt={"Wikipedia"}
        />


      </Subsection>
      <Subsection 
        title={"Images"}
        subtitle={"Some nice pictures and videos I've taken"}
        id={"images"}
        anchorId={"images"}
      >
        {bskyImages.map(({thumb,fullsize,indexedAt},index)=>{
          const d = new Date(Date.parse(indexedAt));
          if(index<12){ 
            return(
              <FloatingBox
                imgSrc={thumb}
                link={fullsize}
                title={d.toLocaleString("en-US",{"year":"numeric","month":"long",day:"numeric",hour:undefined,minute:undefined,second:undefined})}
                lang="Photo"
                srcLink={"https://bsky.app/profile/lvachon.bsky.social"}
                srcFavicon={"https://lucvachon.com/bskyicon.png"}
                srcAlt={"Bluesky"}
              />
            )
          }
        })}
      </Subsection>
    </div>
    
  </>
  );
}
