webpackJsonp([1],{"8j4o":function(t,e,n){"use strict";var r=n("wxAW"),i=n.n(r),s=n("yEsh"),o=n.n(s),a=n("Zx67"),u=n.n(a),l=n("Zrlr"),c=n.n(l),h=n("zwoO"),p=n.n(h),d=n("Pf15"),f=n.n(d),v=n("ekX3");function _(t){return t%2==0?"*":"+"}var k=function(t){function e(t,n){return c()(this,e),p()(this,(e.__proto__||u()(e)).call(this,"Protocol B",new y(t,n),new m(n)))}return f()(e,t),e}(v.a),y=function(t){function e(t,n){c()(this,e);var r=p()(this,(e.__proto__||u()(e)).call(this,"Begin",["Begin","Read","Send","UpI","End"],t,n));return r.helpBegin="while true do",r.helpRead="\tRead(Xi)",r.helpSend="\tSend (Xi, colour) until KsKr (Xi, colour)",r.helpUpI="\ti := i + 1",r.helpEnd="done",r.setupDescriptions(),r.letter=void 0,r.index=0,r.colour=_(r.index),r}return f()(e,t),i()(e,[{key:"reset",value:function(){o()(e.prototype.__proto__||u()(e.prototype),"reset",this).call(this),this.letter=void 0,this.index=0,this.colour=_(this.index)}},{key:"stateBegin",value:function(){return"Read"}},{key:"stateRead",value:function(){return this.letter=this.tape.pop(),this.tapeCallback(this.letter),"Send"}},{key:"stateSend",value:function(){this.emit(this.letter,this.colour)}},{key:"stateUpI",value:function(){return this.index+=1,this.colour=_(this.index),"Read"}},{key:"stateEnd",value:function(){}},{key:"handleMessage",value:function(t){if("Send"===this.state&&t.msg==="Kr "+this.letter&&t.colour===this.colour)return"UpI"}}]),e}(v.c),m=function(t){function e(t){c()(this,e);var n=p()(this,(e.__proto__||u()(e)).call(this,"Skip",["Skip","Begin","Write","Send","UpI","End"],t));return n.helpSkip="Skip until Kr (Xi)",n.helpBegin="while true do",n.helpWrite="\tWrite (Xi)",n.helpSend="\tSend Kr (Xi, colour) until Kr (Xi + 1, colour)",n.helpUpI="\ti := i + 1",n.helpEnd="done",n.setupDescriptions(),n.index=0,n.colour=_(n.index),n.letter="",n}return f()(e,t),i()(e,[{key:"reset",value:function(){o()(e.prototype.__proto__||u()(e.prototype),"reset",this).call(this),this.letter="",this.index=0,this.colour=_(this.index)}},{key:"stateBegin",value:function(){return"Skip"}},{key:"stateSkip",value:function(){}},{key:"stateWrite",value:function(){return this.tapeCallback(this.letter),"Send"}},{key:"stateSend",value:function(){this.emit("Kr "+this.letter,this.colour)}},{key:"stateUpI",value:function(){return this.index+=1,this.colour=_(this.index),"Write"}},{key:"stateEnd",value:function(){}},{key:"handleMessage",value:function(t){return"Skip"===this.state&&this.colour===t.colour?(this.letter=t.msg,"Write"):"Send"===this.state&&this.colour!==t.colour?(this.letter=t.msg,this.colour=t.colour,"UpI"):void 0}}]),e}(v.b);e.a=k},"9Ve9":function(t,e){},"9gAG":function(t,e){},COBn:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("8j4o"),i=n("iXj2"),s=n("N5E8"),o={name:"ProtB",components:{GUI:i.a,VLink:s.a},data:function(){return{protBBuilder:function(t,e){return new r.a(t,e)}}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("GUI",{attrs:{protocolBuilder:t.protBBuilder,secondPath:!0}},[n("v-link",{attrs:{href:"/protBd"}},[t._v("Default")]),t._v(" "),n("v-link",{attrs:{href:"/protBsp"}},[t._v("With Second Path")]),t._v(" "),n("v-link",{attrs:{href:"/protBn4"}},[t._v("Without Step 4")]),t._v(" "),n("v-link",{attrs:{href:"/protBnc"}},[t._v("Without Colours")])],1)],1)},staticRenderFns:[]},u=n("VU/8")(o,a,!1,null,null,null);e.default=u.exports},Cgsp:function(t,e){},EFMJ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("8j4o"),i=n("iXj2"),s=n("N5E8"),o={name:"ProtB",components:{GUI:i.a,VLink:s.a},data:function(){return{protBBuilder:function(t,e){return new r.a(t,e)}}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("GUI",{attrs:{protocolBuilder:t.protBBuilder}},[n("v-link",{attrs:{href:"/protBd"}},[t._v("Default")]),t._v(" "),n("v-link",{attrs:{href:"/protBsp"}},[t._v("With Second Path")]),t._v(" "),n("v-link",{attrs:{href:"/protBn4"}},[t._v("Without Step 4")]),t._v(" "),n("v-link",{attrs:{href:"/protBnc"}},[t._v("Without Colours")])],1)],1)},staticRenderFns:[]},u=n("VU/8")(o,a,!1,null,null,null);e.default=u.exports},N5E8:function(t,e,n){"use strict";var r=n("eqvY"),i={props:{href:{type:String,required:!0}},computed:{isActive:function(){return this.$root.appRoute.startsWith(this.href)}},methods:{go:function(t){t.preventDefault(),this.$root.currentRoute=this.$root.prefix+this.href,window.history.pushState(null,r.a[this.$root.prefix+this.href],this.$root.prefix+this.href)}}},s={render:function(){var t=this.$createElement;return(this._self._c||t)("a",{staticClass:"button",class:{active:this.isActive},attrs:{href:"."+this.href},on:{click:this.go}},[this._t("default")],2)},staticRenderFns:[]};var o=n("VU/8")(i,s,!1,function(t){n("9Ve9")},"data-v-cb89dc7c",null);e.a=o.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),i=n("eqvY");r.a.config.productionTip=!1;var s=new r.a({el:"#app",data:{currentRoute:window.location.pathname,prefix:"/lokwebjs"},computed:{appRoute:function(){return this.currentRoute.replace(this.prefix,"")},ViewComponent:function(){var t=i.a[this.appRoute];return t?n("vRtF")("./"+t+".vue").default:n("eerB").default}},render:function(t){return t(this.ViewComponent)}});window.addEventListener("popstate",function(){s.currentRoute=window.location.pathname})},Onl7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Zx67"),i=n.n(r),s=n("xyMA"),o=n("iXj2"),a=n("N5E8"),u={name:"ProtA",components:{GUI:o.a,VLink:a.a},data:function(){return{protABuilder:function(t,e){var n=new s.a(t,e),r=i()(n.sender),o=i()(n.receiver),a=n.sender,u=n.receiver;return a.states.splice(3,1),a.handleMessage=function(t){var e=r.handleMessage.call(this,t);return"SendK"===e&&(e="UpI"),e},u.descriptions.Send=u.descriptions.Send.replace("KrKsKr (Xi)","Kr (Xi + 1)"),u.states.splice(4,1),u.handleMessage=function(t){var e=o.handleMessage.call(this,t);return"Send"===this.state&&(this.letter=t.msg,e="UpI"),e},n}}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("GUI",{attrs:{protocolBuilder:this.protABuilder}},[e("v-link",{attrs:{href:"/protAd"}},[this._v("Default")]),this._v(" "),e("v-link",{attrs:{href:"/protAnc"}},[this._v("Without step 3 and 4 on S")]),this._v(" "),e("v-link",{attrs:{href:"/protAnrc"}},[this._v("Without 4 on S")])],1)],1)},staticRenderFns:[]},c=n("VU/8")(u,l,!1,null,null,null);e.default=c.exports},QInh:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("wxAW"),i=n.n(r),s=n("yEsh"),o=n.n(s),a=n("Zx67"),u=n.n(a),l=n("Zrlr"),c=n.n(l),h=n("zwoO"),p=n.n(h),d=n("Pf15"),f=n.n(d),v=n("ekX3"),_=function(t){function e(t,n){return c()(this,e),p()(this,(e.__proto__||u()(e)).call(this,"Protocol TCP",new k(t,n),new y(n)))}return f()(e,t),e}(v.a),k=function(t){function e(t,n){c()(this,e);var r=p()(this,(e.__proto__||u()(e)).call(this,"Setup",["Setup","Setup2","Begin","SetI","Inner","Read","Send","UpI","Max","If","IfOffset","IfI","Fi","InnerDone","Wait","End"],t,n));return r.helpSetup="windowsize := 4",r.helpSetup2="offset := 0",r.helpBegin="while true do",r.helpSetI="\ti := offset",r.helpInner="\twhile (i != offset + windowsize) do",r.helpRead="\t\tRead (Xi)",r.helpSend="\t\tSend (Xi, i)",r.helpUpI="\t\ti := i + 1",r.helpMax="\t\tmax := BestReceived()",r.helpIf="\t\tif (offset <= max) then",r.helpIfOffset="\t\t\toffset := max + 1",r.helpIfI="\t\t\ti := offset",r.helpFi="\t\tend",r.helpInnerDone="\tdone",r.helpWait="\tWait",r.helpEnd="done",r.setupDescriptions(),r.letter=void 0,r.index=0,r.windowsize=4,r.offset=0,r.window=[],r.popped=0,r.max=-1,r}return f()(e,t),i()(e,[{key:"reset",value:function(){o()(e.prototype.__proto__||u()(e.prototype),"reset",this).call(this),this.offset=0,this.index=0,this.window=[],this.popped=0,this.max=-1}},{key:"stateSetup",value:function(){return"Setup2"}},{key:"stateSetup2",value:function(){return"Begin"}},{key:"stateBegin",value:function(){return"SetI"}},{key:"stateSetI",value:function(){return this.index=this.offset,"Inner"}},{key:"stateInner",value:function(){return this.index!==this.offset+this.windowsize?"Read":"Wait"}},{key:"stateRead",value:function(){if(this.popped<=this.index){var t=this.tape.pop();this.window.push(t),this.popped+=1,this.tapeCallback(t)}return this.letter=this.window[this.index-this.offset],"Send"}},{key:"stateSend",value:function(){return this.emit(this.letter,this.index),"UpI"}},{key:"stateUpI",value:function(){return this.index+=1,"Max"}},{key:"stateMax",value:function(){return"If"}},{key:"stateIf",value:function(){return this.offset<=this.max?"IfOffset":"Fi"}},{key:"stateIfOffset",value:function(){var t=this.max+1-this.offset;return this.window.splice(0,t),this.offset=this.max+1,"IfI"}},{key:"stateIfI",value:function(){return this.index=this.offset,"Fi"}},{key:"stateFi",value:function(){return"Inner"}},{key:"stateInnerDone",value:function(){return"Wait"}},{key:"stateWait",value:function(){return"Begin"}},{key:"stateEnd",value:function(){}},{key:"handleMessage",value:function(t){"@"===t.msg&&this.max<t.colour&&(this.max=t.colour)}}]),e}(v.c),y=function(t){function e(t){c()(this,e);var n=p()(this,(e.__proto__||u()(e)).call(this,"Skip",["Skip","FirstAck","Begin","Write","Inner","Wait","Send","InnerDone","UpI","End"],t));return n.helpSkip="Skip until (X0)",n.helpFirstAck="i := 0",n.helpBegin="while true do",n.helpWrite="\tWrite (Xi)",n.helpInner="\twhile !(received(Xi + 1)) do",n.helpWait="\t\tWait",n.helpSend="\t\tSend (Ack, i)",n.helpInnerDone="\tdone",n.helpUpI="\ti := i + 1",n.helpEnd="done",n.setupDescriptions(),n.index=0,n.letter="",n.messages={},n}return f()(e,t),i()(e,[{key:"reset",value:function(){o()(e.prototype.__proto__||u()(e.prototype),"reset",this).call(this),this.index=0,this.letter="",this.messages={}}},{key:"stateSkip",value:function(){if(this.messages[0])return"FirstAck"}},{key:"stateFirstAck",value:function(){return this.index=0,"Begin"}},{key:"stateBegin",value:function(){return"Write"}},{key:"stateWrite",value:function(){return this.tapeCallback(this.messages[this.index]),"Inner"}},{key:"stateInner",value:function(){return this.messages[this.index+1]?"UpI":"Wait"}},{key:"stateWait",value:function(){return"Send"}},{key:"stateSend",value:function(){return this.emit("@",this.index),"Inner"}},{key:"stateInnerDone",value:function(){return"UpI"}},{key:"stateUpI",value:function(){return this.index+=1,"Begin"}},{key:"stateEnd",value:function(){}},{key:"handleMessage",value:function(t){this.messages[t.colour]=t.msg}}]),e}(v.b),m=_,x={name:"ProtTCP",components:{GUI:n("iXj2").a},data:function(){return{protTCPBuilder:function(t,e){return new m(t,e)}}}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("GUI",{attrs:{protocolBuilder:this.protTCPBuilder,secondPath:!0}})],1)},staticRenderFns:[]},g=n("VU/8")(x,S,!1,null,null,null);e.default=g.exports},R1n0:function(t,e){},SR4U:function(t,e){},SY74:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("xyMA"),i=n("iXj2"),s=n("N5E8"),o={name:"ProtA",components:{GUI:i.a,VLink:s.a},data:function(){return{protABuilder:function(t,e){return new r.a(t,e)}}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("GUI",{attrs:{protocolBuilder:this.protABuilder}},[e("v-link",{attrs:{href:"/protAd"}},[this._v("Default")]),this._v(" "),e("v-link",{attrs:{href:"/protAnc"}},[this._v("Without step 3 and 4 on S")]),this._v(" "),e("v-link",{attrs:{href:"/protAnrc"}},[this._v("Without 4 on S")])],1)],1)},staticRenderFns:[]},u=n("VU/8")(o,a,!1,null,null,null);e.default=u.exports},VU4X:function(t,e){},X8OM:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Zx67"),i=n.n(r),s=n("8j4o"),o=n("iXj2"),a=n("N5E8"),u=/, colour/g;function l(t){for(var e in t.descriptions)t.descriptions[e]=t.descriptions[e].replace(u,"")}var c={name:"ProtB",components:{GUI:o.a,VLink:a.a},data:function(){return{protBBuilder:function(t,e){var n=new s.a(t,e),r=i()(n.sender),o=i()(n.receiver);return l(n.sender),l(n.receiver),n.sender.step=function(){this.colour=void 0,r.step.call(this),this.colour=void 0},n.sender.onMessage=function(t){this.colour=void 0,r.onMessage.call(this,t),this.colour=void 0},n.receiver.step=function(){this.colour=void 0,o.step.call(this),this.colour=void 0},n.receiver.onMessage=function(t){this.colour=void 0,"Send"===this.state&&(this.colour=""),o.onMessage.call(this,t),this.colour=void 0},n}}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("GUI",{attrs:{protocolBuilder:t.protBBuilder}},[n("v-link",{attrs:{href:"/protBd"}},[t._v("Default")]),t._v(" "),n("v-link",{attrs:{href:"/protBsp"}},[t._v("With Second Path")]),t._v(" "),n("v-link",{attrs:{href:"/protBn4"}},[t._v("Without Step 4")]),t._v(" "),n("v-link",{attrs:{href:"/protBnc"}},[t._v("Without Colours")])],1)],1)},staticRenderFns:[]},p=n("VU/8")(c,h,!1,null,null,null);e.default=p.exports},YGvE:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Zx67"),i=n.n(r),s=n("xyMA"),o=n("iXj2"),a=n("N5E8"),u={name:"ProtA",components:{GUI:o.a,VLink:a.a},data:function(){return{protABuilder:function(t,e){var n=new s.a(t,e),r=i()(n.sender),o=i()(n.receiver),a=n.sender,u=n.receiver;return a.states.splice(3,1),a.descriptions.Send="\tSend (Xi)",a.stateSend=function(){return r.stateSend.call(this),"UpI"},u.states[0]=u.states[1],u.states[1]=u.startState,u.startState=u.states[0],u.states.splice(3,2),u.descriptions.Skip="\t"+u.descriptions.Skip,u.stateWrite=function(){return o.stateWrite.call(this),"UpI"},u.stateUpI=function(){return o.stateUpI.call(this),"Skip"},n}}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("GUI",{attrs:{protocolBuilder:this.protABuilder}},[e("v-link",{attrs:{href:"/protAd"}},[this._v("Default")]),this._v(" "),e("v-link",{attrs:{href:"/protAnc"}},[this._v("Without step 3 and 4 on S")]),this._v(" "),e("v-link",{attrs:{href:"/protAnrc"}},[this._v("Without 4 on S")])],1)],1)},staticRenderFns:[]},c=n("VU/8")(u,l,!1,null,null,null);e.default=c.exports},eerB:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("o3Mh"),i=n("g2+m"),s={components:{MainLayout:r.a,NavBar:i.a}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("MainLayout",[e("p",[this._v('For the course Multi Agent Systems the RuG has developed a webapp to see\n  applications of Epistemic Logic in the area of communication protocols. The\n  webapp visualises the execution of three protocols, the two protocols from\n  the book "Epistemic Logic for AI and Computer Science" from W. van der Hoek\n  and J.J.Ch. Meyer, and the Transmission Control Protocol (TCP). All these\n  protocols can be reached by using the buttons in the navigation bar at the\n  top. The visualizations for the protocols from the book also allow you to\n  experiment with the rules in the protocols. This makes it possible to see\n  why all the rules are necessary.')])])},staticRenderFns:[]};var a=n("VU/8")(s,o,!1,function(t){n("k8MC")},"data-v-31a8c252",null);e.default=a.exports},ekX3:function(t,e,n){"use strict";var r=n("Zx67"),i=n.n(r),s=n("wxAW"),o=n.n(s),a=n("zwoO"),u=n.n(a),l=n("yEsh"),c=n.n(l),h=n("Pf15"),p=n.n(h),d=n("Zrlr"),f=n.n(d),v=n("BO1k"),_=n.n(v);function k(t,e){this.name="StateNotFoundError",this.message="The state '"+t+"' is not found on the state machine '",this.message+=e+"'",this.stack=(new Error).stack}function y(t,e){this.name="StateNotFunctionError",this.message="The state '"+t,this.message+="' is not a function on the state machine '"+e+"'",this.stack=(new Error).stack}k.prototype=new Error,y.prototype=new Error;var m=function(){function t(e,n){f()(this,t),this.startState=e,this.state=e,this.states=n,this._stateSet={},this.descriptions={},this.tape="",this.tapeCallback=function(){};var r=!0,i=!1,s=void 0;try{for(var o,a=_()(this.states);!(r=(o=a.next()).done);r=!0){var u=o.value;if(this._stateSet[u]=!0,"function"!=typeof this["state"+u])throw new y(u,this)}}catch(t){i=!0,s=t}finally{try{!r&&a.return&&a.return()}finally{if(i)throw s}}if(!this.isStep(e))throw new k(e,this)}return o()(t,[{key:"reset",value:function(){this.state=this.startState,this.tape=""}},{key:"setupDescriptions",value:function(){var t=!0,e=!1,n=void 0;try{for(var r,i=_()(this.states);!(t=(r=i.next()).done);t=!0){var s=r.value;void 0!==this["help"+s]?this.descriptions[s]=this["help"+s]:this.descriptions[s]=s}}catch(t){e=!0,n=t}finally{try{!t&&i.return&&i.return()}finally{if(e)throw n}}}},{key:"isStep",value:function(t){return!!this._stateSet[t]}},{key:"updateStep",value:function(t){void 0!==t&&this.state!==t&&(this.state=t)}},{key:"step",value:function(){try{var t=this["state"+this.state].apply(this,arguments);this.updateStep(t)}catch(t){if(t instanceof TypeError&&!this.isStep(this.state))throw new k(this.state,this)}}},{key:"onMessage",value:function(t){var e=this.handleMessage(t);this.updateStep(e)}}]),t}();n.d(e,"a",function(){return x}),n.d(e,"c",function(){return S}),n.d(e,"b",function(){return g});var x=function t(e,n,r){f()(this,t),this.name=e,this.sender=n,this.receiver=r},S=function(t){function e(t,n,r,s){f()(this,e);var o=u()(this,(e.__proto__||i()(e)).call(this,t,n));return o.startTape=r,o.tape=r.split(""),o.tape.reverse(),o.emit=function(t,e){s({msg:t,colour:e,origin:"sender"})},o}return p()(e,t),o()(e,[{key:"reset",value:function(){c()(e.prototype.__proto__||i()(e.prototype),"reset",this).call(this),this.tape=this.startTape.split(""),this.tape.reverse()}}]),e}(m),g=function(t){function e(t,n,r){f()(this,e);var s=u()(this,(e.__proto__||i()(e)).call(this,t,n));return s.tape="",s.emit=function(t,e){r({msg:t,colour:e,origin:"receiver"})},s}return p()(e,t),e}(m)},eqvY:function(t,e,n){"use strict";e.a={"/":"Index","/protA":"ProtA","/protAd":"ProtA","/protAnc":"ProtAnc","/protAnrc":"ProtAnrc","/protB":"ProtB","/protBd":"ProtB","/protBsp":"ProtBsp","/protBn4":"ProtBn4","/protBnc":"ProtBnc","/protTCP":"ProtTCP"}},fqYy:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Zx67"),i=n.n(r),s=n("8j4o"),o=n("iXj2"),a=n("N5E8"),u={name:"ProtB",components:{GUI:o.a,VLink:a.a},data:function(){return{protBBuilder:function(t,e){var n=new s.a(t,e),r=i()(n.receiver);return n.receiver.descriptions.Skip="\t"+n.receiver.descriptions.Skip,n.receiver.states[0]=n.receiver.states[1],n.receiver.states[1]=n.receiver.startState,n.receiver.startState=n.receiver.states[0],n.receiver.state=n.receiver.startState,n.receiver.states.splice(3,1),n.receiver.stateWrite=function(){return r.stateWrite.call(this),"UpI"},n.receiver.stateUpI=function(){return r.stateUpI.call(this),"Skip"},n}}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("GUI",{attrs:{protocolBuilder:t.protBBuilder}},[n("v-link",{attrs:{href:"/protBd"}},[t._v("Default")]),t._v(" "),n("v-link",{attrs:{href:"/protBsp"}},[t._v("With Second Path")]),t._v(" "),n("v-link",{attrs:{href:"/protBn4"}},[t._v("Without Step 4")]),t._v(" "),n("v-link",{attrs:{href:"/protBnc"}},[t._v("Without Colours")])],1)],1)},staticRenderFns:[]},c=n("VU/8")(u,l,!1,null,null,null);e.default=c.exports},"g2+m":function(t,e,n){"use strict";var r={name:"NavBar",components:{VLink:n("N5E8").a}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",[e("div",{staticClass:"row"},[e("v-link",{attrs:{href:"/protA"}},[this._v("Protocol A")]),this._v(" "),e("v-link",{attrs:{href:"/protB"}},[this._v("Protocol B")]),this._v(" "),e("v-link",{attrs:{href:"/protTCP"}},[this._v("Protocol TCP")])],1),this._v(" "),e("div",{staticClass:"row"},[this._t("default")],2)])},staticRenderFns:[]};var s=n("VU/8")(r,i,!1,function(t){n("VU4X")},"data-v-2c43889f",null);e.a=s.exports},iXj2:function(t,e,n){"use strict";var r=n("BO1k"),i=n.n(r),s={name:"TextBox",props:{text:{type:String,required:!0},width:[String,Number],height:[String,Number],stroke:{type:String,default:"black"}},data:function(){return{}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:this.width,height:this.height}},[e("rect",{attrs:{x:"0",y:"0",width:"100%",height:"100%",stroke:this.stroke,"stroke-width":"2px"}}),this._v(" "),e("text",{attrs:{x:"50%",y:"50%",fill:"black","text-anchor":"middle","alignment-baseline":"middle"}},[this._v("\n    "+this._s(this.text)+"\n  ")])])},staticRenderFns:[]};var a=n("VU/8")(s,o,!1,function(t){n("pPoa")},"data-v-adcf5e38",null).exports,u=n("pXIW"),l=n.n(u),c={name:"CommLine",components:{TextBox:a},props:{secondPath:{type:Boolean,default:!1}},data:function(){return{packets:[],height:200,box_height:60}},methods:{tweenComplete:function(t){var e=this.packets.indexOf(t);t.failed||this.$emit(t.origin+"-arrived",t),e>-1&&this.packets.splice(e,1)},stop:function(){l.a.removeAll()},clear:function(){this.stop(),this.packets=[]},restart:function(){var t=!0,e=!1,n=void 0;try{for(var r,s=i()(this.packets);!(t=(r=s.next()).done);t=!0){var o=r.value,a=new l.a.Tween(o),u=0;if(o.to.x.constructor===Array){for(var c=0;c<o.to.x.length-1;c++){var h=o.to.x[c],p=o.to.y[c];if("sender"===o.origin){if(h<o.x){u++;continue}}else if(h>o.x){u++;continue}(p<o.y&&o.y<o.to.y[c+1]||p>o.y&&o.y>o.to.y[c+1])&&u++}o.to.x.splice(0,u),o.to.y.splice(0,u)}a.to(o.to,o.time),a.onComplete(this.tweenComplete),a.start()}}catch(t){e=!0,n=t}finally{try{!t&&s.return&&s.return()}finally{if(e)throw n}}},packetText:function(t){return t.colour||0===t.colour?t.msg+", "+t.colour:t.msg},addPacket:function(t){var e="sender"===t.origin;e?(t.x=17,t.y=85):(t.x=77,t.y=85);var n=new l.a.Tween(t),r={x:e?77:17},i=1e4,s=Math.random()*(this.secondPath?3:2);s>=2?(r=e?{x:[27,27,67,67,77],y:[85,45,45,85,85]}:{x:[67,67,27,27,17],y:[85,45,45,85,85]},i*=5):s>=1&&(r=e?{x:[27,27,42],y:[85,125,125]}:{x:[67,67,52],y:[85,125,125]},t.failed=!0,i*=.5),r.time=0,t.to=r,t.time=i,n.to(r,i),n.onComplete(this.tweenComplete),n.start(),this.packets.push(t),function t(){l.a.update()&&requestAnimationFrame(t)}()}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"100%",height:t.height+"px"}},[n("TextBox",{staticClass:"sender",attrs:{x:"10%",y:t.height/2-t.box_height/2,width:"10%",height:t.box_height,text:"Sender"}}),t._v(" "),n("TextBox",{staticClass:"receiver",attrs:{x:"80%",y:t.height/2-t.box_height/2,width:"10%",height:t.box_height,text:"Receiver"}}),t._v(" "),n("line",{attrs:{x1:"20%",y1:"50%",x2:"80%",y2:"50%"}}),t._v(" "),t.secondPath?n("g",[n("line",{attrs:{x1:"30%",y1:"50%",x2:"30%",y2:"30%"}}),t._v(" "),n("line",{attrs:{x1:"30%",y1:"30%",x2:"70%",y2:"30%"}}),t._v(" "),n("line",{attrs:{x1:"70%",y1:"30%",x2:"70%",y2:"50%"}})]):t._e(),t._v(" "),n("g",[n("line",{attrs:{x1:"30%",y1:"50%",x2:"30%",y2:"70%"}}),t._v(" "),n("line",{attrs:{x1:"30%",y1:"70%",x2:"45%",y2:"70%"}}),t._v(" "),n("line",{attrs:{x1:"55%",y1:"70%",x2:"70%",y2:"70%"}}),t._v(" "),n("line",{attrs:{x1:"70%",y1:"70%",x2:"70%",y2:"50%"}})]),t._v(" "),t._l(t.packets,function(e,r){return n("TextBox",{key:e.msg+r,class:e.origin,attrs:{x:e.x+"%",y:e.y+"px",width:"6%",height:t.box_height/2,text:t.packetText(e)}})})],2)},staticRenderFns:[]};var p=n("VU/8")(c,h,!1,function(t){n("9gAG")},"data-v-b795462c",null).exports,d=n("o3Mh"),f=n("g2+m"),v={name:"Tape",props:{index:{type:Number,default:0},offset:{type:Number,default:-1},size:{required:!0,type:Number}},data:function(){return{letters:[]}},computed:{length:function(){return Math.max(this.size,this.letters.length)}},methods:{reset:function(){this.letters=[]},addLetter:function(t){this.letters.push(t)}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tape"}},[n("table",[n("tr",[n("td",[t._v("Tape")]),t._v(" "),t._l(t.letters,function(e,r){return n("td",{key:e+r},[t._v("\n        "+t._s(e)+"\n      ")])}),t._v(" "),t._l(t.length-t.letters.length,function(e){return n("td",{key:e},[t._v("\n        .\n      ")])})],2),t._v(" "),n("tr",[n("td",[t._v("Index")]),t._v(" "),t._l(t.length,function(e){return n("td",{key:e,class:{active:t.index===e-1,offset:t.offset===e-1}},[t._v("\n        "+t._s(e-1)+"\n      ")])})],2)])])},staticRenderFns:[]};var k={name:"Stepper",components:{Tape:n("VU/8")(v,_,!1,function(t){n("SR4U")},"data-v-4543722c",null).exports},props:{name:{required:!0,type:String},stepper:{required:!0}},created:function(){var t=this;this.stepper.tapeCallback=function(e){t.$refs.Tape.addLetter(e)}},methods:{indent:function(t){for(var e=0;e<t.length;e++)if("\t"!==t.charAt(e))return e},accept:function(t){this.stepper.onMessage(t)},reset:function(){this.$refs.Tape.reset(),this.stepper.reset()},step:function(){this.stepper.step()}},data:function(){return{}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"stepper"}},[n("h1",[t._v(t._s(t.name))]),t._v(" "),n("Tape",{ref:"Tape",attrs:{size:24,index:t.stepper.index,offset:t.stepper.offset}}),t._v(" "),n("ol",t._l(t.stepper.states,function(e){return n("li",{key:e,class:{active:e===t.stepper.state},style:{paddingLeft:15*t.indent(t.stepper.descriptions[e])+"px"}},[t._v("\n      "+t._s(t.stepper.descriptions[e])+"\n    ")])}))],1)},staticRenderFns:[]};var m=n("VU/8")(k,y,!1,function(t){n("R1n0")},"data-v-699046d4",null).exports,x={name:"GUI",components:{CommLine:p,MainLayout:d.a,NavBar:f.a,Stepper:m},methods:{start:function(){this.step(),this.timerId=setInterval(this.step,2e3),this.$refs.CommLine.restart()},pauze:function(){clearInterval(this.timerId),this.timerId=void 0,this.$refs.CommLine.stop()},step:function(){this.$refs.Sender.step(),this.$refs.Receiver.step()},reset:function(){this.pauze(),this.$refs.CommLine.clear(),this.$refs.Sender.reset(),this.$refs.Receiver.reset()},emit:function(t){this.$refs.CommLine.addPacket(t)}},props:{secondPath:{type:Boolean,default:!1},protocolBuilder:{required:!0}},data:function(){var t=this;return{protocol:this.protocolBuilder("FDKEIKDOEKDKEEIZMXVEOOQQ",function(e){t.emit(e)}),timerId:void 0}}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MainLayout",[n("template",{slot:"navigation"},[t._t("default")],2),t._v(" "),n("h1",[t._v(t._s(t.protocol.name))]),t._v(" "),n("CommLine",{ref:"CommLine",attrs:{"second-path":t.secondPath},on:{"sender-arrived":function(e){t.$refs.Receiver.accept(e)},"receiver-arrived":function(e){t.$refs.Sender.accept(e)}}}),t._v(" "),n("div",{staticClass:"row"},[n("Stepper",{ref:"Sender",staticClass:"sender",attrs:{name:"Sender",stepper:t.protocol.sender}}),t._v(" "),n("Stepper",{ref:"Receiver",staticClass:"receiver",attrs:{name:"Receiver",stepper:t.protocol.receiver}})],1),t._v(" "),n("div",{staticClass:"row"},[n("button",{staticClass:"button",attrs:{disabled:void 0!==t.timerId},on:{click:t.reset}},[t._v("Reset")]),t._v(" "),n("button",{staticClass:"button",attrs:{disabled:void 0!==t.timerId},on:{click:t.start}},[t._v("Start")]),t._v(" "),n("button",{staticClass:"button",attrs:{disabled:void 0===t.timerId},on:{click:t.pauze}},[t._v("Stop")])])],2)},staticRenderFns:[]};var g=n("VU/8")(x,S,!1,function(t){n("rxpn")},null,null);e.a=g.exports},k8MC:function(t,e){},o3Mh:function(t,e,n){"use strict";var r={name:"MainLayout",components:{NavBar:n("g2+m").a}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"main"}},[e("NavBar",[this._t("navigation")],2),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var s=n("VU/8")(r,i,!1,function(t){n("Cgsp")},null,null);e.a=s.exports},pPoa:function(t,e){},rxpn:function(t,e){},vRtF:function(t,e,n){var r={"./Index.vue":"eerB","./ProtA.vue":"SY74","./ProtAnc.vue":"YGvE","./ProtAnrc.vue":"Onl7","./ProtB.vue":"EFMJ","./ProtBn4.vue":"fqYy","./ProtBnc.vue":"X8OM","./ProtBsp.vue":"COBn","./ProtTCP.vue":"QInh"};function i(t){return n(s(t))}function s(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(r)},i.resolve=s,t.exports=i,i.id="vRtF"},xyMA:function(t,e,n){"use strict";var r=n("wxAW"),i=n.n(r),s=n("yEsh"),o=n.n(s),a=n("Zx67"),u=n.n(a),l=n("Zrlr"),c=n.n(l),h=n("zwoO"),p=n.n(h),d=n("Pf15"),f=n.n(d),v=n("ekX3"),_=function(t){function e(t,n){return c()(this,e),p()(this,(e.__proto__||u()(e)).call(this,"Protocol A",new k(t,n),new y(n)))}return f()(e,t),e}(v.a),k=function(t){function e(t,n){c()(this,e);var r=p()(this,(e.__proto__||u()(e)).call(this,"Begin",["Begin","Read","Send","SendK","UpI","End"],t,n));return r.helpBegin="while true do",r.helpRead="\tRead(Xi)",r.helpSend="\tSend (Xi) until KsKr (Xi)",r.helpSendK="\tSend KsKr (Xi) until KsKrKsKr (Xi)",r.helpUpI="\ti := i + 1",r.helpEnd="done",r.setupDescriptions(),r.letter=void 0,r.index=0,r}return f()(e,t),i()(e,[{key:"reset",value:function(){o()(e.prototype.__proto__||u()(e.prototype),"reset",this).call(this),this.letter=void 0,this.index=0}},{key:"stateBegin",value:function(){return"Read"}},{key:"stateRead",value:function(){return this.letter=this.tape.pop(),this.tapeCallback(this.letter),"Send"}},{key:"stateSend",value:function(){this.emit(this.letter)}},{key:"stateSendK",value:function(){this.emit("KsKr "+this.letter)}},{key:"stateUpI",value:function(){return this.index+=1,"Read"}},{key:"stateEnd",value:function(){}},{key:"handleMessage",value:function(t){return"Send"===this.state&&t.msg==="Kr "+this.letter?"SendK":"SendK"===this.state&&t.msg==="KrKsKr "+this.letter?"UpI":void 0}}]),e}(v.c),y=function(t){function e(t){c()(this,e);var n=p()(this,(e.__proto__||u()(e)).call(this,"Skip",["Skip","Begin","Write","Send","Send2","UpI","End"],t));return n.helpSkip="Skip until Kr (Xi)",n.helpBegin="while true do",n.helpWrite="\tWrite (Xi)",n.helpSend="\tSend Kr (Xi) until KrKsKr (Xi)",n.helpSend2="\tSend KrKsKr (Xi) until KrKsKrKsKr (Xi)",n.helpUpI="\ti := i + 1",n.helpEnd="done",n.setupDescriptions(),n.index=0,n.letter="",n}return f()(e,t),i()(e,[{key:"reset",value:function(){o()(e.prototype.__proto__||u()(e.prototype),"reset",this).call(this),this.index=0,this.letter=""}},{key:"stateBegin",value:function(){return"Skip"}},{key:"stateSkip",value:function(){}},{key:"stateWrite",value:function(){return this.tapeCallback(this.letter),"Send"}},{key:"stateSend",value:function(){this.emit("Kr "+this.letter)}},{key:"stateSend2",value:function(){this.emit("KrKsKr "+this.letter)}},{key:"stateUpI",value:function(){return this.index+=1,"Write"}},{key:"stateEnd",value:function(){}},{key:"handleMessage",value:function(t){return"Skip"===this.state?(this.letter=t.msg,"Write"):"Send"===this.state&&t.msg==="KsKr "+this.letter?"Send2":"Send2"===this.state&&t.msg!=="KsKr "+this.letter?(this.letter=t.msg,"UpI"):void 0}}]),e}(v.b);e.a=_}},["NHnr"]);
//# sourceMappingURL=app.6931e30e0317eb6e4922.js.map