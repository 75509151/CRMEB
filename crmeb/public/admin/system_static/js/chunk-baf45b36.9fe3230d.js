(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-baf45b36"],{1368:function(t,e,n){"use strict";var r=n("ba44");n.n(r).a},ba44:function(t,e,n){},d99c:function(t,e,n){"use strict";n.r(e),n("a4d3"),n("e01a"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("b0c0"),n("131a"),n("fb6a");var r=n("0122"),a=n("c964"),i=n("f3f3"),o=(n("d81d"),n("d3b7"),n("159b"),n("c740"),n("a434"),n("2f62")),s=n("90e7");function c(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(e){u=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var i,o,s,c;e=e&&e.prototype instanceof m?e:m,e=Object.create(e.prototype),r=new k(r||[]);return a(e,"_invoke",{value:(i=t,o=n,s=r,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return S()}for(s.method=t,s.arg=e;;){var n=s.delegate;if(n&&(n=function t(e,n){var r=n.method,a=e.iterator[r];return void 0===a?(n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=void 0,t(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f):(r=h(a,e.iterator,n.arg),"throw"===r.type?(n.method="throw",n.arg=r.arg,n.delegate=null,f):(a=r.arg,a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)))}(n,s),n)){if(n===f)continue;return n}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if("suspendedStart"===c)throw c="completed",s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);if(c="executing",n=h(i,o,s),"normal"===n.type){if(c=s.done?"completed":"suspendedYield",n.arg===f)continue;return{value:n.arg,done:s.done}}"throw"===n.type&&(c="completed",s.method="throw",s.arg=n.arg)}})}),e}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var f={};function m(){}function p(){}function v(){}i={};var g=(u(i,o,(function(){return this})),Object.getPrototypeOf),w=(g=g&&g(g(x([]))),g&&g!==e&&n.call(g,o)&&(i=g),v.prototype=m.prototype=Object.create(i));function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function y(t,e){var i;a(this,"_invoke",{value:function(a,o){function s(){return new e((function(i,s){!function a(i,o,s,c){var l;i=h(t[i],t,o);if("throw"!==i.type)return(o=(l=i.arg).value)&&"object"==Object(r.a)(o)&&n.call(o,"__await")?e.resolve(o.__await).then((function(t){a("next",t,s,c)}),(function(t){a("throw",t,s,c)})):e.resolve(o).then((function(t){l.value=t,s(l)}),(function(t){return a("throw",t,s,c)}));c(i.arg)}(a,o,i,s)}))}return i=i?i.then(s,s):s()}})}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function x(t){if(t){var e,r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return e=-1,(r=function r(){for(;++e<t.length;)if(n.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r}).next=r}return{next:S}}function S(){return{value:void 0,done:!0}}return a(w,"constructor",{value:p.prototype=v,configurable:!0}),a(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){return t="function"==typeof t&&t.constructor,!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(y.prototype),u(y.prototype,s,(function(){return this})),t.AsyncIterator=y,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new y(d(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},b(w),u(w,l,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e,n=Object(t),r=[];for(e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=x,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;0<=a;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}var o=(i=i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc?null:i)?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n,r,a=this.tryEntries[e];if(a.tryLoc===t)return"throw"===(n=a.completion).type&&(r=n.arg,L(a)),r}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}n("c276"),i={name:"marketing_channel_code",filters:{typeFilter:function(t){return{wechat:"微信用户",routine:"小程序用户"}[t]}},computed:Object(i.a)(Object(i.a)({},Object(o.d)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:"80px"},labelPosition:function(){return this.isMobile?"top":"right"}}),data:function(){return{treeId:"",isChat:!0,formValidate3:{page:1,limit:15},total3:0,loading3:!1,modals3:!1,tabList:[],formValidate5:{page:1,limit:15,uid:0,to_uid:0,id:0},tableList5:[],FromData:null,formValidate:{page:1,limit:15,data:"",type:"",nickname:""},tableList2:[],modals:!1,total:0,tableFrom:{page:1,limit:15,cate_id:0,name:""},userData:{id:0,page:1,limit:15},timeVal:[],loading:!1,tableList:[],loading2:!1,total2:0,addFrom:{uids:[]},selections:[],rows:{},rowRecord:{},theme3:"light",labelSort:[],sortName:"",current:0,uid:0}},activated:function(){this.getUserLabelAll()},mounted:function(){},methods:{changeMenu:function(t,e){switch(this.orderId=t.id,e){case"1":this.downLoadCode(t.image);break;case"2":this.$router.push({path:this.$routeProStr+"/marketing/channel_code/code_statistic?id="+t.id});break;case"3":this.modals=!0,this.userData.id=t.id,this.getUserList(),this.break}},downLoadCode:function(t){if(!t)return this.$message.warning("暂无二维码");var e=new Image;e.src=t,e.setAttribute("crossOrigin","anonymous"),e.onload=function(){var t=document.createElement("canvas");t.width=e.width,t.height=e.height,t.getContext("2d").drawImage(e,0,0,e.width,e.height);t=t.toDataURL();var n=document.createElement("a"),r=new MouseEvent("click");n.download=name||"photo",n.href=t,n.dispatchEvent(r)}},getUserList:function(){var t=this;Object(s.u)(this.userData).then(function(){var e=Object(a.a)(c().mark((function e(n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.data,a=[],r.list.map((function(t){a.push(t.user)})),t.tabList=a,t.total2=r.count,t.loading2=!1;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.tabList=[],t.$message.error(e.msg)}))},getUserLabelAll:function(t){var e=this;Object(s.Zb)().then((function(n){n=n.data.data,n.unshift({cate_name:"全部",id:""}),n.forEach((function(t){t.status=!1})),t||(e.sortName=n[0].id,e.tableFrom.cate_id=n[0].id,e.getList()),e.labelSort=n}))},addSort:function(){var t=this;this.$modalForm(Object(s.Ub)(0)).then((function(){return t.getUserLabelAll()}))},labelEdit:function(t){var e=this;this.$modalForm(Object(s.Ub)(t.id)).then((function(){return e.getUserLabelAll(1)}))},deleteSort:function(t,e){var n=this,r=this.labelSort.findIndex((function(e){return e.id==t.id}));e={title:e,num:r,url:"app/wechat_qrcode/cate/del/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){n.$message.success(t.msg),n.labelSort.splice(r,1),n.labelSort=[],n.getUserLabelAll()})).catch((function(t){n.$message.error(t.msg)}))},showMenu:function(t){this.labelSort.forEach((function(e){e.id==t.id?e.status=!t.status:e.status=!1}))},bindMenuItem:function(t,e){this.tableFrom.page=1,this.current=e,this.labelSort.forEach((function(t){t.status=!1})),this.tableFrom.cate_id=t.id,this.getList()},cancel:function(){this.formValidate={page:1,limit:10,data:"",type:"",nickname:""}},edit:function(t){this.$router.push({path:this.$routeProStr+"/marketing/channel_code/create?id="+t.id})},add:function(){this.$router.push({path:this.$routeProStr+"/marketing/channel_code/create"})},getListService:function(){var t=this;this.loading2=!0,kefucreateApi(this.formValidate).then(function(){var e=Object(a.a)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.data,t.tableList2=r.list,t.total2=r.count,t.tableList2.map((function(t){t._isChecked=!1})),t.loading2=!1;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading2=!1,t.$message.error(e.msg)}))},userSearchs:function(){this.formValidate.page=1,this.getList()},del:function(t,e,n){var r=this;e={title:e,num:n,url:"/app/wechat_qrcode/del/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){r.$message.success(t.msg),r.tableList.splice(n,1)})).catch((function(t){r.$message.error(t.msg)}))},getList:function(){var t=this;this.loading=!0,Object(s.Wb)(this.tableFrom).then(function(){var e=Object(a.a)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.data,t.tableList=r.list,t.total=n.data.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$message.error(e.msg)}))},onchangeIsShow:function(t){var e=this;t={id:t.id,status:t.status};Object(s.Yb)(t).then(function(){var t=Object(a.a)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$message.success(n.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$message.error(t.msg)}))},clickMenu:function(t,e){1==e?this.labelEdit(t):2==e&&this.deleteSort(t,"删除分类")}}},n("1368"),o=n("2877"),o=Object(o.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-row",{ref:"warpper",staticClass:"ivu-mt box-wrapper"},[r("el-col",{staticClass:"left-wrapper",attrs:{span:4}},[r("div",{staticClass:"tree_tit",on:{click:t.addSort}},[r("i",{staticClass:"el-icon-circle-plus"}),t._v("\n        添加分组\n      ")]),r("div",{staticClass:"tree"},[r("el-tree",{attrs:{data:t.labelSort,"node-key":"id","default-expand-all":"","highlight-current":"","expand-on-click-node":!1,"current-node-key":t.treeId},on:{"node-click":t.bindMenuItem},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return r("span",{staticClass:"custom-tree-node"},[r("span",{staticClass:"file-name"},[a.pid?t._e():r("img",{staticClass:"icon",attrs:{src:n("c583")}}),t._v("\n              "+t._s(a.cate_name))]),a.id?r("span",[r("el-dropdown",{on:{command:function(e){return t.clickMenu(a,e)}}},[r("i",{staticClass:"el-icon-more el-icon--right"}),r("template",{slot:"dropdown"},[r("el-dropdown-menu",[r("el-dropdown-item",{attrs:{command:"1"}},[t._v("编辑分组")]),a.id?r("el-dropdown-item",{attrs:{command:"2"}},[t._v("删除分组")]):t._e()],1)],1)],2)],1):t._e()])}}])})],1)]),r("el-col",{ref:"rightBox",attrs:{span:20}},[r("el-card",{attrs:{bordered:!1,shadow:"never"}},[r("el-row",{staticClass:"mb14"},[r("el-col",{attrs:{span:20}},[r("el-button",{directives:[{name:"auth",rawName:"v-auth",value:["marketing-channel_code-create"],expression:"['marketing-channel_code-create']"}],attrs:{type:"primary"},on:{click:t.add}},[t._v("新建二维码")])],1),r("el-col",{attrs:{span:4}},[r("el-input",{attrs:{search:"","enter-button":"搜索",placeholder:"请输入二维码名称"},on:{"on-search":t.userSearchs},model:{value:t.tableFrom.name,callback:function(e){t.$set(t.tableFrom,"name",e)},expression:"tableFrom.name"}})],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.tableList,"highlight-current-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"}},[r("el-table-column",{attrs:{label:"二维码",width:"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[r("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.row.image,expression:"scope.row.image"}]})])]}}])}),r("el-table-column",{attrs:{label:"二维码名称","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.name))])]}}])}),r("el-table-column",{attrs:{label:"总关注数","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.follow))])]}}])}),r("el-table-column",{attrs:{label:"昨日新增关注","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.y_follow))])]}}])}),r("el-table-column",{attrs:{label:"用户标签","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.label_name,(function(e,n){return r("el-tag",{key:n,staticClass:"label-name"},[t._v(t._s(e))])}))}}])}),r("el-table-column",{attrs:{label:"时间","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.stop?r("span",[t._v(" 永久 ")]):t._e(),1===e.row.stop?r("span",[r("div",[t._v(t._s(e.row.add_time))]),r("div",[t._v("-")]),r("div",[t._v(t._s(e.row.end_time))])]):t._e(),-1===e.row.stop?r("span",[t._v("已过期")]):t._e()]}}])}),r("el-table-column",{attrs:{label:"关联推广员","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[r("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.row.avatar,expression:"scope.row.avatar"}]})])]}}])}),r("el-table-column",{attrs:{label:"状态","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-switch",{attrs:{"active-value":1,"inactive-value":0,value:e.row.status,disabled:2==e.row.lottery_status,size:"large","active-text":"开启","inactive-text":"关闭"},on:{change:function(n){return t.onchangeIsShow(e.row)}},model:{value:e.row.status,callback:function(n){t.$set(e.row,"status",n)},expression:"scope.row.status"}})]}}])}),r("el-table-column",{attrs:{label:"操作",fixed:"right",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("a",{on:{click:function(n){return t.edit(e.row)}}},[t._v("编辑")]),r("el-divider",{attrs:{direction:"vertical"}}),r("a",{on:{click:function(n){return t.del(e.row,"删除二维码",e.$index)}}},[t._v("删除")]),r("el-divider",{attrs:{direction:"vertical"}}),r("el-dropdown",{attrs:{size:"small",transfer:!0},on:{command:function(n){return t.changeMenu(e.row,n)}}},[r("span",{staticClass:"el-dropdown-link"},[t._v("更多"),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:"1"}},[t._v("下载")]),r("el-dropdown-item",{attrs:{command:"2"}},[t._v("统计")]),r("el-dropdown-item",{attrs:{command:"3"}},[t._v("用户列表")])],1)],1)]}}])})],1),r("div",{staticClass:"acea-row row-right page"},[t.total?r("pagination",{attrs:{total:t.total,page:t.tableFrom.page,limit:t.tableFrom.limit},on:{"update:page":function(e){return t.$set(t.tableFrom,"page",e)},"update:limit":function(e){return t.$set(t.tableFrom,"limit",e)},pagination:t.getList}}):t._e()],1)],1)],1)],1),r("el-dialog",{attrs:{visible:t.modals,title:"渠道码用户列表","close-on-click-modal":!1,width:"900px"},on:{"update:visible":function(e){t.modals=e}}},[r("el-table",{ref:"selection",attrs:{data:t.tabList,"empty-text":"暂无数据","highlight-current-row":"","max-height":"400"}},[r("el-table-column",{attrs:{label:"UID","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.uid))])]}}])}),r("el-table-column",{attrs:{label:"用户头像","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(t){return[r("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.row.avatar,expression:"scope.row.avatar"}]})])]}}])}),r("el-table-column",{attrs:{label:"用户昵称","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.nickname))])]}}])})],1),r("div",{staticClass:"acea-row row-right page"},[t.total2?r("pagination",{attrs:{total:t.total2,page:t.userData.page,limit:t.userData.limit},on:{"update:page":function(e){return t.$set(t.userData,"page",e)},"update:limit":function(e){return t.$set(t.userData,"limit",e)},pagination:t.getUserList}}):t._e()],1)],1)],1)}),[],!1,null,"0d83cc5a",null),e.default=o.exports}}]);