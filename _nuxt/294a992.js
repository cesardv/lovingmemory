(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{196:function(t,e,n){"use strict";n.r(e);var o=n(27),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("NuxtLink",{attrs:{to:"/"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-h-square fa-fw"})]),t._v("Home")])],1),t._v(" "),n("li",[n("NuxtLink",{attrs:{to:"/order-of-service"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-map fa-fw"})]),n("span",{staticClass:"menu"},[t._v("Order of Service"),n("small",[t._v("Coming soon")])])])],1),t._v(" "),n("li",[n("NuxtLink",{attrs:{to:"/live-stream"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fab fa-youtube fa-fw"})]),n("span",{staticClass:"menu"},[t._v("Service Live Stream")])])],1),t._v(" "),n("li",[n("NuxtLink",{attrs:{to:"/gallery"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-images fa-fw"})]),n("span",{staticClass:"menu"},[t._v("Gallery")])])],1),t._v(" "),n("li",[n("NuxtLink",{attrs:{to:"/charity-donation"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-hands-helping fa-fw"})]),n("span",{staticClass:"menu"},[t._v("Charity Donations")])])],1)])}),[],!1,null,null,null);e.default=component.exports},197:function(t,e,n){var content=n(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("7e5ec702",content,!0,{sourceMap:!1})},202:function(t,e,n){"use strict";n(197)},203:function(t,e,n){(e=n(66)(!1)).push([t.i,".images-wrapper{margin-bottom:20px;margin-right:20px;display:flex;flex-wrap:wrap;width:100%}@media screen and (max-width:800px){.images-wrapper{justify-content:space-evenly}}.images-wrapper .image{cursor:pointer;background-position:50%;background-repeat:no-repeat;background-size:cover;margin:3px;width:125px;height:125px}@media screen and (max-width:800px){.images-wrapper .image{margin:0}}",""]),t.exports=e},206:function(t,e,n){"use strict";n.r(e);var o=n(198),r=(n(200),{components:{CoolLightBox:o.a},data:function(){return{items:["https://lh3.googleusercontent.com/pw/ACtC-3dYUufFBpNdOWAhiDN4KX7YI6b0DV022XFZh_JyCJ58D25LRLDxOgC-oaOdf7BbdH65-oZDgSM-AiSQyt3O1fUEsYabEydk8aqwzFkNtNQ7PLKDqy_DZ6Q_HdVsE5gKsLTL1MVCWV_rvcLzl1LM4a7pXw=w778-h1036-no?authuser=0","https://lh3.googleusercontent.com/pw/ACtC-3d6XLEKJWfATcVjxoSDBA2K5hP3E1bqQpsz8GjiIKAUmgtsTox8-_9h4RlnSJvEJW4U-UuPCBXY93LZr41oyPqTA2gRmAVd9THLnI0vd8gGrPZSr9Z86L_AeBpxBjdoN-Jpwjk3iUDd2zCAXDF5YvkHNw=w709-h945-no?authuser=0","https://lh3.googleusercontent.com/pw/ACtC-3c4W7oBVshZemW7EiMGziCHw9dO9ivM4IV5o6fKyJIDDdeY0HPSp7OD-CsAEZ_qbEr2R3YgcHzRusP7MLvaCCKTmVT7TVHFfstaHpWlcSrU-Hj2e1ga2ATdZewY_jpU0cnlezSqN7oTPjweAI9LK-YynQ=w778-h1036-no?authuser=0","https://lh3.googleusercontent.com/pw/ACtC-3e_43vbpJQwYpEnwhib9i4_BR6dgygl8393YaPxmgAalik2WvPfvl_dl3WgnKdqv9eq5CT6ary-etH8ceQt-EDUzm-_bTNyfNHr7Coy_3hqDKyuElSxQf3x74LRB1cwjndXFXWCYLVXSaqaF6ag9ZW7vQ=w778-h1036-no?authuser=0","https://lh3.googleusercontent.com/pw/ACtC-3ctE4TKcPDEs-WJF_0pKeGT4bvRycIPPQYmIN6nNQukitz75igN483Y9rgAjHQk2sDQupJ-j2gRqTzMn4qVradjisWxmOfpQED_O6rRbn1SIsLg_OfTwcvEy7ceOXSpSotgAMbHM7753cLCdyx1vfJ4fw=w472-h1036-no?authuser=0","https://lh3.googleusercontent.com/pw/ACtC-3e3-sHFc_nsRyjhp0UvZCF25rlm1kATmZtjPOm2yWhWCqhNr812pJjDYsM1JzdUCy3eS2uU7mFiZGkAcsbpTTF_bIZBunC3ajwpyyrmcir-AJTttC0grJrs4RBv4_3wyOlMM5wLnYetX05lxenAbXyaqQ=w1024-h768-no?authuser=0"],index:null}}}),l=(n(202),n(27)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"section links"},[n("Nav")],1),t._v(" "),n("div",{staticClass:"section details"},[n("h1",{staticClass:"title"},[t._v("Gallery")]),t._v(" "),n("CoolLightBox",{attrs:{items:t.items,index:t.index},on:{close:function(e){t.index=null}}}),t._v(" "),n("div",{staticClass:"images-wrapper"},t._l(t.items,(function(image,e){return n("div",{key:e,staticClass:"image",style:{backgroundImage:"url("+image+")"},on:{click:function(n){t.index=e}}})})),0)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:n(196).default})}}]);