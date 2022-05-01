(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{145:function(t,e,r){"use strict";r.r(e);r(13),r(7),r(12),r(19),r(20);var n=r(11),l=r(5),o=r(21);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{scrolled:0}},computed:f(f({},Object(o.b)(["settings","githubUrls","lastRelease"])),{},{menu:{get:function(){return this.$store.state.menu.open},set:function(t){this.$store.commit("menu/toggle",t)}},logo:function(){if(this.settings.logo)return"object"===Object(n.a)(this.settings.logo)?this.settings.logo:{light:this.settings.logo,dark:this.settings.logo}},version:function(){return this.$config.clientVersion}}),beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.scrolled=window.scrollY>0},scrollToTop:function(){window.innerWidth>=1280||window.scrollTo(0,0)},noop:function(){}}},h=r(2),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"\n    fixed\n    top-0\n    z-40\n    w-full\n    border-b\n    dark:border-gray-800\n    bg-white\n    dark:bg-gray-900\n  ",class:{"shadow border-transparent":t.scrolled},on:{click:t.scrollToTop}},[r("div",{staticClass:"container mx-auto flex-1 px-4 lg:px-8"},[r("div",{staticClass:"flex items-center justify-between h-16"},[r("div",{staticClass:"lg:w-1/5 flex items-center pr-4",on:{click:function(e){return e.stopPropagation(),t.noop.apply(null,arguments)}}},[r("NuxtLink",{staticClass:"flex-shrink-0 flex-1 font-bold text-xl",attrs:{to:t.localePath("/"),"aria-label":t.settings.title+" Logo"}},[t.logo?t._e():r("span",[t._v(t._s(t.settings.title)+" ")]),t._v(" "),t.logo?r("img",{staticClass:"h-8 max-w-full light-img",attrs:{src:t.logo.light,alt:t.settings.title}}):t._e(),t._v(" "),t.logo?r("img",{staticClass:"h-8 max-w-full dark-img",attrs:{src:t.logo.dark,alt:t.settings.title}}):t._e()])],1),t._v(" "),"single"!==t.settings.layout?r("div",{staticClass:"flex-1 flex justify-start w-4/6"},[t.settings.algolia?r("AppSearchAlgolia",{attrs:{options:t.settings.algolia,settings:t.settings}}):r("AppSearch",{staticClass:"hidden lg:block"})],1):t._e(),t._v(" "),r("div",{staticClass:"lg:w-1/5 flex items-center pl-4 lg:pl-8",class:{"justify-between":t.lastRelease&&"single"!==t.settings.layout,"justify-between":!t.lastRelease||"single"===t.settings.layout}},[t.lastRelease?r("NuxtLink",{staticClass:"\n            font-semibold\n            leading-none\n            text-gray-700\n            dark:text-gray-300\n            hover:text-primary-500\n            dark-hover:text-primary-500\n            text-base\n            mr-4\n          ",attrs:{to:t.localePath("/releases"),"exact-active-class":"text-primary-500"}},[t._v(t._s(t.lastRelease.name))]):r("div",{staticClass:"\n            font-semibold\n            leading-none\n            text-gray-700\n            dark:text-gray-300\n            text-base\n          "},[t._v("\n          v"+t._s(t.version)+"\n        ")]),t._v(" "),r("div",{staticClass:"flex items-center"},[t.settings.twitter?r("a",{staticClass:"\n              text-gray-700\n              dark:text-gray-300\n              hover:text-primary-500\n              dark-hover:text-primary-500\n              ml-4\n            ",class:{"hidden lg:block":"single"!==t.settings.layout},attrs:{href:"https://twitter.com/"+t.settings.twitter,target:"_blank",rel:"noopener noreferrer",title:"Twitter",name:"Twitter"}},[r("IconTwitter",{staticClass:"w-5 h-5"})],1):t._e(),t._v(" "),t.settings.github?r("a",{staticClass:"\n              text-gray-700\n              dark:text-gray-300\n              hover:text-primary-500\n              dark-hover:text-primary-500\n              ml-4\n            ",class:{"hidden lg:block":"single"!==t.settings.layout},attrs:{href:t.githubUrls.repo,target:"_blank",rel:"noopener noreferrer",title:"Github",name:"Github"}},[r("IconGithub",{staticClass:"w-5 h-5"})],1):t._e(),t._v(" "),r("AppColorSwitcher",{staticClass:"ml-4 mt-1 hidden lg:block"}),t._v(" "),"single"!==t.settings.layout?r("button",{staticClass:"\n              lg:hidden\n              p-2\n              rounded-md\n              text-gray-700\n              dark:text-gray-300\n              focus:outline-none\n              -mr-2\n            ",attrs:{"aria-label":"Menu"},on:{click:function(e){e.stopPropagation(),t.menu=!t.menu}}},[t.menu?r("IconX",{staticClass:"w-5 h-5"}):r("IconMenu",{staticClass:"w-5 h-5"})],1):t._e()],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppSearchAlgolia:r(222).default,AppSearch:r(146).default,IconTwitter:r(148).default,IconGithub:r(149).default,AppColorSwitcher:r(150).default,IconX:r(229).default,IconMenu:r(230).default})},147:function(t,e,r){"use strict";r.r(e);r(12);var n={computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},l=r(2),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"h-16 relative w-full border-t dark:border-gray-800 bg-white dark:bg-gray-900 z-20 text-center flex items-center justify-center"},[r("div",{staticClass:"font-light"},[t._v("Code Sense")])])}],!1,null,null,null);e.default=component.exports},161:function(t,e,r){r(162),t.exports=r(163)},199:function(t,e,r){var content=r(200);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("f52d43e0",content,!0,{sourceMap:!1})},200:function(t,e,r){var n=r(49)(!1);n.push([t.i,".prose img{margin-top:1em;margin-bottom:1em}",""]),t.exports=n},223:function(t,e,r){"use strict";r.r(e);r(13),r(7),r(12),r(19),r(20);var n=r(5),l=(r(205),r(21));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={computed:c(c({},Object(l.b)(["settings","githubUrls"])),{},{menu:{get:function(){return this.$store.state.menu.open},set:function(t){this.$store.commit("menu/toggle",t)}},categories:function(){return this.$store.state.categories[this.$i18n.locale]}}),methods:{isCategoryActive:function(t){var e=this;return t.some((function(t){return t.to===e.$route.fullPath}))},isDocumentNew:function(t){if(t.version&&!(t.version<=0)){var e=localStorage.getItem("document-".concat(t.slug,"-version"));return t.version>Number(e)}}}},d=r(2),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",{staticClass:"w-full lg:w-1/5 lg:block fixed lg:relative inset-0 mt-16 lg:mt-0 z-30 bg-white dark:bg-gray-900 lg:bg-transparent lg:dark:bg-transparent",class:{block:t.menu,hidden:!t.menu}},[r("div",{staticClass:"lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)"},[r("ul",{staticClass:"p-4 lg:py-8 lg:pl-0 lg:pr-8"},[t.settings.algolia?t._e():r("li",{staticClass:"mb-4 lg:hidden"},[r("AppSearch")],1),t._v(" "),t._l(t.categories,(function(e,n,l){return r("li",{key:n,staticClass:"mb-4",class:{active:t.isCategoryActive(e),"lg:mb-0":l===Object.keys(t.categories).length-1}},[n?r("p",{staticClass:"mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs"},[t._v(t._s(n))]):t._e(),t._v(" "),r("ul",t._l(e,(function(e){return r("li",{key:e.slug,staticClass:"text-gray-700 dark:text-gray-300"},[r("NuxtLink",{staticClass:"px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between",attrs:{to:t.localePath(e.to),"exact-active-class":"text-primary-500 bg-primary-100 hover:text-primary-500 dark:bg-primary-900"}},[t._v("\n              "+t._s(e.menuTitle||e.title)+"\n              "),r("client-only",[t.isDocumentNew(e)?r("span",{staticClass:"animate-pulse rounded-full bg-primary-500 opacity-75 h-2 w-2"}):t._e()])],1)],1)})),0)])})),t._v(" "),r("li",{staticClass:"lg:hidden space-x-2"},[r("p",{staticClass:"mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs"},[t._v("其他")]),t._v(" "),r("div",{staticClass:"flex items-center space-x-4"},[t.settings.twitter?r("a",{staticClass:"inline-flex text-gray-700 dark:text-gray-300 hover:text-primary-500",attrs:{href:"https://twitter.com/"+t.settings.twitter,target:"_blank",rel:"noopener noreferrer",title:"Twitter",name:"Twitter"}},[r("IconTwitter",{staticClass:"w-5 h-5"})],1):t._e(),t._v(" "),t.settings.github?r("a",{staticClass:"inline-flex text-gray-700 dark:text-gray-300 hover:text-primary-500",attrs:{href:t.githubUrls.repo,target:"_blank",rel:"noopener noreferrer",title:"Github",name:"Github"}},[r("IconGithub",{staticClass:"w-5 h-5"})],1):t._e(),t._v(" "),r("AppLangSwitcher"),t._v(" "),r("AppColorSwitcher")],1)])],2)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppSearch:r(146).default,IconTwitter:r(148).default,IconGithub:r(149).default,AppLangSwitcher:r(224).default,AppColorSwitcher:r(150).default})}},[[161,28,2,29]]]);