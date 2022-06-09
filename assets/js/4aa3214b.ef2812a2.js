"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},512:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},c="Batching",u={unversionedId:"miscellaneous/batching",id:"miscellaneous/batching",isDocsHomePage:!1,title:"Batching",description:"When using the store's update function, you can pass multiple mutation functions:",source:"@site/docs/miscellaneous/batching.mdx",sourceDirName:"miscellaneous",slug:"/miscellaneous/batching",permalink:"/elf/docs/miscellaneous/batching",editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/miscellaneous/batching.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Hooks",permalink:"/elf/docs/miscellaneous/hooks"},next:{title:"Recipes",permalink:"/elf/docs/recipes"}},l=[],p={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"batching"},"Batching"),(0,a.kt)("p",null,"When using the store's ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," function, you can pass multiple mutation functions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"store.update(\n  setProp('count', 1),\n  addEntities([todo, todo]),\n  deleteEntities(1)\n)\n")),(0,a.kt)("p",null,"In this case, subscribers will only receive ",(0,a.kt)("strong",{parentName:"p"},"one")," emission instead of three."),(0,a.kt)("p",null,"There are cases where you have multiple update functions of the ",(0,a.kt)("strong",{parentName:"p"},"same")," store that you want to batch together. To do so you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"emitOnce")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=todos.repository.ts",title:"todos.repository.ts"},"export function updateCount() {\n  store.update(\n    setProp('count', 1),\n  )\n}\n\nexport function updateUser() {\n  store.update(\n    setProp('user', null),\n  )\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { emitOnce } from '@elf/store';\nimport { updateCount, updateUser } from './todos.repository';\n\nemitOnce(() => {\n  updateCount();\n  updateUser();\n})\n")),(0,a.kt)("p",null,"In this case, subscribers will only receive ",(0,a.kt)("strong",{parentName:"p"},"one")," emission instead of two."))}m.isMDXComponent=!0}}]);