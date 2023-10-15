import{o as s,e as i,f as e,d as P,c as H,a as U,p as G,b as d,s as u,r as L,n as V,g as o,j as B,l as n,m as J,H as _,q as F,t as T,F as K,v as O,w as Q,x as W,_ as X}from"./index-0b919c28.js";import{N as Z}from"./NoteDisplay-a34d4403.js";const Y={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ee=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),te=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),oe=[ee,te];function ne(p,c){return s(),i("svg",Y,oe)}const se={name:"carbon-zoom-out",render:ne},le={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ae=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z"},null,-1),ie=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),ce=[ae,ie];function re(p,c){return s(),i("svg",le,ce)}const de={name:"carbon-zoom-in",render:re},ue={class:"h-full flex flex-col"},_e={key:0,class:"px-5 py-2 max-h-60 overflow-auto border-t border-gray-400 border-opacity-20"},pe={class:"flex-none border-t border-gray-400 border-opacity-20"},me={class:"flex gap-1 items-center px-6 py-3"},ve=e("div",{class:"flex-auto"},null,-1),he={class:"p2 text-center"},fe=P({__name:"NotesView",setup(p){const c=H.titleTemplate.replace("%s",H.title||"Slidev");U({title:`Notes - ${c}`});const{isFullscreen:m,toggle:v}=O,l=G("slidev-notes-font-size",18),a=d(()=>{var t;return((t=u.lastUpdate)==null?void 0:t.type)==="viewer"?u.viewerPage:u.page}),h=d(()=>L.find(t=>t.path===`${a.value}`)),r=d(()=>L.find(t=>t.path===`${a.value+1}`));function D(){l.value=l.value+1}function E(){l.value=l.value-1}return(t,f)=>{var x,g,b,y,z,$,w,N,C,k,S,M;const R=Q,A=W,j=de,q=se;return s(),i(K,null,[e("div",{class:"fixed top-0 left-0 h-2px bg-teal-500 transition-all duration-500",style:V({width:`${(a.value-1)/o(B)*100}%`})},null,4),e("div",ue,[e("div",{class:"px-5 flex-auto h-full overflow-auto",style:V({fontSize:`${o(l)}px`})},[n(Z,{note:(b=(g=(x=h.value)==null?void 0:x.meta)==null?void 0:g.slide)==null?void 0:b.note,"note-html":($=(z=(y=h.value)==null?void 0:y.meta)==null?void 0:z.slide)==null?void 0:$.noteHTML,placeholder:`No notes for Slide ${a.value}.`},null,8,["note","note-html","placeholder"])],4),r.value?(s(),i("div",_e,[n(Z,{class:"opacity-50",note:(C=(N=(w=r.value)==null?void 0:w.meta)==null?void 0:N.slide)==null?void 0:C.note,"note-html":(M=(S=(k=r.value)==null?void 0:k.meta)==null?void 0:S.slide)==null?void 0:M.noteHTML,placeholder:"No notes for next slide."},null,8,["note","note-html"])])):J("v-if",!0),e("div",pe,[e("div",me,[e("button",{class:"slidev-icon-btn",onClick:f[0]||(f[0]=(...I)=>o(v)&&o(v)(...I))},[n(_,{text:o(m)?"Close fullscreen":"Enter fullscreen"},null,8,["text"]),o(m)?(s(),F(R,{key:0})):(s(),F(A,{key:1}))]),e("button",{class:"slidev-icon-btn",onClick:D},[n(_,{text:"Increase font size"}),n(j)]),e("button",{class:"slidev-icon-btn",onClick:E},[n(_,{text:"Decrease font size"}),n(q)]),ve,e("div",he,T(a.value)+" / "+T(o(B)),1)])])])],64)}}}),be=X(fe,[["__file","E:/slides/node_modules/@slidev/client/internals/NotesView.vue"]]);export{be as default};
