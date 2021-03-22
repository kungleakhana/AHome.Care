if (self.CavalryLogger) { CavalryLogger.start_js(["il+nS"]); }

__d("DialogPosition",["Vector"],(function(a,b,c,d,e,f){f.calculateTopMargin=a;f.setFixedTopMargin=c;var g=40,h;function a(a,c,d,e,f){d===void 0&&(d=null);e===void 0&&(e=!1);f===void 0&&(f=!1);var i=b("Vector").getViewportDimensions(),j=!1;e&&d&&(j=d+c>i.y);if(d!=null&&!j)return d;if(h)return h;e=f?Math.floor((i.y-c)/2):Math.floor((i.x+a)*(i.y-c)/(4*i.x));return Math.max(e,g)}function c(a){h=a}}),null);
__d("flattenArray",[],(function(a,b,c,d,e,f){e.exports=a;function a(a){var b=[];g(a,b);return b}function g(a,b){var c=a.length,d=0;while(c--){var e=a[d++];Array.isArray(e)?g(e,b):b.push(e)}}}),null);
__d("JSXDOM",["DOM","FbtResultBase","flattenArray"],(function(a,b,c,d,e,f){a=["a","blockquote","br","button","canvas","checkbox","dd","div","dl","dt","em","form","h1","h2","h3","h4","h5","h6","hr","i","iframe","img","input","label","li","option","p","pre","select","span","strong","table","tbody","thead","td","textarea","th","tr","ul","video"];var g={};a.forEach(function(a){var c=function(c,d){arguments.length>2&&(d=Array.prototype.slice.call(arguments,1));!d&&c&&(d=c.children,delete c.children);d&&(d=Array.isArray(d)?d:[d],d=d.map(function(a){return a instanceof b("FbtResultBase")?a.flattenToArray():a}),d=b("flattenArray")(d));return b("DOM").create(a,c,d)};g[a]=c});e.exports=g}),null);
__d("focusWithinLayer",["DOMQuery","Focus","TabbableElements","getActiveElement"],(function(a,b,c,d,e,f){e.exports=a;function a(a,c){var d=b("DOMQuery").scry(a,".autofocus")[0],e=!0;if(!d){var f=b("getActiveElement")();if(b("DOMQuery").isNodeOfType(f,["input","textarea"]))return;f=b("TabbableElements").find(a);for(var g=0;g<f.length;g++){var h=f[g];if(h.tagName!=="A"||h.getAttribute("role")==="button"){d=f[g];break}}}else d.tabIndex!==0&&(e=!1);d?e?b("Focus").set(d,c):b("Focus").setWithoutOutline(d):a.offsetWidth||(a.tabIndex=-1,b("Focus").setWithoutOutline(a))}}),null);
__d("LayerAutoFocus",["focusWithinLayer"],(function(a,b,c,d,e,f){a=function(){function a(a){this._subscription=null,this._layer=a,this._subscription=null}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe("aftershow",this._focus.bind(this))};c.disable=function(){this._subscription&&this._subscription.unsubscribe(),this._subscription=null};c._focus=function(){var a=this._layer.getRoot();a&&b("focusWithinLayer")(a,!0)};return a}();e.exports=a}),null);
__d("Button",["csx","cx","invariant","CSS","DOM","DataStore","Event","Parent","emptyFunction","isNode"],(function(a,b,c,d,e,f,g,h,i){var j="uiButtonDisabled",k="uiButtonDepressed",l="_42fr",m="_42fs",n="button:blocker",o="href",p="ajaxify";function q(a,c){var d=b("DataStore").get(a,n);c?d&&(d.remove(),b("DataStore").remove(a,n)):d||b("DataStore").set(a,n,b("Event").listen(a,"click",b("emptyFunction").thatReturnsFalse,b("Event").Priority.URGENT))}function r(a){a=b("Parent").byClass(a,"uiButton")||b("Parent").bySelector(a,"._42ft");if(!a)throw new Error("invalid use case");return a}function s(a){return b("DOM").isNodeOfType(a,"a")}function t(a){return b("DOM").isNodeOfType(a,"button")}function u(a){return b("CSS").matchesSelector(a,"._42ft")}var v={getInputElement:function(a){a=r(a);if(s(a))throw new Error("invalid use case");if(t(a)){a instanceof HTMLButtonElement||i(0,21261);return a}return b("DOM").find(a,"input")},isEnabled:function(a){return!(b("CSS").hasClass(r(a),j)||b("CSS").hasClass(r(a),l))},setEnabled:function(a,c){a=r(a);var d=u(a)?l:j;b("CSS").conditionClass(a,d,!c);if(s(a)){d=a.getAttribute("href");var e=a.getAttribute("ajaxify"),f=b("DataStore").get(a,o,"#"),g=b("DataStore").get(a,p);c?(d||a.setAttribute("href",f),!e&&g&&a.setAttribute("ajaxify",g),a.removeAttribute("tabIndex")):(d&&d!==f&&b("DataStore").set(a,o,d),e&&e!==g&&b("DataStore").set(a,p,e),a.removeAttribute("href"),a.removeAttribute("ajaxify"),a.setAttribute("tabIndex","-1"));q(a,c)}else{f=v.getInputElement(a);f.disabled=!c;q(f,c)}},setDepressed:function(a,c){a=r(a);var d=u(a)?m:k;b("CSS").conditionClass(a,d,c)},isDepressed:function(a){a=r(a);var c=u(a)?m:k;return b("CSS").hasClass(a,c)},setLabel:function(a,c){a=r(a);if(u(a)){var d=[];c&&d.push(c);var e=b("DOM").scry(a,".img");for(var f=0;f<e.length;f++){var g=e[f],h=g.parentNode;h.classList&&(h.classList.contains("_4o_3")||h.classList.contains("_-xe"))?a.firstChild===h?d.unshift(h):d.push(h):a.firstChild==g?d.unshift(g):d.push(g)}b("DOM").setContent(a,d)}else if(s(a)){h=b("DOM").find(a,"span.uiButtonText");b("DOM").setContent(h,c)}else v.getInputElement(a).value=c;g=u(a)?"_42fv":"uiButtonNoText";b("CSS").conditionClass(a,g,!c)},getIcon:function(a){a=r(a);return b("DOM").scry(a,".img")[0]},setIcon:function(a,c){if(c&&!b("isNode")(c))return;var d=v.getIcon(a);if(!c){d&&b("DOM").remove(d);return}b("CSS").addClass(c,"customimg");d!=c&&(d?b("DOM").replace(d,c):b("DOM").prependContent(r(a),c))}};a=v;e.exports=a}),null);
__d("LayerHideSources",[],(function(a,b,c,d,e,f){a=Object.freeze({BLUR:"blur",ESCAPE:"escape",LAYER_CANCEL_BUTTON:"layerCancelButton",LAYER_HIDE_BUTTON:"layerHideButton",TRANSITION:"transition"});b=a;e.exports=b}),null);
__d("LayerButtons",["csx","Button","Event","LayerHideSources","Parent"],(function(a,b,c,d,e,f,g){a=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._listener=b("Event").listen(this._layer.getRoot(),"click",this._handle.bind(this))};c.disable=function(){this._listener.remove(),this._listener=null};c._handle=function(a){var c=a.getTarget(),d=b("Parent").byClass(c,"layerHide");if(d){this._layer.hide(b("LayerHideSources").LAYER_HIDE_BUTTON);return}d=b("Parent").byClass(c,"layerConfirm");if(d){if(this._isButton(d)&&!b("Button").isEnabled(d))return;if(this._isInNestedLayer(d))return;this._layer.inform("confirm",d)===!1&&a.prevent();return}d=b("Parent").byClass(c,"layerCancel");if(d){if(this._isButton(d)&&!b("Button").isEnabled(d))return;if(this._isInNestedLayer(d))return;this._layer.inform("cancel",d)!==!1&&this._layer.hide(b("LayerHideSources").LAYER_CANCEL_BUTTON);a.prevent();return}d=b("Parent").byClass(c,"layerButton");if(d){if(this._isButton(d)&&!b("Button").isEnabled(d))return;if(this._isInNestedLayer(d))return;this._layer.inform("button",d)===!1&&a.prevent()}};c._isInNestedLayer=function(a){a=b("Parent").byClass(a,"uiLayer");var c=this._layer.getRoot();return!!(a&&c!==a)};c._isButton=function(a){return!!(b("Parent").byClass(a,"uiButton")||b("Parent").bySelector(a,"._42ft"))};return a}();a.prototype._listener=null;e.exports=a}),null);
__d("LayerFormHooks",["Event"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){var a=this._layer.getRoot();this._subscriptions=[b("Event").listen(a,"submit",this._onSubmit.bind(this)),b("Event").listen(a,"success",this._onSuccess.bind(this)),b("Event").listen(a,"error",this._onError.bind(this))]};c.disable=function(){this._subscriptions.forEach(function(a){a.remove()}),this._subscriptions=null};c._onSubmit=function(a){this._layer.inform("submit",a)===!1&&a.kill()};c._onSuccess=function(a){this._layer.inform("success",a)===!1&&a.kill()};c._onError=function(a){var b=a.getData();this._layer.inform("error",{response:b.response})===!1&&a.kill()};return a}();Object.assign(a.prototype,{_subscriptions:null});e.exports=a}),null);
__d("LayerRefocusOnHide",["ContextualThing","DOM","DOMQuery","Focus","Parent","getActiveElement","nullthrows"],(function(a,b,c,d,e,f){a=function(){function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe("hide",this._handle.bind(this))};c.disable=function(){b("nullthrows")(this._subscription).unsubscribe(),this._subscription=null};c._handle=function(){var a=b("getActiveElement")();if(a===document.body||b("DOMQuery").contains(this._layer.getRoot(),a)){a=this._layer.getCausalElement();while(a&&!a.offsetWidth){var c=b("Parent").byClass(a,"uiToggle");if(c&&c.offsetWidth)a=b("DOM").scry(c,'[rel="toggle"]')[0];else{c=b("ContextualThing").getContext(a);c?a=c:a=a.parentNode}}a&&(a=a,b("Focus").set(a))}};return a}();e.exports=a;Object.assign(a.prototype,{_subscription:null})}),null);
__d("TabIsolation",["Event","Focus","Keys","TabbableElements","containsNode"],(function(a,b,c,d,e,f){var g=[],h=0;a=function(){function a(a){this.$3=a,this.$1=null,this.$2=h++}var c=a.prototype;c.enable=function(){var a=this;this.disable();g.unshift(this.$2);this.$1=b("Event").listen(window,"keydown",function(b){g[0]===a.$2&&a.$4(b)},b("Event").Priority.URGENT)};c.disable=function(){if(this.$1){var a=g.indexOf(this.$2);a>-1&&g.splice(a,1);this.$1.remove();this.$1=null}};c.$4=function(a){if(b("Event").getKeyCode(a)!==b("Keys").TAB)return;var c=a.getTarget();if(!c)return;var d=b("TabbableElements").find(this.$3),e=d[0];d=d[d.length-1];var f=a.getModifiers();f=f.shift;f&&c===e?(a.preventDefault(),b("Focus").set(d)):(!f&&c===d||!b("containsNode")(this.$3,c))&&(a.preventDefault(),b("Focus").set(e))};return a}();e.exports=a}),null);
__d("LayerTabIsolation",["TabIsolation"],(function(a,b,c,d,e,f){a=function(){function a(a){this._layer=a,this._tabIsolation=null,this._subscriptions=null}var c=a.prototype;c.enable=function(){var a=this._layer.getRoot();if(a==null)return;a=new(b("TabIsolation"))(a);this._tabIsolation=a;this._subscriptions=[this._layer.subscribe("show",a.enable.bind(a)),this._layer.subscribe("hide",a.disable.bind(a))]};c.disable=function(){while(this._subscriptions&&this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._tabIsolation&&this._tabIsolation.disable();this._tabIsolation=null};return a}();e.exports=a;Object.assign(a.prototype,{_subscriptions:[]})}),null);
__d("getContextualParent",["ge"],(function(a,b,c,d,e,f){e.exports=a;function a(a,c){c===void 0&&(c=!1);var d=!1;a=a;do{if(a instanceof Element){var e=a.getAttribute("data-ownerid");if(e){a=b("ge")(e);d=!0;continue}}a=a.parentNode}while(c&&a&&!d);return a}}),null);
__d("Toggler",["csx","invariant","$","Arbiter","ArbiterMixin","CSS","ContextualThing","DOM","DataStore","Event","Focus","Keys","Parent","TabbableElements","TimeSlice","createArrayFromMixed","emptyFunction","ge","getContextualParent","getObjectValues","killswitch","mixin","queryThenMutateDOM","setImmediate"],(function(a,b,c,d,e,f,g,h){var i=[],j,k=!1;function l(){k||(k=!0,b("setImmediate")(function(){k=!1}))}var m=function(){m=b("emptyFunction"),b("Event").listen(document.documentElement,"click",function(a){if(k)return;var c=a.getTarget();i.forEach(function(a){a.clickedTarget=c,a.active&&!a.sticky&&!b("ContextualThing").containsIncludingLayers(a.getActive(),c)&&!a.inTargetFlyout(c)&&a.inActiveDialog()&&!a.isIgnoredByModalLayer(c)&&a.hide()})},b("Event").Priority.URGENT)},n=function(d){babelHelpers.inheritsLoose(c,d);function c(){var a;a=d.call(this)||this;a.active=null;a.togglers={};a.setSticky(!1);i.push(babelHelpers.assertThisInitialized(a));a.subscribe(["show","hide"],c.inform.bind(c));return m()||babelHelpers.assertThisInitialized(a)}var e=c.prototype;e.focusFirstTabbableDescendant=function(a,c){if(!b("killswitch")("TOGGLER_FAST_SHOW")){c.$Toggler2&&c.$Toggler2.cancel();var d=null;c.$Toggler2=b("queryThenMutateDOM")(function(){var c=a.querySelector(".uiToggleFlyout");c&&(d=b("TabbableElements").findFirst(c)||c)},function(){delete c.$Toggler2,d&&(d.tabIndex==null&&(d.tabIndex=-1),b("Focus").setWithoutOutline(d))})}else{var e=a.querySelector(".uiToggleFlyout");if(e){e=b("TabbableElements").find(e)[0]||e;e.tabIndex==null&&(e.tabIndex=-1);b("Focus").setWithoutOutline(e)}}};e.show=function(a){var c=o(this,a),d=c.active;if(a!==d){d&&c.hide();c.active=a;b("CSS").addClass(a,"openToggler");d=b("DOM").scry(a,'a[rel="toggle"]');d.length>0&&d[0].getAttribute("data-target")&&b("CSS").removeClass(b("$")(d[0].getAttribute("data-target")),"toggleTargetClosed");this.focusFirstTabbableDescendant(a,c);d.length>0&&(b("DOM").appendContent(a,c.getToggler("next")),b("DOM").prependContent(a,c.getToggler("prev")));b("Event").listen(a,"keydown",function(d){if(b("Event").getKeyCode(d)===b("Keys").ESC&&c.isShown()){var e=b("DOM").scry(a,'a[rel="toggle"]')[0];e&&e.focus();c.hide();d.kill()}});a.getAttribute("data-toggle-wc")&&(c.__continuation=b("TimeSlice").getGuardedContinuation("Toggler.show inform"));c.inform("show",c,"state")}};e.hide=function(a){var c=o(this,a);c.$Toggler2&&c.$Toggler2.cancel();var d=c.active;if(d&&(!a||a===d)){b("CSS").removeClass(d,"openToggler");a=b("DOM").scry(d,'a[rel="toggle"]');a.length>0&&a[0].getAttribute("data-target")&&b("CSS").addClass(b("$")(a[0].getAttribute("data-target")),"toggleTargetClosed");b("getObjectValues")(c.togglers).forEach(b("DOM").remove);d.getAttribute("data-toggle-wc")&&(c.__continuation=b("TimeSlice").getGuardedContinuation("Toggler.hide inform"));c.inform("hide",c,"state");c.active=null}};e.toggle=function(a){var b=o(this,a);b.active===a?b.hide():b.show(a);l()};e.getActive=function(){return o(this).active};e.isShown=function(){return o(this).active&&b("CSS").hasClass(o(this).active,"openToggler")};c.isNodeShown=function(a){return b("CSS").hasClass(a,"openToggler")};e.inTargetFlyout=function(a){var c=p(this.getActive());return Boolean(c&&b("ContextualThing").containsIncludingLayers(c,a))};e.inActiveDialog=function(){var c=a.Dialog&&a.Dialog.getCurrent();return!c||b("DOM").contains(c.getRoot(),this.getActive())};e.isIgnoredByModalLayer=function(a){a=!!b("Parent").bySelector(a,"._3qw");var c=!!b("Parent").bySelector(this.getActive(),"._3qw");return a&&!c};e.getToggler=function(a){var c=o(this);c.togglers[a]||(c.togglers[a]=b("DOM").create("button",{className:"hideToggler",onfocus:function(){var a=b("DOM").scry(c.active,'a[rel="toggle"]')[0];a&&a.focus();c.hide()},style:{right:a==="next"?"0":""}}),c.togglers[a].setAttribute("type","button"));return this.togglers[a]};e.setSticky=function(a){var c=o(this);a=a!==!1;a!==c.sticky&&(c.sticky=a,a?c.$Toggler1&&c.$Toggler1.unsubscribe():c.$Toggler1=b("Arbiter").subscribe("pre_page_transition",c.hide.bind(c,null)));return c};e.setPrePageTransitionCallback=function(a){var c=o(this);c.$Toggler1&&c.$Toggler1.unsubscribe();c.$Toggler1=b("Arbiter").subscribe("pre_page_transition",a)};c.bootstrap=function(a){a=a.parentNode;a!=null||h(0,3354);var b=c.getInstance(a);b!=null||h(0,3355);b.toggle(a)};c.createInstance=function(a){var d=new c().setSticky(!0);b("DataStore").set(a,"toggler",d);return d};c.destroyInstance=function(a){var c=b("DataStore").get(a,"toggler");c&&c.$Toggler2&&c.$Toggler2.cancel();b("DataStore").remove(a,"toggler")};c.getInstance=function(a){a=a;while(a){var d=b("DataStore").get(a,"toggler");if(d)return d;if(a instanceof Element)if(b("CSS").hasClass(a,"uiToggleContext"))return c.createInstance(a);else if(!b("killswitch")("JEWEL_TOGGLER_INSTANCE_FIXES")&&b("CSS").hasClass(a,"uiToggleFlyout"))return c.createInstance(a).setSticky(!1);a=b("getContextualParent")(a)}return j=j||new c()};c.listen=function(a,d,e){return c.subscribe(b("createArrayFromMixed")(a),function(a,b){if(b.getActive()===d){if(b.__continuation){var c=b.__continuation;delete b.__continuation;return c(function(){return e(a,b)})}return e(a,b)}})};return c}(b("mixin")(b("ArbiterMixin")));e.exports=n;Object.assign(n,n.prototype,b("ArbiterMixin"));Object.assign(n,{subscribe:function(a){return function(c,d){c=b("createArrayFromMixed")(c);c.includes("show")&&i.forEach(function(a){a.getActive()&&setTimeout(d.bind(null,"show",a),0)});return a(c,d)}}(n.subscribe.bind(n))});function o(a,b){return a instanceof n?a:n.getInstance(b)}function p(a){a=b("DOM").scry(a,'a[rel="toggle"]');return a.length>0&&a[0].getAttribute("data-target")?b("ge")(a[0].getAttribute("data-target")):null}}),null);
__d("LayerTogglerContext",["Toggler"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._root=this._layer.getRoot(),b("Toggler").createInstance(this._root).setSticky(!1)};c.disable=function(){b("Toggler").destroyInstance(this._root),this._root=null};return a}();e.exports=a}),null);
__d("ScrollAwareDOM",["ArbiterMixin","CSS","DOM","DOMDimensions","HTML","Vector","ViewportBounds","getDocumentScrollElement","getElementPosition","getViewportDimensions","isAsyncScrollQuery","isNode"],(function(a,b,c,d,e,f){function a(a,b){return function(){var c=arguments;j.monitor(arguments[a],function(){b.apply(null,c)})}}function g(a){a instanceof Array||(a=[a]);for(var c=0;c<a.length;c++){var d=b("HTML").replaceJSONWrapper(a[c]);if(d instanceof b("HTML"))return d.getRootNode();else if(b("isNode")(d))return d}return null}function h(a){return b("getElementPosition")(a).y>b("ViewportBounds").getTop()}function i(a){a=b("getElementPosition")(a).y+b("DOMDimensions").getElementDimensions(a).height;var c=b("getViewportDimensions")().height-b("ViewportBounds").getBottom();return a>=c}var j=babelHelpers["extends"]({monitor:function(a,c){if(b("isAsyncScrollQuery")())return c();a=g(a);if(a){var d=!!a.offsetParent;if(d&&(h(a)||i(a)))return c();var e=b("Vector").getDocumentDimensions(),f=c();if(d||a.offsetParent&&!h(a)){d=b("Vector").getDocumentDimensions().sub(e);e={delta:d,target:a};j.inform("scroll",e)!==!1&&d.scrollElementBy(b("getDocumentScrollElement")())}return f}else return c()},replace:function(a,c){var d=g(c);(!d||b("CSS").hasClass(d,"hidden_elem"))&&(d=a);return j.monitor(d,function(){b("DOM").replace(a,c)})},prependContent:a(1,(c=b("DOM")).prependContent),insertAfter:a(1,c.insertAfter),insertBefore:a(1,c.insertBefore),setContent:a(0,c.setContent),appendContent:a(1,c.appendContent),remove:a(0,c.remove),empty:a(0,c.empty)},b("ArbiterMixin"));d=j;e.exports=d}),null);
__d("ModalLayer",["csx","cx","Arbiter","ArbiterMixin","CSS","DOM","DOMDimensions","DOMQuery","DataStore","Event","Scroll","ScrollAwareDOM","Style","UserAgent","Vector","debounceAcrossTransitions","ge","getDocumentScrollElement","isAsyncScrollQuery","removeFromArray","setTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h){var i=[],j=null,k=null,l=null;function m(){l||(l=b("DOMQuery").scry(document.body,"._li")[0]||b("ge")("FB4BResponsiveMain"));return l}function n(a){var c={position:b("Vector").getScrollPosition(),listener:void 0},d=a.offsetTop-c.position.y;b("CSS").addClass(a,"_31e");m().id!=="FB4BResponsiveMain"&&b("Style").set(a,"top",d+"px");b("Arbiter").inform("reflow");c.listener=b("ScrollAwareDOM").subscribe("scroll",function(d,e){if(b("DOMQuery").contains(a,e.target)){d=a.offsetTop-e.delta.y;b("Style").set(a,"top",d+"px");c.position=c.position.add(e.delta);return!1}return!0});b("DataStore").set(a,"ModalLayerData",c)}function o(a,c){var d=b("DataStore").get(a,"ModalLayerData");if(d){var e=function(){b("CSS").removeClass(a,"_31e");b("Style").set(a,"top","");if(c){var e=b("getDocumentScrollElement")();b("Scroll").setTop(e,d.position.y);b("Scroll").getTop(e)!==d.position.y&&(b("Scroll").setTop(e,d.position.y+1),b("Scroll").setTop(e,d.position.y))}b("Arbiter").inform("reflow");d.listener.unsubscribe();d.listener=null;b("DataStore").remove(a,"ModalLayerData")};if(c&&b("isAsyncScrollQuery")()){var f=b("DOM").create("div",{className:"_42w"});b("Style").set(f,"height",a.offsetHeight+"px");b("DOM").appendContent(document.body,f);var g=b("getDocumentScrollElement")();b("Scroll").setTop(g,d.position.y);c=!1;b("setTimeout")(function(){e(),b("DOM").remove(f)},0)}else e()}}function p(){var a=m();a!=null&&!b("CSS").matchesSelector(a,"._31e")&&n(a)}function q(){i.length||o(m(),!0)}function r(){var a=i.length;while(a--){var c=i[a],d=c.getLayerRoot();if(d){s(d,0);c=c.getLayerContentRoot();if(c){c=c.offsetWidth+b("DOMDimensions").measureElementBox(c,"width",!1,!1,!0);s(d,c)}}}}function s(a,c){b("Style").set(a,"min-width",c+(c?"px":""))}a=function(){function a(a){this._layer=a,this._enabled=!1}var c=a.prototype;c.enable=function(){if(!m())return;this._subscription=this._layer.subscribe(["show","hide"],function(a){a=="show"?this._addModal():this._removeModal()}.bind(this));this._layer.isShown()&&this._addModal();this._enabled=!0};c.disable=function(){if(!m())return;this._subscription&&this._subscription.unsubscribe();this._layer.isShown()&&this._removeModal();this._enabled=!1};c._addModal=function(){var c=this.getLayerRoot();b("CSS").addClass(c,"_3qw");this._wash=b("DOM").create("div",{className:"_3ixn"});b("DOM").prependContent(c,this._wash);c=i[i.length-1];c?n(c.getLayerRoot()):p();c=b("getDocumentScrollElement")();b("Scroll").setTop(c,0);if(!i.length){c=b("debounceAcrossTransitions")(r,100);j=b("Event").listen(window,"resize",c);k=b("Arbiter").subscribe("reflow",c)}i.push(this);a.inform("show",this);b("setTimeout")(r,0)};c._removeModal=function(){var c=this,d=this.getLayerRoot();b("CSS").removeClass(d,"_3qw");b("DOM").remove(this._wash);this._wash=null;s(d,0);var e=this===i[i.length-1];b("removeFromArray")(i,this);i.length||(j&&j.remove(),j=null,k&&k.unsubscribe(),k=null);var f;b("UserAgent").isBrowser("Safari")&&(d=b("Event").listen(document.documentElement,"mousewheel",b("Event").prevent),f=d.remove.bind(d));b("setTimeoutAcrossTransitions")(function(){var d=i[i.length-1];d?(o(d.getLayerRoot(),e),a.inform("show",d)):(q(),a.inform("hide",c));i.length&&b("setTimeout")(r,0);b("UserAgent").isBrowser("Safari")&&b("setTimeout")(function(){f()},0)},200)};c.getLayerRoot=function(){return this._enabled?this._layer.getRoot():null};c.getLayerContentRoot=function(){return this._enabled?this._layer.getContentRoot():null};a.getTopmostModalLayer=function(){return i[i.length-1]};return a}();e.exports=a;Object.assign(a,b("ArbiterMixin"))}),null);
__d("DialogX",["cx","fbt","Arbiter","CSS","DOMQuery","DialogPosition","Event","JSXDOM","Layer","LayerAutoFocus","LayerButtons","LayerFormHooks","LayerRefocusOnHide","LayerTabIsolation","LayerTogglerContext","ModalLayer","Style","Vector","debounce","getOrCreateDOMID","goURI","isTruthy","shield"],(function(a,b,c,d,e,f,g,h){a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d._configure=function(c,d){a.prototype._configure.call(this,c,d);d=this.getRoot();d!=null&&b("CSS").addClass(d,"_4-hy");if(c.autohide)var e=this.subscribe("show",function(){e.unsubscribe(),window.setTimeout(b("shield")(this.hide,this),c.autohide)}.bind(this));if(c.redirectURI)var f=this.subscribe("hide",function(){f.unsubscribe();var a=c.redirectURI;a!=null&&b("goURI")(a)});this._fixedTopPosition=c.fixedTopPosition;this._ignoreFixedTopInShortViewport=c.ignoreFixedTopInShortViewport;this._isVerticallyCentered=c.isVerticallyCentered};d._getDefaultBehaviors=function(){return a.prototype._getDefaultBehaviors.call(this).concat([i,b("ModalLayer"),this._config.autofocus===!1?void 0:b("LayerAutoFocus"),b("LayerButtons"),b("LayerFormHooks"),b("LayerTabIsolation"),b("LayerTogglerContext"),b("LayerRefocusOnHide")].filter(b("isTruthy")))};d._buildWrapper=function(a,c){var d=a.xui?"_4t2a":"_t _9l18",e=a.xui?"_59s7 _9l2g":"_1yv";this._innerContent=b("JSXDOM").div(null,c);c={className:e,role:"dialog"};if(a.labelledBy)c["aria-labelledby"]=a.labelledBy;else if(a.label)c["aria-label"]=a.label;else if(a.titleID)c["aria-labelledby"]=a.titleID;else if(a.titleClass){e=b("DOMQuery").scry(this._innerContent,a.titleClass);if(e.length){e=b("getOrCreateDOMID")(e[0]);c["aria-labelledby"]=e}else c["aria-label"]=this._getDefaultLabel()}else c["aria-label"]=this._getDefaultLabel();e={className:d};a["data-testid"]&&(e["data-testid"]=a["data-testid"]);this._wrapper=b("JSXDOM").div(c,b("JSXDOM").div(e,this._innerContent));a.width!=null&&this.setWidth(a.width);a.height!=null&&this.setHeight(a.height);return b("JSXDOM").div({className:"_10"},this._wrapper)};d._getDefaultLabel=function(){return h._("Dialog content")};d.getContentRoot=function(){return this._wrapper};d.getInnerContent=function(){return this._innerContent};d.updatePosition=function(){var a=b("Vector").getElementDimensions(this._wrapper);a=b("DialogPosition").calculateTopMargin(a.x,a.y,this._fixedTopPosition,(a=this._ignoreFixedTopInShortViewport)!=null?a:!1,(a=this._isVerticallyCentered)!=null?a:!1);b("Style").set(this._wrapper,"margin-top",a+"px");this.inform("update_position",{type:"DialogX",top:a});return!0};d.setWidth=function(a){if(a==="100%")this._width=void 0,b("Style").set(this._wrapper,"width","");else{a=Math.floor(a);if(a===this._width)return;this._width=a;b("Style").set(this._wrapper,"width",a+"px")}};d.getWidth=function(){return this._width};d.setHeight=function(a){a=Math.floor(a);if(a===this._height)return;this._height=a;b("Style").set(this._wrapper,"height",a+"px")};d.getFixedTopPosition=function(){return this._fixedTopPosition};d.shouldIgnoreFixedTopInShortViewport=function(){return this._ignoreFixedTopInShortViewport};return c}(b("Layer"));e.exports=a;var i=function(){function a(a){this._subscription=null,this._resize=null,this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe(["show","hide"],function(a){a==="show"?(this._attach(),b("Arbiter").inform("layer_shown",{type:"DialogX"})):(this._detach(),b("Arbiter").inform("layer_hidden",{type:"DialogX"}))}.bind(this))};c.disable=function(){var a;(a=this._subscription)==null?void 0:a.unsubscribe();this._subscription=null;this._resize&&this._detach()};c._attach=function(){this._layer.updatePosition(),this._resize=b("Event").listen(window,"resize",b("debounce")(this._layer.updatePosition.bind(this._layer)))};c._detach=function(){var a;(a=this._resize)==null?void 0:a.remove();this._resize=null};return a}()}),null);
__d("LayerHideOnBlur",["LayerHideSources","requestAnimationFrame"],(function(a,b,c,d,e,f){a=function(){function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscriptions=[this._layer.subscribe("show",this._attach.bind(this)),this._layer.subscribe("hide",this._detach.bind(this))],this._layer.isShown()&&this._attach()};c.disable=function(){this._detach();while(this._subscriptions&&this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._subscriptions=null};c._detach=function(){this._onBlur&&this._onBlur.unsubscribe(),this._onBlur=null};c._attach=function(){var a=this;this._onBlur=this._layer.subscribe("blur",function(){b("requestAnimationFrame")(function(){a._layer.hide(b("LayerHideSources").BLUR)});return!1})};return a}();e.exports=a;Object.assign(a.prototype,{_subscriptions:null,_onBlur:null})}),null);
__d("LayerHideOnEscape",["Event","Keys","LayerHideSources"],(function(a,b,c,d,e,f){a=function(){function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe("key",this.handle.bind(this))};c.disable=function(){this._subscription!=null&&this._subscription.unsubscribe(),this._subscription=null};c.handle=function(a,c){if(b("Event").getKeyCode(c)===b("Keys").ESC){this._layer.hide(b("LayerHideSources").ESCAPE);return!1}return void 0};return a}();e.exports=a;Object.assign(a.prototype,{_subscription:null})}),null);
__d("AbstractDialog.react",["DialogX","LayerHideOnBlur","LayerHideOnEscape","ReactDOM","prop-types","react"],(function(a,b,c,d,e,f){f.createSpec=a;var g;g||b("react");function a(a){var c;return{displayName:a.displayName,propTypes:{behaviors:(c=b("prop-types")).object,className:c.string,"data-testid":c.string,modal:c.bool,autofocus:c.bool,autohide:c.number,width:c.oneOfType([c.number,c.string]),label:c.node,labelledBy:c.string,titleID:c.string,titleClass:c.string,causalElement:c.object,causalElementRef:c.func,shown:c.bool,layerHideOnBlur:c.bool,hideOnEscape:c.bool,isStrictlyControlled:c.bool,onHide:c.func,onToggle:c.func,fixedTopPosition:c.number,isVerticallyCentered:c.bool},createLayer:function(c){var d=this.props.className;d=babelHelpers["extends"]({"data-testid":this.props["data-testid"]?this.props["data-testid"]:void 0,width:this.props.width,xui:!0,autofocus:this.props.autofocus,autohide:this.props.autohide,classNames:d?d.split(" "):null,label:this.props.label,labelledBy:this.props.labelledBy,isStrictlyControlled:this.props.isStrictlyControlled,isVerticallyCentered:this.props.isVerticallyCentered,titleID:this.props.titleID,titleClass:this.props.titleClass,causalElement:this._getCausalElement(),fixedTopPosition:this.props.fixedTopPosition},a||{});var e=babelHelpers["extends"]({},a.addedBehaviors,this.props.behaviors);this.props.layerHideOnBlur!==!1&&(e.LayerHideOnBlur=b("LayerHideOnBlur"));(this.props.hideOnEscape===!0||this.props.hideOnEscape!==!1&&a.hideOnEscape===!0)&&(e.LayerHideOnEscape=b("LayerHideOnEscape"));d.addedBehaviors=this.enumerateBehaviors(e);e=new(b("DialogX"))(d,c);e.conditionShow(this.props.shown);return e},receiveProps:function(a,b){this.updateBehaviors(b.behaviors,a.behaviors),this.layer&&(this.layer.setCausalElement(this._getCausalElement()),this.layer.conditionShow(a.shown),this.layer.setWidth(a.width),a.shown&&this.layer.updatePosition())},updatePosition:function(){var a;(a=this.layer)==null?void 0:a.updatePosition()},_getCausalElement:function(){var a;this.props.causalElementRef?a=b("ReactDOM").findDOMNode(this.props.causalElementRef()):a=this.props.causalElement;return a}}}}),null);
__d("LayerFadeOnShow",["Bootloader","Run","emptyFunction","ifRequired"],(function(a,b,c,d,e,f){a=function(){function a(a){this._layer=a,b("Run").onAfterLoad(function(){b("Bootloader").loadModules(["CSSFade"],b("emptyFunction"),"LayerFadeOnShow")})}var c=a.prototype;c.enable=function(){this._subscriptions=[this._layer.subscribe("show",this._animate.bind(this))]};c.disable=function(){if(this._subscriptions){while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._subscriptions=null}};c._getDuration=function(){return 100};c._animate=function(){var a=this,c=this._layer.getRoot();b("ifRequired")("CSSFade",function(b){b.show(c,{duration:a._getDuration()})},function(){})};a.forDuration=function(c){var d=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}return a}(a);d.prototype._getDuration=b("emptyFunction").thatReturns(c);return d};return a}();e.exports=a;Object.assign(a.prototype,{_subscriptions:null})}),null);
__d("XUIDialog.react",["csx","AbstractDialog.react","LayerFadeOnShow","ReactLayer"],(function(a,b,c,d,e,f,g){a=b("ReactLayer").createClass(b("AbstractDialog.react").createSpec({displayName:"XUIDialog",addedBehaviors:{LayerFadeOnShow:b("LayerFadeOnShow")},titleClass:"._52c9",hideOnEscape:!0}));e.exports=a}),null);