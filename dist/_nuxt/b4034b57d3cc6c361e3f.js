(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{383:function(t,e,n){},384:function(t,e,n){"use strict";var c={props:["names","links","bg","heading"]},r=(n(385),n(11)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumbs breadcrumbs-section",style:{"background-image":"url("+t.getImage(t.bg)+")"}},[n("div",{staticClass:"container"},[n("nav",[n("ul",t._l(t.links,(function(link,e){return n("li",{key:e},[n("nuxt-link",{attrs:{to:link}},[n("div",[t._v("\n              "+t._s(t.names[e])+"\n            ")])])],1)})),0)]),t._v(" "),n("div",{staticClass:"breadcrumbs-heading-wrap"},[n("h1",{staticClass:"breadcrumbs-heading"},[t._v(t._s(t.heading))]),t._v(" "),n("button",[n("div",{staticClass:"btn-content"},[n("img",{attrs:{src:t.getImage("compare-icon.svg"),alt:""}}),t._v(" Сравнение \n        ")]),t._v(" "),n("span",[t._v("2")])])])])])}),[],!1,null,"221239f0",null);e.a=component.exports},385:function(t,e,n){"use strict";var c=n(383);n.n(c).a},386:function(t,e,n){},387:function(t,e,n){"use strict";var c={props:["links","names","section"]},r=(n(391),n(11)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-wrap"},[n("nav",{staticClass:"sidebar"},[n("ul",t._l(t.links,(function(link,e){return n("li",{key:link},[n("nuxt-link",{attrs:{to:"/"+t.section+"/"+link}},[t._v("\n          "+t._s(t.names[e])+" \n        ")])],1)})),0)]),t._v(" "),"history"==t.$route.params.id?n("div",{staticClass:"history-list"},[t._m(0)]):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{staticClass:"current",attrs:{href:"#y-1957"}},[t._v("1957")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#y-1959"}},[t._v("1959")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#y-1961"}},[t._v("1961")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#y-1963"}},[t._v("1963")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#y-1965"}},[t._v("1965")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#y-1967"}},[t._v("1967")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#y-1968"}},[t._v("1968")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#y-1969"}},[t._v("1969")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#y-1970"}},[t._v("1970")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#y-1974"}},[t._v("1974")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#y-1975"}},[t._v("1975")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#y-1978"}},[t._v("1978 - 1979")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#y-1981"}},[t._v("1981")])])])}],!1,null,null,null);e.a=component.exports},391:function(t,e,n){"use strict";var c=n(386);n.n(c).a},397:function(t,e,n){},427:function(t,e,n){"use strict";var c=n(397);n.n(c).a},471:function(t,e,n){"use strict";n.r(e);var c=n(384),r=n(387),v={components:{AppBreadcrumbs:c.a,AppSideBar:r.a},data:function(){return{names:["Главная","Контакты"],links:["/","/contacts/"],bg:"contacts-bread-bg.jpg",heading:"Контакты",sideLinks:["/contacts/","/requisites/"],sideNames:["Контакты","Реквизиты"],isMounted:!1}},mounted:function(){this.isMounted=!0}},_=(n(427),n(11)),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contacts"},[n("app-breadcrumbs",{attrs:{names:t.names,links:t.links,bg:t.bg,heading:t.heading}}),t._v(" "),n("div",{staticClass:"container contacts-container"},[n("div",{staticClass:"sidebar-wrap"},[n("nav",{staticClass:"sidebar"},[n("ul",t._l(t.sideLinks,(function(link,e){return n("li",{key:link},[n("nuxt-link",{attrs:{to:link}},[t._v("\n              "+t._s(t.sideNames[e])+" \n            ")])],1)})),0)])]),t._v(" "),n("div",{staticClass:"content"},[n("h2",[t._v("Контакты")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("h3",[t._v("Схема проезда")]),t._v(" "),n("client-only",[t.isMounted?n("div",[n("yandex-map",{staticClass:"map",attrs:{zoom:14,coords:[51.679314,39.254752]}},[n("ymap-marker",{attrs:{markerId:"123","marker-type":"placemark","hint-content":"г. Воронеж, Ленинский пр-т 119а ",coords:[51.679314,39.254752]}})],1)],1):t._e()])],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[this._v("\n        Акционерное общество «Воронежский Завод "),e("br"),this._v(" Полупроводниковых Приборов-Сборка»\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contacts-wrap"},[n("div",{staticClass:"contacts-item contacts-item"},[n("div",{staticClass:"contacts-item_heading"},[n("h3",[t._v("Адрес")])]),t._v(" "),n("div",{staticClass:"contacts-item_content"},[n("p",[n("b",[t._v(" Юридический:")])]),t._v(" "),n("p",[t._v("Россия, 394007, г. Воронеж, Ленинский пр-т 119а ")]),t._v(" "),n("p",[n("b",[t._v("Почтовый: ")])]),t._v(" "),n("p",[t._v("Россия, 394033, г. Воронеж, Ленинский пр-т 119а")])])]),t._v(" "),n("div",{staticClass:"contacts-item contacts-item-phone"},[n("div",{staticClass:"contacts-item_heading"},[n("h3",[t._v("Телефоны")])]),t._v(" "),n("div",{staticClass:"contacts-item_content"},[n("a",{attrs:{href:"tel:+74732267330"}},[t._v("+7 (473) 226-73-30")]),t._v(" "),n("a",{attrs:{href:"tel:+74732236951"}},[t._v("+7 (473) 223-69-51")])])]),t._v(" "),n("div",{staticClass:"contacts-item contacts-item"},[n("div",{staticClass:"contacts-item_heading"},[n("h3",[t._v("Генеральный директор")])]),t._v(" "),n("div",{staticClass:"contacts-item_content"},[n("a",{attrs:{href:"tel:+74732230355"}},[t._v("+7 (473) 223-03-55")]),t._v(" "),n("a",{attrs:{href:"tel:+74732266016"}},[t._v("+7 (473) 226-60-16")]),t._v(" "),n("a",{attrs:{href:"mailto:ceo@vzpp-s.ru"}},[t._v("ceo@vzpp-s.ru")])])]),t._v(" "),n("div",{staticClass:"contacts-item contacts-item"},[n("div",{staticClass:"contacts-item_heading"},[n("h3",[t._v("Зам.ген.директора по развитию")])]),t._v(" "),n("div",{staticClass:"contacts-item_content"},[n("a",{attrs:{href:"tel:+74732265732"}},[t._v("+7 (473) 226-57-32")]),t._v(" "),n("a",{attrs:{href:"tel:+74732279153"}},[t._v("+7 (473) 227-91-53")])])]),t._v(" "),n("div",{staticClass:"contacts-item contacts-item"},[n("div",{staticClass:"contacts-item_heading"},[n("h3",[t._v("Отдел маркетинга")])]),t._v(" "),n("div",{staticClass:"contacts-item_content"},[n("p",[t._v(" Начальник отдела, тел:  "),n("a",{attrs:{href:"tel:+74732279527"}},[t._v("+7 (473) 227-95-27")])]),t._v(" "),n("p",[t._v(" Бюро маркетинга, тел/факс: "),n("a",{attrs:{href:"tel:+74732236951"}},[t._v("+7 (473) 223-69-51")])]),t._v(" "),n("p",[t._v("e-mail: "),n("a",{attrs:{href:"mailto:market@vzpp-s.ru"}},[t._v("market@vzpp-s.ru")])])])]),t._v(" "),n("div",{staticClass:"contacts-item contacts-item"},[n("div",{staticClass:"contacts-item_heading"},[n("h3",[t._v("Отдел сбыта")])]),t._v(" "),n("div",{staticClass:"contacts-item_content"},[n("p",[t._v(" Начальник отдела:  "),n("a",{attrs:{href:"tel:+74732279247"}},[t._v("+7 (473) 227-92-47")])]),t._v(" "),n("p",[t._v(" Договорное бюро: "),n("a",{attrs:{href:"tel:+74732279137"}},[t._v("+7 (473) 227-91-37")]),t._v(" , \n              "),n("a",{attrs:{href:"tel:+74732379262"}},[t._v("+7 (473) 237-92-62 ")]),t._v(" (факс), \n              "),n("a",{attrs:{href:"tel:+74732279160"}},[t._v("+7 (473) 227-91-60 ")])]),t._v(" "),n("p",[t._v(" Бюро реализации: "),n("a",{attrs:{href:"tel:+74732279297"}},[t._v("+7 (473) 227-92-97")])]),t._v(" "),n("p",[t._v("E-mail: "),n("a",{attrs:{href:"mailto:sales@vzpp-s.ru"}},[t._v("sales@vzpp-s.ru")])])])]),t._v(" "),n("div",{staticClass:"contacts-item contacts-item",staticStyle:{"margin-top":"-80px"}},[n("div",{staticClass:"contacts-item_heading"},[n("h3",[t._v("Бухгалтерия")])]),t._v(" "),n("div",{staticClass:"contacts-item_content"},[n("a",{attrs:{href:"tel:+74732279186"}},[t._v("+7 (473) 227-91-86")]),t._v(" "),n("a",{attrs:{href:"tel:+74732279420"}},[t._v("+7 (473) 227-94-20")])])])])}],!1,null,"84231a8e",null);e.default=component.exports}}]);