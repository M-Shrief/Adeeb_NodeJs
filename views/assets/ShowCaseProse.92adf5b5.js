import{j as w,_ as y,o as s,c as o,a as e,F as _,b as l,n as p,t as i,h as P,w as v,k as g,u as f,l as k,e as S,p as C,i as $,d as q,m as x}from"./index.f239620d.js";import{a as m}from"./axios.91e25212.js";const H=w("poet",{state:()=>({poets:[],poet:{}}),getters:{getPoets(t){return t.poets},getPoet(t){return t.poet}},actions:{async fetchPoets(){try{const t=await m.get("http://localhost:3000/api/poets");this.poets=t.data}catch(t){alert(t),console.log(t)}},async fetchPoet(t){try{const a=`http://localhost:3000/api/poet/${t}`,c=await m.get(a);this.poet=c.data}catch(a){alert(a),console.log(a)}}}});const I=t=>(C("data-v-d239d68d"),t=t(),$(),t),b={id:"chosen-verses"},B=I(()=>e("h2",{class:"title"},"\u0645\u062E\u062A\u0627\u0631\u0627\u062A \u0634\u0639\u0631\u064A\u0629",-1)),N={class:"first"},j={class:"sec",dir:"ltr"},A=["onClick"],F={__name:"ShowCasePoetry",props:{chosenVerses:{type:Array,required:!0},grid:{type:String,required:!1}},emits:["print"],setup(t,{emit:a}){const c=k();return(u,h)=>{const r=S("router-link");return s(),o("section",b,[B,e("div",{class:p(t.grid)},[(s(!0),o(_,null,l(t.chosenVerses,n=>(s(),o("div",{key:n._id,class:"poetry-item"},[(s(!0),o(_,null,l(n.verse,d=>(s(),o("div",{key:d._id,class:p(n.verse.length==1?"one-verse":"two-verse")},[e("p",N,i(d.first),1),e("p",j,i(d.sec),1)],2))),128)),P(r,{to:"/poem/"+n.poem,class:"details"},{default:v(()=>[g(i(f(c).name=="poet"?"\u0627\u0644\u0642\u0635\u064A\u062F\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629":n.poet.name+" - \u0627\u0644\u0642\u0635\u064A\u062F\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629"),1)]),_:2},1032,["to"]),e("button",{onClick:d=>u.$emit("print",n),class:"print-button"},"\u0627\u0636\u0641 \u0644\u0644\u0637\u0628\u0627\u0639\u0629",8,A)]))),128))],2)])}}},J=y(F,[["__scopeId","data-v-d239d68d"]]);const z=t=>(C("data-v-17a5ca90"),t=t(),$(),t),D={id:"proses"},E=z(()=>e("h2",{class:"title"},"\u0645\u062E\u062A\u0627\u0631\u0627\u062A \u0646\u062B\u0631\u064A\u0629",-1)),L={class:"qoute"},R={class:"justify"},T=["onClick"],U={__name:"ShowCaseProse",props:{proses:{type:Array,required:!0},grid:{type:String,required:!1}},emits:["print"],setup(t){const a=k();return(c,u)=>{const h=S("router-link");return s(),o("section",D,[E,e("div",{class:p(t.grid)},[(s(!0),o(_,null,l(t.proses,r=>(s(),o("div",{key:r._id,class:"prose-item"},[e("p",L,i(r.qoute),1),e("div",R,[f(a).name!=="poet"?(s(),q(h,{key:0,to:"/poet/"+r.poet._id,class:"details"},{default:v(()=>[g(i(r.poet.name),1)]),_:2},1032,["to"])):x("",!0),e("button",{onClick:n=>c.$emit("print",r),class:"print-button"}," \u0627\u0636\u0641 \u0644\u0644\u0637\u0628\u0627\u0639\u0629 ",8,T)])]))),128))],2)])}}},K=y(U,[["__scopeId","data-v-17a5ca90"]]);export{J as S,K as a,H as u};