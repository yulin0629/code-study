import{u as m}from"./index.c7429b58.js";import{d as v,r as h,I as y,b as s,c as o,J as i,f as p,e,F as f,Y as k,t as C,p as b,i as g,k as x}from"./entry.1b019181.js";const c=t=>(b("data-v-63eb7158"),t=t(),g(),t),I={key:0,class:"copied"},S=c(()=>e("div",{class:"scrim"},null,-1)),w=c(()=>e("div",{class:"content"}," Copied! ",-1)),B=[S,w],T=c(()=>e("div",{class:"header"},[e("div",{class:"controls"},[e("div"),e("div"),e("div")]),e("div",{class:"title"}," Bash ")],-1)),F={class:"window"},N=c(()=>e("span",{class:"sign"},"$",-1)),V={class:"content"},j={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(t){const a=t,{copy:_}=m(),n=h("init"),r=y(()=>typeof a.content=="string"?[a.content]:a.content),l=u=>{_(r.value.join(`
`)).then(()=>{n.value="copied",setTimeout(()=>{n.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(s(),o("div",{class:"terminal",onClick:l},[i(n)==="copied"?(s(),o("div",I,B)):p("",!0),T,e("div",F,[(s(!0),o(f,null,k(i(r),d=>(s(),o("span",{key:d,class:"line"},[N,e("span",V,C(d),1)]))),128))]),i(n)!=="copied"?(s(),o("div",j," Click to copy ")):p("",!0)]))}});const J=x(q,[["__scopeId","data-v-63eb7158"]]);export{J as default};
