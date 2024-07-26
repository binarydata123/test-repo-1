(()=>{var e={};e.id=439,e.ids=[439],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5945:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>h,tree:()=>c}),r(1671),r(5422),r(5866);var a=r(3191),s=r(8716),n=r(7922),o=r.n(n),i=r(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["verify",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1671)),"/home/runner/work/test-repo-2/test-repo-2/app/verify/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,5080))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,5422)),"/home/runner/work/test-repo-2/test-repo-2/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,5080))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/home/runner/work/test-repo-2/test-repo-2/app/verify/page.tsx"],d="/verify/page",p={require:r,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/verify/page",pathname:"/verify",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},8689:(e,t,r)=>{Promise.resolve().then(r.bind(r,1593)),Promise.resolve().then(r.bind(r,8812)),Promise.resolve().then(r.t.bind(r,2481,23))},6848:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},5303:()=>{},8812:(e,t,r)=>{"use strict";r.d(t,{StoreProvider:()=>p});var a=r(326),s=r(8860),n=r(5843),o=r(1864);let i=(0,s.Ku)(n.r2,o.P),l=()=>(0,s.xC)({reducer:i,middleware:e=>e().concat(o.P.middleware)});var c=r(7509),u=r(7577),d=r(5842);let p=({children:e})=>{let t=(0,u.useRef)(null);return t.current||(t.current=l()),(0,u.useEffect)(()=>{if(null!=t.current)return(0,c.sj)(t.current.dispatch)},[]),a.jsx(d.zt,{store:t.current,children:e})}},1593:(e,t,r)=>{"use strict";r.d(t,{Nav:()=>l});var a=r(326),s=r(434),n=r(5047),o=r(861),i=r.n(o);let l=()=>{let e=(0,n.usePathname)();return(0,a.jsxs)("nav",{className:i().nav,children:[a.jsx(s.default,{className:`${i().link} ${"/"===e?i().active:""}`,href:"/",children:"Home"}),a.jsx(s.default,{className:`${i().link} ${"/verify"===e?i().active:""}`,href:"/verify",children:"Verify"}),a.jsx(s.default,{className:`${i().link} ${"/quotes"===e?i().active:""}`,href:"/quotes",children:"Quotes"})]})}},5843:(e,t,r)=>{"use strict";r.d(t,{r2:()=>o,Mj:()=>i,nP:()=>l,mL:()=>u,ds:()=>c,w0:()=>h,Hm:()=>d,mW:()=>p});var a=r(8860);let s=(0,a.wc)({creators:{asyncThunk:a.eU}}),n=async(e=1)=>{let t=await fetch("http://localhost:3000/api/counter",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:e})});return await t.json()},o=s({name:"counter",initialState:{value:0,status:"idle"},reducers:e=>({increment:e.reducer(e=>{e.value+=1}),decrement:e.reducer(e=>{e.value-=1}),incrementByAmount:e.reducer((e,t)=>{e.value+=t.payload}),incrementAsync:e.asyncThunk(async e=>(await n(e)).data,{pending:e=>{e.status="loading"},fulfilled:(e,t)=>{e.status="idle",e.value+=t.payload},rejected:e=>{e.status="failed"}})}),selectors:{selectCount:e=>e.value,selectStatus:e=>e.status}}),{decrement:i,increment:l,incrementByAmount:c,incrementAsync:u}=o.actions,{selectCount:d,selectStatus:p}=o.selectors,h=e=>(t,r)=>{let a=d(r());(a%2==1||a%2==-1)&&t(c(e))}},1864:(e,t,r)=>{"use strict";r.d(t,{P:()=>n,j:()=>o});var a=r(9119),s=r(7509);let n=(0,a.LC)({baseQuery:(0,s.ni)({baseUrl:"https://dummyjson.com/quotes"}),reducerPath:"quotesApi",tagTypes:["Quotes"],endpoints:e=>({getQuotes:e.query({query:(e=10)=>`?limit=${e}`,providesTags:(e,t,r)=>[{type:"Quotes",id:r}]})})}),{useGetQuotesQuery:o}=n},3836:e=>{e.exports={container:"layout_container__F8gUU",logo:"layout_logo__kJlMN",header:"layout_header__ajigz",main:"layout_main__IC0zG",footer:"layout_footer__ke1Oa",nav:"layout_nav__fHtXU",link:"layout_link__RDXtV",active:"layout_active__4tdEs","logo-float":"layout_logo-float__ZRzUF"}},861:e=>{e.exports={container:"layout_container__F8gUU",logo:"layout_logo__kJlMN",header:"layout_header__ajigz",main:"layout_main__IC0zG",footer:"layout_footer__ke1Oa",nav:"layout_nav__fHtXU",link:"layout_link__RDXtV",active:"layout_active__4tdEs","logo-float":"layout_logo-float__ZRzUF"}},5422:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_});var a=r(9510),s=r(7710),n=r(8570);let o=(0,n.createProxy)(String.raw`/home/runner/work/test-repo-2/test-repo-2/app/StoreProvider.tsx`),{__esModule:i,$$typeof:l}=o;o.default;let c=(0,n.createProxy)(String.raw`/home/runner/work/test-repo-2/test-repo-2/app/StoreProvider.tsx#StoreProvider`),u=(0,n.createProxy)(String.raw`/home/runner/work/test-repo-2/test-repo-2/app/components/Nav.tsx`),{__esModule:d,$$typeof:p}=u;u.default;let h=(0,n.createProxy)(String.raw`/home/runner/work/test-repo-2/test-repo-2/app/components/Nav.tsx#Nav`);r(413);var m=r(3836),x=r.n(m);function _({children:e}){return a.jsx(c,{children:a.jsx("html",{lang:"en",children:a.jsx("body",{children:(0,a.jsxs)("section",{className:x().container,children:[a.jsx(h,{}),a.jsx("header",{className:x().header,children:a.jsx(s.default,{src:"/logo.svg",className:x().logo,alt:"logo",width:100,height:100})}),a.jsx("main",{className:x().main,children:e}),(0,a.jsxs)("footer",{className:x().footer,children:[a.jsx("span",{children:"Learn "}),a.jsx("a",{className:x().link,href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"React"}),a.jsx("span",{children:", "}),a.jsx("a",{className:x().link,href:"https://redux.js.org",target:"_blank",rel:"noopener noreferrer",children:"Redux"}),a.jsx("span",{children:", "}),a.jsx("a",{className:x().link,href:"https://redux-toolkit.js.org",target:"_blank",rel:"noopener noreferrer",children:"Redux Toolkit"}),a.jsx("span",{children:", "}),a.jsx("a",{className:x().link,href:"https://react-redux.js.org",target:"_blank",rel:"noopener noreferrer",children:"React Redux"}),",",a.jsx("span",{children:" and "}),a.jsx("a",{className:x().link,href:"https://reselect.js.org",target:"_blank",rel:"noopener noreferrer",children:"Reselect"})]})]})})})})}},1671:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(9510);function s(){return(0,a.jsxs)(a.Fragment,{children:[a.jsx("h1",{children:"Verify page"}),a.jsx("p",{children:"This page is intended to verify that Redux state is persisted across page navigations."})]})}},5080:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(6621);let s=e=>[{type:"image/x-icon",sizes:"64x64",url:(0,a.fillMetadataSegment)(".",e.params,"icon.ico")+"?cb79560840041a18"}]},413:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,795,621],()=>r(5945));module.exports=a})();