import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as c,i as s}from"./assets/vendor-f0698ccd.js";const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<new Date?(document.querySelector("button").disabled=!0,s.error({title:"Error",message:"Please choose a date in the future"})):document.querySelector("button").disabled=!1}};c("#datetime-picker",f);let u;document.querySelector("[data-start]").addEventListener("click",y);function y(){const e=c.parseDate(document.querySelector("#datetime-picker").value),t=new Date;if(e<t){s.error({title:"Error",message:"Please choose a date in the future"});return}document.querySelector("[data-start]").disabled=!0,u=setInterval(h,1e3,e)}function h(e){const t=new Date,o=e-t;if(o<=0)clearInterval(u),a({days:0,hours:0,minutes:0,seconds:0});else{const n=D(o);a(n)}}function a({days:e,hours:t,minutes:o,seconds:n}){document.querySelector("[data-days]").textContent=r(e),document.querySelector("[data-hours]").textContent=r(t),document.querySelector("[data-minutes]").textContent=r(o),document.querySelector("[data-seconds]").textContent=r(n)}function D(e){const d=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:i,minutes:l,seconds:m}}function r(e){return e<10?`0${e}`:e}
//# sourceMappingURL=commonHelpers.js.map