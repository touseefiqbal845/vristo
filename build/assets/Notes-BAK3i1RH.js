import{u as U,r as s,s as X,a as _,j as e,P as Y,h as Z,m as Q,D as A,I as ee,x as te,k as F,b as ae,n as C}from"./index-l278j1dF.js";import{S as se}from"./sweetalert2.esm.all-BGf-Fe8G.js";import{I as le,a as re}from"./IconNotesEdit-rMyCv_0A.js";import{I as S}from"./IconStar-ENGKDz5L.js";import{I as n}from"./IconSquareRotated-D2A4pbru.js";import{I as ie}from"./IconPlus-Cm1SpNa-.js";import{X as M,P as T,L as u,$ as D}from"./dialog-DtRX5pbJ.js";import"./keyboard-DcQsmV5o.js";import"./use-is-mounted-C_4aCLCC.js";import"./open-closed-CeMiz45F.js";const ge=()=>{const O=U();s.useEffect(()=>{O(X("Notes"))});const[o,q]=s.useState([{id:1,user:"Max Smith",thumb:"profile-16.jpeg",title:"Meeting with Kelly",description:"Curabitur facilisis vel elit sed dapibus sodales purus rhoncus.",date:"11/01/2020",isFav:!1,tag:"personal"},{id:2,user:"John Doe",thumb:"profile-14.jpeg",title:"Receive Package",description:"Facilisis curabitur facilisis vel elit sed dapibus sodales purus.",date:"11/02/2020",isFav:!0,tag:""},{id:3,user:"Kia Jain",thumb:"profile-15.jpeg",title:"Download Docs",description:"Proin a dui malesuada, laoreet mi vel, imperdiet diam quam laoreet.",date:"11/04/2020",isFav:!1,tag:"work"},{id:4,user:"Max Smith",thumb:"profile-16.jpeg",title:"Meeting at 4:50pm",description:"Excepteur sint occaecat cupidatat non proident, anim id est laborum.",date:"11/08/2020",isFav:!1,tag:""},{id:5,user:"Karena Courtliff",thumb:"profile-17.jpeg",title:"Backup Files EOD",description:"Maecenas condimentum neque mollis, egestas leo ut, gravida.",date:"11/09/2020",isFav:!1,tag:""},{id:6,user:"Max Smith",thumb:"profile-16.jpeg",title:"Download Server Logs",description:"Suspendisse efficitur diam quis gravida. Nunc molestie est eros.",date:"11/09/2020",isFav:!1,tag:"social"},{id:7,user:"Vladamir Koschek",thumb:"",title:"Team meet at Starbucks",description:"Etiam a odio eget enim aliquet laoreet lobortis sed ornare nibh.",date:"11/10/2020",isFav:!1,tag:""},{id:8,user:"Max Smith",thumb:"profile-16.jpeg",title:"Create new users Profile",description:"Duis aute irure in nulla pariatur. Etiam a odio eget enim aliquet.",date:"11/11/2020",isFav:!1,tag:"important"},{id:9,user:"Robert Garcia",thumb:"profile-21.jpeg",title:"Create a compost pile",description:"Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.",date:"11/12/2020",isFav:!0,tag:""},{id:10,user:"Marie Hamilton",thumb:"profile-2.jpeg",title:"Take a hike at a local park",description:"De carne lumbering animata corpora quaeritis. Summus brains sit",date:"11/13/2020",isFav:!0,tag:""},{id:11,user:"Megan Meyers",thumb:"profile-1.jpeg",title:"Take a class at local community center that interests you",description:"Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin.",date:"11/13/2020",isFav:!1,tag:""},{id:12,user:"Angela Hull",thumb:"profile-22.jpeg",title:"Research a topic interested in",description:"Lemon drops tootsie roll marshmallow halvah carrot cake.",date:"11/14/2020",isFav:!1,tag:""},{id:13,user:"Karen Wolf",thumb:"profile-23.jpeg",title:"Plan a trip to another country",description:"Space, the final frontier. These are the voyages of the Starship Enterprise.",date:"11/16/2020",isFav:!0,tag:""},{id:14,user:"Jasmine Barnes",thumb:"profile-1.jpeg",title:"Improve touch typing",description:"Well, the way they make shows is, they make one show.",date:"11/16/2020",isFav:!1,tag:""},{id:15,user:"Thomas Cox",thumb:"profile-11.jpeg",title:"Learn Express.js",description:"Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.",date:"11/17/2020",isFav:!1,tag:"work"},{id:16,user:"Marcus Jones",thumb:"profile-12.jpeg",title:"Learn calligraphy",description:"Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.",date:"11/17/2020",isFav:!1,tag:""},{id:17,user:"Matthew Gray",thumb:"profile-24.jpeg",title:"Have a photo session with some friends",description:"Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.",date:"11/18/2020",isFav:!1,tag:"important"},{id:18,user:"Chad Davis",thumb:"profile-31.jpeg",title:"Go to the gym",description:"Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit.",date:"11/18/2020",isFav:!1,tag:""},{id:19,user:"Linda Drake",thumb:"profile-23.jpeg",title:"Make own LEGO creation",description:"Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",date:"11/18/2020",isFav:!1,tag:"social"},{id:20,user:"Kathleen Flores",thumb:"profile-34.jpeg",title:"Take cat on a walk",description:"Baseball ipsum dolor sit amet cellar rubber win hack tossed. ",date:"11/18/2020",isFav:!1,tag:"personal"}]),I={id:null,title:"",description:"",tag:"",user:"",thumb:""},[a,g]=s.useState(JSON.parse(JSON.stringify(I))),[L,h]=s.useState(!1),[J,p]=s.useState(!1),[b,j]=s.useState(!1),[E,v]=s.useState(!1),[x,f]=s.useState([]),[r,z]=s.useState("all"),[G,H]=s.useState(null),d=()=>{f(r!=="fav"?r!=="all"||r==="delete"?o.filter(t=>t.tag===r):o:o.filter(t=>t.isFav))},R=()=>{if(!a.title)return k("Title is required.","error"),!1;if(a.id){let t=o.find(l=>l.id===a.id);t.title=a.title,t.user=a.user,t.description=a.description,t.tag=a.tag}else{let t=o.reduce((m,w)=>w.id>m?w.id:m,o[0].id);t||(t=0);let l=new Date,i={id:t+1,title:a.title,user:a.user,thumb:"profile-21.jpeg",description:a.description,date:l.getDate()+"/"+Number(l.getMonth())+1+"/"+l.getFullYear(),isFav:!1,tag:a.tag};o.splice(0,0,i),d()}k("Note has been saved successfully."),h(!1),d()},c=t=>{z(t),j(!1),d()},V=t=>{let l=x,i=l.find(m=>m.id===t.id);i.isFav=!i.isFav,f([...l]),(r!=="all"||r==="delete")&&d()},N=(t,l="")=>{let i=x,m=x.find(w=>w.id===t.id);m.tag=l,f([...i]),(r!=="all"||r==="delete")&&d()},y=t=>{const{value:l,id:i}=t.target;g({...a,[i]:l})},$=t=>{H(t),p(!0)},B=t=>{g(t),v(!0)},K=(t=null)=>{j(!1);const l=JSON.parse(JSON.stringify(I));if(g(l),t){let i=JSON.parse(JSON.stringify(t));g(i)}h(!0)},W=()=>{q(o.filter(t=>t.id!==G.id)),d(),k("Note has been deleted successfully."),p(!1)},k=(t="",l="success")=>{se.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:l,title:t,padding:"10px 20px"})};s.useEffect(()=>{d()},[r,o]);const P=_(t=>t.themeConfig.rtlClass)==="rtl";return e.jsx("div",{children:e.jsxs("div",{className:"flex gap-5 relative sm:h-[calc(100vh_-_150px)] h-full",children:[e.jsx("div",{className:`bg-black/60 z-10 w-full h-full rounded-md absolute hidden ${b?"!block xl:!hidden":""}`,onClick:()=>j(!b)}),e.jsxs("div",{className:`panel
                    p-4
                    flex-none
                    w-[240px]
                    absolute
                    xl:relative
                    z-10
                    space-y-4
                    h-full
                    xl:h-auto
                    hidden
                    xl:block
                    ltr:lg:rounded-r-md ltr:rounded-r-none
                    rtl:lg:rounded-l-md rtl:rounded-l-none
                    overflow-hidden ${b?"!block h-full ltr:left-0 rtl:right-0":"hidden shadow"}`,children:[e.jsxs("div",{className:"flex flex-col h-full pb-16",children:[e.jsxs("div",{className:"flex text-center items-center",children:[e.jsx("div",{className:"shrink-0",children:e.jsx(le,{})}),e.jsx("h3",{className:"text-lg font-semibold ltr:ml-3 rtl:mr-3",children:"Notes"})]}),e.jsx("div",{className:"h-px w-full border-b border-white-light dark:border-[#1b2e4b] my-4"}),e.jsx(Y,{className:"relative ltr:pr-3.5 rtl:pl-3.5 ltr:-mr-3.5 rtl:-ml-3.5 h-full grow",children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("button",{type:"button",className:`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 ${r==="all"&&"bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]"}`,onClick:()=>c("all"),children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(re,{className:"shrink-0"}),e.jsx("div",{className:"ltr:ml-3 rtl:mr-3",children:"All Notes"})]})}),e.jsx("button",{type:"button",className:`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 ${r==="fav"&&"bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]"}`,onClick:()=>c("fav"),children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(S,{className:"shrink-0"}),e.jsx("div",{className:"ltr:ml-3 rtl:mr-3",children:"Favourites"})]})}),e.jsx("div",{className:"h-px w-full border-b border-white-light dark:border-[#1b2e4b]"}),e.jsx("div",{className:"px-1 py-3 text-white-dark",children:"Tags"}),e.jsxs("button",{type:"button",className:`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-primary ltr:hover:pl-3 rtl:hover:pr-3 duration-300 ${r==="personal"&&"ltr:pl-3 rtl:pr-3 bg-gray-100 dark:bg-[#181F32]"}`,onClick:()=>c("personal"),children:[e.jsx(n,{className:"fill-primary shrink-0"}),e.jsx("div",{className:"ltr:ml-3 rtl:mr-3",children:"Personal"})]}),e.jsxs("button",{type:"button",className:`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-warning ltr:hover:pl-3 rtl:hover:pr-3 duration-300 ${r==="work"&&"ltr:pl-3 rtl:pr-3 bg-gray-100 dark:bg-[#181F32]"}`,onClick:()=>c("work"),children:[e.jsx(n,{className:"fill-warning shrink-0"}),e.jsx("div",{className:"ltr:ml-3 rtl:mr-3",children:"Work"})]}),e.jsxs("button",{type:"button",className:`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-info ltr:hover:pl-3 rtl:hover:pr-3 duration-300 ${r==="social"&&"ltr:pl-3 rtl:pr-3 bg-gray-100 dark:bg-[#181F32]"}`,onClick:()=>c("social"),children:[e.jsx(n,{className:"fill-info shrink-0"}),e.jsx("div",{className:"ltr:ml-3 rtl:mr-3",children:"Social"})]}),e.jsxs("button",{type:"button",className:`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-danger ltr:hover:pl-3 rtl:hover:pr-3 duration-300 ${r==="important"&&"ltr:pl-3 rtl:pr-3 bg-gray-100 dark:bg-[#181F32]"}`,onClick:()=>c("important"),children:[e.jsx(n,{className:"fill-danger shrink-0"}),e.jsx("div",{className:"ltr:ml-3 rtl:mr-3",children:"Important"})]})]})})]}),e.jsx("div",{className:"ltr:left-0 rtl:right-0 absolute bottom-0 p-4 w-full",children:e.jsxs("button",{className:"btn btn-primary w-full",type:"button",onClick:()=>K(),children:[e.jsx(ie,{className:"w-5 h-5 ltr:mr-2 rtl:ml-2 shrink-0"}),"Add New Note"]})})]}),e.jsxs("div",{className:"panel flex-1 overflow-auto h-full",children:[e.jsx("div",{className:"pb-5",children:e.jsx("button",{type:"button",className:"xl:hidden hover:text-primary",onClick:()=>j(!b),children:e.jsx(Z,{})})}),x.length?e.jsx("div",{className:"sm:min-h-[300px] min-h-[400px]",children:e.jsx("div",{className:"grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5",children:x.map(t=>e.jsxs("div",{className:`panel pb-12 ${t.tag==="personal"?"bg-primary-light shadow-primary":t.tag==="work"?"bg-warning-light shadow-warning":t.tag==="social"?"bg-info-light shadow-info":t.tag==="important"?"bg-danger-light shadow-danger":"dark:shadow-dark"}`,children:[e.jsxs("div",{className:"min-h-[142px]",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"flex items-center w-max",children:[e.jsxs("div",{className:"flex-none",children:[t.thumb&&e.jsx("div",{className:"p-0.5 bg-gray-300 dark:bg-gray-700 rounded-full",children:e.jsx("img",{className:"h-8 w-8 rounded-full object-cover",alt:"img",src:`/assets/images/${t.thumb}`})}),!t.thumb&&t.user&&e.jsx("div",{className:"grid place-content-center h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-700 text-sm font-semibold",children:t.user.charAt(0)+""+t.user.charAt(t.user.indexOf("")+1)}),!t.thumb&&!t.user&&e.jsx("div",{className:"bg-gray-300 dark:bg-gray-700 rounded-full p-2",children:e.jsx(Q,{className:"w-4.5 h-4.5"})})]}),e.jsxs("div",{className:"ltr:ml-2 rtl:mr-2",children:[e.jsx("div",{className:"font-semibold",children:t.user}),e.jsx("div",{className:"text-sx text-white-dark",children:t.date})]})]}),e.jsx("div",{className:"dropdown",children:e.jsx(A,{offset:[0,5],placement:`${P?"bottom-start":"bottom-end"}`,btnClassName:"text-primary",button:e.jsx(ee,{className:"rotate-90 opacity-70 hover:opacity-100"}),children:e.jsxs("ul",{className:"text-sm font-medium",children:[e.jsx("li",{children:e.jsxs("button",{type:"button",onClick:()=>K(t),children:[e.jsx(te,{className:"w-4 h-4 ltr:mr-3 rtl:ml-3 shrink-0"}),"Edit"]})}),e.jsx("li",{children:e.jsxs("button",{type:"button",onClick:()=>$(t),children:[e.jsx(F,{className:"w-4.5 h-4.5 ltr:mr-3 rtl:ml-3 shrink-0"}),"Delete"]})}),e.jsx("li",{children:e.jsxs("button",{type:"button",onClick:()=>B(t),children:[e.jsx(ae,{className:"w-4.5 h-4.5 ltr:mr-3 rtl:ml-3 shrink-0"}),"View"]})})]})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mt-4",children:t.title}),e.jsx("p",{className:"text-white-dark mt-2",children:t.description})]})]}),e.jsx("div",{className:"absolute bottom-5 left-0 w-full px-5",children:e.jsxs("div",{className:"flex items-center justify-between mt-2",children:[e.jsx("div",{className:"dropdown fdfdf",children:e.jsx(A,{offset:[0,5],placement:`${P?"bottom-end":"bottom-start"}`,btnClassName:`${t.tag==="personal"?"text-primary":t.tag==="work"?"text-warning":t.tag==="social"?"text-info":t.tag==="important"?"text-danger":""}`,button:e.jsx("span",{children:e.jsx(n,{className:t.tag==="personal"?"fill-primary":t.tag==="work"?"fill-warning":t.tag==="social"?"fill-info":t.tag==="important"?"fill-danger":""})}),children:e.jsxs("ul",{className:"text-sm font-medium",children:[e.jsx("li",{children:e.jsxs("button",{type:"button",onClick:()=>N(t,"personal"),children:[e.jsx(n,{className:"ltr:mr-2 rtl:ml-2 fill-primary text-primary"}),"Personal"]})}),e.jsx("li",{children:e.jsxs("button",{type:"button",onClick:()=>N(t,"work"),children:[e.jsx(n,{className:"ltr:mr-2 rtl:ml-2 fill-warning text-warning"}),"Work"]})}),e.jsx("li",{children:e.jsxs("button",{type:"button",onClick:()=>N(t,"social"),children:[e.jsx(n,{className:"ltr:mr-2 rtl:ml-2 fill-info text-info"}),"Social"]})}),e.jsx("li",{children:e.jsxs("button",{type:"button",onClick:()=>N(t,"important"),children:[e.jsx(n,{className:"ltr:mr-2 rtl:ml-2 fill-danger text-danger"}),"Important"]})})]})})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("button",{type:"button",className:"text-danger",onClick:()=>$(t),children:e.jsx(F,{})}),e.jsx("button",{type:"button",className:"text-warning group ltr:ml-2 rtl:mr-2",onClick:()=>V(t),children:e.jsx(S,{className:`w-4.5 h-4.5 group-hover:fill-warning ${t.isFav&&"fill-warning"}`})})]})]})})]},t.id))})}):e.jsx("div",{className:"flex justify-center items-center sm:min-h-[300px] min-h-[400px] font-semibold text-lg h-full",children:"No data available"}),e.jsx(M,{appear:!0,show:L,as:s.Fragment,children:e.jsxs(T,{as:"div",open:L,onClose:()=>h(!1),className:"relative z-[51]",children:[e.jsx(u,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-[black]/60"})}),e.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-center justify-center px-4 py-8",children:e.jsx(u,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(D,{className:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark",children:[e.jsx("button",{type:"button",onClick:()=>h(!1),className:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",children:e.jsx(C,{})}),e.jsx("div",{className:"text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]",children:a.id?"Edit Note":"Add Note"}),e.jsx("div",{className:"p-5",children:e.jsxs("form",{children:[e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"title",children:"Title"}),e.jsx("input",{id:"title",type:"text",placeholder:"Enter Title",className:"form-input",value:a.title,onChange:t=>y(t)})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"name",children:"User Name"}),e.jsxs("select",{id:"user",className:"form-select",value:a.user,onChange:t=>y(t),children:[e.jsx("option",{value:"",children:"Select User"}),e.jsx("option",{value:"Max Smith",children:"Max Smith"}),e.jsx("option",{value:"John Doe",children:"John Doe"}),e.jsx("option",{value:"Kia Jain",children:"Kia Jain"}),e.jsx("option",{value:"Karena Courtliff",children:"Karena Courtliff"}),e.jsx("option",{value:"Vladamir Koschek",children:"Vladamir Koschek"}),e.jsx("option",{value:"Robert Garcia",children:"Robert Garcia"}),e.jsx("option",{value:"Marie Hamilton",children:"Marie Hamilton"}),e.jsx("option",{value:"Megan Meyers",children:"Megan Meyers"}),e.jsx("option",{value:"Angela Hull",children:"Angela Hull"}),e.jsx("option",{value:"Karen Wolf",children:"Karen Wolf"}),e.jsx("option",{value:"Jasmine Barnes",children:"Jasmine Barnes"}),e.jsx("option",{value:"Thomas Cox",children:"Thomas Cox"}),e.jsx("option",{value:"Marcus Jones",children:"Marcus Jones"}),e.jsx("option",{value:"Matthew Gray",children:"Matthew Gray"}),e.jsx("option",{value:"Chad Davis",children:"Chad Davis"}),e.jsx("option",{value:"Linda Drake",children:"Linda Drake"}),e.jsx("option",{value:"Kathleen Flores",children:"Kathleen Flores"})]})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"tag",children:"Tag"}),e.jsxs("select",{id:"tag",className:"form-select",value:a.tag,onChange:t=>y(t),children:[e.jsx("option",{value:"",children:"None"}),e.jsx("option",{value:"personal",children:"Personal"}),e.jsx("option",{value:"work",children:"Work"}),e.jsx("option",{value:"social",children:"Social"}),e.jsx("option",{value:"important",children:"Important"})]})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"desc",children:"Description"}),e.jsx("textarea",{id:"description",rows:3,className:"form-textarea resize-none min-h-[130px]",placeholder:"Enter Description",value:a.description,onChange:t=>y(t)})]}),e.jsxs("div",{className:"flex justify-end items-center mt-8",children:[e.jsx("button",{type:"button",className:"btn btn-outline-danger gap-2",onClick:()=>h(!1),children:"Cancel"}),e.jsx("button",{type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",onClick:R,children:a.id?"Update Note":"Add Note"})]})]})})]})})})})]})}),e.jsx(M,{appear:!0,show:J,as:s.Fragment,children:e.jsxs(T,{as:"div",open:J,onClose:()=>p(!1),className:"relative z-[51]",children:[e.jsx(u,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-[black]/60"})}),e.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-center justify-center px-4 py-8",children:e.jsx(u,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(D,{className:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark",children:[e.jsx("button",{type:"button",onClick:()=>p(!1),className:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",children:e.jsx(C,{})}),e.jsx("div",{className:"text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]",children:"Delete Notes"}),e.jsxs("div",{className:"p-5 text-center",children:[e.jsx("div",{className:"text-white bg-danger ring-4 ring-danger/30 p-4 rounded-full w-fit mx-auto",children:e.jsx(F,{className:"w-7 h-7 mx-auto"})}),e.jsx("div",{className:"sm:w-3/4 mx-auto mt-5",children:"Are you sure you want to delete Notes?"}),e.jsxs("div",{className:"flex justify-center items-center mt-8",children:[e.jsx("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>p(!1),children:"Cancel"}),e.jsx("button",{type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",onClick:W,children:"Delete"})]})]})]})})})})]})}),e.jsx(M,{appear:!0,show:E,as:s.Fragment,children:e.jsxs(T,{as:"div",open:E,onClose:()=>v(!1),className:"relative z-[51]",children:[e.jsx(u,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-[black]/60"})}),e.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-center justify-center px-4 py-8",children:e.jsx(u,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(D,{className:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark",children:[e.jsx("button",{type:"button",onClick:()=>v(!1),className:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",children:e.jsx(C,{})}),e.jsxs("div",{className:"flex items-center flex-wrap gap-2 text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]",children:[e.jsx("div",{className:"ltr:mr-3 rtl:ml-3",children:a.title}),a.tag&&e.jsx("button",{type:"button",className:`badge badge-outline-primary rounded-3xl capitalize ltr:mr-3 rtl:ml-3 ${a.tag,a.tag,a.tag,a.tag==="important"&&"shadow-danger"}`,children:a.tag}),a.isFav&&e.jsx("button",{type:"button",className:"text-warning",children:e.jsx(S,{className:"fill-warning"})})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("div",{className:"text-base",children:a.description}),e.jsx("div",{className:"ltr:text-right rtl:text-left mt-8",children:e.jsx("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>v(!1),children:"Close"})})]})]})})})})]})})]})]})})};export{ge as default};