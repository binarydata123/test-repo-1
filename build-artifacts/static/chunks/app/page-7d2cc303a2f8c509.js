(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9047:function(t,e,n){Promise.resolve().then(n.bind(n,2297))},2297:function(t,e,n){"use strict";n.d(e,{Counter:function(){return d}});var a=n(7437),u=n(2265),r=n(7542),s=n(1444);let o=s.I0.withTypes(),c=s.v9.withTypes();s.oR.withTypes();var l=n(253),i=n.n(l);let d=()=>{let t=o(),e=c(r.Hm),n=c(r.mW),[s,l]=(0,u.useState)("2"),d=Number(s)||0;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:i().row,children:[(0,a.jsx)("button",{className:i().button,"aria-label":"Decrement value",onClick:()=>t((0,r.Mj)()),children:"-"}),(0,a.jsx)("span",{"aria-label":"Count",className:i().value,children:e}),(0,a.jsx)("button",{className:i().button,"aria-label":"Increment value",onClick:()=>t((0,r.nP)()),children:"+"})]}),(0,a.jsxs)("div",{className:i().row,children:[(0,a.jsx)("input",{className:i().textbox,"aria-label":"Set increment amount",value:s,type:"number",onChange:t=>{l(t.target.value)}}),(0,a.jsx)("button",{className:i().button,onClick:()=>t((0,r.ds)(d)),children:"Add Amount"}),(0,a.jsx)("button",{className:i().asyncButton,disabled:"idle"!==n,onClick:()=>t((0,r.mL)(d)),children:"Add Async"}),(0,a.jsx)("button",{className:i().button,onClick:()=>{t((0,r.w0)(d))},children:"Add If Odd"})]})]})}},7542:function(t,e,n){"use strict";n.d(e,{r2:function(){return s},Mj:function(){return o},nP:function(){return c},mL:function(){return i},ds:function(){return l},w0:function(){return b},Hm:function(){return d},mW:function(){return m}});var a=n(2351);let u=(0,a.wc)({creators:{asyncThunk:a.eU}}),r=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=await fetch("http://localhost:3000/api/counter",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:t})});return await e.json()},s=u({name:"counter",initialState:{value:0,status:"idle"},reducers:t=>({increment:t.reducer(t=>{t.value+=1}),decrement:t.reducer(t=>{t.value-=1}),incrementByAmount:t.reducer((t,e)=>{t.value+=e.payload}),incrementAsync:t.asyncThunk(async t=>(await r(t)).data,{pending:t=>{t.status="loading"},fulfilled:(t,e)=>{t.status="idle",t.value+=e.payload},rejected:t=>{t.status="failed"}})}),selectors:{selectCount:t=>t.value,selectStatus:t=>t.status}}),{decrement:o,increment:c,incrementByAmount:l,incrementAsync:i}=s.actions,{selectCount:d,selectStatus:m}=s.selectors,b=t=>(e,n)=>{let a=d(n());(a%2==1||a%2==-1)&&e(l(t))}},253:function(t){t.exports={row:"Counter_row__DnuXF",value:"Counter_value__WQ5Aj",button:"Counter_button__arjKs",textbox:"Counter_textbox__7e5E8",asyncButton:"Counter_asyncButton__VgaTe Counter_button__arjKs"}}},function(t){t.O(0,[139,460,971,23,560],function(){return t(t.s=9047)}),_N_E=t.O()}]);