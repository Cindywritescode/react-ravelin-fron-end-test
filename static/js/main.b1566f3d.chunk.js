(this["webpackJsonpreact-ravelin-fron-end-test"]=this["webpackJsonpreact-ravelin-fron-end-test"]||[]).push([[0],{18:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var i,r,c,o,a,s,l,d,j,h,b,u,m,C,x,p,f,g,O,L,w,v,y,V,k,H,M,Z,F,E=t(3),S=t.n(E),B=t(8),z=t.n(B),A=(t(18),t(1)),T=t(2),R={small:"580px",medium:"780px",large:"1180px"},I={between:"space-between",center:"center"},D={xsmall:"0.5em",small:"1em",medium:"2em",large:"4em"},N=T.b.div(i||(i=Object(A.a)(["\n  display: flex;\n  margin: ",";\n  padding: ",";\n  flex-basis: ",";\n  flex-direction: ",";\n  flex-wrap: ",";\n  justify-content: ",";\n  align-items: ",";\n  \n  ","\n  ","\n"])),(function(n){return n.margin?D[n.margin]:"initial"}),(function(n){return n.pad?D[n.pad]:"initial"}),(function(n){return n.basis?"".concat((e=n.basis,parseFloat(100*e.split("/")[0]/e.split("/")[1]).toFixed(2)),"%"):"auto";var e}),(function(n){return n.direction||"row"}),(function(n){return(n.wrap?"wrap":n.nowrap&&"nowrap")||"initial"}),(function(n){return I[n.justify]||"auto"}),(function(n){return n.align||"initial"}),(function(n){return n.hideOnScreen&&P}),(function(n){return n.showOnScreen&&G})),P=Object(T.a)(r||(r=Object(A.a)(["\n  @media (max-width: ",") {\n    display: none;\n  }\n"])),(function(n){return R[n.hideOnScreen]})),G=Object(T.a)(c||(c=Object(A.a)(["\n  @media (min-width: ",") {\n    display: none;\n  }\n"])),(function(n){return R[n.showOnScreen]})),J=t(12),U=t(0),q=function(n){var e=n.children,t=n.timeout,i=void 0===t?3e3:t,r=Object(E.useState)(0),c=Object(J.a)(r,2),o=c[0],a=c[1],s=e[o],l=function(){return a((o+1)%e.length)};return Object(E.useEffect)((function(){var n=setTimeout(l,i);return function(){return clearTimeout(n)}}),[o]),Object(U.jsx)(N,{children:s})},Y={small:"1em",medium:"2em",large:"4em"},K=Object(T.a)(o||(o=Object(A.a)(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  grid-gap: ",";\n"])),(function(n){return n.cols||1}),(function(n){return Y[n.gap]||"inherit"})),Q=T.b.div(a||(a=Object(A.a)(["\n  ","  \n  \n  ","\n  ","\n  ","\n"])),K,(function(n){return n.largeCols&&W("large")}),(function(n){return n.mediumCols&&W("medium")}),(function(n){return n.smallCols&&W("small")})),W=function(n){return Object(T.a)(s||(s=Object(A.a)(["\n  @media (max-width: ",") {\n    grid-template-columns: repeat(",", 1fr);  \n  }\n"])),R[n],(function(e){return e["".concat(n,"Cols")]}))},X=function(){return Object(U.jsxs)($,{children:[Object(U.jsx)("p",{children:"The world's leading online business trust Ravelin to manage risk"}),Object(U.jsx)(_,{urls:["./images/clients/just-eat.svg","./images/clients/boohoo.svg","./images/clients/glovo.svg","./images/clients/booking.com.svg","./images/clients/deliveroo.svg","./images/clients/freenow.svg"]})]})},$=T.b.div(l||(l=Object(A.a)(["\n  margin: 0 0 5em 0;\n\n  & p {\n    margin-bottom: 2.5em;\n    text-align: center;\n  }\n"]))),_=function(n){var e=n.urls;return[Object(U.jsx)(N,{justify:"center",hideOnScreen:"small",children:Object(U.jsx)(Q,{gap:"medium",cols:6,largeCols:3,mediumCols:2,children:e.map((function(n){return Object(U.jsx)(nn,{url:n})}))})}),Object(U.jsx)(N,{justify:"center",showOnScreen:"small",children:Object(U.jsx)(q,{children:e.map((function(n){return Object(U.jsx)(nn,{url:n})}))})})]},nn=function(n){var e=n.url,t=n.title,i=void 0===t?"Image":t;return Object(U.jsx)("div",{children:Object(U.jsx)("img",{src:e,alt:i})})},en=t(13),tn=function(n){var e=n.children;return Object(U.jsx)(ln,{children:e})},rn=function(n){var e=n.children;return Object(U.jsx)(cn,{children:Object(U.jsx)("p",{children:e})})},cn=T.b.div(d||(d=Object(A.a)(["\n  flex: 1;\n  \n  & p {\n    font-size: 14px;\n  }\n"]))),on=T.b.div(j||(j=Object(A.a)(["\n  & a {\n    text-decoration: none;\n    color: black;\n    font-size: 14px;\n    font-weight: bold;\n  }\n"]))),an={blue:"#2749FF",cyan:"#31C9AD",red:"#EC4E6E",purple:"#7056F8"},sn=Object(T.b)((function(n){var e=n.title,t=n.className;return Object(U.jsx)("div",{className:t,children:Object(U.jsx)("h3",{children:e})})}))(h||(h=Object(A.a)(["\n  & h3 {\n    margin: 0;\n    color: ",";\n  }\n"])),(function(n){return an[n.color]||"#000"})),ln=T.b.div(b||(b=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: #FFFFFF;\n  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.11);\n  border-radius: 20px;\n  padding: 32px 24px;\n\n  \n"]))),dn=function(n){var e=n.title,t=n.url;return Object(U.jsx)("a",{href:t,children:e})},jn=function(){return Object(U.jsxs)(un,{children:[Object(U.jsx)("h2",{children:"Learn more about our solutions"}),Object(U.jsx)(mn,{children:bn.map((function(n){return Object(U.jsx)(hn,Object(en.a)({},n))}))})]})},hn=function(n){var e=n.title,t=n.color,i=n.body,r=n.link;return Object(U.jsxs)(tn,{children:[Object(U.jsx)(sn,{title:e,color:t}),Object(U.jsx)(rn,{children:i}),Object(U.jsx)(on,{children:Object(U.jsx)(dn,{title:"Learn more",url:r})})]})},bn=[{color:"blue",title:"Detect",body:"Understand the risk score for every customer from the moment they land on your website.",link:"#"},{color:"cyan",title:"Accept",body:"Manage global regulation and route every payment to the path with the best chance of acceptance.",link:"#"},{color:"red",title:"Connect",body:"Link analysis to power your investigations, makes machine learning models more effective.",link:"#"},{color:"purple",title:"Protect",body:"Use machine learning models trained on your customer data to quickly detect unusual activity and flag when an account has been hacked.",link:"#"}],un=T.b.div(u||(u=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 3rem;\n\n  & h2 {\n    text-align: center;\n    margin-bottom: 3rem;\n  }\n"]))),mn=T.b.div(m||(m=Object(A.a)(["\n  display: grid;\n  grid-gap: 26px;\n\n  @media (min-width: 580px) {\n    grid-template-columns: 1fr 1fr;\n  }\n  @media (min-width: 780px) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  @media (min-width: 1180px) {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n  }\n\n"]))),Cn=function(){return Object(U.jsxs)(xn,{width:"149",height:"42",viewBox:"0 0 149 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(U.jsx)("path",{d:"M14.0099 16.7744L16.9016 25.6383H26.3274L29.2191 16.7706L21.6152 11.3252L14.0099 16.7744ZM26.9719 17.522L24.936 23.6128H18.2943L16.2585 17.416L21.6139 13.5693L26.9693 17.416L26.9719 17.522Z",fill:"white",stroke:"white","stroke-width":"0.5"}),Object(U.jsx)("path",{d:"M39.397 13.4633L36.5053 12.5022L34.7911 11.8633V1.17316L24.6145 4.38083L21.6152 0.53418L20.5441 2.03067L18.7222 4.4869L8.54693 1.17316V11.8594L3.83339 13.3559L5.44002 15.6L6.72122 17.3099L0.512512 26.0703L10.6891 29.3827V34.2978L15.4026 32.8013L15.5103 32.9086L21.7228 41.4569L28.043 32.8026L32.7565 34.299V29.3827H32.8642L34.0429 28.9559L42.8268 26.0716L36.6117 17.416L39.397 13.4633ZM32.8629 3.84664V11.3252L31.1486 10.791L29.4344 10.1521L28.8988 10.8997L27.2896 9.83003L27.8252 8.97507L25.6856 6.09073L32.8629 3.84664ZM10.4751 3.84664L17.6499 6.1968L15.509 9.08242L15.8306 9.50926L16.0445 9.83003L14.4379 11.0057L13.9024 10.1508L10.4751 11.3265V3.84664ZM10.6891 23.7201V27.3533L8.97486 26.8192L3.61943 25.0032L8.01139 18.9125L9.1901 20.6224L10.0472 21.9003L10.3688 21.793L11.0094 21.5795L11.331 22.7553L11.5449 23.3942L10.6891 23.7201ZM21.6152 38.1444L17.2232 32.161L20.6505 31.0926V30.1316H22.5723V31.0926L24.2865 31.6268L26.0008 32.161L25.0373 33.5502L21.6152 38.1444ZM30.827 25.1093V31.7342L24.5069 29.7035V28.207H18.8337V29.7035H18.7261L17.9766 29.9169L12.5097 31.6268V25.1093L13.9024 24.6824L12.1881 19.2319L11.2246 19.5527L10.7967 19.7661L6.94031 14.4243L13.1529 12.3936L14.01 13.5693L18.6223 10.2569L17.7652 9.08115L21.6216 3.73929L25.478 9.08115L24.6209 10.2569L29.2332 13.5693L30.0904 12.3936L36.3029 14.4243L32.4465 19.7661L31.0538 19.3393L29.7726 23.292L29.3447 24.7885L29.7726 24.8958L30.827 25.1093ZM39.7173 25.0019L34.7911 26.6045L32.6489 27.3521V23.7201L31.6855 23.3994L32.007 22.331L32.221 21.5834L32.8616 21.7968L33.1832 21.9041L33.9327 20.9431L35.3253 19.0262L36.8256 21.0569L39.7173 25.0019Z",fill:"white",stroke:"white","stroke-width":"0.5"}),Object(U.jsx)("path",{d:"M60.392 22.2236H56.214V30.1303H52.6792V8.44087H61.3555C62.2705 8.43902 63.1768 8.61741 64.0224 8.96581C64.8681 9.3142 65.6365 9.82575 66.2835 10.4711C66.9304 11.1164 67.4433 11.8828 67.7926 12.7264C68.1418 13.5699 68.3207 14.4739 68.3188 15.3866C68.2884 16.7371 67.868 18.0502 67.1081 19.1684C66.3482 20.2866 65.281 21.1624 64.0345 21.6907L68.962 30.1316H64.998L60.392 22.2236ZM56.1077 19.0185H61.2492C61.7147 19.0089 62.1737 18.9067 62.5993 18.718C63.0248 18.5293 63.4084 18.2579 63.7275 17.9196C64.0466 17.5813 64.2949 17.1829 64.4578 16.7478C64.6207 16.3126 64.695 15.8494 64.6764 15.3853C64.695 14.9211 64.6207 14.458 64.4578 14.0228C64.2949 13.5877 64.0466 13.1893 63.7275 12.851C63.4084 12.5127 63.0248 12.2412 62.5993 12.0526C62.1737 11.8639 61.7147 11.7617 61.2492 11.7521H56.1064L56.1077 19.0185Z",fill:"white",stroke:"white","stroke-width":"0.2"}),Object(U.jsx)("path",{d:"M85.6727 14.6389V30.1316H82.3519V27.8875C81.7286 28.7432 80.9049 29.434 79.9528 29.8995C79.0006 30.365 77.9487 30.5912 76.8888 30.5584C75.8474 30.5318 74.8215 30.3005 73.8699 29.8777C72.9183 29.4549 72.0597 28.849 71.3432 28.0947C70.6267 27.3404 70.0665 26.4525 69.6946 25.4819C69.3227 24.5113 69.1465 23.477 69.176 22.4383C69.1465 21.3996 69.3227 20.3654 69.6946 19.3947C70.0665 18.4241 70.6267 17.5362 71.3432 16.7819C72.0597 16.0276 72.9183 15.4217 73.8699 14.9989C74.8215 14.5762 75.8474 14.3448 76.8888 14.3182C77.9404 14.2667 78.9885 14.4737 79.9411 14.921C80.8936 15.3682 81.7215 16.0419 82.3519 16.883V14.6389H85.6727ZM82.2442 22.3322C82.2442 21.0287 81.7251 19.7785 80.801 18.8568C79.8769 17.9351 78.6236 17.4172 77.3167 17.4172C76.0099 17.4172 74.7565 17.9351 73.8325 18.8568C72.9084 19.7785 72.3892 21.0287 72.3892 22.3322C72.3693 22.9831 72.4832 23.6311 72.7238 24.2363C72.9644 24.8416 73.3266 25.3914 73.7882 25.8518C74.2498 26.3122 74.801 26.6736 75.4078 26.9135C76.0146 27.1535 76.6643 27.2671 77.3167 27.2473C77.9738 27.2851 78.6314 27.1839 79.2464 26.9503C79.8614 26.7167 80.42 26.356 80.8853 25.8918C81.3507 25.4276 81.7123 24.8705 81.9465 24.257C82.1807 23.6435 82.2822 22.9876 82.2442 22.3322Z",fill:"white",stroke:"white","stroke-width":"0.2"}),Object(U.jsx)("path",{d:"M103.132 14.6389L97.0267 30.1316H93.1703L87.0641 14.6389H90.7065L95.0985 26.3961L99.3829 14.6389H103.132Z",fill:"white",stroke:"white","stroke-width":"0.2"}),Object(U.jsx)("path",{d:"M111.595 27.4607C112.362 27.483 113.122 27.3203 113.812 26.9866C114.502 26.6529 115.101 26.1579 115.558 25.5437L118.343 27.1463C117.593 28.2577 116.568 29.1566 115.367 29.7557C114.165 30.3547 112.829 30.6335 111.488 30.5648C110.385 30.6343 109.28 30.4742 108.243 30.0946C107.205 29.715 106.259 29.1242 105.463 28.3599C104.667 27.5955 104.039 26.6743 103.619 25.6549C103.2 24.6354 102.997 23.54 103.025 22.4383C103.01 21.3718 103.209 20.313 103.609 19.3239C104.009 18.3349 104.604 17.4355 105.357 16.6785C106.11 15.9215 107.008 15.3221 107.996 14.9153C108.985 14.5086 110.045 14.3028 111.114 14.31C112.183 14.3171 113.24 14.5371 114.223 14.9569C115.206 15.3768 116.096 15.9882 116.839 16.7552C117.582 17.5222 118.164 18.4295 118.551 19.4238C118.938 20.4181 119.122 21.4794 119.093 22.5457C119.093 22.9725 118.985 23.5067 118.985 23.9348H106.668C106.94 25.0079 107.584 25.9504 108.486 26.5956C109.387 27.2409 110.489 27.5473 111.595 27.4607ZM115.773 21.0504C115.646 19.9623 115.112 18.9621 114.278 18.2491C113.444 17.5362 112.371 17.163 111.274 17.2038C110.151 17.1516 109.048 17.5156 108.178 18.2258C107.307 18.9359 106.731 19.942 106.56 21.0504H115.773Z",fill:"white",stroke:"white","stroke-width":"0.2"}),Object(U.jsx)("path",{d:"M121.449 7.47986H124.77V30.1316H121.449V7.47986Z",fill:"white",stroke:"white","stroke-width":"0.2"}),Object(U.jsx)("path",{d:"M127.663 10.1508C127.663 9.72817 127.788 9.31506 128.024 8.96367C128.259 8.61228 128.594 8.33841 128.985 8.17669C129.377 8.01496 129.807 7.97265 130.223 8.0551C130.638 8.13754 131.02 8.34105 131.32 8.63988C131.619 8.9387 131.823 9.31944 131.906 9.73392C131.989 10.1484 131.946 10.578 131.784 10.9685C131.622 11.3589 131.347 11.6926 130.995 11.9274C130.643 12.1622 130.229 12.2875 129.805 12.2875C129.237 12.2858 128.694 12.0602 128.292 11.6598C127.891 11.2595 127.665 10.717 127.663 10.1508ZM128.091 14.639H131.412V30.1316H128.091V14.639Z",fill:"white",stroke:"white","stroke-width":"0.2"}),Object(U.jsx)("path",{d:"M148.872 20.6211V30.1303H145.551V20.9418C145.604 20.4612 145.549 19.9749 145.392 19.5176C145.234 19.0603 144.978 18.6433 144.64 18.2963C144.302 17.9493 143.892 17.6809 143.439 17.5101C142.985 17.3394 142.499 17.2706 142.016 17.3086C139.766 17.3086 138.053 18.5866 138.053 21.7968V30.1303H134.733V14.6377H138.053V16.5546C138.579 15.7755 139.302 15.1482 140.148 14.7357C140.994 14.3232 141.934 14.14 142.873 14.2045C146.408 14.2109 148.872 16.561 148.872 20.6211Z",fill:"white",stroke:"white","stroke-width":"0.2"})]})},xn=T.b.svg(C||(C=Object(A.a)(["\n  \n    @media (max-width: 780px) {\n        path {\n            stroke: black;\n            fill: black;\n        }\n    }\n"]))),pn=Object(T.a)(x||(x=Object(A.a)(["\n  max-width: 1180px;\n  margin: 0 auto;\n\n  @media (max-width: 1180px) {\n    padding: 0 1em;\n  };\n"]))),fn=function(){return Object(U.jsxs)(vn,{children:[Object(U.jsx)(Cn,{}),Object(U.jsxs)(gn,{children:[Object(U.jsx)(wn,{title:"Solutions",url:"/solutions"}),Object(U.jsx)(wn,{title:"Insights",url:"/insights"}),Object(U.jsx)(wn,{title:"Resources",url:"/resources"}),Object(U.jsx)(wn,{title:"Company",url:"/company"})]}),Object(U.jsx)(On,{children:Object(U.jsx)(Ln,{})})]})},gn=T.b.div(p||(p=Object(A.a)(["\n  display: flex;\n  padding-left: 2rem;\n  \n  a {\n    color: white;\n    margin-left: 0.6rem;\n    text-decoration: none;\n    \n    &:hover {\n      text-decoration: underline;\n    }\n  }\n  \n  @media (max-width: 780px) {\n    display: none;\n  }\n  \n"]))),On=T.b.div(f||(f=Object(A.a)(["\n  @media (min-width: 780px) {\n    display: none;\n  }\n"]))),Ln=function(){return Object(U.jsx)("svg",{width:"22",height:"20",viewBox:"0 0 22 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(U.jsx)("path",{d:"M0.78125 3.51562H21.0938C21.5252 3.51562 21.875 3.16587 21.875 2.73438V0.78125C21.875 0.349756 21.5252 0 21.0938 0H0.78125C0.349756 0 0 0.349756 0 0.78125V2.73438C0 3.16587 0.349756 3.51562 0.78125 3.51562ZM0.78125 11.3281H21.0938C21.5252 11.3281 21.875 10.9784 21.875 10.5469V8.59375C21.875 8.16226 21.5252 7.8125 21.0938 7.8125H0.78125C0.349756 7.8125 0 8.16226 0 8.59375V10.5469C0 10.9784 0.349756 11.3281 0.78125 11.3281ZM0.78125 19.1406H21.0938C21.5252 19.1406 21.875 18.7909 21.875 18.3594V16.4062C21.875 15.9748 21.5252 15.625 21.0938 15.625H0.78125C0.349756 15.625 0 15.9748 0 16.4062V18.3594C0 18.7909 0.349756 19.1406 0.78125 19.1406Z",fill:"black"})})},wn=function(n){var e=n.title,t=n.url;return Object(U.jsx)("a",{href:t,children:e})},vn=T.b.nav(g||(g=Object(A.a)(["\n  ",";\n  \n  font-size: 1em;\n  display: flex;\n  align-items: center;\n  padding: 1rem 0;\n  margin-top: 2rem;\n\n  @media (max-width: 780px) {\n    height: 15vh;\n    margin: 0;\n    padding: 0 1em;\n    background-color: white;\n    justify-content: space-between;\n  }\n"])),pn),yn=function(){return Object(U.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(U.jsx)("path",{d:"M11.8076 5.88965C8.70215 5.88965 6.19727 8.39453 6.19727 11.5C6.19727 14.6055 8.70215 17.1103 11.8076 17.1103C14.9131 17.1103 17.418 14.6055 17.418 11.5C17.418 8.39453 14.9131 5.88965 11.8076 5.88965ZM11.8076 15.1475C9.80078 15.1475 8.16016 13.5117 8.16016 11.5C8.16016 9.48828 9.7959 7.85254 11.8076 7.85254C13.8193 7.85254 15.4551 9.48828 15.4551 11.5C15.4551 13.5117 13.8145 15.1475 11.8076 15.1475V15.1475ZM18.9561 5.66016C18.9561 6.3877 18.3701 6.96875 17.6475 6.96875C16.9199 6.96875 16.3389 6.38281 16.3389 5.66016C16.3389 4.9375 16.9248 4.35156 17.6475 4.35156C18.3701 4.35156 18.9561 4.9375 18.9561 5.66016ZM22.6719 6.98828C22.5889 5.23535 22.1885 3.68262 20.9043 2.40332C19.625 1.12402 18.0723 0.723633 16.3193 0.635742C14.5127 0.533203 9.09766 0.533203 7.29102 0.635742C5.54297 0.71875 3.99023 1.11914 2.70605 2.39844C1.42188 3.67773 1.02637 5.23047 0.938477 6.9834C0.835938 8.79004 0.835938 14.2051 0.938477 16.0117C1.02148 17.7646 1.42188 19.3174 2.70605 20.5967C3.99023 21.876 5.53809 22.2764 7.29102 22.3643C9.09766 22.4668 14.5127 22.4668 16.3193 22.3643C18.0723 22.2812 19.625 21.8809 20.9043 20.5967C22.1836 19.3174 22.584 17.7646 22.6719 16.0117C22.7744 14.2051 22.7744 8.79492 22.6719 6.98828V6.98828ZM20.3379 17.9502C19.957 18.9072 19.2197 19.6445 18.2578 20.0303C16.8174 20.6016 13.3994 20.4697 11.8076 20.4697C10.2158 20.4697 6.79297 20.5967 5.35742 20.0303C4.40039 19.6494 3.66309 18.9121 3.27734 17.9502C2.70605 16.5098 2.83789 13.0918 2.83789 11.5C2.83789 9.9082 2.71094 6.48535 3.27734 5.0498C3.6582 4.09277 4.39551 3.35547 5.35742 2.96973C6.79785 2.39844 10.2158 2.53027 11.8076 2.53027C13.3994 2.53027 16.8223 2.40332 18.2578 2.96973C19.2148 3.35059 19.9521 4.08789 20.3379 5.0498C20.9092 6.49023 20.7773 9.9082 20.7773 11.5C20.7773 13.0918 20.9092 16.5146 20.3379 17.9502Z",fill:"#8E9097"})})},Vn=function(){return Object(U.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(U.jsx)("path",{d:"M13.261 14.0625L13.9553 9.53809H9.61401V6.60205C9.61401 5.36426 10.2205 4.15771 12.1648 4.15771H14.1384V0.305664C14.1384 0.305664 12.3474 0 10.635 0C7.05981 0 4.7229 2.16699 4.7229 6.08984V9.53809H0.748779V14.0625H4.7229V25H9.61401V14.0625H13.261Z",fill:"#8E9097"})})},kn=function(){return Object(U.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(U.jsx)("path",{d:"M22.5686 5.40803C22.5845 5.6301 22.5845 5.85222 22.5845 6.07429C22.5845 12.8477 17.4291 20.6523 8.00644 20.6523C5.10352 20.6523 2.40684 19.8115 0.138428 18.3522C0.550879 18.3998 0.947412 18.4156 1.37573 18.4156C3.771 18.4156 5.97598 17.6067 7.73677 16.2266C5.48423 16.179 3.59653 14.7037 2.94614 12.6733C3.26343 12.7208 3.58066 12.7526 3.91382 12.7526C4.37383 12.7526 4.83389 12.6891 5.26216 12.5781C2.91445 12.1022 1.15361 10.04 1.15361 7.54954V7.48611C1.83569 7.86682 2.62891 8.10476 3.46958 8.13645C2.0895 7.21638 1.18535 5.64597 1.18535 3.86931C1.18535 2.91755 1.43911 2.04509 1.8833 1.28367C4.40552 4.3928 8.19678 6.42322 12.448 6.64534C12.3687 6.26462 12.3211 5.86809 12.3211 5.47151C12.3211 2.64788 14.6054 0.347778 17.4448 0.347778C18.9201 0.347778 20.2525 0.966431 21.1885 1.9658C22.3464 1.74373 23.4568 1.31541 24.4404 0.728491C24.0596 1.91824 23.2506 2.9176 22.1878 3.55208C23.2189 3.44109 24.2183 3.15549 25.1383 2.75896C24.4405 3.77415 23.568 4.6783 22.5686 5.40803V5.40803Z",fill:"#8E9097"})})},Hn=function(){return Object(U.jsx)(Mn,{children:Object(U.jsxs)(N,{basis:"3/4",direction:"column",pad:"medium",children:[Object(U.jsx)(N,{pad:"xsmall",justify:"center",children:Object(U.jsxs)(Q,{cols:3,gap:"medium",children:[Object(U.jsx)(yn,{}),Object(U.jsx)(Vn,{}),Object(U.jsx)(kn,{})]})}),Object(U.jsx)(N,{justify:"center",children:Object(U.jsx)("p",{children:"\xa92021 RAVELIN TECHNOLOGY LTD. ALL RIGHTS RESERVED."})})]})})},Mn=T.b.footer(O||(O=Object(A.a)(["\n  background: #e4e4e4;\n  color: #8E9097;\n\n  & p {\n    font-size: 0.8em;\n    margin-bottom: 0;\n    text-align: center;\n  }\n"]))),Zn=function(n){var e=n.children;return Object(U.jsxs)(Fn,{children:[e,Object(U.jsx)(En,{}),Object(U.jsx)(Sn,{src:"./images/graph-viz.png"})]})},Fn=T.b.div(L||(L=Object(A.a)(["\n  position: relative;\n  padding-bottom: 25vh;\n  overflow-y: hidden;\n  background: linear-gradient(90deg, #4E54C8 0%, #8F94FB 100%);\n"]))),En=T.b.div(w||(w=Object(A.a)(["\n  position: absolute;\n  width: 125vw;\n  height: 50vh;\n  bottom: -50vh;\n  left: 0;\n  transform: rotate(-15deg);\n  transform-origin: top left;\n  background-color: white;\n"]))),Sn=T.b.img(v||(v=Object(A.a)(["\n  height: 75vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  mix-blend-mode: overlay;\n  opacity: 0.2;\n"]))),Bn=function(){return Object(U.jsx)(zn,{children:"View solutions"})},zn=T.b.button(y||(y=Object(A.a)(["\n  color: white;\n  font-size: 0.8em;\n  border: none;\n  line-height: 1.5em;\n  background: #1F9BF4;\n  border-radius: 5px;\n  padding: 14px 34px;\n  \n  &:hover  {\n    background: white;\n    color: #2A4AFC;\n    border: 1px solid #2A4AFC;\n  }\n"]))),An=T.b.div(V||(V=Object(A.a)(["\n  color: white;\n  margin-top: 5rem;\n\n  & p {\n    font-size: 1em;\n    line-height: 1.5em;\n    width: 548px;\n  }\n"])));T.b.header(k||(k=Object(A.a)(["\n  height: 50vh;\n"]))),T.b.div(H||(H=Object(A.a)(["\n  position: absolute;\n  width: 1900px;\n  height: 600px;\n  transform: rotate(-15deg);\n  top: -230px;\n  left: -120px;\n  z-index: -1;\n  background: linear-gradient(90deg, #4E54C8 0%, #8F94FB 100%);\n  overflow: hidden;\n\n\n  & img {\n    position: absolute;\n    top: 180px;\n    left: 114px;\n    mix-blend-mode: overlay;\n    opacity: 0.2;\n    transform: rotate(14deg);\n  }\n\n  @media (max-width: 1180px) {\n    transform: rotate(0deg);\n    top: 0;\n    left: 0;\n    height: 65vh;\n  }\n"]))),T.b.div(M||(M=Object(A.a)(["\n  position: absolute;\n  top: -12px;\n  right: -90px;\n  transform: rotate(-15deg);\n\n  @media (max-width: 1180px) {\n    display: none;\n  }\n"])));var Tn=T.b.div(Z||(Z=Object(A.a)(["\n  width: 100vw;\n  overflow-x: hidden;\n  position: relative;\n"]))),Rn=T.b.section(F||(F=Object(A.a)(["\n  ","\n"])),pn),In=function(){return Object(U.jsxs)(Tn,{children:[Object(U.jsxs)(Zn,{children:[Object(U.jsx)(fn,{}),Object(U.jsx)(Rn,{children:Object(U.jsxs)(An,{children:[Object(U.jsx)("h1",{children:"Make smarter decision"}),Object(U.jsx)("p",{children:"Ravelin provides technology and support to help you prevent evolving fraud threats and accept payments with confidence."}),Object(U.jsx)(Bn,{})]})})]}),Object(U.jsxs)(Rn,{children:[Object(U.jsx)(X,{}),Object(U.jsx)(jn,{})]}),Object(U.jsx)(Hn,{})]})},Dn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),i(n),r(n),c(n),o(n)}))};z.a.render(Object(U.jsx)(S.a.StrictMode,{children:Object(U.jsx)(In,{})}),document.getElementById("root")),Dn()}},[[24,1,2]]]);
//# sourceMappingURL=main.b1566f3d.chunk.js.map