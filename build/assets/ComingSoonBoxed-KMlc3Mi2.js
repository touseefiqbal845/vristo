import{u as p,r as t,s as f,a8 as b,j as e,L as n}from"./index-CBoie6xj.js";import{I as j}from"./IconInstagram-D4lrugjL.js";import{I as w,a as N}from"./IconGoogle-CTJ8VnpR.js";import{I as v}from"./IconTwitter-BTmjtr9m.js";const D=()=>{const m=p();t.useEffect(()=>{m(f("Coming Soon Boxed"))});const[l,d]=t.useState({days:null,hours:null,minutes:null,seconds:null}),[r,c]=t.useState(null),o=()=>{const i=new Date;i.setFullYear(i.getFullYear()+1);const u=i.getTime();let s={};c(setInterval(()=>{const h=new Date().getTime(),a=u-h;s.days=Math.floor(a/(1e3*60*60*24)),s.hours=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)),s.minutes=Math.floor(a%(1e3*60*60)/(1e3*60)),s.seconds=Math.floor(a%(1e3*60)/1e3),d(g=>({...g,...s})),a<0&&clearInterval(r)},1e3))};t.useEffect(()=>(o(),()=>{clearInterval(r)}),[]);const x=b();return e.jsxs("div",{children:[e.jsx("div",{className:"absolute inset-0",children:e.jsx("img",{src:"/assets/images/auth/bg-gradient.png",alt:"image",className:"h-full w-full object-cover"})}),e.jsxs("div",{className:"relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16",children:[e.jsx("img",{src:"/assets/images/auth/coming-soon-object1.png",alt:"image",className:"absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2"}),e.jsx("img",{src:"/assets/images/auth/coming-soon-object2.png",alt:"image",className:"absolute left-24 top-0 h-40 md:left-[30%]"}),e.jsx("img",{src:"/assets/images/auth/coming-soon-object3.png",alt:"image",className:"absolute right-0 top-0 h-[300px]"}),e.jsx("img",{src:"/assets/images/auth/polygon-object.svg",alt:"image",className:"absolute bottom-0 end-[28%]"}),e.jsx("div",{className:"relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 text-center dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]",children:e.jsx("div",{className:"rounded-md bg-white/60 p-4 backdrop-blur-lg dark:bg-black/50 sm:p-6",children:e.jsxs("div",{className:"mx-auto mt-5 w-full max-w-[550px] md:mt-16",children:[e.jsxs("div",{className:"mb-12",children:[e.jsx("h1",{className:"text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl",children:"Coming Soon"}),e.jsx("p",{className:"text-base font-bold leading-normal text-white-dark",children:"We will be here in a shortwhile....."})]}),e.jsxs("div",{className:"mb-16 flex items-center justify-center gap-2 text-xl font-bold leading-none text-primary sm:text-2xl md:mb-24 md:gap-4 md:text-[50px]",children:[e.jsxs("div",{className:"relative inline-flex h-12 w-14 items-center justify-center rounded-md bg-primary-light p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[120px]",children:[e.jsxs("div",{className:"absolute inset-1 flex flex-col gap-1",children:[e.jsx("span",{className:"h-full w-full rounded-md bg-primary/[12%]"}),e.jsx("span",{className:"h-full w-full rounded-md bg-white"})]}),e.jsx("span",{className:"relative",children:l.days})]}),e.jsx("span",{children:":"}),e.jsxs("div",{className:"relative inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary-light p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[96px]",children:[e.jsxs("div",{className:"absolute inset-1 flex flex-col gap-1",children:[e.jsx("span",{className:"h-full w-full rounded-md bg-primary/[12%]"}),e.jsx("span",{className:"h-full w-full rounded-md bg-white"})]}),e.jsx("span",{className:"relative",children:l.hours})]}),e.jsx("span",{children:":"}),e.jsxs("div",{className:"relative inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary-light p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[96px]",children:[e.jsxs("div",{className:"absolute inset-1 flex flex-col gap-1",children:[e.jsx("span",{className:"h-full w-full rounded-md bg-primary/[12%]"}),e.jsx("span",{className:"h-full w-full rounded-md bg-white"})]}),e.jsx("span",{className:"relative",children:l.minutes})]}),e.jsx("span",{children:":"}),e.jsxs("div",{className:"relative inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary-light p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[96px]",children:[e.jsxs("div",{className:"absolute inset-1 flex flex-col gap-1",children:[e.jsx("span",{className:"h-full w-full rounded-md bg-primary/[12%]"}),e.jsx("span",{className:"h-full w-full rounded-md bg-white"})]}),e.jsx("span",{className:"relative",children:l.seconds})]})]}),e.jsxs("div",{className:"mb-20 md:mb-32",children:[e.jsx("h2",{className:"text-lg font-bold uppercase dark:text-white sm:text-xl",children:"Subscribe to get notified!"}),e.jsxs("div",{className:"relative mb-10 mt-8",children:[e.jsx("input",{type:"email",placeholder:"mail@gmail.com",className:"form-input mb-5 py-3.5 placeholder:text-base placeholder:text-white-dark sm:mb-0 sm:pe-32"}),e.jsx("button",{type:"button",className:"btn btn-gradient end-1.5 top-1/2 inline-flex border-0 px-4 py-1.5 text-base shadow-none sm:absolute sm:-translate-y-1/2",onClick:()=>x("/"),children:"Subscribe"})]}),e.jsxs("ul",{className:"flex justify-center gap-3.5 text-white",children:[e.jsx("li",{children:e.jsx(n,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e.jsx(j,{})})}),e.jsx("li",{children:e.jsx(n,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e.jsx(w,{})})}),e.jsx("li",{children:e.jsx(n,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e.jsx(v,{fill:!0})})}),e.jsx("li",{children:e.jsx(n,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e.jsx(N,{})})})]})]}),e.jsxs("p",{className:"dark:text-white",children:["© ",new Date().getFullYear(),". VRISTO All Rights Reserved."]})]})})})]})]})};export{D as default};
