(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b5f2038c"],{"07419":function(t,e,n){"use strict";n.r(e);var r=n("0122"),a=n("c964"),o=n("f3f3"),i=(n("498a"),n("d81d"),n("a434"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("159b"),n("b0c0"),n("131a"),n("fb6a"),n("2f62")),c=n("90e7");function u(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */u=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(e){l=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o,i,c,u;e=e&&e.prototype instanceof h?e:h,e=Object.create(e.prototype),r=new w(r||[]);return a(e,"_invoke",{value:(o=t,i=n,c=r,u="suspendedStart",function(t,e){if("executing"===u)throw new Error("Generator is already running");if("completed"===u){if("throw"===t)throw e;return k()}for(c.method=t,c.arg=e;;){var n=c.delegate;if(n&&(n=function t(e,n){var r=n.method,a=e.iterator[r];return void 0===a?(n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=void 0,t(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m):(r=f(a,e.iterator,n.arg),"throw"===r.type?(n.method="throw",n.arg=r.arg,n.delegate=null,m):(a=r.arg,a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)))}(n,c),n)){if(n===m)continue;return n}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if("suspendedStart"===u)throw u="completed",c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);if(u="executing",n=f(o,i,c),"normal"===n.type){if(u=c.done?"completed":"suspendedYield",n.arg===m)continue;return{value:n.arg,done:c.done}}"throw"===n.type&&(u="completed",c.method="throw",c.arg=n.arg)}})}),e}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var m={};function h(){}function g(){}function p(){}o={};var b=(l(o,i,(function(){return this})),Object.getPrototypeOf),y=(b=b&&b(b(x([]))),b&&b!==e&&n.call(b,i)&&(o=b),p.prototype=h.prototype=Object.create(o));function v(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){var o;a(this,"_invoke",{value:function(a,i){function c(){return new e((function(o,c){!function a(o,i,c,u){var s;o=f(t[o],t,i);if("throw"!==o.type)return(i=(s=o.arg).value)&&"object"==Object(r.a)(i)&&n.call(i,"__await")?e.resolve(i.__await).then((function(t){a("next",t,c,u)}),(function(t){a("throw",t,c,u)})):e.resolve(i).then((function(t){s.value=t,c(s)}),(function(t){return a("throw",t,c,u)}));u(o.arg)}(a,i,o,c)}))}return o=o?o.then(c,c):c()}})}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function x(t){if(t){var e,r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return e=-1,(r=function r(){for(;++e<t.length;)if(n.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r}).next=r}return{next:k}}function k(){return{value:void 0,done:!0}}return a(y,"constructor",{value:g.prototype=p,configurable:!0}),a(p,"constructor",{value:g,configurable:!0}),g.displayName=l(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){return t="function"==typeof t&&t.constructor,!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,s,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},v(O.prototype),l(O.prototype,c,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new O(d(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},v(y),l(y,s,"Generator"),l(y,i,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e,n=Object(t),r=[];for(e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=x,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;0<=a;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n,r,a=this.tryEntries[e];if(a.tryLoc===t)return"throw"===(n=a.completion).type&&(r=n.arg,_(a)),r}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},t}o={data:function(){return{addlangModal:!1,traTabLoading:!1,langType:{},formValidate:{is_admin:0,type_id:1,remarks:"",page:1,limit:20},total:0,FormLoading:!0,loading:!1,ruleValidate:{code:[{required:!0,message:"请输入状态码/文字",trigger:"blur"}],remarks:[{required:!0,message:"请输入文字",trigger:"blur"}]},columns:[{title:"编号",key:"id",width:80},{title:"原语句",key:"remarks",minWidth:250},{title:"对应语言翻译",key:"lang_explain",minWidth:250},{title:"状态码/文字(接口/页面调用参考)",key:"code",minWidth:100},{title:"语言类型",key:"language_name",minWidth:100},{title:"操作",slot:"action",fixed:"right",width:100}],langColumns:[{title:"语言类型",key:"language_name",width:120},{title:"对应语言翻译",slot:"lang_explain",minWidth:250}],langData:[],langFormData:{is_admin:0,code:"",remarks:"",edit:0,list:[]},tabList:[],FromData:null,extractId:0,code:null}},computed:Object(o.a)(Object(o.a)({},Object(i.d)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:80},labelPosition:function(){return this.isMobile?"top":"left"}}),mounted:function(){this.getList()},methods:{translate:function(){var t=this;if(!this.langFormData.remarks.trim())return this.$Message.warning("请先输入翻译内容");this.traTabLoading=!0,Object(c.M)({text:this.langFormData.remarks}).then((function(e){t.langFormData.list.map((function(t){t.lang_explain=e.data[t.type_id]})),t.traTabLoading=!1})).catch((function(e){t.traTabLoading=!1,t.$Message.error(e.msg)}))},add:function(){this.langFormData.list=this.langType.langType.map((function(t){return{language_name:t.title,lang_explain:"",remarks:"",type_id:t.value}})),this.addlangModal=!0},ok:function(){var t=this;if(!this.langFormData.remarks.trim())return this.FormLoading=!1,this.$nextTick((function(){t.FormLoading=!0})),this.$Message.error("请先输入语言说明");Object(c.L)(this.langFormData).then((function(e){t.addlangModal=!1,t.$Message.success(e.msg),t.getList()})).catch((function(e){t.FormLoading=!1,t.$nextTick((function(){t.FormLoading=!0})),t.$Message.error(e.msg)}))},edit:function(t){var e=this;this.langFormData.is_admin=this.formValidate.is_admin,this.code=t.code,Object(c.J)({code:t.code}).then((function(t){e.langFormData.list=t.data.list,e.langFormData.code=t.data.code,e.langFormData.remarks=t.data.remarks,e.langFormData.edit=1,e.addlangModal=!0})).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},del:function(t,e,n){var r=this;e={title:e,num:n,url:"setting/lang_code/del/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){r.$Message.success(t.msg),r.tabList.splice(n,1)})).catch((function(t){r.$Message.error(t.msg)}))},modalChange:function(t){t||(this.langFormData={is_admin:0,name:"",code:"",list:[]},this.code=null)},selChange:function(){this.formValidate.page=1,this.getList()},getList:function(){var t=this;this.loading=!0,Object(c.K)(this.formValidate).then(function(){var e=Object(a.a)(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!1,t.tabList=n.data.list,t.total=n.data.count,t.langType=n.data.langType;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()}}},n("6bd2"),i=n("2877"),n=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Form",{ref:"formValidate",staticClass:"tabform",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[n("Row",{attrs:{gutter:24,type:"flex"}},[n("Col",{attrs:{span:"24"}},[n("FormItem",{attrs:{label:"语言分类："}},[n("RadioGroup",{staticClass:"mr15",attrs:{type:"button"},on:{"on-change":t.selChange},model:{value:t.formValidate.is_admin,callback:function(e){t.$set(t.formValidate,"is_admin",e)},expression:"formValidate.is_admin"}},t._l(t.langType.isAdmin,(function(e,r){return n("Radio",{key:r,attrs:{label:e.value}},[t._v(t._s(e.title)+"\n              ")])})),1)],1)],1),n("Col",{attrs:{span:"24"}},[n("FormItem",{attrs:{label:"语言类型："}},[n("RadioGroup",{staticClass:"mr15",attrs:{type:"button"},on:{"on-change":t.selChange},model:{value:t.formValidate.type_id,callback:function(e){t.$set(t.formValidate,"type_id",e)},expression:"formValidate.type_id"}},t._l(t.langType.langType,(function(e,r){return n("Radio",{key:r,attrs:{label:e.value}},[t._v(t._s(e.title)+"\n              ")])})),1)],1)],1),n("Col",{attrs:{span:"24"}},[n("FormItem",{attrs:{label:"搜索："}},[n("div",{staticClass:"acea-row row-middle"},[n("Input",{staticStyle:{width:"30%"},attrs:{search:"","enter-button":"",placeholder:"请输入语言备注","element-id":"name"},on:{"on-search":t.selChange},model:{value:t.formValidate.remarks,callback:function(e){t.$set(t.formValidate,"remarks",e)},expression:"formValidate.remarks"}})],1)])],1)],1)],1)],1),n("Alert",{staticClass:"mt10",attrs:{closable:"true"}},[t._v("\n    使用说明\n    "),n("template",{slot:"desc"},[t._v("\n      1、前端页面：添加用户端页面语言，添加完成之后状态码为中文文字，前端页面使用 $t(`xxxx`)，js文件中使用\n      this.t(`xxxx`) 或者使用 that.t(`xxxx`)"),n("br"),t._v("\n      2、后端接口：添加后端接口语言，添加完成之后状态码为6位数字，后台抛错或者控制器返回文字的时候直接填写状态码数字\n    ")])],2),n("Card",{attrs:{bordered:!1,"dis-hover":""}},[n("Row",{staticClass:"mb15",attrs:{type:"flex"}},[n("Col",[n("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加语句")])],1)],1),n("Table",{ref:"table",staticClass:"ivu-mt",attrs:{columns:t.columns,data:t.tabList,loading:t.loading,"no-data-text":"暂无数据","no-filtered-data-text":"暂无筛选结果"},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.row,a=e.index;return[n("a",{on:{click:function(e){return t.edit(r)}}},[t._v("编辑")]),n("Divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(e){return t.del(r,"删除语言",a)}}},[t._v("删除")])]}}])}),n("div",{staticClass:"acea-row row-right page"},[n("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1),n("Modal",{attrs:{width:"750",title:"添加需要翻译的语句",loading:t.FormLoading},on:{"on-ok":t.ok,"on-cancel":function(e){t.addlangModal=!1},"on-visible-change":t.modalChange},model:{value:t.addlangModal,callback:function(e){t.addlangModal=e},expression:"addlangModal"}},[n("Form",{ref:"langFormData",attrs:{model:t.langFormData,rules:t.ruleValidate}},[n("FormItem",{staticClass:"mb20",attrs:{label:"应用端：","label-width":120}},[n("RadioGroup",{staticClass:"mr15",attrs:{type:"button"},model:{value:t.langFormData.is_admin,callback:function(e){t.$set(t.langFormData,"is_admin",e)},expression:"langFormData.is_admin"}},t._l(t.langType.isAdmin,(function(e,r){return n("Radio",{key:r,attrs:{label:e.value}},[t._v(t._s(e.title))])})),1)],1),n("Input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:t.langFormData.edit,callback:function(e){t.$set(t.langFormData,"edit",e)},expression:"langFormData.edit"}}),n("FormItem",{staticClass:"mb20",attrs:{label:"需要翻译的语句：",prop:"remarks"}},[n("Input",{staticStyle:{width:"330px"},attrs:{placeholder:"请输入需要添加翻译的语句",search:"","enter-button":"翻译"},on:{"on-search":t.translate},model:{value:t.langFormData.remarks,callback:function(e){t.$set(t.langFormData,"remarks",e)},expression:"langFormData.remarks"}})],1),n("FormItem",{staticClass:"mb20",attrs:{prop:"remark"}},[n("Table",{ref:"langTable",attrs:{loading:t.traTabLoading,columns:t.langColumns,data:t.langFormData.list,"no-data-text":"暂无数据","no-filtered-data-text":"暂无筛选结果"},scopedSlots:t._u([{key:"lang_explain",fn:function(e){e.row;var r=e.index;return[n("Input",{staticClass:"priceBox",model:{value:t.langFormData.list[r].lang_explain,callback:function(e){t.$set(t.langFormData.list[r],"lang_explain",e)},expression:"langFormData.list[index].lang_explain"}})]}}])})],1)],1)],1)],1)}),[],!1,null,"1e973ab0",null),e.default=n.exports},"34da":function(t,e,n){},"6bd2":function(t,e,n){"use strict";var r=n("34da");n.n(r).a},"90e7":function(t,e,n){"use strict";n.d(e,"v",(function(){return o})),n.d(e,"k",(function(){return i})),n.d(e,"Kb",(function(){return c})),n.d(e,"Jb",(function(){return u})),n.d(e,"j",(function(){return s})),n.d(e,"gb",(function(){return l})),n.d(e,"Ob",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return m})),n.d(e,"Z",(function(){return h})),n.d(e,"fb",(function(){return g})),n.d(e,"lb",(function(){return p})),n.d(e,"D",(function(){return b})),n.d(e,"Xb",(function(){return y})),n.d(e,"rb",(function(){return v})),n.d(e,"qb",(function(){return O})),n.d(e,"A",(function(){return j})),n.d(e,"B",(function(){return _})),n.d(e,"m",(function(){return w})),n.d(e,"hb",(function(){return x})),n.d(e,"n",(function(){return k})),n.d(e,"kb",(function(){return L})),n.d(e,"jb",(function(){return F})),n.d(e,"ib",(function(){return T})),n.d(e,"mb",(function(){return E})),n.d(e,"ob",(function(){return D})),n.d(e,"W",(function(){return C})),n.d(e,"pb",(function(){return M})),n.d(e,"Bb",(function(){return G})),n.d(e,"I",(function(){return V})),n.d(e,"Ab",(function(){return $})),n.d(e,"r",(function(){return P})),n.d(e,"p",(function(){return I})),n.d(e,"q",(function(){return S})),n.d(e,"s",(function(){return q})),n.d(e,"t",(function(){return N})),n.d(e,"sb",(function(){return R})),n.d(e,"Wb",(function(){return W})),n.d(e,"tb",(function(){return A})),n.d(e,"Rb",(function(){return U})),n.d(e,"ub",(function(){return B})),n.d(e,"cb",(function(){return J})),n.d(e,"Tb",(function(){return z})),n.d(e,"db",(function(){return K})),n.d(e,"ab",(function(){return Y})),n.d(e,"bb",(function(){return H})),n.d(e,"T",(function(){return Q})),n.d(e,"C",(function(){return X})),n.d(e,"G",(function(){return Z})),n.d(e,"F",(function(){return tt})),n.d(e,"x",(function(){return et})),n.d(e,"H",(function(){return nt})),n.d(e,"Vb",(function(){return rt})),n.d(e,"u",(function(){return at})),n.d(e,"Sb",(function(){return ot})),n.d(e,"Ub",(function(){return it})),n.d(e,"z",(function(){return ct})),n.d(e,"E",(function(){return ut})),n.d(e,"y",(function(){return st})),n.d(e,"w",(function(){return lt})),n.d(e,"S",(function(){return dt})),n.d(e,"h",(function(){return ft})),n.d(e,"e",(function(){return mt})),n.d(e,"f",(function(){return ht})),n.d(e,"Lb",(function(){return gt})),n.d(e,"Mb",(function(){return pt})),n.d(e,"Nb",(function(){return bt})),n.d(e,"nb",(function(){return yt})),n.d(e,"Cb",(function(){return vt})),n.d(e,"U",(function(){return Ot})),n.d(e,"Eb",(function(){return jt})),n.d(e,"Db",(function(){return _t})),n.d(e,"Fb",(function(){return wt})),n.d(e,"Gb",(function(){return xt})),n.d(e,"Hb",(function(){return kt})),n.d(e,"Ib",(function(){return Lt})),n.d(e,"Pb",(function(){return Ft})),n.d(e,"Qb",(function(){return Tt})),n.d(e,"V",(function(){return Et})),n.d(e,"g",(function(){return Dt})),n.d(e,"vb",(function(){return Ct})),n.d(e,"yb",(function(){return Mt})),n.d(e,"a",(function(){return Gt})),n.d(e,"b",(function(){return Vt})),n.d(e,"wb",(function(){return $t})),n.d(e,"zb",(function(){return Pt})),n.d(e,"xb",(function(){return It})),n.d(e,"l",(function(){return St})),n.d(e,"X",(function(){return qt})),n.d(e,"Y",(function(){return Nt})),n.d(e,"eb",(function(){return Rt})),n.d(e,"Q",(function(){return Wt})),n.d(e,"P",(function(){return At})),n.d(e,"K",(function(){return Ut})),n.d(e,"J",(function(){return Bt})),n.d(e,"L",(function(){return Jt})),n.d(e,"O",(function(){return zt})),n.d(e,"N",(function(){return Kt})),n.d(e,"R",(function(){return Yt})),n.d(e,"M",(function(){return Ht})),n.d(e,"i",(function(){return Qt})),n.d(e,"o",(function(){return Xt})),n("99af");var r=n("6b6c"),a=n("c276");function o(t){return Object(r.a)({url:"setting/config/header_basics",method:"get",params:t})}function i(t,e){return Object(r.a)({url:e,method:"get",params:t})}function c(t){return Object(r.a)({url:t.url,method:"get",params:t.data})}function u(){return Object(r.a)({url:"notify/sms/temp/create",method:"get"})}function s(t){return Object(r.a)({url:"serve/login",method:"post",data:t})}function l(t){return Object(r.a)({url:"serve/modify",method:"post",data:t})}function d(t){return Object(r.a)({url:"serve/update_phone",method:"post",data:t})}function f(t){return Object(r.a)({url:"serve/captcha",method:"post",data:t})}function m(t){return Object(r.a)({url:"serve/checkCode",method:"post",data:t})}function h(t){return Object(r.a)({url:"serve/register",method:"post",data:t})}function g(){return Object(r.a)({url:"serve/info",method:"get"})}function p(t){return Object(r.a)({url:"serve/sms/sign",method:"PUT",data:t})}function b(t){return Object(r.a)({url:"app/wechat/kefu/login/".concat(t),method:"get"})}function y(t){return Object(r.a)({url:"app/wechat/speechcraft",method:"get",params:t})}function v(t){return Object(r.a)({url:"app/wechat/speechcraft/".concat(t,"/edit"),method:"get"})}function O(){return Object(r.a)({url:"app/wechat/speechcraft/create",method:"get"})}function j(t){return Object(r.a)({url:"app/feedback",method:"get",params:t})}function _(t){return Object(r.a)({url:"app/feedback/".concat(t,"/edit"),method:"get"})}function w(){return Object(r.a)({url:"serve/export_all",method:"get"})}function x(){return Object(r.a)({url:"serve/open",method:"get"})}function k(t){return Object(r.a)({url:"serve/export_temp",method:"get",params:t})}function L(t){return Object(r.a)({url:"serve/record",method:"get",params:t})}function F(t){return Object(r.a)({url:"serve/open",method:"get",params:t})}function T(t){return Object(r.a)({url:"serve/opn_express",method:"post",data:t})}function E(t){return Object(r.a)({url:"serve/sms/open",method:"get",params:t})}function D(t){return Object(r.a)({url:"serve/meal_list",method:"get",params:t})}function C(t){return Object(r.a)({url:"serve/pay_meal",method:"post",data:t})}function M(t){return Object(r.a)({url:"notify/sms/record",method:"get",params:t})}function G(){return Object(r.a)({url:"merchant/store",method:"GET"})}function V(){return Object(r.a)({url:"merchant/store/address",method:"GET"})}function $(t){return Object(r.a)({url:"merchant/store/".concat(t.id),method:"POST",data:t})}function P(t){return Object(r.a)({url:"freight/express",method:"get",params:t})}function I(){return Object(r.a)({url:"/freight/express/create",method:"get"})}function S(t){return Object(r.a)({url:"freight/express/".concat(t,"/edit"),method:"get"})}function q(t){return Object(r.a)({url:"freight/express/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function N(){return Object(r.a)({url:"freight/express/sync_express",method:"get"})}function R(){return Object(r.a)({url:"app/wechat/speechcraftcate",method:"get"})}function W(){return Object(r.a)({url:"app/wechat_qrcode/cate/list",method:"get"})}function A(){return Object(r.a)({url:"app/wechat/speechcraftcate/create",method:"get"})}function U(t){return Object(r.a)({url:"app/wechat_qrcode/cate/create/".concat(t),method:"get"})}function B(t){return Object(r.a)({url:"app/wechat/speechcraftcate/".concat(t,"/edit"),method:"get"})}function J(t){return Object(r.a)({url:"setting/role",method:"GET",params:t})}function z(t){return Object(r.a)({url:"app/wechat_qrcode/list",method:"GET",params:t})}function K(t){return Object(r.a)({url:"setting/role/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function Y(t){return Object(r.a)({url:"setting/role/".concat(t.id),method:"post",data:t})}function H(t){return Object(r.a)({url:"setting/role/".concat(t,"/edit"),method:"get"})}function Q(){return Object(r.a)({url:"setting/role/create",method:"get"})}function X(t){return Object(r.a)({url:"app/wechat/kefu",method:"get",params:t})}function Z(t){return Object(r.a)({url:"app/wechat/kefu/create",method:"get",params:t})}function tt(){return Object(r.a)({url:"app/wechat/kefu/add",method:"get"})}function et(t){return Object(r.a)({url:"app/wechat/kefu",method:"post",data:t})}function nt(t){return Object(r.a)({url:"app/wechat/kefu/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function rt(t){return Object(r.a)({url:"app/wechat_qrcode/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function at(t){return Object(r.a)({url:"app/wechat_qrcode/user_list/".concat(t.id),method:"get",params:t})}function ot(t){return Object(r.a)({url:"app/wechat_qrcode/info/".concat(t),method:"get"})}function it(t,e){return Object(r.a)({url:"app/wechat_qrcode/save/".concat(t),method:"post",data:e})}function ct(t){return Object(r.a)({url:"app/wechat/kefu/".concat(t,"/edit"),method:"GET"})}function ut(t,e){return Object(r.a)({url:"app/wechat/kefu/record/".concat(e),method:"GET",params:t})}function st(t){return Object(r.a)({url:"app/wechat/kefu/chat_list",method:"GET",params:t})}function lt(){return Object(r.a)({url:"notify/sms/is_login",method:"GET"})}function dt(){return Object(r.a)({url:"notify/sms/logout",method:"GET"})}function ft(t){return Object(r.a)({url:"setting/city/list/".concat(t),method:"get"})}function mt(t){return Object(r.a)({url:"setting/city/add/".concat(t),method:"get"})}function ht(t){return Object(r.a)({url:"setting/city/".concat(t,"/edit"),method:"get"})}function gt(t){return Object(r.a)({url:"setting/shipping_templates/list",method:"get",params:t})}function pt(t){return Object(r.a)({url:"setting/shipping_templates/city_list",method:"get"})}function bt(t,e){return Object(r.a)({url:"setting/shipping_templates/save/".concat(t),method:"post",data:e})}function yt(t){return Object(r.a)({url:"setting/shipping_templates/".concat(t,"/edit"),method:"get"})}function vt(){return Object(r.a)({url:"merchant/store/get_header",method:"get"})}function Ot(t){return Object(r.a)({url:"merchant/store",method:"get",params:t})}function jt(t,e){return Object(r.a)({url:"merchant/store/set_show/".concat(t,"/").concat(e),method:"put"})}function _t(t){return Object(r.a)({url:"merchant/store/get_info/".concat(t),method:"get"})}function wt(t){return Object(r.a)({url:"merchant/store_staff",method:"get",params:t})}function xt(){return Object(r.a)({url:"merchant/store_staff/create",method:"get"})}function kt(t){return Object(r.a)({url:"merchant/store_staff/".concat(t,"/edit"),method:"get"})}function Lt(t,e){return Object(r.a)({url:"merchant/store_staff/set_show/".concat(t,"/").concat(e),method:"put"})}function Ft(t){return Object(r.a)({url:"merchant/verify_order",method:"get",params:t})}function Tt(t){return Object(r.a)({url:"merchant/verify/spread_info/".concat(t),method:"get"})}function Et(){return Object(r.a)({url:"merchant/store_list",method:"get"})}function Dt(){return Object(r.a)({url:"setting/city/clean_cache",method:"get"})}function Ct(){return Object(r.a)({url:"system/config/storage/config",method:"get"})}function Mt(t){return Object(r.a)({url:"system/config/storage/config",method:"post",data:t})}function Gt(t){return Object(r.a)({url:"system/config/storage/form/".concat(t),method:"get"})}function Vt(t){return Object(r.a)({url:"system/config/storage/create/".concat(t),method:"get"})}function $t(t){return Object(r.a)({url:"system/config/storage",method:"get",params:t})}function Pt(t){return Object(r.a)({url:"system/config/storage/synch/".concat(t),method:"put"})}function It(t){return Object(r.a)({url:"system/config/storage/status/".concat(t),method:"put"})}function St(t){return Object(r.a)({url:"system/config/storage/domain/".concat(t),method:"get"})}function qt(){return Object(r.a)({url:"setting/config_list/31",method:"get"})}function Nt(t){return Object(r.a)({url:"setting/config/save_basics",method:"post",data:t})}function Rt(t){return Object(r.a)({url:"system/config/storage/save_type/".concat(t),method:"get"})}function Wt(t){return Object(r.a)({url:"setting/lang_type/list",method:"get",params:t})}function At(t){return Object(r.a)({url:"setting/lang_type/form/".concat(t),method:"get"})}function Ut(t){return Object(r.a)({url:"setting/lang_code/list",method:"get",params:t})}function Bt(t){return Object(r.a)({url:"setting/lang_code/info",method:"get",params:t})}function Jt(t){return Object(r.a)({url:"setting/lang_code/save",method:"post",data:t})}function zt(t){return Object(r.a)({url:"setting/lang_country/list",method:"get",params:t})}function Kt(t){return Object(r.a)({url:"setting/lang_country/form/".concat(t),method:"get"})}function Yt(t,e){return Object(r.a)({url:"setting/lang_type/status/".concat(t,"/").concat(e),method:"put"})}function Ht(t){return Object(r.a)({url:"setting/lang_code/translate",method:"post",data:t})}function Qt(t){return Object(r.a)({url:"system/crud",method:"post",data:t})}function Xt(t){return Object(r.a)({url:"file/upload",method:"post",headers:{"Authori-zation":"Bearer "+Object(a.c)("token"),"content-type":"multipart/form-data;Bearer "+Object(a.c)("token")},data:t})}}}]);