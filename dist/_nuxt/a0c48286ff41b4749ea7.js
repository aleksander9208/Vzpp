(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{413:function(n,t,e){},444:function(n,t,e){"use strict";var c=e(413);e.n(c).a},472:function(n,t,e){"use strict";e.r(t);e(61),e(17);var c,r=e(3),o=e(387),m=e(384),content=e(392),h={components:{AppBreadcrumbs:m.a,AppSideBar:o.a,AppContent:content.a},asyncData:(c=Object(r.a)(regeneratorRuntime.mark((function n(t){var e,c,r,o,m,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.store,c=t.params,n.next=3,e.dispatch("company/fetchCompany");case 3:return r=n.sent,n.next=6,e.dispatch("company/fetchCompanyById",c.id);case 6:return o=n.sent,m=r.company,h=o.company,n.abrupt("return",{companyList:m,companyItem:h});case 10:case"end":return n.stop()}}),n)}))),function(n){return c.apply(this,arguments)}),computed:{names:function(){var n=["Главная","Предприятие"],t=this.$route.params.id;return this.companyList.forEach((function(e,i,c){e.path==t&&n.push(e.name)})),n},links:function(){var n=["/","/company/about"],t=this.$route.params.id;return this.companyList.forEach((function(e,i,c){e.path==t&&n.push("/company/"+e.path)})),n},bg:function(){return"catalog-bread-bg.jpg"},heading:function(){return"Предприятие"},sideLinks:function(){var n=[];return this.companyList.forEach((function(t,i,e){n.push(t.path)})),n},sideNames:function(){var n=[];return this.companyList.forEach((function(t,i,e){n.push(t.name)})),n}}},f=(e(444),e(11)),component=Object(f.a)(h,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("app-breadcrumbs",{attrs:{names:n.names,links:n.links,bg:n.bg,heading:n.heading}}),n._v(" "),e("div",{staticClass:"container company"},[e("app-side-bar",{attrs:{links:n.sideLinks,names:n.sideNames,section:"company"}}),n._v(" "),e("app-content",{attrs:{h2:n.companyItem.name,content:n.companyItem.content,contentRight:n.companyItem.contentRight,contentGallery:n.companyItem.contentGallery,contentRightImgs:n.companyItem.contentRightImgs}})],1)],1)}),[],!1,null,"1930ffcc",null);t.default=component.exports}}]);