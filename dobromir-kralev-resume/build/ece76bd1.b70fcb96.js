(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{97:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=(a(104),a(109)),r=a(106),c=a(22),o=a(108);a(38);const m=[{key:1,title:"Software Engineer",siteLink:"",imageUrl:"img/front_page_software_engineer.png",description:"Continue to CV",linkUrl:"/cv/"},{key:2,title:"Musician",siteLink:"",imageUrl:"img/front_page_musician.jpg",description:"View my Work",linkUrl:"/musician/"}];function s({imageUrl:e,title:t,description:a,linkUrl:l}){const[c,m]=Object(n.useState)(!1),s=()=>m(!c),u=Object(o.a)(e);return i.a.createElement("div",{onMouseEnter:s,onMouseLeave:s,className:c?"imageThumb hovered":"imageThumb"},i.a.createElement("img",{src:u,alt:t}),i.a.createElement("div",{className:"additionalInfoCard"},i.a.createElement("h2",null,t),i.a.createElement(r.a,{className:"button button--outline button--primary button--lg",to:Object(o.a)(l)},a)))}function u({info:e}){return i.a.createElement("div",null,e&&e.length>0&&i.a.createElement("section",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"imageRow"},e.map(((e,t)=>i.a.createElement(s,e)))))))}t.default=function(){const e=Object(c.default)(),{siteConfig:t={context:e}}=e;return i.a.createElement(l.a,{title:t.title,description:t.description},i.a.createElement("header",{className:"hero"},i.a.createElement("div",{className:"headerContainer"},i.a.createElement("h1",{className:"hero__title name"},t.title),i.a.createElement("p",{className:"hero__subtitle"},t.tagline))),i.a.createElement("main",null,i.a.createElement(u,{info:m})))}}}]);