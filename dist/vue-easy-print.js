!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.VueEasyPrint=factory():root.VueEasyPrint=factory()}("undefined"!=typeof self?self:this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=1)}([function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={name:"vue-easy-print",components:{},props:{spaceRow:{type:Boolean,default:!1},tableData:{type:Object,default:function(){}},tableShow:{type:Boolean,default:!1},buttonShow:{type:Boolean,default:!1},buttonClass:{type:String,default:"el-button el-button--default"},onePageRow:{type:Number,default:5},beforeCopy:Function,beforePrint:Function},data:function(){return{}},mounted:function(){this.init()},methods:{init:function(){var _this=this,printI=document.getElementById("easyPrintIframe");printI?this.getStyle():(printI=document.createElement("iframe"),printI.id="easyPrintIframe",printI.style.position="fixed",printI.style.width="0",printI.style.height="0",printI.style.top="-100px",window.location.hostname!==document.domain&&navigator.userAgent.match(/msie/i)&&(printI.src='javascript:document.write("<head><script>document.domain=\\"'+document.domain+'\\";<\/script></head><body></body>")'),printI.onload=function(){_this.getStyle()},document.body.appendChild(printI))},print:function(){var _this2=this;"function"==typeof this.beforeCopy&&this.beforeCopy();var $iframe=document.getElementById("easyPrintIframe");this.$nextTick(function(){$iframe.contentDocument.body.innerHTML=_this2.$refs.template.innerHTML,"function"==typeof _this2.beforePrint&&_this2.beforePrint(),_this2.$nextTick(function(){setTimeout(function(){$iframe.contentWindow.print()},100)})})},getStyle:function(){for(var printI=document.getElementById("easyPrintIframe"),str="",styles1=document.querySelectorAll("style"),i=0;i<styles1.length;i++)str+=styles1[i].outerHTML;printI.contentDocument.head.innerHTML=str;for(var styles=document.querySelectorAll("link"),_i=0;_i<styles.length;_i++){var link=document.createElement("link");link.setAttribute("rel","stylesheet"),styles[_i].type?link.setAttribute("type",styles[_i].type):link.setAttribute("type","text/css"),link.setAttribute("href",styles[_i].href),link.setAttribute("media","all"),printI.contentDocument.head.appendChild(link)}},getChineseNumber:function(currencyDigits){var integral,decimal,outputCharacters,parts,digits,radices,bigRadices,decimals,zeroCount,i,p,d,quotient,modulus;if(void 0===currencyDigits)return"";if(""==(currencyDigits=currencyDigits.toString()))return"";if(null!=currencyDigits.match(/[^,.\d]/))return"";if(null==currencyDigits.match(/^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/))return"";if(currencyDigits=currencyDigits.replace(/,/g,""),currencyDigits=currencyDigits.replace(/^0+/,""),Number(currencyDigits)>99999999999.99)return alert("您输入的金额太大，请重新输入!"),"";if(parts=currencyDigits.split("."),parts.length>1?(integral=parts[0],decimal=parts[1],decimal=decimal.substr(0,2)):(integral=parts[0],decimal=""),digits=new Array("零","壹","贰","叁","肆","伍","陆","柒","捌","玖"),radices=new Array("","拾","佰","仟"),bigRadices=new Array("","万","亿"),decimals=new Array("角","分"),outputCharacters="",Number(integral)>0){for(zeroCount=0,i=0;i<integral.length;i++)p=integral.length-i-1,d=integral.substr(i,1),quotient=p/4,modulus=p%4,"0"==d?zeroCount++:(zeroCount>0&&(outputCharacters+=digits[0]),zeroCount=0,outputCharacters+=digits[Number(d)]+radices[modulus]),0==modulus&&zeroCount<4&&(outputCharacters+=bigRadices[quotient]);outputCharacters+="元"}if(""!=decimal)for(i=0;i<decimal.length;i++)"0"!=(d=decimal.substr(i,1))&&(outputCharacters+=digits[Number(d)]+decimals[i]);return""==outputCharacters&&(outputCharacters="零元"),""==decimal&&(outputCharacters+="整"),outputCharacters=""+outputCharacters}}}},function(module,exports,__webpack_require__){"use strict";function install(Vue){Vue.component(_vueEasyPrint2.default.name,_vueEasyPrint2.default)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.install=install;var _vueEasyPrint=__webpack_require__(2),_vueEasyPrint2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_vueEasyPrint);exports.default=_vueEasyPrint2.default},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_easy_print_vue__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2306433a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_easy_print_vue__=__webpack_require__(4),normalizeComponent=__webpack_require__(3),Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_easy_print_vue__.a,__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2306433a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_easy_print_vue__.a,!1,null,null,null);__webpack_exports__.default=Component.exports},function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,functionalTemplate,injectStyles,scopeId,moduleIdentifier){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns,options._compiled=!0),functionalTemplate&&(options.functional=!0),scopeId&&(options._scopeId=scopeId);var hook;if(moduleIdentifier?(hook=function(context){context=context||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,context||"undefined"==typeof __VUE_SSR_CONTEXT__||(context=__VUE_SSR_CONTEXT__),injectStyles&&injectStyles.call(this,context),context&&context._registeredComponents&&context._registeredComponents.add(moduleIdentifier)},options._ssrRegister=hook):injectStyles&&(hook=injectStyles),hook){var functional=options.functional,existing=functional?options.render:options.beforeCreate;functional?(options._injectStyles=hook,options.render=function(h,context){return hook.call(context),existing(h,context)}):options.beforeCreate=existing?[].concat(existing,hook):[hook]}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",[_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.tableShow,expression:"tableShow"}],ref:"template"},[_vm._t("default",function(){return[_c("span",[_vm._v("编写你自己的打印区域组件，然后slot插入到vue-easy-print")])]},{getChineseNumber:_vm.getChineseNumber})],2),_vm._v(" "),_vm.buttonShow?_c("button",{class:_vm.buttonClass,attrs:{type:"button"},on:{click:_vm.print}},[_c("span",[_vm._v("开始打印")])]):_vm._e()])},staticRenderFns=[],esExports={render:render,staticRenderFns:staticRenderFns};__webpack_exports__.a=esExports}])});