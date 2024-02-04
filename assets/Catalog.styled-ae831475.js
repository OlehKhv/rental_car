import{u as i,r as g,j as e,c as L,a as T,f as z,h as I}from"./index-9d80a404.js";const M=i("div")`
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
`,v=i("svg")`
    stroke: #121417;
    width: 24px;
    height: 24px;
`,E=i("img")`
    border-radius: 14px;
    width: 461px;
    height: 248px;
    margin-bottom: 14px;
`,R=i("p")`
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33333;
    color: #121417;
    margin-bottom: 8px;
`,O=i("span")`
    color: #3470ff;
`,s=i("span")`
    margin-left: 6px;
    margin-right: 6px;
    color: rgba(18, 20, 23, 0.1);
`,A=i("div")`
    margin-bottom: 14px;
`,c=i("p")`
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
    margin-bottom: 4px;
`,D=i("p")`
    font-size: 14px;
    line-height: 1.42857;
    color: #121417;
    margin-bottom: 24px;
`,m=i("p")`
    font-weight: 500;
    font-size: 14px;
    line-height: 1.42857;
    color: #121417;
    margin-bottom: 8px;
`,b=i("div")`
    margin-bottom: 24px;
`,r=i("p")`
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
`,h=i("span")`
    font-weight: 600;
    color: #3470ff;
`,$=i("a")`
    border-radius: 12px;
    padding: 12px 50px;
    width: 168px;
    height: 44px;
    background-color: #3470ff;
`,f="/rental_car/assets/sprite-122eac62.svg",q=i.li`
    width: 274px;
    height: 450px;
    border-radius: 14px 14px 12px 12px;
    position: relative;
`,N=i.button`
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
`,y=i.span`
    font-weight: 600;
    font-size: 14px;
    line-height: 1.42857;
    color: #fff;
`,V=i.div`
    width: 274px;
    height: 268px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 14px;
    margin-bottom: 14px;
`,Y=i("div")`
    display: flex;
    justify-content: space-between;
`,k=i("p")`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #121417;
    margin-bottom: 8px;
`,_=i("span")`
    color: #3470ff;
`,G=i("button")`
    padding: 0;
    position: absolute;
    top: 14px;
    right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
`,H=i("svg")`
    stroke: rgba(255, 255, 255, 0.8);
    fill: transparent;
    width: 18px;
    height: 18px;
    &:is(:hover, :focus) {
        stroke: #3470ff;
        fill: #3470ff;
    }
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
    stroke: #3470ff;
    fill: #3470ff;
    width: 18px;
    height: 18px;
    &:is(:hover, :focus) {
        stroke: rgba(255, 255, 255, 0.8);
        fill: transparent;
    }
`,Q=({advert:n,toggleModal:o})=>{const l=t=>{t.stopPropagation()},a=n.address.split(","),d=n.rentalPrice.slice(1,n.rentalPrice.length),x=n.mileage.toLocaleString("en-IN");return g.useEffect(()=>{const t=()=>{o()};return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[o]),e.jsx(M,{onClick:o,children:e.jsx(B,{onClick:l,children:e.jsxs("div",{onClick:l,children:[e.jsx(P,{onClick:o,children:e.jsx(v,{children:e.jsx("use",{href:f+"#icon-close"})})}),e.jsx(E,{src:n.img}),e.jsxs(R,{children:[n.make," ",e.jsx(O,{children:n.model}),","," ",n.year]}),e.jsxs(A,{children:[e.jsxs(c,{children:[a[1],e.jsx(s,{children:"|"}),a[2],e.jsx(s,{children:"|"}),"Id: ",n.id,e.jsx(s,{children:"|"}),"Year: ",n.year,e.jsx(s,{children:"|"}),"Type: ",n.type]}),e.jsxs(c,{children:["Fuel Consumption: ",n.fuelConsumption,e.jsx(s,{children:"|"}),"Engine Size: ",n.engineSize]})]}),e.jsx(D,{children:n.description}),e.jsxs(b,{children:[e.jsx(m,{children:"Accessories and functionalities:"}),e.jsxs(c,{children:[n.accessories[0],e.jsx(s,{children:"|"}),n.accessories[1],e.jsx(s,{children:"|"}),n.accessories[2]]}),e.jsxs(c,{children:[n.functionalities[0],e.jsx(s,{children:"|"}),n.functionalities[1],e.jsx(s,{children:"|"}),n.functionalities[2]]})]}),e.jsxs(b,{children:[e.jsx(m,{children:"Rental Conditions:"}),e.jsxs("div",{children:[e.jsxs(r,{children:["Minimum age :"," ",e.jsx(h,{children:"25"})]}),e.jsx(r,{children:"Valid driver’s license"})]}),e.jsxs("div",{children:[e.jsx(r,{children:"Security deposite required"}),e.jsxs(r,{children:["Mileage:"," ",e.jsx(h,{children:x})]}),e.jsxs(r,{children:["Price: ",e.jsxs(h,{children:[d,"$"]})]})]})]}),e.jsx($,{href:"tel:+380730000000",children:e.jsx(y,{children:"Rental car"})})]})})})},U=n=>n.favorites.favorites,X=({advert:n})=>{const o=L(),l=T(U),[a,d]=g.useState(!1),[x,t]=g.useState(()=>!!l.find(p=>p.id===n.id)),w=n.rentalPrice.slice(1,n.rentalPrice.length),u=n.address.split(","),C=n.img?n.img:n.photoLink,j=()=>{d(p=>!p)},S=()=>{o(z(n)),t(!0)},F=()=>{o(I(n.id)),t(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(q,{children:[e.jsx(V,{style:{backgroundImage:`url(${C})`}}),e.jsxs(Y,{children:[e.jsxs(k,{children:[n.make," ",e.jsx(_,{children:n.model}),","," ",n.year]}),e.jsxs(k,{children:[w,"$"]})]}),e.jsxs(c,{children:[u[1],e.jsx(s,{children:"|"}),u[2],e.jsx(s,{children:"|"}),n.rentalCompany,e.jsx(s,{children:"|"}),n.type,e.jsx(s,{children:"|"}),n.model,e.jsx(s,{children:"|"}),n.id,e.jsx(s,{children:"|"}),n.functionalities[0]]}),e.jsx(N,{onClick:j,children:e.jsx(y,{children:"Learn more"})}),x?e.jsx(J,{onClick:F,children:e.jsx(K,{children:e.jsx("use",{href:f+"#icon-heart"})})}):e.jsx(G,{onClick:S,children:e.jsx(H,{children:e.jsx("use",{href:f+"#icon-heart"})})})]}),a&&e.jsx(Q,{advert:n,toggleModal:j})]})},Z=i.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 50px 29px;
    margin-bottom: 100px;
`;export{Z as C,X as a,U as s};
