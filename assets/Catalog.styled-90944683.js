import{u as i,r as u,j as n,h as m,c as L,a as T,i as z,k as I}from"./index-2d2225bb.js";const M=i("div")`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(18, 20, 23, 0.5);
    z-index: 1200;
    overflow: hidden;
`,B=i("div")`
    position: relative;
    padding: 40px;
    border-radius: 24px;
    width: 541px;
    background-color: #fff;
`,P=i("button")`
    padding: 0;
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
`,E=i("svg")`
    stroke: #121417;
    width: 24px;
    height: 24px;
`,R=i("img")`
    border-radius: 14px;
    width: 461px;
    height: 248px;
    margin-bottom: 14px;
`,A=i("p")`
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33333;
    color: #121417;
    margin-bottom: 8px;
`,v=i("span")`
    color: #3470ff;
`,s=i("span")`
    margin-left: 6px;
    margin-right: 6px;
    color: rgba(18, 20, 23, 0.1);
`,D=i("div")`
    margin-bottom: 14px;
`,a=i("p")`
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
    margin-bottom: 4px;
`,O=i("p")`
    font-size: 14px;
    line-height: 1.42857;
    color: #121417;
    margin-bottom: 24px;
`,k=i("p")`
    font-weight: 500;
    font-size: 14px;
    line-height: 1.42857;
    color: #121417;
    margin-bottom: 8px;
`,w=i("div")`
    margin-bottom: 24px;
`,l=i("p")`
    display: inline-block;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #363535;
    background-color: #f9f9f9;
    border-radius: 35px;
    padding: 7px 14px;
    margin-right: 8px;
    margin-bottom: 8px;
`,j=i("span")`
    font-weight: 600;
    color: #3470ff;
`,$=i("a")`
    border-radius: 12px;
    padding: 12px 50px;
    width: 168px;
    height: 44px;
    background-color: #3470ff;
`,N=i.li`
    width: 274px;
    height: 450px;
    border-radius: 14px 14px 12px 12px;
    position: relative;
`,Y=i.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: none;
    width: 274px;
    height: 44px;
    background-color: #3470ff;
    margin-top: 24px;
    position: absolute;
    bottom: 0;
    &:is(:hover, :focus) {
        background-color: #0b44cd;
    }
`,C=i.span`
    font-weight: 600;
    font-size: 14px;
    line-height: 1.42857;
    color: #fff;
`,q=i.div`
    width: 274px;
    height: 268px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 14px;
    margin-bottom: 14px;
`,G=i("div")`
    display: flex;
    justify-content: space-between;
`,y=i("p")`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #121417;
    margin-bottom: 8px;
`,H=i("span")`
    color: #3470ff;
`,J=i("button")`
    padding: 0;
    position: absolute;
    top: 14px;
    right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
`,K=i("svg")`
    stroke: rgba(255, 255, 255, 0.8);
    fill: transparent;
    width: 18px;
    height: 18px;
    &:is(:hover, :focus) {
        stroke: #3470ff;
        fill: #3470ff;
    }
`,Q=i("button")`
    padding: 0;
    position: absolute;
    top: 14px;
    right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
`,U=i("svg")`
    stroke: #3470ff;
    fill: #3470ff;
    width: 18px;
    height: 18px;
    &:is(:hover, :focus) {
        stroke: rgba(255, 255, 255, 0.8);
        fill: transparent;
    }
`,V=({advert:e,toggleModal:o})=>{const d=r=>{r.stopPropagation()},t=e.rentalConditions.split(`
`),p=t[0].slice(0,-2),h=t[0].slice(-2,t[0].length),c=e.address.split(","),g=e.rentalPrice.slice(1,e.rentalPrice.length),x=e.mileage.toLocaleString("en-IN");return u.useEffect(()=>{const r=()=>{o()};return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[o]),n.jsx(M,{onClick:o,children:n.jsx(B,{onClick:d,children:n.jsxs("div",{onClick:d,children:[n.jsx(P,{onClick:o,children:n.jsx(E,{children:n.jsx("use",{href:m+"#icon-close"})})}),n.jsx(R,{src:e.img}),n.jsxs(A,{children:[e.make," ",n.jsx(v,{children:e.model}),","," ",e.year]}),n.jsxs(D,{children:[n.jsxs(a,{children:[c[1],n.jsx(s,{children:"|"}),c[2],n.jsx(s,{children:"|"}),"Id: ",e.id,n.jsx(s,{children:"|"}),"Year: ",e.year,n.jsx(s,{children:"|"}),"Type: ",e.type]}),n.jsxs(a,{children:["Fuel Consumption: ",e.fuelConsumption,n.jsx(s,{children:"|"}),"Engine Size: ",e.engineSize]})]}),n.jsx(O,{children:e.description}),n.jsxs(w,{children:[n.jsx(k,{children:"Accessories and functionalities:"}),n.jsxs(a,{children:[e.accessories[0],n.jsx(s,{children:"|"}),e.accessories[1],n.jsx(s,{children:"|"}),e.accessories[2]]}),n.jsxs(a,{children:[e.functionalities[0],n.jsx(s,{children:"|"}),e.functionalities[1],n.jsx(s,{children:"|"}),e.functionalities[2]]})]}),n.jsxs(w,{children:[n.jsx(k,{children:"Rental Conditions:"}),n.jsxs("div",{children:[n.jsxs(l,{children:[p,n.jsx(j,{children:h})]}),n.jsx(l,{children:t[1]})]}),n.jsxs("div",{children:[n.jsx(l,{children:t[2]}),n.jsxs(l,{children:["Mileage:"," ",n.jsx(j,{children:x})]}),n.jsxs(l,{children:["Price: ",n.jsxs(j,{children:[g,"$"]})]})]})]}),n.jsx($,{href:"tel:+380730000000",children:n.jsx(C,{children:"Rental car"})})]})})})},W=e=>e.favorites.favorites,Z=({advert:e})=>{const o=L(),d=T(W),[t,p]=u.useState(!1),[h,c]=u.useState(()=>!!d.find(f=>f.id===e.id)),g=e.rentalPrice.slice(1,e.rentalPrice.length),x=e.address.split(","),r=e.img?e.img:e.photoLink,b=()=>{p(f=>!f)},F=()=>{o(z(e)),c(!0)},S=()=>{o(I(e.id)),c(!1)};return n.jsxs(n.Fragment,{children:[n.jsxs(N,{children:[n.jsx(q,{style:{backgroundImage:`url(${r})`}}),n.jsxs(G,{children:[n.jsxs(y,{children:[e.make," ",n.jsx(H,{children:e.model}),","," ",e.year]}),n.jsxs(y,{children:[g,"$"]})]}),n.jsxs(a,{children:[x[1],n.jsx(s,{children:"|"}),x[2],n.jsx(s,{children:"|"}),e.rentalCompany,n.jsx(s,{children:"|"}),e.type,n.jsx(s,{children:"|"}),e.model,n.jsx(s,{children:"|"}),e.id,n.jsx(s,{children:"|"}),e.functionalities[0]]}),n.jsx(Y,{onClick:b,children:n.jsx(C,{children:"Learn more"})}),h?n.jsx(Q,{onClick:S,children:n.jsx(U,{children:n.jsx("use",{href:m+"#icon-heart"})})}):n.jsx(J,{onClick:F,children:n.jsx(K,{children:n.jsx("use",{href:m+"#icon-heart"})})})]}),t&&n.jsx(V,{advert:e,toggleModal:b})]})},_=i.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 50px 29px;
    margin-bottom: 100px;
`;export{_ as C,Z as a,W as s};
