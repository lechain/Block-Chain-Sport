!function(t){function n(n){for(var i,s,r=n[0],l=n[1],c=n[2],p=0,f=[];p<r.length;p++)s=r[p],a[s]&&f.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);for(d&&d(n);f.length;)f.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],i=!0,r=1;r<e.length;r++){var l=e[r];0!==a[l]&&(i=!1)}i&&(o.splice(n--,1),t=s(s.s=e[0]))}return t}var i={},a={app:0},o=[];function s(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=i,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)s.d(e,i,function(n){return t[n]}.bind(null,i));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/sports/";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=n,r=r.slice();for(var c=0;c<r.length;c++)n(r[c]);var d=l;o.push([0,"chunk-vendors"]),e()}({0:function(t,n,e){t.exports=e("56d7")},"1d77":function(t,n,e){var i=e("60d3");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,e("499e").default)("3821a1f0",i,!0,{})},"1f68":function(t,n,e){},"34ac":function(t,n,e){var i=e("7bed");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,e("499e").default)("7d48e944",i,!0,{})},"4f14":function(t,n,e){(t.exports=e("2350")(!1)).push([t.i,'\n.vux-1px,\n.vux-1px-t,\n.vux-1px-b,\n.vux-1px-tb,\n.vux-1px-l,\n.vux-1px-r {\n  position: relative;\n}\n.vux-1px:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  border: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  height: 200%;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n.vux-1px-t:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-b:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-tb:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-tb:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-l:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.vux-1px-r:after {\n  content: " ";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-right: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.vux-close {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  color: #999;\n  width: 24px;\n  height: 24px;\n}\n.vux-close:before,\n.vux-close:after {\n  content: \'\';\n  position: absolute;\n  left: 0;\n  top: 11px;\n  width: 24px;\n  height: 1px;\n  background-color: currentColor;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.vux-close:after {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n#app {\n  width: 100vw;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  padding: 0 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n#nav {\n  width: 100vw;\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  z-index: 2;\n}\n.swiper {\n  width: 100vw;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.slideHeader {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #f0eff4;\n  height: 44px;\n}\n.xs-plugin-pulldown-container {\n  line-height: 40px;\n}\n.xs-plugin-pullup-container {\n  line-height: 40px;\n}\n.record {\n  height: 100px;\n}\n',""])},"56d7":function(t,n,e){"use strict";e.r(n),e("386d"),e("cadf"),e("551c"),e("097d");var i=e("2b0e"),a={TITLE:"赛事",TAB_ITEMS:["战绩","英超","NBA","CBA"],SPORTS_NAME:{csl:"中超",cba:"CBA",nba:"NBA",epl:"英超",laliga:"西甲",seriea:"意甲"},MATCH_STATE:["未开奖","已开奖"],TRANS_STATE:["上链中","上链成功","上链失败"],BTN_2:["主胜","客胜"],BTN_3:["主胜","平","客胜"],RULE:["1.每场比赛参与次数不限。额度参看选项。截止竞猜时间为本场开赛前十分钟。","2.猜中比赛结果则赢得本场竞猜，未猜中则输掉OC，赢家按照占比赢取输家OC。","3.派奖公式: (猜中玩家参与OC数/猜中玩家参与总OC数) x (未猜中玩家参与总额 x 99%)。保留1%作为平台运营费用。派奖中包含玩家已投注OC数。","4.若比赛取消或因特殊情况未能确定比赛结果, 全部退回。","5.为公平起见，对于恶意破坏竞猜规则的用户，进行查证并取消资格，OC 均不退还。"],pulldownDefaultConfig:{content:"下拉刷新",height:40,autoRefresh:!1,downContent:"下拉刷新",upContent:"释放后刷新",loadingContent:"正在刷新...",clsPrefix:"xs-plugin-pulldown-"},pullupDefaultConfig:{content:"加载中...",pullUpHeight:60,height:40,autoRefresh:!1,downContent:"加载中...",upContent:"加载中...",loadingContent:"加载中...",clsPrefix:"xs-plugin-pullup-"},BET_EMPTY:"您还未参与竞猜!",BET_FINISHED:"竞猜已截止",ERR_NETWORK:"网络错误,稍后再试!",ERR_INNER:"系统内部错误"},o=e("9c56"),s=e("f76c"),r=(e("dfa4"),e("7212")),l=e("3c52"),c=(e("6b54"),e("c5f6"),e("0e44")),d=e("94c0"),p=e("e35e"),f=e("81b6"),m=e("daa4"),b=e("582b"),u=e("6a95"),x=e("f6cf"),h=e("3f41"),w=(l.a,d.a,p.a,f.a,m.a,u.a,h.a,b.a,String,Number,Boolean,Number,Number,Object(x.a)(function(t,n){if(Math.ceil((new Date).getTime()/1e3)+this.deadline>=this.list[t].match_time)this.$toast(a.BET_FINISHED);else{if(this.itemIndex=t,this.tabIndex=n,this.isShow=!0,this.isDrawn=!1,1==n&&3==this.pressNum)return this.isDrawn=!0,this.win_logo=this.list[t].home_club_logo,this.win_name=this.list[t].home_club_name,this.lose_logo=this.list[t].guest_club_logo,void(this.lose_name=this.list[t].guest_club_name);this.win_logo=0==n?this.list[t].home_club_logo:this.list[t].guest_club_logo,this.win_name=0==n?this.list[t].home_club_name:this.list[t].guest_club_name,1==n&&2==this.pressNum&&(this.tabIndex=2)}},800,{trailing:!1}),Object(x.a)(function(t,n,e){var i=this,o=this.list[n],s=a.SPORTS_NAME[this.type]+Object(c.a)(new Date(1e3*o.match_time),"YYYY")+"赛季"+(o.round?"第"+o.round+"轮 ":"")+"\n";switch(e){case 0:s+=o.home_club_name+", 胜!\n投注 "+t+" OC";break;case 1:s+=o.home_club_name+" 平 "+o.guest_club_name+"\n投注 "+t+" OC";break;case 2:s+=o.guest_club_name+", 胜!\n投注 "+t+" OC"}this.$http.post("/sports/bet",{address:this.$user.addr,match_id:o.match_id,bet:e,stake:t,mobile:this.$user.mobile,match_type:this.type}).then(function(n){setTimeout(function(){i.isShow=!1},500),i.$wechat.miniProgram.navigateTo({url:"/pages/transfer/transfer?symbol=OC&tokenid=1&source=sports&addr=0x1baa5dd04d1da02e43d15471f2dc8c2e51c7c1b0&desc="+s+"&org_transid="+n.data.org_trans_id+"&price="+t})}).catch(function(t){return i.$toast(t.response?a.ERR_INNER:a.ERR_NETWORK)})},1500,{trailing:!1}),{name:"Match",components:{Scroller:l.a,ButtonTab:d.a,ButtonTabItem:p.a,Divider:f.a,Popup:m.a,XButton:u.a,alert:h.a},directives:{TransferDom:b.a},props:{type:{type:String,default:"csl"},pressNum:{type:Number,default:3},isActive:{type:Boolean,default:!1},loadTipsInterval:{type:Number,default:500},deadline:{type:Number,default:600}},data:function(){return{pulldownDefaultConfig:a.pulldownDefaultConfig,pressTabs:[],isLoading:!1,list:[],isShow:!1,win_logo:"",win_name:"",lose_logo:"",lose_name:"",isDrawn:!1,itemIndex:0,tabIndex:0,alertShow:!1,info:a}},mounted:function(){var t=this;this.$nextTick(function(){t.$refs.scroller.reset({top:0})})},watch:{isActive:function(t){var n=this;t&&0==this.list.length&&!this.isLoading&&(this.pressTabs=3==this.pressNum?a.BTN_3:a.BTN_2,this.$nextTick(function(){n.$refs.scroller.pulldown._changeStatus("loading"),n.$refs.scroller.reset({top:-44},500),n.refresh()}))}},filters:{dateFormat:function(t){return Object(c.a)(new Date(1e3*t),"MM月DD日 HH:mm")},ocFormat:function(t){if(t<1e4)return t;var n=(t/1e4).toString();return 0==n.substr(n.indexOf(".")+1,1)?n.substr(0,n.indexOf("."))+"w":n.substring(0,n.indexOf(".")+2)+"w"}},methods:{getList:function(t){var n=this;this.$http.get("/sports/matchinfo/"+this.type).then(function(n){var e=n.data;t(e)}).catch(function(t){n.$toast(a.ERR_NETWORK,function(){n.$refs.scroller.donePulldown(),n.isLoading=!1})})},refresh:function(){var t=this;this.isLoading||(this.isLoading=!0,this.getList(function(n){setTimeout(function(){t.list=n,t.$nextTick(function(){t.$refs.scroller.donePulldown(),t.$refs.scroller.reset({top:0},500),t.isLoading=!1})},t.loadTipsInterval)}))},tapItem:Object(x.a)(function(t,n){if(Math.ceil((new Date).getTime()/1e3)+this.deadline>=this.list[t].match_time)this.$toast(a.BET_FINISHED);else{if(this.itemIndex=t,this.tabIndex=n,this.isShow=!0,this.isDrawn=!1,1==n&&3==this.pressNum)return this.isDrawn=!0,this.win_logo=this.list[t].home_club_logo,this.win_name=this.list[t].home_club_name,this.lose_logo=this.list[t].guest_club_logo,void(this.lose_name=this.list[t].guest_club_name);this.win_logo=0==n?this.list[t].home_club_logo:this.list[t].guest_club_logo,this.win_name=0==n?this.list[t].home_club_name:this.list[t].guest_club_name,1==n&&2==this.pressNum&&(this.tabIndex=2)}},800,{trailing:!1}),tapRule:function(){this.alertShow=!0},pay:Object(x.a)(function(t,n,e){var i=this,o=this.list[n],s=a.SPORTS_NAME[this.type]+Object(c.a)(new Date(1e3*o.match_time),"YYYY")+"赛季"+(o.round?"第"+o.round+"轮 ":"")+"\n";switch(e){case 0:s+=o.home_club_name+", 胜!\n投注 "+t+" OC";break;case 1:s+=o.home_club_name+" 平 "+o.guest_club_name+"\n投注 "+t+" OC";break;case 2:s+=o.guest_club_name+", 胜!\n投注 "+t+" OC"}this.$http.post("/sports/bet",{address:this.$user.addr,match_id:o.match_id,bet:e,stake:t,mobile:this.$user.mobile,match_type:this.type}).then(function(n){setTimeout(function(){i.isShow=!1},500),i.$wechat.miniProgram.navigateTo({url:"/pages/transfer/transfer?symbol=OC&tokenid=1&source=sports&addr=0x1baa5dd04d1da02e43d15471f2dc8c2e51c7c1b0&desc="+s+"&org_transid="+n.data.org_trans_id+"&price="+t})}).catch(function(t){return i.$toast(t.response?a.ERR_INNER:a.ERR_NETWORK)})},1500,{trailing:!1})}}),v=e("2455"),g=function(t){e("34ac")},_=Object(v.a)(w,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("scroller",{ref:"scroller",attrs:{"use-pulldown":"","pulldown-config":t.pulldownDefaultConfig,"lock-x":"",enableHorizontalSwiping:"",height:"-44"},on:{"on-pulldown-loading":t.refresh}},[e("div",{staticClass:"match-csl"},[t._l(t.list,function(n,i){return e("div",{key:n.match_id,staticClass:"csl-item"},[e("div",{staticClass:"csl-header"},[e("p",{staticStyle:{width:"45vw"}},[t._v("本场已投注 "),e("span",{staticStyle:{color:"#c38b36"}},[t._v(t._s(t._f("ocFormat")(n.total_oc)))])]),t._v(" "),e("div",{staticClass:"bet"},[e("p",[t._v("主胜:"+t._s(t._f("ocFormat")(n.win_oc)))]),t._v(" "),3==t.pressNum?e("p",[t._v("平:"+t._s(t._f("ocFormat")(n.draw_oc)))]):t._e(),t._v(" "),e("p",[t._v("客胜:"+t._s(t._f("ocFormat")(n.lose_oc)))])])]),t._v(" "),e("div",{staticClass:"csl-info"},[e("div",{staticClass:"team"},[e("img",{staticClass:"logo",attrs:{src:n.home_club_logo}}),t._v(" "),e("p",[t._v(t._s(n.home_club_name))])]),t._v(" "),e("div",{staticClass:"vs"},[Math.ceil((new Date).getTime()/1e3)+600>=n.match_time?e("p",{staticClass:"finish"},[t._v(t._s(t.info.BET_FINISHED))]):t._e(),t._v(" "),n.round?e("p",{staticClass:"round"},[t._v("第"+t._s(n.round)+"轮")]):t._e(),t._v(" "),0==n.match_state?e("p",[t._v("VS")]):e("p",[t._v(t._s(n.home_score)+" : "+t._s(n.guest_score))]),t._v(" "),e("p",{staticClass:"time"},[t._v(t._s(t._f("dateFormat")(n.match_time)))])]),t._v(" "),e("div",{staticClass:"team"},[e("img",{staticClass:"logo",attrs:{src:n.guest_club_logo}}),t._v(" "),e("p",[t._v(t._s(n.guest_club_name))])])]),t._v(" "),e("div",{staticClass:"csl-quiz"},[e("button-tab",{staticClass:"csl-btn"},t._l(t.pressTabs,function(n){return e("button-tab-item",{key:n.index,on:{"on-item-click":function(n){t.tapItem(i,n)}}},[t._v(t._s(n))])}))],1)])}),t._v(" "),e("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[e("popup",{staticClass:"mask",attrs:{"is-transparent":""},model:{value:t.isShow,callback:function(n){t.isShow=n},expression:"isShow"}},[e("div",{staticClass:"pay"},[e("div",{staticClass:"payHeader",class:{payWin:!t.isDrawn}},[e("div",{staticClass:"payTeam",class:{right:t.isDrawn}},[t.isDrawn?e("p",{staticClass:"teamName",staticStyle:{"text-align":"right"}},[t._v(t._s(t.win_name))]):t._e(),t._v(" "),e("img",{staticClass:"logo",attrs:{src:t.win_logo}}),t._v(" "),t.isDrawn?t._e():e("p",{staticClass:"teamName"},[t._v(t._s(t.win_name))])]),t._v(" "),t.isDrawn?e("p",{staticClass:"drawn"},[t._v("平")]):t._e(),t._v(" "),t.isDrawn?e("div",{staticClass:"payTeam",class:{payDrawn:t.isDrawn}},[e("img",{staticClass:"logo",attrs:{src:t.lose_logo}}),t._v(" "),e("p",{staticClass:"teamName"},[t._v(t._s(t.lose_name))])]):t._e()]),t._v(" "),e("div",{staticClass:"payContent"},[e("x-button",{staticClass:"payBtn",attrs:{type:"default"},nativeOn:{click:function(n){t.pay(1,t.itemIndex,t.tabIndex)}}},[t._v("1 "),e("span",{staticClass:"money"},[t._v("oc")])]),t._v(" "),e("x-button",{staticClass:"payBtn",attrs:{type:"default"},nativeOn:{click:function(n){t.pay(5,t.itemIndex,t.tabIndex)}}},[t._v("5 "),e("span",{staticClass:"money"},[t._v("oc")])]),t._v(" "),e("x-button",{staticClass:"payBtn",attrs:{type:"default"},nativeOn:{click:function(n){t.pay(10,t.itemIndex,t.tabIndex)}}},[t._v("10 "),e("span",{staticClass:"money"},[t._v("oc")])]),t._v(" "),e("x-button",{staticClass:"payBtn",attrs:{type:"default"},nativeOn:{click:function(n){t.pay(20,t.itemIndex,t.tabIndex)}}},[t._v("20 "),e("span",{staticClass:"money"},[t._v("oc")])]),t._v(" "),e("x-button",{staticClass:"payBtn",attrs:{type:"default"},nativeOn:{click:function(n){t.pay(50,t.itemIndex,t.tabIndex)}}},[t._v("50 "),e("span",{staticClass:"money"},[t._v("oc")])]),t._v(" "),e("x-button",{staticClass:"payBtn",attrs:{type:"default"},nativeOn:{click:function(n){t.pay(100,t.itemIndex,t.tabIndex)}}},[t._v("100 "),e("span",{staticClass:"money"},[t._v("oc")])]),t._v(" "),e("x-button",{staticClass:"payBtn",attrs:{type:"default"},nativeOn:{click:function(n){t.pay(500,t.itemIndex,t.tabIndex)}}},[t._v("500 "),e("span",{staticClass:"money"},[t._v("oc")])]),t._v(" "),e("x-button",{staticClass:"payBtn",attrs:{type:"default"},nativeOn:{click:function(n){t.pay(888,t.itemIndex,t.tabIndex)}}},[t._v("888 "),e("span",{staticClass:"money"},[t._v("oc")])])],1),t._v(" "),e("div",{staticClass:"rule",on:{click:t.tapRule}},[e("svg",{staticClass:"vux-x-icon vux-x-icon-ios-help-outline",staticStyle:{fill:"#666"},attrs:{type:"ios-help-outline",size:"16",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z"}}),e("path",{attrs:{d:"M259.6 146c-43.2 0-67.3 20.3-67.6 62.2h18.8c-.6-30.4 15.5-46.5 47.9-46.5 23.2 0 42.6 16.2 42.6 39.8 0 15.3-8.3 27.7-19.4 38.1-22.6 20.8-29 36-30.1 64.5h19c1.1-25.8.5-30.7 23.3-53.3 15.2-14.2 25.9-28.3 25.9-50.2 0-34.2-27.4-54.6-60.4-54.6zm.7 186.3c-9.4 0-17 7.5-17 16.8s7.6 16.9 17 16.9 17-7.5 17-16.9c0-9.3-7.6-16.8-17-16.8z"}})]),t._v(" "),e("p",[t._v("竞猜规则")])])])])],1),t._v(" "),e("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[e("alert",{attrs:{title:"竞猜规则","button-text":"同意"},model:{value:t.alertShow,callback:function(n){t.alertShow=n},expression:"alertShow"}},t._l(t.info.RULE,function(n){return e("p",{staticClass:"ruleContent"},[t._v(t._s(n))])}))],1)],2)])},[],!1,g,"data-v-d1e6def4",null).exports,y=(l.a,Boolean,Number,Object(x.a)(function(t){0!=this.records[t].income&&this.$wechat.miniProgram.navigateTo({url:"/pages/detail/detail?tokenid=1&source=sports&transid="+this.records[t].pb_trans_id})},1500,{trailing:!1}),Object(x.a)(function(t){0!=this.records[t].trans_state&&this.$wechat.miniProgram.navigateTo({url:"/pages/detail/detail?tokenid=1&source=sports&transid="+this.records[t].trans_id})},1500,{trailing:!1}),{name:"Record",components:{Scroller:l.a},props:{isActive:{type:Boolean,default:!1},loadTipsInterval:{type:Number,default:500}},data:function(){return{isLoading:!1,total:0,page:1,pageSize:4,records:[],notplay:"notplay",playing:"playing",played:"played",lose:"lose",win:"win",nomore:!1,nobet:!1,info:a,pulldownDefaultConfig:a.pulldownDefaultConfig,pullupDefaultConfig:a.pullupDefaultConfig}},mounted:function(){var t=this;this.$nextTick(function(){t.$refs.scroller.reset({top:0})})},watch:{isActive:function(t){var n=this;t&&0==this.records.length&&!this.isLoading&&(this.$refs.scroller.disablePullup(),this.$nextTick(function(){n.$refs.scroller.pulldown._changeStatus("loading"),n.$refs.scroller.reset({top:-44},500),n.refresh()}))}},filters:{dateFormat:function(t){return Object(c.a)(new Date(1e3*t),"MM月DD日 HH:mm")},matchState:function(t){return a.MATCH_STATE[t]},matchType:function(t){return a.SPORTS_NAME[t]},betTeam:function(t){return 0==t?"主队胜: ":2==t?"客队胜: ":"两队平: "}},methods:{getRecords:function(t){this.$http.get("/sports/matchinfo/mine",{params:{addr:this.$user.addr,page:this.page-1,limit:this.pageSize}}).then(function(n){var e=n.data;return t(e)}).catch(function(n){return t("",n)})},tapItem:Object(x.a)(function(t){0!=this.records[t].income&&this.$wechat.miniProgram.navigateTo({url:"/pages/detail/detail?tokenid=1&source=sports&transid="+this.records[t].pb_trans_id})},1500,{trailing:!1}),tapBet:Object(x.a)(function(t){0!=this.records[t].trans_state&&this.$wechat.miniProgram.navigateTo({url:"/pages/detail/detail?tokenid=1&source=sports&transid="+this.records[t].trans_id})},1500,{trailing:!1}),refresh:function(){var t=this;this.isLoading||(this.page=1,this.nomore=!1,this.isLoading=!0,this.getRecords(function(n,e){e?t.$toast(a.ERR_NETWORK,function(){t.$refs.scroller.donePulldown(),t.isLoading=!1}):setTimeout(function(){t.total=n.count,t.records=n.matches,t.$nextTick(function(){t.$refs.scroller.donePulldown(),t.$refs.scroller.reset({top:0},500)}),t.nobet=0==n.matches.length,t.total>t.pageSize&&t.$refs.scroller.enablePullup(),t.isLoading=!1},t.loadTipsInterval)}))},loadMore:function(){var t=this;if(!this.isLoading){if(++this.page,this.page>Math.ceil(this.total/this.pageSize))return this.$refs.scroller.donePullup(),this.$refs.scroller.disablePullup(),this.isLoading=!1,void(this.nomore=!0);this.isLoading=!0,this.getRecords(function(n,e){e?t.$toast(a.ERR_NETWORK,function(){t.$refs.scroller.donePullup(),t.isLoading=!1}):setTimeout(function(){0!=n.matches.length?(t.records=t.records.concat(n.matches),t.$nextTick(function(){t.$refs.scroller.reset()})):(t.nomore=!0,t.$refs.scroller.disablePullup()),t.$refs.scroller.donePullup(),t.isLoading=!1},t.loadTipsInterval)})}}}}),k=function(t){e("1d77")},C=Object(v.a)(y,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("scroller",{ref:"scroller",attrs:{"use-pullup":"","pullup-config":t.pullupDefaultConfig,"use-pulldown":"","pulldown-config":t.pulldownDefaultConfig,"lock-x":"",enableHorizontalSwiping:"",height:"-44","scroll-bottom-offset":120},on:{"on-pullup-loading":t.loadMore,"on-pulldown-loading":t.refresh}},[e("div",{attrs:{id:"mine"}},[t._l(t.records,function(n,i){return e("div",{key:n.id,staticClass:"record",on:{click:function(n){t.tapItem(i)}}},[e("div",{staticClass:"header"},[e("div",{staticClass:"match"},[e("p",{staticClass:"time"},[t._v(t._s(t._f("dateFormat")(n.match_time)))]),t._v(" "),e("p",{staticClass:"matchType"},[t._v(t._s(t._f("matchType")(n.match_type)))]),t._v(" "),e("p",{staticClass:"matchState",class:[0==n.payed?t.playing:t.played]},[t._v("| "+t._s(t._f("matchState")(n.payed)))])]),t._v(" "),1==n.payed?e("p",{staticClass:"income",class:[0==n.income?t.lose:t.win]},[t._v(t._s(0==n.income?"未猜中":"+"+n.income+" OC")+" ")]):t._e()]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"team home"},[e("p",[t._v(t._s(n.home_club_name))]),t._v(" "),e("img",{staticClass:"logo",attrs:{src:n.home_club_logo}})]),t._v(" "),e("div",{staticClass:"vs"},[0==n.match_state?e("p",[t._v("VS")]):e("p",[t._v(t._s(n.home_score)+" : "+t._s(n.guest_score))])]),t._v(" "),e("div",{staticClass:"team"},[e("img",{staticClass:"logo",attrs:{src:n.guest_club_logo}}),t._v(" "),e("p",[t._v(t._s(n.guest_club_name))])])]),t._v(" "),e("div",{staticClass:"footer"},[e("p",{on:{click:function(n){n.stopPropagation(),t.tapBet(i)}}},[t._v(t._s(t._f("betTeam")(n.bet,n))+" "+t._s(n.stake)+" OC "),e("span",{class:[0==n.trans_state?t.notplay:1==n.trans_state?t.playing:t.played]},[t._v(t._s(t.info.TRANS_STATE[n.trans_state]))])]),t._v(" "),e("p",[t._v(t._s(t._f("dateFormat")(n.bet_time))+" 参与的竞猜")])])])}),t._v(" "),t.nobet?e("p",{staticClass:"nobet"},[t._v(t._s(t.info.BET_EMPTY))]):t._e(),t._v(" "),t.nomore?e("p",{staticClass:"noMore"},[t._v("没有更多了")]):t._e()],2)])},[],!1,k,"data-v-0f4eda36",null).exports,T=(o.a,s.a,r.swiper,r.swiperSlide,l.a,{components:{Tab:o.a,TabItem:s.a,swiper:r.swiper,swiperSlide:r.swiperSlide,Scroller:l.a,Match:_,Record:C},data:function(){return{index:0,items:a.TAB_ITEMS,swiperOption:{initialSlide:1,direction:"horizontal",autoHeight:!0,touchMoveStopPropagation:!1}}},computed:{swiper:function(){return this.$refs.swiper.swiper}},watch:{index:function(t){this.swiper.activeIndex=t}},methods:{slideChange:function(){this.index=this.swiper.activeIndex}}}),S=function(t){e("a0b7")},O=Object(v.a)(T,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("tab",{attrs:{id:"nav","line-width":2,animate:!1,"active-color":"#d66a5c","default-color":"#39495c"},model:{value:t.index,callback:function(n){t.index=n},expression:"index"}},t._l(t.items,function(n,i){return e("tab-item",{key:i,staticClass:"vux-center",attrs:{selected:1==i}},[t._v(t._s(n))])})),t._v(" "),e("swiper",{ref:"swiper",staticClass:"swiper",attrs:{options:t.swiperOption},on:{slideChange:t.slideChange}},[e("swiper-slide",[e("div",{staticClass:"slideHeader"}),t._v(" "),e("record",{attrs:{isActive:0==t.index}})],1),t._v(" "),e("swiper-slide",[e("div",{staticClass:"slideHeader"}),t._v(" "),e("match",{attrs:{isActive:1==t.index,type:"epl"}})],1),t._v(" "),e("swiper-slide",[e("div",{staticClass:"slideHeader"}),t._v(" "),e("match",{attrs:{isActive:2==t.index,type:"nba",pressNum:2}})],1),t._v(" "),e("swiper-slide",[e("div",{staticClass:"slideHeader"}),t._v(" "),e("match",{attrs:{isActive:3==t.index,type:"cba",pressNum:2}})],1)],1)],1)},[],!1,S,null,null).exports,$=e("bc3a"),j=e.n($),I=e("772d"),N=e("7514"),E=e("a3a3"),z=e("bbef"),R=e("c1f6");e("1f68"),e("fe3c").attach(document.body),i.a.use(N.a),i.a.use(E.a),i.a.use(z.a,{$layout:"VIEW_BOX"}),i.a.config.productionTip=!1,i.a.prototype.$user=R.a.parse(window.location.search.substring(1)),i.a.prototype.$http=j.a,j.a.interceptors.request.use(function(t){return t.baseURL="https://api-games.onechain.life",t.timeout=3500,t.headers={"Cache-Control":"max-age=0",Mobile:i.a.prototype.$user.mobile,Addr:i.a.prototype.$user.addr,Expires:+new Date},t.headers.Sign=Object(I.a)([t.headers.Mobile,t.headers.Addr.substr(6,11),t.headers.Expires].join("#|#")),t},function(t){return Promise.reject(error)}),i.a.prototype.$toast=function(t,n){this.$vux.toast.show({text:t,width:"10em",position:"middle",type:"text",onHide:function(){"function"==typeof n&&n()}})},N.a.$wechat.miniProgram.getEnv(function(t){t.miniprogram&&new i.a({render:function(t){return t(O)}}).$mount("#app")})},"60d3":function(t,n,e){(t.exports=e("2350")(!1)).push([t.i,"\n#mine[data-v-0f4eda36] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100vw;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-top: 1vh;\n}\n.record[data-v-0f4eda36] {\n    width: 96vw;\n    height: 23vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    border-bottom: 1px solid #eee;\n    border-radius: 5px;\n    background-color: white;\n    margin-bottom: 2vh;\n    padding-bottom: 2vh;\n}\n.record[data-v-0f4eda36]:first-child {\n    margin-top: 1.3vh;\n}\n.header[data-v-0f4eda36] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    margin: 5px 5px 0 5px;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n.match[data-v-0f4eda36] {\n    width: 50vw;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.income[data-v-0f4eda36] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.win[data-v-0f4eda36] {\n    width: 45vw;\n    color: red;\n    font-size: 1.8rem;\n}\n.lose[data-v-0f4eda36] {\n    width: auto;\n    height: 20px;\n    color: #aaa;\n    transform:rotate(40deg);\n    -webkit-transform:rotate(40deg);\n    margin-top:8px;\n    margin-right: -6px;\n    font-size: 1.8rem;\n}\n.notplay[data-v-0f4eda36] {\n    color: #c38b36 !important;\n}\n.playing[data-v-0f4eda36] {\n    color: green !important;\n}\n.played[data-v-0f4eda36] {\n    color: red !important;\n}\n.content[data-v-0f4eda36] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n.team[data-v-0f4eda36] {\n    width: 40vw;\n    height: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #39495c;\n}\n.home[data-v-0f4eda36] {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.team > p[data-v-0f4eda36] {\n    font-size: 1.6rem;\n}\n.vs[data-v-0f4eda36] {\n    width: 20vw;\n    height: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.logo[data-v-0f4eda36] {\n    width: 8vw;\n    height: auto;\n    margin: 5px;\n}\n.time[data-v-0f4eda36], .matchState[data-v-0f4eda36], .matchType[data-v-0f4eda36] {\n    font-size: 1.2rem;\n    color: #999;\n    margin-right: 5px;\n}\n.matchType[data-v-0f4eda36] {\n    color: #666;\n}\n.footer[data-v-0f4eda36] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    margin: 0 5px 5px 5px;\n    font-size: 1.2rem;\n    color: #888;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n.noMore[data-v-0f4eda36] {\n    color: #666;\n    margin-bottom: 2vh;\n}\n.nobet[data-v-0f4eda36] {\n    width: 100vw;\n    height: 80vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #666;\n    font-size: 2rem;\n}\n.state[data-v-0f4eda36] {\n    color: red;\n}\n\n",""])},"7bed":function(t,n,e){(t.exports=e("2350")(!1)).push([t.i,"\n.match-csl[data-v-d1e6def4] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100vw;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-top: 1vh;\n}\n.csl-item[data-v-d1e6def4] {\n    width: 96vw;\n    height: 26vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    border-bottom: 1px solid #eee;\n    /*border-radius: 5px; */\n    margin-bottom: 2vh;\n    padding-bottom: 1.5vh;\n    background-color: white;\n}\n.csl-item[data-v-d1e6def4]:last-child {\n    border-bottom: 0;\n}\n.csl-item[data-v-d1e6def4]:first-child {\n    margin-top: 1.3vh;\n}\n.csl-info[data-v-d1e6def4] {\n    margin-top: 1.2vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.csl-header[data-v-d1e6def4] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    margin: 5px 5px 0 10px;\n    color: #999;\n    font-size: 1.2rem;\n}\n.team[data-v-d1e6def4] {\n    width: 35vw;\n    height: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #39495c;\n}\n.team > p[data-v-d1e6def4] {\n    margin-top: 5px;\n    font-size: 1.4rem;\n}\n.vs[data-v-d1e6def4] {\n    width: 30vw;\n    height: 12vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.round[data-v-d1e6def4] {\n    font-size: 1rem;\n    color: #999;\n}\n.time[data-v-d1e6def4] {\n    font-size: 1rem;\n    color: #999;\n}\n.logo[data-v-d1e6def4] {\n    width: 15vw;\n    height: auto;\n}\n.csl-quiz[data-v-d1e6def4] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.csl-btn[data-v-d1e6def4] {\n    width: 90vw;\n    margin: 1.5vh 0;\n}\n.mask[data-v-d1e6def4] {\n    height: 220px;\n}\n.pay[data-v-d1e6def4] {\n    width: 100vw;\n    height: 220px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-color: white;\n    padding-top: 10px;\n}\n.payContent[data-v-d1e6def4] {\n    width: 95vw;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    margin-top: 10px;\n}\n.payHeader[data-v-d1e6def4] {\n    width: 100vw;\n    height: 6vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.drawn[data-v-d1e6def4] {\n    height: 6vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 1.8rem;\n    color: #3b4959;\n    margin: 0 10px;\n}\n.payBtn[data-v-d1e6def4] {\n    width: 80px;\n    height: 60px;\n    color: #3b4959;\n    margin-top: 0 !important;\n    margin-bottom: 15px;\n}\n.money[data-v-d1e6def4] {\n    font-size: 0.8rem;\n}\n.payTeam[data-v-d1e6def4] {\n    width: 45vw;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #39495c;\n}\n.payTeam > .logo[data-v-d1e6def4] {\n    width: 9vw;\n    height: auto;\n}\n.payWin[data-v-d1e6def4] {\n    width: 96vw;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n.teamName[data-v-d1e6def4] {\n    margin: 0 10px;\n    font-size: 1.8rem;\n}\n.right[data-v-d1e6def4] {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.help[data-v-d1e6def4] {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n    margin: 5px 8px 0 0;\n}\n.rule[data-v-d1e6def4] {\n    width: 95vw;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #666;\n    font-size: 1.4rem;\n    /*align-self: flex-start; */\n    margin-bottom: 8px;\n}\n.rule > p[data-v-d1e6def4] {\n    margin-left: 3px;\n}\n.bet[data-v-d1e6def4] {\n    width: 55vw;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n.bet p[data-v-d1e6def4] {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n.ruleContent[data-v-d1e6def4] {\n    color: #3b4959;\n    text-align: left;\n    margin-bottom: 10px;\n}\n.finish[data-v-d1e6def4] {\n    color: #c38b36;\n    font-size: 1.4rem;\n}\n\n",""])},a0b7:function(t,n,e){var i=e("4f14");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,e("499e").default)("073b33a0",i,!0,{})}});