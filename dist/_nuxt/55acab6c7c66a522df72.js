(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{423:function(n,e,t){var content=t(468);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(23).default)("2e1b39e2",content,!0,{sourceMap:!1})},467:function(n,e,t){"use strict";var r=t(423);t.n(r).a},468:function(n,e,t){(e=t(22)(!1)).push([n.i,".ts[data-v-b0b5e214]{-webkit-transition-timing-function:cubic-bezier(.47,0,.745,.715);transition-timing-function:cubic-bezier(.47,0,.745,.715);-webkit-transition:.3s;transition:.3s}",""]),n.exports=e},504:function(n,e,t){"use strict";t.r(e);t(63),t(17);var r,c=t(3),o=t(398),f=t(394),content=t(404),h={components:{AppBreadcrumbs:f.a,AppSideBar:o.a,AppContent:content.a},asyncData:(r=Object(c.a)(regeneratorRuntime.mark((function n(e){var t,r,c,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.store,r=e.params,n.next=3,t.dispatch("news/fetchPressCenter",r.id);case 3:return c=n.sent,o=c.news,n.abrupt("return",{currentNews:o});case 6:case"end":return n.stop()}}),n)}))),function(n){return r.apply(this,arguments)}),computed:{news:function(){var n,e=this.$route.params.id;return this.currentNews.forEach((function(t,i,r){t.items.forEach((function(t,i,r){t.path==e&&(n=t)}))})),n},names:function(){var n=["Главная","Пресс-центр","Новости"];this.$route.params.id;return console.log(this.news.name),n.push(this.news.name),n},links:function(){var n=["/","/press-center/news/","/press-center/news/"];this.$route.params.id;return n.push(this.news.path),n},bg:function(){return"catalog-bread-bg.jpg"},heading:function(){return"Пресс-центр"},sideLinks:function(){var n=[];return this.currentNews.forEach((function(e,i,t){n.push(e.path)})),n},sideNames:function(){var n=[];return this.currentNews.forEach((function(e,i,t){n.push(e.name)})),n}},created:function(){console.log(this.currentNews)}},d=(t(467),t(11)),component=Object(d.a)(h,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("app-breadcrumbs",{attrs:{names:n.names,links:n.links,bg:n.bg,heading:n.heading}}),n._v(" "),t("div",{staticClass:"container content"},[t("app-side-bar",{attrs:{links:n.sideLinks,names:n.sideNames,section:"press-center"}}),n._v(" "),t("app-content",{attrs:{h2:n.news.name,content:n.news.textDetail,imgDetail:n.news.imgDetail}})],1)],1)}),[],!1,null,"b0b5e214",null);e.default=component.exports}}]);