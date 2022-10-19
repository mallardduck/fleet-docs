"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[7526],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},827:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));const l={},o="Quick Start",i={unversionedId:"quickstart",id:"version-0.4/quickstart",title:"Quick Start",description:"Who needs documentation, lets just run this thing!",source:"@site/versioned_docs/version-0.4/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/0.4/quickstart",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.4/quickstart.md",tags:[],version:"0.4",lastUpdatedAt:1666168645,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/0.4/"},next:{title:"Core Concepts",permalink:"/0.4/concepts"}},s={},c=[{value:"Install",id:"install",level:2},{value:"Add a Git Repo to watch",id:"add-a-git-repo-to-watch",level:2},{value:"Get Status",id:"get-status",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"Who needs documentation, lets just run this thing!"),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"Get helm if you don't have it.  Helm 3 is just a CLI and won't do bad insecure\nthings to your cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew install helm\n")),(0,a.kt)("p",null,"Install the Fleet Helm charts (there's two because we separate out CRDs for ultimate flexibility.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helm -n cattle-fleet-system install --create-namespace --wait \\\n    fleet-crd https://github.com/rancher/fleet/releases/download/v0.4.0/fleet-crd-v0.4.0.tgz\nhelm -n cattle-fleet-system install --create-namespace --wait \\\n    fleet https://github.com/rancher/fleet/releases/download/v0.4.0/fleet-v0.4.0.tgz\n")),(0,a.kt)("h2",{id:"add-a-git-repo-to-watch"},"Add a Git Repo to watch"),(0,a.kt)("p",null,"Change ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.repo")," to your git repo of choice.  Kubernetes manifest files that should\nbe deployed should be in ",(0,a.kt)("inlineCode",{parentName:"p"},"/manifests")," in your repo."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cat > example.yaml << "EOF"\napiVersion: fleet.cattle.io/v1alpha1\nkind: GitRepo\nmetadata:\n  name: sample\n  # This namespace is special and auto-wired to deploy to the local cluster\n  namespace: fleet-local\nspec:\n  # Everything from this repo will be ran in this cluster. You trust me right?\n  repo: "https://github.com/rancher/fleet-examples"\n  paths:\n  - simple\nEOF\n\nkubectl apply -f example.yaml\n')),(0,a.kt)("h2",{id:"get-status"},"Get Status"),(0,a.kt)("p",null,"Get status of what fleet is doing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n fleet-local get fleet\n")),(0,a.kt)("p",null,"You should see something like this get created in your cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get deploy frontend\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME       READY   UP-TO-DATE   AVAILABLE   AGE\nfrontend   3/3     3            3           116m\n")),(0,a.kt)("p",null,"Enjoy and read the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.github.io/fleet"},"docs"),"."))}p.isMDXComponent=!0}}]);