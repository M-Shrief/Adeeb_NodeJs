import{u as V}from"./orders.0caf71fa.js";import{u as A,a as E}from"./proses.7dada09c.js";import{_ as g,o,c as s,a as e,r as D,F as h,b as k,v as S,h as C,w as q,k as w,x as B,f as O,t as _,m as P,u as r,y as L,z as M,p as T,i as z,A as $,B as b}from"./index.f239620d.js";import{u as X}from"./prints.0dfdcb06.js";import"./axios.91e25212.js";const j={class:"colors"},G=["onClick"],H={__name:"PreviewColors",props:{colors:Array},emits:["toColor"],setup(a){return(n,i)=>(o(),s("div",j,[e("p",null,[D(n.$slots,"default",{},void 0,!0)]),(o(!0),s(h,null,k(a.colors,c=>(o(),s("button",{key:c,style:S({background:c}),class:"color",onClick:p=>n.$emit("toColor",c)},null,12,G))),128))]))}},I=g(H,[["__scopeId","data-v-1bfd2e72"]]);const J={id:"customization"},K=B('<div class="select" data-v-7ad7597a><label for="fontType" data-v-7ad7597a>\u0627\u0633\u0644\u0648\u0628 \u0627\u0644\u062E\u0637</label><select name="fontType" id="fontType" data-v-7ad7597a><option value="\u0646\u0633\u062E" data-v-7ad7597a>\u0646\u0633\u062E</option><option value="\u0631\u0642\u0639\u0629" data-v-7ad7597a>\u0631\u0642\u0639\u0629</option><option value="\u062F\u064A\u0648\u0627\u0646\u064A" data-v-7ad7597a>\u062F\u064A\u0648\u0627\u0646\u064A</option></select></div>',1),Q={__name:"PrintCustomization",props:{colors:{type:Array,required:!0}},emits:["fontColor","backgroundColor"],setup(a){return(n,i)=>(o(),s("div",J,[K,C(I,{colors:a.colors,onToColor:i[0]||(i[0]=c=>n.$emit("fontColor",c))},{default:q(()=>[w("\u0627\u0644\u062E\u0637: ")]),_:1},8,["colors"]),C(I,{colors:a.colors,onToColor:i[1]||(i[1]=c=>n.$emit("backgroundColor",c))},{default:q(()=>[w("\u0627\u0644\u062E\u0644\u0641\u064A\u0629: ")]),_:1},8,["colors"])]))}},U=g(Q,[["__scopeId","data-v-7ad7597a"]]);const W=["onClick"],Y={dir:"ltr"},Z={key:1,class:"verse"},ee={dir:"ltr"},te={key:2,class:"qoute"},oe=["onClick"],se={__name:"ShowCasePrints",emits:["print"],setup(a){const n=X(),i=O(()=>n.getPrints);function c(p){return n.removePrint(p)}return(p,m)=>(o(!0),s(h,null,k(r(i),t=>(o(),s("div",{key:t._id,class:"print-item"},[e("div",{onClick:v=>p.$emit("print",t)},[t.verse?(o(!0),s(h,{key:0},k(t.verse,v=>(o(),s("div",{key:v._id,class:"verse"},[e("p",null,_(v.first),1),e("p",Y,_(v.sec),1)]))),128)):t.first?(o(),s("div",Z,[e("p",null,_(t.first),1),e("p",ee,_(t.sec),1)])):t.qoute?(o(),s("div",te,[e("p",null,_(t.qoute),1)])):P("",!0)],8,W),e("button",{onClick:v=>c(t)},"X",8,oe)]))),128))}},ne=g(se,[["__scopeId","data-v-5fc98e9e"]]);const re=a=>(T("data-v-0f94de53"),a=a(),z(),a),de=["onSubmit"],ie={id:"confirmation"},ae=B('<div id="customer-details" data-v-0f94de53><div class="container" data-v-0f94de53><label for="name" data-v-0f94de53>\u0627\u0644\u0627\u0633\u0645: </label><input type="text" id="name" name="name" required minlength="5" maxlength="20" data-v-0f94de53></div><div class="container" data-v-0f94de53><label for="phone" data-v-0f94de53>\u0627\u0644\u0647\u0627\u062A\u0641: </label><input type="text" id="phone" name="phone" required minlength="8" maxlength="18" data-v-0f94de53></div><div class="container" data-v-0f94de53><label for="address" data-v-0f94de53>\u0627\u0644\u0639\u0646\u0648\u0627\u0646: </label><input type="text" id="address" name="address" required minlength="8" maxlength="70" data-v-0f94de53></div></div>',1),le={id:"products"},ce=["onDblclick"],ue={key:0},_e={key:1},ve=re(()=>e("button",{type:"submit"},"\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628",-1)),pe={__name:"OrderForm",props:{products:{type:Array,required:!1}},setup(a){const n=a,i=M();function c(t,v){let u=t.map(y=>y.print._id).indexOf(v.print._id);t.splice(u,1)}const p=V();async function m(){let t=document.getElementById("name").value,v=document.getElementById("phone").value,u=document.getElementById("address").value,y={name:t,phone:v,address:u,products:n.products};await p.newOrder(y),i.push("/orders")}return(t,v)=>(o(),s("form",{onSubmit:L(m,["prevent"]),dir:"rtl"},[e("div",ie,[ae,e("div",le,[(o(!0),s(h,null,k(a.products,u=>(o(),s("div",{key:u.print._id,class:"product",style:S({color:u.fontColor,background:u.backgroundColor}),onDblclick:y=>c(a.products,u)},[e("p",null,_(u.fontType),1),u.print.verse?(o(),s("p",ue,_(u.print.verse[0].first)+"...",1)):(o(),s("p",_e,_(u.print.qoute.slice(0,30))+"...",1))],44,ce))),128))])]),ve],40,de))}},me=g(pe,[["__scopeId","data-v-0f94de53"]]);const F=a=>(T("data-v-1fc26895"),a=a(),z(),a),fe={id:"printing",dir:"rtl"},ye={class:"container"},he={id:"preview"},ke=F(()=>e("h3",null,"\u0627\u062E\u062A\u0631 \u0645\u0646 \u0627\u0644\u0627\u0634\u0639\u0627\u0631 \u0644\u0644\u0637\u0628\u0627\u0639\u0629",-1)),Ce={dir:"ltr"},ge={id:"prints"},$e=F(()=>e("h3",null,"\u0627\u0644\u0645\u062E\u062A\u0627\u0631 \u0644\u0644\u0637\u0628\u0627\u0639\u0629",-1)),be={id:"randoms"},Pe={id:"buttons"},Se={key:0},xe={dir:"ltr"},qe={key:1,class:"qoute"},we={__name:"Printing",setup(a){let n=$({}),i=$();const c=V(),p=c.getColors;let m=$(p[0]),t=$(p[1]);const v=O(()=>c.getProducts);function u(f,l){(f.verse||f.qoute)&&c.addProduct(f,l)}const y=A();function R(f){y.fetchRandomChosenVerses(f),i.value=y.getChosenVerses[0]}const x=E();function N(f){x.fetchRandomProses(f),i.value=x.getProses[0]}return(f,l)=>(o(),s("div",fe,[e("div",ye,[e("section",he,[ke,C(U,{colors:r(p),onFontColor:l[0]||(l[0]=d=>b(m)?m.value=d:m=d),onBackgroundColor:l[1]||(l[1]=d=>b(t)?t.value=d:t=d)},null,8,["colors"]),r(n).verse?(o(!0),s(h,{key:0},k(r(n).verse,d=>(o(),s("div",{key:d._id,class:"verse",id:"print",style:S({color:r(m),background:r(t)})},[e("p",null,_(d.first),1),e("p",Ce,_(d.sec),1)],4))),128)):r(n).qoute?(o(),s("div",{key:1,class:"qoute",id:"print",style:S({color:r(m),background:r(t)})},[e("p",null,_(r(n).qoute),1)],4)):P("",!0),e("button",{onClick:l[2]||(l[2]=d=>u(r(n),[r(m),r(t)]))}," \u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0637\u0644\u0628")]),C(me,{products:r(v)},null,8,["products"])]),e("section",ge,[$e,e("div",be,[e("div",Pe,[e("button",{onClick:l[3]||(l[3]=d=>R(1))},"\u0634\u0639\u0631 \u0639\u0634\u0648\u0627\u0626\u064A"),e("button",{onClick:l[4]||(l[4]=d=>N(1))},"\u0646\u062B\u0631 \u0639\u0634\u0648\u0627\u0626\u064A")]),r(i)?(o(),s("div",Se,[e("div",{onClick:l[5]||(l[5]=d=>b(n)?n.value=r(i):n=r(i))},[r(i).verse?(o(!0),s(h,{key:0},k(r(i).verse,d=>(o(),s("div",{key:d._id,class:"verse"},[e("p",null,_(d.first),1),e("p",xe,_(d.sec),1)]))),128)):r(i).qoute?(o(),s("div",qe,[e("p",null,_(r(i).qoute),1)])):P("",!0)])])):P("",!0)]),C(ne,{onPrint:l[6]||(l[6]=d=>b(n)?n.value=d:n=d)})])]))}},ze=g(we,[["__scopeId","data-v-1fc26895"]]);export{ze as default};
