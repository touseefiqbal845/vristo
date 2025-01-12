import{u as h,r,s as p,a8 as u,a as i,j as e,L as o,D as b,i as f,a9 as j,T as w,aa as c}from"./index-CBoie6xj.js";const N=()=>{const a=h();r.useEffect(()=>{a(p("Unlock Cover"))});const n=u(),d=i(s=>s.themeConfig.rtlClass)==="rtl",l=i(s=>s.themeConfig),m=s=>{g(s),s.toLowerCase()==="ae"?a(c("rtl")):a(c("ltr"))},[t,g]=r.useState(l.locale),x=()=>{n("/")};return e.jsxs("div",{children:[e.jsx("div",{className:"absolute inset-0",children:e.jsx("img",{src:"/assets/images/auth/bg-gradient.png",alt:"image",className:"h-full w-full object-cover"})}),e.jsxs("div",{className:"relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16",children:[e.jsx("img",{src:"/assets/images/auth/coming-soon-object1.png",alt:"image",className:"absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2"}),e.jsx("img",{src:"/assets/images/auth/coming-soon-object2.png",alt:"image",className:"absolute left-24 top-0 h-40 md:left-[30%]"}),e.jsx("img",{src:"/assets/images/auth/coming-soon-object3.png",alt:"image",className:"absolute right-0 top-0 h-[300px]"}),e.jsx("img",{src:"/assets/images/auth/polygon-object.svg",alt:"image",className:"absolute bottom-0 end-[28%]"}),e.jsxs("div",{className:"relative flex w-full max-w-[1502px] flex-col justify-between overflow-hidden rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 lg:min-h-[758px] lg:flex-row lg:gap-10 xl:gap-0",children:[e.jsxs("div",{className:"relative hidden w-full items-center justify-center bg-[linear-gradient(225deg,rgba(239,18,98,1)_0%,rgba(67,97,238,1)_100%)] p-5 lg:inline-flex lg:max-w-[835px] xl:-ms-28 ltr:xl:skew-x-[14deg] rtl:xl:skew-x-[-14deg]",children:[e.jsx("div",{className:"absolute inset-y-0 w-8 from-primary/10 via-transparent to-transparent ltr:-right-10 ltr:bg-gradient-to-r rtl:-left-10 rtl:bg-gradient-to-l xl:w-16 ltr:xl:-right-20 rtl:xl:-left-20"}),e.jsxs("div",{className:"ltr:xl:-skew-x-[14deg] rtl:xl:skew-x-[14deg]",children:[e.jsx(o,{to:"/",className:"w-48 block lg:w-72 ms-10",children:e.jsx("img",{src:"/assets/images/auth/logo-white.svg",alt:"Logo",className:"w-full"})}),e.jsx("div",{className:"mt-24 hidden w-full max-w-[430px] lg:block",children:e.jsx("img",{src:"/assets/images/auth/unlock.svg",alt:"Cover Image",className:"w-full"})})]})]}),e.jsxs("div",{className:"relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6 lg:max-w-[667px]",children:[e.jsxs("div",{className:"flex w-full max-w-[440px] items-center gap-2 lg:absolute lg:end-6 lg:top-6 lg:max-w-full",children:[e.jsx(o,{to:"/",className:"w-8 block lg:hidden",children:e.jsx("img",{src:"/assets/images/logo.svg",alt:"Logo",className:"mx-auto w-10"})}),e.jsx("div",{className:"dropdown ms-auto w-max",children:e.jsx(b,{offset:[0,8],placement:`${d?"bottom-start":"bottom-end"}`,btnClassName:"flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black",button:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("img",{src:`/assets/images/flags/${t.toUpperCase()}.svg`,alt:"image",className:"h-5 w-5 rounded-full object-cover"})}),e.jsx("div",{className:"text-base font-bold uppercase",children:t}),e.jsx("span",{className:"shrink-0",children:e.jsx(f,{})})]}),children:e.jsx("ul",{className:"!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold dark:text-white-light/90 w-[280px]",children:l.languageList.map(s=>e.jsx("li",{children:e.jsxs("button",{type:"button",className:`flex w-full hover:text-primary rounded-lg ${t===s.code?"bg-primary/10 text-primary":""}`,onClick:()=>{j.changeLanguage(s.code),m(s.code)},children:[e.jsx("img",{src:`/assets/images/flags/${s.code.toUpperCase()}.svg`,alt:"flag",className:"w-5 h-5 object-cover rounded-full"}),e.jsx("span",{className:"ltr:ml-3 rtl:mr-3",children:s.name})]})},s.code))})})})]}),e.jsxs("div",{className:"w-full max-w-[440px] lg:mt-16",children:[e.jsxs("div",{className:"mb-10 flex items-center",children:[e.jsx("div",{className:"flex h-16 w-16 items-end justify-center overflow-hidden rounded-full bg-[#00AB55] ltr:mr-4 rtl:ml-4",children:e.jsx("img",{src:"/assets/images/auth/user.png",className:"w-full object-cover",alt:"images"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"text-2xl dark:text-white",children:"Shaun Park"}),e.jsx("p",{className:"text-white-dark",children:"Enter your password to unlock your ID"})]})]}),e.jsxs("form",{className:"space-y-5 dark:text-white",onSubmit:x,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"Password",children:"Password"}),e.jsxs("div",{className:"relative text-white-dark",children:[e.jsx("input",{id:"Password",type:"password",placeholder:"Enter Password",className:"form-input ps-10 placeholder:text-white-dark"}),e.jsx("span",{className:"absolute start-4 top-1/2 -translate-y-1/2",children:e.jsx(w,{fill:!0})})]})]}),e.jsx("button",{type:"submit",className:"btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]",children:"UNLOCK"})]})]}),e.jsxs("p",{className:"absolute bottom-6 w-full text-center dark:text-white",children:["© ",new Date().getFullYear(),".VRISTO All Rights Reserved."]})]})]})]})]})};export{N as default};
