(this["webpackJsonpbelajar-react"]=this["webpackJsonpbelajar-react"]||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=n(9),i=n(1),u=n(2),s=n(4),h=n(3),m=n(5),b=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Job"),r.a.createElement("th",null,"Remove")))},f=function(e){var t=e.characterData.map((function(t,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.job),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removeCharacter(n)}},"Delete")))}));return r.a.createElement("tbody",null,t)},d=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.characterData,n=e.removeCharacter;return r.a.createElement("table",null,r.a.createElement(b,null),r.a.createElement(f,{characterData:t,removeCharacter:n}))}}]),t}(a.Component),v=n(8),p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(v.a)({},a,r))},n.submitForm=function(){n.props.handleSubmit(n.state),n.setState(n.initialState)},n.initialState={name:"",job:""},n.state=n.initialState,n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.job;return r.a.createElement("form",null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Job"),r.a.createElement("input",{type:"text",name:"job",value:n,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"button",value:"Submit",onClick:this.submitForm}))}}]),t}(a.Component),g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={characters:[]},n.removeCharacter=function(e){var t=n.state.characters;n.setState({characters:t.filter((function(t,n){return n!==e}))})},n.handleSubmit=function(e){n.setState({characters:[].concat(Object(l.a)(n.state.characters),[e])})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.characters;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Hello React !"),r.a.createElement(p,{handleSubmit:this.handleSubmit}),r.a.createElement(d,{characterData:e,removeCharacter:this.removeCharacter}))}}]),t}(a.Component),E=(n(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/belajar-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/belajar-react","/service-worker.js");E?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.d2731c9f.chunk.js.map