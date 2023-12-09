import{j as t,L as x,r as f,S as j}from"./index-a28b986f.js";function v({subtotal:i,shippingFee:e,totalAmount:n,onCheckoutHandler:r}){return t.jsx("div",{className:"cartitems-down",children:t.jsxs("div",{className:"cartitems-total",children:[t.jsx("h1",{children:"Cart total:"}),t.jsxs("div",{children:[t.jsxs("div",{className:"cartitems-total-item",children:[t.jsx("p",{children:"Subtotal"}),t.jsxs("p",{children:["$",i.toFixed(2)]})]}),t.jsx("hr",{}),t.jsxs("div",{className:"cartitems-total-item",children:[t.jsx("p",{children:"Shipping Fee"}),t.jsx("p",{children:e>0?`$${e.toFixed(2)}`:"Free"})]}),t.jsx("hr",{}),t.jsxs("div",{className:"cartitems-total-item",children:[t.jsx("h3",{children:"Total"}),t.jsxs("h3",{children:["$",n.toFixed(2)]})]})]}),t.jsx("button",{className:"checkout-btn",onClick:()=>r(),children:"PROCEED TO CHECKOUT"})]})})}const S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADzSURBVHgBjZPNDYMwDIVrwwCMQCeAjsAI3YALh97YAEZozxzKBqgTMEIzAiPQOz99looUhYTUUiSC/b3YeQrleR4zc74sy71t2/HkCdRHYRhW0zQ9mIhqrCoIgl4Sf4D9uq4lmJLxUWMNyKVHAhqYYquEo19CWu+hFktinudMH8EEtzxpBVYBFygMGa2ZAleAnQ3cwRaBLXagFZYoiiKFde9tD/AMcDDr2HJyhDaf+j+40NlcYBPULwftX45sZBcoMzZNo9B+5hIgF2j4bLWRfOCRAPZc+kAJuW19BHlMQZIkA9Q+SNx8r0opNaL+BZBQ334BVF/tDGYkgX4AAAAASUVORK5CYII=",w=({product:i,quantity:e,removeFromCart:n})=>t.jsxs("div",{children:[t.jsxs("div",{className:"cartitems-format cartitems-format-main",children:[t.jsx(x,{to:`/product/${i.id}`,children:t.jsx("img",{src:i.image,alt:"",className:"carticon-product-icon"})}),t.jsx("p",{children:i.name}),t.jsxs("p",{children:["$",i.price]}),t.jsx("p",{className:"cartitems-quantity",children:e}),t.jsxs("p",{children:["$",(i.price*e).toFixed(2)]}),t.jsx("img",{className:"cartitems-remove-icon",src:S,onClick:()=>{n(i.id)},alt:"remove"})]}),t.jsx("hr",{})]},i.id),C=w;function g({allProducts:i,cartItems:e,removeFromCart:n}){return t.jsx(t.Fragment,{children:i.map(r=>{const s=e[r.id];return s>0?t.jsx(C,{product:r,quantity:s,removeFromCart:n},r.id):null})})}var u="https://js.stripe.com/v3",E=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,d="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",I=function(){for(var e=document.querySelectorAll('script[src^="'.concat(u,'"]')),n=0;n<e.length;n++){var r=e[n];if(E.test(r.src))return r}return null},N=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(u).concat(n);var s=document.head||document.body;if(!s)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return s.appendChild(r),r},y=function(e,n){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"2.2.0",startTime:n})},c=null,F=function(e){return c!==null||(c=new Promise(function(n,r){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&e&&console.warn(d),window.Stripe){n(window.Stripe);return}try{var s=I();s&&e?console.warn(d):s||(s=N(e)),s.addEventListener("load",function(){window.Stripe?n(window.Stripe):r(new Error("Stripe.js not available"))}),s.addEventListener("error",function(){r(new Error("Failed to load Stripe.js"))})}catch(a){r(a);return}})),c},R=function(e,n,r){if(e===null)return null;var s=e.apply(void 0,n);return y(s,r),s},m=Promise.resolve().then(function(){return F(null)}),h=!1;m.catch(function(i){h||console.warn(i)});var T=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];h=!0;var s=Date.now();return m.then(function(a){return R(a,n,s)})};const Y=async i=>{try{const e=await fetch("http://localhost:4242/checkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:i})});if(!e.ok){console.error("Failed to checkout:",e.statusText);return}const{id:n}=await e.json(),r=await T("pk_test_51NaNgtKbiChAb1IQN6qtOhbYSlocpdrL5l62UOoMz93drGxWB27YJsNdlD94TGoRwFmssXxMEFYnlmZAiUpSb07h00uI33KadM");r==null||r.redirectToCheckout({sessionId:n})}catch(e){console.error("An error occurred during checkout:",e)}},B=async(i,e)=>{const r=e.map(s=>{const a=i[s.id];if(a>0)return{name:s.name,price:s.price,quantity:a,image:s.image}}).filter(s=>s!==void 0||null);if(r.length>0)return r};function k(){const{getTotalCartAmount:i,cartItems:e,removeFromCart:n,allProducts:r}=f.useContext(j),s=o=>o>0&&o<50?5:0,a=i(),l=s(a),p=a+l,A=async()=>{const o=await B(e,r);o&&await Y(o)};return t.jsxs("div",{className:"cartitems",children:[t.jsxs("div",{className:"cartitems-format-main",children:[t.jsx("p",{children:"Products"}),t.jsx("p",{children:"Title"}),t.jsx("p",{children:"Price"}),t.jsx("p",{children:"Quantity"}),t.jsx("p",{children:"Total"}),t.jsx("p",{children:"Remove"})]}),t.jsx("hr",{}),t.jsx(g,{allProducts:r,cartItems:e,removeFromCart:n}),t.jsx(v,{subtotal:a,shippingFee:l,totalAmount:p,onCheckoutHandler:A})]})}export{k as default};
