import{u as p,r,s as f,a8 as b,j as e,L as s}from"./index-COfe_To1.js";import{I as j}from"./IconInstagram-BxEEUTgF.js";import{I as w,a as v}from"./IconGoogle-DU4-7fjm.js";import{I as N}from"./IconTwitter-Eb6WnJMj.js";const D=()=>{const m=p();r.useEffect(()=>{m(f("Coming Soon Cover"))});const[t,c]=r.useState({days:null,hours:null,minutes:null,seconds:null}),[n,d]=r.useState(null),o=()=>{const i=new Date;i.setFullYear(i.getFullYear()+1);const g=i.getTime();let l={};d(setInterval(()=>{const u=new Date().getTime(),a=g-u;l.days=Math.floor(a/(1e3*60*60*24)),l.hours=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)),l.minutes=Math.floor(a%(1e3*60*60)/(1e3*60)),l.seconds=Math.floor(a%(1e3*60)/1e3),c(h=>({...h,...l})),a<0&&clearInterval(n)},1e3))};r.useEffect(()=>(o(),()=>{clearInterval(n)}),[]);const x=b();return e.jsxs("div",{children:[e.jsx("div",{className:"absolute inset-0",children:e.jsx("img",{src:"/assets/images/auth/bg-gradient.png",alt:"image",className:"h-full w-full object-cover"})}),e.jsxs("div",{className:"relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16",children:[e.jsx("img",{src:"/assets/images/auth/coming-soon-object1.png",alt:"image",className:"absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2"}),e.jsx("img",{src:"/assets/images/auth/coming-soon-object2.png",alt:"image",className:"absolute left-24 top-0 h-40 md:left-[30%]"}),e.jsx("img",{src:"/assets/images/auth/coming-soon-object3.png",alt:"image",className:"absolute right-0 top-0 h-[300px]"}),e.jsx("img",{src:"/assets/images/auth/polygon-object.svg",alt:"image",className:"absolute bottom-0 end-[28%]"}),e.jsxs("div",{className:"relative flex w-full max-w-[1502px] flex-col justify-between overflow-hidden rounded-md bg-white/60 text-center backdrop-blur-lg dark:bg-black/50 lg:min-h-[758px] lg:flex-row lg:gap-10 xl:gap-0",children:[e.jsxs("div",{className:"relative hidden w-full items-center justify-center p-5 lg:inline-flex lg:max-w-[835px] ltr:xl:-ml-24 ltr:xl:skew-x-[14deg] rtl:xl:-mr-24 rtl:xl:skew-x-[-14deg]",style:{background:"linear-gradient(225deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:[e.jsx("div",{className:"absolute inset-y-0 w-8 from-primary/10 via-transparent to-transparent ltr:-right-10 ltr:bg-gradient-to-r rtl:-left-10 rtl:bg-gradient-to-l xl:w-16 ltr:xl:-right-20 rtl:xl:-left-20"}),e.jsxs("div",{className:"ltr:xl:-skew-x-[14deg] rtl:xl:skew-x-[14deg]",children:[e.jsx(s,{to:"/",className:"w-48 block lg:w-72 mx-auto 2xl:m-0",children:e.jsx("img",{src:"/assets/images/auth/logo-white.svg",alt:"Logo",className:"w-full"})}),e.jsx("div",{className:"mt-24 hidden w-full max-w-[430px] rtl:rotate-y-180 lg:block",children:e.jsx("img",{src:"/assets/images/auth/coming-soon-cover.svg",alt:"Cover Image",className:"w-full"})})]})]}),e.jsxs("div",{className:"relative w-full px-4 pb-16 pt-6 sm:px-6 lg:max-w-[667px]",children:[e.jsxs("div",{className:"mx-auto mt-5 w-full max-w-[550px] lg:mt-16",children:[e.jsx(s,{to:"/",className:"mb-8 block lg:hidden",children:e.jsx("img",{src:"/assets/images/logo.svg",alt:"Logo",className:"mx-auto w-10"})}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h1",{className:"text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl",children:"Coming Soon"}),e.jsx("p",{className:"text-base font-bold leading-normal text-white-dark",children:"We will be here in a shortwhile....."})]}),e.jsxs("div",{className:"mb-16 flex items-center justify-center gap-2 text-xl font-bold leading-none text-primary sm:text-2xl md:mb-24 md:gap-4 md:text-[50px]",children:[e.jsxs("div",{className:"relative inline-flex h-12 w-14 items-center justify-center rounded-md bg-primary-light p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[120px]",children:[e.jsxs("div",{className:"absolute inset-1 flex flex-col gap-1",children:[e.jsx("span",{className:"h-full w-full rounded-md bg-primary/[12%]"}),e.jsx("span",{className:"h-full w-full rounded-md bg-white"})]}),e.jsx("span",{className:"relative",children:t.days})]}),e.jsx("span",{children:":"}),e.jsxs("div",{className:"relative inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary-light p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[96px]",children:[e.jsxs("div",{className:"absolute inset-1 flex flex-col gap-1",children:[e.jsx("span",{className:"h-full w-full rounded-md bg-primary/[12%]"}),e.jsx("span",{className:"h-full w-full rounded-md bg-white"})]}),e.jsx("span",{className:"relative",children:t.hours})]}),e.jsx("span",{children:":"}),e.jsxs("div",{className:"relative inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary-light p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[96px]",children:[e.jsxs("div",{className:"absolute inset-1 flex flex-col gap-1",children:[e.jsx("span",{className:"h-full w-full rounded-md bg-primary/[12%]"}),e.jsx("span",{className:"h-full w-full rounded-md bg-white"})]}),e.jsx("span",{className:"relative",children:t.minutes})]}),e.jsx("span",{children:":"}),e.jsxs("div",{className:"relative inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary-light p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[96px]",children:[e.jsxs("div",{className:"absolute inset-1 flex flex-col gap-1",children:[e.jsx("span",{className:"h-full w-full rounded-md bg-primary/[12%]"}),e.jsx("span",{className:"h-full w-full rounded-md bg-white"})]}),e.jsx("span",{className:"relative",children:t.seconds})]})]}),e.jsxs("div",{className:"mb-20 md:mb-32",children:[e.jsx("h2",{className:"text-lg font-bold uppercase dark:text-white sm:text-xl",children:"Subscribe to get notified!"}),e.jsxs("div",{className:"relative mb-10 mt-8",children:[e.jsx("input",{type:"email",placeholder:"mail@gmail.com",className:"form-input mb-5 py-3.5 placeholder:text-base placeholder:text-white-dark sm:mb-0 sm:pe-32"}),e.jsx("button",{type:"button",className:"btn btn-gradient end-1.5 top-1/2 inline-flex border-0 px-4 py-1.5 text-base shadow-none sm:absolute sm:-translate-y-1/2",onClick:()=>x("/"),children:"Subscribe"})]}),e.jsxs("ul",{className:"flex justify-center gap-3.5 text-white",children:[e.jsx("li",{children:e.jsx(s,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e.jsx(j,{})})}),e.jsx("li",{children:e.jsx(s,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e.jsx(w,{})})}),e.jsx("li",{children:e.jsx(s,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e.jsx(N,{fill:!0})})}),e.jsx("li",{children:e.jsx(s,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e.jsx(v,{})})})]})]})]}),e.jsxs("p",{className:"absolute bottom-6 w-full text-center dark:text-white",children:["© ",new Date().getFullYear(),".VRISTO All Rights Reserved."]})]})]})]})]})};export{D as default};
