(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{383:function(t,n,r){},384:function(t,n,r){"use strict";var e={props:["names","links","bg","heading"]},c=(r(385),r(11)),component=Object(c.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"breadcrumbs breadcrumbs-section",style:{"background-image":"url("+t.getImage(t.bg)+")"}},[r("div",{staticClass:"container"},[r("nav",[r("ul",t._l(t.links,(function(link,n){return r("li",{key:n},[r("nuxt-link",{attrs:{to:link}},[r("div",[t._v("\n              "+t._s(t.names[n])+"\n            ")])])],1)})),0)]),t._v(" "),r("div",{staticClass:"breadcrumbs-heading-wrap"},[r("h1",{staticClass:"breadcrumbs-heading"},[t._v(t._s(t.heading))]),t._v(" "),r("button",[r("div",{staticClass:"btn-content"},[r("img",{attrs:{src:t.getImage("compare-icon.svg"),alt:""}}),t._v(" Сравнение \n        ")]),t._v(" "),r("span",[t._v("2")])])])])])}),[],!1,null,"221239f0",null);n.a=component.exports},385:function(t,n,r){"use strict";var e=r(383);r.n(e).a},400:function(t,n,r){},430:function(t,n,r){"use strict";var e=r(400);r.n(e).a},462:function(t,n,r){"use strict";r.r(n);r(61),r(17);var e,c=r(3),o={data:function(){return{id:this.$route.params.id}},components:{AppBreadcrumbs:r(384).a},asyncData:(e=Object(c.a)(regeneratorRuntime.mark((function t(n){var r,e,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.store,n.params,t.next=3,r.dispatch("catalog/fetchCatalog");case 3:return e=t.sent,c=e.data,t.abrupt("return",{catalogs:c});case 6:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)}),created:function(){},computed:{products:function(){var t=this;return this.catalogs.filter((function(n){return n.id==t.$route.params.parentId}))[0].subItems.filter((function(p){return p.id==t.$route.params.id}))[0]},current:function(){var t=this;return this.catalogs.filter((function(n){return n.id==t.$route.params.parentId}))[0]},names:function(){var t=[];return t.push("Главная","Каталог",this.current.name,this.products.name),t},links:function(){var t=[];return t.push("/","/catalog","#","#"),t},bg:function(){return"catalog-bread-bg.jpg"},heading:function(){return"Каталог продукции"}}},d=(r(430),r(11)),component=Object(d.a)(o,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("app-breadcrumbs",{attrs:{names:t.names,links:t.links,bg:t.bg,heading:t.heading}}),t._v(" "),r("h1",[t._v(t._s(t.$route.params))]),t._v(" "),t._l(t.products.products,(function(n){return r("nuxt-link",{key:n.id,attrs:{to:{name:"catalog-subcatalog-products-id",params:{id:n.id,parentId:t.products.id,gparendId:t.$route.params.parentId}}}},[t._v(t._s(n.name))])}))],2)}),[],!1,null,"9e457fc8",null);n.default=component.exports}}]);