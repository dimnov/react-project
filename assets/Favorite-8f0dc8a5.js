import{r,A as c,j as a,I as n}from"./index-a28b986f.js";import{g as d}from"./favoriteService-9815d655.js";function m(){const[t,i]=r.useState(),{currentUser:e}=r.useContext(c);return r.useEffect(()=>{(async()=>{try{if(e!=null&&e.uid){const s=await d(e.uid);i(s)}}catch(s){console.error("Error fetching favorite books:",s)}})()},[e==null?void 0:e.uid]),a.jsx("div",{className:"favorite",children:(t==null?void 0:t.length)>0?a.jsxs(a.Fragment,{children:[a.jsx("h2",{className:"header",children:"Your favorite books:"}),a.jsx("div",{className:"shopcategory-products",children:t==null?void 0:t.map((o,s)=>a.jsx(n,{id:o.id,name:o.name,image:o.image,price:o.price},s))})]}):a.jsx("h2",{className:"header",children:"No books added."})})}export{m as default};
