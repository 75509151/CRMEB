(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-points_mall-logistics_details"],{1579:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.collectAdd=function(t,e){return a.default.post("collect/add",{id:t,product:void 0===e?"product":e})},e.collectAll=function(t,e){return a.default.post("collect/all",{id:t,category:void 0===e?"product":e})},e.collectDel=function(t,e){return a.default.post("collect/del",{id:t,category:void 0===e?"product":e})},e.create=function(t){return a.default.post("agent/apply/".concat(t.id),t)},e.deleteVisitList=function(t){return a.default.delete("user/visit",t)},e.getAgentAgreement=function(t){return a.default.get("agent/get_agent_agreement",{},{noAuth:!0})},e.getAttr=function(t,e){return a.default.get("v2/get_attr/"+t+"/"+e)},e.getCategoryList=function(){return a.default.get("category",{},{noAuth:!0})},e.getCodeApi=function(){return a.default.get("verify_code",{},{noAuth:!0})},e.getCollectUserList=function(t){return a.default.get("collect/user",t)},e.getGoodsDetails=function(){return a.default.get("agent/apply/info",{},{noAuth:!0})},e.getGroomList=function(t,e){return a.default.get("groom/list/"+t,e,{noAuth:!0})},e.getHomeProducts=function(t){return a.default.get("home/products",t,{noAuth:!0})},e.getPresellProductDetail=function(t){return a.default.get("advance/detail/"+t)},e.getProductCode=function(t){return a.default.get("product/code/"+t,{})},e.getProductDetail=function(t){return a.default.get("product/detail/"+t,{},{noAuth:!0})},e.getProductHot=function(t,e){return a.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===e?4:e},{noAuth:!0})},e.getProductslist=function(t){return a.default.get("products",t,{noAuth:!0})},e.getReplyConfig=function(t){return a.default.get("reply/config/"+t)},e.getReplyList=function(t,e){return a.default.get("reply/list/"+t,e)},e.getSearchKeyword=function(){return a.default.get("search/keyword",{},{noAuth:!0})},e.getVisitList=function(t){return a.default.get("user/visit_list",t)},e.postCartAdd=function(t){return a.default.post("cart/add",t)},e.postCartNum=function(t){return a.default.post("v2/set_cart_num",t)},e.registerVerify=function(t){return a.default.post("register/verify",t,{noAuth:!0})},e.storeDiscountsList=function(t){return a.default.get("store_discounts/list/"+t,{},{noAuth:!0})},e.storeListApi=function(t){return a.default.get("store_list",t)};var a=n(i("3160"))},"208c":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.recommend[data-v-3a17a103]{background-color:#fff}.recommend .title[data-v-3a17a103]{height:%?135?%;font-size:%?28?%;color:#282828}.recommend .title .name[data-v-3a17a103]{margin:0 %?28?%}.recommend .title .iconfont[data-v-3a17a103]{font-size:%?170?%;color:#454545}.recommend .title .iconfont.lefticon[data-v-3a17a103]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.recommend .recommendList[data-v-3a17a103]{padding:0 %?30?%}.recommend .recommendList .item[data-v-3a17a103]{width:%?335?%;margin-bottom:%?30?%;border-radius:%?20?% %?20?% 0 0;box-shadow:%?0?% %?3?% %?10?% %?2?% rgba(0,0,0,.03);padding-bottom:%?10?%}.recommend .recommendList .item .pictrue[data-v-3a17a103]{position:relative;width:100%;height:%?335?%}.recommend .recommendList .item .pictrue[data-v-3a17a103] ,\n.recommend .recommendList .item .pictrue[data-v-3a17a103] uni-image,\n.recommend .recommendList .item .pictrue[data-v-3a17a103] .easy-loadimage,\n.recommend .recommendList .item .pictrue[data-v-3a17a103] uni-image{width:100%;height:%?335?%;border-radius:%?20?%}.recommend .recommendList .item .name[data-v-3a17a103]{font-size:%?28?%;color:#282828;margin-top:%?20?%;padding:0 %?10?%;line-height:%?34?%;height:%?68?%}.recommend .recommendList .item .money[data-v-3a17a103]{font-size:%?20?%;margin-top:%?8?%;padding:0 %?10?% %?0?% %?10?%}.recommend .vip-money[data-v-3a17a103]{font-size:%?24?%;color:#282828;font-weight:700;display:flex;align-items:center;padding:%?0?% 0 0 %?10?%}.recommend .vip-money uni-image[data-v-3a17a103]{width:%?46?%;height:%?21?%;margin-left:%?4?%}.recommend .recommendList .item .money .num[data-v-3a17a103]{font-size:%?28?%}',""]),t.exports=e},"24a9":function(t,e,i){"use strict";var n=i("e7aa"),a=i.n(n);a.a},"2c78":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.goPage=function(){return new Promise((function(t){if(0!=n.globalData.isIframe)return!1;t(!0)}))},e.goShopDetail=function(t,e){return new Promise((function(i){t.activity&&"1"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(t.activity.id,"&time=").concat(t.activity.time,"&status=1")}):t.activity&&"2"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(t.activity.id,"&bargain=").concat(e)}):t.activity&&"3"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(t.activity.id)}):i(t)}))},i("d3b7"),i("99af");var n=getApp()},5607:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.logistics .header[data-v-bfbab9f2]{padding:%?23?% %?30?%;background-color:#fff;height:%?166?%;box-sizing:border-box}.logistics .header .pictrue[data-v-bfbab9f2]{width:%?120?%;height:%?120?%}.logistics .header .pictrue uni-image[data-v-bfbab9f2]{width:100%;height:100%;border-radius:%?6?%}.logistics .header .text[data-v-bfbab9f2]{width:%?540?%;font-size:%?28?%;color:#999;margin-top:%?6?%}.logistics .header .text .name[data-v-bfbab9f2]{width:%?365?%;color:#282828}.logistics .header .text .money[data-v-bfbab9f2]{text-align:right}.logistics .logisticsCon[data-v-bfbab9f2]{background-color:#fff;margin:%?12?% 0}.logistics .logisticsCon .company[data-v-bfbab9f2]{height:%?120?%;margin:0 0 %?45?% %?30?%;padding-right:%?30?%;border-bottom:%?1?% solid #f5f5f5}.logistics .logisticsCon .company .picTxt[data-v-bfbab9f2]{width:%?520?%}.logistics .logisticsCon .company .picTxt .iconfont[data-v-bfbab9f2]{width:%?50?%;height:%?50?%;background-color:#666;text-align:center;line-height:%?50?%;color:#fff;font-size:%?35?%}.logistics .logisticsCon .company .picTxt .text[data-v-bfbab9f2]{width:%?450?%;font-size:%?26?%;color:#282828}.logistics .logisticsCon .company .picTxt .text .name[data-v-bfbab9f2]{color:#999}.logistics .logisticsCon .company .picTxt .text .express[data-v-bfbab9f2]{margin-top:%?5?%}.logistics .logisticsCon .company .copy[data-v-bfbab9f2]{font-size:%?20?%;width:%?106?%;text-align:center;border-radius:%?3?%;border:1px solid #999;padding:%?3?% 0}.logistics .logisticsCon .item[data-v-bfbab9f2]{padding:0 %?40?%;position:relative}.logistics .logisticsCon .item .circular[data-v-bfbab9f2]{width:%?20?%;height:%?20?%;border-radius:50%;position:absolute;top:%?-1?%;left:%?31.5?%;background-color:#ddd}.logistics .logisticsCon .item .circular.on[data-v-bfbab9f2]{background-color:var(--view-theme)}.logistics .logisticsCon .item .text.on-font[data-v-bfbab9f2]{color:var(--view-theme)}.logistics .logisticsCon .item .text .data.on-font[data-v-bfbab9f2]{color:var(--view-theme)}.logistics .logisticsCon .item .text[data-v-bfbab9f2]{font-size:%?26?%;color:#666;width:%?615?%;border-left:%?1?% solid #e6e6e6;padding:0 0 %?60?% %?38?%}.logistics .logisticsCon .item .text.on[data-v-bfbab9f2]{border-left-color:var(--view-minorColor)}.logistics .logisticsCon .item .text .data[data-v-bfbab9f2]{font-size:%?24?%;color:#999;margin-top:%?10?%}.logistics .logisticsCon .item .text .data .time[data-v-bfbab9f2]{margin-left:%?15?%}.gray-sty[data-v-bfbab9f2]{width:100%;font-size:%?24?%;color:#999}',""]),t.exports=e},"6a71":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.getBargainDetail=function(t,e){return a.default.get("bargain/detail/".concat(t,"?bargainUid=").concat(e))},e.getBargainList=function(t){return a.default.get("bargain/list",t,{noAuth:!0})},e.getBargainPoster=function(t){return a.default.post("bargain/poster",t)},e.getBargainPosterData=function(t){return a.default.get("bargain/poster_info/"+t)},e.getBargainUserCancel=function(t){return a.default.post("bargain/user/cancel",t)},e.getBargainUserList=function(t){return a.default.get("bargain/user/list",t)},e.getCombinationBannerList=function(t){return a.default.get("combination/banner_list",t,{noAuth:!0})},e.getCombinationDetail=function(t){return a.default.get("combination/detail/"+t)},e.getCombinationList=function(t){return a.default.get("combination/list",t,{noAuth:!0})},e.getCombinationPink=function(t){return a.default.get("combination/pink/"+t)},e.getCombinationPoster=function(t){return a.default.post("combination/poster",t)},e.getCombinationPosterData=function(t){return a.default.get("combination/poster_info/"+t)},e.getIntegralOrderList=function(t){return a.default.get("store_integral/order/list",t)},e.getIntegralProductDetail=function(t){return a.default.get("store_integral/detail/"+t,{},{noAuth:!0})},e.getLogisticsDetails=function(t){return a.default.get("store_integral/order/express/".concat(t))},e.getPink=function(t){return a.default.get("pink",t,{noAuth:!0})},e.getPresellList=function(t){return a.default.get("advance/list",t)},e.getSeckillDetail=function(t,e){return a.default.get("seckill/detail/"+t,e)},e.getSeckillIndexTime=function(){return a.default.get("seckill/index",{},{noAuth:!0})},e.getSeckillList=function(t,e){return a.default.get("seckill/list/"+t,e,{noAuth:!0})},e.getStoreIntegralList=function(t){return a.default.get("store_integral/list",t)},e.integralOrderConfirm=function(t){return a.default.post("store_integral/order/confirm",t)},e.integralOrderCreate=function(t){return a.default.post("store_integral/order/create",t)},e.integralOrderDetails=function(t){return a.default.get("store_integral/order/detail/".concat(t))},e.orderDel=function(t){return a.default.post("store_integral/order/del",t)},e.orderTake=function(t){return a.default.post("store_integral/order/take",t)},e.postBargainHelp=function(t){return a.default.post("bargain/help",t)},e.postBargainHelpCount=function(t){return a.default.post("bargain/help/count",t)},e.postBargainHelpList=function(t){return a.default.post("bargain/help/list",t)},e.postBargainHelpPrice=function(t){return a.default.post("bargain/help/price",t)},e.postBargainShare=function(t){return a.default.post("bargain/share",{bargainId:t})},e.postBargainStart=function(t){return a.default.post("bargain/start",{bargainId:t})},e.postBargainStartUser=function(t){return a.default.post("bargain/start/user",t)},e.postCombinationRemove=function(t){return a.default.post("combination/remove",t)},e.scombinationCode=function(t){return a.default.get("combination/code/"+t)},e.seckillCode=function(t,e){return a.default.get("seckill/code/"+t,e)},i("99af");var a=n(i("3160"))},"6c5c":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={easyLoadimage:i("9362").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"recommend",style:t.colorStyle},[i("v-uni-view",{staticClass:"title acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"iconfont icon-zhuangshixian"}),i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.$t("热门推荐")))]),i("v-uni-text",{staticClass:"iconfont icon-zhuangshixian lefticon"})],1),i("v-uni-view",{staticClass:"recommendList acea-row row-between-wrapper"},t._l(t.hostProduct,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item",attrs:{"hover-class":"none"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("easy-loadimage",{attrs:{mode:"widthFix","image-src":e.image}}),e.activity&&"1"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v(t._s(t.$t("秒杀")))]):t._e(),e.activity&&"2"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v(t._s(t.$t("砍价")))]):t._e(),e.activity&&"3"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v(t._s(t.$t("拼团")))]):t._e()],1),i("v-uni-view",{staticClass:"name line2"},[t._v(t._s(e.store_name))]),i("v-uni-view",{staticClass:"money font-color"},[t._v(t._s(t.$t("￥"))),i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.price))])],1)],1)})),1)],1)},o=[]},7313:function(t,e,i){"use strict";i.r(e);var n=i("f374"),a=i("f9d1");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("24a9");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"bfbab9f2",null,!1,n["a"],void 0);e["default"]=s.exports},8207:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("26cb"),o=i("2c78"),r=n(i("66ca")),s={computed:(0,a.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},mixins:[r.default],data:function(){return{}},methods:{goDetail:function(t){(0,o.goShopDetail)(t,this.uid).then((function(e){uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t.id)})}))}}};e.default=s},e7aa:function(t,e,i){var n=i("5607");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("53a06f92",n,!0,{sourceMap:!1,shadowMode:!1})},f025:function(t,e,i){var n=i("208c");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5a19e56b",n,!0,{sourceMap:!1,shadowMode:!1})},f1f8:function(t,e,i){"use strict";i.r(e);var n=i("6c5c"),a=i("fad1");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("fe2e");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"3a17a103",null,!1,n["a"],void 0);e["default"]=s.exports},f374:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticClass:"logistics"},[i("v-uni-view",{staticClass:"header acea-row row-between row-top"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:t.orderInfo.image}})],1),i("v-uni-view",{staticClass:"text acea-row row-between"},[i("v-uni-view",{staticClass:"name line2"},[t._v(t._s(t.orderInfo.store_name))]),i("v-uni-view",{staticClass:"money"},[i("v-uni-view",[t._v(t._s(t.orderInfo.total_price)+t._s(t.$t("积分")))]),i("v-uni-view",[t._v("x"+t._s(t.orderInfo.total_num))])],1),i("v-uni-view",{staticClass:"line1 gray-sty"},[t._v(t._s(t.orderInfo.suk))])],1)],1),i("v-uni-view",{staticClass:"logisticsCon"},[i("v-uni-view",{staticClass:"company acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"picTxt acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"iconfont icon-wuliu"}),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",[i("v-uni-text",{staticClass:"name line1"},[t._v(t._s(t.$t("物流公司"))+"：")]),t._v(t._s(t.orderInfo.delivery_name))],1),i("v-uni-view",{staticClass:"express line1"},[i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.$t("快递单号"))+"：")]),t._v(t._s(t.orderInfo.delivery_id))],1)],1)],1),i("v-uni-view",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":t.orderInfo.delivery_id}},[t._v(t._s(t.$t("复制单号")))])],1),t._l(t.expressList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item"},[i("v-uni-view",{staticClass:"circular",class:0===n?"on":""}),i("v-uni-view",{staticClass:"text",class:0===n?"on-font on":""},[i("v-uni-view",[t._v(t._s(e.status))]),i("v-uni-view",{staticClass:"data",class:0===n?"on-font on":""},[t._v(t._s(e.time))])],1)],1)}))],2),i("recommend",{attrs:{hostProduct:t.hostProduct}})],1)],1)},a=[]},f9d1:function(t,e,i){"use strict";i.r(e);var n=i("fb7d"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},fad1:function(t,e,i){"use strict";i.r(e);var n=i("8207"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},fb7d:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("1579"),o=i("6a71"),r=n(i("cf40")),s=i("666f"),c=i("26cb"),u=n(i("f1f8")),d=n(i("66ca")),l={components:{recommend:u.default},mixins:[d.default],data:function(){return{orderId:"",product:{productInfo:{}},orderInfo:{},expressList:[],hostProduct:[]}},computed:(0,c.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&(this.getExpress(),this.get_host_product())},deep:!0}},onLoad:function(t){if(!t.order_id)return this.$util.Tips({title:this.$t("缺少订单号")});this.orderId=t.order_id,this.isLogin?(this.getExpress(),this.get_host_product()):(0,s.toLogin)()},onReady:function(){this.$nextTick((function(){var t=this,e=new r.default(".copy-data");e.on("success",(function(){t.$util.Tips({title:t.$t("复制成功")})}))}))},onPageScroll:function(t){uni.$emit("scroll")},methods:{onLoadFun:function(){this.getExpress(),this.get_host_product()},copyOrderId:function(){uni.setClipboardData({data:this.orderInfo.delivery_id})},getExpress:function(){var t=this,e=this;(0,o.getLogisticsDetails)(e.orderId).then((function(t){var i=t.data.express.result||{};e.$set(e,"orderInfo",t.data.order),e.$set(e,"expressList",i.list||[])})).catch((function(e){t.$util.Tips({title:e})}))},get_host_product:function(){var t=this;(0,a.getProductHot)().then((function(e){t.$set(t,"hostProduct",e.data)}))}}};e.default=l},fe2e:function(t,e,i){"use strict";var n=i("f025"),a=i.n(n);a.a}}]);