"use strict";(self.webpackChunkstarknet_devnet=self.webpackChunkstarknet_devnet||[]).push([[398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),b=o,k=d["".concat(l,".").concat(b)]||d[b]||u[b]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:8},i="Blocks",c={unversionedId:"guide/blocks",id:"guide/blocks",title:"Blocks",description:'Devnet starts with a genesis block (with block number equal to 0 and block hash equal to "0x0").',source:"@site/docs/guide/blocks.md",sourceDirName:"guide",slug:"/guide/blocks",permalink:"/starknet-devnet/docs/guide/blocks",draft:!1,editUrl:"https://github.com/Shard-Labs/starknet-devnet/docs/guide/blocks.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Block explorer",permalink:"/starknet-devnet/docs/guide/block-explorer"},next:{title:"Lite mode",permalink:"/starknet-devnet/docs/guide/lite-mode"}},l={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"blocks"},"Blocks"),(0,o.kt)("p",null,"Devnet starts with a genesis block (with block number equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," and block hash equal to ",(0,o.kt)("inlineCode",{parentName:"p"},'"0x0"'),")."),(0,o.kt)("p",null,"A new block is generated with each new transaction. There is no pending block."),(0,o.kt)("p",null,"To create an empty block without transactions, ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," a request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/create_block"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST /create_block\n")),(0,o.kt)("p",null,"Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "transactions": [],\n    "parent_block_hash": "0x0",\n    "timestamp": 1659457385,\n    "state_root": "004bee3ee...",\n    "gas_price": "0x174876e800",\n    "sequencer_address": "0x4bbfb0d1aa...",\n    "transaction_receipts": [],\n    "starknet_version": "0.9.1",\n    "block_hash": "0x1",\n    "block_number": 1,\n    "status": "ACCEPTED_ON_L2"\n}\n')))}u.isMDXComponent=!0}}]);