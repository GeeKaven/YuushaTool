<template>
  <section class="container is-fluid">
    <div>
      <h1>
        CSS
        <small>美化 / 优化 / 压缩</small>
      </h1>
    </div>
    <div id="codemirror">
      <textarea ref="myeditor" v-model="code"/>
    </div>
    <div>
      <b-button type="is-info" @click="beautify">美化</b-button>
      <b-button type="is-info" @click="minify(0)">压缩</b-button>
      <b-button type="is-info" @click="minify(1)">优化</b-button>
      <b-button type="is-info" @click="minify(2)">压缩</b-button>
    </div>
  </section>
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
