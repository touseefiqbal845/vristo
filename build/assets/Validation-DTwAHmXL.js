import{u as g,r as b,s as j,aM as N,aN as a,aP as y,j as e,L as F,Z as k,aQ as n,aR as u,aS as r,S as w}from"./index-B5saNMBH.js";import{C as o}from"./Highlight-DDPhol4Z.js";import{I as c}from"./IconCode-CLbt3CRW.js";const q=()=>{const v=g();b.useEffect(()=>{v(j("Validation"))});const m=()=>{w.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3}).fire({icon:"success",title:"Form submitted successfully",padding:"10px 20px"})},p=N().shape({firstname:a().required("Please fill the first name"),lastname:a().required("Please fill the last name"),username:a().required("Please choose a userName"),city:a().required("Please provide a valid city"),state:a().required("Please provide a valid state"),zip:a().required("Please provide a valid zip"),agree:y().oneOf([!0],"You must agree before submitting.")}),h=N().shape({fullName:a().required("Please fill the Name"),email:a().email("Invalid email").required("Please fill the Email"),color:a().required("Please Select the field"),firstname:a().required("Please fill the first name"),lastname:a().required("Please fill the last name"),username:a().required("Please choose a userName"),city:a().required("Please provide a valid city"),state:a().required("Please provide a valid state"),zip:a().required("Please provide a valid zip"),agree:a().required("You must agree before submitting."),select:a().required("Please Select the field")}),[l,x]=b.useState([]),d=s=>{l.includes(s)?x(t=>t.filter(i=>i!==s)):x([...l,s])};return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(F,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Validation"})})]}),e.jsxs("div",{className:"pt-5 space-y-8",children:[e.jsxs("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[e.jsx("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:e.jsx(k,{})}),e.jsx("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e.jsx("a",{href:"https://www.npmjs.com/package/formik",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/formik"})]}),e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"panel",id:"basic",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code1"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(c,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(n,{initialValues:{fullName:""},validationSchema:h,onSubmit:()=>{},children:({errors:s,submitCount:t,touched:i})=>e.jsxs(u,{className:"space-y-5",children:[e.jsxs("div",{className:t?s.fullName?"has-error":"has-success":"",children:[e.jsx("label",{htmlFor:"fullName",children:"Full Name "}),e.jsx(r,{name:"fullName",type:"text",id:"fullName",placeholder:"Enter Full Name",className:"form-input"}),t?s.fullName?e.jsx("div",{className:"text-danger mt-1",children:s.fullName}):e.jsx("div",{className:"text-success mt-1",children:"Looks Good!"}):""]}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",onClick:()=>{i.fullName&&!s.fullName&&m()},children:"Submit Form"})]})})}),l.includes("code1")&&e.jsx(o,{children:e.jsx("pre",{className:"language-typescript",children:`import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

const SubmittedForm = Yup.object().shape({
    fullName: Yup.string().required('Please fill the Name'),
});

<Formik
    initialValues={{
        fullName: '',
    }}
    validationSchema={SubmittedForm}
    onSubmit={() => {}}
>
    {({ errors, submitCount, touched }) => (
        <Form className="space-y-5">
            <div className={submitCount ? (errors.fullName ? 'has-error' : 'has-success') : ''}>
                <label htmlFor="fullName">Full Name </label>
                <Field name="fullName" type="text" id="fullName" placeholder="Enter Full Name" className="form-input" />

                {submitCount ? errors.fullName ? <div className="text-danger mt-1">{errors.fullName}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
            </div>
            <button
                type="submit"
                className="btn btn-primary !mt-6"
                onClick={() => {
                    if (touched.fullName && !errors.fullName) {
                        submitForm();
                    }
                }}
            >
                Submit Form
            </button>
        </Form>
    )}
</Formik>`})})]}),e.jsxs("div",{className:"panel",id:"email",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Email"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code2"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(c,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(n,{initialValues:{email:""},validationSchema:h,onSubmit:()=>{},children:({errors:s,submitCount:t,touched:i})=>e.jsxs(u,{className:"space-y-5",children:[e.jsxs("div",{className:t?s.email?"has-error":"has-success":"",children:[e.jsx("label",{htmlFor:"Email",children:"Email"}),e.jsx(r,{name:"email",type:"text",id:"Email",placeholder:"Enter Email",className:"form-input"}),t?s.email?e.jsx("div",{className:"text-danger mt-1",children:s.email}):e.jsx("div",{className:"text-success mt-1",children:"Looks Good!"}):""]}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",onClick:()=>{i.email&&!s.email&&m()},children:"Submit Form"})]})})}),l.includes("code2")&&e.jsx(o,{children:e.jsx("pre",{className:"language-typescript",children:`import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

const SubmittedForm = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Please fill the Email'),
});

<Formik
    initialValues={{
        email: '',
    }}
    validationSchema={SubmittedForm}
    onSubmit={() => {}}
>
    {({ errors, submitCount, touched }) => (
        <Form className="space-y-5">
            <div className={submitCount ? (errors.email ? 'has-error' : 'has-success') : ''}>
                <label htmlFor="Email">Email</label>
                <Field name="email" type="text" id="Email" placeholder="Enter Email" className="form-input" />

                {submitCount ? errors.email ? <div className="text-danger mt-1">{errors.email}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
            </div>
            <button
                type="submit"
                className="btn btn-primary !mt-6"
                onClick={() => {
                    if (touched.email && !errors.email) {
                        submitForm();
                    }
                }}
            >
                Submit Form
            </button>
        </Form>
    )}
</Formik>`})})]}),e.jsxs("div",{className:"panel",id:"select",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Select"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code3"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(c,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(n,{initialValues:{select:""},validationSchema:h,onSubmit:()=>{},children:({errors:s,submitCount:t,touched:i})=>e.jsxs(u,{className:"space-y-5",children:[e.jsxs("div",{className:t?s.select?"has-error":"has-success":"",children:[e.jsxs(r,{as:"select",name:"select",className:"form-select",children:[e.jsx("option",{value:"",children:"Open this select menu"}),e.jsx("option",{value:"One",children:"One"}),e.jsx("option",{value:"Two",children:"Two"}),e.jsx("option",{value:"Three",children:"Three"})]}),t?s.select?e.jsx("div",{className:" text-danger mt-1",children:s.select}):e.jsx("div",{className:" text-[#1abc9c] mt-1",children:"Example valid custom select feedback"}):""]}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",onClick:()=>{i.select&&!s.select&&m()},children:"Submit Form"})]})})}),l.includes("code3")&&e.jsx(o,{children:e.jsx("pre",{className:"language-typescript",children:`import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

const SubmittedForm = Yup.object().shape({
    select: Yup.string().required('Please Select the field'),
});

<Formik
    initialValues={{
        select: '',
    }}
    validationSchema={SubmittedForm}
    onSubmit={() => {}}
>
    {({ errors, submitCount, touched }) => (
        <Form className="space-y-5">
            <div className={submitCount ? (errors.select ? 'has-error' : 'has-success') : ''}>
                <Field as="select" name="select" className="form-select">
                    <option value="">Open this select menu</option>
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three</option>
                </Field>
                {submitCount ? (
                    errors.select ? (
                        <div className=" text-danger mt-1">{errors.select}</div>
                    ) : (
                        <div className=" text-[#1abc9c] mt-1">Example valid custom select feedback</div>
                    )
                ) : (
                    ''
                )}
            </div>
            <button
                type="submit"
                className="btn btn-primary !mt-6"
                onClick={() => {
                    if (touched.select && !errors.select) {
                        submitForm();
                    }
                }}
            >
                Submit Form
            </button>
        </Form>
    )}
</Formik>`})})]}),e.jsxs("div",{className:"panel",id:"custom_styles",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Custom Styles"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code4"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(c,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(n,{initialValues:{firstname:"Shaun",lastname:"Park",username:"",city:"",state:"",zip:"",agree:!1},validationSchema:p,onSubmit:()=>{},children:({errors:s,submitCount:t,touched:i,values:f})=>e.jsxs(u,{className:"space-y-5",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[e.jsxs("div",{className:t?s.firstname?"has-error":"has-success":"",children:[e.jsx("label",{htmlFor:"firstname",children:"First Name "}),e.jsx(r,{name:"firstname",type:"text",id:"firstname",placeholder:"Enter First Name",className:"form-input"}),t?s.firstname?e.jsx("div",{className:"text-danger mt-1",children:s.firstname}):e.jsx("div",{className:"text-success mt-1",children:"Looks Good!"}):""]}),e.jsxs("div",{className:t?s.lastname?"has-error":"has-success":"",children:[e.jsx("label",{htmlFor:"fullName",children:"Last Name "}),e.jsx(r,{name:"lastname",type:"text",id:"lastname",placeholder:"Enter Last Name",className:"form-input"}),t?s.lastname?e.jsx("div",{className:"text-danger mt-1",children:s.lastname}):e.jsx("div",{className:"text-success mt-1",children:"Looks Good!"}):""]}),e.jsxs("div",{className:t?s.username?"has-error":"has-success":"",children:[e.jsx("label",{htmlFor:"username",children:"Username"}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@"}),e.jsx(r,{name:"username",type:"text",id:"username",placeholder:"Enter Username",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]}),t?s.username?e.jsx("div",{className:"text-danger mt-1",children:s.username}):e.jsx("div",{className:"text-success mt-1",children:"Looks Good!"}):""]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-5",children:[e.jsxs("div",{className:`md:col-span-2 ${t?s.city?"has-error":"has-success":""}`,children:[e.jsx("label",{htmlFor:"customeCity",children:"City"}),e.jsx(r,{name:"city",type:"text",id:"city",placeholder:"Enter City",className:"form-input"}),t?s.city?e.jsx("div",{className:"text-danger mt-1",children:s.city}):e.jsx("div",{className:"text-success mt-1",children:"Looks Good!"}):""]}),e.jsxs("div",{className:t?s.state?"has-error":"has-success":"",children:[e.jsx("label",{htmlFor:"customeState",children:"State"}),e.jsx(r,{name:"state",type:"text",id:"customeState",placeholder:"Enter State",className:"form-input"}),t?s.state?e.jsx("div",{className:"text-danger mt-1",children:s.state}):e.jsx("div",{className:"text-success mt-1",children:"Looks Good!"}):""]}),e.jsxs("div",{className:t?s.zip?"has-error":"has-success":"",children:[e.jsx("label",{htmlFor:"customeZip",children:"Zip"}),e.jsx(r,{name:"zip",type:"text",id:"customeZip",placeholder:"Enter Zip",className:"form-input"}),t?s.zip?e.jsx("div",{className:"text-danger mt-1",children:s.zip}):e.jsx("div",{className:"text-success mt-1",children:"Looks Good!"}):""]})]}),e.jsxs("div",{className:t?s.agree?"has-error":"has-success":"",children:[e.jsxs("div",{className:"flex",children:[e.jsx(r,{name:"agree",id:"agree",type:"checkbox",className:"form-checkbox"}),f.agree,e.jsx("label",{htmlFor:"agree",className:"text-white-dark font-semibold",children:"Agree to terms and conditions"})]}),t&&s.agree?e.jsx("div",{className:"text-danger mt-1",children:s.agree}):""]}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",onClick:()=>{Object.keys(i).length!==0&&Object.keys(s).length===0&&m()},children:"Submit Form"})]})})}),l.includes("code4")&&e.jsx(o,{children:e.jsx("pre",{className:"language-typescript",children:`import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

const submitForm4 = Yup.object().shape({
    firstname: Yup.string().required('Please fill the first name'),
    lastname: Yup.string().required('Please fill the last name'),
    username: Yup.string().required('Please choose a userName'),
    city: Yup.string().required('Please provide a valid city'),
    state: Yup.string().required('Please provide a valid state'),
    zip: Yup.string().required('Please provide a valid zip'),
    agree: Yup.bool().oneOf([true], 'You must agree before submitting.'),
});

<Formik
    initialValues={{
        firstname: 'Shaun',
        lastname: 'Park',
        username: '',
        city: '',
        state: '',
        zip: '',
        agree: false,
    }}
    validationSchema={submitForm4}
    onSubmit={() => {}}
>
    {({ errors, submitCount, touched, values }) => (
        <Form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className={submitCount ? (errors.firstname ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="firstname">First Name </label>
                    <Field name="firstname" type="text" id="firstname" placeholder="Enter First Name" className="form-input" />

                    {submitCount ? (
                        errors.firstname ? (
                            <div className="text-danger mt-1">{errors.firstname}</div>
                        ) : (
                            <div className="text-success mt-1">Looks Good!</div>
                        )
                    ) : (
                        ''
                    )}
                </div>

                <div className={submitCount ? (errors.lastname ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="fullName">Last Name </label>
                    <Field name="lastname" type="text" id="lastname" placeholder="Enter Last Name" className="form-input" />

                    {submitCount ? errors.lastname ? <div className="text-danger mt-1">{errors.lastname}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>

                <div className={submitCount ? (errors.username ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="username">Username</label>
                    <div className="flex">
                        <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                            @
                        </div>
                        <Field name="username" type="text" id="username" placeholder="Enter Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                    </div>
                    {submitCount ? errors.username ? <div className="text-danger mt-1">{errors.username}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className={\`md:col-span-2 \${submitCount ? (errors.city ? 'has-error' : 'has-success') : ''}\`}>
                    <label htmlFor="customeCity">City</label>
                    <Field name="city" type="text" id="city" placeholder="Enter City" className="form-input" />

                    {submitCount ? errors.city ? <div className="text-danger mt-1">{errors.city}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>

                <div className={submitCount ? (errors.state ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="customeState">State</label>
                    <Field name="state" type="text" id="customeState" placeholder="Enter State" className="form-input" />
                    {submitCount ? errors.state ? <div className="text-danger mt-1">{errors.state}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>

                <div className={submitCount ? (errors.zip ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="customeZip">Zip</label>
                    <Field name="zip" type="text" id="customeZip" placeholder="Enter Zip" className="form-input" />
                    {submitCount ? errors.zip ? <div className="text-danger mt-1">{errors.zip}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>
            </div>

            <div className={submitCount ? (errors.agree ? 'has-error' : 'has-success') : ''}>
                <div className="flex">
                    <Field name="agree" id="agree" type="checkbox" className="form-checkbox" />
                    {values.agree}
                    <label htmlFor="agree" className="text-white-dark font-semibold">
                        Agree to terms and conditions
                    </label>
                </div>
                {submitCount ? errors.agree ? <div className="text-danger mt-1">{errors.agree}</div> : '' : ''}
            </div>

            <button
                type="submit"
                className="btn btn-primary !mt-6"
                onClick={() => {
                    if (Object.keys(touched).length !== 0 && Object.keys(errors).length === 0) {
                        submitForm();
                    }
                }}
            >
                Submit Form
            </button>
        </Form>
    )}
</Formik>`})})]}),e.jsxs("div",{className:"panel",id:"browser_default",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Browser Default"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code5"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(c,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("form",{className:"space-y-5",onSubmit:s=>{s.preventDefault(),m()},children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"browserFname",children:"First Name"}),e.jsx("input",{id:"browserFname",type:"text",placeholder:"Enter First Name",className:"form-input",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"browserLname",children:"Last name"}),e.jsx("input",{id:"browserLname",type:"text",placeholder:"Enter Last name",className:"form-input",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"browserEmail",children:"Username"}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@"}),e.jsx("input",{id:"browserEmail",type:"text",placeholder:"Enter Username",className:"form-input ltr:rounded-l-none rtl:rounded-r-none",required:!0})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-5",children:[e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{htmlFor:"browserCity",children:"City"}),e.jsx("input",{id:"browserCity",type:"text",placeholder:"Enter City",className:"form-input",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"browserState",children:"State"}),e.jsx("input",{id:"browserState",type:"text",placeholder:"Enter State",className:"form-input",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"browserZip",children:"Zip"}),e.jsx("input",{id:"browserZip",type:"text",placeholder:"Enter Zip",className:"form-input",required:!0})]})]}),e.jsxs("div",{className:"flex items-center cursor-pointer mt-1",children:[e.jsx("input",{type:"checkbox",id:"agree1",className:"form-checkbox",required:!0}),e.jsx("label",{htmlFor:"agree1",className:"text-white-dark font-semibold mb-0",children:"Agree to terms and conditions"})]}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit Form"})]})}),l.includes("code5")&&e.jsx(o,{children:e.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

<form
    className="space-y-5"
    onSubmit={(e) => {
        e.preventDefault();
        submitForm();
    }}
>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
            <label htmlFor="browserFname">First Name</label>
            <input id="browserFname" type="text" placeholder="Enter First Name" className="form-input" required />
        </div>
        <div>
            <label htmlFor="browserLname">Last name</label>
            <input id="browserLname" type="text" placeholder="Enter Last name" className="form-input" required />
        </div>
        <div>
            <label htmlFor="browserEmail">Username</label>
            <div className="flex">
                <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                    @
                </div>
                <input id="browserEmail" type="text" placeholder="Enter Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" required />
            </div>
        </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="md:col-span-2">
            <label htmlFor="browserCity">City</label>
            <input id="browserCity" type="text" placeholder="Enter City" className="form-input" required />
        </div>
        <div>
            <label htmlFor="browserState">State</label>
            <input id="browserState" type="text" placeholder="Enter State" className="form-input" required />
        </div>
        <div>
            <label htmlFor="browserZip">Zip</label>
            <input id="browserZip" type="text" placeholder="Enter Zip" className="form-input" required />
        </div>
    </div>
    <div className="flex items-center cursor-pointer mt-1">
        <input type="checkbox" id="agree1 className="form-checkbox" required />
        <label htmlFor="agree1" className="text-white-dark font-semibold mb-0">Agree to terms and conditions</label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit Form
    </button>
</form>`})})]}),e.jsxs("div",{className:"panel",id:"tooltips",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Tooltips"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code6"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(c,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(n,{initialValues:{firstname:"Shaun",lastname:"Park",username:"",city:"",state:"",zip:"",agree:!1},validationSchema:p,onSubmit:()=>{},children:({errors:s,submitCount:t,touched:i})=>e.jsxs(u,{className:"space-y-5",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[e.jsxs("div",{className:t?s.firstname?"has-error":"has-success":"",children:[e.jsx("label",{htmlFor:"firstname",children:"First Name "}),e.jsx(r,{name:"firstname",type:"text",id:"firstname",placeholder:"Enter First Name",className:"form-input mb-2"}),t?s.firstname?e.jsx("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:s.firstname}):e.jsx("div",{className:"text-white bg-[#1abc9c] py-1 px-2 rounded inline-block",children:"Looks Good!"}):""]}),e.jsxs("div",{className:t?s.lastname?"has-error":"has-success":"",children:[e.jsx("label",{htmlFor:"lastName",children:"Last name "}),e.jsx(r,{name:"lastname",type:"text",id:"lastname",placeholder:"Enter Last Name",className:"form-input mb-2"}),t?s.lastname?e.jsx("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:s.lastname}):e.jsx("div",{className:"text-white bg-[#1abc9c] py-1 px-2 rounded inline-block",children:"Looks Good!"}):""]}),e.jsxs("div",{className:t?s.username?"has-error":"has-success":"",children:[e.jsx("label",{htmlFor:"username",children:"Username"}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@"}),e.jsx(r,{name:"username",type:"text",id:"username",placeholder:"Enter Username",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]}),e.jsx("div",{className:"mt-2",children:t?s.username?e.jsx("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:s.username}):e.jsx("div",{className:"text-white bg-[#1abc9c] py-1 px-2 rounded inline-block",children:"Looks Good!"}):""})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-5",children:[e.jsxs("div",{className:`md:col-span-2 ${t?s.city?"has-error":"has-success":""}`,children:[e.jsx("label",{htmlFor:"customeCity",children:"City"}),e.jsx(r,{name:"city",type:"text",id:"city",placeholder:"Enter City",className:"form-input mb-2"}),t?s.city?e.jsx("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:s.city}):e.jsx("div",{className:"text-white bg-[#1abc9c] py-1 px-2 rounded inline-block",children:"Looks Good!"}):""]}),e.jsxs("div",{className:t?s.state?"has-error":"has-success":"",children:[e.jsx("label",{htmlFor:"customeState",children:"State"}),e.jsx(r,{name:"state",type:"text",id:"customeState",placeholder:"Enter State",className:"form-input mb-2"}),t?s.state?e.jsx("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:s.state}):e.jsx("div",{className:"text-white bg-[#1abc9c] py-1 px-2 rounded inline-block",children:"Looks Good!"}):""]}),e.jsxs("div",{className:t?s.zip?"has-error":"has-success":"",children:[e.jsx("label",{htmlFor:"customeZip",children:"Zip"}),e.jsx(r,{name:"zip",type:"text",id:"customeZip",placeholder:"Enter Zip",className:"form-input mb-2"}),t?s.zip?e.jsx("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:s.zip}):e.jsx("div",{className:"text-white bg-[#1abc9c] py-1 px-2 rounded inline-block",children:"Looks Good!"}):""]})]}),e.jsxs("div",{className:t?s.agree?"has-error":"has-success":"",children:[e.jsxs("div",{className:"flex",children:[e.jsx(r,{name:"agree",id:"agree2",type:"checkbox",className:"form-checkbox"}),e.jsx("label",{htmlFor:"agree2",className:"text-white-dark font-semibold",children:"Agree to terms and conditions"})]}),e.jsx("div",{className:"mt-2",children:t&&s.agree?e.jsx("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:s.agree}):""})]}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",onClick:()=>{Object.keys(i).length!==0&&Object.keys(s).length===0&&m()},children:"Submit Form"})]})})}),l.includes("code6")&&e.jsx(o,{children:e.jsx("pre",{className:"language-typescript",children:`import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

const submitForm4 = Yup.object().shape({
    firstname: Yup.string().required('Please fill the first name'),
    lastname: Yup.string().required('Please fill the last name'),
    username: Yup.string().required('Please choose a userName'),
    city: Yup.string().required('Please provide a valid city'),
    state: Yup.string().required('Please provide a valid state'),
    zip: Yup.string().required('Please provide a valid zip'),
    agree: Yup.bool().oneOf([true], 'You must agree before submitting.'),
});

<Formik
    initialValues={{
        firstname: 'Shaun',
        lastname: 'Park',
        username: '',
        city: '',
        state: '',
        zip: '',
        agree: false,
    }}
    validationSchema={submitForm4}
    onSubmit={() => {}}
>
    {({ errors, submitCount, touched }) => (
        <Form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className={submitCount ? (errors.firstname ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="firstname">First Name </label>
                    <Field name="firstname" type="text" id="firstname" placeholder="Enter First Name" className="form-input mb-2" />

                    {submitCount ? (
                        errors.firstname ? (
                            <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.firstname}</div>
                        ) : (
                            <div className="text-white bg-[#1abc9c] py-1 px-2 rounded inline-block">Looks Good!</div>
                        )
                    ) : (
                        ''
                    )}
                </div>

                <div className={submitCount ? (errors.lastname ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="lastName">Last name </label>
                    <Field name="lastname" type="text" id="lastname" placeholder="Enter Last Name" className="form-input mb-2" />

                    {submitCount ? (
                        errors.lastname ? (
                            <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.lastname}</div>
                        ) : (
                            <div className="text-white bg-[#1abc9c] py-1 px-2 rounded inline-block">Looks Good!</div>
                        )
                    ) : (
                        ''
                    )}
                </div>

                <div className={submitCount ? (errors.username ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="username">Username</label>
                    <div className="flex">
                        <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                            @
                        </div>

                        <Field name="username" type="text" id="username" placeholder="Enter Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                    </div>
                    <div className="mt-2">
                        {submitCount ? (
                            errors.username ? (
                                <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.username}</div>
                            ) : (
                                <div className="text-white bg-[#1abc9c] py-1 px-2 rounded inline-block">Looks Good!</div>
                            )
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className={\`md:col-span-2 \${submitCount ? (errors.city ? 'has-error' : 'has-success') : ''}\`}>
                    <label htmlFor="customeCity">City</label>
                    <Field name="city" type="text" id="city" placeholder="Enter City" className="form-input mb-2" />

                    {submitCount ? (
                        errors.city ? (
                            <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.city}</div>
                        ) : (
                            <div className="text-white bg-[#1abc9c] py-1 px-2 rounded inline-block">Looks Good!</div>
                        )
                    ) : (
                        ''
                    )}
                </div>

                <div className={submitCount ? (errors.state ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="customeState">State</label>
                    <Field name="state" type="text" id="customeState" placeholder="Enter State" className="form-input mb-2" />
                    {submitCount ? (
                        errors.state ? (
                            <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.state}</div>
                        ) : (
                            <div className="text-white bg-[#1abc9c] py-1 px-2 rounded inline-block">Looks Good!</div>
                        )
                    ) : (
                        ''
                    )}
                </div>

                <div className={submitCount ? (errors.zip ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="customeZip">Zip</label>
                    <Field name="zip" type="text" id="customeZip" placeholder="Enter Zip" className="form-input mb-2" />
                    {submitCount ? (
                        errors.zip ? (
                            <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.zip}</div>
                        ) : (
                            <div className="text-white bg-[#1abc9c] py-1 px-2 rounded inline-block">Looks Good!</div>
                        )
                    ) : (
                        ''
                    )}
                </div>
            </div>

            <div className={submitCount ? (errors.agree ? 'has-error' : 'has-success') : ''}>
                <div className="flex">
                    <Field name="agree" id="agree2" type="checkbox" className="form-checkbox" />
                    <label htmlFor="agree2" className="text-white-dark font-semibold">
                        Agree to terms and conditions
                    </label>
                </div>
                <div className="mt-2">
                    {submitCount ? errors.agree ? <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.agree}</div> : '' : ''}
                </div>
            </div>

            <button
                type="submit"
                className="btn btn-primary !mt-6"
                onClick={() => {
                    if (Object.keys(touched).length !== 0 && Object.keys(errors).length === 0) {
                        submitForm();
                    }
                }}
            >
                Submit Form
            </button>
        </Form>
    )}
</Formik>`})})]})]})]})]})};export{q as default};
