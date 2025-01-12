import{u as f,r as o,s as u,a as x,j as e,L as v,D as l,I as a,b as r,c as h}from"./index-CBoie6xj.js";import{_ as m}from"./react-apexcharts.min-DizY07ow.js";import{I as j}from"./IconCircleCheck-2o98awTT.js";const k=()=>{const p=f();o.useEffect(()=>{p(u("Dashboard"))});const[d]=o.useState(!1),i=x(t=>t.themeConfig.theme==="dark"||t.themeConfig.isDarkMode),s=x(t=>t.themeConfig.rtlClass)==="rtl",n={series:[{name:"Income",data:[16800,16800,15500,17800,15500,17e3,19e3,16e3,15e3,17e3,14e3,17e3]},{name:"Expenses",data:[16500,17500,16200,17300,16e3,19500,16e3,17e3,16e3,19e3,18e3,19e3]}],options:{chart:{height:325,type:"area",fontFamily:"Nunito, sans-serif",zoom:{enabled:!1},toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{show:!0,curve:"smooth",width:2,lineCap:"square"},dropShadow:{enabled:!0,opacity:.2,blur:10,left:-7,top:22},colors:i?["#2196F3","#E7515A"]:["#1B55E2","#E7515A"],markers:{discrete:[{seriesIndex:0,dataPointIndex:6,fillColor:"#1B55E2",strokeColor:"transparent",size:7},{seriesIndex:1,dataPointIndex:5,fillColor:"#E7515A",strokeColor:"transparent",size:7}]},labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{show:!0},labels:{offsetX:s?2:0,offsetY:5,style:{fontSize:"12px",cssClass:"apexcharts-xaxis-title"}}},yaxis:{tickAmount:7,labels:{formatter:t=>t/1e3+"K",offsetX:s?-30:-10,offsetY:0,style:{fontSize:"12px",cssClass:"apexcharts-yaxis-title"}},opposite:!!s},grid:{borderColor:i?"#191E3A":"#E0E6ED",strokeDashArray:5,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:0,right:0,bottom:0,left:0}},legend:{position:"top",horizontalAlign:"right",fontSize:"16px",markers:{width:10,height:10,offsetX:-2},itemMargin:{horizontal:10,vertical:5}},tooltip:{marker:{show:!0},x:{show:!1}},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:i?.19:.28,opacityTo:.05,stops:i?[100,100]:[45,100]}}}},c={series:[985,737,270],options:{chart:{type:"donut",height:460,fontFamily:"Nunito, sans-serif"},dataLabels:{enabled:!1},stroke:{show:!0,width:25,colors:i?"#0e1726":"#fff"},colors:i?["#5c1ac3","#e2a03f","#e7515a","#e2a03f"]:["#e2a03f","#5c1ac3","#e7515a"],legend:{position:"bottom",horizontalAlign:"center",fontSize:"14px",markers:{width:10,height:10,offsetX:-2},height:50,offsetY:20},plotOptions:{pie:{donut:{size:"65%",background:"transparent",labels:{show:!0,name:{show:!0,fontSize:"29px",offsetY:-10},value:{show:!0,fontSize:"26px",color:i?"#bfc9d4":void 0,offsetY:16,formatter:t=>t},total:{show:!0,label:"Total",color:"#888ea8",fontSize:"29px",formatter:t=>t.globals.seriesTotals.reduce(function(b,N){return b+N},0)}}}}},labels:["Apparel","Sports","Others"],states:{hover:{filter:{type:"none",value:.15}},active:{filter:{type:"none",value:.15}}}}};return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(v,{to:"#",className:"text-primary hover:underline",children:"Dashboard"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Finance"})})]}),e.jsx("div",{className:"pt-5",children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6 text-white",children:[e.jsxs("div",{className:"panel bg-gradient-to-r from-cyan-500 to-cyan-400",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"ltr:mr-1 rtl:ml-1 text-md font-semibold",children:"Users Visit"}),e.jsx("div",{className:"dropdown",children:e.jsx(l,{offset:[0,5],placement:`${s?"bottom-start":"bottom-end"}`,btnClassName:"hover:opacity-80",button:e.jsx(a,{className:"hover:opacity-80 opacity-70"}),children:e.jsxs("ul",{className:"text-black dark:text-white-dark",children:[e.jsx("li",{children:e.jsx("button",{type:"button",children:"View Report"})}),e.jsx("li",{children:e.jsx("button",{type:"button",children:"Edit Report"})})]})})})]}),e.jsxs("div",{className:"flex items-center mt-5",children:[e.jsx("div",{className:"text-3xl font-bold ltr:mr-3 rtl:ml-3",children:" $170.46 "}),e.jsx("div",{className:"badge bg-white/30",children:"+ 2.35% "})]}),e.jsxs("div",{className:"flex items-center font-semibold mt-5",children:[e.jsx(r,{className:"ltr:mr-2 rtl:ml-2 shrink-0"}),"Last Week 44,700"]})]}),e.jsxs("div",{className:"panel bg-gradient-to-r from-violet-500 to-violet-400",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"ltr:mr-1 rtl:ml-1 text-md font-semibold",children:"Sessions"}),e.jsx("div",{className:"dropdown",children:e.jsx(l,{offset:[0,5],placement:`${s?"bottom-start":"bottom-end"}`,btnClassName:"hover:opacity-80",button:e.jsx(a,{className:"hover:opacity-80 opacity-70"}),children:e.jsxs("ul",{className:"text-black dark:text-white-dark",children:[e.jsx("li",{children:e.jsx("button",{type:"button",children:"View Report"})}),e.jsx("li",{children:e.jsx("button",{type:"button",children:"Edit Report"})})]})})})]}),e.jsxs("div",{className:"flex items-center mt-5",children:[e.jsx("div",{className:"text-3xl font-bold ltr:mr-3 rtl:ml-3",children:" 74,137 "}),e.jsx("div",{className:"badge bg-white/30",children:"- 2.35% "})]}),e.jsxs("div",{className:"flex items-center font-semibold mt-5",children:[e.jsx(r,{className:"ltr:mr-2 rtl:ml-2 shrink-0"}),"Last Week 84,709"]})]}),e.jsxs("div",{className:"panel bg-gradient-to-r from-blue-500 to-blue-400",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"ltr:mr-1 rtl:ml-1 text-md font-semibold",children:"Time On-Site"}),e.jsx("div",{className:"dropdown",children:e.jsx(l,{offset:[0,5],placement:`${s?"bottom-start":"bottom-end"}`,btnClassName:"hover:opacity-80",button:e.jsx(a,{className:"hover:opacity-80 opacity-70"}),children:e.jsxs("ul",{className:"text-black dark:text-white-dark",children:[e.jsx("li",{children:e.jsx("button",{type:"button",children:"View Report"})}),e.jsx("li",{children:e.jsx("button",{type:"button",children:"Edit Report"})})]})})})]}),e.jsxs("div",{className:"flex items-center mt-5",children:[e.jsx("div",{className:"text-3xl font-bold ltr:mr-3 rtl:ml-3",children:" 38,085 "}),e.jsx("div",{className:"badge bg-white/30",children:"+ 1.35% "})]}),e.jsxs("div",{className:"flex items-center font-semibold mt-5",children:[e.jsx(r,{className:"ltr:mr-2 rtl:ml-2 shrink-0"}),"Last Week 37,894"]})]}),e.jsxs("div",{className:"panel bg-gradient-to-r from-fuchsia-500 to-fuchsia-400",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"ltr:mr-1 rtl:ml-1 text-md font-semibold",children:"Bounce Rate"}),e.jsx("div",{className:"dropdown",children:e.jsx(l,{offset:[0,5],placement:`${s?"bottom-start":"bottom-end"}`,btnClassName:"hover:opacity-80",button:e.jsx(a,{className:"hover:opacity-80 opacity-70"}),children:e.jsxs("ul",{className:"text-black dark:text-white-dark",children:[e.jsx("li",{children:e.jsx("button",{type:"button",children:"View Report"})}),e.jsx("li",{children:e.jsx("button",{type:"button",children:"Edit Report"})})]})})})]}),e.jsxs("div",{className:"flex items-center mt-5",children:[e.jsx("div",{className:"text-3xl font-bold ltr:mr-3 rtl:ml-3",children:" 49.10% "}),e.jsx("div",{className:"badge bg-white/30",children:"- 0.35% "})]}),e.jsxs("div",{className:"flex items-center font-semibold mt-5",children:[e.jsx(r,{className:"ltr:mr-2 rtl:ml-2 shrink-0"}),"Last Week 50.01%"]})]})]})}),e.jsxs("div",{className:"grid xl:grid-cols-3 gap-6 mb-6",children:[e.jsxs("div",{className:"panel h-full xl:col-span-2",children:[e.jsxs("div",{className:"flex items-center justify-between dark:text-white-light mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg",children:"Revenue"}),e.jsx("div",{className:"dropdown",children:e.jsx(l,{offset:[0,1],placement:`${s?"bottom-start":"bottom-end"}`,button:e.jsx(a,{className:"text-black/70 dark:text-white/70 hover:!text-primary"}),children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("button",{type:"button",children:"Weekly"})}),e.jsx("li",{children:e.jsx("button",{type:"button",children:"Monthly"})}),e.jsx("li",{children:e.jsx("button",{type:"button",children:"Yearly"})})]})})})]}),e.jsxs("p",{className:"text-lg dark:text-white-light/90",children:["Total Profit ",e.jsx("span",{className:"text-primary ml-2",children:"$10,840"})]}),e.jsx("div",{className:"relative",children:e.jsx("div",{className:"bg-white dark:bg-black rounded-lg overflow-hidden",children:d?e.jsx("div",{className:"min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ",children:e.jsx("span",{className:"animate-spin border-2 border-black dark:border-white !border-l-transparent  rounded-full w-5 h-5 inline-flex"})}):e.jsx(m,{series:n.series,options:n.options,type:"area",height:325})})})]}),e.jsxs("div",{className:"panel h-full",children:[e.jsx("div",{className:"flex items-center mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Sales By Category"})}),e.jsx("div",{children:e.jsx("div",{className:"bg-white dark:bg-black rounded-lg overflow-hidden",children:d?e.jsx("div",{className:"min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ",children:e.jsx("span",{className:"animate-spin border-2 border-black dark:border-white !border-l-transparent  rounded-full w-5 h-5 inline-flex"})}):e.jsx(m,{series:c.series,options:c.options,type:"donut",height:460})})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"grid gap-6 xl:grid-flow-row",children:[e.jsxs("div",{className:"panel overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-lg font-bold",children:"Previous Statement"}),e.jsx("div",{className:"text-success",children:" Paid on June 27, 2022 "})]}),e.jsx("div",{className:"dropdown",children:e.jsx(l,{offset:[0,5],placement:`${s?"bottom-start":"bottom-end"}`,btnClassName:"hover:opacity-80",button:e.jsx(a,{className:"hover:opacity-80 opacity-70"}),children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("button",{type:"button",children:"View Report"})}),e.jsx("li",{children:e.jsx("button",{type:"button",children:"Edit Report"})})]})})})]}),e.jsxs("div",{className:"relative mt-10",children:[e.jsx("div",{className:"absolute -bottom-12 ltr:-right-12 rtl:-left-12 w-24 h-24",children:e.jsx(j,{className:"text-success opacity-20 w-full h-full"})}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-primary",children:"Card Limit"}),e.jsx("div",{className:"mt-2 font-semibold text-2xl",children:"$50,000.00"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-primary",children:"Spent"}),e.jsx("div",{className:"mt-2 font-semibold text-2xl",children:"$15,000.00"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-primary",children:"Minimum"}),e.jsx("div",{className:"mt-2 font-semibold text-2xl",children:"$2,500.00"})]})]})]})]}),e.jsxs("div",{className:"panel overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-lg font-bold",children:"Current Statement"}),e.jsx("div",{className:"text-danger",children:" Must be paid before July 27, 2022 "})]}),e.jsx("div",{className:"dropdown",children:e.jsx(l,{offset:[0,5],placement:`${s?"bottom-start":"bottom-end"}`,button:e.jsx(a,{className:"hover:opacity-80 opacity-70"}),children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("button",{type:"button",children:"View Report"})}),e.jsx("li",{children:e.jsx("button",{type:"button",children:"Edit Report"})})]})})})]}),e.jsxs("div",{className:"relative mt-10",children:[e.jsx("div",{className:"absolute -bottom-12 ltr:-right-12 rtl:-left-12 w-24 h-24",children:e.jsx(h,{className:"text-danger opacity-20 w-24 h-full"})}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-primary",children:"Card Limit"}),e.jsx("div",{className:"mt-2 font-semibold text-2xl",children:"$50,000.00"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-primary",children:"Spent"}),e.jsx("div",{className:"mt-2 font-semibold text-2xl",children:"$30,500.00"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-primary",children:"Minimum"}),e.jsx("div",{className:"mt-2 font-semibold text-2xl",children:"$8,000.00"})]})]})]})]})]}),e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"mb-5 text-lg font-bold",children:"Recent Transactions"}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"ltr:rounded-l-md rtl:rounded-r-md",children:"ID"}),e.jsx("th",{children:"DATE"}),e.jsx("th",{children:"NAME"}),e.jsx("th",{children:"AMOUNT"}),e.jsx("th",{className:"text-center ltr:rounded-r-md rtl:rounded-l-md",children:"STATUS"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-semibold",children:"#01"}),e.jsx("td",{className:"whitespace-nowrap",children:"Oct 08, 2021"}),e.jsx("td",{className:"whitespace-nowrap",children:"Eric Page"}),e.jsx("td",{children:"$1,358.75"}),e.jsx("td",{className:"text-center",children:e.jsx("span",{className:"badge bg-success/20 text-success rounded-full hover:top-0",children:"Completed"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-semibold",children:"#02"}),e.jsx("td",{className:"whitespace-nowrap",children:"Dec 18, 2021"}),e.jsx("td",{className:"whitespace-nowrap",children:"Nita Parr"}),e.jsx("td",{children:"-$1,042.82"}),e.jsx("td",{className:"text-center",children:e.jsx("span",{className:"badge bg-info/20 text-info rounded-full hover:top-0",children:"In Process"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-semibold",children:"#03"}),e.jsx("td",{className:"whitespace-nowrap",children:"Dec 25, 2021"}),e.jsx("td",{className:"whitespace-nowrap",children:"Carl Bell"}),e.jsx("td",{children:"$1,828.16"}),e.jsx("td",{className:"text-center",children:e.jsx("span",{className:"badge bg-danger/20 text-danger rounded-full hover:top-0",children:"Pending"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-semibold",children:"#04"}),e.jsx("td",{className:"whitespace-nowrap",children:"Nov 29, 2021"}),e.jsx("td",{className:"whitespace-nowrap",children:"Dan Hart"}),e.jsx("td",{children:"$1,647.55"}),e.jsx("td",{className:"text-center",children:e.jsx("span",{className:"badge bg-success/20 text-success rounded-full hover:top-0",children:"Completed"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-semibold",children:"#05"}),e.jsx("td",{className:"whitespace-nowrap",children:"Nov 24, 2021"}),e.jsx("td",{className:"whitespace-nowrap",children:"Jake Ross"}),e.jsx("td",{children:"$927.43"}),e.jsx("td",{className:"text-center",children:e.jsx("span",{className:"badge bg-success/20 text-success rounded-full hover:top-0",children:"Completed"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-semibold",children:"#06"}),e.jsx("td",{className:"whitespace-nowrap",children:"Jan 26, 2022"}),e.jsx("td",{className:"whitespace-nowrap",children:"Anna Bell"}),e.jsx("td",{children:"$250.00"}),e.jsx("td",{className:"text-center",children:e.jsx("span",{className:"badge bg-info/20 text-info rounded-full hover:top-0",children:"In Process"})})]})]})]})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5",children:[e.jsxs("div",{className:"grid gap-6 xl:grid-flow-row",children:[e.jsxs("div",{className:"panel overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-lg font-bold",children:"Previous Statement"}),e.jsx("div",{className:"text-success",children:" Paid on June 27, 2022 "})]}),e.jsx("div",{className:"dropdown",children:e.jsx(l,{offset:[0,5],placement:`${s?"bottom-start":"bottom-end"}`,btnClassName:"hover:opacity-80",button:e.jsx(a,{className:"hover:opacity-80 opacity-70"}),children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("button",{type:"button",children:"View Report"})}),e.jsx("li",{children:e.jsx("button",{type:"button",children:"Edit Report"})})]})})})]}),e.jsxs("div",{className:"relative mt-10",children:[e.jsx("div",{className:"absolute -bottom-12 ltr:-right-12 rtl:-left-12 w-24 h-24",children:e.jsx(j,{className:"text-success opacity-20 w-full h-full"})}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-primary",children:"Card Limit"}),e.jsx("div",{className:"mt-2 font-semibold text-2xl",children:"$50,000.00"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-primary",children:"Spent"}),e.jsx("div",{className:"mt-2 font-semibold text-2xl",children:"$15,000.00"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-primary",children:"Minimum"}),e.jsx("div",{className:"mt-2 font-semibold text-2xl",children:"$2,500.00"})]})]})]})]}),e.jsxs("div",{className:"panel overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-lg font-bold",children:"Current Statement"}),e.jsx("div",{className:"text-danger",children:" Must be paid before July 27, 2022 "})]}),e.jsx("div",{className:"dropdown",children:e.jsx(l,{offset:[0,5],placement:`${s?"bottom-start":"bottom-end"}`,button:e.jsx(a,{className:"hover:opacity-80 opacity-70"}),children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("button",{type:"button",children:"View Report"})}),e.jsx("li",{children:e.jsx("button",{type:"button",children:"Edit Report"})})]})})})]}),e.jsxs("div",{className:"relative mt-10",children:[e.jsx("div",{className:"absolute -bottom-12 ltr:-right-12 rtl:-left-12 w-24 h-24",children:e.jsx(h,{className:"text-danger opacity-20 w-24 h-full"})}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-primary",children:"Card Limit"}),e.jsx("div",{className:"mt-2 font-semibold text-2xl",children:"$50,000.00"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-primary",children:"Spent"}),e.jsx("div",{className:"mt-2 font-semibold text-2xl",children:"$30,500.00"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-primary",children:"Minimum"}),e.jsx("div",{className:"mt-2 font-semibold text-2xl",children:"$8,000.00"})]})]})]})]})]}),e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"mb-5 text-lg font-bold",children:"Recent Transactions"}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"ltr:rounded-l-md rtl:rounded-r-md",children:"ID"}),e.jsx("th",{children:"DATE"}),e.jsx("th",{children:"NAME"}),e.jsx("th",{children:"AMOUNT"}),e.jsx("th",{className:"text-center ltr:rounded-r-md rtl:rounded-l-md",children:"STATUS"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-semibold",children:"#01"}),e.jsx("td",{className:"whitespace-nowrap",children:"Oct 08, 2021"}),e.jsx("td",{className:"whitespace-nowrap",children:"Eric Page"}),e.jsx("td",{children:"$1,358.75"}),e.jsx("td",{className:"text-center",children:e.jsx("span",{className:"badge bg-success/20 text-success rounded-full hover:top-0",children:"Completed"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-semibold",children:"#02"}),e.jsx("td",{className:"whitespace-nowrap",children:"Dec 18, 2021"}),e.jsx("td",{className:"whitespace-nowrap",children:"Nita Parr"}),e.jsx("td",{children:"-$1,042.82"}),e.jsx("td",{className:"text-center",children:e.jsx("span",{className:"badge bg-info/20 text-info rounded-full hover:top-0",children:"In Process"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-semibold",children:"#03"}),e.jsx("td",{className:"whitespace-nowrap",children:"Dec 25, 2021"}),e.jsx("td",{className:"whitespace-nowrap",children:"Carl Bell"}),e.jsx("td",{children:"$1,828.16"}),e.jsx("td",{className:"text-center",children:e.jsx("span",{className:"badge bg-danger/20 text-danger rounded-full hover:top-0",children:"Pending"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-semibold",children:"#04"}),e.jsx("td",{className:"whitespace-nowrap",children:"Nov 29, 2021"}),e.jsx("td",{className:"whitespace-nowrap",children:"Dan Hart"}),e.jsx("td",{children:"$1,647.55"}),e.jsx("td",{className:"text-center",children:e.jsx("span",{className:"badge bg-success/20 text-success rounded-full hover:top-0",children:"Completed"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-semibold",children:"#05"}),e.jsx("td",{className:"whitespace-nowrap",children:"Nov 24, 2021"}),e.jsx("td",{className:"whitespace-nowrap",children:"Jake Ross"}),e.jsx("td",{children:"$927.43"}),e.jsx("td",{className:"text-center",children:e.jsx("span",{className:"badge bg-success/20 text-success rounded-full hover:top-0",children:"Completed"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-semibold",children:"#06"}),e.jsx("td",{className:"whitespace-nowrap",children:"Jan 26, 2022"}),e.jsx("td",{className:"whitespace-nowrap",children:"Anna Bell"}),e.jsx("td",{children:"$250.00"}),e.jsx("td",{className:"text-center",children:e.jsx("span",{className:"badge bg-info/20 text-info rounded-full hover:top-0",children:"In Process"})})]})]})]})})]})]})]})};export{k as default};
