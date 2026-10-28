/* FIT3179 DV2 — Vega/Vega-Lite chart embedding; AI assistance is acknowledged in the website footer. */
const BASE = new URL('../', document.currentScript.src);
const CHARTS = Array.from({length:14}, (_,i)=>i+1);
const label = n => String(n).padStart(2,'0');
function chartError(id,error){
  const node=document.getElementById(id);
  if(node){const panel=document.createElement('div');panel.className='chart-error';panel.textContent='Chart could not load. Please check the JSON/CSV paths and internet connection.';node.replaceChildren(panel);}
  console.error('DV2 chart '+id,error);
}
async function loadChart(n){
  const id='vis'+label(n), target=document.getElementById(id);
  if(!target)return;
  try{
    if(typeof vegaEmbed!=='function')throw new Error('Vega Embed CDN unavailable');
    const file=new URL('charts/'+label(n)+'.json', BASE);
    const response=await fetch(file);
    if(!response.ok)throw new Error('JSON '+file.pathname+' HTTP '+response.status);
    const spec=await response.json();
    await vegaEmbed('#'+id,spec,{actions:false,renderer:'svg',tooltip:{theme:'dark'},defaultStyle:false});
    target.classList.add('chart-ready');
  }catch(e){chartError(id,e);}
}
window.addEventListener('load',()=>CHARTS.forEach(loadChart));
