<template>
  <div class="mdui-center mdui-col-lg-10 clean-float">
    <div class="mdui-typo">
      <h1>
        CSS
        <small>美化 / 优化 / 压缩</small>
      </h1>
    </div>
    <div id="codemirror" class="mdui-shadow-3 mdui-m-b-4">
      <textarea ref="myeditor" v-model="code"/>
    </div>
    <div class="row-btn">
      <button class="mdui-btn mdui-btn-raised mdui-ripple" v-on:click="beautify">美化</button>
      <button class="mdui-btn mdui-btn-raised mdui-ripple" v-on:click="minify(0)">净化</button>
      <button class="mdui-btn mdui-btn-raised mdui-ripple" v-on:click="minify(1)">优化</button>
      <button class="mdui-btn mdui-btn-raised mdui-ripple" v-on:click="minify(2)">压缩</button>
    </div>
  </div>
</template>

<script>
import CodeMirror from 'codemirror';

const Minimize = require('minimize');
const BeautifyCSS = require('js-beautify').css;
const CleanCSS = require('clean-css');

export default {
  name: 'Css',
  data() {
    return {
      code: '这是一段CSS代码',
    };
  },
  mounted() {
    this.minimize = new Minimize();
    const mime = 'text/css';
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
      this.editor.setValue(BeautifyCSS(this.editor.getValue()));
    },
    minify(level) {
      const outPut = new CleanCSS({ level }).minify(this.editor.getValue());
      this.editor.setValue(outPut.styles);
    },
  },
};
</script>

<style>
  .CodeMirror {
    height: 450px;
  }
</style>
