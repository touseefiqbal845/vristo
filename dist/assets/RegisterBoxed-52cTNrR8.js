import{r,j as e,L as j}from"./index-COfe_To1.js";import{u as N,L as w,F as g,a as n,b as d,c as m,d as f,o as b}from"./LockClosedIcon-DT-xvNyq.js";import{c as y,a as o,b as v,d as k}from"./index.esm-Cm-DGWWq.js";function P({title:a,titleId:i,...l},c){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":i},l),a?r.createElement("title",{id:i},a):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"}))}const x=r.forwardRef(P),L=y({firstName:o().required("First name is required"),lastName:o().required("Last name is required"),email:o().email("Invalid email address").required("Email is required"),password:o().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:o().oneOf([v("password")],"Passwords must match").required("Confirm password is required"),terms:k().oneOf([!0],"You must agree to terms & conditions")}),E=()=>{const[a,i]=r.useState(!1),[l,c]=r.useState(!1),{register:t,handleSubmit:h,formState:{errors:s},trigger:F}=N({resolver:b(L),mode:"onBlur"}),u=p=>{console.log("Form Data:",p)};return e.jsxs("div",{className:"grid lg:grid-cols-12 h-full bg-white",children:[e.jsxs("div",{className:"w-[80%] m-auto col-span-5 bg-white flex flex-col justify-center px-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx("img",{src:w,alt:"Logo",className:"h-16"}),e.jsx("h1",{className:"text-[33px]",children:"Google Ads"})]}),e.jsxs("div",{className:"mb-6 text-center",children:[e.jsx("h1",{className:"text-3xl font-bold mt-4",children:"Sign In"}),e.jsxs("p",{className:"text-gray-600 mt-2 text-xl",children:["Let’s get started with a brand new ",e.jsx("br",{})," experience"]})]})]}),e.jsxs("form",{onSubmit:h(u),className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700",children:"First Name"}),e.jsxs("div",{className:"flex items-center border rounded-md p-3",children:[e.jsx(x,{className:"h-5 w-5 text-gray-500 mr-2"}),e.jsx("input",{type:"text",placeholder:"First Name",...t("firstName"),className:"w-full outline-none"})]}),s.firstName&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.firstName.message})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700",children:"Last Name"}),e.jsxs("div",{className:"flex items-center border rounded-md p-3",children:[e.jsx(x,{className:"h-5 w-5 text-gray-500 mr-2"}),e.jsx("input",{type:"text",placeholder:"Last Name",...t("lastName"),className:"w-full outline-none"})]}),s.lastName&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.lastName.message})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700",children:"Email"}),e.jsxs("div",{className:"flex items-center border rounded-md p-3",children:[e.jsx(g,{className:"h-5 w-5 text-gray-500 mr-2"}),e.jsx("input",{type:"email",placeholder:"Enter your email",...t("email"),className:"w-full outline-none"})]}),s.email&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.email.message})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700",children:"Password"}),e.jsxs("div",{className:"flex items-center border rounded-md p-3",children:[e.jsx(n,{className:"h-5 w-5 text-gray-500 mr-2"}),e.jsx("input",{type:a?"text":"password",placeholder:"Enter your password",...t("password"),className:"w-full outline-none"}),e.jsx("button",{type:"button",onClick:()=>i(!a),className:"focus:outline-none",children:a?e.jsx(d,{className:"h-5 w-5 text-gray-500"}):e.jsx(m,{className:"h-5 w-5 text-gray-500"})})]}),s.password&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.password.message})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700",children:"Confirm Password"}),e.jsxs("div",{className:"flex items-center border rounded-md p-3",children:[e.jsx(n,{className:"h-5 w-5 text-gray-500 mr-2"}),e.jsx("input",{type:l?"text":"password",placeholder:"Confirm your password",...t("confirmPassword"),className:"w-full outline-none"}),e.jsx("button",{type:"button",onClick:()=>c(!l),className:"focus:outline-none",children:l?e.jsx(d,{className:"h-5 w-5 text-gray-500"}):e.jsx(m,{className:"h-5 w-5 text-gray-500"})})]}),s.confirmPassword&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.confirmPassword.message})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",...t("terms"),className:"rounded"}),e.jsx("span",{children:"I agree to terms & conditions"})]}),s.terms&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.terms.message}),e.jsx("button",{type:"submit",className:"w-full bg-blue-600 border mt-10 text-white py-3 rounded-md cursor-pointer hover:bg-white hover:text-blue-600 hover:border-blue-600 transition-all hover:scale-105",children:"Sign Up"})]}),e.jsxs("p",{className:"text-center text-sm mt-4",children:["Already have an account?"," ",e.jsx(j,{to:"/",className:"text-blue-500",children:"Sign In"})]})]}),e.jsx("div",{className:"col-span-7 bg-gray-100",children:e.jsx("div",{className:"pt-10 flex items-center lg:ms-28",children:e.jsxs("div",{className:"mt-10",children:[e.jsxs("div",{className:"max-sm:p-5",children:[e.jsx("h2",{className:"text-2xl font-bold text-[#175cd3] text-[50px] max-sm:leading-[50px]",children:"Welcome to Google Ads"}),e.jsxs("p",{className:"mt-8 text-[#404968] text-[18px]",children:["Clarity gives you the blocks & components you need to create a truly ",e.jsx("br",{})," professional website."]})]}),e.jsx("img",{src:f,alt:"Dashboard",className:"mt-4 h-[660px]"})]})})})]})};export{E as default};