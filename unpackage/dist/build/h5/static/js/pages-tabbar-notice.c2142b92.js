(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabbar-notice"],{"008e":function(a,t,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var v=d("4296"),p={data:function(){return{current:0,notice:[],tabList:[{name:"公告"},{name:"新品"},{name:"赋能"},{name:"合成"}],itemStyle:{fontSize:"36rpx",fontWeight:"800",width:"187rpx",height:"88rpx"},lineBg:"/static/tabbar/user/Select.png",currentNum:0,keyword:"",list6:[],tabIndex:0,dataList:[]}},mounted:function(){this.getBanner()},methods:{swpIndex:function(a){var t=this;this.current=a.index,setTimeout((function(){t.$refs.paging.reload()}),100)},getBanner:function(){var a=this;(0,v.bannerList)().then((function(t){a.list6=t.data.data}))},queryList:function(a,t){var d=this,p={pageNo:a,pageSize:t};0==this.current&&(0,v.homePageList)(p).then((function(a){d.$refs.paging.complete(a.data.data)})).catch((function(a){d.$refs.paging.complete(!1)}))}}};t.default=p},"22fc":function(a,t,d){"use strict";d.d(t,"b",(function(){return p})),d.d(t,"c",(function(){return i})),d.d(t,"a",(function(){return v}));var v={zPaging:d("5e13").default,uSwiper:d("8783").default,uTabs:d("028f").default},p=function(){var a=this,t=a.$createElement,d=a._self._c||t;return d("v-uni-view",{staticClass:"root"},[d("z-paging",{ref:"paging",on:{query:function(t){arguments[0]=t=a.$handleEvent(t),a.queryList.apply(void 0,arguments)}},model:{value:a.dataList,callback:function(t){a.dataList=t},expression:"dataList"}},[d("v-uni-view",{},[d("u-swiper",{attrs:{height:"100",list:a.list6,previousMargin:"20",nextMargin:"20",circular:!0,autoplay:!0,keyName:"bannerUrl",radius:"5",bgColor:"#ffffff"}},[d("v-uni-view",{staticClass:"vd-f_fd-r vai-c vjc-fe",staticStyle:{width:"670rpx"},attrs:{slot:"indicator"},slot:"indicator"},[d("v-uni-view",{staticClass:"vd-f_fd-r vai-c indicator-num"},[d("v-uni-text",{staticClass:"indicator-num__text"},[a._v(a._s(a.currentNum+1)+"/"+a._s(a.list6.length))])],1)],1)],1)],1),d("v-uni-view",{},[d("u-tabs",{attrs:{list:a.tabList,itemStyle:a.itemStyle,lineColor:"url("+a.lineBg+") 100% 100%",lineWidth:"36rpx",lineHeight:"12rpx"},on:{change:function(t){arguments[0]=t=a.$handleEvent(t),a.swpIndex.apply(void 0,arguments)}}})],1),d("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0==a.current,expression:"current==0"}]},a._l(a.dataList,(function(t,v){return d("v-uni-view",{key:v},[d("v-uni-view",{staticClass:"itemn-box vai-c vd-f_fd-r vjc-sb"},[d("v-uni-view",{staticStyle:{"max-width":"360rpx"}},[d("v-uni-view",{staticClass:"vfs30 vfw400",staticStyle:{"line-height":"22px",height:"86rpx"}},[a._v(a._s(t.name))]),d("v-uni-view",{staticClass:"vfs24",staticStyle:{color:"#979797"}},[a._v(a._s(t.createTime))])],1),d("v-uni-view",[d("v-uni-image",{staticClass:"item-image",attrs:{src:t.image,mode:""}})],1)],1)],1)})),1)],1)],1)},i=[]},"3b74":function(a,t,d){var v=d("24fb");t=v(!1),t.push([a.i,".vd-f_fd-r[data-v-84095a54]{display:flex;flex-direction:row}.vd-f_fd-c[data-v-84095a54]{display:flex;flex-direction:column}.vjc-sa[data-v-84095a54]{justify-content:space-around}.vjc-sb[data-v-84095a54]{justify-content:space-between}.vjc-fe[data-v-84095a54]{justify-content:flex-end}.vjc-c[data-v-84095a54]{justify-content:center}.vjc-fs[data-v-84095a54]{justify-content:flex-start}.vai-fe[data-v-84095a54]{align-items:flex-end}.vai-c[data-v-84095a54]{align-items:center}.vbcf1[data-v-84095a54]{background-color:#f1f1f1}.vbcf[data-v-84095a54]{background-color:#fff}.vbs-bb[data-v-84095a54]{box-sizing:border-box}.vp-r[data-v-84095a54]{position:relative}.vp-a[data-v-84095a54]{position:absolute}.vp-f[data-v-84095a54]{position:fixed}.vw100b[data-v-84095a54]{width:100%}.vw750[data-v-84095a54]{width:%?750?%}.vh100b[data-v-84095a54]{height:100%}.vm-0auto[data-v-84095a54]{margin:0 auto}.vfs4[data-v-84095a54]{font-size:%?4?%}.vfs18[data-v-84095a54]{font-size:%?18?%}.vfs20[data-v-84095a54]{font-size:%?20?%}.vfs22[data-v-84095a54]{font-size:%?22?%}.vfs24[data-v-84095a54]{font-size:%?24?%}.vfs26[data-v-84095a54]{font-size:%?26?%}.vfs28[data-v-84095a54]{font-size:%?28?%}.vfs30[data-v-84095a54]{font-size:%?30?%}.vfs32[data-v-84095a54]{font-size:%?32?%}.vfs34[data-v-84095a54]{font-size:%?34?%}.vfs36[data-v-84095a54]{font-size:%?36?%}.vfs38[data-v-84095a54]{font-size:%?38?%}.vfs40[data-v-84095a54]{font-size:%?40?%}.vfs42[data-v-84095a54]{font-size:%?42?%}.vfs44[data-v-84095a54]{font-size:%?44?%}.vfs46[data-v-84095a54]{font-size:%?46?%}.vfs60[data-v-84095a54]{font-size:%?60?%}.vfw700[data-v-84095a54]{font-weight:700}.vfw600[data-v-84095a54]{font-weight:600}.vfw500[data-v-84095a54]{font-weight:500}.vfw400[data-v-84095a54]{font-weight:400}.vfw300[data-v-84095a54]{font-weight:300}.vfw200[data-v-84095a54]{font-weight:200}.vta-c[data-v-84095a54]{text-align:center}.vta-l[data-v-84095a54]{text-align:left}.vta-r[data-v-84095a54]{text-align:right}.vp5[data-v-84095a54]{padding:%?5?%}.vp10[data-v-84095a54]{padding:%?10?%}.vp11[data-v-84095a54]{padding:%?11?%}.vp12[data-v-84095a54]{padding:%?12?%}.vp13[data-v-84095a54]{padding:%?13?%}.vp14[data-v-84095a54]{padding:%?14?%}.vp15[data-v-84095a54]{padding:%?15?%}.vp16[data-v-84095a54]{padding:%?16?%}.vp17[data-v-84095a54]{padding:%?17?%}.vp18[data-v-84095a54]{padding:%?18?%}.vp19[data-v-84095a54]{padding:%?18?%}.vp20[data-v-84095a54]{padding:%?20?%}.vp21[data-v-84095a54]{padding:%?21?%}.vp22[data-v-84095a54]{padding:%?22?%}.vp23[data-v-84095a54]{padding:%?23?%}.vp24[data-v-84095a54]{padding:%?24?%}.vp25[data-v-84095a54]{padding:%?25?%}.vp26[data-v-84095a54]{padding:%?26?%}.vp27[data-v-84095a54]{padding:%?27?%}.vp28[data-v-84095a54]{padding:%?28?%}.vp29[data-v-84095a54]{padding:%?29?%}.vp30[data-v-84095a54]{padding:%?30?%}.vp31[data-v-84095a54]{padding:%?31?%}.vp32[data-v-84095a54]{padding:%?32?%}.vp33[data-v-84095a54]{padding:%?33?%}.vp34[data-v-84095a54]{padding:%?34?%}.vp35[data-v-84095a54]{padding:%?35?%}.vp36[data-v-84095a54]{padding:%?36?%}.vp37[data-v-84095a54]{padding:%?37?%}.vp38[data-v-84095a54]{padding:%?38?%}.vp39[data-v-84095a54]{padding:%?39?%}.vp40[data-v-84095a54]{padding:%?40?%}.vp41[data-v-84095a54]{padding:%?41?%}.vp42[data-v-84095a54]{padding:%?42?%}.vp43[data-v-84095a54]{padding:%?43?%}.vp44[data-v-84095a54]{padding:%?44?%}.vp45[data-v-84095a54]{padding:%?45?%}.vp46[data-v-84095a54]{padding:%?46?%}.vp47[data-v-84095a54]{padding:%?47?%}.vp48[data-v-84095a54]{padding:%?48?%}.vp49[data-v-84095a54]{padding:%?49?%}.vp50[data-v-84095a54]{padding:%?50?%}.vpt5[data-v-84095a54]{padding-top:%?5?%}.vpt10[data-v-84095a54]{padding-top:%?10?%}.vpt11[data-v-84095a54]{padding-top:%?11?%}.vpt12[data-v-84095a54]{padding-top:%?12?%}.vpt13[data-v-84095a54]{padding-top:%?13?%}.vpt14[data-v-84095a54]{padding-top:%?14?%}.vpt15[data-v-84095a54]{padding-top:%?15?%}.vpt16[data-v-84095a54]{padding-top:%?16?%}.vpt17[data-v-84095a54]{padding-top:%?17?%}.vpt18[data-v-84095a54]{padding-top:%?18?%}.vpt19[data-v-84095a54]{padding-top:%?18?%}.vpt20[data-v-84095a54]{padding-top:%?20?%}.vpt21[data-v-84095a54]{padding-top:%?21?%}.vpt22[data-v-84095a54]{padding-top:%?22?%}.vpt23[data-v-84095a54]{padding-top:%?23?%}.vpt24[data-v-84095a54]{padding-top:%?24?%}.vpt25[data-v-84095a54]{padding-top:%?25?%}.vpt26[data-v-84095a54]{padding-top:%?26?%}.vpt27[data-v-84095a54]{padding-top:%?27?%}.vpt28[data-v-84095a54]{padding-top:%?28?%}.vpt29[data-v-84095a54]{padding-top:%?29?%}.vpt30[data-v-84095a54]{padding-top:%?30?%}.vpt31[data-v-84095a54]{padding-top:%?31?%}.vpt32[data-v-84095a54]{padding-top:%?32?%}.vpt33[data-v-84095a54]{padding-top:%?33?%}.vpt34[data-v-84095a54]{padding-top:%?34?%}.vpt35[data-v-84095a54]{padding-top:%?35?%}.vpt36[data-v-84095a54]{padding-top:%?36?%}.vpt37[data-v-84095a54]{padding-top:%?37?%}.vpt38[data-v-84095a54]{padding-top:%?38?%}.vpt39[data-v-84095a54]{padding-top:%?39?%}.vpt40[data-v-84095a54]{padding-top:%?40?%}.vpt41[data-v-84095a54]{padding-top:%?41?%}.vpt42[data-v-84095a54]{padding-top:%?42?%}.vpt43[data-v-84095a54]{padding-top:%?43?%}.vpt44[data-v-84095a54]{padding-top:%?44?%}.vpt45[data-v-84095a54]{padding-top:%?45?%}.vpt46[data-v-84095a54]{padding-top:%?46?%}.vpt47[data-v-84095a54]{padding-top:%?47?%}.vpt48[data-v-84095a54]{padding-top:%?48?%}.vpt49[data-v-84095a54]{padding-top:%?49?%}.vpt50[data-v-84095a54]{padding-top:%?50?%}.vpl5[data-v-84095a54]{padding-left:%?5?%}.vpl10[data-v-84095a54]{padding-left:%?10?%}.vpl11[data-v-84095a54]{padding-left:%?11?%}.vpl12[data-v-84095a54]{padding-left:%?12?%}.vpl13[data-v-84095a54]{padding-left:%?13?%}.vpl14[data-v-84095a54]{padding-left:%?14?%}.vpl15[data-v-84095a54]{padding-left:%?15?%}.vpl16[data-v-84095a54]{padding-left:%?16?%}.vpl17[data-v-84095a54]{padding-left:%?17?%}.vpl18[data-v-84095a54]{padding-left:%?18?%}.vpl19[data-v-84095a54]{padding-left:%?18?%}.vpl20[data-v-84095a54]{padding-left:%?20?%}.vpl21[data-v-84095a54]{padding-left:%?21?%}.vpl22[data-v-84095a54]{padding-left:%?22?%}.vpl23[data-v-84095a54]{padding-left:%?23?%}.vpl24[data-v-84095a54]{padding-left:%?24?%}.vpl25[data-v-84095a54]{padding-left:%?25?%}.vpl26[data-v-84095a54]{padding-left:%?26?%}.vpl27[data-v-84095a54]{padding-left:%?27?%}.vpl28[data-v-84095a54]{padding-left:%?28?%}.vpl29[data-v-84095a54]{padding-left:%?29?%}.vpl30[data-v-84095a54]{padding-left:%?30?%}.vpl31[data-v-84095a54]{padding-left:%?31?%}.vpl32[data-v-84095a54]{padding-left:%?32?%}.vpl33[data-v-84095a54]{padding-left:%?33?%}.vpl34[data-v-84095a54]{padding-left:%?34?%}.vpl35[data-v-84095a54]{padding-left:%?35?%}.vpl36[data-v-84095a54]{padding-left:%?36?%}.vpl37[data-v-84095a54]{padding-left:%?37?%}.vpl38[data-v-84095a54]{padding-left:%?38?%}.vpl39[data-v-84095a54]{padding-left:%?39?%}.vpl40[data-v-84095a54]{padding-left:%?40?%}.vpl41[data-v-84095a54]{padding-left:%?41?%}.vpl42[data-v-84095a54]{padding-left:%?42?%}.vpl43[data-v-84095a54]{padding-left:%?43?%}.vpl44[data-v-84095a54]{padding-left:%?44?%}.vpl45[data-v-84095a54]{padding-left:%?45?%}.vpl46[data-v-84095a54]{padding-left:%?46?%}.vpl47[data-v-84095a54]{padding-left:%?47?%}.vpl48[data-v-84095a54]{padding-left:%?48?%}.vpl49[data-v-84095a54]{padding-left:%?49?%}.vpl50[data-v-84095a54]{padding-left:%?50?%}.vpb5[data-v-84095a54]{padding-bottom:%?5?%}.vpb10[data-v-84095a54]{padding-bottom:%?10?%}.vpb11[data-v-84095a54]{padding-bottom:%?11?%}.vpb12[data-v-84095a54]{padding-bottom:%?12?%}.vpb13[data-v-84095a54]{padding-bottom:%?13?%}.vpb14[data-v-84095a54]{padding-bottom:%?14?%}.vpb15[data-v-84095a54]{padding-bottom:%?15?%}.vpb16[data-v-84095a54]{padding-bottom:%?16?%}.vpb17[data-v-84095a54]{padding-bottom:%?17?%}.vpb18[data-v-84095a54]{padding-bottom:%?18?%}.vpb19[data-v-84095a54]{padding-bottom:%?18?%}.vpb20[data-v-84095a54]{padding-bottom:%?20?%}.vpb21[data-v-84095a54]{padding-bottom:%?21?%}.vpb22[data-v-84095a54]{padding-bottom:%?22?%}.vpb23[data-v-84095a54]{padding-bottom:%?23?%}.vpb24[data-v-84095a54]{padding-bottom:%?24?%}.vpb25[data-v-84095a54]{padding-bottom:%?25?%}.vpb26[data-v-84095a54]{padding-bottom:%?26?%}.vpb27[data-v-84095a54]{padding-bottom:%?27?%}.vpb28[data-v-84095a54]{padding-bottom:%?28?%}.vpb29[data-v-84095a54]{padding-bottom:%?29?%}.vpb30[data-v-84095a54]{padding-bottom:%?30?%}.vpb31[data-v-84095a54]{padding-bottom:%?31?%}.vpb32[data-v-84095a54]{padding-bottom:%?32?%}.vpb33[data-v-84095a54]{padding-bottom:%?33?%}.vpb34[data-v-84095a54]{padding-bottom:%?34?%}.vpb35[data-v-84095a54]{padding-bottom:%?35?%}.vpb36[data-v-84095a54]{padding-bottom:%?36?%}.vpb37[data-v-84095a54]{padding-bottom:%?37?%}.vpb38[data-v-84095a54]{padding-bottom:%?38?%}.vpb39[data-v-84095a54]{padding-bottom:%?39?%}.vpb40[data-v-84095a54]{padding-bottom:%?40?%}.vpb41[data-v-84095a54]{padding-bottom:%?41?%}.vpb42[data-v-84095a54]{padding-bottom:%?42?%}.vpb43[data-v-84095a54]{padding-bottom:%?43?%}.vpb44[data-v-84095a54]{padding-bottom:%?44?%}.vpb45[data-v-84095a54]{padding-bottom:%?45?%}.vpb46[data-v-84095a54]{padding-bottom:%?46?%}.vpb47[data-v-84095a54]{padding-bottom:%?47?%}.vpb48[data-v-84095a54]{padding-bottom:%?48?%}.vpb49[data-v-84095a54]{padding-bottom:%?49?%}.vpb50[data-v-84095a54]{padding-bottom:%?50?%}.vpr5[data-v-84095a54]{padding-right:%?5?%}.vpr10[data-v-84095a54]{padding-right:%?10?%}.vpr11[data-v-84095a54]{padding-right:%?11?%}.vpr12[data-v-84095a54]{padding-right:%?12?%}.vpr13[data-v-84095a54]{padding-right:%?13?%}.vpr14[data-v-84095a54]{padding-right:%?14?%}.vpr15[data-v-84095a54]{padding-right:%?15?%}.vpr16[data-v-84095a54]{padding-right:%?16?%}.vpr17[data-v-84095a54]{padding-right:%?17?%}.vpr18[data-v-84095a54]{padding-right:%?18?%}.vpr19[data-v-84095a54]{padding-right:%?18?%}.vpr20[data-v-84095a54]{padding-right:%?20?%}.vpr21[data-v-84095a54]{padding-right:%?21?%}.vpr22[data-v-84095a54]{padding-right:%?22?%}.vpr23[data-v-84095a54]{padding-right:%?23?%}.vpr24[data-v-84095a54]{padding-right:%?24?%}.vpr25[data-v-84095a54]{padding-right:%?25?%}.vpr26[data-v-84095a54]{padding-right:%?26?%}.vpr27[data-v-84095a54]{padding-right:%?27?%}.vpr28[data-v-84095a54]{padding-right:%?28?%}.vpr29[data-v-84095a54]{padding-right:%?29?%}.vpr30[data-v-84095a54]{padding-right:%?30?%}.vpr31[data-v-84095a54]{padding-right:%?31?%}.vpr32[data-v-84095a54]{padding-right:%?32?%}.vpr33[data-v-84095a54]{padding-right:%?33?%}.vpr34[data-v-84095a54]{padding-right:%?34?%}.vpr35[data-v-84095a54]{padding-right:%?35?%}.vpr36[data-v-84095a54]{padding-right:%?36?%}.vpr37[data-v-84095a54]{padding-right:%?37?%}.vpr38[data-v-84095a54]{padding-right:%?38?%}.vpr39[data-v-84095a54]{padding-right:%?39?%}.vpr40[data-v-84095a54]{padding-right:%?40?%}.vpr41[data-v-84095a54]{padding-right:%?41?%}.vpr42[data-v-84095a54]{padding-right:%?42?%}.vpr43[data-v-84095a54]{padding-right:%?43?%}.vpr44[data-v-84095a54]{padding-right:%?44?%}.vpr45[data-v-84095a54]{padding-right:%?45?%}.vpr46[data-v-84095a54]{padding-right:%?46?%}.vpr47[data-v-84095a54]{padding-right:%?47?%}.vpr48[data-v-84095a54]{padding-right:%?48?%}.vpr49[data-v-84095a54]{padding-right:%?49?%}.vpr50[data-v-84095a54]{padding-right:%?50?%}.item-image[data-v-84095a54]{border-radius:%?24?%;width:%?256?%;height:%?144?%}.itemn-box[data-v-84095a54]{margin:0 auto;width:%?702?%;height:%?200?%;border-bottom:1px solid #f2f2f2}.gonggao-box[data-v-84095a54]{width:%?354?%;height:%?174?%}.cpfs-box[data-v-84095a54]{padding-top:%?30?%;width:%?366?%;height:%?200?%}.item-icon[data-v-84095a54]{width:%?76?%;height:%?76?%}.tabs-box[data-v-84095a54]{width:%?686?%;margin:%?0?% auto}.mar-10[data-v-84095a54]{width:%?686?%;margin:%?20?% auto 0}.indicator-num[data-v-84095a54]{padding:2px 0;background-color:rgba(0,0,0,.35);border-radius:100px;width:%?60?%;display:flex;flex-direction:row;justify-content:center}.indicator-num__text[data-v-84095a54]{color:#fff;font-size:12px}.backPage[data-v-84095a54]{height:%?88?%}",""]),a.exports=t},4296:function(a,t,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bannerList=p,t.homePageList=i;var v=uni.$u.http;function p(a){return v.get("auser/user/homePage/bannerList",a)}function i(a){return v.get("auser/user/homePage/homePageList",a)}},"8e3f":function(a,t,d){var v=d("3b74");"string"===typeof v&&(v=[[a.i,v,""]]),v.locals&&(a.exports=v.locals);var p=d("4f06").default;p("6d5baef0",v,!0,{sourceMap:!1,shadowMode:!1})},"942c":function(a,t,d){"use strict";d.r(t);var v=d("22fc"),p=d("9da4");for(var i in p)"default"!==i&&function(a){d.d(t,a,(function(){return p[a]}))}(i);d("abcf");var n,g=d("f0c5"),e=Object(g["a"])(p["default"],v["b"],v["c"],!1,null,"84095a54",null,!1,v["a"],n);t["default"]=e.exports},"9da4":function(a,t,d){"use strict";d.r(t);var v=d("008e"),p=d.n(v);for(var i in v)"default"!==i&&function(a){d.d(t,a,(function(){return v[a]}))}(i);t["default"]=p.a},abcf:function(a,t,d){"use strict";var v=d("8e3f"),p=d.n(v);p.a}}]);