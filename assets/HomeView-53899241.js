import{d as f,u as T,r as c,o as i,c as _,a as e,F as I,b as x,t as o,e as u,f as m,p as g,g as k,_ as w,w as B,h as S,i as V}from"./index-23d9a0bd.js";import{s as $}from"./sysConfig-2205080e.js";const C=s=>(g("data-v-c33f8e5b"),s=s(),k(),s),j={class:"packageContainer"},N={class:"packageMain"},E={class:"packageSubject"},H={key:0,class:"packageSubjectText"},L={class:"packageScore"},M={class:"packageIntro"},q=["innerHTML"],P=C(()=>e("div",{class:"packageLearnMore"},"瞭解更多...",-1)),F={class:"pakcagePrice"},A={class:"pakcageSubscribe"},D=["onClick"],O=f({__name:"PackageView",setup(s){$();const d=T();let a=c();return a.value=[{p_id:1,p_subject:"Eason 每日報告",p_intro:"每日1篇 台股盤勢專業分析文章",p_img:"",p_price:399,p_month:1,p_view:5666,p_subscribe:1312},{p_id:1,p_subject:"Eason 報告組合包",p_intro:"每日1篇 台股盤勢專業分析文章<br />每週1集週報影片",p_img:"",p_price:999,p_month:1,p_view:3140,p_subscribe:534},{p_id:1,p_subject:"Eason 直播互動",p_intro:"每日1篇 台股盤勢專業分析文章<br />直播",p_img:"",p_price:1999,p_month:1,p_view:4225,p_subscribe:31}],(n,b)=>(i(),_("div",j,[e("div",N,[(i(!0),_(I,null,x(m(a),(t,r)=>(i(),_("div",{class:"packageBody",key:r},[e("div",E,[t.p_img==""?(i(),_("div",H,o(t.p_subject),1)):u("",!0),e("div",L,"瀏覽數 : "+o(t.p_view)+" / 訂閱數 : "+o(t.p_subscribe),1)]),e("div",M,[e("div",{class:"packageIntroText",innerHTML:t.p_intro},null,8,q),P]),e("div",F,"NT $"+o(t.p_price)+" / 月",1),e("div",A,[e("button",{type:"button",class:"btn btn-sm btn-primary",onClick:l=>m(d).push({name:"purchase",params:{pid:t.p_id}})}," 訂閱"+o(t.p_id),9,D)])]))),128))])]))}});const R=w(O,[["__scopeId","data-v-c33f8e5b"]]),y=s=>(g("data-v-d32f3e93"),s=s(),k(),s),z=y(()=>e("div",{class:"viewBlockTitle"},[e("div",{class:"viewBlockTitleText"},"內容試看")],-1)),G=[z],J=y(()=>e("div",{class:"viewBlockTitle"},[e("div",{class:"viewBlockTitleText"},"常見問題")],-1)),K=[J],Q=f({__name:"HomeView",props:{goTag:String},emits:["pickNav"],setup(s,{emit:d}){const a=c();c();const n=c(),b=c(""),t=d,r=s;B(()=>r.goTag,(v,p)=>{switch(r.goTag){case"trial":a.value.scrollIntoView({behavior:"smooth"});break;case"faq":n.value.scrollIntoView({behavior:"smooth"});break}});const l=new IntersectionObserver(v=>{v.forEach(p=>{if(p.isIntersecting){let h=p.target.id;b.value=h,t("pickNav",h)}})});return S(()=>{l.observe(a.value),l.observe(n.value)}),(v,p)=>(i(),_("div",null,[u("",!0),V(R),e("div",{class:"viewBlock",id:"trial",ref_key:"trial",ref:a},G,512),u("",!0),e("div",{class:"viewBlock",id:"faq",ref_key:"faq",ref:n},K,512)]))}});const X=w(Q,[["__scopeId","data-v-d32f3e93"]]);export{X as default};
