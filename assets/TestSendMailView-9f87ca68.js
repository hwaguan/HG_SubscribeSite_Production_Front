import{d as s,s as r,o as c,c as o,a as i,R as l}from"./index-64be13f7.js";const m=s({__name:"TestSendMailView",setup(d){r();const t=async()=>{const e=new l;let n="<h3>華冠投顧 ClickGo 會員註冊成功</h3>";n+="<p>您好，<br><br>我們以經收到您的註冊申請<br>請您點擊以下連結進行會員帳號啟用，謝謝您<br></p>",n+="華冠投顧 敬祝您<br><br>",n+="投資獲利 所向披靡",e.Subject="華冠投顧_ClickGO - 會員註冊成功通知信",e.Content=n;const a=new e.MailReceiver;a.name="貴會員",a.address="blair@hwa-guan.com.tw",e.addReceiver(a),e.send()};return(e,n)=>(c(),o("div",null,[i("button",{onClick:t},"送出")]))}});export{m as default};
