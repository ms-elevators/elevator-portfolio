(this["webpackJsonpelevator-portfolio"]=this["webpackJsonpelevator-portfolio"]||[]).push([[0],[,,,,,,,,,,,,function(A,C,g){},function(A,C,g){},function(A,C,g){},,,,function(A,C,g){},function(A,C,g){},function(A,C,g){"use strict";g.r(C);var B=g(1),E=g.n(B),Q=g(3),o=g.n(Q),I=(g(12),g(2)),e=g(4),j=(g(13),g(14),g(0));function t(A){var C=A.soundSettings;return Object(j.jsxs)("div",{className:"intro-container",children:[Object(j.jsx)("h1",{children:"Would you like to allow sounds?"}),Object(j.jsx)("input",{type:"button",value:"yes",onClick:function(){C(!0)}}),Object(j.jsx)("input",{type:"button",value:"no",onClick:function(){return C(!1)}})]})}var n=g(23);function c(A){var C=A.floor,g=A.isReady;return Object(j.jsxs)("div",{className:"door-container",children:[Object(j.jsx)("div",{className:"door-inner-content",children:Object(j.jsxs)("h1",{children:["Current Floor: ",C]})}),Object(j.jsx)(n.a,{in:g,timeout:2e3,classNames:"door-left",children:Object(j.jsx)("div",{className:"door-left"})}),Object(j.jsx)(n.a,{in:g,timeout:2e3,classNames:"door-right",children:Object(j.jsx)("div",{className:"door-right"})})]})}g(18);function h(A){var C=A.floor,g=A.isReady,E=A.initialOpen;return Object(B.useEffect)((function(){setTimeout((function(){E()}),1500)}),[]),Object(j.jsx)("div",{className:"Door",children:Object(j.jsx)(c,{className:"content",floor:C,isReady:g})})}function N(A){var C=A.floor;return Object(j.jsx)("div",{className:"floor-sign",children:Object(j.jsxs)("p",{children:["Current Floor: ",C]})})}g(19);function w(A){var C=A.floorNum,g=A.changeFloor;return Object(j.jsx)("input",{type:"button",value:C,onClick:function(){return g(C)}})}function F(A){var C=A.changeFloor;console.log(C);for(var g=[],B=1;B<8;B++)g.push(Object(j.jsx)(w,{floorNum:B,changeFloor:C},B));return Object(j.jsx)("div",{className:"navigation",children:Object(j.jsx)("div",{className:"floor-buttons",children:g})})}function G(){return Object(j.jsx)("div",{className:"screen",children:"Screen"})}var k=g.p+"static/media/bgm.9012edcc.mp3",i=g.p+"static/media/open.c5db07ba.mp3",a=g.p+"static/media/close.ee46a3f0.mp3",r=g.p+"static/media/move.1833e14c.mp3",Y=g.p+"static/media/arrive.157e394b.wav";var s=function(){var A=Object(B.useState)(null),C=Object(I.a)(A,2),g=C[0],E=C[1],Q=Object(B.useState)(1),o=Object(I.a)(Q,2),n=o[0],c=o[1],w=Object(B.useState)(!1),s=Object(I.a)(w,2),R=s[0],K=s[1],S=Object(e.a)(k,{volume:.3,interrupt:!0}),J=Object(I.a)(S,1)[0],u=Object(e.a)(i,{playbackRate:1.1}),l=Object(I.a)(u,1)[0],b=Object(e.a)(a,{playbackRate:1.1}),O=Object(I.a)(b,1)[0],f=Object(e.a)(r,{playbackRate:2,volume:.3}),v=Object(I.a)(f,1)[0],d=Object(e.a)(Y),m=Object(I.a)(d,1)[0],D=function(){R&&g?l():!R&&g&&O()};return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"data:image/png;base64,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AEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBmgkAAAAAoCBAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAAAAASAjQAAAAAAAkBGgAAAACAhAANAAAAAEBCgAYAAAAAICFAAwAAAACQEKABAAAAAEgI0AAAAAAAJARoAAAA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",alt:"background",className:"background"}),null===g?Object(j.jsx)(t,{soundSettings:function(A){E(A),A&&J()}}):Object(j.jsxs)("main",{className:"main-container",children:[Object(j.jsx)(N,{floor:n}),Object(j.jsxs)("section",{className:"bottom",children:[Object(j.jsx)(G,{}),Object(j.jsx)(h,{floor:n,isReady:R,initialOpen:function(){K(!0)}}),Object(j.jsx)(F,{changeFloor:function(A){n!==A&&(g?(K(!1),D(),setTimeout((function(){return v()}),2e3),setTimeout((function(){return c(A)}),3400),setTimeout((function(){return m()}),3500),setTimeout((function(){K(!0),D()}),4500)):(K(!1),setTimeout((function(){return c(A)}),2e3),setTimeout((function(){return K(!0)}),4500)))}})]})]})]})},R=function(A){A&&A instanceof Function&&g.e(4).then(g.bind(null,25)).then((function(C){var g=C.getCLS,B=C.getFID,E=C.getFCP,Q=C.getLCP,o=C.getTTFB;g(A),B(A),E(A),Q(A),o(A)}))};o.a.render(Object(j.jsx)(E.a.StrictMode,{children:Object(j.jsx)(s,{})}),document.getElementById("root")),R()}],[[20,1,2]]]);
//# sourceMappingURL=main.ff438c88.chunk.js.map