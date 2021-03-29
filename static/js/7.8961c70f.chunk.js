(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[7],{102:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(35);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,s=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(l){i=!0,s=l}finally{try{r||null==o.return||o.return()}finally{if(i)throw s}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},103:function(t,e,n){"use strict";var r=n(0),i=n.n(r);e.a=i.a.createContext(null)},117:function(t,e,n){"use strict";var r=n(4),i=n(10),s=n(13);n(5);function a(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var o=n(0),l=n.n(o),c=n(25),u=n.n(c),p=!1,d=n(103),f="unmounted",h="exited",E="entering",m="entered",x="exiting",v=function(t){function e(e,n){var r;r=t.call(this,e,n)||this;var i,s=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?s?(i=h,r.appearStatus=E):i=m:i=e.unmountOnExit||e.mountOnEnter?f:h,r.state={status:i},r.nextCallback=null,r}Object(s.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===f?{status:h}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==E&&n!==m&&(e=E):n!==E&&n!==m||(e=x)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!==typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===E?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===h&&this.setState({status:f})},n.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,i=this.props.nodeRef?[r]:[u.a.findDOMNode(this),r],s=i[0],a=i[1],o=this.getTimeouts(),l=r?o.appear:o.enter;!t&&!n||p?this.safeSetState({status:m},(function(){e.props.onEntered(s)})):(this.props.onEnter(s,a),this.safeSetState({status:E},(function(){e.props.onEntering(s,a),e.onTransitionEnd(l,(function(){e.safeSetState({status:m},(function(){e.props.onEntered(s,a)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:u.a.findDOMNode(this);e&&!p?(this.props.onExit(r),this.safeSetState({status:x},(function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:h},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:h},(function(){t.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:u.a.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],s=i[0],a=i[1];this.props.addEndListener(s,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===f)return null;var e=this.props,n=e.children,r=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,Object(i.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return l.a.createElement(d.a.Provider,{value:null},"function"===typeof n?n(t,r):l.a.cloneElement(l.a.Children.only(n),r))},e}(l.a.Component);function b(){}v.contextType=d.a,v.propTypes={},v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:b,onEntering:b,onEntered:b,onExit:b,onExiting:b,onExited:b},v.UNMOUNTED=f,v.EXITED=h,v.ENTERING=E,v.ENTERED=m,v.EXITING=x;var g=v,C=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return r=e,void((n=t).classList?n.classList.remove(r):"string"===typeof n.className?n.className=a(n.className,r):n.setAttribute("class",a(n.className&&n.className.baseVal||"",r)));var n,r}))},N=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){var r=e.resolveArguments(t,n),i=r[0],s=r[1];e.removeClasses(i,"exit"),e.addClass(i,s?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var r=e.resolveArguments(t,n),i=r[0],s=r[1]?"appear":"enter";e.addClass(i,s,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var r=e.resolveArguments(t,n),i=r[0],s=r[1]?"appear":"enter";e.removeClasses(i,s),e.addClass(i,s,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"appear"),e.removeClasses(n,"enter"),e.addClass(n,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){var n=e.resolveArguments(t)[0];e.addClass(n,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"exit"),e.addClass(n,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.resolveArguments=function(t,n){return e.props.nodeRef?[e.props.nodeRef.current,t]:[t,n]},e.getClassNames=function(t){var n=e.props.classNames,r="string"===typeof n,i=r?""+(r&&n?n+"-":"")+t:n[t];return{baseClassName:i,activeClassName:r?i+"-active":n[t+"Active"],doneClassName:r?i+"-done":n[t+"Done"]}},e}Object(s.a)(e,t);var n=e.prototype;return n.addClass=function(t,e,n){var r=this.getClassNames(e)[n+"ClassName"],i=this.getClassNames("enter").doneClassName;"appear"===e&&"done"===n&&i&&(r+=" "+i),"active"===n&&t&&t.scrollTop,r&&(this.appliedClasses[e][n]=r,function(t,e){t&&e&&e.split(" ").forEach((function(e){return r=e,void((n=t).classList?n.classList.add(r):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,r)||("string"===typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(t,r))},n.removeClasses=function(t,e){var n=this.appliedClasses[e],r=n.base,i=n.active,s=n.done;this.appliedClasses[e]={},r&&C(t,r),i&&C(t,i),s&&C(t,s)},n.render=function(){var t=this.props,e=(t.classNames,Object(i.a)(t,["classNames"]));return l.a.createElement(g,Object(r.a)({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(l.a.Component);N.defaultProps={classNames:""},N.propTypes={};e.a=N},118:function(t,e,n){"use strict";var r=n(10),i=n(4);var s=n(13),a=(n(5),n(0)),o=n.n(a),l=n(103);function c(t,e){var n=Object.create(null);return t&&a.Children.map(t,(function(t){return t})).forEach((function(t){n[t.key]=function(t){return e&&Object(a.isValidElement)(t)?e(t):t}(t)})),n}function u(t,e,n){return null!=n[e]?n[e]:t.props[e]}function p(t,e,n){var r=c(t.children),i=function(t,e){function n(n){return n in e?e[n]:t[n]}t=t||{},e=e||{};var r,i=Object.create(null),s=[];for(var a in t)a in e?s.length&&(i[a]=s,s=[]):s.push(a);var o={};for(var l in e){if(i[l])for(r=0;r<i[l].length;r++){var c=i[l][r];o[i[l][r]]=n(c)}o[l]=n(l)}for(r=0;r<s.length;r++)o[s[r]]=n(s[r]);return o}(e,r);return Object.keys(i).forEach((function(s){var o=i[s];if(Object(a.isValidElement)(o)){var l=s in e,c=s in r,p=e[s],d=Object(a.isValidElement)(p)&&!p.props.in;!c||l&&!d?c||!l||d?c&&l&&Object(a.isValidElement)(p)&&(i[s]=Object(a.cloneElement)(o,{onExited:n.bind(null,o),in:p.props.in,exit:u(o,"exit",t),enter:u(o,"enter",t)})):i[s]=Object(a.cloneElement)(o,{in:!1}):i[s]=Object(a.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:u(o,"exit",t),enter:u(o,"enter",t)})}})),i}var d=Object.values||function(t){return Object.keys(t).map((function(e){return t[e]}))},f=function(t){function e(e,n){var r,i=(r=t.call(this,e,n)||this).handleExited.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}Object(s.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(t,e){var n,r,i=e.children,s=e.handleExited;return{children:e.firstRender?(n=t,r=s,c(n.children,(function(t){return Object(a.cloneElement)(t,{onExited:r.bind(null,t),in:!0,appear:u(t,"appear",n),enter:u(t,"enter",n),exit:u(t,"exit",n)})}))):p(t,i,s),firstRender:!1}},n.handleExited=function(t,e){var n=c(this.props.children);t.key in n||(t.props.onExited&&t.props.onExited(e),this.mounted&&this.setState((function(e){var n=Object(i.a)({},e.children);return delete n[t.key],{children:n}})))},n.render=function(){var t=this.props,e=t.component,n=t.childFactory,i=Object(r.a)(t,["component","childFactory"]),s=this.state.contextValue,a=d(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===e?o.a.createElement(l.a.Provider,{value:s},a):o.a.createElement(l.a.Provider,{value:s},o.a.createElement(e,i,a))},e}(o.a.Component);f.propTypes={},f.defaultProps={component:"div",childFactory:function(t){return t}};e.a=f}}]);
//# sourceMappingURL=7.8961c70f.chunk.js.map