(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{296:function(e,a,t){e.exports={DialogPage:"DialogsPage_DialogPage__23Wyz"}},297:function(e,a,t){e.exports={DialogArea:"CurrentDialog_DialogArea__3C050",NewPost:"CurrentDialog_NewPost__9w6pW",userAvatar:"CurrentDialog_userAvatar__3R07Q",textArea:"CurrentDialog_textArea__3GfCl",buttons:"CurrentDialog_buttons__20J8T",attachB:"CurrentDialog_attachB__3-p1o",sendB:"CurrentDialog_sendB__1LEen"}},298:function(e,a,t){e.exports={Message:"Message_Message__28sZD",Avatar:"Message_Avatar__26Hs0",MessageArea:"Message_MessageArea__2PoPp"}},299:function(e,a,t){e.exports={DialogList:"DialogList_DialogList__1TS_l",DialogUl:"DialogList_DialogUl__1COL9",Head:"DialogList_Head__2d49n"}},300:function(e,a,t){e.exports={item:"DialogItem_item__PLWqr",selected:"DialogItem_selected__5yNLa",Label:"DialogItem_Label__6ZK7-",Preview:"DialogItem_Preview__3Rjo2",Ava:"DialogItem_Ava__3sTu1"}},311:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(296),l=t.n(r),i=t(126),m=t(297),c=t.n(m),o=t(298),g=t.n(o),u=function(e){return n.a.createElement("div",{className:g.a.Message},n.a.createElement("div",{className:g.a.Avatar},n.a.createElement("img",{src:e.avatarImage})),n.a.createElement("div",{className:g.a.MessageArea},e.messageContent))},_=t(88),d=t(127),v=Object(d.a)({form:"message"})(function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement(_.a,{className:c.a.textArea,name:"messageField",component:"input"}),n.a.createElement("div",{className:c.a.buttons},n.a.createElement("button",{className:c.a.sendB},"Send")))}),D=function(e){var a=e.messages.map(function(e){return n.a.createElement(u,{key:e.id,messageContent:e.messageContent,avatarImage:e.avatarImage})});return n.a.createElement("div",{className:c.a.DialogArea},n.a.createElement("div",{className:c.a.NewPost},n.a.createElement("div",{className:c.a.userAvatar},n.a.createElement("img",{src:e.messages[0].avatarImage})),n.a.createElement(v,{onSubmit:function(a){console.log(a),e.sendNewMessage(a.messageField)}})),a)},E=t(11),N=Object(E.b)(function(e){return{messages:e.messagesReducer.messages}},{sendNewMessage:i.b})(D),b=t(299),f=t.n(b),p=t(300),A=t.n(p),w=t(10),P=function(e){var a="/DialogsPage/"+e.id,t=e.avatarImg,s=e.name;e.lastMessage;return n.a.createElement(w.b,{to:a,className:A.a.item},n.a.createElement("div",{className:A.a.Ava},n.a.createElement("img",{src:t})),n.a.createElement("div",{className:A.a.Label},s),n.a.createElement("div",{className:A.a.Preview},"'Oh bois!!!!!!!!!!!!!'"))},C=function(e){var a=e.users.map(function(e){return n.a.createElement("li",{key:e.id+10},n.a.createElement(P,{name:e.name,avatarImg:e.avatarImage}))});return n.a.createElement("div",{className:f.a.DialogList},n.a.createElement("div",{className:f.a.Head},n.a.createElement("h3",null,n.a.createElement("b",null,"My Dialogs"))),n.a.createElement("ul",{className:f.a.DialogUl},a))},L=Object(E.b)(function(e){return{users:e.messagesReducer.users}},{})(C),M=t(95),I=t(6);a.default=Object(I.compose)(M.a)(function(e){return n.a.createElement("div",{className:l.a.DialogPage},n.a.createElement(L,null),n.a.createElement(N,null))})}}]);
//# sourceMappingURL=4.ab99c84c.chunk.js.map