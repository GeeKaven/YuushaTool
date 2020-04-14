<template>
  <div class="mdui-center mdui-col-lg-10">
    <div class="mdui-typo">
      <h1>
        CSS
        <small>美化 / 净化 / 混淆</small>
      </h1>
    </div>
    <div id="codemirror" class="mdui-shadow-3 mdui-m-b-4">
      <textarea ref="myeditor" v-model="code"/>
    </div>
    <div>
      <button class="btn mdui-btn mdui-btn-raised mdui-ripple" v-on:click="beautify">美化</button>
      <button class="btn mdui-btn mdui-btn-raised mdui-ripple" v-on:click="cleanUp">净化</button>
      <button class="btn mdui-btn mdui-btn-raised mdui-ripple" v-on:click="mangle">混淆</button>
      <button class="btn mdui-btn mdui-btn-raised mdui-ripple" v-on:click="mangleAndCompress">
        混淆并压缩</button>
    </div>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css';
import Terser from 'terser';

const CodeMirror = require('codemirror/lib/codemirror');
const BeautifyJS = require('js-beautify');

require('codemirror/mode/javascript/javascript');

export default {
  name: 'Js',
  data() {
    return {
      code: '这是一段JavaScript代码',
    };
  },
  mounted() {
    const mime = 'text/javascript';
    this.editor = CodeMirror.fromTextArea(this.$refs.myeditor, {
      mode: mime,
      lineNumbers: true,
      smartIndent: true,
      lineWrapping: true,
      tabSize: 4,
    });
  },
  methods: {
    beautify() {
      this.editor.setValue(BeautifyJS(this.editor.getValue()));
    },
    cleanUp() {
      const options = { compress: false, mangle: false };
      this.editor.setValue(Terser.minify(this.editor.getValue(), options).code);
    },
    mangle() {
      const options = { compress: false };
      this.editor.setValue(Terser.minify(this.editor.getValue(), options).code);
    },
    mangleAndCompress() {
      this.editor.setValue(Terser.minify(this.editor.getValue()).code);
    },
  },
};
</script>

<style>
  .CodeMirror {
    height: 450px;
  }
  .btn {
    margin-right: 10px;
  }
</style>
