import{_ as r}from"./preload-helper-41c905a7.js";import{e as n}from"./index-1885ff30.js";const s=(e,t)=>{const o=e[t];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((m,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t)))})},a=async({params:e})=>{try{const t=await s(Object.assign({"../../../lib/posts/heading-links-example.md":()=>r(()=>import("./heading-links-example-2de25459.js"),["./heading-links-example-2de25459.js","./index-965d4597.js"],import.meta.url),"../../../lib/posts/mdsvex-component-example.md":()=>r(()=>import("./mdsvex-component-example-a929472e.js"),["./mdsvex-component-example-a929472e.js","./index-965d4597.js","./Callout-0f107caa.js"],import.meta.url),"../../../lib/posts/syntax-highlighting-example.md":()=>r(()=>import("./syntax-highlighting-example-2273aaa1.js"),["./syntax-highlighting-example-2273aaa1.js","./index-965d4597.js"],import.meta.url)}),`../../../lib/posts/${e.post}.md`);return{PostContent:t.default,meta:{...t.metadata,slug:e.post}}}catch(t){throw n(404,t)}},p=Object.freeze(Object.defineProperty({__proto__:null,load:a},Symbol.toStringTag,{value:"Module"}));export{p as _,a as l};