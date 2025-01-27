import{u as x,r,s as p,aH as h,a as i,j as e,D as u,i as b,aI as f,d as j,aJ as o}from"./index-B5saNMBH.js";const N=()=>{const a=x();r.useEffect(()=>{a(p("Recover Id Box"))});const c=h(),n=i(s=>s.themeConfig.rtlClass)==="rtl",l=i(s=>s.themeConfig),d=s=>{m(s),s.toLowerCase()==="ae"?a(o("rtl")):a(o("ltr"))},[t,m]=r.useState(l.locale),g=()=>{c("/")};return e.jsxs("div",{children:[e.jsx("div",{className:"absolute inset-0",children:e.jsx("img",{src:"/assets/images/auth/bg-gradient.png",alt:"image",className:"h-full w-full object-cover"})}),e.jsxs("div",{className:"relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16",children:[e.jsx("img",{src:"/assets/images/auth/coming-soon-object1.png",alt:"image",className:"absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2"}),e.jsx("img",{src:"/assets/images/auth/coming-soon-object2.png",alt:"image",className:"absolute left-24 top-0 h-40 md:left-[30%]"}),e.jsx("img",{src:"/assets/images/auth/coming-soon-object3.png",alt:"image",className:"absolute right-0 top-0 h-[300px]"}),e.jsx("img",{src:"/assets/images/auth/polygon-object.svg",alt:"image",className:"absolute bottom-0 end-[28%]"}),e.jsx("div",{className:"relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]",children:e.jsxs("div",{className:"relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-[758px] py-20",children:[e.jsx("div",{className:"absolute top-6 end-6",children:e.jsx("div",{className:"dropdown",children:e.jsx(u,{offset:[0,8],placement:`${n?"bottom-start":"bottom-end"}`,btnClassName:"flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black",button:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("img",{src:`/assets/images/flags/${t.toUpperCase()}.svg`,alt:"image",className:"h-5 w-5 rounded-full object-cover"})}),e.jsx("div",{className:"text-base font-bold uppercase",children:t}),e.jsx("span",{className:"shrink-0",children:e.jsx(b,{})})]}),children:e.jsx("ul",{className:"!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold dark:text-white-light/90 w-[280px]",children:l.languageList.map(s=>e.jsx("li",{children:e.jsxs("button",{type:"button",className:`flex w-full hover:text-primary rounded-lg ${t===s.code?"bg-primary/10 text-primary":""}`,onClick:()=>{f.changeLanguage(s.code),d(s.code)},children:[e.jsx("img",{src:`/assets/images/flags/${s.code.toUpperCase()}.svg`,alt:"flag",className:"w-5 h-5 object-cover rounded-full"}),e.jsx("span",{className:"ltr:ml-3 rtl:mr-3",children:s.name})]})},s.code))})})})}),e.jsxs("div",{className:"mx-auto w-full max-w-[440px]",children:[e.jsxs("div",{className:"mb-7",children:[e.jsx("h1",{className:"mb-3 text-2xl font-bold !leading-snug dark:text-white",children:"Password Reset"}),e.jsx("p",{children:"Enter your email to recover your ID"})]}),e.jsxs("form",{className:"space-y-5",onSubmit:g,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"Email",className:"dark:text-white",children:"Email"}),e.jsxs("div",{className:"relative text-white-dark",children:[e.jsx("input",{id:"Email",type:"email",placeholder:"Enter Email",className:"form-input ps-10 placeholder:text-white-dark"}),e.jsx("span",{className:"absolute start-4 top-1/2 -translate-y-1/2",children:e.jsx(j,{fill:!0})})]})]}),e.jsx("button",{type:"submit",className:"btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]",children:"RECOVER"})]})]})]})})]})]})};export{N as default};
