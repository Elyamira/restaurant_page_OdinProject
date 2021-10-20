(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(81),i=t.n(a),d=t(645),r=t.n(d)()(i());r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Fjalla+One&family=Merriweather:wght@300&display=swap);"]),r.push([e.id,"*,\n*::after,\n* ::before {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: inherit;\n\twidth: 100%;\n}\nhtml {\n\tfont-size: 62.5%;\n}\nbody {\n\tbox-sizing: border-box;\n\tpadding: 5rem;\n\tfont-family: 'Merriweather', serif;\n}\n.nav {\n\twidth: 100%;\n\tmargin: 0 auto;\n\tdisplay: flex;\n\tgap: 15%;\n\tmargin-bottom: 3rem;\n}\nnav ul {\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 2.5rem;\n\tmargin-bottom: 5rem;\n\tgap: 5rem;\n\tcursor: pointer;\n\talign-items: center;\n\t/* text-decoration: underline; */\n}\n.navbar li {\n\tborder-bottom: solid 2px rgb(0, 0, 0);\n\tborder-top: solid 2px rgb(0, 0, 0);\n\tpadding: 0.3rem 0;\n}\n\n.navbar li:hover {\n\tpadding: 0.7rem 0;\n}\n\n.nav img {\n\twidth: 10rem;\n\theight: fit-content;\n}\n/* .nav ul:hover {\n\ttext-decoration: none;\n} */\n.header-container {\n\twidth: 100%;\n}\nh1 {\n\tfont-size: 4.5rem;\n\tfont-family: 'Fjalla One', sans-serif;\n}\nh2 {\n\tfont-size: 4rem;\n\tfont-family: 'Fjalla One', sans-serif;\n}\nh3 {\n\tfont-size: 3.5rem;\n\tfont-family: 'Fjalla One', sans-serif;\n}\nh4 {\n\tfont-size: 3rem;\n\tfont-family: 'Fjalla One', sans-serif;\n}\nh5 {\n\tfont-size: 2.5rem;\n\tfont-family: 'Fjalla One', sans-serif;\n\ttext-transform: uppercase;\n\tmargin-bottom: 1rem;\n}\np {\n\tfont-size: 2rem;\n}\n.mb-big {\n\tmargin-bottom: 5rem;\n}\n.mb-medium {\n\tmargin-bottom: 3rem;\n}\n.mt-medium {\n\tmargin-top: 3rem;\n}\n.header-container-text {\n\tdisplay: flex;\n\t/* margin-bottom: 3rem; */\n}\n.header-main-image {\n\tmargin-bottom: 5rem;\n}\n.header-address {\n\tdisplay: flex;\n\talign-self: center;\n\tfont-size: 2rem;\n\ttext-align: right;\n\twidth: 50%;\n}\n.header-main-image {\n\twidth: 100%;\n}\n.about-main-info {\n\tdisplay: flex;\n\tgap: 5rem;\n\talign-items: center;\n}\n.about-text-info-paragraph {\n\tmargin-top: 3rem;\n}\n.about-additional-info {\n\twidth: 100%;\n\tflex: 1;\n}\n.about-additional-info-items {\n\tdisplay: flex;\n\tgap: 3rem;\n\t/* width: 100%; */\n}\n.row {\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: wrap;\n\twidth: 100%;\n\tmargin-bottom: 2rem;\n\tgap: 2rem;\n}\n\n.column {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-basis: 100%;\n\tflex: 1;\n}\n\n.menu-container {\n\tdisplay: flex;\n\tgap: 3rem;\n\talign-items: center;\n}\n.menu-btn-container {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.menu-btn {\n\twidth: 50%;\n\tborder: 2px solid black;\n\tbackground-color: transparent;\n\tpadding: 2rem;\n\ttext-transform: uppercase;\n}\n.animated-btn {\n\tposition: relative;\n\ttransition: 1s all ease;\n}\n.animated-btn::before {\n\tbackground: #fa8072;\n\tcontent: '';\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tz-index: -1;\n\ttransition: all 0.6s ease;\n}\n\n.animated-btn::before {\n\twidth: 0%;\n\theight: 100%;\n}\n\n.animated-btn:hover::before {\n\twidth: 100%;\n}\n.footer-text {\n\tdisplay: flex;\n\tgap: 3rem;\n}\n.about-additional-info-item {\n\tposition: relative;\n}\n.about-additional-info-text {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttext-align: center;\n\tcolor: white;\n\tfont-size: 2.5rem;\n\ttransform: translate(-50%, -50%);\n\twidth: 50%;\n\tmargin: 0 auto;\n\ttext-transform: uppercase;\n}\n.menu-page {\n\twidth: 100%;\n\tdisplay: flex;\n\tbackground-color: #171616;\n\tcolor: white;\n\tgap: 5rem;\n\talign-items: center;\n\t/* justify-content: center; */\n}\n.menu-img-container {\n\twidth: 30%;\n}\n.menu-header {\n\tcolor: white;\n\tmargin-bottom: 3rem;\n\tmargin-top: 3rem;\n}\n.menu-page-items {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmargin-right: 5rem;\n}\n.price-and-add {\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n}\n.price-paragraph {\n\tdisplay: inline-block;\n\twidth: 30%;\n}\n.add-btn,\n.delete-btn {\n\twidth: 10%;\n\theight: fit-content;\n\tposition: relative;\n\ttransition: none;\n}\n.add-btn:hover {\n\twidth: 11%;\n\ttop: 2px;\n}\n.add-btn:active {\n\ttop: 6px;\n}\n\n.basket-container {\n\tposition: relative;\n\ttext-align: right;\n}\n.basket-circle {\n\ttop: -10px;\n\twidth: 3rem;\n\tbackground-color: black;\n\tposition: absolute;\n\theight: 3rem;\n\tborder-radius: 100%;\n\tright: 0;\n\tcolor: white;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 2rem;\n}\n.order-sum {\n\tfont-weight: 800;\n\twidth: 20%;\n}\n.checkout-btn {\n\twidth: 30%;\n\tborder: 2px solid black;\n\tbackground-color: transparent;\n\tpadding: 2rem;\n\ttext-transform: uppercase;\n}\n.checkout-sum-and-btn-container {\n\tdisplay: flex;\n\talign-items: center;\n}\n@media (max-width: 45em) {\n\t.nav {\n\t\tgap: 5%;\n\t}\n\thtml {\n\t\tfont-size: 50%;\n\t}\n}\n@media (max-width: 34.4em) {\n\tbody {\n\t\tpadding: 3rem;\n\t}\n\t.nav {\n\t\tgap: 5%;\n\t}\n\thtml {\n\t\tfont-size: 42%;\n\t}\n\t.nav ul {\n\t\tgap: 2rem;\n\t}\n\t.nav img {\n\t\twidth: 9rem;\n\t}\n\n\t.about-additional-info-text {\n\t\tfont-size: 5.5rem;\n\t}\n\t.about-additional-info-items {\n\t\tflex-direction: column;\n\t}\n\t.menu-container-image {\n\t\tdisplay: none;\n\t}\n\t.menu-page {\n\t\tpadding: 5rem;\n\t}\n\t.menu-img-container {\n\t\tdisplay: none;\n\t}\n\t.menu-page-items h4 {\n\t\tfont-size: 3.2rem;\n\t}\n\t.menu-item p {\n\t\tfont-size: 2.5rem;\n\t}\n\t.price-and-add p {\n\t\tfont-size: 2.5rem;\n\t}\n\t.add-btn,\n\t.delete-btn {\n\t\twidth: 15%;\n\t}\n\t.menu-page-items {\n\t\tmargin-right: 0;\n\t}\n}\n@media (max-width: 21.8em) {\n\thtml {\n\t\tfont-size: 35%;\n\t}\n\t.about-additional-info-text {\n\t\tfont-size: 4rem;\n\t}\n\t.menu-container-items {\n\t\ttext-align: center;\n\t}\n\t.column {\n\t\tflex: none;\n\t}\n\t.footer-text {\n\t\tflex-direction: column;\n\t}\n\t.footer-text h2 {\n\t\ttext-align: center;\n\t}\n\t.add-btn,\n\t.delete-btn {\n\t\twidth: 20%;\n\t}\n\t.menu-page-items .row .column {\n\t\tflex: 1;\n\t}\n}\n",""]);const o=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,i,d){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(r[s]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);a&&r[l[0]]||(void 0!==d&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=d),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var d={},r=[],o=0;o<e.length;o++){var s=e[o],c=a.base?s[0]+a.base:s[0],l=d[c]||0,m="".concat(c," ").concat(l);d[c]=l+1;var p=t(m),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(u);else{var h=i(u,a);a.byIndex=o,n.splice(o,0,{identifier:m,updater:h,references:1})}r.push(m)}return r}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var d=a(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<d.length;r++){var o=t(d[r]);n[o].references--}for(var s=a(e,i),c=0;c<d.length;c++){var l=t(d[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}d=s}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var d=t.sourceMap;d&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var d=n[a]={id:a,exports:{}};return e[a](d,d.exports,t),d.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),a=t(795),i=t.n(a),d=t(569),r=t.n(d),o=t(565),s=t.n(o),c=t(216),l=t.n(c),m=t(589),p=t.n(m),u=t(426),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=r().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),n()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const f=[],b=function(e,n,t){const a=document.createElement("div");a.classList.add("row");const i=document.createElement("div");i.classList.add("column");const d=document.createElement("div");d.classList.add("menu-item"),i.appendChild(d);const r=document.createElement("p");r.innerHTML=e,d.appendChild(r);const o=document.createElement("div");o.classList.add("column"),a.appendChild(o);const s=document.createElement("div");s.classList.add("price-and-add"),i.appendChild(d);const c=document.createElement("p");if(c.innerHTML=n,c.classList.add("price-paragraph"),"add"===t){const t=document.createElement("img");t.classList.add("add-btn"),t.src="https://i.ibb.co/st6MTVS/add-btn.png",t.alt="add dish to busket",s.append(c,t),t.addEventListener("click",(()=>{let t={itemName:e,price:n};f.push(t),document.getElementById("circle").innerHTML=f.length}))}if("delete"===t){const n=document.createElement("img");n.classList.add("delete-btn"),n.src="https://i.ibb.co/7nJvxHY/delete-btn.png",n.alt="delete dish from busket",s.append(c,n),((e,n)=>{e.addEventListener("click",(()=>{const e=document.querySelector("#content");e.innerHTML="",e.appendChild(E());const t=document.createElement("div");t.setAttribute("id","ordersTable");const a=n;let i=0,d=f.findIndex((e=>e.itemName===a));f.splice(d,1);const r=document.createElement("p"),o=document.createElement("button");o.classList.add("checkout-btn"),r.classList.add("order-sum");const s=document.createElement("div");s.classList.add("checkout-sum-and-btn-container"),f.length>0?(f.map((e=>{t.append(b(e.itemName,e.price,"delete"));let n=e.price.substring(1);i+=parseFloat(n)})),r.innerHTML=`Total:$${i}`,r.classList.add("order-sum"),o.innerHTML="Confirm the order",s.appendChild(r),s.appendChild(o)):(r.innerHTML="The basket is empty :(",s.appendChild(r)),t.appendChild(s),e.appendChild(t),o.addEventListener("click",(()=>{f.length=0,e.innerHTML="";let n=document.createElement("p");e.appendChild(E()),n.innerHTML="The order is confirmed. We will deliver it to you soon :)",e.appendChild(n)})),document.getElementById("circle").innerHTML=f.length}))})(n,e)}return o.appendChild(s),a.append(i,o),a};function g(e){const n=document.createElement("h4");return n.innerHTML=e,n}const v=()=>{const e=document.querySelector("#content");return e.innerHTML="",e.appendChild(E(f.length)),e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu-page");const n=document.createElement("div");n.classList.add("menu-img-container");const t=document.createElement("img");t.classList.add("menu-img"),t.src="https://i.ibb.co/RHppsy6/menu.png",n.appendChild(t);const a=document.createElement("div");e.append(n,a),a.classList.add("menu-page-items");const i=document.createElement("h1");return i.classList.add("menu-header"),i.innerHTML="Ikigai Sushi and Ramen Menu",a.appendChild(i),a.appendChild(g("Appetizers & Soups")),a.appendChild(b("Tonkotsu Ramen","$4.50","add")),a.appendChild(b("Ikigai Oyakodon","$5.00","add")),a.appendChild(b("Miso Soup (with seaweed & tofu)","$5.00","add")),a.appendChild(g("Sushi: Nigiri & Rolls")),a.appendChild(b("Prawn Tempura","$8.00","add")),a.appendChild(b("Tsukiji Omakase","$6.50","add")),a.appendChild(b("Philadelphia Roll (smoked salmon + cream cheese) ","$9.50","add")),a.appendChild(b("California Roll (crab stick + avocado)","$7.00","add")),a.appendChild(g("Special Plates")),a.appendChild(b("Karaage Salad","$10.00","add")),a.appendChild(b("Kurobuta Katsu","$17.00","add")),a.appendChild(b("Chirashizushi (rice topped with assorted fish)","$22.50","add")),a.appendChild(g("Hot & Cold Drinks")),a.appendChild(b("Green Tea (served hot or cold)","$3.00","add")),a.appendChild(b("Ikigai Tea (special seasonal iced tea)","$5.00","add")),a.appendChild(b("Bottled Water","$1.50","add")),a.appendChild(b("Latte","$4.50","add")),e}()),e},C=()=>{const e=document.createElement("footer"),n=document.createElement("div");n.classList.add("footer-img"),n.classList.add("mb-medium");const t=document.createElement("img");t.src="https://i.ibb.co/QkSxXDf/12.png",t.alt="photo with sushi and rolls",n.appendChild(t);const a=document.createElement("div");a.classList.add("footer-text");const i=document.createElement("h2");i.innerHTML="Get in touch",a.appendChild(i);const d=document.createElement("div");d.classList.add("footer-text-column");const r=document.createElement("div");r.classList.add("footer-text-column"),e.appendChild(n);const o=document.createElement("p");o.innerHTML="856-948-1459";const s=document.createElement("p");s.innerHTML="hello@reallygreatsite.com";const c=document.createElement("h4");c.innerHTML="Phone number";const l=document.createElement("h4");return l.innerHTML="E-mail address",d.appendChild(c),d.appendChild(o),r.appendChild(l),r.appendChild(s),a.appendChild(d),a.appendChild(r),e.appendChild(a),e},L=()=>{const e=document.querySelector("#content");e.innerHTML="",e.appendChild(E()),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("about-main-info","mb-big");const n=document.createElement("div");n.classList.add("about-main-image"),e.appendChild(n);const t=document.createElement("img");t.src="https://i.ibb.co/MppbNDz/7.png",t.alt="photo of rolls and suchi",n.appendChild(t);const a=document.createElement("div");a.classList.add("about-text-info"),e.appendChild(a);const i=document.createElement("h4");i.classList.add("mb-medium"),i.innerHTML="Flavor is our purpose";const d=document.createElement("p");return d.classList.add("about-text-info-paragraph"),d.innerHTML="At Ikigai Sushi and Ramen, it is our mission to introduce you to our favorite flavors, using expert techniques and authentic Japanese ingredients.",a.append(i,d),e})())},E=()=>{const e=document.createElement("nav"),n=document.createElement("ul");e.classList.add("nav"),n.classList.add("navbar"),["Home","Menu","About","Contact"].map((e=>{const t=document.createElement("li");t.innerHTML=e,n.appendChild(t),"Contact"===e&&t.addEventListener("click",(()=>{(()=>{const e=document.querySelector("#content");e.innerHTML="",e.appendChild(E()),e.appendChild(C())})()})),"Home"===e&&t.addEventListener("click",(()=>{document.querySelector("#content").innerHTML="",x()})),"Menu"===e&&t.addEventListener("click",(()=>{document.querySelector("#content").innerHTML="",v()})),"About"===e&&t.addEventListener("click",(()=>{L()}))})),e.appendChild(n);const t=document.createElement("div"),a=document.createElement("img");t.appendChild(a),t.classList.add("basket-container"),a.src="https://i.ibb.co/HD4jQFT/basket.png";const i=document.createElement("div");return i.classList.add("basket-circle"),i.setAttribute("id","circle"),a.addEventListener("click",(()=>{(()=>{const e=document.querySelector("#content");e.innerHTML="",e.appendChild(E());const n=document.createElement("div");n.setAttribute("id","ordersTable");let t=0;const a=document.createElement("p");let i=document.createElement("button");i.classList.add("checkout-btn","animated-btn");const d=document.createElement("div");d.classList.add("checkout-sum-and-btn-container"),f.length>0?(f.map((e=>{n.append(b(e.itemName,e.price,"delete"));let a=e.price.substring(1);t+=parseFloat(a)})),a.innerHTML=`Total: $ ${t}`,a.classList.add("order-sum"),i.innerHTML="Confirm the order",d.appendChild(a),d.appendChild(i)):(a.innerHTML="The basket is empty :(",d.appendChild(a)),n.appendChild(d),i.addEventListener("click",(()=>{f.length=0,e.innerHTML="";let n=document.createElement("p");e.appendChild(E()),n.innerHTML="The order is confirmed. We will deliver it to you soon :)",e.appendChild(n)})),e.appendChild(n)})()})),i.innerHTML=f.length,t.appendChild(i),e.append(t),e},y=()=>{const e=document.createElement("div");return e.classList.add("about-container"),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("about-additional-info","mb-big");const n=document.createElement("h2");n.classList.add("mb-medium"),n.innerHTML="The finest Asian flavours";const t=document.createElement("div");return e.append(n,t),t.classList.add("about-additional-info-items"),t.appendChild(a("https://i.ibb.co/NZLffbq/8.png","Crafted by our master chefs")),t.appendChild(a("https://i.ibb.co/341GNq1/9.png","using the finest ingredients")),t.appendChild(a("https://i.ibb.co/2tnKbkg/10.png","Served with care and passion")),e;function a(e,n){const t=document.createElement("div");t.classList.add("about-additional-info-item","item-chefs");const a=document.createElement("img");a.src=e,a.classList.add("item-chefs-img");const i=document.createElement("p");return i.classList.add("about-additional-info-text"),i.innerHTML=n,t.append(a,i),t}})()),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("menu-container","mb-big");const n=document.createElement("div");n.classList.add("menu-container-items"),e.appendChild(n);const t=document.createElement("h2");t.classList.add("mb-medium"),t.innerHTML="Menu favourites",n.appendChild(t);const a=document.createElement("div");a.classList.add("row"),a.appendChild(l("tsukiji omakase","A platter of our handcrafted sushi selected especially by our chef")),a.appendChild(l("karaage salad","Our special fried chicken served with fresh salad greens")),n.appendChild(a);const i=document.createElement("div");i.classList.add("row"),i.appendChild(l("Ikigai oyakodon","The classic chicken and egg bowl served with an Ikigai twist")),i.appendChild(l("prawn tempura","Golden fried tiger prawns in the lightest crispy batter")),n.appendChild(i);const d=document.createElement("div");d.classList.add("row"),d.appendChild(l("kurobuta katsu","Breaded cutlets using the finest kurobuta pork from Japan")),d.appendChild(l("Tonkotsu ramen","Ramen made with pork broth that has been stewed for 16 hours")),n.appendChild(d);const r=document.createElement("div");r.classList.add("menu-btn-container","mt-medium");const o=document.createElement("button");o.classList.add("menu-btn","animated-btn"),o.innerHTML="view our full menu",o.addEventListener("click",(()=>{v()})),r.appendChild(o),n.appendChild(r);const s=document.createElement("div");s.classList.add("menu-container-image");const c=document.createElement("img");function l(e,n){const t=document.createElement("div");t.classList.add("column");const a=document.createElement("div");t.appendChild(a);const i=document.createElement("h5");i.innerHTML=e;const d=document.createElement("p");return d.innerHTML=n,a.appendChild(i),a.appendChild(d),t}return c.src="https://i.ibb.co/BGM0Cgv/11.png",c.alt="menu img",s.appendChild(c),e.appendChild(s),e})()),e},x=()=>{const e=document.querySelector("#content");e.appendChild(E()),e.appendChild((()=>{const e=document.createElement("header");e.classList.add("header-container");const n=document.createElement("div");n.classList.add("header-container-text"),n.classList.add("mb-medium");const t=document.createElement("h1");t.innerHTML="Ikigai Sushi and Ramen",t.classList.add("restaurant-name"),n.appendChild(t);const a=document.createElement("div");a.classList.add("header-address");const i=document.createElement("p");i.innerHTML="743 Freedom Lane Modesto, California, USA 12345",a.appendChild(i),n.appendChild(a);const d=document.createElement("img");return d.classList.add("header-main-image"),d.src="https://i.ibb.co/d2SGyQv/6.png",e.appendChild(n),e.appendChild(d),e})()),e.appendChild(y()),e.appendChild(C())};x()})()})();