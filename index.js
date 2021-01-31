const image_box= document.querySelector('.image_box');
const imgs= document.querySelector('.imgs');
const content = document.querySelector('.content');
image_box.addEventListener('mousemove',(e)=>{
    const offsetX= e.offsetX;
    const offsetY= e.offsetY;
    const clientX= e.clientX;
    const clientY= e.clientY;
    const offsetleft= imgs.offsetLeft;
    const offsettop= imgs.offsetTop;
    const offsetHeight= imgs.offsetHeight;
    const offsetWidth= imgs.offsetWidth;
    const screenx= e.screenX;
    const screeny= e.screenY;
    const ratiox = offsetX/offsetWidth*100;
    const ratioy= offsetY/offsetHeight*100;
    const html=(` offsetX= ${offsetX} offsetY= ${offsetY}<br>
    clinetX= ${clientX} clinetY= ${clientY}<br>
    offsetleft= ${offsetleft} offsettop= ${offsettop}<br>
    offsetheight= ${offsetHeight} offsetwidth= ${offsetWidth}<br>
    screenx= ${screenx}   screeny = ${screeny} <br>
    rationx= ${ratiox}    rationy= ${ratioy}
    `);
    // console.log(document.scrollLeft);
    // console.log(document.scrollTop);
  content.innerHTML=html;
  const value= `translate(-${ratiox}% , -${ratioy}%) scale(2)`;
  imgs.style.transform=value;
  console.log(value);
})
imgs.addEventListener('click',(e)=>{
    imgs.scrollLeft +=10;
    // console.log();
})
image_box.addEventListener('mouseout',(e)=>{
    imgs.style.transform= 'translate(-50%,-50%) scale(1)';
})