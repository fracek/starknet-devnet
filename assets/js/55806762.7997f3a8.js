"use strict";(self.webpackChunkstarknet_devnet=self.webpackChunkstarknet_devnet||[]).push([[95],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),g=o,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:12},a="Contract debugging",c={unversionedId:"guide/contract-debugging",id:"guide/contract-debugging",title:"Contract debugging",description:"If your contract is using print in cairo hints (it was compiled with the --disable-hint-validation flag), Devnet will output those lines together with its regular server output. Read more about hints here.",source:"@site/docs/guide/contract-debugging.md",sourceDirName:"guide",slug:"/guide/contract-debugging",permalink:"/starknet-devnet/docs/guide/contract-debugging",draft:!1,editUrl:"https://github.com/Shard-Labs/starknet-devnet/page/docs/guide/contract-debugging.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Advancing time",permalink:"/starknet-devnet/docs/guide/advancing-time"},next:{title:"Predeployed accounts",permalink:"/starknet-devnet/docs/guide/Predeployed-accounts"}},l={},u=[],s={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contract-debugging"},"Contract debugging"),(0,o.kt)("p",null,"If your contract is using ",(0,o.kt)("inlineCode",{parentName:"p"},"print")," in cairo hints (it was compiled with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--disable-hint-validation")," flag), Devnet will output those lines together with its regular server output. Read more about hints ",(0,o.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/how_cairo_works/hints.html"},"here"),". "),(0,o.kt)("p",null,"To filter out just your debug lines, redirect stderr to /dev/null when starting Devnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"starknet-devnet 2> /dev/null\n")),(0,o.kt)("p",null,"To disable all the python logging you have to explicitly pass ",(0,o.kt)("inlineCode",{parentName:"p"},"PYTHONUNBUFFERED=0"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -p 127.0.0.1:5050:5050 -e PYTHONUNBUFFERED=0 shardlabs/starknet-devnet\n")))}d.isMDXComponent=!0}}]);