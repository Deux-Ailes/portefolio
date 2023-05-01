"use strict";(self["webpackChunkelliot_clerice_portefolio"]=self["webpackChunkelliot_clerice_portefolio"]||[]).push([[443],{192:function(t,e,n){n.r(e),n.d(e,{default:function(){return G}});var i=n(252);const r={class:"container mx-auto"};function s(t,e,n,s,a,o){const u=(0,i.up)("AboutMe"),m=(0,i.up)("AboutCounter"),l=(0,i.up)("AboutClients");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",r,[(0,i.Wm)(u)]),(0,i.Wm)(m),(0,i.Wm)(l)])}var a=n(577),o=n.p+"img/P1030410.9f80559e.jpg";const u={class:"block sm:flex sm:gap-10 mt-10 sm:mt-20"},m=(0,i._)("div",{class:"w-full sm:w-1/4 mb-7 sm:mb-0"},[(0,i._)("img",{src:o,class:"rounded-xl w-96",alt:""})],-1),l={class:"w-full sm:w-3/4 text-left"};function d(t,e,n,r,s,o){return(0,i.wg)(),(0,i.iD)("div",u,[m,(0,i._)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.bios,(t=>((0,i.wg)(),(0,i.iD)("p",{key:t.id,class:"font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"},(0,a.zw)(t.bio),1)))),128))])])}var c={setup(){return{bios:[{id:1,bio:"Passionné d'informatique, j'ai décidé d'entreprendre mes études dans ce domaine.\nVoulant me perfectionner dans ce domaine, l'école d'ingénieur m'a semblé être un choix évident.\nL'apprentissage me permet de concrétiser le savoir acquis en cours et l'employer au profit du savoir-faire."},{id:2,bio:"Au cours de mon expérience professionnelle, j'ai découvert un véritable attrait pour le développement logiciel. \nJ'ai donc pris l'initiative de me former et proposer mes premiers logiciels dans le cadre de mon travail. \nJe suis en permanente quête de savoir et j'adore développer mes compétences techniques et sociales."}]}}},p=n(744);const h=(0,p.Z)(c,[["render",d]]);var g=h;const f={class:"mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm"},A={class:"font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center"},b={class:"mb-20 sm:mb-0"},x={class:"block text-md text-ternary-dark dark:text-ternary-light"},y={class:"mb-20 sm:mb-0"},k={class:"block text-md text-ternary-dark dark:text-ternary-light"},v={class:"mb-20 sm:mb-0"},w={class:"block text-md text-ternary-dark dark:text-ternary-light"},_={class:"mb-20 sm:mb-0"},S={class:"block text-md text-ternary-dark dark:text-ternary-light"};function D(t,e,n,r,s,o){const u=(0,i.up)("counter");return(0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("div",A,[(0,i._)("div",b,[(0,i.Wm)(u,{ref:"counter",startAmount:0,endAmount:3,duration:3,autoinit:!0,onFinished:e[0]||(e[0]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2","aria-label":"About Status Counter"},null,512),(0,i._)("span",x,(0,a.zw)(t.experienceTitle),1)]),(0,i._)("div",y,[(0,i.Wm)(u,{ref:"counter",startAmount:0,endAmount:2e4,duration:3,suffix:"+",autoinit:!0,onFinished:e[1]||(e[1]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"},null,512),(0,i._)("span",k,(0,a.zw)(t.codeLine),1)]),(0,i._)("div",v,[(0,i.Wm)(u,{ref:"counter",startAmount:0,endAmount:100,duration:3,suffix:"%",autoinit:!0,onFinished:e[2]||(e[2]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"},null,512),(0,i._)("span",w,(0,a.zw)(t.feedback),1)]),(0,i._)("div",_,[(0,i.Wm)(u,{ref:"counter",startAmount:0,endAmount:12,duration:3,autoinit:!0,onFinished:e[3]||(e[3]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"},null,512),(0,i._)("span",S,(0,a.zw)(t.projectEnded),1)])])])}var C=(0,i.aZ)({name:"Vue3Autocounter",interval:null,props:{startAmount:{type:Number,default:0},endAmount:{type:Number,default:0,required:!0},duration:{type:Number,default:3,validator(t){return t>=1}},autoinit:{type:Boolean,default:!0},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimalSeparator:{type:String,default:"."},decimals:{type:Number,default:0,validator(t){return t>=0}}},data(){return{timestamp:0,startTimestamp:0,currentAmount:0,currentStartAmount:0,currentDuration:0,paused:!1,remaining:0,animationFrame:0}},mounted(){this.currentAmount=this.startAmount,this.currentStartAmount=this.startAmount,this.currentDuration=1e3*this.duration,this.remaining=1e3*this.duration,this.autoinit?this.start():this.paused=!0,this.$emit("mounted")},unmounted(){this.cancelAnimation()},watch:{startAmount(){this.reset()},endAmount(){this.reset()},duration(){this.reset()}},computed:{isCountingUp(){return this.endAmount>this.startAmount},displayedAmount(){return`${this.prefix}${this.formatedAmount}${this.suffix}`},formatedAmount(){const t=/(\d+)(\d{3})/;let e=this.currentAmount.toFixed(this.decimals);e+="";let n=e.split("."),i=n[0],r=n.length>1?this.decimalSeparator+n[1]:"",s=!isNaN(parseFloat(this.separator));if(this.separator&&!s)while(t.test(i))i=i.replace(t,"$1"+this.separator+"$2");return i+r}},methods:{start(){this.cancelAnimation(),this.currentStartAmount=this.startAmount,this.startTimestamp=null,this.currentDuration=1e3*this.duration,this.paused=!1,this.animationFrame=window.requestAnimationFrame(this.counting)},pause(){this.paused||(this.cancelAnimation(),this.paused=!0)},resume(){this.paused&&(this.startTimestamp=null,this.currentDuration=+this.remaining,this.currentStartAmount=+this.currentAmount,this.animationFrame=window.requestAnimationFrame(this.counting),this.paused=!1)},reset(){this.paused=!1,this.startTimestamp=null,this.cancelAnimation(),this.currentAmount=this.startAmount,this.autoinit?this.start():this.paused=!0},counting(t){this.timestamp=t,this.startTimestamp||(this.startTimestamp=t);let e=t-this.startTimestamp;this.remaining=this.currentDuration-e,this.isCountingUp?(this.currentAmount=this.currentStartAmount+(this.endAmount-this.currentStartAmount)*(e/this.currentDuration),this.currentAmount=this.currentAmount>this.endAmount?this.endAmount:this.currentAmount):(this.currentAmount=this.currentStartAmount-(this.currentStartAmount-this.endAmount)*(e/this.currentDuration),this.currentAmount=this.currentAmount<this.endAmount?this.endAmount:this.currentAmount),e<this.currentDuration?this.animationFrame=window.requestAnimationFrame(this.counting):setTimeout((()=>{this.$emit("finished")}),1e3)},cancelAnimation(){this.animationFrame&&window.cancelAnimationFrame(this.animationFrame)}}});function F(t,e,n,r,s,o){return(0,i.wg)(),(0,i.j4)("span",null,(0,a.zw)(t.displayedAmount),1)}C.render=F;var j=(()=>{const t=C;return t.install=e=>{e.component("Vue3Autocounter",t)},t})(),T=j,q={components:{counter:T},data:()=>({experienceTitle:"Années d'expérience professionnelles",codeLine:"Lignes de code",feedback:"Satisfaction des collaborateurs",projectEnded:"Projects complétés"})};const z=(0,p.Z)(q,[["render",D]]);var E=z;const W={class:"mt-10 sm:mt-20"},$={class:"font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"},N={class:"grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2"};function Z(t,e,n,r,s,o){const u=(0,i.up)("AboutClientSingle");return(0,i.wg)(),(0,i.iD)("div",W,[(0,i._)("p",$,(0,a.zw)(t.clientsHeading),1),(0,i._)("div",N,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.clients,(t=>((0,i.wg)(),(0,i.j4)(u,{key:t.id,client:t},null,8,["client"])))),128))])])}const I=["src","alt"];function H(t,e,n,r,s,a){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("img",{src:n.client.img,alt:n.client.title,class:"w-64 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light"},null,8,I)])}var L={props:["client"]};const V=(0,p.Z)(L,[["render",H]]);var O=V,P={components:{AboutClientSingle:O},data:()=>({clientsHeading:"Quelques diplômes et certifications que j'ai obtenu",clients:[{id:1,title:"Diplôme d'Ingénieur généraliste - ESEO",img:n(737)},{id:2,title:"DUT GEII",img:n(459)},{id:4,title:"TOEIC",img:n(22)},{id:5,title:"Voltaire",img:n(345)}]})};const U=(0,p.Z)(P,[["render",Z]]);var J=U,K=n(508),M=n.n(K),Y={name:"About",components:{AboutMe:g,AboutCounter:E,AboutClients:J},data:()=>({}),mounted(){M().replace()},updated(){M().replace()},methods:{}};const B=(0,p.Z)(Y,[["render",s]]);var G=B},22:function(t,e,n){t.exports=n.p+"img/TOEIC_logo.8ff8b1ab.png"},737:function(t,e,n){t.exports=n.p+"img/eseo.927868a3.jpg"},459:function(t,e,n){t.exports=n.p+"img/geii.187001ae.jpg"},345:function(t,e,n){t.exports=n.p+"img/voltaire.de7fd7f7.png"}}]);
//# sourceMappingURL=about.e157a03c.js.map