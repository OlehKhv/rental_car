import{u as i,r as m,j as e,h as s,c as L,a as S,i as T,k as z}from"./index-70e45df7.js";const I=i("div")`
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
`,o=i.svg`
    margin-left: 6px;
    margin-right: 6px;
    width: 2px;
    height: 16px;
    stroke: rgba(18, 20, 23, 0.1);
`,M=i("div")`
    position: relative;
    padding: 40px;
    border-radius: 24px;
    width: 541px;
    background-color: #fff;
`,B=i("button")`
    padding: 0;
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
`,P=i("svg")`
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
`,v=i("span")`
    color: #3470ff;
`,A=i("div")`
    margin-bottom: 14px;
`,a=i("p")`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
    margin-bottom: 4px;
`,D=i("p")`
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
`,x=i("p")`
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
`,O=i("a")`
    border-radius: 12px;
    padding: 12px 50px;
    width: 168px;
    height: 44px;
    background-color: #3470ff;
`,N=i.li`
    width: 274px;
    height: 426px;
    border-radius: 14px 14px 12px 12px;
    position: relative;
`,W=i.button`
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
`,Y=i.div`
    width: 274px;
    height: 268px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 14px;
    margin-bottom: 14px;
`,q=i("div")`
    display: flex;
    justify-content: space-between;
`,y=i("p")`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #121417;
    margin-bottom: 8px;
`,G=i("span")`
    color: #3470ff;
`,H=i("button")`
    padding: 0;
    position: absolute;
    top: 14px;
    right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
`,J=i("svg")`
    stroke: rgba(255, 255, 255, 0.8);
    fill: transparent;
    width: 18px;
    height: 18px;
    &:is(:hover, :focus) {
        stroke: #3470ff;
        fill: #3470ff;
    }
`,K=i("button")`
    padding: 0;
    position: absolute;
    top: 14px;
    right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
`,Q=i("svg")`
    stroke: #3470ff;
    fill: #3470ff;
    width: 18px;
    height: 18px;
    &:is(:hover, :focus) {
        stroke: rgba(255, 255, 255, 0.8);
        fill: transparent;
    }
`,U=({advert:n,toggleModal:t})=>{const d=c=>{c.stopPropagation()},r=n.rentalConditions.split(`
`),h=r[0].slice(0,-2),f=r[0].slice(-2,r[0].length),l=n.address.split(","),g=n.rentalPrice.slice(1,n.rentalPrice.length),p=n.mileage.toLocaleString("en-IN");return m.useEffect(()=>{const c=()=>{t()};return document.addEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)}},[t]),e.jsx(I,{onClick:t,children:e.jsx(M,{onClick:d,children:e.jsxs("div",{onClick:d,children:[e.jsx(B,{onClick:t,children:e.jsx(P,{children:e.jsx("use",{href:s+"#icon-close"})})}),e.jsx(E,{src:n.img}),e.jsxs(R,{children:[n.make," ",e.jsx(v,{children:n.model}),","," ",n.year]}),e.jsxs(A,{children:[e.jsxs(a,{children:[l[1],e.jsx(o,{children:e.jsx("use",{href:`${s}#icon-line`})}),l[2],e.jsx(o,{children:e.jsx("use",{href:`${s}#icon-line`})}),"Id: ",n.id,e.jsx(o,{children:e.jsx("use",{href:`${s}#icon-line`})}),"Year: ",n.year,e.jsx(o,{children:e.jsx("use",{href:`${s}#icon-line`})}),"Type: ",n.type]}),e.jsxs(a,{children:["Fuel Consumption: ",n.fuelConsumption,e.jsx(o,{children:e.jsx("use",{href:`${s}#icon-line`})}),"Engine Size: ",n.engineSize]})]}),e.jsx(D,{children:n.description}),e.jsxs(w,{children:[e.jsx(k,{children:"Accessories and functionalities:"}),e.jsxs(a,{children:[n.accessories[0],e.jsx(o,{children:e.jsx("use",{href:`${s}#icon-line`})}),n.accessories[1],e.jsx(o,{children:e.jsx("use",{href:`${s}#icon-line`})}),n.accessories[2]]}),e.jsxs(a,{children:[n.functionalities[0],e.jsx(o,{children:e.jsx("use",{href:`${s}#icon-line`})}),n.functionalities[1],e.jsx(o,{children:e.jsx("use",{href:`${s}#icon-line`})}),n.functionalities[2]]})]}),e.jsxs(w,{children:[e.jsx(k,{children:"Rental Conditions:"}),e.jsxs("div",{children:[e.jsxs(x,{children:[h,e.jsx(j,{children:f})]}),e.jsx(x,{children:r[1]})]}),e.jsxs("div",{children:[e.jsx(x,{children:r[2]}),e.jsxs(x,{children:["Mileage:"," ",e.jsx(j,{children:p})]}),e.jsxs(x,{children:["Price: ",e.jsxs(j,{children:[g,"$"]})]})]})]}),e.jsx(O,{href:"tel:+380730000000",children:e.jsx(C,{children:"Rental car"})})]})})})},V=n=>n.favorites.favorites,Z=({advert:n})=>{const t=L(),d=S(V),[r,h]=m.useState(!1),[f,l]=m.useState(()=>!!d.find(u=>u.id===n.id)),g=n.rentalPrice.slice(1,n.rentalPrice.length),p=n.address.split(","),c=n.img?n.img:n.photoLink,b=()=>{h(u=>!u)},$=()=>{t(T(n)),l(!0)},F=()=>{t(z(n.id)),l(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(N,{children:[e.jsx(Y,{style:{backgroundImage:`url(${c})`}}),e.jsxs(q,{children:[e.jsxs(y,{children:[n.make," ",e.jsx(G,{children:n.model}),","," ",n.year]}),e.jsxs(y,{children:[g,"$"]})]}),e.jsxs(a,{children:[p[1],e.jsx(o,{children:e.jsx("use",{href:`${s}#icon-line`})}),p[2],e.jsx(o,{children:e.jsx("use",{href:`${s}#icon-line`})}),n.rentalCompany,e.jsx(o,{children:e.jsx("use",{href:`${s}#icon-line`})}),n.type,e.jsxs(o,{children:[n.model,e.jsx("use",{href:`${s}#icon-line`}),n.id]}),n.functionalities[0]]}),e.jsx(W,{onClick:b,children:e.jsx(C,{children:"Learn more"})}),f?e.jsx(K,{onClick:F,children:e.jsx(Q,{children:e.jsx("use",{href:s+"#icon-heart"})})}):e.jsx(H,{onClick:$,children:e.jsx(J,{children:e.jsx("use",{href:s+"#icon-heart"})})})]}),r&&e.jsx(U,{advert:n,toggleModal:b})]})},_=i.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 50px 29px;
    margin-bottom: 100px;
`;export{_ as C,Z as a,V as s};
