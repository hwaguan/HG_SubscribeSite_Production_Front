import{d as v,s as g,j as b,u as f,r as I,o as h,c as S,k as o,A as p}from"./index-6c5594b7.js";const _=v({__name:"MemberInitView",emits:["loadingSwitch","memberStatusChange"],setup(A,{emit:l}){const a=g(),u=b(),m=f(),{rkey:d}=u.params,c=new p,n=l;let e=I(a.getMember());const i=s=>{n("loadingSwitch",s)};return(async()=>{const s=a.hostPath+a.memberInitPath;i(!0);const r=await c.callAPI(s,{registerToken:d});if(i(!1),r.result){const t=r.message;e.value.id=""+t.mID,e.value.name=""+t.mGoogleName,e.value.gender=""+t.mGender==null?"未設定":t.mGender==0?"女":"男",e.value.avatar=""+t.mGoogleIcon,e.value.email=""+t.mMail,e.value.tel=""+t.mTelHome,e.value.mobile=""+t.mMobile,e.value.addressZip=""+t.mZip,e.value.addressCity=""+t.mAddressCity,e.value.addressArea=""+t.mAddressArea,e.value.addressOther=""+t.mAddressRest,sessionStorage.setItem("memberID",e.value.id),sessionStorage.setItem("memberName",e.value.name),sessionStorage.setItem("memberGender",e.value.gender),sessionStorage.setItem("memberEmail",e.value.email),sessionStorage.setItem("memberAvatar",e.value.avatar),sessionStorage.setItem("memberMobile",e.value.mobile),sessionStorage.setItem("memberTel",e.value.tel),sessionStorage.setItem("memberAddrZip",e.value.addressZip),sessionStorage.setItem("memberAddrCity",e.value.addressCity),sessionStorage.setItem("memberAddrArea",e.value.addressArea),sessionStorage.setItem("memberAddress",e.value.addressOther),n("memberStatusChange",e),o.fire({icon:"success",title:"會員帳號啟用成功",text:"請您記得至會員專區修改您的個人資訊哦!",confirmButtonColor:"#3085d6",confirmButtonText:"碓定"}).then(x=>{m.push("/")})}else r.code<0?o.fire({icon:"error",title:"會員帳號啟用失敗",text:"帳號不存在",confirmButtonColor:"#3085d6",confirmButtonText:"碓定"}).then(t=>{}):o.fire({icon:"error",title:"帳號初始化失敗",text:"帳號已啟用，請勿重複啟用",confirmButtonColor:"#3085d6",confirmButtonText:"碓定"}).then(t=>{}),m.push("/")})(),(s,r)=>(h(),S("div"))}});export{_ as default};
