(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{155:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(4),r=a.n(s),u=a(157),c=a(167),l=a(185),M=a.n(l),N=function(e){var t=e.imageInfo,a={borderRadius:"5px"},i=t.alt,s=void 0===i?"":i,r=t.childImageSharp,u=t.image;return u&&u.childImageSharp?n.a.createElement(M.a,{style:a,fluid:u.childImageSharp.fluid,alt:s}):r?n.a.createElement(M.a,{style:a,fluid:r.fluid,alt:s}):u&&"string"==typeof u?n.a.createElement("img",{style:a,src:u,alt:s}):null};N.propTypes={imageInfo:r.a.shape({alt:r.a.string,childImageSharp:r.a.object,image:r.a.oneOfType([r.a.object,r.a.string]).isRequired,style:r.a.object}).isRequired};var L=N,j=function(e){var t=e.gridItems;return n.a.createElement("div",{className:"columns is-multiline"},t.map(function(e){return n.a.createElement("div",{key:e.text,className:"column is-6"},n.a.createElement("section",{className:"skill-container"},n.a.createElement("div",{className:"skill-image"},n.a.createElement("div",{className:"feature-container",style:{display:"inline-block"}},n.a.createElement(L,{imageInfo:e}))),n.a.createElement("div",{className:"skill-text"},n.a.createElement("p",null,e.text))))}))};j.propTypes={gridItems:r.a.arrayOf(r.a.shape({image:r.a.oneOfType([r.a.object,r.a.string]),text:r.a.string}))};var o=j,d=a(173),g=(a(34),a(170),a(7)),m=a.n(g),y=(a(74),a(56),a(36),a(171),a(33));var I=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.handleSubmit=function(e){e.preventDefault();var t,i=e.target;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t=Object.assign({"form-name":i.getAttribute("name")},a.state),Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"))}).then(function(){return Object(y.navigate)(i.getAttribute("action"))}).catch(function(e){return alert(e)})},a.state={isValidated:!1},a}return m()(t,e),t.prototype.render=function(){return n.a.createElement("form",{name:"contact",method:"post",action:"/contact/thanks/","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit},n.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),n.a.createElement("div",{hidden:!0},n.a.createElement("label",null,"Don’t fill this out:"," ",n.a.createElement("input",{name:"bot-field",onChange:this.handleChange}))),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label",htmlFor:"name"},"Your name"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",type:"text",name:"name",onChange:this.handleChange,id:"name",required:!0}))),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label",htmlFor:"email"},"Email"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",type:"email",name:"email",onChange:this.handleChange,id:"email",required:!0}))),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label",htmlFor:"message"},"Message"),n.a.createElement("div",{className:"control"},n.a.createElement("textarea",{className:"textarea",name:"message",onChange:this.handleChange,id:"message",required:!0}))),n.a.createElement("div",{className:"field"},n.a.createElement("button",{className:"button is-link",type:"submit"},"Send")))},t}(n.a.Component);function T(e){var t=e.title,a=e.subheading,s=e.image,r=e.about,c=e.contact,l=e.skills,M=Object(i.useState)("undefined"!=typeof window?window.innerHeight:0),N=M[0],L=M[1];return Object(i.useEffect)(function(){var e=function(){L(window.innerHeight)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),n.a.createElement("div",null,n.a.createElement("div",{className:"full-width-image margin-top-0 profile-image "+(N<500?"static-profile-image":""),style:{maxWidth:"100%",backgroundImage:"url("+(s.childImageSharp?s.childImageSharp.fluid.src:s)+")"}},n.a.createElement("div",{className:"profile-text-container",style:{display:"flex",height:"150px",lineHeight:"1",justifyContent:"space-around",alignItems:"left",flexDirection:"column"}},n.a.createElement("h1",{className:"has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-centered",style:{boxShadow:"rgb(19.6, 24.3, 16.1) 0.5rem 0px 0px, rgb(19.6, 24.3, 16.1) -0.5rem 0px 0px",backgroundColor:"rgb(19.6, 24.3, 16.1)",color:"white",lineHeight:"1",padding:"0.25em"}},t),n.a.createElement("h3",{className:"has-text-weight-bold has-text-centered is-size-5-mobile is-size-5-tablet is-size-4-widescreen",style:{boxShadow:"rgb(19.6, 24.3, 16.1) 0.5rem 0px 0px, rgb(19.6, 24.3, 16.1) -0.5rem 0px 0px",backgroundColor:"rgb(19.6, 24.3, 16.1)",color:"white",lineHeight:"1",padding:"0.25em"}},a))),n.a.createElement("section",{className:"section section--gradient"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section"},n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column is-5 is-offset-1"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"tile"},n.a.createElement("h1",{className:"title"},r.title)),n.a.createElement("div",{className:"tile"},n.a.createElement("p",null,r.description))))),n.a.createElement("div",{className:"column is-5 is-offset-1"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"tile"},n.a.createElement("h1",{className:"title"},c.title)),n.a.createElement(I,null))))),n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column is-10 is-offset-1"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"tile"},n.a.createElement("h1",{className:"title"},l.title)),n.a.createElement("div",{className:"tile"},n.a.createElement("h3",null,l.subtitle)))))),n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column is-10 is-offset-1"},n.a.createElement("div",{className:"content"},n.a.createElement(o,{gridItems:l.blurbs}),n.a.createElement("div",{className:"column is-12"},n.a.createElement("h3",{className:"has-text-weight-semibold is-size-2"},"Latest Projects"),n.a.createElement(d.a,null),n.a.createElement("div",{className:"column is-12 has-text-centered"},n.a.createElement(u.a,{className:"btn",to:"/projects"},"All Projects"))))))))))}a.d(t,"IndexPageTemplate",function(){return T}),a.d(t,"pageQuery",function(){return z}),T.propTypes={title:r.a.string,subheading:r.a.string,image:r.a.oneOfType([r.a.object,r.a.string]),about:r.a.object,skills:r.a.shape({blurbs:r.a.array})};var S=function(e){var t=e.data.markdownRemark.frontmatter;return n.a.createElement(c.a,null,n.a.createElement(T,{title:t.title,subheading:t.subheading,image:t.image,about:t.about,contact:t.contact,skills:t.skills}))};S.propTypes={data:r.a.shape({markdownRemark:r.a.shape({frontmatter:r.a.object})})};t.default=S;var z="152172687"},157:function(e,t,a){"use strict";a.d(t,"b",function(){return M});var i=a(0),n=a.n(i),s=a(4),r=a.n(s),u=a(33),c=a.n(u);a.d(t,"a",function(){return c.a});a(158);var l=n.a.createContext({}),M=function(e){return n.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};M.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},158:function(e,t,a){var i;e.exports=(i=a(160))&&i.default||i},159:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTA5IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpmaWdtYT0iaHR0cDovL3d3dy5maWdtYS5jb20vZmlnbWEvbnMiPjx0aXRsZT5Mb2dvPC90aXRsZT48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ3MCkiIGZpZ21hOnR5cGU9ImNhbnZhcyI+PGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIgZmlnbWE6dHlwZT0idmVjdG9yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDcwKSIgZmlsbD0iI2Y0MCI+PHVzZSB4bGluazpocmVmPSIjYiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIvPjx1c2UgeGxpbms6aHJlZj0iI2MiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWwiLz48dXNlIHhsaW5rOmhyZWY9IiNkIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsIi8+PHVzZSB4bGluazpocmVmPSIjZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIvPjx1c2UgeGxpbms6aHJlZj0iI2YiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWwiLz48L2c+PC9nPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMjIuNzM1IDIzLjE3MWMuMjgzLjMyMy4wNTMuODI5LS4zNzYuODI5aC01LjkwN2MtLjI4NSAwLS41NTYtLjEyMS0uNzQ1LS4zMzNsLTkuNDE0LTEwLjUyNnYxMC4zNmMwIC4yNzYtLjIyNC41LS41LjVoLTUuMjkzYy0uMjc2IDAtLjUtLjIyNC0uNS0uNXYtMjNjMC0uMjc2LjIyNC0uNS41LS41aDUuMjkzYy4yNzYgMCAuNS4yMjQuNS41djkuODE1bDkuMTQxLTkuOTljLjE5LS4yMDcuNDU3LS4zMjUuNzM4LS4zMjVoNS43NjJjLjQzNyAwIC42NjQuNTIxLjM2Ni44NDFsLTkuODUxIDEwLjU2MyAxMC4yODcgMTEuNzY3eiIvPjxwYXRoIGlkPSJjIiBkPSJNNDUuOTkxIDI0Yy0uMTk5IDAtLjM4LS4xMTgtLjQ1OS0uMzAxbC0yLjAyNC00LjY2OWgtMTAuNjdsLTIuMDI0IDQuNjY5Yy0uMDc5LjE4My0uMjU5LjMwMS0uNDU5LjMwMWgtNS4yMTJjLS4zNjYgMC0uNjA4LS4zODEtLjQ1My0uNzEybDEwLjc4Mi0yM2MuMDgyLS4xNzYuMjU5LS4yODguNDUzLS4yODhoNC4zNThjLjE5NCAwIC4zNy4xMTIuNDUzLjI4N2wxMC44MTUgMjNjLjE1Ni4zMzItLjA4Ni43MTMtLjQ1Mi43MTNoLTUuMTA4em0tMTEuMTM1LTkuNjY4aDYuNjM1bC0zLjMxNy03LjY5NC0zLjMxNyA3LjY5NHoiLz48cGF0aCBpZD0iZCIgZD0iTTU1LjUyNSAyNGMtLjI3NiAwLS41LS4yMjQtLjUtLjV2LTIzYzAtLjI3Ni4yMjQtLjUuNS0uNWg1LjI5M2MuMjc2IDAgLjUuMjI0LjUuNXYxOC40MjhoOS43NTljLjI3NiAwIC41LjIyNC41LjV2NC4wNzJjMCAuMjc2LS4yMjQuNS0uNS41aC0xNS41NTJ6Ii8+PHBhdGggaWQ9ImUiIGQ9Ik03NS4yNzkuNWMwLS4yNzYuMjI0LS41LjUtLjVoOS4zMTVjMi42NjcgMCA0Ljk1OS40NzcgNi44NzQgMS40MyAxLjkzOC45NTMgMy40MiAyLjMzOCA0LjQ0NiA0LjE1MyAxLjAyNiAxLjc5MyAxLjUzOSAzLjkyNiAxLjUzOSA2LjQgMCAyLjQ5Ni0uNTEzIDQuNjUyLTEuNTM5IDYuNDY4LTEuMDAzIDEuNzkzLTIuNDc0IDMuMTY2LTQuNDEyIDQuMTE5LTEuOTE1Ljk1My00LjIxOCAxLjQzLTYuOTA4IDEuNDNoLTkuMzE1Yy0uMjc2IDAtLjUtLjIyNC0uNS0uNXYtMjN6bTkuMzcgMTguNDYyYzIuMzcxIDAgNC4xMzgtLjU3OSA1LjMwMS0xLjczNiAxLjE2My0xLjE1NyAxLjc0NC0yLjkwNSAxLjc0NC01LjI0MiAwLTIuMzM4LS41ODEtNC4wNzQtMS43NDQtNS4yMDktMS4xNjMtMS4xNTctMi45My0xLjczNi01LjMwMS0xLjczNmgtMy4wNzh2MTMuOTIzaDMuMDc4eiIvPjxwYXRoIGlkPSJmIiBkPSJNMTAyLjkxMyAyNGMtLjI3NiAwLS41LS4yMjQtLjUtLjV2LTIzYzAtLjI3Ni4yMjQtLjUuNS0uNWg1LjI5M2MuMjc2IDAgLjUuMjI0LjUuNXYyM2MwIC4yNzYtLjIyNC41LS41LjVoLTUuMjkzeiIvPjwvZGVmcz48L3N2Zz4K"},160:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),n=a.n(i),s=a(4),r=a.n(s),u=a(55),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=l},161:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RmFjZWJvb2sgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIyLjY3NiAwSDEuMzI0Qy41OTMgMCAwIC41OTMgMCAxLjMyNHYyMS4zNTJDMCAyMy40MDguNTkzIDI0IDEuMzI0IDI0aDExLjQ5NHYtOS4yOTRIOS42ODl2LTMuNjIxaDMuMTI5VjguNDFjMC0zLjA5OSAxLjg5NC00Ljc4NSA0LjY1OS00Ljc4NSAxLjMyNSAwIDIuNDY0LjA5NyAyLjc5Ni4xNDF2My4yNGgtMS45MjFjLTEuNSAwLTEuNzkyLjcyMS0xLjc5MiAxLjc3MXYyLjMxMWgzLjU4NGwtLjQ2NSAzLjYzSDE2LjU2VjI0aDYuMTE1Yy43MzMgMCAxLjMyNS0uNTkyIDEuMzI1LTEuMzI0VjEuMzI0QzI0IC41OTMgMjMuNDA4IDAgMjIuNjc2IDAiLz48L3N2Zz4="},162:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+SW5zdGFncmFtIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0xMiAwQzguNzQgMCA4LjMzMy4wMTUgNy4wNTMuMDcyIDUuNzc1LjEzMiA0LjkwNS4zMzMgNC4xNC42M2MtLjc4OS4zMDYtMS40NTkuNzE3LTIuMTI2IDEuMzg0Uy45MzUgMy4zNS42MyA0LjE0Qy4zMzMgNC45MDUuMTMxIDUuNzc1LjA3MiA3LjA1My4wMTIgOC4zMzMgMCA4Ljc0IDAgMTJzLjAxNSAzLjY2Ny4wNzIgNC45NDdjLjA2IDEuMjc3LjI2MSAyLjE0OC41NTggMi45MTMuMzA2Ljc4OC43MTcgMS40NTkgMS4zODQgMi4xMjYuNjY3LjY2NiAxLjMzNiAxLjA3OSAyLjEyNiAxLjM4NC43NjYuMjk2IDEuNjM2LjQ5OSAyLjkxMy41NThDOC4zMzMgMjMuOTg4IDguNzQgMjQgMTIgMjRzMy42NjctLjAxNSA0Ljk0Ny0uMDcyYzEuMjc3LS4wNiAyLjE0OC0uMjYyIDIuOTEzLS41NTguNzg4LS4zMDYgMS40NTktLjcxOCAyLjEyNi0xLjM4NC42NjYtLjY2NyAxLjA3OS0xLjMzNSAxLjM4NC0yLjEyNi4yOTYtLjc2NS40OTktMS42MzYuNTU4LTIuOTEzLjA2LTEuMjguMDcyLTEuNjg3LjA3Mi00Ljk0N3MtLjAxNS0zLjY2Ny0uMDcyLTQuOTQ3Yy0uMDYtMS4yNzctLjI2Mi0yLjE0OS0uNTU4LTIuOTEzLS4zMDYtLjc4OS0uNzE4LTEuNDU5LTEuMzg0LTIuMTI2QzIxLjMxOSAxLjM0NyAyMC42NTEuOTM1IDE5Ljg2LjYzYy0uNzY1LS4yOTctMS42MzYtLjQ5OS0yLjkxMy0uNTU4QzE1LjY2Ny4wMTIgMTUuMjYgMCAxMiAwem0wIDIuMTZjMy4yMDMgMCAzLjU4NS4wMTYgNC44NS4wNzEgMS4xNy4wNTUgMS44MDUuMjQ5IDIuMjI3LjQxNS41NjIuMjE3Ljk2LjQ3NyAxLjM4Mi44OTYuNDE5LjQyLjY3OS44MTkuODk2IDEuMzgxLjE2NC40MjIuMzYgMS4wNTcuNDEzIDIuMjI3LjA1NyAxLjI2Ni4wNyAxLjY0Ni4wNyA0Ljg1cy0uMDE1IDMuNTg1LS4wNzQgNC44NWMtLjA2MSAxLjE3LS4yNTYgMS44MDUtLjQyMSAyLjIyNy0uMjI0LjU2Mi0uNDc5Ljk2LS44OTkgMS4zODItLjQxOS40MTktLjgyNC42NzktMS4zOC44OTYtLjQyLjE2NC0xLjA2NS4zNi0yLjIzNS40MTMtMS4yNzQuMDU3LTEuNjQ5LjA3LTQuODU5LjA3LTMuMjExIDAtMy41ODYtLjAxNS00Ljg1OS0uMDc0LTEuMTcxLS4wNjEtMS44MTYtLjI1Ni0yLjIzNi0uNDIxLS41NjktLjIyNC0uOTYtLjQ3OS0xLjM3OS0uODk5LS40MjEtLjQxOS0uNjktLjgyNC0uOS0xLjM4LS4xNjUtLjQyLS4zNTktMS4wNjUtLjQyLTIuMjM1LS4wNDUtMS4yNi0uMDYxLTEuNjQ5LS4wNjEtNC44NDQgMC0zLjE5Ni4wMTYtMy41ODYuMDYxLTQuODYxLjA2MS0xLjE3LjI1NS0xLjgxNC40Mi0yLjIzNC4yMS0uNTcuNDc5LS45Ni45LTEuMzgxLjQxOS0uNDE5LjgxLS42ODkgMS4zNzktLjg5OC40Mi0uMTY2IDEuMDUxLS4zNjEgMi4yMjEtLjQyMSAxLjI3NS0uMDQ1IDEuNjUtLjA2IDQuODU5LS4wNmwuMDQ1LjAzem0wIDMuNjc4Yy0zLjQwNSAwLTYuMTYyIDIuNzYtNi4xNjIgNi4xNjIgMCAzLjQwNSAyLjc2IDYuMTYyIDYuMTYyIDYuMTYyIDMuNDA1IDAgNi4xNjItMi43NiA2LjE2Mi02LjE2MiAwLTMuNDA1LTIuNzYtNi4xNjItNi4xNjItNi4xNjJ6TTEyIDE2Yy0yLjIxIDAtNC0xLjc5LTQtNHMxLjc5LTQgNC00IDQgMS43OSA0IDQtMS43OSA0LTQgNHptNy44NDYtMTAuNDA1YzAgLjc5NS0uNjQ2IDEuNDQtMS40NCAxLjQ0LS43OTUgMC0xLjQ0LS42NDYtMS40NC0xLjQ0IDAtLjc5NC42NDYtMS40MzkgMS40NC0xLjQzOS43OTMtLjAwMSAxLjQ0LjY0NSAxLjQ0IDEuNDM5eiIvPjwvc3ZnPg=="},163:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VHdpdHRlciBpY29uPC90aXRsZT48cGF0aCBkPSJNMjMuOTU0IDQuNTY5Yy0uODg1LjM4OS0xLjgzLjY1NC0yLjgyNS43NzUgMS4wMTQtLjYxMSAxLjc5NC0xLjU3NCAyLjE2My0yLjcyMy0uOTUxLjU1NS0yLjAwNS45NTktMy4xMjcgMS4xODQtLjg5Ni0uOTU5LTIuMTczLTEuNTU5LTMuNTkxLTEuNTU5LTIuNzE3IDAtNC45MiAyLjIwMy00LjkyIDQuOTE3IDAgLjM5LjA0NS43NjUuMTI3IDEuMTI0QzcuNjkxIDguMDk0IDQuMDY2IDYuMTMgMS42NCAzLjE2MWMtLjQyNy43MjItLjY2NiAxLjU2MS0uNjY2IDIuNDc1IDAgMS43MS44NyAzLjIxMyAyLjE4OCA0LjA5Ni0uODA3LS4wMjYtMS41NjYtLjI0OC0yLjIyOC0uNjE2di4wNjFjMCAyLjM4NSAxLjY5MyA0LjM3NCAzLjk0NiA0LjgyNy0uNDEzLjExMS0uODQ5LjE3MS0xLjI5Ni4xNzEtLjMxNCAwLS42MTUtLjAzLS45MTYtLjA4Ni42MzEgMS45NTMgMi40NDUgMy4zNzcgNC42MDQgMy40MTctMS42OCAxLjMxOS0zLjgwOSAyLjEwNS02LjEwMiAyLjEwNS0uMzkgMC0uNzc5LS4wMjMtMS4xNy0uMDY3IDIuMTg5IDEuMzk0IDQuNzY4IDIuMjA5IDcuNTU3IDIuMjA5IDkuMDU0IDAgMTMuOTk5LTcuNDk2IDEzLjk5OS0xMy45ODYgMC0uMjA5IDAtLjQyLS4wMTUtLjYzLjk2MS0uNjg5IDEuOC0xLjU2IDIuNDYtMi41NDhsLS4wNDctLjAyeiIvPjwvc3ZnPg=="},164:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VmltZW8gaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIzLjk3NyA2LjQxNmMtLjEwNSAyLjMzOC0xLjczOSA1LjU0My00Ljg5NCA5LjYwOS0zLjI2OCA0LjI0Ny02LjAyNiA2LjM3LTguMjkgNi4zNy0xLjQwOSAwLTIuNTc4LTEuMjk0LTMuNTUzLTMuODgxTDUuMzIyIDExLjRDNC42MDMgOC44MTYgMy44MzQgNy41MjIgMy4wMSA3LjUyMmMtLjE3OSAwLS44MDYuMzc4LTEuODgxIDEuMTMyTDAgNy4xOTdjMS4xODUtMS4wNDQgMi4zNTEtMi4wODQgMy41MDEtMy4xMjhDNS4wOCAyLjcwMSA2LjI2NiAxLjk4NCA3LjA1NSAxLjkxYzEuODY3LS4xOCAzLjAxNiAxLjEgMy40NDcgMy44MzguNDY1IDIuOTUzLjc4OSA0Ljc4OS45NzEgNS41MDcuNTM5IDIuNDUgMS4xMzEgMy42NzQgMS43NzYgMy42NzQuNTAyIDAgMS4yNTYtLjc5NiAyLjI2NS0yLjM4NSAxLjAwNC0xLjU4OSAxLjU0LTIuNzk3IDEuNjEyLTMuNjI4LjE0NC0xLjM3MS0uMzk1LTIuMDYxLTEuNjE0LTIuMDYxLS41NzQgMC0xLjE2Ny4xMjEtMS43NzcuMzkxIDEuMTg2LTMuODY4IDMuNDM0LTUuNzU3IDYuNzYyLTUuNjM3IDIuNDczLjA2IDMuNjI4IDEuNjY0IDMuNDkzIDQuNzk3bC0uMDEzLjAxeiIvPjwvc3ZnPg=="},165:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDM4LjU0OXB4IiBoZWlnaHQ9IjQzOC41NDlweCIgdmlld0JveD0iMCAwIDQzOC41NDkgNDM4LjU0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjU0OSA0MzguNTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NSAgIGMtMzkuNzgxLDAtNzYuNDcyLDkuODA0LTExMC4wNjMsMjkuNDA4Yy0zMy41OTYsMTkuNjA1LTYwLjE5Miw0Ni4yMDQtNzkuOCw3OS44QzkuODAzLDE0OC4xNjgsMCwxODQuODU0LDAsMjI0LjYzICAgYzAsNDcuNzgsMTMuOTQsOTAuNzQ1LDQxLjgyNywxMjguOTA2YzI3Ljg4NCwzOC4xNjQsNjMuOTA2LDY0LjU3MiwxMDguMDYzLDc5LjIyN2M1LjE0LDAuOTU0LDguOTQ1LDAuMjgzLDExLjQxOS0xLjk5NiAgIGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNiAgIGMtNC4xODcsMC43NjctOS40NjksMS4wOTItMTUuODQ2LDFjLTYuMzc0LTAuMDg5LTEyLjk5MS0wLjc1Ny0xOS44NDItMS45OTljLTYuODU0LTEuMjMxLTEzLjIyOS00LjA4Ni0xOS4xMy04LjU1OSAgIGMtNS44OTgtNC40NzMtMTAuMDg1LTEwLjMyOC0xMi41Ni0xNy41NTZsLTIuODU1LTYuNTdjLTEuOTAzLTQuMzc0LTQuODk5LTkuMjMzLTguOTkyLTE0LjU1OSAgIGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5NyAgIGMtMC41NzItMS4zMzUtMC4wOTgtMi40MywxLjQyNy0zLjI4OWMxLjUyNS0wLjg1OSw0LjI4MS0xLjI3Niw4LjI4LTEuMjc2bDUuNzA4LDAuODUzYzMuODA3LDAuNzYzLDguNTE2LDMuMDQyLDE0LjEzMyw2Ljg1MSAgIGM1LjYxNCwzLjgwNiwxMC4yMjksOC43NTQsMTMuODQ2LDE0Ljg0MmM0LjM4LDcuODA2LDkuNjU3LDEzLjc1NCwxNS44NDYsMTcuODQ3YzYuMTg0LDQuMDkzLDEyLjQxOSw2LjEzNiwxOC42OTksNi4xMzYgICBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxICAgYy0xMC44NDgtMS4xNC0yMC42MDEtMi44NTctMjkuMjY0LTUuMTRjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5Ni0yNi44MzUtMTEuMTRjLTkuMjM1LTUuMTM3LTE2Ljg5Ni0xMS41MTYtMjIuOTg1LTE5LjEyNiAgIGMtNi4wOS03LjYxNC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OWMtMy45MDEtMTIuMzc0LTUuODUyLTI2LjY0OC01Ljg1Mi00Mi44MjZjMC0yMy4wMzUsNy41Mi00Mi42MzcsMjIuNTU3LTU4LjgxNyAgIGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NCAgIGM1LjA0NiwzLjA0MSw5LjA4OSw1LjYxOCwxMi4xMzUsNy43MDhjMTcuNzA1LTQuOTQ3LDM1Ljk3Ni03LjQyMSw1NC44MTgtNy40MjFzMzcuMTE3LDIuNDc0LDU0LjgyMyw3LjQyMWwxMC44NDktNi44NDkgICBjNy40MTktNC41NywxNi4xOC04Ljc1OCwyNi4yNjItMTIuNTY1YzEwLjA4OC0zLjgwNSwxNy44MDItNC44NTMsMjMuMTM0LTMuMTM4YzguNTYyLDIxLjUwOSw5LjMyNSw0MC45MjIsMi4yNzksNTguMjQgICBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5ICAgYy02LjE5MSw3LjUyMS0xMy45MDEsMTMuODUtMjMuMTMxLDE4Ljk4NmMtOS4yMzIsNS4xNC0xOC4xODIsOC44NS0yNi44NCwxMS4xMzZjLTguNjYyLDIuMjg2LTE4LjQxNSw0LjAwNC0yOS4yNjMsNS4xNDYgICBjOS44OTQsOC41NjIsMTQuODQyLDIyLjA3NywxNC44NDIsNDAuNTM5djYwLjIzN2MwLDMuNDIyLDEuMTksNi4yNzksMy41NzIsOC41NjJjMi4zNzksMi4yNzksNi4xMzYsMi45NSwxMS4yNzYsMS45OTUgICBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2ICAgQzQzOC41MzYsMTg0Ljg1MSw0MjguNzI4LDE0OC4xNjgsNDA5LjEzMiwxMTQuNTczeiIvPgo8L2c+CjxkaXYgeG1sbnM9IiIgaWQ9ImRpdlNjcmlwdHNVc2VkIiBzdHlsZT0iZGlzcGxheTogbm9uZSIvPjxzY3JpcHQgeG1sbnM9IiIgaWQ9Imdsb2JhbFZhcnNEZXRlY3Rpb24iIHNyYz0iY2hyb21lLWV4dGVuc2lvbjovL2Nta2RibWZuZGtmZ2VibGRobmtiZmhsbmVlZmRhYWlwL2pzL3dyc19lbnYuanMiLz48L3N2Zz4K"},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Steve Wisner",description:"Portfolio website for Steve Wisner, creator of Property Data Generator."}}}}},167:function(e,t,a){"use strict";var i=a(0),n=a.n(i),s=a(168),r=a.n(s),u=a(157);a(159),a(161),a(162),a(163),a(164);function c(){var e=new Date;return n.a.createElement("footer",{className:"footer has-background-black has-text-white-ter",style:{paddingTop:"3em",paddingBottom:"3em"}},n.a.createElement("div",{className:"content has-text-centered has-background-black has-text-white-ter"},"© ",e.getFullYear()," Steve Wisner"))}var l=a(165),M=a.n(l),N="<SW>";function L(){var e=Object(i.useState)(!1),t=e[0],a=e[1],s=Object(i.useState)(""),r=s[0],c=s[1],l=Object(i.useState)("undefined"!=typeof window?window.innerWidth:0),L=l[0],j=l[1];Object(i.useEffect)(function(){var e=function(){j(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]);return n.a.createElement("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main-navigation"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"navbar-brand"},n.a.createElement(u.a,{to:"/",className:"navbar-item",title:"Logo"},n.a.createElement("span",{className:"nav-logo"},L>=1088?N:"Steve Wisner")),n.a.createElement("div",{className:"navbar-burger burger "+r,"data-target":"navMenu",onClick:function(){return a(!t),void c(t?"":"is-active")}},n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null))),n.a.createElement("div",{id:"navMenu",className:"navbar-menu "+r},n.a.createElement("div",{className:"navbar-start has-text-centered"},n.a.createElement(u.a,{className:"navbar-item navbar-option",to:"/"},"Home"),n.a.createElement(u.a,{className:"navbar-item navbar-option",to:"/projects"},"Projects"),n.a.createElement(u.a,{className:"navbar-item navbar-option",to:"/contact"},"Contact")),n.a.createElement("div",{className:"navbar-end has-text-centered"},n.a.createElement("a",{className:"navbar-item",href:"https://github.com/spwisner",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:"icon"},n.a.createElement("img",{src:M.a,alt:"Github"})))))))}a(169);var j=a(166),o=function(){return j.data.site.siteMetadata};t.a=function(e){var t=e.children,a=o(),i=a.title,s=a.description;return n.a.createElement("div",null,n.a.createElement(r.a,null,n.a.createElement("html",{lang:"en"}),n.a.createElement("title",null,i),n.a.createElement("meta",{name:"description",content:s}),n.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/apple-touch-icon.png"}),n.a.createElement("link",{rel:"icon",type:"image/png",href:"/img/favorite-icon.png",sizes:"32x32"}),n.a.createElement("link",{rel:"icon",type:"image/png",href:"/img/favorite-icon.png",sizes:"16x16"}),n.a.createElement("link",{rel:"mask-icon",href:"/img/safari-pinned-tab.svg",color:"#ff4400"}),n.a.createElement("meta",{name:"theme-color",content:"#fff"}),n.a.createElement("meta",{property:"og:type",content:"business.business"}),n.a.createElement("meta",{property:"og:title",content:i}),n.a.createElement("meta",{property:"og:url",content:"/"}),n.a.createElement("meta",{property:"og:image",content:"/img/og-image.jpg"})),n.a.createElement(L,null),n.a.createElement("div",null,t),n.a.createElement(c,null))}},170:function(e,t,a){var i=a(25).f,n=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in n||a(19)&&i(n,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})},171:function(e,t,a){var i=a(26),n=a(35);a(172)("keys",function(){return function(e){return n(i(e))}})},172:function(e,t,a){var i=a(11),n=a(18),s=a(20);e.exports=function(e,t){var a=(n.Object||{})[e]||Object[e],r={};r[e]=t(a),i(i.S+i.F*s(function(){a(1)}),"Object",r)}},173:function(e,t,a){"use strict";var i=a(7),n=a.n(i),s=a(174),r=a(0),u=a.n(r),c=a(4),l=a.n(c),M=a(157),N=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return u.a.createElement("div",{className:"columns is-multiline"},e&&e.map(function(e){var t=e.node;return u.a.createElement("div",{className:"is-parent column is-6",key:t.id},u.a.createElement("article",{className:"tile is-child box notification"},u.a.createElement("p",null,u.a.createElement(M.a,{className:"title has-text-primary is-size-4",to:t.fields.slug},t.frontmatter.title),u.a.createElement("span",null),u.a.createElement("span",{className:"subtitle is-size-5 is-block"},t.frontmatter.date)),u.a.createElement("p",null,t.excerpt,u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(M.a,{className:"button",to:t.fields.slug},"Learn More →"))))}))},t}(u.a.Component);N.propTypes={data:l.a.shape({allMarkdownRemark:l.a.shape({edges:l.a.array})})},t.a=function(){return u.a.createElement(M.b,{query:"3383483938",render:function(e,t){return u.a.createElement(N,{data:e,count:t})},data:s})}},174:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"Benefits The greatest strength of PDG is its speed and universal compatibility. When testing PDG, results for 500 properties were retrieve and formatted in a new spreadsheet in 14 seconds. Also, PDG was designed to be universally compatible. The application is available for download for both macOs and Windows operating systems. Also, the results spreadsheet is autogenerated as a CSV file, ensuring…",id:"e16580e9-40d0-5670-b8e4-861a54c6168d",fields:{slug:"/projects/2019-04-23-test-blog/"},frontmatter:{title:"Property Data Generator",templateKey:"blog-post",date:"December 02, 2018"}}}]}}}},185:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var n,s=i(a(7)),r=i(a(37)),u=i(a(76)),c=i(a(77)),l=i(a(0)),M=i(a(4)),N=function(e){var t=(0,c.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},L=Object.create({}),j=function(e){var t=N(e),a=t.fluid?t.fluid.src:t.fixed.src;return L[a]||!1},o=new WeakMap;var d=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(o.has(e.target)){var t=o.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),o.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),o.set(e,t)),function(){a.unobserve(e),o.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+i+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+n+t+r+s+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=l.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,n=e.src,s=e.style,r=e.onLoad,M=e.onError,N=(0,u.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return l.default.createElement("img",(0,c.default)({sizes:a,srcSet:i,src:n},N,{onLoad:r,onError:M,ref:t,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});m.propTypes={style:M.default.object,onError:M.default.func,onLoad:M.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,n=!1,s=t.fadeIn,u=j(t);!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,n=!1);var c=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,IOSupported:n,fadeIn:s,hasNoScript:c,seenBefore:u},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)((0,r.default)(a))),a.handleRef=a.handleRef.bind((0,r.default)((0,r.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:j(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=d(e,function(){var e=j(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=N(e),a=t.fluid?t.fluid.src:t.fixed.src,L[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=N(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,s=void 0===n?{}:n,r=e.imgStyle,u=void 0===r?{}:r,M=e.placeholderStyle,L=void 0===M?{}:M,j=e.placeholderClassName,o=e.fluid,d=e.fixed,y=e.backgroundColor,I=e.durationFadeIn,T=e.Tag,S=e.itemProp,z=this.state.imgLoaded||!1===this.state.fadeIn,D=!0===this.state.fadeIn&&!this.state.imgCached,E=(0,c.default)({opacity:z?1:0,transition:D?"opacity "+I+"ms":"none"},u),f="boolean"==typeof y?"lightgray":y,x={transitionDelay:I+"ms"},p=(0,c.default)({opacity:this.state.imgLoaded?0:1},D&&x,u,L),O={title:t,alt:this.state.isVisible?"":a,style:p,className:j};if(o){var w=o;return l.default.createElement(T,{className:(i||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(w.srcSet)},l.default.createElement(T,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),f&&l.default.createElement(T,{title:t,style:(0,c.default)({backgroundColor:f,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},D&&x)}),w.base64&&l.default.createElement(m,(0,c.default)({src:w.base64},O)),w.tracedSVG&&l.default.createElement(m,(0,c.default)({src:w.tracedSVG},O)),this.state.isVisible&&l.default.createElement("picture",null,w.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:w.srcSetWebp,sizes:w.sizes}),l.default.createElement(m,{alt:a,title:t,sizes:w.sizes,src:w.src,crossOrigin:this.props.crossOrigin,srcSet:w.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,c.default)({alt:a,title:t},w))}}))}if(d){var h=d,b=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:h.width,height:h.height},s);return"inherit"===s.display&&delete b.display,l.default.createElement(T,{className:(i||"")+" gatsby-image-wrapper",style:b,ref:this.handleRef,key:"fixed-"+JSON.stringify(h.srcSet)},f&&l.default.createElement(T,{title:t,style:(0,c.default)({backgroundColor:f,width:h.width,opacity:this.state.imgLoaded?0:1,height:h.height},D&&x)}),h.base64&&l.default.createElement(m,(0,c.default)({src:h.base64},O)),h.tracedSVG&&l.default.createElement(m,(0,c.default)({src:h.tracedSVG},O)),this.state.isVisible&&l.default.createElement("picture",null,h.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:h.srcSetWebp,sizes:h.sizes}),l.default.createElement(m,{alt:a,title:t,width:h.width,height:h.height,sizes:h.sizes,src:h.src,crossOrigin:this.props.crossOrigin,srcSet:h.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,c.default)({alt:a,title:t},h))}}))}return null},t}(l.default.Component);y.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var I=M.default.shape({width:M.default.number.isRequired,height:M.default.number.isRequired,src:M.default.string.isRequired,srcSet:M.default.string.isRequired,base64:M.default.string,tracedSVG:M.default.string,srcWebp:M.default.string,srcSetWebp:M.default.string}),T=M.default.shape({aspectRatio:M.default.number.isRequired,src:M.default.string.isRequired,srcSet:M.default.string.isRequired,sizes:M.default.string.isRequired,base64:M.default.string,tracedSVG:M.default.string,srcWebp:M.default.string,srcSetWebp:M.default.string});y.propTypes={resolutions:I,sizes:T,fixed:I,fluid:T,fadeIn:M.default.bool,durationFadeIn:M.default.number,title:M.default.string,alt:M.default.string,className:M.default.oneOfType([M.default.string,M.default.object]),critical:M.default.bool,crossOrigin:M.default.oneOfType([M.default.string,M.default.bool]),style:M.default.object,imgStyle:M.default.object,placeholderStyle:M.default.object,placeholderClassName:M.default.string,backgroundColor:M.default.oneOfType([M.default.string,M.default.bool]),onLoad:M.default.func,onError:M.default.func,onStartLoad:M.default.func,Tag:M.default.string,itemProp:M.default.string};var S=y;t.default=S}}]);
//# sourceMappingURL=component---src-templates-index-page-js-a5aa66ba3bd2d1006772.js.map