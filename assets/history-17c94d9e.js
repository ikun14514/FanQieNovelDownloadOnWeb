import{_ as h,r as y,k as u,o as c,c as n,a as t,F as i,l as v,h as p,t as l,n as f,g,p as m,i as I,j as b}from"./bootstrap.min-c4c061eb.js";const k=a=>(m("data-v-1eab9df9"),a=a(),I(),a),x=k(()=>t("div",{class:"title"},[t("h1",{class:"display-4"},"下载任务")],-1)),S={class:"centered-div"},w={class:"progress"},A={__name:"App",setup(a){const o=y([]),d=async()=>{try{const s=await p.get("/api/history/");o.value=s.data,_()}catch(s){console.error("Failed to fetch history data:",s)}},_=()=>{const s=setInterval(async()=>{for(const r of o.value.history)try{const e=await p.get(`/api/history/${r.book_id}/`);r.percent=e.data.percent,e.data.percent===100&&clearInterval(s)}catch(e){console.error("Failed to fetch progress:",e)}},1e3)};return u(()=>{d()}),(s,r)=>(c(),n(i,null,[x,t("div",S,[(c(!0),n(i,null,v(o.value.history,e=>(c(),n("div",{key:e.id,class:"history-item"},[t("h2",null,l(e.file_name),1),t("div",w,[t("div",{class:"progress-bar",style:f({width:`${e.percent}%`})},null,4)]),g(l(e.percent)+"% ",1)]))),128))])],64))}},F=h(A,[["__scopeId","data-v-1eab9df9"]]);b(F).mount("#app");
