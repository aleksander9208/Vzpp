(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{383:function(t,n,e){var content=e(386);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("3446238e",content,!0,{sourceMap:!1})},384:function(t,n,e){"use strict";var r={props:["names","links","bg","heading"]},d=(e(385),e(14)),component=Object(d.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"breadcrumbs breadcrumbs-section",style:{"background-image":"url("+t.getImage(t.bg)+")"}},[e("div",{staticClass:"container"},[e("nav",[e("ul",t._l(t.links,(function(link,n){return e("li",{key:n},[e("nuxt-link",{attrs:{to:link}},[e("div",[t._v("\n              "+t._s(t.names[n])+"\n            ")])])],1)})),0)]),t._v(" "),e("div",{staticClass:"breadcrumbs-heading-wrap"},[e("h1",{staticClass:"breadcrumbs-heading"},[t._v(t._s(t.heading))]),t._v(" "),e("button",[e("div",{staticClass:"btn-content"},[e("img",{attrs:{src:t.getImage("compare-icon.svg"),alt:""}}),t._v(" Сравнение \n        ")]),t._v(" "),e("span",[t._v("2")])])])])])}),[],!1,null,"3d3d3f38",null);n.a=component.exports},385:function(t,n,e){"use strict";var r=e(383);e.n(r).a},386:function(t,n,e){(n=e(26)(!1)).push([t.i,'.breadcrumbs[data-v-3d3d3f38]{padding:40px 0;margin-bottom:70px}.breadcrumbs-section[data-v-3d3d3f38]{color:#fff;background-size:cover}.breadcrumbs-section a[data-v-3d3d3f38]{color:#fff}.breadcrumbs-heading[data-v-3d3d3f38]{font-size:4rem}.breadcrumbs-heading-wrap[data-v-3d3d3f38]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.breadcrumbs-heading-wrap button[data-v-3d3d3f38]{border:none;height:32px;color:#fff;font-size:1rem;font-weight:700;text-transform:uppercase;letter-spacing:.03em;padding:0 20px;position:relative;background:transparent;cursor:pointer;-webkit-transition-timing-function:cubic-bezier(.47,0,.745,.715);transition-timing-function:cubic-bezier(.47,0,.745,.715);-webkit-transition:.3s;transition:.3s}.breadcrumbs-heading-wrap button[data-v-3d3d3f38]:hover{box-shadow:0 0 3px 0 rgba(0,0,0,.35)}.breadcrumbs-heading-wrap button[data-v-3d3d3f38]:hover:before{background:#2d80e2}.breadcrumbs-heading-wrap button:hover span[data-v-3d3d3f38]{right:-3px;top:-3px}.breadcrumbs-heading-wrap button[data-v-3d3d3f38]:before{content:"";background:#2f8fff;width:100%;height:100%;top:0;right:0;bottom:0;left:0;-webkit-clip-path:polygon(calc(100% - 15px) 0,calc(100% - 15px) 15px,100% 15px,100% 100%,0 100%,0 0);clip-path:polygon(calc(100% - 15px) 0,calc(100% - 15px) 15px,100% 15px,100% 100%,0 100%,0 0);z-index:1}.breadcrumbs-heading-wrap button[data-v-3d3d3f38]:before,.breadcrumbs-heading-wrap button span[data-v-3d3d3f38]{position:absolute;-webkit-transition-timing-function:cubic-bezier(.47,0,.745,.715);transition-timing-function:cubic-bezier(.47,0,.745,.715);-webkit-transition:.3s;transition:.3s}.breadcrumbs-heading-wrap button span[data-v-3d3d3f38]{top:-5px;right:-5px;width:15px;height:15px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;background:#ff5e25}.breadcrumbs-heading-wrap button .btn-content[data-v-3d3d3f38]{position:relative;z-index:3}.breadcrumbs nav[data-v-3d3d3f38]{margin-bottom:10px}.breadcrumbs nav ul[data-v-3d3d3f38],.breadcrumbs nav ul li[data-v-3d3d3f38]{display:-webkit-box;display:flex}.breadcrumbs nav ul li[data-v-3d3d3f38]{margin-right:10px;position:relative;-webkit-box-align:center;align-items:center}.breadcrumbs nav ul li[data-v-3d3d3f38]:after{content:">";display:inline-block;margin-left:8px;font-family:Open Sans}.breadcrumbs nav ul li[data-v-3d3d3f38]:last-child:after{content:unset}.breadcrumbs nav ul li a[data-v-3d3d3f38]{border-bottom:1px solid #fff;font-size:1.2rem;font-family:Open Sans;text-transform:none;font-weight:400}.breadcrumbs nav ul li a[data-v-3d3d3f38]:hover{border-color:transparent}',""]),t.exports=n},400:function(t,n,e){var content=e(431);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("4dc8a795",content,!0,{sourceMap:!1})},430:function(t,n,e){"use strict";var r=e(400);e.n(r).a},431:function(t,n,e){(n=e(26)(!1)).push([t.i,"h1[data-v-9e5bd3a6]{color:#f23}",""]),t.exports=n},482:function(t,n,e){"use strict";e.r(n);e(62),e(17);var r,d=e(3),o={data:function(){return{id:this.$route.params.id}},components:{AppBreadcrumbs:e(384).a},asyncData:(r=Object(d.a)(regeneratorRuntime.mark((function t(n){var e,r,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.store,n.params,t.next=3,e.dispatch("catalog/fetchCatalog");case 3:return r=t.sent,d=r.data,t.abrupt("return",{catalogs:d});case 6:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),created:function(){},computed:{products:function(){var t=this;return this.catalogs.filter((function(n){return n.id==t.$route.params.parentId}))[0].subItems.filter((function(p){return p.id==t.$route.params.id}))[0]},current:function(){var t=this;return this.catalogs.filter((function(n){return n.id==t.$route.params.parentId}))[0]},names:function(){var t=[];return t.push("Главная","Каталог",this.current.name,this.products.name),t},links:function(){var t=[];return t.push("/","/catalog","#","#"),t},bg:function(){return"catalog-bread-bg.jpg"},heading:function(){return"Каталог продукции"}}},c=(e(430),e(14)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("app-breadcrumbs",{attrs:{names:t.names,links:t.links,bg:t.bg,heading:t.heading}}),t._v(" "),e("h1",[t._v(t._s(t.$route.params))]),t._v(" "),t._l(t.products.products,(function(n){return e("nuxt-link",{key:n.id,attrs:{to:{name:"catalog-subcatalog-products-id",params:{id:n.id,parentId:t.products.id,gparendId:t.$route.params.parentId}}}},[t._v(t._s(n.name))])}))],2)}),[],!1,null,"9e5bd3a6",null);n.default=component.exports}}]);