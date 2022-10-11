"use strict";(self.webpackChunkstarknet_devnet=self.webpackChunkstarknet_devnet||[]).push([[781],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Run",l={unversionedId:"guide/run",id:"guide/run",title:"Run",description:"Installing the package adds the starknet-devnet command.",source:"@site/docs/guide/run.md",sourceDirName:"guide",slug:"/guide/run",permalink:"/starknet-devnet/docs/guide/run",draft:!1,editUrl:"https://github.com/Shard-Labs/starknet-devnet/docs/guide/run.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/starknet-devnet/docs/intro"},next:{title:"Interaction",permalink:"/starknet-devnet/docs/guide/Interaction"}},s={},p=[{value:"Run with Docker",id:"run-with-docker",level:2},{value:"Versions and Tags",id:"versions-and-tags",level:3},{value:"Container port publishing",id:"container-port-publishing",level:3},{value:"Linux",id:"linux",level:4},{value:"Mac, Windows",id:"mac-windows",level:4}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run"},"Run"),(0,r.kt)("p",null,"Installing the package adds the ",(0,r.kt)("inlineCode",{parentName:"p"},"starknet-devnet")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"usage: starknet-devnet [-h] [-v] [--host HOST] [--port PORT]\n\nRun a local instance of Starknet Devnet\n\noptional arguments:\n  -h, --help            show this help message and exit\n  -v, --version         Print the version\n  --host HOST           Specify the address to listen at; defaults to\n                        127.0.0.1 (use the address the program outputs on\n                        start)\n  --port PORT, -p PORT  Specify the port to listen at; defaults to 5050\n  --load-path LOAD_PATH\n                        Specify the path from which the state is loaded on\n                        startup\n  --dump-path DUMP_PATH\n                        Specify the path to dump to\n  --dump-on DUMP_ON     Specify when to dump; can dump on: exit, transaction\n  --lite-mode           Introduces speed-up by skipping block hash and deploy transaction hash calculation - applies sequential numbering instead (0x0, 0x1, 0x2, ...).\n  --accounts ACCOUNTS   Specify the number of accounts to be predeployed;\n                        defaults to 10\n  --initial-balance INITIAL_BALANCE, -e INITIAL_BALANCE\n                        Specify the initial balance of accounts to be\n                        predeployed; defaults to 1e+21 (wei)\n  --seed SEED           Specify the seed for randomness of accounts to be\n                        predeployed\n  --hide-predeployed-accounts\n                        Prevents from printing the predeployed accounts details\n  --start-time START_TIME\n                        Specify the start time of the genesis block in Unix\n                        time seconds\n  --gas-price GAS_PRICE, -g GAS_PRICE\n                        Specify the gas price in wei per gas unit; defaults to\n                        1e+11\n  --timeout TIMEOUT, -t TIMEOUT\n                        Specify the timeout for devnet server; defaults to 60 seconds\n")),(0,r.kt)("p",null,"You can run ",(0,r.kt)("inlineCode",{parentName:"p"},"starknet-devnet")," in a separate shell, or you can run it in background with ",(0,r.kt)("inlineCode",{parentName:"p"},"starknet-devnet &"),".\nCheck that it's alive by running the following (address and port my vary if you specified a different one with ",(0,r.kt)("inlineCode",{parentName:"p"},"--host")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--port"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://127.0.0.1:5050/is_alive\n")),(0,r.kt)("h2",{id:"run-with-docker"},"Run with Docker"),(0,r.kt)("p",null,"Devnet is available as a Docker image ",(0,r.kt)("inlineCode",{parentName:"p"},"shardlabs/starknet-devnet")," (",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/shardlabs/starknet-devnet"},"Docker Hub link"),"). Fetch it by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull shardlabs/starknet-devnet:<TAG>\n")),(0,r.kt)("h3",{id:"versions-and-tags"},"Versions and Tags"),(0,r.kt)("p",null,"Devnet versions, as tracked on ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/starknet-devnet/#history"},"PyPI"),", are also the tags for the corresponding images:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shardlabs/starknet-devnet:<VERSION>"))),(0,r.kt)("p",null,"The latest stable version is also available as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shardlabs/starknet-devnet:latest"))),(0,r.kt)("p",null,"Commits to the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch of this repository are mostly available as images tagged with their commit hash (the full 40-hex-digits SHA1 digest):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shardlabs/starknet-devnet:<COMMIT_HASH>"))),(0,r.kt)("p",null,"The last commit is also a candidate for the next release, so it is available as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shardlabs/starknet-devnet:next"))),(0,r.kt)("p",null,"So far, all listed tags referred to images built for the linux/amd64 architecture. To use arm64-compatible images, append ",(0,r.kt)("inlineCode",{parentName:"p"},"-arm")," to the tag. E.g.:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shardlabs/starknet-devnet:<VERSION>-arm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shardlabs/starknet-devnet:latest-arm"))),(0,r.kt)("p",null,"By appending the ",(0,r.kt)("inlineCode",{parentName:"p"},"-seed0")," suffix, you can use images which ",(0,r.kt)("a",{parentName:"p",href:"#predeployed-accounts"},"predeploy funded accounts")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"--seed 0"),", thus always deploying the same set of accounts. E.g.:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shardlabs/starknet-devnet:<VERSION>-seed0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shardlabs/starknet-devnet:latest-seed0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shardlabs/starknet-devnet:next-seed0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shardlabs/starknet-devnet:<VERSION>-arm-seed0"))),(0,r.kt)("h3",{id:"container-port-publishing"},"Container port publishing"),(0,r.kt)("h4",{id:"linux"},"Linux"),(0,r.kt)("p",null,"If on a Linux host machine, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/host/"},(0,r.kt)("inlineCode",{parentName:"a"},"--network host")),". This way, the port used internally by the container is also available on your host machine. The ",(0,r.kt)("inlineCode",{parentName:"p"},"--port")," option also has effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"docker run --network host shardlabs/starknet-devnet [--port <PORT>]\n")),(0,r.kt)("h4",{id:"mac-windows"},"Mac, Windows"),(0,r.kt)("p",null,"If not on Linux, you need to publish the container's internally used port to a desired ",(0,r.kt)("inlineCode",{parentName:"p"},"<PORT>")," on your host machine. The internal port is ",(0,r.kt)("inlineCode",{parentName:"p"},"5050")," by default (can be overriden with ",(0,r.kt)("inlineCode",{parentName:"p"},"--port"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"docker run -p [HOST:]<PORT>:5050 shardlabs/starknet-devnet\n")),(0,r.kt)("p",null,"E.g. if you want to use your host machine's ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:5050"),", you need to run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"docker run -p 127.0.0.1:5050:5050 shardlabs/starknet-devnet\n")),(0,r.kt)("p",null,"You may ignore any address-related output logged on container startup (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Running on all addresses")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Running on http://172.17.0.2:5050"),"). What you will use is what you specified with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," argument."),(0,r.kt)("p",null,"If you don't specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"HOST")," part, the server will indeed be available on all of your host machine's addresses (localhost, local network IP, etc.), which may present a security issue if you don't want anyone from the local network to access your Devnet instance."))}u.isMDXComponent=!0}}]);