import{u as i,j as t,a as o}from"./index-70e45df7.js";import{s as r,C as n,a}from"./Catalog.styled-a2f8435e.js";const c=i.div`
    display: flex;
    justify-content: center;
    padding-top: 40px;
`,x=i.h2`
    font-weight: 600;
    font-size: 32px;
    line-height: 1.5;
    color: #121417;
    opacity: 0.5;
`,l=({message:s})=>t.jsx(c,{children:t.jsx(x,{children:s})}),p=()=>{const s=o(r);return t.jsx(t.Fragment,{children:s.length>0?t.jsx(n,{children:s.map(e=>t.jsx(a,{advert:e},e.id))}):t.jsx(l,{message:"Your favorites list is empty!"})})},j=()=>t.jsx("section",{children:t.jsx(p,{})});export{j as default};
