(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["icodemage"],{"20f9":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"container is-fluid"},[e._m(0),i("div",{attrs:{id:"codemirror"}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],ref:"myeditor",domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}})]),i("div",[i("b-button",{attrs:{type:"is-info"},on:{click:e.beautify}},[e._v("美化")]),i("b-button",{attrs:{type:"is-info"},on:{click:e.cleanUp}},[e._v("净化")]),i("b-button",{attrs:{type:"is-info"},on:{click:e.mangle}},[e._v("混淆")]),i("b-button",{attrs:{type:"is-info"},on:{click:e.mangleAndCompress}},[e._v("混淆并压缩")])],1)])},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v(" JavaScript "),i("small",[e._v("美化 / 净化 / 混淆")])])])}],o=i("bf73"),r=i.n(o),s=i("230f"),c=i.n(s),u=i("e552"),l={name:"Js",data:function(){return{code:"这是一段JavaScript代码"}},mounted:function(){var e="text/javascript";this.editor=r.a.fromTextArea(this.$refs.myeditor,{mode:e,lineNumbers:!0,smartIndent:!0,lineWrapping:!0,tabSize:4})},methods:{beautify:function(){this.editor.setValue(u(this.editor.getValue()))},cleanUp:function(){var e={compress:!1,mangle:!1};this.editor.setValue(c.a.minify(this.editor.getValue(),e).code)},mangle:function(){var e={compress:!1};this.editor.setValue(c.a.minify(this.editor.getValue(),e).code)},mangleAndCompress:function(){this.editor.setValue(c.a.minify(this.editor.getValue()).code)}}},d=l,m=(i("2ac4"),i("2877")),f=Object(m["a"])(d,n,a,!1,null,null,null);t["default"]=f.exports},"2ac4":function(e,t,i){"use strict";var n=i("c2b1"),a=i.n(n);a.a},c2b1:function(e,t,i){}}]);