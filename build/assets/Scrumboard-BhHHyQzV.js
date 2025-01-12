import{u as G,r as i,s as Q,a as Z,j as e,D as _,I as ee,z as te,A as se,k as E,n as y}from"./index-CBoie6xj.js";import{d as ae}from"./index-Dl0fJZzO.js";import{S as le}from"./sweetalert2.esm.all-BGf-Fe8G.js";import{I as M}from"./IconPlus-DTUe4SfL.js";import{I as ie}from"./IconPlusCircle-L085b8D2.js";import{I as L}from"./IconTag-CjBFHi3n.js";import{X as N,P as k,L as f,$ as w}from"./dialog-DLnu6qOp.js";import"./keyboard-LF8PuS2v.js";import"./use-is-mounted-ncCBSKzY.js";import"./open-closed-BLRocAU8.js";const je=()=>{const z=G();i.useEffect(()=>{z(Q("Scrumboard"))});const[d,T]=i.useState([{id:1,title:"In Progress",tasks:[{projectId:1,id:1,title:"Creating a new Portfolio on Dribble",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",image:!0,date:" 08 Aug, 2020",tags:["designing"]},{projectId:1,id:2,title:"Singapore Team Meet",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",date:" 09 Aug, 2020",tags:["meeting"]}]},{id:2,title:"Pending",tasks:[{projectId:2,id:3,title:"Plan a trip to another country",description:"",date:" 10 Sep, 2020"}]},{id:3,title:"Complete",tasks:[{projectId:3,id:4,title:"Dinner with Kelly Young",description:"",date:" 08 Aug, 2020"},{projectId:3,id:5,title:"Launch New SEO Wordpress Theme ",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",date:" 09 Aug, 2020"}]},{id:4,title:"Working",tasks:[]}]),J=Z(t=>t.themeConfig.rtlClass)==="rtl",O=t=>{const{value:s,id:a}=t.target;g({...o,[a]:s})},[o,g]=i.useState({id:null,title:""}),[l,p]=i.useState({projectId:null,id:null,title:"",description:"",tags:"",date:""}),[C,q]=i.useState(null),[I,u]=i.useState(!1),[S,x]=i.useState(!1),[F,h]=i.useState(!1),P=(t=null)=>{setTimeout(()=>{if(g({id:null,title:""}),t){let s=JSON.parse(JSON.stringify(t));g(s)}u(!0)})},m=(t="",s="success")=>{le.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:s,title:t,padding:"10px 20px"})},R=()=>{if(!o.title)return m("Title is required.","error"),!1;if(o.id){const t=d.find(s=>s.id===o.id);t.title=o.title}else{const s={id:(d.reduce((a,n)=>n.id>a?n.id:a,d[0].id)||0)+1,title:o.title,tasks:[]};d.push(s)}m("Project has been saved successfully."),u(!1)},X=t=>{T(d.filter(s=>s.id!==t.id)),m("Project has been deleted successfully.")},$=t=>{p(t.tasks=[])},b=t=>{const{value:s,id:a}=t.target;p({...l,[a]:s})},v=(t,s=null)=>{if(p({projectId:t,id:null,title:"",description:"",tags:"",date:""}),s){let a=JSON.parse(JSON.stringify(s));a.projectId=t,a.tags=a.tags?a.tags.toString():"",p(a)}x(!0)},U=()=>{var s,a,n;if(!l.title)return m("Title is required.","error"),!1;const t=d.find(r=>r.id===l.projectId);if(l.id){const r=t.tasks.find(c=>c.id===l.id);r.title=l.title,r.description=l.description,r.tags=((s=l.tags)==null?void 0:s.length)>0?l.tags.split(","):[]}else{let r=0;r=(a=t.tasks)!=null&&a.length?t.tasks.reduce((A,D)=>D.id>A?D.id:A,t.tasks[0].id):0;const c=new Date,j=String(c.getDate()).padStart(2,"0"),B=String(c.getMonth()),H=c.getFullYear(),K=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],V={projectId:l.projectId,id:r+1,title:l.title,description:l.description,date:j+" "+K[B]+", "+H,tags:((n=l.tags)==null?void 0:n.length)>0?l.tags.split(","):[]};p(t.tasks.push(V))}m("Task has been saved successfully."),x(!1)},W=(t,s=null)=>{q(s),setTimeout(()=>{h(!0)},10)},Y=()=>{let t=d.find(s=>s.id===C.projectId);t.tasks=t.tasks.filter(s=>s.id!==C.id),m("Task has been deleted successfully."),h(!1)};return e.jsxs("div",{children:[e.jsx("div",{children:e.jsxs("button",{type:"button",className:"btn btn-primary flex",onClick:()=>{P()},children:[e.jsx(M,{className:"w-5 h-5 ltr:mr-3 rtl:ml-3"}),"Add Project"]})}),e.jsx("div",{className:"relative pt-5",children:e.jsx("div",{className:"perfect-scrollbar h-full -mx-2",children:e.jsx("div",{className:"overflow-x-auto flex items-start flex-nowrap gap-5 pb-2 px-2",children:d.map(t=>e.jsxs("div",{className:"panel w-80 flex-none","data-group":t.id,children:[e.jsxs("div",{className:"flex justify-between mb-5",children:[e.jsx("h4",{className:"text-base font-semibold",children:t.title}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("button",{onClick:()=>v(t.id),type:"button",className:"hover:text-primary ltr:mr-2 rtl:ml-2",children:e.jsx(ie,{})}),e.jsx("div",{className:"dropdown",children:e.jsx(_,{offset:[0,5],placement:`${J?"bottom-start":"bottom-end"}`,button:e.jsx(ee,{className:"opacity-70 hover:opacity-100"}),children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("button",{type:"button",onClick:()=>P(t),children:"Edit"})}),e.jsx("li",{children:e.jsx("button",{type:"button",onClick:()=>X(t),children:"Delete"})}),e.jsx("li",{children:e.jsx("button",{type:"button",onClick:()=>$(t),children:"Clear All"})})]})})})]})]}),e.jsx(ae.ReactSortable,{list:t.tasks,setList:(s,a)=>{var n;if(a){const r=((n=a.el.closest("[data-group]"))==null?void 0:n.getAttribute("data-group"))||0,c=d.map(j=>(parseInt(j.id)===parseInt(r)&&(j.tasks=s),j));T(c)}},animation:200,group:{name:"shared",pull:!0,put:!0},ghostClass:"sortable-ghost",dragClass:"sortable-drag",className:"connect-sorting-content min-h-[150px]",children:t.tasks.map(s=>{var a;return e.jsx("div",{className:"sortable-list ",children:e.jsxs("div",{className:"shadow bg-[#f4f4f4] dark:bg-white-dark/20 p-3 pb-5 rounded-md mb-5 space-y-3 cursor-move",children:[s.image?e.jsx("img",{src:"/assets/images/carousel1.jpeg",alt:"images",className:"h-32 w-full object-cover rounded-md"}):"",e.jsx("div",{className:"text-base font-medium",children:s.title}),e.jsx("p",{className:"break-all",children:s.description}),e.jsx("div",{className:"flex gap-2 items-center flex-wrap",children:(a=s.tags)!=null&&a.length?s.tags.map((n,r)=>e.jsxs("div",{className:"btn px-2 py-1 flex btn-outline-primary",children:[e.jsx(L,{className:"shrink-0"}),e.jsx("span",{className:"ltr:ml-2 rtl:mr-2",children:n})]},r)):e.jsxs("div",{className:"btn px-2 py-1 flex text-white-dark dark:border-white-dark/50 shadow-none",children:[e.jsx(L,{className:"shrink-0"}),e.jsx("span",{className:"ltr:ml-2 rtl:mr-2",children:"No Tags"})]})}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"font-medium flex items-center hover:text-primary",children:[e.jsx(te,{className:"ltr:mr-3 rtl:ml-3 shrink-0"}),e.jsx("span",{children:s.date})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("button",{onClick:()=>v(t.id,s),type:"button",className:"hover:text-info",children:e.jsx(se,{className:"ltr:mr-3 rtl:ml-3"})}),e.jsx("button",{onClick:()=>W(t.id,s),type:"button",className:"hover:text-danger",children:e.jsx(E,{})})]})]})]})},t.id+""+s.id)})}),e.jsx("div",{className:"pt-3",children:e.jsxs("button",{type:"button",className:"btn btn-primary mx-auto",onClick:()=>v(t.id),children:[e.jsx(M,{}),"Add Task"]})})]},t.id))})})}),e.jsx(N,{appear:!0,show:I,as:i.Fragment,children:e.jsxs(k,{as:"div",open:I,onClose:()=>u(!1),className:"relative z-[51]",children:[e.jsx(f,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-[black]/60"})}),e.jsx("div",{className:"fixed inset-0 z-[999] px-4 overflow-y-auto",children:e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:e.jsx(f,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(w,{className:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark",children:[e.jsx("button",{type:"button",onClick:()=>u(!1),className:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",children:e.jsx(y,{})}),e.jsx("div",{className:"text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]",children:o.id?"Edit Project":"Add Project"}),e.jsx("div",{className:"p-5",children:e.jsxs("form",{onSubmit:R,children:[e.jsx("div",{className:"grid gap-5",children:e.jsxs("div",{children:[e.jsx("label",{htmlFor:"title",children:"Name"}),e.jsx("input",{id:"title",value:o.title,onChange:O,type:"text",className:"form-input mt-1",placeholder:"Enter Name"})]})}),e.jsxs("div",{className:"flex justify-end items-center mt-8",children:[e.jsx("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>u(!1),children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:o.id?"Update":"Add"})]})]})})]})})})})]})}),e.jsx(N,{appear:!0,show:S,as:i.Fragment,children:e.jsxs(k,{as:"div",open:S,onClose:()=>x(!1),className:"relative z-50",children:[e.jsx(f,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-[black]/60"})}),e.jsx("div",{className:"fixed inset-0 z-[999] overflow-y-auto",children:e.jsx("div",{className:"flex items-center justify-center min-h-screen px-4",children:e.jsxs(w,{className:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark",children:[e.jsx("button",{onClick:()=>x(!1),type:"button",className:"absolute top-4 ltr:right-4 rtl:left-4 text-white-dark hover:text-dark",children:e.jsx(y,{})}),e.jsx("div",{className:"text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]",children:l.id?"Edit Task":"Add Task"}),e.jsx("div",{className:"p-5",children:e.jsxs("form",{onSubmit:U,children:[e.jsxs("div",{className:"grid gap-5",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"taskTitle",children:"Name"}),e.jsx("input",{id:"title",value:l.title,onChange:b,type:"text",className:"form-input",placeholder:"Enter Name"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"taskTag",children:"Tag"}),e.jsx("input",{id:"tags",value:l.tags,onChange:b,type:"text",className:"form-input",placeholder:"Enter Tag"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"taskdesc",children:"Description"}),e.jsx("textarea",{id:"description",value:l.description,onChange:b,className:"form-textarea min-h-[130px]",placeholder:"Enter Description"})]})]}),e.jsxs("div",{className:"flex justify-end items-center mt-8",children:[e.jsx("button",{onClick:()=>x(!1),type:"button",className:"btn btn-outline-danger",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:l.id?"Update":"Add"})]})]})})]})})})]})}),e.jsx(N,{appear:!0,show:F,as:i.Fragment,children:e.jsxs(k,{as:"div",open:F,onClose:()=>h(!1),className:"relative z-[51]",children:[e.jsx(f,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-[black]/60"})}),e.jsx("div",{className:"fixed inset-0 z-[999] overflow-y-auto",children:e.jsx("div",{className:"flex items-center justify-center min-h-screen px-4 ",children:e.jsx(f,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(w,{className:"panel border-0 p-0 rounded-lg overflow-hidden md:w-full max-w-lg w-[90%] my-8",children:[e.jsx("button",{type:"button",onClick:()=>{h(!1)},className:"absolute top-4 ltr:right-4 rtl:left-4 text-white-dark",children:e.jsx(y,{})}),e.jsx("div",{className:"text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]",children:"Delete Task"}),e.jsxs("div",{className:"p-5 text-center",children:[e.jsx("div",{className:"text-white bg-danger ring-4 ring-danger/30 p-4 rounded-full w-fit mx-auto",children:e.jsx(E,{})}),e.jsx("div",{className:"text-base sm:w-3/4 mx-auto mt-5",children:"Are you sure you want to delete Task?"}),e.jsxs("div",{className:"flex justify-center items-center mt-8",children:[e.jsx("button",{onClick:()=>{h(!1)},type:"button",className:"btn btn-outline-danger",children:"Cancel"}),e.jsx("button",{onClick:Y,type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Delete"})]})]})]})})})})]})})]})};export{je as default};
