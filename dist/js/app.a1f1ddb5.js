(function(){"use strict";var e={836:function(e,t,r){var a=r(9963),o=r(6252),n=r(3577);const i=(0,o._)("i",{"data-feather":"chevron-up"},null,-1);function l(e,t,r,l,s,d){const c=(0,o.up)("AppHeader"),m=(0,o.up)("router-view"),u=(0,o.up)("back-to-top"),p=(0,o.up)("AppFooter");return(0,o.wg)(),(0,o.iD)("div",{class:(0,n.C_)([e.appTheme,"pt-0.5"])},[(0,o.Wm)(c),(0,o.Wm)(a.uT,{name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{theme:e.appTheme},null,8,["theme"])])),_:1}),(0,o.Wm)(u,{visibleoffset:"500",right:"30px",bottom:"20px",class:"shadow-lg"},{default:(0,o.w5)((()=>[i])),_:1}),(0,o.Wm)(p)],2)}var s=r(8508),d=r.n(s),c=r.p+"img/LightNoBgg.d34753a0.svg",m=r.p+"img/DarkNoBgg.74d460d0.svg";const u={id:"nav",class:"sm:container sm:mx-auto"},p={class:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"},g={class:"flex justify-between items-center px-4 sm:px-0"},h={key:0,src:c,class:"w-48",alt:"Dark Logo"},f={key:1,src:m,class:"w-48",alt:"Light Logo"},x={class:"sm:hidden"},b={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"},y={key:0,"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z","clip-rule":"evenodd"},v={key:1,"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"},k={class:"hidden sm:flex justify-between items-center flex-col md:flex-row"},w={class:"hidden md:block"};function j(e,t,r,a,n,i){const l=(0,o.up)("router-link"),s=(0,o.up)("theme-switcher"),d=(0,o.up)("AppHeaderLinks"),c=(0,o.up)("Button"),m=(0,o.up)("HireMeModal");return(0,o.wg)(),(0,o.iD)("nav",u,[(0,o._)("div",p,[(0,o._)("div",g,[(0,o._)("div",null,[(0,o.Wm)(l,{to:"/"},{default:(0,o.w5)((()=>["light"===n.theme?((0,o.wg)(),(0,o.iD)("img",h)):((0,o.wg)(),(0,o.iD)("img",f))])),_:1})]),(0,o.Wm)(s,{theme:n.theme,onThemeChanged:i.updateTheme,class:"block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"},null,8,["theme","onThemeChanged"]),(0,o._)("div",x,[(0,o._)("button",{onClick:t[0]||(t[0]=e=>n.isOpen=!n.isOpen),type:"button",class:"focus:outline-none","aria-label":"Hamburger Menu"},[((0,o.wg)(),(0,o.iD)("svg",b,[n.isOpen?((0,o.wg)(),(0,o.iD)("path",y)):(0,o.kq)("",!0),n.isOpen?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("path",v))]))])])]),(0,o.Wm)(d,{showModal:i.showModal,isOpen:n.isOpen},null,8,["showModal","isOpen"]),(0,o._)("div",k,[(0,o._)("div",w,[(0,o.Wm)(c,{title:"Hire Me",class:"text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300",onClick:t[1]||(t[1]=e=>i.showModal()),"aria-label":"Hire Me Button"})]),(0,o.Wm)(s,{theme:n.theme,onThemeChanged:i.updateTheme,class:"ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"},null,8,["theme","onThemeChanged"])])]),(0,o.Wm)(m,{showModal:i.showModal,modal:n.modal,categories:n.categories,"aria-modal":"Hire Me Modal"},null,8,["showModal","modal","categories"])])}const _={key:0,"data-feather":"moon",class:"text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},C={key:1,"data-feather":"sun",class:"text-gray-200 hover:text-gray-50 w-5"};function D(e,t,r,n,i,l){return(0,o.wg)(),(0,o.iD)("a",{href:"#",onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>l.toggleTheme&&l.toggleTheme(...e)),["prevent"])),"aria-label":"Theme Switcher"},["light"===r.theme?((0,o.wg)(),(0,o.iD)("i",_)):((0,o.wg)(),(0,o.iD)("i",C))])}var A={props:{theme:{type:String,required:!0}},methods:{toggleTheme(){const e="light"===this.theme?"dark":"light";localStorage.setItem("theme",e),this.$emit("themeChanged",e),this.$router.go()}}},P=r(3744);const M=(0,P.Z)(A,[["render",D]]);var S=M;const T=e=>((0,o.dD)("data-v-9dee52b8"),e=e(),(0,o.Cn)(),e),O={class:"font-general-regular fixed inset-0 z-30"},W={class:"flex flex-col items-center justify-center h-full w-full"},H={class:"modal-wrapper flex items-center z-30"},B={class:"modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"},E={class:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"},L=T((()=>(0,o._)("h5",{class:"text-primary-dark dark:text-primary-light text-xl"}," What project are you looking for? ",-1))),Z=T((()=>(0,o._)("i",{"data-feather":"x"},null,-1))),z=[Z],I={class:"modal-body p-5 w-full h-full"},q={class:"max-w-xl m-4 text-left"},F=T((()=>(0,o._)("div",{class:"mt-0"},[(0,o._)("input",{class:"w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"name",type:"text",required:"",placeholder:"Name","aria-label":"Name"})],-1))),N=T((()=>(0,o._)("div",{class:"mt-6"},[(0,o._)("input",{class:"w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"email",name:"email",type:"text",required:"",placeholder:"Email","aria-label":"Email"})],-1))),R={class:"mt-6"},U={class:"w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"subject",name:"subject",type:"text",required:"","aria-label":"Project Category"},V=["value"],G=T((()=>(0,o._)("div",{class:"mt-6"},[(0,o._)("textarea",{class:"w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"message",name:"message",cols:"14",rows:"6","aria-label":"Details",placeholder:"Project description"})],-1))),Y={class:"mt-6 pb-4 sm:pb-1"},K={class:"modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right"};function X(e,t,r,i,l,s){const d=(0,o.up)("Button");return(0,o.wg)(),(0,o.j4)(a.uT,{name:"fade"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",O,[(0,o.wy)((0,o._)("div",{onClick:t[0]||(t[0]=e=>r.showModal()),class:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"},null,512),[[a.F8,r.modal]]),(0,o._)("main",W,[(0,o.Wm)(a.uT,{name:"fade-up-down"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",H,[(0,o._)("div",B,[(0,o._)("div",E,[L,(0,o._)("button",{class:"px-4 text-primary-dark dark:text-primary-light",onClick:t[1]||(t[1]=e=>r.showModal())},z)]),(0,o._)("div",I,[(0,o._)("form",q,[F,N,(0,o._)("div",R,[(0,o._)("select",U,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.categories,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.id,value:e.value},(0,n.zw)(e.name),9,V)))),128))])]),G,(0,o._)("div",Y,[(0,o.Wm)(d,{title:"Send Request",class:"px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500",type:"submit","aria-label":"Submit Request"})])])]),(0,o._)("div",K,[(0,o.Wm)(d,{title:"Close",class:"px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500",onClick:t[2]||(t[2]=e=>r.showModal()),"aria-label":"Close Modal"})])])],512),[[a.F8,r.modal]])])),_:1})])],512),[[a.F8,r.modal]])])),_:1})}var $=r(9135),J={props:["showModal","modal","categories"],components:{Button:$.Z},data(){return{}},mounted(){d().replace()},updated(){d().replace()},methods:{}};const Q=(0,P.Z)(J,[["render",X],["__scopeId","data-v-9dee52b8"]]);var ee=Q;const te=(0,o.Uk)("Projets"),re=(0,o.Uk)("À propos"),ae=(0,o.Uk)("Contact"),oe={class:"border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"};function ne(e,t,r,a,i,l){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",{class:(0,n.C_)([r.isOpen?"block":"hidden","m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"])},[(0,o.Wm)(s,{to:"/projects",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2","aria-label":"Projects"},{default:(0,o.w5)((()=>[te])),_:1}),(0,o.Wm)(s,{to:"/about",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"About Me"},{default:(0,o.w5)((()=>[re])),_:1}),(0,o.Wm)(s,{to:"/contact",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Contact"},{default:(0,o.w5)((()=>[ae])),_:1}),(0,o._)("div",oe,[(0,o._)("button",{class:"font-general-medium sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500",onClick:t[0]||(t[0]=e=>r.showModal()),"aria-label":"Hire Me Button"}," Hire Me ")])],2)}var ie={props:["showModal","isOpen"]};const le=(0,P.Z)(ie,[["render",ne]]);var se=le,de={components:{ThemeSwitcher:S,HireMeModal:ee,AppHeaderLinks:se,Button:$.Z},data(){return{isOpen:!1,theme:"",modal:!1,categories:[{id:1,value:"web",name:"Web Application"},{id:2,value:"mobile",name:"Mobile Application"},{id:3,value:"ui-ux",name:"UI/UX Design"},{id:4,value:"branding",name:"Branding & Anim"}]}},created(){this.theme=localStorage.getItem("theme")||"light"},mounted(){d().replace(),this.theme=localStorage.getItem("theme")||"light"},methods:{updateTheme(e){this.theme=e},showModal(){this.modal?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),this.modal=!1):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),this.modal=!0)}},updated(){d().replace()}};const ce=(0,P.Z)(de,[["render",j],["__scopeId","data-v-32825103"]]);var me=ce;const ue={class:"container mx-auto"},pe={class:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},ge={class:"flex flex-col justify-center items-center mb-12 sm:mb-20"},he=(0,o._)("p",{class:"font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"}," Suivez-moi ! ",-1),fe={class:"flex gap-4 sm:gap-8"},xe=["href"],be=["data-feather"];function ye(e,t,r,a,n,i){const l=(0,o.up)("FooterCopyright");return(0,o.wg)(),(0,o.iD)("div",ue,[(0,o._)("div",pe,[(0,o._)("div",ge,[he,(0,o._)("ul",fe,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.socials,(e=>((0,o.wg)(),(0,o.iD)("a",{key:e.id,href:e.url,target:"__blank",class:"text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"},[(0,o._)("i",{"data-feather":e.icon,class:"w-5 sm:w-8 h-5 sm:h-8"},null,8,be)],8,xe)))),128))])]),(0,o.Wm)(l)])])}const ve={class:"flex justify-center items-center text-center"},ke={class:"font-general-regular text-lg text-ternary-dark dark:text-ternary-light"},we={href:"https://github.com/realstoman/vuejs-tailwindcss-portfolio",target:"__blank",class:"font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"},je=(0,o.Uk)(" . Developed by "),_e={href:"https://stoman.me",target:"__blank",class:"font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"};function Ce(e,t,r,a,i,l){return(0,o.wg)(),(0,o.iD)("div",ve,[(0,o._)("div",ke,[(0,o.Uk)(" © "+(0,n.zw)(e.copyrightDate)+". ",1),(0,o._)("a",we,(0,n.zw)(e.projectName),1),je,(0,o._)("a",_e,(0,n.zw)(e.author),1)])])}var De={data:()=>({copyrightDate:(new Date).getFullYear(),projectName:"Vue.js & Tailwind CSS Portfolio",author:"Stoman & Deux-Ailes"})};const Ae=(0,P.Z)(De,[["render",Ce]]);var Pe=Ae,Me={components:{FooterCopyright:Pe},data(){return{socials:[{id:1,name:"GitHub",icon:"github",url:"https://github.com/Deux-Ailes"},{id:2,name:"LinkedIn",icon:"linkedin",url:"https://twitter.com/realstoman"}]}},mounted(){d().replace()},updated(){d().replace()}};const Se=(0,P.Z)(Me,[["render",ye]]);var Te=Se,Oe={components:{AppHeader:me,AppFooter:Te},data:()=>({appTheme:localStorage.getItem("theme")}),mounted(){d().replace()},updated(){d().replace()}};const We=(0,P.Z)(Oe,[["render",l]]);var He=We,Be=r(2119);const Ee={class:"container mx-auto"},Le={class:"mt-10 sm:mt-20 flex justify-center"};function Ze(e,t,r,a,n,i){const l=(0,o.up)("AppBanner"),s=(0,o.up)("ProjectsGrid"),d=(0,o.up)("Button"),c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",Ee,[(0,o.Wm)(l,{class:"mb-5 sm:mb-8"}),(0,o.Wm)(s),(0,o._)("div",Le,[(0,o.Wm)(c,{to:"/projects",class:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{title:"More Projects"})])),_:1})])])}var ze=r.p+"img/developer.d30886eb.svg",Ie=r.p+"img/developer-dark.cfadf07a.svg";const qe={class:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"},Fe=(0,o.uE)('<div class="w-full md:w-1/3 text-left"><h1 class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"> Bonjour, je suis Elliot Clerice </h1><p class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"> Un développeur logiciel créatif et dynamique </p><div class="flex justify-center sm:block"><a download="Stoman-Resume.pdf" href="/files/Stoman-Resume.pdf" class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500" aria-label="Télécharger mon CV"><i data-feather="arrow-down-circle" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"></i><span class="text-sm sm:text-lg font-general-medium duration-100">Télécharger CV</span></a></div></div>',1),Ne={class:"w-full md:w-2/3 text-right float-right"},Re={key:0,src:ze,alt:"Developer img light"},Ue={key:1,src:Ie,alt:"Developer img dark"};function Ve(e,t,r,a,n,i){return(0,o.wg)(),(0,o.iD)("section",qe,[Fe,(0,o._)("div",Ne,["light"===e.theme?((0,o.wg)(),(0,o.iD)("img",Re)):((0,o.wg)(),(0,o.iD)("img",Ue))])])}var Ge={name:"Accueil",data:()=>({theme:""}),created(){this.theme=localStorage.getItem("theme")||"light"},mounted(){d().replace(),this.theme=localStorage.getItem("theme")||"light"},updated(){d().replace()},methods:{}};const Ye=(0,P.Z)(Ge,[["render",Ve]]);var Ke=Ye,Xe=r(551),$e={name:"Accueil",components:{AppBanner:Ke,ProjectsGrid:Xe.Z,Button:$.Z}};const Je=(0,P.Z)($e,[["render",Ze]]);var Qe=Je;const et=[{path:"/",name:"Home",component:Qe,meta:{title:"DeuxAiles - Home"}},{path:"/about",name:"About",component:()=>r.e(443).then(r.bind(r,7406)),meta:{title:"DeuxAiles - À propos"}},{path:"/projects",name:"Projects",component:()=>r.e(176).then(r.bind(r,3773)),meta:{title:"DeuxAiles - Projets"}},{path:"/projects/rrcx",name:"RRCX",component:()=>r.e(176).then(r.bind(r,7462)),meta:{title:"DeuxAiles - Projet"}},{path:"/projects/sigl",name:"SIGL",component:()=>r.e(176).then(r.bind(r,7462)),meta:{title:"DeuxAiles - Projet"}},{path:"/projects/carnetfacile",name:"Carnet Facile",component:()=>r.e(176).then(r.bind(r,7462)),meta:{title:"DeuxAiles - Projet"}},{path:"/projects/nvh",name:"NVH",component:()=>r.e(176).then(r.bind(r,7462)),meta:{title:"DeuxAiles - Projet"}},{path:"/projects/caracexport",name:"CaracExport",component:()=>r.e(176).then(r.bind(r,7462)),meta:{title:"DeuxAiles - Projet"}},{path:"/projects/coinapi",name:"Coin API",component:()=>r.e(176).then(r.bind(r,7462)),meta:{title:"DeuxAiles - Projet"}},{path:"/contact",name:"Contact",component:()=>r.e(176).then(r.bind(r,2968)),meta:{title:"DeuxAiles - Contact"}}],tt=(0,Be.p7)({history:(0,Be.PO)("/"),routes:et,scrollBehavior(){document.getElementById("app").scrollIntoView()}});var rt=tt;tt.beforeEach(((e,t,r)=>{const a=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),o=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),n=t.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(a?document.title=a.meta.title:n&&(document.title=n.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>e.parentNode.removeChild(e))),!o)return r();o.meta.metaTags.map((e=>{const t=document.createElement("meta");return Object.keys(e).forEach((r=>{t.setAttribute(r,e[r])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((e=>document.head.appendChild(e))),r()}));var at=r(617);const ot=r(8508);ot.replace(),(0,a.ri)(He).use(rt).use(at.Z).mount("#app");const nt=localStorage.getItem("theme");"dark"===nt&&document.querySelector("body").classList.contains("app-theme")?document.querySelector("body").classList.add("bg-primary-dark"):document.querySelector("body").classList.add("bg-secondary-light")},551:function(e,t,r){r.d(t,{Z:function(){return Z}});var a=r(6252),o=r(3577),n=r(9963);const i={class:"pt-10 sm:pt-14"},l={class:"text-center"},s={class:"font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"},d={class:"mt-10 sm:mt-10"},c=(0,a._)("h3",{class:"font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"}," Rechercher un projet par titre et/ou catégorie ",-1),m={class:"flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"},u={class:"flex justify-between gap-2"},p=(0,a._)("span",{class:"hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"},[(0,a._)("i",{"data-feather":"search",class:"text-ternary-dark dark:text-ternary-light"})],-1),g={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"};function h(e,t,r,h,f,x){const b=(0,a.up)("ProjectsFilter"),y=(0,a.up)("ProjectSingle");return(0,a.wg)(),(0,a.iD)("section",i,[(0,a._)("div",l,[(0,a._)("p",s,(0,o.zw)(e.projectsHeading),1)]),(0,a._)("div",d,[c,(0,a._)("div",m,[(0,a._)("div",u,[p,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchProject=t),class:"font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"},null,512),[[n.nr,e.searchProject]])]),(0,a.Wm)(b,{onFilter:t[1]||(t[1]=t=>e.selectedCategory=t)})])]),(0,a._)("div",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(x.filteredProjects,(e=>((0,a.wg)(),(0,a.j4)(y,{key:e.id,project:e},null,8,["project"])))),128))])])}r(6699);var f=r(8508),x=r.n(f);const b=["name","id"],y=(0,a._)("option",{value:"",class:"text-sm sm:text-md"},"All Projects",-1),v=["value"];function k(e,t,r,n,i,l){return(0,a.wg)(),(0,a.iD)("select",{onChange:t[0]||(t[0]=t=>e.$emit("filter",t.target.value)),name:r.select,id:r.select,class:"font-general-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"},[y,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.selectOptions,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e,value:e,class:"sm:text-md"},(0,o.zw)(e),9,v)))),128))],40,b)}var w={props:{select:{type:String,default:"projects",required:!0},selectOptions:{type:Array,default:()=>["Application Web","Logiciel","Autre"]}}},j=r(3744);const _=(0,j.Z)(w,[["render",k]]);var C=_;const D=["src","alt"],A={class:"text-center px-4 py-6"},P={class:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"},M={class:"font-general-medium text-lg text-ternary-dark dark:text-ternary-light"};function S(e,t,r,n,i,l){const s=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(s,{to:"projects/rrcx",class:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark","aria-label":"Single Project"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a._)("img",{src:r.project.img,alt:r.project.title,class:"rounded-t-xl border-none"},null,8,D)]),(0,a._)("div",A,[(0,a._)("p",P,(0,o.zw)(r.project.title),1),(0,a._)("span",M,(0,o.zw)(r.project.category),1)])])),_:1})}var T={props:["project"]};const O=(0,j.Z)(T,[["render",S]]);var W=O;const H=[{id:1,title:"RRCX",category:"Logicel",img:r(7294)},{id:2,title:"SIGL",category:"Application Web",img:r(8687)},{id:3,title:"CarnetFacile",category:"Application Web",img:r(2035)},{id:4,title:"NVH",category:"Logiciel",img:r(7034)},{id:5,title:"CaracExport",category:"Logiciel",img:r(2725)},{id:6,title:"CoinAPI",category:"Autre",img:r(4600)}];var B=H,E={components:{ProjectSingle:W,ProjectsFilter:C},data:()=>({projects:B,projectsHeading:"Mes projets",selectedCategory:"",searchProject:""}),computed:{filteredProjects(){return this.selectedCategory?this.filterProjectsByCategory():this.searchProject?this.filterProjectsBySearch():this.projects}},methods:{filterProjectsByCategory(){return this.projects.filter((e=>{let t=e.category.charAt(0).toUpperCase()+e.category.slice(1);return console.log(t),t.includes(this.selectedCategory)}))},filterProjectsBySearch(){let e=new RegExp(this.searchProject,"i");return this.projects.filter((t=>t.title.match(e)))}},mounted(){x().replace()}};const L=(0,j.Z)(E,[["render",h]]);var Z=L},9135:function(e,t,r){r.d(t,{Z:function(){return d}});var a=r(6252),o=r(3577);function n(e,t,r,n,i,l){return(0,a.wg)(),(0,a.iD)("button",null,(0,o.zw)(r.title),1)}var i={props:["title"],data:()=>({})},l=r(3744);const s=(0,l.Z)(i,[["render",n]]);var d=s},2725:function(e,t,r){e.exports=r.p+"img/mobile-project-1.8b4f9e2f.jpg"},8687:function(e,t,r){e.exports=r.p+"img/mobile-project-2.9bd76372.jpg"},2035:function(e,t,r){e.exports=r.p+"img/ui-project-1.96e7f21e.jpg"},7034:function(e,t,r){e.exports=r.p+"img/ui-project-2.afd87ce7.jpg"},4600:function(e,t,r){e.exports=r.p+"img/web-project-1.d1debdf5.jpg"},7294:function(e,t,r){e.exports=r.p+"img/web-project-2.ecd6c182.jpg"}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,a,o,n){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],n=e[c][2];for(var l=!0,s=0;s<a.length;s++)(!1&n||i>=n)&&Object.keys(r.O).every((function(e){return r.O[e](a[s])}))?a.splice(s--,1):(l=!1,n<i&&(i=n));if(l){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,o,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,a){return r.f[a](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+{176:"projects",443:"about"}[e]+"."+{176:"b2f25d8c",443:"3047f99f"}[e]+".js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vuejs-tailwindcss-portfolio:";r.l=function(a,o,n,i){if(e[a])e[a].push(o);else{var l,s;if(void 0!==n)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var m=d[c];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==t+n){l=m;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+n),l.src=a),e[a]=[o];var u=function(t,r){l.onerror=l.onload=null,clearTimeout(p);var o=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e={143:0};r.f.j=function(t,a){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var n=new Promise((function(r,a){o=e[t]=[r,a]}));a.push(o[2]=n);var i=r.p+r.u(t),l=new Error,s=function(a){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,o[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,n,i=a[0],l=a[1],s=a[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var c=s(r)}for(t&&t(a);d<i.length;d++)n=i[d],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},a=self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(836)}));a=r.O(a)})();
//# sourceMappingURL=app.a1f1ddb5.js.map