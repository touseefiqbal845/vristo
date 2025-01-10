import{u as I,r as s,s as k,j as e,n as B,L as A,b as M}from"./index-l278j1dF.js";import{I as T}from"./IconSend-CK5_amz9.js";import{I as D}from"./IconSave-DcF3RG3q.js";import{I as P}from"./IconDownload-Cxf7_Ag8.js";const z=()=>{const d=I();s.useEffect(()=>{d(k("Invoice Edit"))});const u=["USD - US Dollar","GBP - British Pound","IDR - Indonesian Rupiah","INR - Indian Rupee","BRL - Brazilian Real","EUR - Germany (Euro)","TRY - Turkish Lira"],[h,m]=s.useState(0),[x,p]=s.useState(0),[j,v]=s.useState(0),[b,g]=s.useState("bank"),[l,o]=s.useState([{id:1,title:"Calendar App Customization",description:"Make Calendar App Dynamic",quantity:2,amount:120,isTax:!1},{id:2,title:"Chat App Customization",description:"Customized Chat Application to resolve some Bug Fixes",quantity:1,amount:25,isTax:!1}]),[f,N]=s.useState("USD - US Dollar"),[i,y]=s.useState({title:"Tailwind",invoiceNo:"#0001",to:{name:"Jesse Cory",email:"redq@company.com",address:"405 Mulberry Rd. Mc Grady, NC, 28649",phone:"(128) 666 070"},invoiceDate:"",dueDate:"",bankInfo:{no:"1234567890",name:"Bank of America",swiftCode:"VS70134",country:"United States",ibanNo:"K456G"},notes:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"});s.useEffect(()=>{let a=new Date;const n=a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1;let t=a.getDate()<10?"0"+a.getDate():a.getDate();y({...i,invoiceDate:a.getFullYear()+"-"+n+"-"+t,dueDate:a.getFullYear()+"-"+n+"-"+t})},[]);const w=()=>{let a=0;a=l!=null&&l.length?l.reduce((n,t)=>t.id>n?t.id:n,l[0].id):0,o([...l,{id:a+1,title:"",description:"",rate:0,quantity:0,amount:0}])},S=(a=null)=>{o(l.filter(n=>n.id!==a.id))},r=(a,n,t)=>{const c=l.find(C=>C.id===t);a==="quantity"&&(c.quantity=Number(n)),a==="price"&&(c.amount=Number(n)),o([...l])};return e.jsxs("div",{className:"flex xl:flex-row flex-col gap-2.5",children:[e.jsxs("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6",children:[e.jsxs("div",{className:"flex justify-between flex-wrap px-4",children:[e.jsxs("div",{className:"mb-6 lg:w-1/2 w-full",children:[e.jsx("div",{className:"flex items-center text-black dark:text-white shrink-0",children:e.jsx("img",{src:"/assets/images/logo.svg",alt:"img",className:"w-14"})}),e.jsxs("div",{className:"space-y-1 mt-6 text-gray-500 dark:text-gray-400",children:[e.jsx("div",{children:"13 Tetrick Road, Cypress Gardens, Florida, 33884, US"}),e.jsx("div",{children:"vristo@gmail.com"}),e.jsx("div",{children:"+1 (070) 123-4567"})]})]}),e.jsxs("div",{className:"lg:w-1/2 w-full lg:max-w-fit",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("label",{htmlFor:"number",className:"flex-1 ltr:mr-2 rtl:ml-2 mb-0",children:"Invoice Number"}),e.jsx("input",{id:"number",type:"text",name:"inv-num",className:"form-input lg:w-[250px] w-2/3",placeholder:"#8801",defaultValue:i.invoiceNo})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("label",{htmlFor:"invoiceLabel",className:"flex-1 ltr:mr-2 rtl:ml-2 mb-0",children:"Invoice Label"}),e.jsx("input",{id:"invoiceLabel",type:"text",name:"inv-label",className:"form-input lg:w-[250px] w-2/3",placeholder:"Enter Invoice Label",defaultValue:i.title})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("label",{htmlFor:"startDate",className:"flex-1 ltr:mr-2 rtl:ml-2 mb-0",children:"Invoice Date"}),e.jsx("input",{id:"startDate",type:"date",name:"inv-date",className:"form-input lg:w-[250px] w-2/3",defaultValue:i.invoiceDate})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("label",{htmlFor:"dueDate",className:"flex-1 ltr:mr-2 rtl:ml-2 mb-0",children:"Due Date"}),e.jsx("input",{id:"dueDate",type:"date",name:"due-date",className:"form-input lg:w-[250px] w-2/3",defaultValue:i.dueDate})]})]})]}),e.jsx("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e.jsx("div",{className:"mt-8 px-4",children:e.jsxs("div",{className:"flex justify-between lg:flex-row flex-col",children:[e.jsxs("div",{className:"lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6",children:[e.jsx("div",{className:"text-lg",children:"Bill To :-"}),e.jsxs("div",{className:"mt-4 flex items-center",children:[e.jsx("label",{htmlFor:"reciever-name",className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Name"}),e.jsx("input",{id:"reciever-name",type:"text",name:"reciever-name",className:"form-input flex-1",defaultValue:i.to.name,placeholder:"Enter Name"})]}),e.jsxs("div",{className:"mt-4 flex items-center",children:[e.jsx("label",{htmlFor:"reciever-email",className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Email"}),e.jsx("input",{id:"reciever-email",type:"email",name:"reciever-email",className:"form-input flex-1",defaultValue:i.to.email,placeholder:"Enter Email"})]}),e.jsxs("div",{className:"mt-4 flex items-center",children:[e.jsx("label",{htmlFor:"reciever-address",className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Address"}),e.jsx("input",{id:"reciever-address",type:"text",name:"reciever-address",className:"form-input flex-1",defaultValue:i.to.address,placeholder:"Enter Address"})]}),e.jsxs("div",{className:"mt-4 flex items-center",children:[e.jsx("label",{htmlFor:"reciever-number",className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Phone Number"}),e.jsx("input",{id:"reciever-number",type:"text",name:"reciever-number",className:"form-input flex-1",defaultValue:i.to.phone,placeholder:"Enter Phone number"})]})]}),e.jsxs("div",{className:"lg:w-1/2 w-full",children:[e.jsx("div",{className:"text-lg",children:"Payment Details:"}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("label",{htmlFor:"acno",className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Account Number"}),e.jsx("input",{id:"acno",type:"text",name:"acno",className:"form-input flex-1",defaultValue:i.bankInfo.no,placeholder:"Enter Account Number"})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("label",{htmlFor:"bank-name",className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Bank Name"}),e.jsx("input",{id:"bank-name",type:"text",name:"bank-name",className:"form-input flex-1",defaultValue:i.bankInfo.name,placeholder:"Enter Bank Name"})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("label",{htmlFor:"swift-code",className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"SWIFT Number"}),e.jsx("input",{id:"swift-code",type:"text",name:"swift-code",className:"form-input flex-1",defaultValue:i.bankInfo.swiftCode,placeholder:"Enter SWIFT Number"})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("label",{htmlFor:"iban-code",className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"IBAN Number"}),e.jsx("input",{id:"iban-code",type:"text",name:"iban-code",className:"form-input flex-1",defaultValue:i.bankInfo.ibanNo,placeholder:"Enter IBAN Number"})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("label",{htmlFor:"country",className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Country"}),e.jsxs("select",{id:"country",name:"country",className:"form-select flex-1",defaultValue:i.bankInfo.country,children:[e.jsx("option",{value:"",children:"Choose Country"}),e.jsx("option",{value:"United States",children:"United States"}),e.jsx("option",{value:"United Kingdom",children:"United Kingdom"}),e.jsx("option",{value:"Canada",children:"Canada"}),e.jsx("option",{value:"Australia",children:"Australia"}),e.jsx("option",{value:"Germany",children:"Germany"}),e.jsx("option",{value:"Sweden",children:"Sweden"}),e.jsx("option",{value:"Denmark",children:"Denmark"}),e.jsx("option",{value:"Norway",children:"Norway"}),e.jsx("option",{value:"New-Zealand",children:"New Zealand"}),e.jsx("option",{value:"Afghanistan",children:"Afghanistan"}),e.jsx("option",{value:"Albania",children:"Albania"}),e.jsx("option",{value:"Algeria",children:"Algeria"}),e.jsx("option",{value:"American-Samoa",children:"Andorra"}),e.jsx("option",{value:"Angola",children:"Angola"}),e.jsx("option",{value:"Antigua Barbuda",children:"Antigua & Barbuda"}),e.jsx("option",{value:"Argentina",children:"Argentina"}),e.jsx("option",{value:"Armenia",children:"Armenia"}),e.jsx("option",{value:"Aruba",children:"Aruba"}),e.jsx("option",{value:"Austria",children:"Austria"}),e.jsx("option",{value:"Azerbaijan",children:"Azerbaijan"}),e.jsx("option",{value:"Bahamas",children:"Bahamas"}),e.jsx("option",{value:"Bahrain",children:"Bahrain"}),e.jsx("option",{value:"Bangladesh",children:"Bangladesh"}),e.jsx("option",{value:"Barbados",children:"Barbados"}),e.jsx("option",{value:"Belarus",children:"Belarus"}),e.jsx("option",{value:"Belgium",children:"Belgium"}),e.jsx("option",{value:"Belize",children:"Belize"}),e.jsx("option",{value:"Benin",children:"Benin"}),e.jsx("option",{value:"Bermuda",children:"Bermuda"}),e.jsx("option",{value:"Bhutan",children:"Bhutan"}),e.jsx("option",{value:"Bolivia",children:"Bolivia"}),e.jsx("option",{value:"Bosnia",children:"Bosnia & Herzegovina"}),e.jsx("option",{value:"Botswana",children:"Botswana"}),e.jsx("option",{value:"Brazil",children:"Brazil"}),e.jsx("option",{value:"British",children:"British Virgin Islands"}),e.jsx("option",{value:"Brunei",children:"Brunei"}),e.jsx("option",{value:"Bulgaria",children:"Bulgaria"}),e.jsx("option",{value:"Burkina",children:"Burkina Faso"}),e.jsx("option",{value:"Burundi",children:"Burundi"}),e.jsx("option",{value:"Cambodia",children:"Cambodia"}),e.jsx("option",{value:"Cameroon",children:"Cameroon"}),e.jsx("option",{value:"Cape",children:"Cape Verde"}),e.jsx("option",{value:"Cayman",children:"Cayman Islands"}),e.jsx("option",{value:"Central-African",children:"Central African Republic"}),e.jsx("option",{value:"Chad",children:"Chad"}),e.jsx("option",{value:"Chile",children:"Chile"}),e.jsx("option",{value:"China",children:"China"}),e.jsx("option",{value:"Colombia",children:"Colombia"}),e.jsx("option",{value:"Comoros",children:"Comoros"}),e.jsx("option",{value:"Costa-Rica",children:"Costa Rica"}),e.jsx("option",{value:"Croatia",children:"Croatia"}),e.jsx("option",{value:"Cuba",children:"Cuba"}),e.jsx("option",{value:"Cyprus",children:"Cyprus"}),e.jsx("option",{value:"Czechia",children:"Czechia"}),e.jsx("option",{value:"Côte",children:"Côte d'Ivoire"}),e.jsx("option",{value:"Djibouti",children:"Djibouti"}),e.jsx("option",{value:"Dominica",children:"Dominica"}),e.jsx("option",{value:"Dominican",children:"Dominican Republic"}),e.jsx("option",{value:"Ecuador",children:"Ecuador"}),e.jsx("option",{value:"Egypt",children:"Egypt"}),e.jsx("option",{value:"El-Salvador",children:"El Salvador"}),e.jsx("option",{value:"Equatorial-Guinea",children:"Equatorial Guinea"}),e.jsx("option",{value:"Eritrea",children:"Eritrea"}),e.jsx("option",{value:"Estonia",children:"Estonia"}),e.jsx("option",{value:"Ethiopia",children:"Ethiopia"}),e.jsx("option",{value:"Fiji",children:"Fiji"}),e.jsx("option",{value:"Finland",children:"Finland"}),e.jsx("option",{value:"France",children:"France"}),e.jsx("option",{value:"Gabon",children:"Gabon"}),e.jsx("option",{value:"Georgia",children:"Georgia"}),e.jsx("option",{value:"Ghana",children:"Ghana"}),e.jsx("option",{value:"Greece",children:"Greece"}),e.jsx("option",{value:"Grenada",children:"Grenada"}),e.jsx("option",{value:"Guatemala",children:"Guatemala"}),e.jsx("option",{value:"Guernsey",children:"Guernsey"}),e.jsx("option",{value:"Guinea",children:"Guinea"}),e.jsx("option",{value:"Guinea-Bissau",children:"Guinea-Bissau"}),e.jsx("option",{value:"Guyana",children:"Guyana"}),e.jsx("option",{value:"Haiti",children:"Haiti"}),e.jsx("option",{value:"Honduras",children:"Honduras"}),e.jsx("option",{value:"Hong-Kong",children:"Hong Kong SAR China"}),e.jsx("option",{value:"Hungary",children:"Hungary"}),e.jsx("option",{value:"Iceland",children:"Iceland"}),e.jsx("option",{value:"India",children:"India"}),e.jsx("option",{value:"Indonesia",children:"Indonesia"}),e.jsx("option",{value:"Iran",children:"Iran"}),e.jsx("option",{value:"Iraq",children:"Iraq"}),e.jsx("option",{value:"Ireland",children:"Ireland"}),e.jsx("option",{value:"Israel",children:"Israel"}),e.jsx("option",{value:"Italy",children:"Italy"}),e.jsx("option",{value:"Jamaica",children:"Jamaica"}),e.jsx("option",{value:"Japan",children:"Japan"}),e.jsx("option",{value:"Jordan",children:"Jordan"}),e.jsx("option",{value:"Kazakhstan",children:"Kazakhstan"}),e.jsx("option",{value:"Kenya",children:"Kenya"}),e.jsx("option",{value:"Kuwait",children:"Kuwait"}),e.jsx("option",{value:"Kyrgyzstan",children:"Kyrgyzstan"}),e.jsx("option",{value:"Laos",children:"Laos"}),e.jsx("option",{value:"Latvia",children:"Latvia"}),e.jsx("option",{value:"Lebanon",children:"Lebanon"}),e.jsx("option",{value:"Lesotho",children:"Lesotho"}),e.jsx("option",{value:"Liberia",children:"Liberia"}),e.jsx("option",{value:"Libya",children:"Libya"}),e.jsx("option",{value:"Liechtenstein",children:"Liechtenstein"}),e.jsx("option",{value:"Lithuania",children:"Lithuania"}),e.jsx("option",{value:"Luxembourg",children:"Luxembourg"}),e.jsx("option",{value:"Macedonia",children:"Macedonia"}),e.jsx("option",{value:"Madagascar",children:"Madagascar"}),e.jsx("option",{value:"Malawi",children:"Malawi"}),e.jsx("option",{value:"Malaysia",children:"Malaysia"}),e.jsx("option",{value:"Maldives",children:"Maldives"}),e.jsx("option",{value:"Mali",children:"Mali"}),e.jsx("option",{value:"Malta",children:"Malta"}),e.jsx("option",{value:"Mauritania",children:"Mauritania"}),e.jsx("option",{value:"Mauritius",children:"Mauritius"}),e.jsx("option",{value:"Mexico",children:"Mexico"}),e.jsx("option",{value:"Moldova",children:"Moldova"}),e.jsx("option",{value:"Monaco",children:"Monaco"}),e.jsx("option",{value:"Mongolia",children:"Mongolia"}),e.jsx("option",{value:"Montenegro",children:"Montenegro"}),e.jsx("option",{value:"Morocco",children:"Morocco"}),e.jsx("option",{value:"Mozambique",children:"Mozambique"}),e.jsx("option",{value:"Myanmar",children:"Myanmar (Burma)"}),e.jsx("option",{value:"Namibia",children:"Namibia"}),e.jsx("option",{value:"Nepal",children:"Nepal"}),e.jsx("option",{value:"Netherlands",children:"Netherlands"}),e.jsx("option",{value:"Nicaragua",children:"Nicaragua"}),e.jsx("option",{value:"Niger",children:"Niger"}),e.jsx("option",{value:"Nigeria",children:"Nigeria"}),e.jsx("option",{value:"North-Korea",children:"North Korea"}),e.jsx("option",{value:"Oman",children:"Oman"}),e.jsx("option",{value:"Pakistan",children:"Pakistan"}),e.jsx("option",{value:"Palau",children:"Palau"}),e.jsx("option",{value:"Palestinian",children:"Palestinian Territories"}),e.jsx("option",{value:"Panama",children:"Panama"}),e.jsx("option",{value:"Papua",children:"Papua New Guinea"}),e.jsx("option",{value:"Paraguay",children:"Paraguay"}),e.jsx("option",{value:"Peru",children:"Peru"}),e.jsx("option",{value:"Philippines",children:"Philippines"}),e.jsx("option",{value:"Poland",children:"Poland"}),e.jsx("option",{value:"Portugal",children:"Portugal"}),e.jsx("option",{value:"Puerto",children:"Puerto Rico"}),e.jsx("option",{value:"Qatar",children:"Qatar"}),e.jsx("option",{value:"Romania",children:"Romania"}),e.jsx("option",{value:"Russia",children:"Russia"}),e.jsx("option",{value:"Rwanda",children:"Rwanda"}),e.jsx("option",{value:"Réunion",children:"Réunion"}),e.jsx("option",{value:"Samoa",children:"Samoa"}),e.jsx("option",{value:"San-Marino",children:"San Marino"}),e.jsx("option",{value:"Saudi-Arabia",children:"Saudi Arabia"}),e.jsx("option",{value:"Senegal",children:"Senegal"}),e.jsx("option",{value:"Serbia",children:"Serbia"}),e.jsx("option",{value:"Seychelles",children:"Seychelles"}),e.jsx("option",{value:"Sierra-Leone",children:"Sierra Leone"}),e.jsx("option",{value:"Singapore",children:"Singapore"}),e.jsx("option",{value:"Slovakia",children:"Slovakia"}),e.jsx("option",{value:"Slovenia",children:"Slovenia"}),e.jsx("option",{value:"Solomon-Islands",children:"Solomon Islands"}),e.jsx("option",{value:"Somalia",children:"Somalia"}),e.jsx("option",{value:"South-Africa",children:"South Africa"}),e.jsx("option",{value:"South-Korea",children:"South Korea"}),e.jsx("option",{value:"Spain",children:"Spain"}),e.jsx("option",{value:"Sri-Lanka",children:"Sri Lanka"}),e.jsx("option",{value:"Sudan",children:"Sudan"}),e.jsx("option",{value:"Suriname",children:"Suriname"}),e.jsx("option",{value:"Swaziland",children:"Swaziland"}),e.jsx("option",{value:"Switzerland",children:"Switzerland"}),e.jsx("option",{value:"Syria",children:"Syria"}),e.jsx("option",{value:"Sao-Tome-and-Principe",children:"São Tomé & Príncipe"}),e.jsx("option",{value:"Tajikistan",children:"Tajikistan"}),e.jsx("option",{value:"Tanzania",children:"Tanzania"}),e.jsx("option",{value:"Thailand",children:"Thailand"}),e.jsx("option",{value:"Timor-Leste",children:"Timor-Leste"}),e.jsx("option",{value:"Togo",children:"Togo"}),e.jsx("option",{value:"Tonga",children:"Tonga"}),e.jsx("option",{value:"Trinidad-and-Tobago",children:"Trinidad & Tobago"}),e.jsx("option",{value:"Tunisia",children:"Tunisia"}),e.jsx("option",{value:"Turkey",children:"Turkey"}),e.jsx("option",{value:"Turkmenistan",children:"Turkmenistan"}),e.jsx("option",{value:"Uganda",children:"Uganda"}),e.jsx("option",{value:"Ukraine",children:"Ukraine"}),e.jsx("option",{value:"UAE",children:"United Arab Emirates"}),e.jsx("option",{value:"Uruguay",children:"Uruguay"}),e.jsx("option",{value:"Uzbekistan",children:"Uzbekistan"}),e.jsx("option",{value:"Vanuatu",children:"Vanuatu"}),e.jsx("option",{value:"Venezuela",children:"Venezuela"}),e.jsx("option",{value:"Vietnam",children:"Vietnam"}),e.jsx("option",{value:"Yemen",children:"Yemen"}),e.jsx("option",{value:"Zambia",children:"Zambia"}),e.jsx("option",{value:"Zimbabwe",children:"Zimbabwe"})]})]})]})]})}),e.jsxs("div",{className:"mt-8",children:[e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Item"}),e.jsx("th",{className:"w-1",children:"Quantity"}),e.jsx("th",{className:"w-1",children:"Price"}),e.jsx("th",{children:"Total"}),e.jsx("th",{className:"w-1"})]})}),e.jsxs("tbody",{children:[l.length<=0&&e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"!text-center font-semibold",children:"No Item Available"})}),l.map((a,n)=>e.jsxs("tr",{className:"align-top",children:[e.jsxs("td",{children:[e.jsx("input",{type:"text",className:"form-input min-w-[200px]",placeholder:"Enter Item Name",defaultValue:a.title}),e.jsx("textarea",{className:"form-textarea mt-4",placeholder:"Enter Description",defaultValue:a.description})]}),e.jsx("td",{children:e.jsx("input",{type:"number",className:"form-input w-32",placeholder:"Quantity",min:0,defaultValue:a.quantity,onChange:t=>r("quantity",t.target.value,a.id)})}),e.jsx("td",{children:e.jsx("input",{type:"number",className:"form-input w-32",placeholder:"Price",min:0,defaultValue:a.amount,onChange:t=>r("price",t.target.value,a.id)})}),e.jsxs("td",{children:["$",a.quantity*a.amount]}),e.jsx("td",{children:e.jsx("button",{type:"button",onClick:()=>S(a),children:e.jsx(B,{className:"w-5 h-5"})})})]},a.id))]})]})}),e.jsxs("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:[e.jsx("div",{className:"sm:mb-0 mb-6",children:e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>w(),children:"Add Item"})}),e.jsxs("div",{className:"sm:w-2/5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:"Subtotal"}),e.jsx("div",{children:"$265.00"})]}),e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsx("div",{children:"Tax(%)"}),e.jsx("div",{children:"0%"})]}),e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsx("div",{children:"Shipping Rate($)"}),e.jsx("div",{children:"$0.00"})]}),e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsx("div",{children:"Discount(%)"}),e.jsx("div",{children:"0%"})]}),e.jsxs("div",{className:"flex items-center justify-between mt-4 font-semibold",children:[e.jsx("div",{children:"Total"}),e.jsx("div",{children:"$265.00"})]})]})]})]}),e.jsxs("div",{className:"mt-8 px-4",children:[e.jsx("label",{htmlFor:"notes",children:"Notes"}),e.jsx("textarea",{id:"notes",name:"notes",className:"form-textarea min-h-[130px]",placeholder:"Notes....",defaultValue:i.notes})]})]}),e.jsxs("div",{className:"xl:w-96 w-full xl:mt-0 mt-6",children:[e.jsxs("div",{className:"panel mb-5",children:[e.jsx("label",{htmlFor:"currency",children:"Currency"}),e.jsx("select",{id:"currency",name:"currency",className:"form-select",value:f,onChange:a=>N(a.target.value),children:u.map((a,n)=>e.jsx("option",{value:a,children:a},n))}),e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"grid sm:grid-cols-2 grid-cols-1 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tax",children:"Tax(%) "}),e.jsx("input",{id:"tax",type:"number",name:"tax",className:"form-input",placeholder:"Tax",value:h,onChange:a=>m(a.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"discount",children:"Discount(%) "}),e.jsx("input",{id:"discount",type:"number",name:"discount",className:"form-input",placeholder:"Discount",value:x,onChange:a=>p(a.target.value)})]})]})}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{htmlFor:"shipping-charge",children:"Shipping Charge($) "}),e.jsx("input",{id:"shipping-charge",type:"number",name:"shipping-charge",className:"form-input",placeholder:"Shipping Charge",value:j,onChange:a=>v(a.target.value)})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{htmlFor:"payment-method",children:"Accept Payment Via"}),e.jsxs("select",{id:"payment-method",name:"payment-method",className:"form-select",defaultValue:b,onChange:a=>g(a.target.value),children:[e.jsx("option",{value:" ",children:"Select Payment"}),e.jsx("option",{value:"bank",children:"Bank Account"}),e.jsx("option",{value:"paypal",children:"Paypal"}),e.jsx("option",{value:"upi",children:"UPI Transfer"})]})]})]}),e.jsx("div",{className:"panel",children:e.jsxs("div",{className:"grid xl:grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4",children:[e.jsxs("button",{type:"button",className:"btn btn-success w-full gap-2",children:[e.jsx(D,{className:"ltr:mr-2 rtl:ml-2 shrink-0"}),"Save"]}),e.jsxs("button",{type:"button",className:"btn btn-info w-full gap-2",children:[e.jsx(T,{className:"ltr:mr-2 rtl:ml-2 shrink-0"}),"Send Invoice"]}),e.jsxs(A,{to:"/apps/invoice/preview",className:"btn btn-primary w-full gap-2",children:[e.jsx(M,{className:"ltr:mr-2 rtl:ml-2 shrink-0"}),"Preview"]}),e.jsxs("button",{type:"button",className:"btn btn-secondary w-full gap-2",children:[e.jsx(P,{className:"ltr:mr-2 rtl:ml-2 shrink-0"}),"Download"]})]})})]})]})};export{z as default};
