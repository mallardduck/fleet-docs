"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[2323],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},s=Object.keys(e);for(l=0;l<s.length;l++)n=s[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)n=s[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),c=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||s;return n?l.createElement(m,a(a({ref:t},u),{},{components:n})):l.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var c=2;c<s;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7234:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c}});var l=n(3117),r=(n(7294),n(3905));const s={},a="Single Cluster Install",o={unversionedId:"single-cluster-install",id:"single-cluster-install",title:"Single Cluster Install",description:"In this use case you have only one cluster.  The cluster will run both the Fleet",source:"@site/docs/single-cluster-install.md",sourceDirName:".",slug:"/single-cluster-install",permalink:"/next/single-cluster-install",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/single-cluster-install.md",tags:[],version:"current",lastUpdatedAt:1666168645,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Installation",permalink:"/next/installation"},next:{title:"Multi-cluster Install",permalink:"/next/multi-cluster-install"}},i={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Helm 3",id:"helm-3",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Install",id:"install",level:2}],u={toc:c};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"single-cluster-install"},"Single Cluster Install"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1313).Z,width:"520",height:"279"})),(0,r.kt)("p",null,"In this use case you have only one cluster.  The cluster will run both the Fleet\nmanager and the Fleet agent. The cluster will communicate with Git server to\ndeploy resources to this local cluster. This is the simplest setup and very\nuseful for dev/test and small scale setups.  This use case is supported as a valid\nuse case for production."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"helm-3"},"Helm 3"),(0,r.kt)("p",null,"Fleet is distributed as a Helm chart. Helm 3 is a CLI, has no server side component, and is\nfairly straight forward. To install the Helm 3 CLI follow the\n",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"official install instructions"),". The TL;DR is"),(0,r.kt)("p",null,"macOS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install helm\n")),(0,r.kt)("p",null,"Windows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"choco install kubernetes-helm\n")),(0,r.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,r.kt)("p",null,"Fleet is a controller running on a Kubernetes cluster so an existing cluster is required. For the\nsingle cluster use case you will install Fleet to the cluster which you intend to manage with GitOps.\nAny Kubernetes community supported version of Kubernetes will work, in practice this means 1.15 or greater."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"Install the following two Helm charts."),(0,r.kt)("p",null,"First install the Fleet CustomResourcesDefintions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm -n cattle-fleet-system install --create-namespace --wait \\\n    fleet-crd https://github.com/rancher/fleet/releases/download/v0.5.0-rc2/fleet-crd-0.5.0-rc2.tgz\n")),(0,r.kt)("p",null,"Second install the Fleet controllers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm -n cattle-fleet-system install --create-namespace --wait \\\n    fleet https://github.com/rancher/fleet/releases/download/v0.5.0-rc2/fleet-0.5.0-rc2.tgz\n")),(0,r.kt)("p",null,"Fleet should be ready to use now for single cluster. You can check the status of the Fleet controller pods by\nrunning the below commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n cattle-fleet-system logs -l app=fleet-controller\nkubectl -n cattle-fleet-system get pods -l app=fleet-controller\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                                READY   STATUS    RESTARTS   AGE\nfleet-controller-64f49d756b-n57wq   1/1     Running   0          3m21s\n")),(0,r.kt)("p",null,"You can now ",(0,r.kt)("a",{parentName:"p",href:"/next/gitrepo-add"},"register some git repos")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet-local")," namespace to start deploying Kubernetes resources."))}p.isMDXComponent=!0},1313:function(e,t,n){t.Z=n.p+"assets/images/single-cluster-72ee1a61547953f123dd741c02cd2017.png"}}]);