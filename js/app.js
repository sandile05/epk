
/*════════════════════════════════════════════════════════
  ██████╗ ██╗   ██╗██╗  ██╗███╗   ██╗
  ██╔══██╗╚██╗ ██╔╝╚██╗██╔╝████╗  ██║
  ██████╔╝ ╚████╔╝  ╚███╔╝ ██╔██╗ ██║
  ██╔══██╗  ╚██╔╝   ██╔██╗ ██║╚██╗██║
  ██║  ██║   ██║   ██╔╝ ██╗██║ ╚████║
  ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝
  CONFIG — EDIT ALL CONTENT BELOW
════════════════════════════════════════════════════════*/

/* ─────────────────────────────────────────────────────
   PERFORMANCES CONFIG (Music Tab)
   type:  "youtube" → set src to YouTube video ID
          "file"    → set src to local video file path e.g. "videos/set.mp4"
   thumb: path or URL to your own thumbnail image
          leave "" to use CSS gradient placeholder
───────────────────────────────────────────────────── */
const PERFORMANCES = [
  {
    title: "No Signal — Live at Bassline",
    venue: "Bassline, Newtown · JHB",
    date:  "March MMXXVI",
    thumb: "",              // ← YOUR THUMBNAIL IMAGE PATH
    type:  "youtube",
    src:   "dQw4w9WgXcQ"   // ← YOUTUBE VIDEO ID
  },
  {
    title: "Concrete — Freestyle Session",
    venue: "Studio, Braamfontein",
    date:  "January MMXXVI",
    thumb: "",              // ← YOUR THUMBNAIL IMAGE PATH
    type:  "youtube",
    src:   "dQw4w9WgXcQ"   // ← YOUTUBE VIDEO ID  (or use type:"file" + src:"videos/x.mp4")
  },
  {
    title: "Motion Tape — Full Set",
    venue: "CRSSD Festival, Cape Town",
    date:  "November MMXXV",
    thumb: "",              // ← YOUR THUMBNAIL IMAGE PATH
    type:  "youtube",
    src:   "dQw4w9WgXcQ"   // ← YOUTUBE VIDEO ID
  },
  {
    title: "Jozi After Dark — Live",
    venue: "Maboneng, JHB",
    date:  "September MMXXV",
    thumb: "",              // ← YOUR THUMBNAIL IMAGE PATH
    type:  "file",
    src:   ""               // ← LOCAL VIDEO FILE PATH e.g. "videos/jozi-live.mp4"
  }
];

/* ─────────────────────────────────────────────────────
   YOUTUBE CONFIG (YouTube Tab)
   thumb: path or URL to your own thumbnail image
   vid:   YouTube video ID
───────────────────────────────────────────────────── */
const VIDEOS = [
  {
    featured: true,
    title: "No Signal — Official Video",
    meta:  "1.4M views · MMXXVI",
    thumb: "",              // ← YOUR THUMBNAIL IMAGE PATH
    vid:   "dQw4w9WgXcQ"   // ← YOUTUBE VIDEO ID
  },
  {
    title: "Jozi After Dark",
    meta:  "820K views · MMXXVI",
    thumb: "",              // ← YOUR THUMBNAIL IMAGE PATH
    vid:   "dQw4w9WgXcQ"   // ← YOUTUBE VIDEO ID
  },
  {
    title: "Motion (Live Session)",
    meta:  "560K views · MMXXV",
    thumb: "",              // ← YOUR THUMBNAIL IMAGE PATH
    vid:   "dQw4w9WgXcQ"   // ← YOUTUBE VIDEO ID
  },
  {
    title: "Concrete (Director's Cut)",
    meta:  "340K views · MMXXIV",
    thumb: "",              // ← YOUR THUMBNAIL IMAGE PATH
    vid:   "dQw4w9WgXcQ"   // ← YOUTUBE VIDEO ID
  }
];

/* ─────────────────────────────────────────────────────
   PHOTOSHOOTS CONFIG (film strip — top row)
   src:     path or URL to image, leave "" for placeholder
   caption: text shown on hover
───────────────────────────────────────────────────── */
const PHOTOSHOOTS = [
  { src: "", caption: "Editorial 01 — Downtown JHB" },
  { src: "", caption: "Studio Session — Braamfontein" },
  { src: "", caption: "Press Shoot — MMXXVI" },
  { src: "", caption: "Look Book Vol.1" },
  { src: "", caption: "Magazine Feature" },
  { src: "", caption: "Campaign — Street" },
  { src: "", caption: "Portrait Series 01" },
  { src: "", caption: "Behind The Scenes" },
  { src: "", caption: "Editorial 02 — Maboneng" },
  { src: "", caption: "Studio — Low Light" }
];

/* ─────────────────────────────────────────────────────
   STREET PHOTOS CONFIG (grid — bottom)
   src:     path or URL to image, leave "" for placeholder
   caption: always visible below photo
───────────────────────────────────────────────────── */
const STREET_PHOTOS = [
  { src: "", caption: "Noord Taxi Rank, 6AM" },
  { src: "", caption: "Hillbrow — After Rain" },
  { src: "", caption: "Soweto, Golden Hour" },
  { src: "", caption: "Ponte Tower" },
  { src: "", caption: "Park Station" },
  { src: "", caption: "Maboneng, Sunday" },
  { src: "", caption: "Braamfontein Wall" },
  { src: "", caption: "Diagonal Street" },
  { src: "", caption: "Ellis Park, Night" },
  { src: "", caption: "Commissioner St" },
  { src: "", caption: "Newtown Junction" },
  { src: "", caption: "Market Theatre Steps" }
];

/*════════════════════════════════════════════════════════
  CORE — do not edit below unless you know what you're doing
════════════════════════════════════════════════════════*/

/* ─── PLACEHOLDER GRADIENTS ──────────────────────── */
const GRADS = [
  'linear-gradient(160deg,#0a0a0a 30%,#1a1a1a)',
  'radial-gradient(ellipse 60% 80% at 40% 30%,#333,#090909)',
  'linear-gradient(90deg,#050505,#222 50%,#0c0c0c)',
  'radial-gradient(ellipse at 70% 20%,#3a3a3a,#101010 60%,#060606)',
  'linear-gradient(210deg,#1c1c1c,#070707)',
  'radial-gradient(circle at 30% 60%,#2a2a2a,#060606 70%)',
  'repeating-linear-gradient(0deg,#0a0a0a 0px,#0a0a0a 6px,#181818 6px,#181818 7px)',
  'linear-gradient(135deg,#111,#2e2e2e 50%,#111)',
  'radial-gradient(ellipse 100% 40% at 50% 80%,#222,#060606)',
  'linear-gradient(45deg,#080808,#1f1f1f)',
  'repeating-linear-gradient(90deg,#0d0d0d 0px,#0d0d0d 18px,#181818 18px,#181818 19px)',
  'radial-gradient(circle at 50% 50%,#272727,#0a0a0a)'
];

/* ─── LOADER ──────────────────────────────────────── */
const loader=document.getElementById('loader'),lfBar=document.getElementById('lf');
let prog=0;
const ldInt=setInterval(()=>{
  prog+=Math.random()*20;
  if(prog>=100){prog=100;clearInterval(ldInt);setTimeout(()=>loader.classList.add('gone'),280);}
  lfBar.style.width=prog+'%';
},75);

/* ─── GRAIN ──────────────────────────────────────── */
(function(){
  const c=document.createElement('canvas');c.width=c.height=256;
  const ctx=c.getContext('2d'),img=ctx.createImageData(256,256);
  for(let i=0;i<img.data.length;i+=4){const v=Math.random()*255|0;img.data[i]=img.data[i+1]=img.data[i+2]=v;img.data[i+3]=Math.random()*36|0;}
  ctx.putImageData(img,0,0);
  document.getElementById('grain').style.backgroundImage=`url(${c.toDataURL()})`;
})();

/* ─── CURSOR ─────────────────────────────────────── */
const cd=document.getElementById('cd'),cr=document.getElementById('cr');
let mx=-100,my=-100,rx=-100,ry=-100,lastX=0,lastY=0,lastT=0;
document.addEventListener('mousemove',e=>{
  mx=e.clientX;my=e.clientY;
  cd.style.left=mx+'px';cd.style.top=my+'px';
  const now=Date.now(),spd=Math.hypot(mx-lastX,my-lastY);
  if(spd>20&&now-lastT>28){
    for(let i=0,cnt=Math.min(4,spd/12|0);i<cnt;i++){
      const s=document.createElement('div');s.className='spray';
      const sz=Math.random()*4+2;
      s.style.cssText=`left:${mx+(Math.random()-.5)*22}px;top:${my+(Math.random()-.5)*22}px;width:${sz}px;height:${sz}px;background:${Math.random()>.5?'#C8000A':'rgba(232,228,220,.35)'};`;
      document.body.appendChild(s);setTimeout(()=>s.remove(),650);
    }
    lastT=now;
  }
  lastX=mx;lastY=my;
});
(function loop(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;cr.style.left=rx+'px';cr.style.top=ry+'px';requestAnimationFrame(loop);})();
function cursorBig(){cd.style.transform='translate(-50%,-50%) scale(2.2)';cr.style.opacity='.2';}
function cursorNorm(){cd.style.transform='translate(-50%,-50%) scale(1)';cr.style.opacity='.55';}
document.querySelectorAll('a,button,.art-item,.id-tag,.v-tab,.yt-card,.yt-feat-wrap,.sgf,.sf,.pull-quote,.perf-item,.perf-feat').forEach(el=>{
  el.addEventListener('mouseenter',cursorBig);el.addEventListener('mouseleave',cursorNorm);
});

/* ─── THREE.JS HERO ──────────────────────────────── */
const hCanvas=document.getElementById('hc');
const renderer=new THREE.WebGLRenderer({canvas:hCanvas,alpha:true,antialias:false});
renderer.setSize(innerWidth,innerHeight);renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setClearColor(0,0);
const scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(65,innerWidth/innerHeight,.1,1000);
cam.position.z=60;
const NE=100,eGeo=new THREE.BufferGeometry(),eP=new Float32Array(NE*3),eV=new Float32Array(NE*3);
for(let i=0;i<NE;i++){eP[i*3]=(Math.random()-.5)*120;eP[i*3+1]=(Math.random()-.5)*80-20;eP[i*3+2]=(Math.random()-.5)*30;eV[i*3]=(Math.random()-.5)*.04;eV[i*3+1]=Math.random()*.09+.025;}
eGeo.setAttribute('position',new THREE.BufferAttribute(eP,3));
const embers=new THREE.Points(eGeo,new THREE.PointsMaterial({color:0xC8000A,size:.65,transparent:true,opacity:.55,sizeAttenuation:true,depthWrite:false}));
scene.add(embers);
const NA=360,aGeo=new THREE.BufferGeometry(),aP=new Float32Array(NA*3),aV=new Float32Array(NA*3);
for(let i=0;i<NA;i++){aP[i*3]=(Math.random()-.5)*160;aP[i*3+1]=(Math.random()-.5)*100;aP[i*3+2]=(Math.random()-.5)*40;aV[i*3]=(Math.random()-.5)*.022;aV[i*3+1]=Math.random()*.04+.005;}
aGeo.setAttribute('position',new THREE.BufferAttribute(aP,3));
const ash=new THREE.Points(aGeo,new THREE.PointsMaterial({color:0x888888,size:.35,transparent:true,opacity:.16,sizeAttenuation:true,depthWrite:false}));
scene.add(ash);
let tCX=0,tCY=0,cX=0,cY=0;
document.addEventListener('mousemove',e=>{tCX=((e.clientX/innerWidth)-.5)*6;tCY=-((e.clientY/innerHeight)-.5)*4;});
let heroVis=true;
new IntersectionObserver(e=>{heroVis=e[0].isIntersecting;},{threshold:0}).observe(document.getElementById('hero'));
(function animHero(){
  requestAnimationFrame(animHero);if(!heroVis)return;
  cX+=(tCX-cX)*.04;cY+=(tCY-cY)*.04;cam.position.x=cX;cam.position.y=cY;cam.lookAt(0,0,0);
  for(let i=0;i<NE;i++){eP[i*3]+=eV[i*3];eP[i*3+1]+=eV[i*3+1];if(eP[i*3+1]>56){eP[i*3]=(Math.random()-.5)*120;eP[i*3+1]=-52;}if(Math.abs(eP[i*3])>66)eV[i*3]*=-1;}
  eGeo.attributes.position.needsUpdate=true;
  for(let i=0;i<NA;i++){aP[i*3]+=aV[i*3];aP[i*3+1]+=aV[i*3+1];if(aP[i*3+1]>62){aP[i*3]=(Math.random()-.5)*160;aP[i*3+1]=-58;}}
  aGeo.attributes.position.needsUpdate=true;
  embers.rotation.y+=.00022;ash.rotation.y-=.00009;
  renderer.render(scene,cam);
})();
window.addEventListener('resize',()=>{cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});

/* ─── SCROLL ─────────────────────────────────────── */
const btt=document.getElementById('btt');
const pwords=document.querySelectorAll('.pword[data-speed]');
const heroBgImg=document.getElementById('heroBgImg');
const idBgImg=document.getElementById('idBgImg');
const archBgImg=document.getElementById('archBgImg');
function onScroll(){
  const sy=window.scrollY;
  btt.classList.toggle('show',sy>400);
  document.getElementById('nav').classList.toggle('scrolled',sy>60);
  // Parallax words
  pwords.forEach(el=>{
    const sect=el.closest('section');if(!sect)return;
    const rect=sect.getBoundingClientRect();
    el.style.transform=`translateY(${(innerHeight-rect.top)*parseFloat(el.dataset.speed)}px)`;
  });
  // Vinyl parallax
  document.querySelectorAll('.vw').forEach((v,i)=>{
    v.style.transform=`translateY(${sy*(0.022+i*.007)*(i%2===0?1:-1)}px)`;
  });
  // Hero bg parallax — translate only, no extra scale needed
  if(heroBgImg){heroBgImg.style.transform=`translateY(${sy*0.22}px)`;}
  // Identity bg parallax
  if(idBgImg){
    const idRect=document.getElementById('identity').getBoundingClientRect();
    idBgImg.style.transform=`translateY(${-idRect.top*0.18}px)`;
  }
  // Archive bg parallax
  if(archBgImg){
    const aRect=document.getElementById('archive').getBoundingClientRect();
    archBgImg.style.transform=`translateY(${-aRect.top*0.15}px)`;
  }
}
window.addEventListener('scroll',onScroll,{passive:true});

/* ─── REVEALS ────────────────────────────────────── */
const revObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');revObs.unobserve(e.target);}});
},{threshold:.14,rootMargin:'0px 0px -36px 0px'});
document.querySelectorAll('.reveal').forEach(el=>revObs.observe(el));
const lineObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('.stag-inner').forEach((el,i)=>{el.style.animationDelay=i*.13+'s';el.classList.add('in');});lineObs.unobserve(e.target);}});
},{threshold:.3});
document.querySelectorAll('.id-stmt').forEach(el=>lineObs.observe(el));

/* ─── HERO META CYCLE ───────────────────────────── */
const metaSpans=document.querySelectorAll('.hero-meta span');let mi=0;
setInterval(()=>{metaSpans.forEach(s=>s.classList.remove('on'));mi=(mi+1)%metaSpans.length;metaSpans[mi].classList.add('on');},2200);

/* ─── VAULT TABS ─────────────────────────────────── */
document.querySelectorAll('.v-tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    document.querySelectorAll('.v-tab').forEach(t=>t.classList.remove('on'));
    document.querySelectorAll('.v-panel').forEach(p=>p.classList.remove('on'));
    tab.classList.add('on');
    document.querySelector(`.v-panel[data-tab="${tab.dataset.tab}"]`).classList.add('on');
    if(tab.dataset.tab==='photos')buildPhotos();
  });
});

/* ─── BUILD PERFORMANCES ─────────────────────────── */
(function buildPerf(){
  const panel=document.getElementById('perfPanel');
  const layout=document.createElement('div');layout.className='perf-layout';

  /* Featured — wrap enforces 16:9 via padding-top trick */
  const featWrap=document.createElement('div');featWrap.className='perf-feat-wrap';
  const featSizer=document.createElement('div');featSizer.className='perf-feat-sizer';
  const feat=document.createElement('div');feat.className='perf-feat';
  const p0=PERFORMANCES[0];
  feat.innerHTML=`
    <div class="perf-feat-thumb">
      <div class="perf-feat-fallback"></div>
      ${p0.thumb?`<img class="perf-feat-img" src="${p0.thumb}" alt="${p0.title}" onerror="this.style.display='none'"/>`:''}
    </div>
    <div class="perf-feat-vignette"></div>
    <div class="perf-play"></div>
    <div class="perf-feat-info">
      <div class="perf-feat-lbl">Featured Performance</div>
      <div class="perf-feat-title" id="perfFeatTitle">${p0.title}</div>
      <div class="perf-feat-venue" id="perfFeatVenue">${p0.venue} · ${p0.date}</div>
    </div>`;

  let activeSrc=p0.src,activeType=p0.type;
  feat.addEventListener('click',()=>{
    if(feat.querySelector('.perf-embed'))return;
    const wrap=document.createElement('div');wrap.className='perf-embed';
    if(activeType==='youtube'){
      const ifr=document.createElement('iframe');
      ifr.src=`https://www.youtube-nocookie.com/embed/${activeSrc}?autoplay=1&rel=0&modestbranding=1`;
      ifr.allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture';
      ifr.allowFullscreen=true;wrap.appendChild(ifr);
    } else {
      const vid=document.createElement('video');
      vid.src=activeSrc;vid.controls=true;vid.autoplay=true;vid.style.cssText='width:100%;height:100%;object-fit:cover;background:#000';
      wrap.appendChild(vid);
    }
    const cls=document.createElement('div');cls.className='perf-close';cls.textContent='✕';
    cls.addEventListener('click',e=>{e.stopPropagation();wrap.remove();});
    wrap.appendChild(cls);
    feat.appendChild(wrap);
  });

  featSizer.appendChild(feat);
  featWrap.appendChild(featSizer);

  /* Queue */
  const queue=document.createElement('div');queue.className='perf-queue';
  PERFORMANCES.forEach((p,i)=>{
    const item=document.createElement('div');item.className='perf-item'+(i===0?' active':'');
    item.innerHTML=`
      <div class="perf-item-thumb">
        <div class="perf-item-fallback"></div>
        ${p.thumb?`<img class="perf-item-img" src="${p.thumb}" alt="${p.title}" onerror="this.style.display='none'"/>`:''}
        <div class="perf-item-play"><div class="perf-item-play-icon"></div></div>
      </div>
      <div class="perf-item-info">
        <div class="perf-item-title">${p.title}</div>
        <div class="perf-item-venue">${p.venue}</div>
        <div class="perf-item-date">${p.date}</div>
      </div>`;
    item.addEventListener('click',()=>{
      // Remove existing embed
      const existing=feat.querySelector('.perf-embed');if(existing)existing.remove();
      // Update featured info
      document.getElementById('perfFeatTitle').textContent=p.title;
      document.getElementById('perfFeatVenue').textContent=`${p.venue} · ${p.date}`;
      // Update thumbnail
      const oldImg=feat.querySelector('.perf-feat-img');if(oldImg)oldImg.remove();
      if(p.thumb){const img=document.createElement('img');img.className='perf-feat-img';img.src=p.thumb;img.alt=p.title;img.onerror=function(){this.style.display='none'};feat.querySelector('.perf-feat-thumb').appendChild(img);}
      // Update active src
      activeSrc=p.src;activeType=p.type;
      // Autoplay
      const wrap=document.createElement('div');wrap.className='perf-embed';
      if(p.type==='youtube'){
        const ifr=document.createElement('iframe');
        ifr.src=`https://www.youtube-nocookie.com/embed/${p.src}?autoplay=1&rel=0&modestbranding=1`;
        ifr.allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture';
        ifr.allowFullscreen=true;wrap.appendChild(ifr);
      } else if(p.src){
        const vid=document.createElement('video');vid.src=p.src;vid.controls=true;vid.autoplay=true;vid.style.cssText='width:100%;height:100%;object-fit:cover;background:#000';wrap.appendChild(vid);
      }
      if(p.src){
        const cls=document.createElement('div');cls.className='perf-close';cls.textContent='✕';
        cls.addEventListener('click',e=>{e.stopPropagation();wrap.remove();});
        wrap.appendChild(cls);feat.appendChild(wrap);
      }
      // Active state
      queue.querySelectorAll('.perf-item').forEach(it=>it.classList.remove('active'));
      item.classList.add('active');
      item.scrollIntoView({block:'nearest',behavior:'smooth'});
    });
    queue.appendChild(item);
  });

  layout.appendChild(featWrap);layout.appendChild(queue);
  panel.appendChild(layout);
})();

/* ─── BUILD YOUTUBE ──────────────────────────────── */
(function buildYT(){
  const panel=document.getElementById('ytPanel');
  const featured=VIDEOS.find(v=>v.featured);
  const cards=VIDEOS.filter(v=>!v.featured);

  if(featured){
    const fw=document.createElement('div');fw.className='yt-feat-wrap';fw.dataset.vid=featured.vid;
    fw.innerHTML=`
      <div class="yt-feat-thumb" id="ytFeatThumb">
        <div class="yt-thumb-fallback"></div>
        ${featured.thumb?`<img class="yt-thumb-img" src="${featured.thumb}" alt="${featured.title}" onerror="this.style.display='none'"/>`:''}
        <div class="yt-feat-overlay"><div class="yt-play-big"></div></div>
        <div class="yt-feat-bottom">
          <div class="yt-feat-lbl">Featured Visual</div>
          <div class="yt-feat-title">${featured.title}</div>
          <div class="yt-feat-stats">${featured.meta}</div>
        </div>
      </div>`;
    fw.querySelector('.yt-feat-thumb').addEventListener('click',()=>{
      if(fw.querySelector('iframe'))return;
      const wrap=document.createElement('div');wrap.className='yt-embed';
      const ifr=document.createElement('iframe');
      ifr.src=`https://www.youtube-nocookie.com/embed/${featured.vid}?autoplay=1&rel=0&modestbranding=1`;
      ifr.allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture';ifr.allowFullscreen=true;
      wrap.appendChild(ifr);
      const cls=document.createElement('div');cls.className='yt-close';cls.textContent='✕';
      cls.addEventListener('click',e=>{e.stopPropagation();wrap.remove();});
      wrap.appendChild(cls);fw.style.position='relative';fw.appendChild(wrap);
    });
    panel.appendChild(fw);
  }

  const grid=document.createElement('div');grid.className='yt-grid';
  cards.forEach((v,i)=>{
    const card=document.createElement('div');card.className='yt-card';card.dataset.vid=v.vid;
    card.innerHTML=`
      <div class="yt-card-thumb">
        <div class="yt-card-fallback" style="background:${GRADS[i%GRADS.length]}"></div>
        ${v.thumb?`<img class="yt-card-img" src="${v.thumb}" alt="${v.title}" onerror="this.style.display='none'"/>`:''}
        <div class="yt-card-play"><div class="yt-play-sm"></div></div>
      </div>
      <div class="yt-card-title">${v.title}</div>
      <div class="yt-card-meta">${v.meta}</div>`;
    card.querySelector('.yt-card-thumb').addEventListener('click',()=>{
      if(card.querySelector('iframe'))return;
      const wrap=document.createElement('div');wrap.className='yt-card-embed';
      const ifr=document.createElement('iframe');
      ifr.src=`https://www.youtube-nocookie.com/embed/${v.vid}?autoplay=1&rel=0&modestbranding=1`;
      ifr.allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture';ifr.allowFullscreen=true;
      wrap.appendChild(ifr);card.querySelector('.yt-card-thumb').appendChild(wrap);
    });
    grid.appendChild(card);
  });
  panel.appendChild(grid);
})();

/* ─── BUILD PHOTOS ───────────────────────────────── */
let photosBuilt=false;
function buildPhotos(){
  if(photosBuilt)return;photosBuilt=true;

  /* Film strip */
  const outer=document.getElementById('filmOuter');
  const COUNT=PHOTOSHOOTS.length;
  const FRAME_W=170; // px per frame — matches .sf width
  const FRAME_GAP=3;
  const RAIL_PAD=10; // padding each side of sprocket rail
  const totalStripW=(FRAME_W+FRAME_GAP)*COUNT + RAIL_PAD*2;
  const holeW=16,holeGap=12,holeUnit=holeW+holeGap;
  const holeCount=Math.ceil(totalStripW/holeUnit)+2;

  function mkRail(){
    const r=document.createElement('div');
    r.className='sprocket-rail';
    r.style.width=totalStripW+'px';
    r.style.minWidth='100%';
    for(let i=0;i<holeCount;i++){
      const h=document.createElement('div');h.className='sp-hole';r.appendChild(h);
    }
    return r;
  }
  const row=document.createElement('div');row.className='strip-row';
  PHOTOSHOOTS.forEach((p,i)=>{
    const f=document.createElement('div');f.className='sf';
    const art=document.createElement('div');art.className='sf-art';art.style.background=GRADS[i%GRADS.length];
    if(p.src){const img=document.createElement('img');img.className='sf-img';img.src=p.src;img.alt=p.caption;img.onerror=function(){this.style.display='none'};f.appendChild(img);}
    const num=document.createElement('span');num.className='sf-num';num.textContent=String(i+1).padStart(2,'0')+'A';
    const cap=document.createElement('div');cap.className='sf-caption';cap.textContent=p.caption;
    f.appendChild(art);f.appendChild(num);f.appendChild(cap);
    f.addEventListener('click',()=>openLightbox(i,'shoot'));
    row.appendChild(f);
  });
  outer.appendChild(mkRail());outer.appendChild(row);outer.appendChild(mkRail());

  /* Drag + touch scroll */
  let isDown=false,startX=0,sl=0;
  const wrap=document.getElementById('filmScrollWrap');
  wrap.addEventListener('mousedown',e=>{isDown=true;startX=e.pageX-wrap.offsetLeft;sl=wrap.scrollLeft;});
  wrap.addEventListener('mouseleave',()=>isDown=false);
  wrap.addEventListener('mouseup',()=>isDown=false);
  wrap.addEventListener('mousemove',e=>{if(!isDown)return;e.preventDefault();wrap.scrollLeft=sl-(e.pageX-wrap.offsetLeft-startX);});
  let tx=0;
  wrap.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;sl=wrap.scrollLeft;},{passive:true});
  wrap.addEventListener('touchmove',e=>{wrap.scrollLeft=sl-(e.touches[0].clientX-tx);},{passive:true});

  /* Street grid */
  const sg=document.getElementById('streetGrid');
  STREET_PHOTOS.forEach((p,i)=>{
    const f=document.createElement('div');f.className='sgf';
    const art=document.createElement('div');art.className='sgf-art';art.style.background=GRADS[(i+4)%GRADS.length];
    if([2,6,10].includes(i)){const ov=document.createElement('div');ov.style.cssText='position:absolute;inset:0;background:rgba(200,0,10,.055)';art.appendChild(ov);}
    if(p.src){const img=document.createElement('img');img.className='sgf-img';img.src=p.src;img.alt=p.caption;img.onerror=function(){this.style.display='none'};f.appendChild(img);}
    const num=document.createElement('span');num.className='sgf-num';num.textContent=String(i+1).padStart(2,'0');
    const cap=document.createElement('div');cap.className='sgf-caption';cap.textContent=p.caption;
    f.appendChild(art);f.appendChild(num);f.appendChild(cap);
    f.addEventListener('click',()=>openLightbox(i,'street'));
    sg.appendChild(f);
  });
}

/* ─── LIGHTBOX ───────────────────────────────────── */
const lb=document.getElementById('lightbox'),lbArt=document.getElementById('lb-art'),lbNum=document.getElementById('lb-num'),lbCapText=document.getElementById('lb-caption-text');
let lbIdx=0,lbSet='shoot';
function openLightbox(idx,set){
  lbIdx=idx;lbSet=set;
  const arr=set==='shoot'?PHOTOSHOOTS:STREET_PHOTOS;
  const p=arr[idx];
  if(p.src){lbArt.style.background='#000';lbArt.innerHTML=`<img src="${p.src}" style="width:100%;height:100%;object-fit:cover;display:block;" alt="${p.caption}"/>`;}
  else{lbArt.innerHTML='';lbArt.style.background=GRADS[idx%GRADS.length];}
  lbNum.textContent=String(idx+1).padStart(2,'0')+' / '+arr.length;
  lbCapText.textContent=p.caption;
  lb.classList.add('open');
}
document.getElementById('lb-close').addEventListener('click',()=>lb.classList.remove('open'));
document.getElementById('lb-prev').addEventListener('click',()=>{const arr=lbSet==='shoot'?PHOTOSHOOTS:STREET_PHOTOS;openLightbox((lbIdx-1+arr.length)%arr.length,lbSet);});
document.getElementById('lb-next').addEventListener('click',()=>{const arr=lbSet==='shoot'?PHOTOSHOOTS:STREET_PHOTOS;openLightbox((lbIdx+1)%arr.length,lbSet);});
lb.addEventListener('click',e=>{if(e.target===lb)lb.classList.remove('open');});
document.addEventListener('keydown',e=>{
  if(!lb.classList.contains('open'))return;
  const arr=lbSet==='shoot'?PHOTOSHOOTS:STREET_PHOTOS;
  if(e.key==='Escape')lb.classList.remove('open');
  if(e.key==='ArrowLeft')openLightbox((lbIdx-1+arr.length)%arr.length,lbSet);
  if(e.key==='ArrowRight')openLightbox((lbIdx+1)%arr.length,lbSet);
});

/* ─── MOBILE NAV ─────────────────────────────────── */
const burger=document.getElementById('burger'),navLinks=document.getElementById('navLinks');
let navOpen=false;
function openNav(){
  navOpen=true;
  navLinks.style.cssText='display:flex;flex-direction:column;position:fixed;top:0;left:0;right:0;background:rgba(7,7,7,.97);padding:80px 24px 40px;gap:24px;z-index:999;border-bottom:1px solid rgba(200,0,10,.15)';
  burger.style.zIndex='1002';
  const spans=burger.querySelectorAll('span');
  spans[0].style.cssText='transform:rotate(45deg) translate(4px,4px);background:#C8000A';
  spans[1].style.cssText='opacity:0';
  spans[2].style.cssText='transform:rotate(-45deg) translate(4px,-4px);background:#C8000A';
}
function closeNav(){
  navOpen=false;navLinks.style.cssText='';burger.style.zIndex='';
  burger.querySelectorAll('span').forEach(s=>{s.style.cssText='';});
}
burger.addEventListener('click',e=>{e.stopPropagation();navOpen?closeNav():openNav();});
document.addEventListener('click',e=>{if(navOpen&&!navLinks.contains(e.target)&&!burger.contains(e.target))closeNav();});
document.addEventListener('touchstart',e=>{if(navOpen&&!navLinks.contains(e.target)&&!burger.contains(e.target))closeNav();},{passive:true});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNav));