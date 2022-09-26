"use strict";(self.webpackChunkstarknet_devnet=self.webpackChunkstarknet_devnet||[]).push([[455],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),k=o,b=d["".concat(c,".").concat(k)]||d[k]||u[k]||a;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3466:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:7},l="Block explorer",i={unversionedId:"guide/block-explorer",id:"guide/block-explorer",title:"Block explorer",description:"A local block explorer (Voyager), as noted here, apparently cannot be set up to work with Devnet. Read more in this issue.",source:"@site/docs/guide/block-explorer.md",sourceDirName:"guide",slug:"/guide/block-explorer",permalink:"/starknet-devnet/docs/guide/block-explorer",draft:!1,editUrl:"https://github.com/Shard-Labs/starknet-devnet/docs/guide/block-explorer.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Postman integration",permalink:"/starknet-devnet/docs/guide/postman"},next:{title:"Blocks",permalink:"/starknet-devnet/docs/guide/blocks"}},c={},s=[{value:"Blocks",id:"blocks",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"block-explorer"},"Block explorer"),(0,o.kt)("p",null,"A local block explorer (Voyager), as noted ",(0,o.kt)("a",{parentName:"p",href:"https://voyager.online/local-version/"},(0,o.kt)("strong",{parentName:"a"},"here")),", apparently cannot be set up to work with Devnet. Read more in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Shard-Labs/starknet-devnet/issues/60"},(0,o.kt)("strong",{parentName:"a"},"this issue")),"."),(0,o.kt)("h2",{id:"blocks"},"Blocks"),(0,o.kt)("p",null,"Devnet starts with a genesis block (with block number equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," and block hash equal to ",(0,o.kt)("inlineCode",{parentName:"p"},'"0x0"'),")."),(0,o.kt)("p",null,"A new block is generated with each new transaction. There is no pending block."),(0,o.kt)("p",null,"To create an empty block without transactions, ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," a request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/create_block"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST /create_block\n")),(0,o.kt)("p",null,"Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "transactions": [],\n    "parent_block_hash": "0x0",\n    "timestamp": 1659457385,\n    "state_root": "004bee3ee...",\n    "gas_price": "0x174876e800",\n    "sequencer_address": "0x4bbfb0d1aa...",\n    "transaction_receipts": [],\n    "starknet_version": "0.9.1",\n    "block_hash": "0x1",\n    "block_number": 1,\n    "status": "ACCEPTED_ON_L2"\n}\n')))}u.isMDXComponent=!0}}]);