"use strict";(self.webpackChunktucca_cellag=self.webpackChunktucca_cellag||[]).push([[503],{3674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>u,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"tucca-rna-seq/running-the-workflow/salmon-counts","title":"Getting Salmon Pseudocounts","description":"\ud83d\udea7 Coming Soon! \ud83d\udea7","source":"@site/docs/tucca-rna-seq/running-the-workflow/salmon-counts.mdx","sourceDirName":"tucca-rna-seq/running-the-workflow","slug":"/tucca-rna-seq/running-the-workflow/salmon-counts","permalink":"/tucca-rna-seq/running-the-workflow/salmon-counts","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Getting Salmon Pseudocounts"},"sidebar":"tuccarnaseq","previous":{"title":"Running the Workflow","permalink":"/category/running-the-workflow"},"next":{"title":"Installing the Workflow for Another Project - Returning Users Only","permalink":"/tucca-rna-seq/fresh-project-install"}}');var a=n(4848),o=n(8453);n(5537),n(9329);const u={title:"Getting Salmon Pseudocounts"},s=void 0,l={},i=[];function c(e){const t={a:"a",admonition:"admonition",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(t.admonition,{type:"warning",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"\ud83d\udea7 Coming Soon! \ud83d\udea7"})}),(0,a.jsx)(t.p,{children:"Our website is currently under construction and will be launching soon.\nStay tuned!"}),(0,a.jsxs)(t.p,{children:["In the meantime, feel free to ",(0,a.jsx)(t.a,{href:"mailto:benjamin.bromberg@tufts.edu",children:"contact us"}),"\nwith any questions."]}),(0,a.jsx)(t.p,{children:"Thank you for your patience"})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>u});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var o=n(4848);function u(e){let{children:t,hidden:n,className:u}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,u),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),a=n(4164),o=n(5627),u=n(6347),s=n(372),l=n(604),i=n(1861),c=n(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=f(e),[u,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,d]=h({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=i??p;return m({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function w(e){let{className:t,block:n,selectedValue:r,selectValue:u,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==r&&(i(t),u(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:o}=e;const u=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=u.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:u.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function x(e){const t=p(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(w,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>u,x:()=>s});var r=n(6540);const a={},o=r.createContext(a);function u(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:u(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);