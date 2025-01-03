import{u as h,r as i,s as p,a8 as u,a as n,j as e,L as a,D as b,i as j,a9 as f,d as w,T as v,aa as c}from"./index-CT6DBj-5.js";import{I as N}from"./IconInstagram-D81bBKYC.js";import{I as k,a as y}from"./IconGoogle-DY22SIuw.js";import{I as C}from"./IconTwitter-C3twnZu_.js";const D=()=>{const t=h();i.useEffect(()=>{t(p("Login Cover"))});const o=u(),d=n(s=>s.themeConfig.rtlClass)==="rtl",r=n(s=>s.themeConfig),x=s=>{m(s),s.toLowerCase()==="ae"?t(c("rtl")):t(c("ltr"))},[l,m]=i.useState(r.locale),g=()=>{o("/")};return e.jsxs("div",{children:[e.jsx("div",{className:"absolute inset-0",children:e.jsx("img",{src:"/assets/images/auth/bg-gradient.png",alt:"image",className:"h-full w-full object-cover"})}),e.jsxs("div",{className:"relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16",children:[e.jsx("img",{src:"/assets/images/auth/coming-soon-object1.png",alt:"image",className:"absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2"}),e.jsx("img",{src:"/assets/images/auth/coming-soon-object2.png",alt:"image",className:"absolute left-24 top-0 h-40 md:left-[30%]"}),e.jsx("img",{src:"/assets/images/auth/coming-soon-object3.png",alt:"image",className:"absolute right-0 top-0 h-[300px]"}),e.jsx("img",{src:"/assets/images/auth/polygon-object.svg",alt:"image",className:"absolute bottom-0 end-[28%]"}),e.jsxs("div",{className:"relative flex w-full max-w-[1502px] flex-col justify-between overflow-hidden rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 lg:min-h-[758px] lg:flex-row lg:gap-10 xl:gap-0",children:[e.jsxs("div",{className:"relative hidden w-full items-center justify-center bg-[linear-gradient(225deg,rgba(239,18,98,1)_0%,rgba(67,97,238,1)_100%)] p-5 lg:inline-flex lg:max-w-[835px] xl:-ms-28 ltr:xl:skew-x-[14deg] rtl:xl:skew-x-[-14deg]",children:[e.jsx("div",{className:"absolute inset-y-0 w-8 from-primary/10 via-transparent to-transparent ltr:-right-10 ltr:bg-gradient-to-r rtl:-left-10 rtl:bg-gradient-to-l xl:w-16 ltr:xl:-right-20 rtl:xl:-left-20"}),e.jsxs("div",{className:"ltr:xl:-skew-x-[14deg] rtl:xl:skew-x-[14deg]",children:[e.jsx(a,{to:"/",className:"w-48 block lg:w-72 ms-10",children:e.jsx("img",{src:"/assets/images/auth/logo-white.svg",alt:"Logo",className:"w-full"})}),e.jsx("div",{className:"mt-24 hidden w-full max-w-[430px] lg:block",children:e.jsx("img",{src:"/assets/images/auth/login.svg",alt:"Cover Image",className:"w-full"})})]})]}),e.jsxs("div",{className:"relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6 lg:max-w-[667px]",children:[e.jsxs("div",{className:"flex w-full max-w-[440px] items-center gap-2 lg:absolute lg:end-6 lg:top-6 lg:max-w-full",children:[e.jsx(a,{to:"/",className:"w-8 block lg:hidden",children:e.jsx("img",{src:"/assets/images/logo.svg",alt:"Logo",className:"mx-auto w-10"})}),e.jsx("div",{className:"dropdown ms-auto w-max",children:e.jsx(b,{offset:[0,8],placement:`${d?"bottom-start":"bottom-end"}`,btnClassName:"flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black",button:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("img",{src:`/assets/images/flags/${l.toUpperCase()}.svg`,alt:"image",className:"h-5 w-5 rounded-full object-cover"})}),e.jsx("div",{className:"text-base font-bold uppercase",children:l}),e.jsx("span",{className:"shrink-0",children:e.jsx(j,{})})]}),children:e.jsx("ul",{className:"!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold dark:text-white-light/90 w-[280px]",children:r.languageList.map(s=>e.jsx("li",{children:e.jsxs("button",{type:"button",className:`flex w-full hover:text-primary rounded-lg ${l===s.code?"bg-primary/10 text-primary":""}`,onClick:()=>{f.changeLanguage(s.code),x(s.code)},children:[e.jsx("img",{src:`/assets/images/flags/${s.code.toUpperCase()}.svg`,alt:"flag",className:"w-5 h-5 object-cover rounded-full"}),e.jsx("span",{className:"ltr:ml-3 rtl:mr-3",children:s.name})]})},s.code))})})})]}),e.jsxs("div",{className:"w-full max-w-[440px] lg:mt-16",children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("h1",{className:"text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl",children:"Sign in"}),e.jsx("p",{className:"text-base font-bold leading-normal text-white-dark",children:"Enter your email and password to login"})]}),e.jsxs("form",{className:"space-y-5 dark:text-white",onSubmit:g,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"Email",children:"Email"}),e.jsxs("div",{className:"relative text-white-dark",children:[e.jsx("input",{id:"Email",type:"email",placeholder:"Enter Email",className:"form-input ps-10 placeholder:text-white-dark"}),e.jsx("span",{className:"absolute start-4 top-1/2 -translate-y-1/2",children:e.jsx(w,{fill:!0})})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"Password",children:"Password"}),e.jsxs("div",{className:"relative text-white-dark",children:[e.jsx("input",{id:"Password",type:"password",placeholder:"Enter Password",className:"form-input ps-10 placeholder:text-white-dark"}),e.jsx("span",{className:"absolute start-4 top-1/2 -translate-y-1/2",children:e.jsx(v,{fill:!0})})]})]}),e.jsx("div",{children:e.jsxs("label",{className:"flex cursor-pointer items-center",children:[e.jsx("input",{type:"checkbox",className:"form-checkbox bg-white dark:bg-black"}),e.jsx("span",{className:"text-white-dark",children:"Subscribe to weekly newsletter"})]})}),e.jsx("button",{type:"submit",className:"btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]",children:"Sign in"})]}),e.jsxs("div",{className:"relative my-7 text-center md:mb-9",children:[e.jsx("span",{className:"absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-white-light dark:bg-white-dark"}),e.jsx("span",{className:"relative bg-white px-2 font-bold uppercase text-white-dark dark:bg-dark dark:text-white-light",children:"or"})]}),e.jsx("div",{className:"mb-10 md:mb-[60px]",children:e.jsxs("ul",{className:"flex justify-center gap-3.5 text-white",children:[e.jsx("li",{children:e.jsx(a,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e.jsx(N,{})})}),e.jsx("li",{children:e.jsx(a,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e.jsx(k,{})})}),e.jsx("li",{children:e.jsx(a,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e.jsx(C,{fill:!0})})}),e.jsx("li",{children:e.jsx(a,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e.jsx(y,{})})})]})}),e.jsxs("div",{className:"text-center dark:text-white",children:["Don't have an account ? ",e.jsx(a,{to:"/auth/cover-register",className:"uppercase text-primary underline transition hover:text-black dark:hover:text-white",children:"SIGN UP"})]})]}),e.jsxs("p",{className:"absolute bottom-6 w-full text-center dark:text-white",children:["© ",new Date().getFullYear(),".VRISTO All Rights Reserved."]})]})]})]})]})};export{D as default};
