(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,n){},126:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),o=n.n(l),i=(n(89),n(166)),s=n(165),c=n(16),u=n(17),m=n(21),p=n(18),d=n(14),h=n(20),S=n(158),v=n(159),b=n(163),E=n(160),f=n(19),g="SET_USERNAME",y="SET_PASSWORD";n(94);var O=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleUsernameChange=n.handleUsernameChange.bind(Object(d.a)(n)),n.handlePasswordChange=n.handlePasswordChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"validateForm",value:function(){return this.props.username.length>0&&this.props.password.length>0}},{key:"handleUsernameChange",value:function(e){this.props.setUsername(e.target.value)}},{key:"handlePasswordChange",value:function(e){this.props.setPassword(e.target.value)}},{key:"handleSubmit",value:function(e){e.preventDefault(),"shaadi"===this.props.username&&"123"===this.props.password?this.props.history.push("/slides"):alert("Incorrect UserName/Password. Please try again.")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Login"},r.a.createElement("h2",null,"Please Login"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(S.a,null,r.a.createElement(v.a,null,"UserName"),r.a.createElement(b.a,{name:"username",type:"text",value:this.props.username,onChange:this.handleUsernameChange})),r.a.createElement("br",null),r.a.createElement(S.a,null,r.a.createElement(v.a,null,"Password"),r.a.createElement(b.a,{name:"password",type:"password",value:this.props.password,onChange:this.handlePasswordChange})),r.a.createElement("br",null),r.a.createElement(S.a,null,r.a.createElement(E.a,{variant:"primary",name:"submit-form",type:"submit",bsSize:"lg",disabled:!this.validateForm()},r.a.createElement("b",null,"Login")))))}}]),t}(a.Component);var w={setUsername:function(e){return{type:g,username:e}},setPassword:function(e){return{type:y,password:e}}},j=Object(f.b)(function(e){return{username:e.loginDetails.username,password:e.loginDetails.password}},w)(O),C=(n(125),n(164)),L=function(e){return function(t){function n(e){var t;return Object(c.a)(this,n),(t=Object(m.a)(this,Object(p.a)(n).call(this,e))).state={localStorageAvailable:!1},t.save=t.save.bind(Object(d.a)(t)),t.load=t.load.bind(Object(d.a)(t)),t.remove=t.remove.bind(Object(d.a)(t)),t}return Object(h.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){this.checkLocalStorageAvailable()}},{key:"checkLocalStorageAvailable",value:function(){try{localStorage.setItem("test","test"),localStorage.removeItem("test"),this.setState({localStorageAvailable:!0})}catch(e){this.setState({localStorageAvailable:!1})}}},{key:"load",value:function(e){return this.state.localStorageAvailable?localStorage.getItem(e):null}},{key:"save",value:function(e,t){this.state.localStorageAvailable&&localStorage.setItem(e,t)}},{key:"remove",value:function(e){this.state.localStorageAvailable&&localStorage.removeItem(e)}},{key:"render",value:function(){return r.a.createElement(e,Object.assign({loadFromLocal:this.load,saveToLocal:this.save,removeFromLocal:this.remove},this.props))}}]),n}(r.a.Component)};n(126);var k=L(function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getSlides",value:function(e){for(var t=["","one ","two ","three ","four ","five ","six ","seven ","eight ","nine ","ten ","eleven ","twelve ","thirteen ","fourteen ","fifteen ","sixteen ","seventeen ","Eighteen ","Nineteen","Twenty"],n=[],a=1;a<=e;a++)n.push(r.a.createElement(C.a.Item,{key:a},r.a.createElement(C.a.Caption,null,r.a.createElement("h3",null,t[a].toUpperCase()),r.a.createElement("p",null,"Label ",t[a]))));return n}},{key:"deleteLocalState",value:function(){this.props.removeFromLocal("currentSelection"),this.props.removeFromLocal("userSelections"),alert("Deleted Saved State Successfully!"),window.location.reload()}},{key:"render",value:function(){return r.a.createElement("div",{className:"carouselSection"},0!=this.props.currentSelection&&r.a.createElement("div",null,r.a.createElement(C.a,null,this.getSlides(this.props.currentSelection)),r.a.createElement("div",{className:"deleteStateBtn"},r.a.createElement("span",{onClick:this.deleteLocalState.bind(this)},this.props.children))))}}]),t}(a.Component)),U=Object(f.b)(function(e){return{currentSelection:e.slideSelectionDetails.currentSelection,initialLoad:e.slideSelectionDetails.initialLoad}})(k),T=(n(134),"UPDATE_CURRENT_SELECTION"),N="PUSH_TO_USER_SELECTIONS",D="SET_USER_SELECTIONS";var _={updateCurrentSelection:function(e){return{type:T,currentSelection:e}},pushToUserSelections:function(e){return{type:N,currentSelection:e}},setUserSelections:function(e){return{type:D,userSelections:e.split(",")}}},A=L(function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.props.updateCurrentSelection(t),0!=t&&this.props.pushToUserSelections(t),this.props.saveToLocal("currentSelection",t),this.props.saveToLocal("userSelections",this.props.userSelections)}},{key:"componentDidUpdate",value:function(){var e=this.props.loadFromLocal("currentSelection"),t=this.props.loadFromLocal("userSelections");this.props.initialLoad&&e&&this.props.updateCurrentSelection(e),this.props.initialLoad&&t&&this.props.setUserSelections(t)}},{key:"buildOptions",value:function(){for(var e=[],t=1;t<=20;t++)e.push(r.a.createElement("option",{key:t,value:t},t));return e}},{key:"render",value:function(){return r.a.createElement("div",{className:"SlideSelector"},r.a.createElement("form",null,r.a.createElement("label",{className:"selectSildesComp"},r.a.createElement("b",{className:"selectSildes"},"Select Slides:"),r.a.createElement("select",{value:this.props.currentSelection,onChange:this.handleChange.bind(this)},r.a.createElement("option",{key:0,value:0},"Select"),this.buildOptions()))))}}]),t}(r.a.Component)),P=Object(f.b)(function(e){return{userSelections:e.slideSelectionDetails.userSelections,currentSelection:e.slideSelectionDetails.currentSelection,initialLoad:e.slideSelectionDetails.initialLoad}},_)(A),I=n(82),R=n(161);n(135);var F=Object(f.b)(function(e){return{userSelections:e.slideSelectionDetails.userSelections,currentSelection:e.slideSelectionDetails.currentSelection}})(function(e){var t=Object(a.useState)(!1),n=Object(I.a)(t,2),l=n[0],o=n[1];return r.a.createElement("div",null,0!=e.currentSelection&&r.a.createElement(E.a,{variant:"primary",onClick:function(){return o(!0)},className:"finishButton",bsSize:"lg"},r.a.createElement("b",null,"Show User Selections")),r.a.createElement(R.a,{show:l,onHide:function(){return o(!1)}},r.a.createElement(R.a.Header,{closeButton:!0},r.a.createElement(R.a.Title,null,"User Selections")),r.a.createElement(R.a.Body,null,"Following are all the numbers that user selected while using the App:",r.a.createElement("br",null),e.userSelections.join(",")),r.a.createElement(R.a.Footer,null,r.a.createElement(E.a,{variant:"secondary",onClick:function(){return o(!1)}},"Close"))))}),B=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"logoutUser",value:function(){this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Slides"},r.a.createElement(E.a,{variant:"primary",className:"logoutButton",onClick:this.logoutUser.bind(this),bsSize:"lg"},r.a.createElement("b",null,"Logout")),r.a.createElement(P,null),r.a.createElement(U,null,r.a.createElement(E.a,{variant:"primary",className:"finishButton",bsSize:"lg"},r.a.createElement("b",null,"Delete State"))),r.a.createElement(F,null))}}]),t}(a.Component),x=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{path:"/",exact:!0,component:j}),r.a.createElement(s.a,{path:"/slides",component:B}))};n(155);var z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null))},H=n(26);var W=Object(H.b)({loginDetails:function(e,t){switch("undefined"===typeof e&&(e={username:"",password:""}),t.type){case"SET_USERNAME":return{username:t.username,password:e.password};case"SET_PASSWORD":return{username:e.username,password:t.password};default:return e}},slideSelectionDetails:function(e,t){switch("undefined"===typeof e&&(e={userSelections:[],currentSelection:0,initialLoad:!0}),t.type){case"UPDATE_CURRENT_SELECTION":return{userSelections:e.userSelections,currentSelection:t.currentSelection,initialLoad:!1};case"PUSH_TO_USER_SELECTIONS":return function(e,t){var n=e.userSelections;return n.push(e.currentSelection),{userSelections:n,currentSelection:e.currentSelection,initialLoad:!1}}(e);case"SET_USER_SELECTIONS":return{userSelections:t.userSelections,currentSelection:e.currentSelection,initialLoad:!1};default:return e}}}),M=n(162);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=Object(H.c)(W);o.a.render(r.a.createElement(f.a,{store:J},r.a.createElement(M.a,{basename:"/DynamicCarousel"},r.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},84:function(e,t,n){e.exports=n(156)},89:function(e,t,n){},94:function(e,t,n){}},[[84,1,2]]]);
//# sourceMappingURL=main.e43f1e3e.chunk.js.map